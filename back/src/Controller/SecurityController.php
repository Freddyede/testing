<?php

namespace App\Controller;

use App\Authentification\Token;
use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController {
    /**
     * @Route("/returnPassword/{id}", name="return_password",methods={"POST"})
     * @param $id
     * @return Response
     */
    public function returnPassword($id) {
        return new Response($this->get('serializer')
            ->serialize(base64_decode($this->getDoctrine()
            ->getRepository(Users::class)
            ->find($id)->getPassword()),'json'));
    }
    /**
     * @Route("/token", name="getToken", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function getToken(Request $request) {
        $data = json_decode($request->getContent());
        $user = $this->getDoctrine()->getRepository(Users::class)->findOneBy(
            ['mail'=>$data->mail]
        )->getId();
        $token = new Token();
        $token = [$token->getToken($user)];
        if ($this->getDoctrine()->getRepository(Users::class)->getPassword() === base64_encode($data->password)){
            return new Response($this->get('serializer')->serialize($token,'json'));
        }
        return new Response($this->get('serializer')->serialize(['Message erreur','Vous n\' êtes pas enregistrer en base de donnée'],'json'));
    }
    /**
     * @Route("login", name="login", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function login(Request $request) {
        $json_data = json_decode($request->getContent());
        $mail = $json_data->mail;
        $user = $this->getDoctrine()->getRepository(Users::class)->findOneBy(['mail'=>$mail])->getId();
        return new Response($this->get('serializer')->serialize($user,'json'));
    }
    /**
    * @Route("/registration", name="registration", methods={"POST"})
    * @param Request $request
    * @return Response
    */
    public function registration(Request $request) {
        $entityManager = $this->getDoctrine()->getManager();
        $json_data = json_decode($request->getContent());
        $name = $json_data->name;
        $username = $json_data->username;
        $mail = $json_data->mail;
        $password = password_hash($json_data->password, PASSWORD_ARGON2I);
        $user = new Users();
        $user->setName($name);
        $user->setUsername($username);
        $user->setMail($mail);
        $user->setPassword($password);
        $entityManager->persist($user);
        $entityManager->flush();
        return new Response($this->get('serializer')->serialize("Un nouveau utilisateur de créer",'json'));
    }
}