import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const Dashboard = () => (
  <div style={{
    display : "flex",
    alignItems: "center",
    margin : "0 auto",
    flexDirection : "column"
  }}>
  {}
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
);

export default Dashboard;
