/*
Navicat MariaDB Data Transfer

Source Server         : medbed
Source Server Version : 100412
Source Host           : corteks.net:63306
Source Database       : medbed_test

Target Server Type    : MariaDB
Target Server Version : 100412
File Encoding         : 65001

Date: 2020-03-21 16:40:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bed_request
-- ----------------------------
DROP TABLE IF EXISTS `bed_request`;
CREATE TABLE `bed_request` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `site_id` int(10) unsigned DEFAULT NULL,
  `status` enum('TODO','ACCEPTED','REFUSED','CANCELLED') DEFAULT 'TODO',
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_bed_request_site_id` (`site_id`),
  CONSTRAINT `fk_bed_request_site_id` FOREIGN KEY (`site_id`) REFERENCES `site` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for site
-- ----------------------------
DROP TABLE IF EXISTS `site`;
CREATE TABLE `site` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url_key` char(64) GENERATED ALWAYS AS (sha(concat(`name`,'Azertyuiop'))) VIRTUAL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for uf
-- ----------------------------
DROP TABLE IF EXISTS `uf`;
CREATE TABLE `uf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `site_id` int(10) unsigned DEFAULT NULL,
  `bed_other_total` int(10) unsigned DEFAULT 0,
  `bed_other_used` int(10) unsigned DEFAULT 0,
  `bed_other_available` int(10) unsigned GENERATED ALWAYS AS (`bed_other_total` - `bed_other_used`) VIRTUAL,
  `bed_covid_total` int(10) unsigned DEFAULT 0,
  `bed_covid_used` int(10) unsigned DEFAULT 0,
  `bed_covid_available` int(10) unsigned GENERATED ALWAYS AS (`bed_covid_total` - `bed_covid_used`) VIRTUAL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_uf_site_id` (`site_id`),
  CONSTRAINT `fk_uf_site_id` FOREIGN KEY (`site_id`) REFERENCES `site` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
