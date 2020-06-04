import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div style={{
    display : "flex",
    alignItems: "center",
    margin : "0 auto",
    flexDirection : "column"
  }}>
    <h1 style={{
      textTransform : "uppercase",
      fontFamily : "Lato",
      color : '#ee91bc'
    }}>React-Redux TODO List</h1>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
);

export default App;
