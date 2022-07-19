import React from "react";
import { useState } from "react";
import Body from "./Body";
import data from "./mock-data.json";
const Table = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <div className="Table">
      <form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>CreatedOn</th>
              <th>Owner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Body contact={contact} />
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
