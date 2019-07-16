<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190618210625 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE pages DROP class_titre, DROP class_button, DROP class_link, DROP other_class_button, CHANGE hyper_link_content hyper_link_content LONGTEXT NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE pages ADD class_titre VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD class_button VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, ADD class_link VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD other_class_button VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, CHANGE hyper_link_content hyper_link_content LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci');
    }
}
