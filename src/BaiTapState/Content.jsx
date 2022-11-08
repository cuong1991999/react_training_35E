import React, { Component } from "react";

const arrGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class extends Component {
  renderGlasses = () => {
    return arrGlasses.map((glasses, index) => {
      return (
        <div
          className="col-2"
          style={{ cursor: "pointer" }}
          key={index}
          onClick={() => {
            this.change(glasses);
          }}
        >
          <img src={glasses.url} alt="" className="img-fluid" />
        </div>
      );
    });
  };
  change = (glassesClick) => {
    this.setState({
      spchitiet: glassesClick,
    });
  };

  state = {
    spchitiet: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    const { id, url, price, name, desc } = this.state.spchitiet;
    return (
      <div className="container">
        <div className="row margin">
          <div className="col-5 box px-0 ">
            <div className="vglasses-card ">
              <div className="vglasses__model  " id="avatar">
                <img src={url} alt="" />
              </div>
              <div className="vglasses__info" id="glassesInfo">
                <h3>{name}</h3>
                <p>{price}$</p>
                <p className="m-0">{desc}</p>
              </div>
            </div>
          </div>
          <div className="col-5 box px-0 ">
            <div className="vglasses-card">
              <div className="vglasses__model "></div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="row vglasses__pro" id="vlgassesList">
            {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
