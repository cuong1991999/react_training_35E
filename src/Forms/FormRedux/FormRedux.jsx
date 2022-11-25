import React, { Component } from "react";
import { connect } from "react-redux";
import FormCreateRedux from "./FormCreateRedux";
import TableRedux from "./TableRedux";
class FormRedux extends Component {
  componentDidMount() {
    const action = {
      type: "LOAD",
      arr: this.get(),
    };
    this.props.dispatch(action);
  }
  save = () => {
    let save = JSON.stringify(this.props.arr);
    localStorage.setItem("data", save);
  };
  get = () => {
    if (localStorage.getItem("data")) {
      let get = JSON.parse(localStorage.getItem("data"));
      return get;
    }
    return [];
  };

  componentDidUpdate(preProps, preState) {
    if (preProps.enter !== this.props.enter) {
      this.save();
    }
  }
  render() {
    return (
      <div className="container">
        <FormCreateRedux />
        <TableRedux />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arr: state.Formredux.arr,
    enter: state.Formredux.enter,
  };
};
export default connect(mapStateToProps)(FormRedux);
