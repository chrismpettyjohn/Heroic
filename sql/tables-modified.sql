/*
 Navicat Premium Data Transfer

 Source Server         : Localhost Server
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : habbo

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 22/08/2018 15:00:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for heroic_articles
-- ----------------------------
DROP TABLE IF EXISTS `heroic_articles`;
CREATE TABLE `heroic_articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `title` varchar(25) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `content` text,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of heroic_articles
-- ----------------------------
BEGIN;
INSERT INTO `heroic_articles` VALUES (1, 1, 1, 'Habbo in Tokyo!', 'lpromo_gen15_34', 'It\'s August, and we\'re taking you all on a trip to Tokyo. Belt up!', 'HABBO GOES TO TOKYO\nJapan. Land of the rising sun, anime, cats and ridiculously good food. And a whole lot more of course, which is what we are going to try and show this month. As well as a bunch of new crafting recipes for Japanese style clothing, there is a brand new Toyko-inspired furni line, some old favourites from the back catalogue, a selection of bundles, rares AND a new LTD we\'re positive you\'re all going to go crazy for.', 1530712134);
COMMIT;

-- ----------------------------
-- Table structure for heroic_categories
-- ----------------------------
DROP TABLE IF EXISTS `heroic_categories`;
CREATE TABLE `heroic_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(25) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of heroic_categories
-- ----------------------------
BEGIN;
INSERT INTO `heroic_categories` VALUES (1, 'Campaigns & Activities', NULL);
COMMIT;

-- ----------------------------
-- Table structure for heroic_settings
-- ----------------------------
DROP TABLE IF EXISTS `heroic_settings`;
CREATE TABLE `heroic_settings` (
  `id` int(11) NOT NULL,
  `site.name` varchar(255) DEFAULT NULL,
  `site.link` varchar(255) DEFAULT NULL,
  `server.ip` varchar(255) DEFAULT NULL,
  `server.port` varchar(255) DEFAULT NULL,
  `swf.base` varchar(255) DEFAULT NULL,
  `swf.config` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user.motto` varchar(255) DEFAULT NULL,
  `user.look` varchar(255) DEFAULT NULL,
  `user.gender` varchar(255) DEFAULT NULL,
  `user.rank` int(11) DEFAULT NULL,
  `user.credits` int(11) DEFAULT NULL,
  `user.pixels` int(11) DEFAULT NULL,
  `user.points` int(11) DEFAULT NULL,
  `user.home` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of heroic_settings
-- ----------------------------
BEGIN;
INSERT INTO `heroic_settings` VALUES (1, 'Habbo', 'http://localhost:8090', '127.0.0.1', '3000', 'http://swfs.habfort.us/game/base', 'http://swfs.habfort.us/config', 'Heroic Beta!', 'ch-3185-110.hd-3103-19.sh-3089-1408.hr-125-61.lg-3057-110.he-8394-110.fa-1205-110', 'M', 1, 5000, 10000, 10, 1);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

/*
 Navicat Premium Data Transfer

 Source Server         : Localhost Server
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : habbo

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 22/08/2018 15:00:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rank_name` varchar(25) NOT NULL,
  `rank_desc` text,
  `rank_type` enum('user','vip','staff','hidden') CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'user',
  `level` int(2) NOT NULL DEFAULT '1',
  `room_effect` int(11) NOT NULL DEFAULT '0',
  `log_commands` enum('0','1') NOT NULL DEFAULT '0',
  `prefix` varchar(5) NOT NULL,
  `prefix_color` varchar(7) NOT NULL,
  `cmd_about` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_alert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_allow_trading` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_badge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_blockalert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_bots` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_bundle` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_calendar` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_changename` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_chatcolor` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_commands` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_connect_camera` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_control` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_coords` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_credits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_danceall` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_diagonal` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_disconnect` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_duckets` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ejectall` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_empty` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_empty_bots` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_empty_pets` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_enable` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_event` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_faceless` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_fastwalk` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_filterword` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_freeze` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_freeze_bots` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_gift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_give_rank` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_ha` enum('0','1') NOT NULL DEFAULT '0',
  `acc_can_stalk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hal` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_invisible` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_ip_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_machine_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hand_item` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_happyhour` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_hidewired` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_kickall` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_massbadge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_masscredits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massduckets` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_massgift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_masspoints` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_moonwalk` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_mimic` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_multi` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_mute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_pet_info` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_pickall` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_plugins` enum('0','1') NOT NULL DEFAULT '1',
  `cmd_points` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_promote_offer` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_pull` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_push` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_redeem` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_reload_room` enum('0','1','2') NOT NULL DEFAULT '2',
  `cmd_roomalert` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roomcredits` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roomeffect` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roomgift` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roomitem` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_roommute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roompixels` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_roompoints` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_say` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_say_all` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_setmax` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_set_poll` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_setpublic` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_setspeed` enum('0','1','2') NOT NULL DEFAULT '1',
  `cmd_shout` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_shout_all` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_shutdown` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_sitdown` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_staffalert` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_staffonline` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_summon` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_summonrank` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_super_ban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_stalk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_superpull` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_take_badge` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_talk` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_teleport` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_trash` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_transform` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_unban` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_unload` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_unmute` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_bots` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_catalogue` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_config` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_guildparts` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_hotel_view` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_items` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_navigator` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_permissions` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_pet_data` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_plugins` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_polls` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_texts` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_update_wordfilter` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_userinfo` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_word_quiz` enum('0','1','2') NOT NULL DEFAULT '0',
  `cmd_warp` enum('0','1') NOT NULL DEFAULT '0',
  `acc_anychatcolor` enum('0','1') NOT NULL DEFAULT '0',
  `acc_anyroomowner` enum('0','1') NOT NULL DEFAULT '0',
  `acc_empty_others` enum('0','1') NOT NULL DEFAULT '0',
  `acc_enable_others` enum('0','1') NOT NULL DEFAULT '0',
  `acc_see_whispers` enum('0','1') NOT NULL DEFAULT '0',
  `acc_superwired` enum('0','1') NOT NULL DEFAULT '0',
  `acc_supporttool` enum('0','1') NOT NULL DEFAULT '0',
  `acc_unkickable` enum('0','1') NOT NULL DEFAULT '0',
  `acc_guildgate` enum('0','1') NOT NULL DEFAULT '0',
  `acc_moverotate` enum('0','1') NOT NULL DEFAULT '0',
  `acc_placefurni` enum('0','1') NOT NULL DEFAULT '0',
  `acc_unlimited_bots` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT 'Overrides the bot restriction to the inventory and room.',
  `acc_unlimited_pets` enum('0','1','2') NOT NULL DEFAULT '0' COMMENT 'Overrides the pet restriction to the inventory and room.',
  `acc_hide_ip` enum('0','1') NOT NULL DEFAULT '0',
  `acc_not_mimiced` enum('0','1') NOT NULL DEFAULT '0',
  `acc_chat_no_flood` enum('0','1') NOT NULL DEFAULT '0',
  `acc_staff_chat` enum('0','1') NOT NULL DEFAULT '0',
  `acc_staff_pick` enum('0','1') NOT NULL DEFAULT '0',
  `acc_enteranyroom` enum('0','1') NOT NULL DEFAULT '0',
  `acc_fullrooms` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_credits` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_pixels` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_points` enum('0','1') NOT NULL DEFAULT '0',
  `acc_ambassador` enum('0','1') NOT NULL DEFAULT '0',
  `acc_debug` enum('0','1') NOT NULL DEFAULT '0',
  `acc_chat_no_limit` enum('0','1') NOT NULL DEFAULT '0' COMMENT 'People with this permission node are always heard and can see all chat in the room regarding of maximum hearing distance in the room settings (In game)',
  `acc_chat_no_filter` enum('0','1') NOT NULL DEFAULT '0',
  `acc_nomute` enum('0','1') NOT NULL DEFAULT '0',
  `acc_guild_admin` enum('0','1') NOT NULL DEFAULT '0',
  `acc_catalog_ids` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_ticket_q` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_logs` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_alert` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_kick` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_user_ban` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_room_info` enum('0','1') NOT NULL DEFAULT '0',
  `acc_modtool_room_logs` enum('0','1') NOT NULL DEFAULT '0',
  `acc_trade_anywhere` enum('0','1') NOT NULL DEFAULT '0',
  `acc_update_notifications` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_use_guide_tool` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_give_guide_tours` enum('0','1') NOT NULL DEFAULT '0',
  `acc_helper_judge_chat_reviews` enum('0','1') NOT NULL DEFAULT '0',
  `acc_floorplan_editor` enum('0','1') NOT NULL DEFAULT '0',
  `acc_camera` enum('0','1') NOT NULL DEFAULT '0',
  `cmd_wordquiz` enum('0','1','2') NOT NULL DEFAULT '0',
  `acc_room_staff_tags` enum('0','1') NOT NULL DEFAULT '0',
  `acc_infinite_friends` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
INSERT INTO `permissions` VALUES (1, 'Member', NULL, 'user', 1, 0, '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES (2, 'VIP', NULL, 'vip', 2, 0, '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES (3, 'Moderator', 'Ensures that the hotel is safe from scammers and worse.', 'staff', 6, 0, '0', '', '', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES (4, 'Manager', 'Handles higher tasks than mods such as bans.', 'staff', 7, 0, '0', '', '', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '2', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES (5, 'Founder', 'Makes important decisions and oversees everything\n\n', 'staff', 7, 0, '0', ' ', ' ', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '2', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO `permissions` VALUES (6, 'Hidden', NULL, 'hidden', 7, 0, '0', '  ', '  ', '1', '1', '0', '1', '1', '1', '1', '1', '0', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '0', '0', '0', '0', '0', '1', '1', '2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '2', '0', '0', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '1', '1', '1', '0', '1', '1', '0', '0', '1', '1', '1', '0', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
