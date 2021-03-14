import React, { useState, useEffect } from "react";
import API from "./utils/API";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getRandomUsers().then((res) => {
      const randUsers = res.data.results;
      setEmployees([...randUsers]);
    });
  });

  return <div>Hello</div>;
}

export default App;
