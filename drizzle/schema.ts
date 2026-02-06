import { decimal, int, mysqlEnum, mysqlTable, text, timestamp, varchar, foreignKey } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Products table for storing crochet items
 */
export const products = mysqlTable("products", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category: varchar("category", { length: 100 }).notNull(), // accessories, home_decor, amigurumi, clothing
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  imageUrl: text("imageUrl"),
  isCustomizable: int("isCustomizable").default(1).notNull(), // 1 = true, 0 = false
  inStock: int("inStock").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;

/**
 * Orders table for tracking customer orders
 */
export const orders = mysqlTable("orders", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  status: mysqlEnum("status", ["pending", "confirmed", "in_progress", "completed", "cancelled"]).default("pending").notNull(),
  totalPrice: decimal("totalPrice", { precision: 10, scale: 2 }).notNull(),
  customizationNotes: text("customizationNotes"),
  shippingAddress: text("shippingAddress"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ([
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
  }),
]));

export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;

/**
 * Order items table for line items in each order
 */
export const orderItems = mysqlTable("orderItems", {
  id: int("id").autoincrement().primaryKey(),
  orderId: int("orderId").notNull(),
  productId: int("productId").notNull(),
  quantity: int("quantity").notNull().default(1),
  priceAtPurchase: decimal("priceAtPurchase", { precision: 10, scale: 2 }).notNull(),
  customizationDetails: text("customizationDetails"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ([
  foreignKey({
    columns: [table.orderId],
    foreignColumns: [orders.id],
  }),
  foreignKey({
    columns: [table.productId],
    foreignColumns: [products.id],
  }),
]));

export type OrderItem = typeof orderItems.$inferSelect;
export type InsertOrderItem = typeof orderItems.$inferInsert;

/**
 * Testimonials table for customer reviews
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  orderId: int("orderId"),
  rating: int("rating").notNull(), // 1-5 stars
  content: text("content").notNull(),
  isPublished: int("isPublished").default(0).notNull(), // 1 = true, 0 = false
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ([
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
  }),
  foreignKey({
    columns: [table.orderId],
    foreignColumns: [orders.id],
  }),
]));

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;