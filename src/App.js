//dependencies
import React, { useState, useEffect } from "react";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  //set up useState variables
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  //set up useEffect to call API utility function on change, then update employees
  useEffect(() => {
    API.getRandomUsers().then((res) => {
      const randUsers = res.data.results;
      setEmployees([...randUsers]);
    });
  }, []);
  //function for when the input field of searchbar changes. It filters results by names that contain the searchbox value
  const handleSearchChange = (e) => {
    //take input of field
    const filterBy = e.target.value;
    console.log("filterby", filterBy);
    //filters where the target value exists
    const filtered = employees.filter((val) => {
      let values = Object.values(val).join("").toLowerCase();
      return values.indexOf(filterBy.toLowerCase()) !== -1;
    });
    //then it updates the filtered employee list
    setFilteredEmployees([...filtered]);
  };

  return (
    <div>
      <h1>Employee Directory</h1>
      {/* Search form takes in the handlesearch change function */}
      <SearchForm handleSearchChange={handleSearchChange} />
      {/* EmployeeTable takes in the filtered list of employees and renders them */}
      <EmployeeTable employeeList={filteredEmployees} />
    </div>
  );
}

export default App;
