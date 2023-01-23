import React from "react";
import "./App.css";
import { Tittle } from "./components/Tittle/Tittle";
import { Filter } from "./components/Filter/Filter";
import { Input } from "./components/Input/Input";
import { List } from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Tittle />
      <Filter />

      <Input />

      <List />
    </div>
  );
}

export default App;
