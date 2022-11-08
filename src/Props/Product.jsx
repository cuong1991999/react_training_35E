import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { shoes, viewDetail } = this.props;
    return (
      <div className="card">
        <img src={shoes.image} alt="" className="w-100" />
        <div className="card-body">
          <h6 className="card-title">{shoes.name}</h6>
          <p className="my-2">{shoes.price}$</p>
          <p className="card-text">{shoes.shortDescription}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={viewDetail(shoes)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
