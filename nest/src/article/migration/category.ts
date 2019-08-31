import {MigrationInterface, QueryRunner} from "typeorm";

export class Category1567216000284 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    // Create heroic_articles_categories
    await queryRunner.query('' +
      'CREATE TABLE `heroic_articles_categories`  (\n' +
      '  `id` int(0) NOT NULL AUTO_INCREMENT,\n' +
      '  `title` varchar(255) NULL,\n' +
      '  `content` text NULL,\n' +
      '  `timestamp` timestamp(0) NULL,\n' +
      '  PRIMARY KEY (`id`)\n' +
      ');');
    // Create heroic_articles
    await queryRunner.query('' +
      'CREATE TABLE `heroic_articles`  (\n' +
      '  `id` int(0) NULL,\n' +
      '  `category_id` int(0) NULL,\n' +
      '  `user_id` int(0) NULL,\n' +
      '  `image_large` varchar(255) NULL,\n' +
      '  `image_small` varchar(255) NULL,\n' +
      '  `title` varchar(255) NULL,\n' +
      '  `description` varchar(255) NULL,\n' +
      '  `content` text NULL,\n' +
      '  `timestamp` timestamp(0) NULL,\n' +
      '  INDEX `Article ID`(`id`),\n' +
      '  INDEX `Article Category`(`category_id`),\n' +
      '  INDEX `Article User`(`user_id`),\n' +
      '  CONSTRAINT `Heroic Category` FOREIGN KEY (`category_id`) REFERENCES `heroic_articles_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,\n' +
      '  CONSTRAINT `Heroic User` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE\n' +
      ');'
    );
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    // Drop heroic_articles_categories
    await queryRunner.query("DROP TABLE heroic_articles_categories")
    // Drop heroic_articles
    await queryRunner.query("DROP TABLE heroic_articles")
  }


}
