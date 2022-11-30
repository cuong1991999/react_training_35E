import React, { Component } from "react";
import { connect } from "react-redux";
import "./BugerRedux.css";
export class BugerRedux extends Component {
  renderBuger = () => {
    let { buger } = this.props;
    // let content = [];
    // for (let item in buger) {
    //   let breadMid = [];

    //   for (let i = 0; i < buger[item]; i++) {
    //     breadMid.push(<div key={i} className={item}></div>);
    //   }
    //   content.push(breadMid);
    // }
    // return content;
    return Object.entries(buger).map(([propsBuger, value]) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBuger}></div>);
      }
      return breadMid;
    });
  };
  renderMenu = () => {
    let { menu, buger } = this.props;
    let content = [];
    for (let item in menu) {
      let arr = [];

      for (let i = 0; i < 1; i++) {
        arr.push(
          <tr key={i}>
            <th>{item}</th>
            <th>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.addBread(item, 1);
                }}
              >
                +
              </button>
              {buger[item]}
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.addBread(item, -1);
                }}
              >
                -
              </button>
            </th>
            <th>{menu[item]}$</th>
            <th>{menu[item] * buger[item]}$</th>
          </tr>
        );
      }
      content.push(arr);
    }
    return content;
    // return Object.entries(menu).map(([menuItem, price], i) => {
    //   return (
    //     <tr key={i}>
    //       <th>{menuItem}</th>
    //       <th>
    //         <button
    //           className="btn btn-success"
    //           onClick={() => {
    //             this.addBread(menuItem, 1);
    //           }}
    //         >
    //           +
    //         </button>
    //         {buger[menuItem]}
    //         <button
    //           className="btn btn-danger"
    //           onClick={() => {
    //             this.addBread(menuItem, -1);
    //           }}
    //         >
    //           -
    //         </button>
    //       </th>
    //       <th>{price}$</th>
    //       <th>{price * buger[menuItem]}$</th>
    //     </tr>
    //   );
    // });
  };
  addBread = (menuItem, amount) => {
    const action = {
      type: "ADD",

      item: menuItem,
      amount: amount,
    };
    this.props.dispatch(action);
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Bài tập Buger</h2>
        <div className="row text-center">
          <div className="col-7">
            <h3>Bánh Buger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBuger()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3>Menu</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th></th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th>Tổng tiền</th>
                  <th>{this.props.total}$</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  buger: state.BugerReducer.buger,
  menu: state.BugerReducer.menu,
  total: state.BugerReducer.total,
});

export default connect(mapStateToProps)(BugerRedux);
