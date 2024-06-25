import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api";
import "../style/transactions.css";
import TransactionField from "./transactionField";

function TransactionHistory() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}/transactions`)
            .then(res => {
                setList(res.data);
            })
            .catch(err => {
                console.error("Error fetching transaction history:", err);
            });
    }, []);

    return (
        <div id="transactions">
            <h1>Transaction History</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Account Number</th>
                        <th>Account Holder</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <TransactionField
                            key={index}
                            id={item.id}
                            account_Number={item.account_Number}
                            account_Holder={item.account_Holder}
                            amount={item.amount}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionHistory;
