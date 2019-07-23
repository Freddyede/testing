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
            $Armessage[] = array('content'=>$message->getContent(),'users'=>$message->getUsers());
        }
        return new Response($this->get('serializer')->serialize($Armessage,'json'));
    }
    /**
     * @Route("/post/message", name="post_one_message", methods={"POST"})
    */
    public function postMessages(Request $request) {
        $em = $this->getDoctrine()->getEntityManager();
        $obj_front = json_decode($request->getContent());
        $user = $this->getDoctrine()->getRepository(Users::class)->find($obj_front->users);
        $contentMessage = $obj_front->content;
        var_dump($contentMessage);
        $message = new Messages();
        $message->setContent($contentMessage)
            ->setUsers($user);
        $em->persist($message);
        $em->flush();
        return new Response('',
        Response::HTTP_OK,
        ['content-type' => 'application/json','Authorization'=>$obj_front->token]);
    }
}