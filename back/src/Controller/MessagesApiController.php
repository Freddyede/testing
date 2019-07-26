<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Messages;
use App\Entity\Users;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MessagesApiController extends AbstractController {

    /**
     * @Route("/messages", name="get_all_messages", methods={"GET"})
     * @return Response
     */
    public function getAllMessage(){
        $messages = $this->getDoctrine()->getRepository(Messages::class)->findAll();
        $array_message = [];
        foreach ($messages as $message){
            $array_message[] = array('content'=>$message->getContent(),'users'=>$message->getUsers());
        }
        return new Response($this->get('serializer')->serialize($array_message,'json'));
    }

    /**
     * @Route("/post/message", name="post_one_message", methods={"POST"})
     * @param Request $request
     * @return Response
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