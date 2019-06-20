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
     * @Route("/login", name="login", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function login(Request $request) {
        $data = json_decode($request->getContent());
        $mail = $data->mail;
        $user = $this->getDoctrine()->getRepository(Users::class)->findOneBy(
            ['mail'=>$mail]
        );
        $response = new Response($this->get('serializer')->serialize($user,'json'));
        $pass = $data->password;
        if ($user->getPassword() === base64_encode($pass)){
            return $response;
        }
        return new Response($this->get('serializer')->serialize('{status:500}','json'));
    }
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
        $token = [$token->getToken(), $user];
        return new Response($this->get('serializer')->serialize($token,'json'));
    }
}