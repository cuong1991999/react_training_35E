import React, { Component } from "react";
import FormCreateSV from "./FormCreateSV";
import TableSV from "./TableSV";

export default class BaiTapFormSv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [],
      searchTerm: "",
      editItem: false,
      values: {
        id: "",
        phone: "",
        name: "",
        email: "",
      },
      errors: {
        id: "",
        phone: "",
        name: "",
        email: "",
      },
      valid: false,
      Id: false,
      enter: 0,
    };
  }
  handleChange = (e) => {
    let { id, value } = e.target;
    let type = e.target.getAttribute("data-type");
    let arr = this.state.arr;
    let messError = "";

    let newValues = { ...this.state.values, [id]: value };

    if (value.trim() === "") {
      messError = `${id} cannot be blank`;
    } else {
      if (type === "number") {
        let regexNumber = /^[0-9]+$/;
        if (!regexNumber.test(value)) {
          messError = id + " is invalid";
        }
      }
      if (type === "Email") {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regexEmail.test(value)) {
          messError = id + " is invalid";
        }
      }
      if (type === "id") {
        if (arr.find((item) => item.id === value)) {
          messError = `id is invalid`;
        }
      }
    }

    let newErrors = { ...this.state.errors, [id]: messError };

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        let valid = this.checkValid();
        this.setState({
          valid,
        });
      }
    );
  };
  handleSummit = (e) => {
    e.preventDefault();
    if (!this.checkValid()) {
      alert("form is invalid");
      return;
    }
    this.addSV(this.state.values);
  };
  checkValid = () => {
    let { values, errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "" || values[key] === "") {
        return false;
      }
    }
    return true;
  };
  deleteSV = (id) => {
    let arr = this.state.arr.filter((item) => item.id !== id);
    let enter = this.state.enter - 1;

    this.setState({
      arr,
      enter: enter,
    });
  };
  addSV = (value) => {
    let arr = [...this.state.arr, value];
    let enter = this.state.enter + 1;
    this.setState({
      arr,
      editItem: false,
      values: {
        id: "",
        phone: "",
        name: "",
        email: "",
      },
      Id: false,
      enter: enter,
    });
  };

  editSV = (id) => {
    let newEdit = this.state.arr.find((item) => item.id === id);
    let arr = this.state.arr.filter((item) => item.id !== id);

    this.setState({
      arr,
      values: newEdit,
      editItem: true,
      Id: true,
    });
  };

  save = () => {
    let save = JSON.stringify(this.state.arr);
    localStorage.setItem("SV", save);
  };
  get = () => {
    if (localStorage.getItem("SV")) {
      let get = JSON.parse(localStorage.getItem("SV"));
      return get;
    }
    return [];
  };

  componentDidMount() {
    this.setState({
      arr: this.get(),
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState)
      if (prevState.enter !== this.state.enter) {
        this.save();
      }
  }
  render() {
    return (
      <div className="container">
        <FormCreateSV
          addSV={this.addSV}
          editItem={this.state.editItem}
          Submit={this.handleSummit}
          Change={this.handleChange}
          values={this.state.values}
          errors={this.state.errors}
          valid={this.state.valid}
          Id={this.state.Id}
        />
        <TableSV
          tableSV={this.state.arr}
          deleteSV={this.deleteSV}
          editSV={this.editSV}
        />
      </div>
    );
  }
}
