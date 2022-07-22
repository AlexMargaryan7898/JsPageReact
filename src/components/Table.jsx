import React, { useEffect } from "react";
import { useState } from "react";
import Body from "./Body";
import data from "./mock-data.json";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
const Table = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    createdOn: "",
    owner: "",
  });
  const DeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = newContacts.filter((contact) => contact.id !== contactId);

    localStorage.setItem("information", JSON.stringify(index));
    setContacts(index);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      name: addFormData.name,
      createdOn: addFormData.createdOn,
      owner: addFormData.owner,
    };
    const newContacts = [...contacts, newContact];
    localStorage.setItem("information", JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  useEffect(() => {
    const a = localStorage.getItem("information");
    if (a) {
      setContacts(JSON.parse(a));
    }
  }, []);
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
              <Body
                contacts={contacts}
                key={contact.id}
                contact={contact}
                DeleteClick={DeleteClick}
              />
            ))}
          </tbody>
        </table>
      </form>
      <h1>Add a Contact</h1>
      <form onSubmit={handleAddFormSubmit}>
        <Input
          type="number"
          name="id"
          required="required"
          placeholder="Enter id"
          onChange={handleAddFormChange}
        />
        <Input
          type="text"
          name="name"
          required="required"
          placeholder="Enter Name"
          onChange={handleAddFormChange}
        />
        <Input
          type="text"
          name="createdOn"
          required="required"
          placeholder="Date"
          onChange={handleAddFormChange}
        />
           <Input
          type="text"
          name="owner"
          required="required"
          placeholder="Owner Name"
          onChange={handleAddFormChange}
        />


        <button type="submit">Add</button>
      </form>
    </div>

  );
};

export default Table;
