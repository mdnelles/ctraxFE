DROP TABLE IF EXISTS `logs`;
CREATE TABLE `bc24`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `userscol` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `admin` TINYINT NULL,
  `last_login` DATETIME NULL,
  `isDeleted` TINYINT NULL,
  `uuid` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));


DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(45) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  `fnction` varchar(45) DEFAULT NULL,
  `msg_programmer` varchar(255) DEFAULT NULL,
  `msg_app` varchar(255) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `refer` varchar(45) DEFAULT NULL,
  `tdate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;