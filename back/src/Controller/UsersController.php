<?php


namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UsersController extends AbstractController {
    /**
     * @Route("/login", name="loginUser", methods={"POST"})
    */
    public function login(Request $request) {
        if($this->getDoctrine()->getRepository(Users::class)->findBy(['mail'=>json_decode($request->getContent)->mail])){
            var_dump('oui');
        }else{
            var_dump('non');
        }
    }
}