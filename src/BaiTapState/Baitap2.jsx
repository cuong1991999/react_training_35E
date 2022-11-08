import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";

export default class Baitap2 extends Component {
  render() {
    return (
      <div className="vglasses">
        <div>
          <header className="header-bg">
            <Header />
          </header>
          <section className="py-4">
            <Content />
          </section>
        </div>
      </div>
    );
  }
}
