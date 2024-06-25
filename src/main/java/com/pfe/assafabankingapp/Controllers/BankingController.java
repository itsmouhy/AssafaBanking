package com.pfe.assafabankingapp.Controllers;

import com.pfe.assafabankingapp.Entities.Customer;
import com.pfe.assafabankingapp.Entities.Transaction;
import com.pfe.assafabankingapp.Repositories.CustomerRepository;
import com.pfe.assafabankingapp.Repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Adjust as per your frontend URL
public class BankingController {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    // Get all customers
    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // Get a customer by ID
    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        return customer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add a new customer
    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @PatchMapping("/customers/{id}")
    public ResponseEntity<Customer> patchCustomer(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
        try {
            Optional<Customer> optionalCustomer = customerRepository.findById(id);
            if (optionalCustomer.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            Customer customer = optionalCustomer.get();
            updates.forEach((key, value) -> {
                switch (key) {
                    case "name":
                        customer.setName((String) value);
                        break;
                    case "email":
                        customer.setEmail((String) value);
                        break;
                    case "mobile":
                        customer.setMobile((String) value);
                        break;
                    case "balance":
                        customer.setBalance((Integer) value);
                        break;
                    default:
                        throw new IllegalArgumentException("Invalid field: " + key);
                }
            });

            Customer updatedCustomer = customerRepository.save(customer);
            return ResponseEntity.ok(updatedCustomer);
        } catch (Exception e) {
            // Log the exception for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }




    // Delete a customer
    @DeleteMapping("/customers/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        if (!customerRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        customerRepository.deleteById(id);
        return ResponseEntity.ok("Customer deleted successfully");
    }

    // Get all transaction history
    @GetMapping("/transactions")
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @PutMapping("/transactions")
    public ResponseEntity<String> updateBalanceAndAddTransaction(@Valid @RequestBody Transaction transaction) {
        Optional<Customer> optionalCustomer = customerRepository.findById(transaction.getAccount_Number());
        if (optionalCustomer.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Customer customer = optionalCustomer.get();
        customer.setBalance(customer.getBalance() + transaction.getAmount());
        customerRepository.save(customer);

        Transaction newTransaction = new Transaction();
        newTransaction.setAccount_Number(customer.getId());
        newTransaction.setAccount_Holder(customer.getName());
        newTransaction.setAmount(transaction.getAmount());
        transactionRepository.save(newTransaction);

        return ResponseEntity.ok("Transaction successful");
    }

}
