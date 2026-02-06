import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    list: publicProcedure.query(() => db.getAllProducts()),
    byCategory: publicProcedure
      .input(z.object({ category: z.string() }))
      .query(({ input }) => db.getProductsByCategory(input.category)),
    byId: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(({ input }) => db.getProductById(input.id)),
  }),

  orders: router({
    list: protectedProcedure.query(({ ctx }) => db.getUserOrders(ctx.user.id)),
    byId: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(({ input }) => db.getOrderById(input.id)),
    create: protectedProcedure
      .input(
        z.object({
          customizationNotes: z.string().optional(),
          shippingAddress: z.string(),
          items: z.array(
            z.object({
              productId: z.number(),
              quantity: z.number().min(1),
              customizationDetails: z.string().optional(),
            })
          ),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const totalPrice = await Promise.all(
          input.items.map(async (item) => {
            const product = await db.getProductById(item.productId);
            return product ? parseFloat(product.price.toString()) * item.quantity : 0;
          })
        ).then((prices) => prices.reduce((a, b) => a + b, 0));

        const order = await db.createOrder({
          userId: ctx.user.id,
          totalPrice: totalPrice.toString() as any,
          customizationNotes: input.customizationNotes,
          shippingAddress: input.shippingAddress,
        });

        // Create order items
        for (const item of input.items) {
          const product = await db.getProductById(item.productId);
          if (product) {
            await db.createOrderItem({
              orderId: (order as any).insertId,
              productId: item.productId,
              quantity: item.quantity,
              priceAtPurchase: product.price,
              customizationDetails: item.customizationDetails,
            });
          }
        }

        return order;
      }),
  }),

  testimonials: router({
    published: publicProcedure.query(() => db.getPublishedTestimonials()),
    userTestimonials: protectedProcedure.query(({ ctx }) =>
      db.getUserTestimonials(ctx.user.id)
    ),
    create: protectedProcedure
      .input(
        z.object({
          rating: z.number().min(1).max(5),
          content: z.string().min(10),
          orderId: z.number().optional(),
        })
      )
      .mutation(({ ctx, input }) =>
        db.createTestimonial({
          userId: ctx.user.id,
          rating: input.rating,
          content: input.content,
          orderId: input.orderId,
        })
      ),
  }),
});

export type AppRouter = typeof appRouter;
