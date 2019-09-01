import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Excel extends Component {
  render() {
    return (
      <div>
        <h1>Excel Sheet goes here!</h1>
        <Link to="/model">Check model</Link>
      </div>
    );
  }
}
