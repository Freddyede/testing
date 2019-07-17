<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Messages;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;
class MessagesApiController extends AbstractController {
    /**
     * @Route("/messages",name="return_all_messages", methods={"GET"})
     */
    public function getAllMessage(Request $request){
        $data = json_decode($request->getContent());
        var_dump($data);
        $messages = $this->getDoctrine()->getRepository(Messages::class)->findAll();
        return new Response($this->get('serializer')->serialize($messages,'json'));
    }
}