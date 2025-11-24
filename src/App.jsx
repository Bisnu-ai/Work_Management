import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashbord/EmployeeDashboard";
import AdminDashboard from "./components/Dashbord/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import NotFound from "./components/other/NotFound";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState('');
  const [userData] = useContext(AuthContext);
  const[adminData,setAdminData]=useState('')
  

 
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
      setAdminData({firstName:"Bisnu(Admin)"})
   
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);

    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else {
      const employees = userData?.find(
        (e) => e.email === email && e.password === password
      );

      if (employees) {
        setUser("employees");
        setLoggedInUserData(employees);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", data: employees })
        );
      } else {
        alert("Invalid Credentials");
        
      }
    }
  };
// localStorage.clear()
 
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      
      {user === "admin" ? (<AdminDashboard changeUser={setUser} />) : user === "employees" ? (
         <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
