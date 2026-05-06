-- CreateTable
CREATE TABLE `product` (
    `product_id` VARCHAR(191) NOT NULL,
    `product_name` VARCHAR(191) NOT NULL,
    `product_description` VARCHAR(191) NOT NULL,
    `display_price` DOUBLE NOT NULL,
    `discount_price` DOUBLE NOT NULL,
    `product_quantity` INTEGER NOT NULL,
    `product_stock` INTEGER NOT NULL,
    `product_image` VARCHAR(191) NOT NULL,
    `product_status` ENUM('AVAILABLE', 'UNAVAILABLE') NOT NULL DEFAULT 'AVAILABLE',
    `deleted_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
