import React from "react";
import Header from "../other/Header";
import AllTask from "../other/AllTask";
import CreateTask from "../other/Createtask";
import Footer from "../other/Footer";

export default function AdminDashboard(props) {
  
  
  return (
    <div className="h-screen w-full p-10 text-black">
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
      <Footer/>
    </div>
  );
}
 