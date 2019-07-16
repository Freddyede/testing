<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Routing\Annotation\Route;

class AuthentificationController extends AbstractController
{
    /**
    * @Route("/loginAdmin", name="back_office_login")
    */
    public function loginAdmin(AuthenticationUtils $auth) {
         // On récupère la dernière erreur d'authentification s'il yen a
         $error = $auth->getLastAuthenticationError();
         //On récupère le dernier identifiant utilisé pour une connexion
         $username = $auth->getLastUsername();
         //On les expose au template qui contient le formulaire de login
         return $this->render('authentification/login.html.twig', [
            'titre'=>'Login Admin',
            'menuLeft'=>false,
            'errors' => $error,
             'username' => $username
         ]);
 
    }
}
