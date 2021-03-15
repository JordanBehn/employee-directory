import React from "react";

function EmployeeTable({ users }) {
  return (
    <div>
        {users.map(({ picture, name, phone, email }) => {
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
