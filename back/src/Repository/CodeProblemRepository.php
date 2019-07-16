<?php

namespace App\Repository;

use App\Entity\CodeProblem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CodeProblem|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodeProblem|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodeProblem[]    findAll()
 * @method CodeProblem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodeProblemRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CodeProblem::class);
    }

    // /**
    //  * @return CodeProblem[] Returns an array of CodeProblem objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CodeProblem
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
