import React, { Component } from "react";
import { connect } from "react-redux";

class FormCreateRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: { id: "", phone: "", name: "", email: "" },
      errors: {
        id: "",
        phone: "",
        name: "",
        email: "",
      },
      valid: false,
    };
  }
  checkValid = () => {
    let { values, errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "" || values[key] === "") {
        return true;
      }
    }
    return false;
  };
  handleChange = (e) => {
    let { id, value } = e.target;

    let type = e.target.getAttribute("data-type");
    let newValues = { ...this.state.values, [id]: value };

    let messError = "";
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
          valid: valid,
        });
      }
    );
  };
  handleSumit = (e) => {
    e.preventDefault();
    if (this.checkValid()) {
      return;
    }
    let arr = [...this.props.arr, this.state.values];
    let enter = this.props.enter + 1;
    const action = {
      type: "ADD",
      arr: arr,
      enter: enter,
      edit: false,
      Id: false,
    };
    this.props.dispatch(action);
    this.setState({
      values: { id: "", phone: "", name: "", email: "" },
    });
  };
  handleUp = (e) => {
    e.stopPropagation();
    let enter = this.props.enter + 1;

    let values = this.state.values;
    const action = {
      type: "UPDATA",
      values: values,
      enter: enter,
      Id: false,
      edit: false,
    };
    this.props.dispatch(action);
  };
  componentDidUpdate(preProps, preState) {
    if (preProps.editItem !== this.props.editItem) {
      this.setState({
        values: this.props.editItem,
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSumit(e)}>
          <div className="card">
            <h3 className="card-header bg-dark text-white">
              Thông tin sinh viên
            </h3>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p className="mb-1">Mã SV</p>
                    <input
                      data-type="id"
                      id="id"
                      disabled={this.props.Id}
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.values.id}
                    />
                    {this.state.errors.id !== "" && (
                      <div className="text-danger mt-1">
                        {this.state.errors.id}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Số điện thoại</p>
                    <input
                      data-type="number"
                      id="phone"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.values.phone}
                    />
                    {this.state.errors.phone !== "" && (
                      <div className="text-danger mt-1">
                        {this.state.errors.phone}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p className="mb-1">Họ tên</p>
                    <input
                      data-type="letter"
                      id="name"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.values.name}
                    />
                    {this.state.errors.name !== "" && (
                      <div className="text-danger mt-1">
                        {this.state.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Email</p>
                    <input
                      data-type="Email"
                      id="email"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.values.email}
                    />
                    {this.state.errors.email !== "" && (
                      <div className="text-danger mt-1">
                        {this.state.errors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {this.props.edit ? (
                <button
                  type="submit"
                  disabled={this.state.valid}
                  className={"btn btn-primary"}
                  onClick={(e) => {
                    this.handleUp(e);
                  }}
                >
                  Updata
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={this.state.valid}
                  className={"btn btn-success"}
                >
                  Thêm sinh viên
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Id: state.Formredux.Id,
    arrS: state.Formredux.arrS,
    arr: state.Formredux.arr,
    edit: state.Formredux.edit,
    editItem: state.Formredux.editItem,
    enter: state.Formredux.enter,
  };
};

export default connect(mapStateToProps)(FormCreateRedux);
