<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\UsersRepository")
 */
class Users implements UserInterface {
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username;

    /**
     * @ORM\Column(type="text")
     */
    private $mail;

    /**
     * @ORM\Column(type="text")
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Messages", mappedBy="users")
     */
    private $message;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Todo", mappedBy="idUser")
     */
    private $todos;

    /**
     * Users constructor.
     */
    public function __construct()
    {
        $this->message = new ArrayCollection();
        $this->todos = new ArrayCollection();
    }

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
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getUsername(): ?string
    {
        return $this->username;
    }

    /**
     * @param string $username
     * @return $this
     */
    public function setUsername(string $username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getMail(): ?string
    {
        return $this->mail;
    }

    /**
     * @param string $mail
     * @return $this
     */
    public function setMail(string $mail)
    {
        $this->mail = $mail;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    /**
     * @param string $password
     * @return Users
     */
    public function setPassword(string $password): self
    {
        $this->password = $password;
        return $this;
    }

    /**
     * @return Collection|Messages[]
     */
    public function getMessage(): Collection
    {
        return $this->message;
    }

    /**
     * @param Messages $message
     * @return $this
     */
    public function addMessage(Messages $message)
    {
        if (!$this->message->contains($message)) {
            $this->message[] = $message;
            $message->setUsers($this);
        }

        return $this;
    }

    /**
     * @param Messages $message
     * @return $this
     */
    public function removeMessage(Messages $message)
    {
        if ($this->message->contains($message)) {
            $this->message->removeElement($message);
            // set the owning side to null (unless already changed)
            if ($message->getUsers() === $this) {
                $message->setUsers(null);
            }
        }

        return $this;
    }

    /**
     * @return array
     */
    public function getRoles(){
        return ["ROLE_USER"];
    }

    /**
     * @return string|void|null
     */
    public function getSalt(){ }

    public function eraseCredentials() { }

    /**
     * @return Collection|Todo[]
     */
    public function getTodos(): Collection
    {
        return $this->todos;
    }

    /**
     * @param Todo $todo
     * @return Users
     */
    public function addTodo(Todo $todo): self
    {
        if (!$this->todos->contains($todo)) {
            $this->todos[] = $todo;
            $todo->setIdUser($this);
        }

        return $this;
    }

    /**
     * @param Todo $todo
     * @return Users
     */
    public function removeTodo(Todo $todo): self
    {
        if ($this->todos->contains($todo)) {
            $this->todos->removeElement($todo);
            // set the owning side to null (unless already changed)
            if ($todo->getIdUser() === $this) {
                $todo->setIdUser(null);
            }
        }

        return $this;
    }
}