-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2024 at 09:24 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bento`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `account_id` int(11) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `balance` decimal(10,2) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `accountuser`
--

CREATE TABLE `accountuser` (
  `account_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `balance` decimal(10,2) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accountuser`
--

INSERT INTO `accountuser` (`account_id`, `name`, `balance`, `password`) VALUES
(1, 'nando', 100000.00, '$2b$10$.2eGOR70a7g7a19Z3aqVYuPTFO6qnQFCqOaJJQ6KtNqAG7CLT7cou');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`) VALUES
(1, 'Traditional Based'),
(2, 'Milk based'),
(3, 'Coffee Based'),
(4, 'Non Coffee');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `category_id`, `name`, `price`, `description`, `stock`, `photo`) VALUES
(1, 1, 'Air mineral', 5000.00, 'Air mineral dingin yang menyegarkan untuk menemani hari Anda.', 50, 'https://assets.klikindomaret.com/products/20094171/20094171_2.webp'),
(2, 1, 'Kopi tubruk', 10000.00, 'Kopi hitam klasik dengan rasa kuat dan aroma khas yang menggugah.', 50, 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/70/2023/11/02/ilustrasi-kopi-dok-jawapos-2039579915.jpg'),
(3, 1, 'Kopi susu', 12000.00, 'Kombinasi sempurna antara kopi dan susu untuk rasa yang lembut.', 50, 'https://assets-pergikuliner.com/r4qek3IN8-9OznPrJhATO4i9Xd0=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/2936756/picture-1686198428.jpg'),
(4, 2, 'Vanilla milk', 15000.00, 'Susu segar dengan rasa vanila yang manis dan creamy.', 50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakipXC8QA_xV0O7SmyL-qHLWvpjFbTwSxJQ&s'),
(5, 2, 'Mocha milk', 15000.00, 'Susu cokelat dengan sentuhan kopi untuk rasa mocha yang nikmat.', 50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakipXC8QA_xV0O7SmyL-qHLWvpjFbTwSxJQ&s'),
(6, 2, 'Caramel milk', 15000.00, 'Susu manis dengan rasa karamel yang kaya dan lezat.', 50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakipXC8QA_xV0O7SmyL-qHLWvpjFbTwSxJQ&s'),
(7, 3, 'Coffee vanilla', 18000.00, 'Kopi dengan rasa vanila yang lembut dan manis.', 50, 'https://online.anyflip.com/vncdb/ktao/files/large/fd5ac62ac2d9bc23c3196e2404f1937e.jpg?1689328493'),
(8, 3, 'Coffee mocha', 18000.00, 'Kopi dengan rasa cokelat yang kaya dan memanjakan lidah.', 50, 'https://online.anyflip.com/vncdb/ktao/files/large/fd5ac62ac2d9bc23c3196e2404f1937e.jpg?1689328493'),
(9, 3, 'Coffee latte', 20000.00, 'Kopi dengan campuran susu yang creamy dan nikmat.', 50, 'https://online.anyflip.com/vncdb/ktao/files/large/fd5ac62ac2d9bc23c3196e2404f1937e.jpg?1689328493'),
(10, 4, 'Taro', 17000.00, 'Minuman creamy dengan rasa taro yang lembut dan manis.', 50, 'https://images.tokopedia.net/img/cache/700/product-1/2020/7/23/50293572/50293572_3674b927-adbd-4084-98a1-c4e6951ba5f5_700_700'),
(11, 4, 'Red velvet', 17000.00, 'Minuman manis dengan rasa red velvet yang lezat dan creamy.', 50, 'https://lh7-us.googleusercontent.com/docsz/AD_4nXcGzl5K-9NSJEmgIpF44fIwjSFA2_Tk-MS8GqzHtMGygF3BtHtUnw1ROUw4lVCVTN8z0TquSH6LPfLNVwtmz3ycpnZNS-Ood-XHevzHixkqDXdKep12KPprujOmMy4fqijR3THi0uCtKC1BGHPtWCrvcoCk?key=1JmkenbEJ2j0pLu5-b_Bkw');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `payment_id` int(11) NOT NULL,
  `status` enum('in progress','completed') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `order_item_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `status` enum('in progress','completed') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `wallet_id` int(11) NOT NULL,
  `balance` decimal(10,2) NOT NULL,
  `username` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`wallet_id`, `balance`, `username`) VALUES
(1, 100000.00, 'nando');

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `payment_id` int(11) DEFAULT NULL,
  `balance` decimal(10,2) NOT NULL,
  `username` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`,`payment_id`),
  ADD UNIQUE KEY `idx_payment_id` (`payment_id`);

--
-- Indexes for table `accountuser`
--
ALTER TABLE `accountuser`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `payment_id` (`payment_id`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `menu_id` (`menu_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`wallet_id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD UNIQUE KEY `unique_payment_id` (`payment_id`),
  ADD UNIQUE KEY `unique_payment_id2` (`payment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `accountuser`
--
ALTER TABLE `accountuser`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `wallet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `wallet` (`payment_id`);

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`),
  ADD CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`),
  ADD CONSTRAINT `order_item_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
