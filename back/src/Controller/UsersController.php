<?php


namespace App\Controller;


use App\Entity\Users;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api")
 */
class UsersController extends AbstractController {
    /**
     * @Route(
     *     name="api_users_post",
     *     path="/users",
     *     methods={"POST"},
     *     defaults={
     *         "_api_resource_class"=Users::class,
     *         "_api_collection_operation_name"="post"
     *     }
     * )
     * @param Users $data
     * @param UserPasswordEncoderInterface $encoder
     * @return Users
     */
    public function postAction(Users $data, UserPasswordEncoderInterface $encoder): Users
    {
        return $this->encodePassword($data, $encoder);
    }

    /**
     * @Route(
     *     name="api_users_put",
     *     path="/users/{id}",
     *     requirements={"id"="\d+"},
     *     methods={"PUT"},
     *     defaults={
     *         "_api_resource_class"=Users::class,
     *         "_api_item_operation_name"="put"
     *     }
     * )
     * @param Users $data
     * @param UserPasswordEncoderInterface $encoder
     * @return Users
     */
    public function putAction(Users $data, UserPasswordEncoderInterface $encoder): Users
    {
        return $this->encodePassword($data, $encoder);
    }
    protected function encodePassword(Users $data, UserPasswordEncoderInterface $encoder): Users
    {
        $encoded = $encoder->encodePassword($data, $data->getPassword());
        $data->setPassword($encoded);

        return $data;
    }
}