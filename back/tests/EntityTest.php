<?php

namespace App\Tests;

use App\Entity\Messages;
use App\Entity\Pages;
use App\Entity\Users;
use PHPUnit\Framework\TestCase;

class EntityTest extends TestCase
{
    public function testPagesEntity() {
        $page = new Pages();
        $page->setHyperLinkContent('Je suis un contenu d\'hyperLink');
        $page->setHyperLink('Je suis un hyperLink');
        $page->setContent('Je suis du contenu');
        $page->setImages('Je suis une image');
        $page->setSubContent('Je suis le contenu de la page');
        $page->setTitre('Je suis le titre de la page');
        $this->assertEquals($page->getHyperLinkContent(),'Je suis un contenu d\'hyperLink');
        $this->assertEquals($page->getHyperLink(), 'Je suis un hyperLink');
        $this->assertEquals($page->getContent(), 'Je suis du contenu');
        $this->assertNotEquals($page->getImages(),'Je suis une images');
        $this->assertEquals($page->getSubContent(), 'Je suis le contenu de la page');
        $this->assertEquals($page->getTitre(), 'Je suis le titre de la page');
    }

    public function testMessages(){
        $message = new Messages();
        $message->setContent('Coucou je suis un dieu');
        $message->setUsers(new Users());
        $this->assertEquals($message->getContent(),'Coucou je suis un dieu');
        $this->assertEquals($message->getUsers(), new Users());
    }
}
