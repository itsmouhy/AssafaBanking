import React from "react";
import axios from "axios";
import base_url from "../api";
import "../style/send_money.css";

function SendMoney({ id }) {
    const [transaction, setTransaction] = React.useState({
        account_Number: id,
        amount: 0
    });

    function formHandler(e) {
        e.preventDefault();
        axios.put(`${base_url}/transactions/${id}`, transaction)
            .then((res) => {
                alert("Transaction Successful");
            })
            .catch((err) => {
                console.log("MONEY NOT SENT", err);
            });
    }

    return (
        <div id="send-money-container">
            <form autoComplete="off" id="send-money-form" onSubmit={formHandler}>
                <input
                    onChange={(e) => {
                        setTransaction({ ...transaction, amount: parseInt(e.target.value, 10) });
                    }}
                    type="number"
                    placeholder="Amount"
                    required
                    name="amount"
                />
                <button type="submit">Transfer</button>
            </form>
        </div>
    );
}

export default SendMoney;
