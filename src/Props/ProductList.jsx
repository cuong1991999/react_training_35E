import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProduct = () => {
    const { data, viewDetail } = this.props;
    return data.map((item, index) => {
      return (
        <div className="col-3 mb-4" key={index}>
          <Product shoes={item} viewDetail={viewDetail} />
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <h3 className="py-3 text-center">Shoes Shop</h3>
        <div className="row">{this.renderProduct()} </div>
      </>
    );
  }
}
