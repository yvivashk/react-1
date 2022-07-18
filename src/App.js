import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="content-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
};

export default App;
