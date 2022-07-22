import React from "react";
import "./SecondBody.css";

const SecondBody = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.createdOn}</td>
      <td>{contact.owner}</td>
    </tr>
  );
};

export default SecondBody;
