<?php

namespace App\Controller;

use App\Entity\Pages;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageApiController extends AbstractController {
    /**
     * @Route("/pages", methods={"GET"})
     */
    public function getPagesApi(){
        $pages = $this->getDoctrine()->getRepository(Pages::class)->findAll();
        $response = new Response($this->get('serializer')->serialize($pages,'json'));
        return $response;
    }
}