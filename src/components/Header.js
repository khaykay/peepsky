import React from "react";
import Search from "./Search";
import Reload from "./Reload";
import "../styles/Header.css";

export default function Header({ searchCity }) {
  return (
    <header className="Header">
      <div className="heading">
        <h1 className="Header__title"> Weather </h1>
        <Reload />
      </div>
      <Search searchCity={searchCity} />{" "}
    </header>
  );
}
