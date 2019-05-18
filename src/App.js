import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchForm />
      </div>
    );
  }
}
