<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Todo;
use App\Entity\Users;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TodosFrontOfficeController extends abstractController {
    /**
    * @Route("/getTodosByIdUsers/{id}", name="pages_front", methods={"GET"})
    */
    public function getTodosByIdUsers($id){
        $arrayData = null;
        $todo = $this->getDoctrine()->getRepository(Todo::class)->findBy(['idUser'=>$id]);
        $user = $this->getDoctrine()->getRepository(Users::class)->find($id);
        foreach ($todo as $value) {
            $arrayData[] = array('id'=>$value->getId(),'messages'=>$value->getTasks(),'users'=>$user);
        };
        return new Response($this->get('serializer')->serialize($arrayData,'json'));
    }
    /**
    * @Route("/todos/{id}", name="find_a_todo", methods={"GET"})
    */
    public function findBy($id){
        $todo = $this->getDoctrine()->getRepository(Todo::class)->find($id)->getTasks();
        return new Response($this->get('serializer')->serialize($todo,'json'));
    }
}