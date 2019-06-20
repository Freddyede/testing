<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BackOfficeController extends AbstractController
{
    private $directory = 'Back/';

    /**
             * @Route("/utilisateur", name="back_office")
    */
    public function index(){
        return $this->render($this->directory.'index.html.twig', [
            'titre' => null,
            'menuLeft'=>null
        ]);
    }
}
