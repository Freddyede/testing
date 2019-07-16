<?php

namespace App\Controller;

use App\Entity\Messages;
use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class MessagesApiController extends AbstractController {
    /**
     * @Route("/messages",name="allMessages", methods={"GET"})
     */
    public function getAllMessages(){
        $messages = $this->getDoctrine()->getRepository(Messages::class)->findAll();
        $arrayMessages = [];
        $arrayMessagesData =  [];
        foreach($messages as $message){
            $arrayMessagesData[] = array(
                "id"=>$message->getId(),
                "usersId"=>$message->getUsers()->getId(),
                "dateEnvoi"=>$message->getCreatedAt()->format('d-m-Y H:i:s'),
                "name"=>$message->getUsers()->getName(),
                "username"=>$message->getUsers()->getUsername(),
                "mail"=>$message->getUsers()->getMail(),
                'message'=>$message->getContent()
            );
        }
        return new Response($this->get('serializer')->serialize(array("users"=>$arrayMessagesData), 'json'));
    }
    /**
     * @Route("/postMessages",name="post_message", methods={"POST"})
     */
    public function postMessages(Request $request){
        $em = $this->getDoctrine()->getEntityManager();
        $datas = json_decode($request->getContent()); 
        $users = $datas->users;
        $sendingMessage = false;
        $content = $datas->content;
        $data = [];
        $message = new Messages();
        if ($content) {
            $message->setUsers($this->getDoctrine()->getRepository(Users::class)->find($users))
                ->setContent($content)->setCreatedAt(new \DateTime());
            $em->persist($message);
            $em->flush();
            $sendingMessage = true;
        }
        if($sendingMessage){
            $data[] = 'sendMessage';
        }else{
            $data[] = 'not sendMessage';
        }
        return new Response($this->get('serializer')->serialize($data, 'json'));
    }
}