-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `mobile` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `otp` VARCHAR(10) NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socials` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `facebook` VARCHAR(200) NOT NULL,
    `youtube` VARCHAR(200) NOT NULL,
    `twitter` VARCHAR(200) NOT NULL,
    `linkedin` VARCHAR(200) NOT NULL,
    `about` TEXT NOT NULL,
    `address` TEXT NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `about` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `short_description` VARCHAR(400) NOT NULL,
    `long_description` LONGTEXT NOT NULL,
    `img1` VARCHAR(300) NOT NULL,
    `img2` VARCHAR(300) NOT NULL,
    `img3` VARCHAR(300) NOT NULL,
    `img4` VARCHAR(300) NOT NULL,
    `keywords` VARCHAR(300) NOT NULL,
    `type` VARCHAR(200) NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `short_description` VARCHAR(400) NOT NULL,
    `long_description` LONGTEXT NOT NULL,
    `img1` VARCHAR(300) NOT NULL,
    `img2` VARCHAR(300) NOT NULL,
    `img3` VARCHAR(300) NOT NULL,
    `img4` VARCHAR(300) NOT NULL,
    `keywords` VARCHAR(300) NOT NULL,
    `type` VARCHAR(200) NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER UNSIGNED NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `short_description` VARCHAR(400) NOT NULL,
    `long_description` LONGTEXT NOT NULL,
    `img1` VARCHAR(300) NOT NULL,
    `img2` VARCHAR(300) NOT NULL,
    `img3` VARCHAR(300) NOT NULL,
    `img4` VARCHAR(300) NOT NULL,
    `keywords` VARCHAR(300) NOT NULL,
    `type` VARCHAR(200) NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacts` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `address` LONGTEXT NOT NULL,
    `email` VARCHAR(300) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `creared_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blogs` ADD CONSTRAINT `blogs_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
