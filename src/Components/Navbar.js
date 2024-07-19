import React, { Component } from 'react';

class Navbar extends Component {
  // Function to handle category click
  handleCategoryClick = (category) => {
    // Call the callback function to update the category
    this.props.onCategoryChange(category);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Newsy</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("general")}>
                  General
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("business")}>
                  Business
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("entertainment")}>
                  Entertainment
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("health")}>
                  Health
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("science")}>
                  Science
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("sports")}>
                  Sports
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => this.handleCategoryClick("technology")}>
                  Technology
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
