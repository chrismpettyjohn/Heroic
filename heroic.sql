/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MariaDB
 Source Server Version : 100313
 Source Host           : localhost:3306
 Source Schema         : heroic

 Target Server Type    : MariaDB
 Target Server Version : 100313
 File Encoding         : 65001

 Date: 21/08/2019 19:40:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for heroic_settings
-- ----------------------------
DROP TABLE IF EXISTS `heroic_settings`;
CREATE TABLE `heroic_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site.name` varchar(255) DEFAULT 'Habbo',
  `site.link` varchar(255) DEFAULT 'http://localhost',
  `server.ip` varchar(255) DEFAULT '127.0.0.1',
  `server.port` int(11) DEFAULT 3306,
  `license.user` varchar(255) DEFAULT NULL,
  `swf.base` varchar(255) DEFAULT 'http://localhost/game/base',
  `swf.config` varchar(255) DEFAULT 'http://localhost/config',
  `user.motto` varchar(255) DEFAULT 'We love Chris',
  `user.look` varchar(255) DEFAULT 'ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110',
  `user.gender` varchar(3) DEFAULT 'M',
  `user.rank` int(2) DEFAULT 1,
  `user.credits` int(11) DEFAULT 5000,
  `user.pixels` int(11) DEFAULT 5000,
  `user.points` int(11) DEFAULT 5000,
  `user.home` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

ALTER TABLE `permissions`
ADD COLUMN `rank_desc` varchar(255) NULL AFTER `rank_name`,
ADD COLUMN `rank_badge` varchar(255) NULL AFTER `rank_desc`,
ADD COLUMN `rank_type` enum('user','vip','staff','hidden') NULL DEFAULT 'user' AFTER `rank_badge`;

-- ----------------------------
-- Records of heroic_settings
-- ----------------------------
BEGIN;
INSERT INTO `heroic_settings` VALUES (1, 'HabFort', 'https://habfort.us', '35.224.60.8', 3000, 'Chris', 'https://swfs.habfort.us/game/base', 'https://swfs.habfort.us/config', 'We love Chris', 'ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110', 'M', 1, 500, 500, 0, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
