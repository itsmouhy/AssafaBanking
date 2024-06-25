import React from "react";
import axios from "axios";
import base_url from "../api";
import "../style/send_money.css";
import { useLocation } from "react-router-dom";

function Transfer() {
    const [id, setId] = React.useState("");
    const [amount, setAmount] = React.useState("");

    const search = useLocation().search;
    const acc = new URLSearchParams(search).get("id");

    React.useEffect(() => {
        setId(acc || "");
    }, [acc]);

    function formHandler(e) {
        e.preventDefault();

        const transactionData = {
            account_Number: id,
            amount: parseInt(amount, 10) // Ensure amount is a number
        };

        axios
            .put(`${base_url}/transactions`, transactionData)
            .then((res) => {
                alert("Transaction Successful");
            })
            .catch((err) => {
                console.log("MONEY NOT SENT", err);
                alert("Transaction Failed: " + err.response.data.message);
            });

        console.log(transactionData);
    }

    return (
        <div id="send-money-container">
            <form autoComplete="off" id="send-money-form" onSubmit={formHandler}>
                <input
                    id="id"
                    type="number"
                    placeholder="Account number"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                    name="id"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    name="amount"
                />
                <button type="submit">Transfer</button>
            </form>
        </div>
    );
}

export default Transfer;
