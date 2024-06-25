package com.pfe.assafabankingapp.Repositories;

import com.pfe.assafabankingapp.Entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    Optional<Transaction> findById(Long id);
    // Additional query methods if needed
}
