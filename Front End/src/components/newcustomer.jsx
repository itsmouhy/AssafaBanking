import React, { useState } from "react";
import axios from "axios";
import base_url from "../api";

import "../style/new.css";

function NewCustomer() {
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        balance: 0
    });

    const formHandler = (e) => {
        e.preventDefault();

        axios.post(`${base_url}/customers`, user)
            .then((res) => {
                console.log("Customer Added:", res.data);
                alert("Customer Added Successfully");
                setUser({
                    id: "",
                    name: "",
                    email: "",
                    mobile: "",
                    balance: 0
                });
            })
            .catch((err) => {
                console.error("Failed to add customer:", err);
                alert("Failed to add customer. Please try again later.");
            });
    };

    return (
        <div id="new">
            <form id="new-form" onSubmit={formHandler}>
                <input
                    onChange={(e) => setUser({ ...user, id: e.target.value })}
                    name="id" type="number" required placeholder="Account Number:"
                    value={user.id}
                />
                <input
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    placeholder="Name:" required name="name" type="text"
                    value={user.name}
                />
                <input
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email:" required name="email" type="text"
                    value={user.email}
                />
                <input
                    onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                    placeholder="Mobile:" required name="mobile" type="text"
                    value={user.mobile}
                />
                <input
                    onChange={(e) => setUser({ ...user, balance: e.target.value })}
                    placeholder="Balance:" required name="balance" type="number"
                    value={user.balance}
                />
                <button type="submit">Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    );
}

export default NewCustomer;
