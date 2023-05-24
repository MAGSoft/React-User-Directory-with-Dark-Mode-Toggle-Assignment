import React, { useState, useEffect } from "react";
import axios from "axios";

// Please read the problems stated in the "Problem-statement" folder carefully before starting to work on this project. 
// It is important to understand the requirements and evaluation criteria of each problem before proceeding with the implementation. 

const SortableTable = () => {
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data);
    });
  }, []);

  const onSort = (key) => {
    // TODO: Implement sort functionality
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSort("id")}>ID</th>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("completed")}>Completed</th>
          {/* // TODO: Add more columns here */}
        </tr>
      </thead>
      <tbody>
        {/* // TODO: Render table rows here */}
      </tbody>
    </table>
  );
};

export default SortableTable;
