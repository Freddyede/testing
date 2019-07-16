<?php

namespace App\Controller;

use App\Entity\Pages;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PagesApiController extends AbstractController {

    /**
     * @Route("/pages",name="allPage", methods={"GET"})
     */
    public function pages(){
        return new Response($this->get('serializer')->serialize($this->getDoctrine()->getRepository(Pages::class)->findAll(), 'json'));
    }
    /**
     * @Route("/searchPages", name="searchPages", methods={"POST"})
    */
    public function searchPages(Request $request){
        $data = json_decode($request->getContent());
        $name = $data->name;
        
    }
}