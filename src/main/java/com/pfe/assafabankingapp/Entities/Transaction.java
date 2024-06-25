package com.pfe.assafabankingapp.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long Account_Number;
    private String Account_Holder;
    private int Amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAccount_Number() {
        return Account_Number;
    }

    public void setAccount_Number(Long account_Number) {
        Account_Number = account_Number;
    }

    public String getAccount_Holder() {
        return Account_Holder;
    }

    public void setAccount_Holder(String account_Holder) {
        Account_Holder = account_Holder;
    }

    public int getAmount() {
        return Amount;
    }

    public void setAmount(int amount) {
        Amount = amount;
    }


}
