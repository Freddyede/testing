<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Pages;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PagesFrontOfficeController extends abstractController {

    /**
     * @Route("/pages",name="return_all_messages", methods={"GET"})
     * @return Response
     */
    public function getAllPages(){
        $pages = $this->getDoctrine()->getRepository(Pages::class)->findAll();
        return new Response($this->get('serializer')->serialize($pages,'json'));
    }
}