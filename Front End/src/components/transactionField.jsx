import React from "react";
import "../style/transactions.css"
function TransactionField(props){
    return (<tr>
   
        <td>{props.id}</td>
        <td>{props.account_Number}</td>
        <td>{props.account_Holder}</td>
        <td>د.م.{props.amount}</td>
 
    </tr>);
}

export default TransactionField;