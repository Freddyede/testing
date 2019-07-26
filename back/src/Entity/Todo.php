<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\TodoRepository")
 */
class Todo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $tasks;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Users", inversedBy="todos")
     */
    private $idUser;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getTasks(): ?string
    {
        return $this->tasks;
    }

    /**
     * @param string $tasks
     * @return Todo
     */
    public function setTasks(string $tasks): self
    {
        $this->tasks = $tasks;

        return $this;
    }

    /**
     * @return Users|null
     */
    public function getIdUser(): ?Users
    {
        return $this->idUser;
    }

    /**
     * @param Users|null $idUser
     * @return Todo
     */
    public function setIdUser(?Users $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }
}
