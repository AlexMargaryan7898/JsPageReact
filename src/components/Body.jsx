import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";
import { Button } from "antd/lib/radio";

const Body = ({ contact, DeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.createdOn}</td>
      <td>{contact.owner}</td>
      <td>
        <Link to={"secondtable/" + contact.id}>View</Link>
        <Button type="primary " onClick={() => DeleteClick(contact.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default Body;
