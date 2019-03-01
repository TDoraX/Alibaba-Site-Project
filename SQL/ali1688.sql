-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2019-03-01 04:26:31
-- 服务器版本： 10.1.37-MariaDB
-- PHP 版本： 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `ali1688`
--

-- --------------------------------------------------------

--
-- 表的结构 `itemDetail`
--

CREATE TABLE `itemDetail` (
  `sid` tinyint(2) UNSIGNED NOT NULL,
  `img` varchar(100) NOT NULL COMMENT 'Url of the image',
  `title` varchar(50) NOT NULL COMMENT 'Title of the item',
  `price` float(8,2) UNSIGNED NOT NULL,
  `salenum` int(11) NOT NULL,
  `comment` int(7) UNSIGNED NOT NULL COMMENT 'Comment count',
  `shopid` int(3) UNSIGNED NOT NULL COMMENT 'Shop ID number',
  `pics` varchar(600) CHARACTER SET utf16 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `itemDetail`
--

INSERT INTO `itemDetail` (`sid`, `img`, `title`, `price`, `salenum`, `comment`, `shopid`, `pics`) VALUES
(1, 'https://cbu01.alicdn.com/img/ibank/2019/589/008/10385800985_698237852.jpg_220x220q75.jpg_.webp', '2-12 春季新款 高帮低帮情侣款休闲帆布鞋', 148.00, 2084, 6, 1, 'https://cbu01.alicdn.com/img/ibank/2019/589/008/10385800985_698237852.60x60.jpg'),
(2, 'https://cbu01.alicdn.com/img/ibank/2018/612/081/9639180216_1801144101.jpg_220x220q75.jpg_.webp', '现货1970s三星标女鞋川久保玲爱心联名高帮低帮男女帆布鞋150204C', 168.00, 38, 0, 2, 'https://cbu01.alicdn.com/img/ibank/2018/612/081/9639180216_1801144101.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/115/140/9687041511_1801144101.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/224/212/9665212422_1801144101.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/161/891/9639198161_1801144101.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/433/812/9665218334_1801144101.400x400.jpg'),
(3, 'https://cbu01.alicdn.com/img/ibank/2018/297/708/9189807792_683574336.jpg_220x220q75.jpg_.webp', '圣诞情人节装饰网红爆款手柄带杆带托发光闪灯LED18寸波波球批发', 4.61, 19664, 113, 3, 'https://cbu01.alicdn.com/img/ibank/2018/297/708/9189807792_683574336.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2017/436/741/7695147634_683574336.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2017/326/190/7707091623_683574336.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2017/225/096/7753690522_683574336.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/717/172/9138271717_683574336.400x400.jpg'),
(4, 'https://cbu01.alicdn.com/img/ibank/2019/338/801/10354108833_1644326949.jpg_220x220q75.jpg_.webp', '甜美可爱原创ins森系公主风手钏女兔子粉灰串珠手链复古手工手串', 9.60, 32, 0, 4, 'https://cbu01.alicdn.com/img/ibank/2019/338/801/10354108833_1644326949.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2019/256/764/10327467652_1644326949.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2019/553/014/10380410355_1644326949.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2019/647/104/10380401746_1644326949.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2019/846/921/10354129648_1644326949.400x400.jpg'),
(5, 'https://cbu01.alicdn.com/img/ibank/2018/409/951/9558159904_1371697687.jpg', '厂家直销新款温感电动硅胶洁面仪防水便携硅胶洗脸刷定制可贴牌', 139.00, 0, 0, 5, 'https://cbu01.alicdn.com/img/ibank/2018/323/055/9582550323_1371697687.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/379/051/9558150973_1371697687.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/304/814/9604418403_1371697687.400x400.jpg,https://cbu01.alicdn.com/img/ibank/2018/049/283/9604382940_1371697687.400x400.jpg'),
(6, 'https://cbu01.alicdn.com/img/ibank/2018/040/085/9819580040_249098651.400x400.jpg', '打包纸箱3-12号快递盒3层五层邮政纸盒批发定做纸箱子飞机盒纸箱', 0.14, 733215, 7864, 6, 'https://cbu01.alicdn.com/img/ibank/2018/040/085/9819580040_249098651.60x60.jpg'),
(7, 'https://cbu01.alicdn.com/img/ibank/2018/759/403/9464304957_405245767.400x400.jpg', '027现货2018年秋冬季新款经典时尚休闲简约百搭情侣卫衣', 90.00, 3, 0, 7, 'https://cbu01.alicdn.com/img/ibank/2018/400/641/9488146004_405245767.60x60.jpg,https://cbu01.alicdn.com/img/ibank/2018/581/131/9488131185_405245767.60x60.jpg'),
(8, 'https://cbu01.alicdn.com/img/ibank/2018/055/449/10183944550_877420566.400x400.jpg', '喷钱枪Supreme Money Gun美金枪 喷钱枪玩具射钱 钞票枪 玩具枪', 18.20, 171, 49, 8, 'https://cbu01.alicdn.com/img/ibank/2017/306/473/4673374603_877420566.60x60.jpg,https://cbu01.alicdn.com/img/ibank/2017/135/778/4672877531_877420566.60x60.jpg'),
(9, 'https://cbu01.alicdn.com/img/ibank/2018/855/231/8940132558_1396424131.400x400.jpg', '信封黄色牛皮纸信封 工资袋 增值税发票信封白色信封定制定做', 0.01, 1400701, 727, 9, 'https://cbu01.alicdn.com/img/ibank/2018/855/231/8940132558_1396424131.60x60.jpg,https://cbu01.alicdn.com/img/ibank/2018/685/921/8940129586_1396424131.60x60.jpg'),
(10, 'https://cbu01.alicdn.com/img/ibank/2019/406/714/10425417604_115409117.400x400.jpg', '【明星同款】超人气单品 韩版百搭遮阳帽 LH棒球帽鸭舌帽', 25.00, 30, 0, 10, 'https://cbu01.alicdn.com/img/ibank/2019/042/744/10425447240_115409117.60x60.jpg'),
(11, 'https://cbu01.alicdn.com/img/ibank/2019/329/954/10425459923_115409117.400x400.jpg', '【一件包邮 明星同款】韩版原宿风格 明星单品LIVE棒球帽鸭舌帽', 25.00, 46, 0, 10, 'https://cbu01.alicdn.com/img/ibank/2019/275/319/10477913572_115409117.60x60.jpg,'),
(12, 'https://cbu01.alicdn.com/img/ibank/2019/023/374/10381473320_115409117.400x400.jpg', '【抖音爆款】 遇水开花雨伞 晴雨两用遮阳伞', 50.00, 225, 0, 10, 'https://cbu01.alicdn.com/img/ibank/2019/023/374/10381473320_115409117.60x60.jpg,https://cbu01.alicdn.com/img/ibank/2019/101/284/10381482101_115409117.60x60.jpg,https://cbu01.alicdn.com/img/ibank/2019/495/134/10434431594_115409117.60x60.jpg'),
(13, 'https://cbu01.alicdn.com/img/ibank/2019/259/065/10381560952_115409117.400x400.jpg', '【网红爆款】【】chic 韩版百搭双面戴盆帽 两面渔夫帽', 42.00, 189, 2, 10, 'https://cbu01.alicdn.com/img/ibank/2019/259/065/10381560952_115409117.60x60.jpg,https://cbu01.alicdn.com/img/ibank/2019/362/135/10408531263_115409117.60x60.jpg');

--
-- 转储表的索引
--

--
-- 表的索引 `itemDetail`
--
ALTER TABLE `itemDetail`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `sid` (`sid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `itemDetail`
--
ALTER TABLE `itemDetail`
  MODIFY `sid` tinyint(2) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
