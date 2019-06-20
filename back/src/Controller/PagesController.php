<?php


namespace App\Controller;


use App\Entity\Pages;
use App\Form\PagesType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/utilisateur", name="back-office_")
 */
class PagesController extends AbstractController {
    private $titre = 'Pages';
    /**
     * @Route("/pages", name="pages_accueil")
     */
    public function indexPages(){
        return $this->render('pages/index.html.twig',array(
            'titre'=>$this->titre,
            'pages'=>$this->getDoctrine()->getRepository(Pages::class)->findAll(),
            'menuLeft'=>null
        ));
    }

    /**
     * @param $id
     * @param Request $request
     * @return RedirectResponse|Response
     * @Route("/page/modify/{id}", name="page_modify")
     */
    public function modificationPages($id,Request $request){
        $entityManager = $this->getDoctrine()->getManager();
        if($id != -1){
            $page = $this->getDoctrine()->getRepository(Pages::class)->find($id);
            $titre = 'Modification'.' '.$page->getTitre();
        }else{
            $titre = 'Création '.$this->titre;
            $page = new Pages();
        }
        $form = $this->createForm(PagesType::class,$page);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $page = $form->getData();
            $entityManager->persist($page);
            $entityManager->flush();
            return $this->redirectToRoute('back-office_pages_accueil');
        }
        return $this->render('pages/modify.html.twig',array(
            'titre'=>$titre,
            'page'=>$page,
            'form'=>$form->createView(),
            'menuLeft'=>null,
        ));
    }

    /**
     * @Route("/page/delete/{id}", name="page_delete")
     * @param $id
     * @return RedirectResponse
     */
    public function deletePage($id){
        $entityManager = $this->getDoctrine()->getManager();
        $product = $this->getDoctrine()->getRepository(Pages::class)->find($id);
        $entityManager->remove($product);
        $entityManager->flush();
        return $this->redirectToRoute('back-office_pages_accueil');
    }
}