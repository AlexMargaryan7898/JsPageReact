import React, { useEffect, useState } from "react";
import "./SecondTable.css";
import SecondBody from "./SecondBody";
import { useParams } from "react-router-dom";
const SecondTable = () => {
  let { id } = useParams();

  const contacts = JSON.parse(localStorage.getItem("information"));
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (id && contacts) {
      const data = contacts?.find((contact) => contact.id === id);
      setUser(data);
    }
  }, [id, contacts]);

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
            </tr>
          </thead>
          <tbody>{user && <SecondBody contact={user} />}</tbody>
        </table>
      </form>
    </div>
  );
};

export default SecondTable;
