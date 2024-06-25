import React from "react";
import axios from "axios";
import base_url from "../api";
import { useLocation, Link } from "react-router-dom";
import "../style/edit.css";

function EditCustomer() {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    const [customer, setCustomer] = React.useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        balance: 0
    });

    React.useEffect(() => {
        getCustomer();
    }, []);

    function getCustomer() {
        axios.patch(`${base_url}/customers/${id}`, customer)
        .then((res) => {
            console.log(res.data);
            alert("Customer Updated");
        }).catch((err) => {
            console.log("DATA NOT SENT", err);
            alert("Failed to update customer");
        });
    
    }

    function formHandler(e) {
        e.preventDefault();

        axios.patch(`${base_url}/customers/${id}`, customer)
            .then((res) => {
                console.log(res.data);
                alert("Customer Updated");
            }).catch((err) => {
                console.log("DATA NOT SENT", err);
            });
    }

    return (
        <div id="edit">
            <form id="edit-form" onSubmit={formHandler}>
                <input 
                    name="id" 
                    type="number" 
                    placeholder="Account Number:" 
                    value={customer.id} 
                    readOnly 
                />
                <input 
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    placeholder="Name:" 
                    name="name" 
                    type="text" 
                    value={customer.name} 
                    required 
                />
                <input 
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    placeholder="Email:" 
                    name="email" 
                    type="email" 
                    value={customer.email} 
                    required 
                />
                <input 
                    onChange={(e) => setCustomer({ ...customer, mobile: e.target.value })}
                    placeholder="Mobile:" 
                    name="mobile" 
                    type="text" 
                    value={customer.mobile} 
                    required 
                />
                <input 
                    onChange={(e) => setCustomer({ ...customer, balance: parseInt(e.target.value) })}
                    placeholder="Balance:" 
                    name="balance" 
                    type="number" 
                    value={customer.balance} 
                    required 
                />
                <button type="submit">Update</button>
                <Link to="/view">
                    <button type="button">Cancel</button>
                </Link>
            </form>
        </div>
    );
}

export default EditCustomer;
