<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Messages;
use App\Entity\Users;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Routing\Annotation\Route;

class MessagesApiController extends AbstractController {
    /**
     * @Route("/messages",name="return_all_messages", methods={"GET"})
     */
    public function getAllMessage(Request $request){
        $data = json_decode($request->getContent());
        $messages = $this->getDoctrine()->getRepository(Messages::class)->findAll();
        $Armessage = [];
        foreach ($messages as $message){
            $Armessage[] = array('content'=>$message->getContent(),'users'=>$this->getDoctrine()->getRepository(Users::class)->find($message->getUsers()));
        }
        return new Response($this->get('serializer')->serialize($Armessage,'json'));
    }
}