import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
export default class extends Component {
  render() {
    return (
      <div>
        {/* <Nav /> */}
        <header className="py-5">
          <Header />
        </header>
        <section className="pt-4">
          <Page />
        </section>
        {/* <footer className="py-5 bg-dark">
          <Footer />
        </footer> */}
      </div>
    );
  }
}
