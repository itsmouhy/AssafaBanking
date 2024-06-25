package com.pfe.assafabankingapp.Repositories;

import com.pfe.assafabankingapp.Entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Additional query methods if needed
}
