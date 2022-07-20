import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import { useState } from "react";

const Body = ({ contact,  DeleteClick}) => {

  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.createdOn}</td>
      <td>{contact.owner}</td>
      <td><Link to={"secondtable/" + contact.id}>View</Link>
       <button onClick= {()=>DeleteClick(contact.id)}>Delete</button>
       </td>
    </tr>
  );
};
export default Body;
