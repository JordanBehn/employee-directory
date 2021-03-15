//dependencies
import React, { useState, useEffect } from "react";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";

function App() {
  //set up useState variables
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  //set up useEffect to call API utility function on change, update employees
  useEffect(() => {
    API.getRandomUsers().then((res) => {
      const randUsers = res.data.results;
      setEmployees([...randUsers]);
    });
  }, []);

  const handleSearchChange = (e) => {
    const filterBy = e.target.value;
    console.log("filterby",filterBy)
    const filtered = employees.filter((val) => {
      let values = Object.values(val).join("").toLowerCase();
      return values.indexOf(filterBy.toLowerCase()) !== -1;
    });
    setFilteredEmployees([...filtered]);
    console.log("filtered", filtered);
  };

  return (
    <div>
      Hello
      <SearchForm handleSearchChange={handleSearchChange} />
    </div>
  );
}

export default App;
