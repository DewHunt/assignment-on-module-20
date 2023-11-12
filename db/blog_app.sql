-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3308
-- Generation Time: Nov 12, 2023 at 06:55 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `img1` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img2` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img3` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img4` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `short_description`, `long_description`, `img1`, `img2`, `img3`, `img4`, `keywords`, `type`, `creared_at`, `updated_at`) VALUES
(1, 'Our Vission', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero ', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p>\n\n<p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', '', '', '', '', 'vission', '', '2023-10-30 21:28:58', NULL),
(2, 'Our Mission', 'Quisque nec turpis et leo accumsan iaculis. Nullam vel velit in nisi dictum consectetur non et massa. Fusce at gravida nisl.', '<p>Quisque nec turpis et leo accumsan iaculis. Nullam vel velit in nisi dictum consectetur non et massa. Fusce at gravida nisl. Nunc neque metus, sagittis quis cursus et, vehicula non velit. Aenean vel condimentum tortor, feugiat ullamcorper neque. Vestibulum et quam neque. Aenean nec volutpat ante, eu volutpat augue. Etiam quam sem, luctus vel ligula a, pellentesque finibus purus. Morbi feugiat venenatis scelerisque. Praesent sit amet accumsan ante. Nulla eu feugiat sem. Maecenas eu ante metus. Duis in accumsan lacus. Vivamus lacinia molestie molestie.</p>\r\n\r\n<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p>', '', '', '', '', 'mission', '', '2023-10-30 21:30:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `img1` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img2` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img3` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img4` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `category_id`, `title`, `short_description`, `long_description`, `img1`, `img2`, `img3`, `img4`, `keywords`, `type`, `creared_at`, `updated_at`) VALUES
(1, 1, 'Blog 00', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'helth', 'slider', '2023-11-04 12:58:03', NULL),
(2, 1, 'Blog 01', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'tech', 'slider', '2023-11-04 12:58:12', NULL),
(3, 2, 'Blog 02', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'tech', 'popular', '2023-11-05 11:56:27', '2023-11-05 11:56:27'),
(4, 1, 'Blog 03', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'health', 'featured', '2023-11-05 18:10:06', NULL),
(5, 1, 'Blog 05', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'health', 'popular', '2023-11-05 18:10:17', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `creared_at`, `updated_at`) VALUES
(1, 'Category 00', '2023-11-04 05:14:46', NULL),
(2, 'Category 01', '2023-11-04 05:14:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(10) UNSIGNED NOT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `address`, `email`, `phone`, `creared_at`, `updated_at`) VALUES
(1, 'Mirpur, Dhaka, Bangladesh', 'dew.fog1553@gmail.com', '+880 1317 243 494', '2023-10-30 21:50:54', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `img1` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img2` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img3` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img4` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `category_id`, `title`, `short_description`, `long_description`, `img1`, `img2`, `img3`, `img4`, `keywords`, `type`, `creared_at`, `updated_at`) VALUES
(1, 1, 'Service 00', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'health', 'slider', '2023-11-05 18:12:16', NULL),
(2, 2, 'Service 01', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'tech', 'featured', '2023-11-05 18:12:34', NULL),
(3, 2, 'Service 02', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis.</p>', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio. Aliquam porttitor dolor in libero convallis convallis. Phasellus blandit, velit id tempor laoreet, eros turpis vehicula eros, eget sagittis eros lacus ut velit. Nunc at diam maximus, faucibus nulla vel, bibendum arcu. Suspendisse sit amet est dictum, maximus ex non, eleifend velit. Phasellus blandit ultrices rutrum. Sed volutpat aliquam odio, vel ultrices orci consectetur a. Duis vitae arcu eu nisi molestie tincidunt vitae tristique velit. Etiam justo ipsum, maximus at elementum eget, interdum id dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis purus eget pulvinar suscipit. Ut eget blandit sem, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet lectus mattis, tempus risus sed, vestibulum odio.</p><p>Mauris consectetur libero mauris, id lobortis leo lacinia eleifend. Nulla tincidunt luctus nulla, interdum venenatis dui commodo ac. In rutrum magna velit, commodo facilisis ante vestibulum sit amet. Sed luctus aliquet quam nec rhoncus. Integer libero massa, vulputate ultricies metus vitae, suscipit bibendum leo. Aliquam molestie tellus felis, vitae pulvinar diam consequat non. Aenean suscipit blandit facilisis.</p>', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'tech', 'popular', '2023-11-05 12:28:19', '2023-11-05 12:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `socials`
--

CREATE TABLE `socials` (
  `id` int(10) UNSIGNED NOT NULL,
  `facebook` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `twitter` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linkedin` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otp` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `creared_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `mobile`, `password`, `otp`, `creared_at`, `updated_at`) VALUES
(1, 'Dew', 'Hunt', 'dew.fog1553@gmail.com', '01317243494', '12345', '0', '2023-11-03 00:55:03', '2023-11-03 00:55:03');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('d198b2ec-af66-4fca-adab-0848b3a5504c', '1aa281e8288d0bdc30e475270b2e2ad8ba6d40772e961566a34eaf1532ded88f', '2023-10-30 20:34:56.460', '20231030203453_first_migration_for_blog_apps', NULL, NULL, '2023-10-30 20:34:53.742', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogs_category_id_fkey` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_key` (`name`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_category_id_fkey` (`category_id`);

--
-- Indexes for table `socials`
--
ALTER TABLE `socials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `socials`
--
ALTER TABLE `socials`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
