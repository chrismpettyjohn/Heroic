import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1567216000284 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    // Create heroic_articles_categories
    await queryRunner.query("CREATE TABLE `heroic_articles_categories`  (\n" +
      "  `id` int(0) NOT NULL AUTO_INCREMENT,\n" +
      "  `title` varchar(255) NULL,\n" +
      "  `body` text NULL,\n" +
      "  `timestamp` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP,\n" +
      "  PRIMARY KEY (`id`),\n" +
      "  INDEX `heroic_articles_categories.id`(`id`),\n" +
      "  INDEX `heroic_articles_categories.title`(`title`)\n" +
      ");"
    );
    // Create heroic_articles
    await queryRunner.query("CREATE TABLE `heroic_articles`  (\n" +
      "  `id` int(0) NOT NULL AUTO_INCREMENT,\n" +
      "  `category_id` int(0) NOT NULL,\n" +
      "  `user_id` int(0) NOT NULL,\n" +
      "  `title` varchar(255) NOT NULL,\n" +
      "  `subheader` varchar(255) NOT NULL,\n" +
      "  `body` text NOT NULL,\n" +
      "  `img_small` varchar(255) NOT NULL,\n" +
      "  `img_large` varchar(255) NOT NULL,\n" +
      "  `timestamp` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,\n" +
      "  PRIMARY KEY (`id`),\n" +
      "  INDEX `heroic_articles.id`(`id`),\n" +
      "  INDEX `heroic_articles.category_id`(`category_id`),\n" +
      "  INDEX `heroic_articles.user_id`(`user_id`),\n" +
      "  INDEX `heroic_articles.title`(`title`),\n" +
      "  CONSTRAINT `heroic_articles.user_id` FOREIGN KEY (`user_id`) REFERENCES `morningstar`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE\n" +
      ");"
    );
    // Create foreign keys
    await queryRunner.query('ALTER TABLE `heroic_articles` \n' +
      'ADD CONSTRAINT `heroic_articles.category_id` FOREIGN KEY (`category_id`) REFERENCES `morningstar`.`heroic_articles_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;'
    );
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    // Drop heroic_articles_categories
    await queryRunner.query("DROP TABLE heroic_articles_categories")
    // Drop heroic_articles
    await queryRunner.query("DROP TABLE heroic_articles")
  }


}
