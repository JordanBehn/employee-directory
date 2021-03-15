import React from "react";
//Takes in employeeList from App.js
function EmployeeTable({ employeeList }) {
  return (
    <div>
    {/* maps over all elements of the list, grabs and renders employee info */}
        {employeeList.map(({ picture, name, phone, email }) => {
          return (
            <div>
              <img src={picture.medium} />
              <p>
                Name: {name.first} {name.last}
              </p>
              <p>Phone Number: {phone}</p>
              <p>Email: <a href={"mailto:" + email}> {email} </a></p>
            </div>
          );
        })
      }
    </div>
  );
}

export default EmployeeTable;
