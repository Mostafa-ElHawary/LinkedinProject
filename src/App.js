import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from './Feed';
import Widget from "./Widget";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {/* App Body */}

        <SideBar />
        <Feed />
        <Widget/>

      </div>
    </div>
  );
}

export default App;
