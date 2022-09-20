import { React, useState } from "react";
import "./App.css";

import Body from "./components/Body";

function App() {
  
  const date = new Date()
  
  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  const today = formatDate(date)

  return (
    <div className="App">
      <Body today={today} formatDate={formatDate}/>
    </div>
  );
}

export default App;
