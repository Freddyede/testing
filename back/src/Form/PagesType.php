<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\{SubmitType, TextareaType, TextType};
use Symfony\Component\Form\FormBuilderInterface;

class PagesType extends AbstractType {
    public function buildForm(FormBuilderInterface $builder, array $options) {
        $builder
            ->add('images',TextareaType::class, array(
                'label'=>'images: jpg,png,gif',
                'required' => false,
                'attr'=>array(
                    'class'=>'form-control'
                )
                ))
            ->add('content',TextareaType::class,array(
                'attr'=>array(
                    'class'=>'form-control'
                ),
            ))
            ->add('subContent',TextType::class,array(
                'attr'=>array(
                    'class'=>'form-control'
                ),
            ))
            ->add('titre',TextType::class,array(
                'attr'=>array(
                    'class'=>'form-control'
                )
            ))
            ->add('hyperLink',TextType::class,array(
                'attr'=>array(
                    'class'=>'form-control'
                )
            ))
            ->add('hyperLinkContent',TextType::class,array(
                'attr'=>array('class'=>'form-control')
            ))
            ->add('submit',SubmitType::class,array(
                'label'=>'Submit'
            ));
    }
}