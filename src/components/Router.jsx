
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SecondTable from "./secondpage/SecondTable.jsx";
import Table from "./Table.jsx";
const AppRouter = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/secondtable/:id" element={<SecondTable />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
