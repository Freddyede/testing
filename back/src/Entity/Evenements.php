<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\EvenementsRepository")
 */
class Evenements
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $CTR;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $CTRU;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Pages")
     */
    private $Page;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $environnement;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCTR(): ?bool
    {
        return $this->CTR;
    }

    public function setCTR(?bool $CTR): self
    {
        $this->CTR = $CTR;

        return $this;
    }

    public function getCTRU(): ?bool
    {
        return $this->CTRU;
    }

    public function setCTRU(?bool $CTRU): self
    {
        $this->CTRU = $CTRU;

        return $this;
    }

    public function getPage(): ?Pages
    {
        return $this->Page;
    }

    public function setPage(?Pages $Page): self
    {
        $this->Page = $Page;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getEnvironnement(): ?string
    {
        return $this->environnement;
    }

    public function setEnvironnement(?string $environnement): self
    {
        $this->environnement = $environnement;

        return $this;
    }
}
