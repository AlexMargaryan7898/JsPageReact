import React, { use } from "react";
import "./SecondTable.css";
import SecondBody from "./SecondBody";
import { useParams } from "react-router-dom";
import contacts from "../mock-data.json";


const SecondTable = () => {
  let { id } = useParams();
  const contact = contacts[id - 1];
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
          <tbody>
            <SecondBody contact={contact} />
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SecondTable;
