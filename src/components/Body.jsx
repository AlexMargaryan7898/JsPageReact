import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";

const Body = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.createdOn}</td>
      <td>{contact.owner}</td>
      <td><Link to={"secondtable/" + contact.id}>View</Link></td>
    </tr>
  );
};

export default Body;
