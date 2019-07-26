<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Users;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;
class AuthController extends AbstractController
{
    /**
     * @Route("/register", name="register_user", methods={"POST"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder) {
        $data = json_decode($request->getContent());
        $em = $this->getDoctrine()->getManager();
        $name = $data->name;
        $username = $data->username;
        $mail = $data->mail;
        $password = $data->password;
        $user = new Users();
        $user->setName($name);
        $user->setUsername($username);
        $user->setMail($mail);
        $user->setPassword($encoder->encodePassword($user, $password));
        $em->persist($user);
        $em->flush();
    return new Response(sprintf('User %s successfully created', $user->getUsername()));
    }

    /**
     * @Route("/login", name="login_user", methods={"POST"})
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return Response
     */
    public function login(Request $request, UserPasswordEncoderInterface $encoder) {
        $data = json_decode($request->getContent());
        $userInBase = $this->getDoctrine()->getRepository(Users::class)->findOneBy(['mail'=>$data->mail]);
        if (!$encoder->encodePassword($userInBase,$data->password)){
            return null;
        }
        return new Response($this->get('serializer')->serialize($userInBase,'json'));
    }
}