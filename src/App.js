import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "general", // Set the initial category
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ currentPage: category });
  };
  pageSize=8;
  render() {
    const { currentPage } = this.state;

    return (
      <div>
        <Navbar onCategoryChange={this.handleCategoryChange} />
        {/* Conditional rendering based on currentPage */}
        {currentPage === "general" && (
          <News pageSize={this.pageSize} country="in" category="general" />
        )}
        {currentPage === "business" && (
          <News key="business" pageSize={this.pageSize} country="in" category="business" />
        )}
        {currentPage === "entertainment" && (
          <News pageSize={this.pageSize} country="in" category="entertainment" />
        )}
        {currentPage === "health" && (
          <News pageSize={this.pageSize} country="in" category="health" />
        )}
        {currentPage === "science" && (
          <News pageSize={this.pageSize} country="in" category="science" />
        )}
        {currentPage === "sports" && (
          <News pageSize={this.pageSize} country="in" category="sports" />
        )}
        {currentPage === "technology" && (
          <News pageSize={this.pageSize} country="in" category="technology" />
        )}
      </div>
    );
  }
}
