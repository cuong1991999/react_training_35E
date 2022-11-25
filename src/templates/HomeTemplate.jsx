import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../ReactBuoi1/Footer";
import Nav from "../ReactBuoi1/Nav";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="py-5">
          <Outlet />
        </div>
        <div className="py-5 bg-dark">
          <Footer />
        </div>
      </div>
    );
  }
}
