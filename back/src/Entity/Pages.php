<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity()
 */
class Pages
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $images;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    /**
    * @ORM\Column(type="text", nullable=true)
    */
    private $hyperLink;

    /**
    * @ORM\Column(type="text")
    */
    private $hyperLinkContent;

    /**
    * @ORM\Column(type="string", length=255)
    */
    private $subContent;

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
    public function getImages(): ?string
    {
        return $this->images;
    }

    /**
     * @param string|null $images
     * @return Pages
     */
    public function setImages(?string $images): self
    {
        if (preg_match('/(gif|jpg|png)$/i',$images)){
            $this->images = $images;
        }else{
            $this->images = '';
        }

        return $this;
    }

    /**
     * @return string|null
     */
    public function getContent(): ?string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return Pages
     */
    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getTitre(): ?string
    {
        return $this->titre;
    }

    /**
     * @param string $titre
     * @return Pages
     */
    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getHyperLink(): ?string
    {
        return $this->hyperLink;
    }

    /**
     * @param string|null $hyperLink
     * @return Pages
     */
    public function setHyperLink(?string $hyperLink): self
    {
        $this->hyperLink = $hyperLink;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getHyperLinkContent(): ?string
    {
        return $this->hyperLinkContent;
    }

    /**
     * @param string $hyperLinkContent
     * @return Pages
     */
    public function setHyperLinkContent(string $hyperLinkContent): self
    {
        $this->hyperLinkContent = $hyperLinkContent;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSubContent(): ?string
    {
        return $this->subContent;
    }

    /**
     * @param string $subContent
     * @return Pages
     */
    public function setSubContent(string $subContent): self
    {
        $this->subContent = $subContent;

        return $this;
    }
}
