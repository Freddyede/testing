<?php

namespace App\Controller;

use App\Entity\Todos;
use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class TodosApiController extends AbstractController {
    /**
     * @Route("/todos",name="post_todos", methods={"POST"})
     */
    public function postTodo(Request $request){
        $em = $this->getDoctrine()->getEntityManager();
        $datas = json_decode($request->getContent()); 
        $users = $datas->user;
        $sendingMessage = false;
        $content = $datas->tasks;
        $data = [];
        $todos = new Todos();
        if ($content) {
            $todos->setUser($this->getDoctrine()->getRepository(Users::class)->find($users))
                ->setTasks($content);
            $em->persist($todos);
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
    /**
     * @Route("/getTodos", name="get_todos", methods={"POST"})
    */
    public function getTodo(Request $request){
        $datas = json_decode($request->getContent());
        $todos = $this->getDoctrine()->getRepository(Todos::class)->findby(['user'=>$datas->user]);
        $arrayTodo = [];
        foreach ($todos as $value) {
            $arrayTodo[] = array("user"=>$value->getUser(),"tache"=>$value->getTasks(),"id"=>$value->getId());
        }
        return new Response($this->get('serializer')->serialize($arrayTodo,'json'));
    }
}