import React, { useState } from "react";

const Fetch = () => {
  const [user, setUser] = useState();

  

  function fetchData() {
    // API endpoint URL
    const apiUrl = "https://reqres.in/api/users";

    fetch(apiUrl)
      .then((response) => response.json()) // Add return statement here
      .then((data) =>
      // console.log(data.data),
      setUser(data.data)
      
      
      )
      .catch(
        (error) => 
        console.error("Error fetching data:", error)
      ); // Add error handling
      console.log(user)
  }

  return (
    <div>
      <button onClick={fetchData} className="btn">
        Get User List
      </button>
      <table >
        
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        
          <tbody>
            {
              user==undefined && 
              <tr>
                <td>No data found to display</td>
              </tr>
            }
           
            {

              user && user.map(value => 
            


            <tr>
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.email}</td>
              <td>
              <img src={value.avatar} alt={value.last_name} />
              </td>
            
            </tr>
              )
              
}

          </tbody>
        
      </table> 
    </div>
  );
};

export default Fetch;
