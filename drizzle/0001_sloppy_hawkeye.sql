CREATE TABLE `orderItems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`orderId` int NOT NULL,
	`productId` int NOT NULL,
	`quantity` int NOT NULL DEFAULT 1,
	`priceAtPurchase` decimal(10,2) NOT NULL,
	`customizationDetails` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `orderItems_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`status` enum('pending','confirmed','in_progress','completed','cancelled') NOT NULL DEFAULT 'pending',
	`totalPrice` decimal(10,2) NOT NULL,
	`customizationNotes` text,
	`shippingAddress` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`category` varchar(100) NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`imageUrl` text,
	`isCustomizable` int NOT NULL DEFAULT 1,
	`inStock` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`orderId` int,
	`rating` int NOT NULL,
	`content` text NOT NULL,
	`isPublished` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `orderItems` ADD CONSTRAINT `orderItems_orderId_orders_id_fk` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orderItems` ADD CONSTRAINT `orderItems_productId_products_id_fk` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orders` ADD CONSTRAINT `orders_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `testimonials` ADD CONSTRAINT `testimonials_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `testimonials` ADD CONSTRAINT `testimonials_orderId_orders_id_fk` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE no action ON UPDATE no action;