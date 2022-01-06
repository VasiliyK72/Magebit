-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Янв 06 2022 г., 02:04
-- Версия сервера: 5.6.51-cll-lve
-- Версия PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `catfish_magebit`
--

-- --------------------------------------------------------

--
-- Структура таблицы `subscribing`
--

CREATE TABLE `subscribing` (
  `id` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `subscribing`
--

INSERT INTO `subscribing` (`id`, `time`, `datetime`, `email`) VALUES
(1, 1641318976, '2022-01-04 19:56:16', 'info@ras.lv'),
(9, 1641425597, '2022-01-06 01:33:17', 'info@gmail.com'),
(3, 1641320336, '2022-01-04 20:18:56', 'info2@ras.com'),
(6, 1641411667, '2022-01-05 21:41:07', 'akvaferma@gmail.com'),
(8, 1641411734, '2022-01-05 21:42:14', 'info4@ras.lv'),
(10, 1641425659, '2022-01-06 01:34:19', 'info2@ras.lv');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `subscribing`
--
ALTER TABLE `subscribing`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `subscribing`
--
ALTER TABLE `subscribing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
