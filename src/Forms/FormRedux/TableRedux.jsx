import React, { Component } from "react";
import { connect } from "react-redux";

class TableRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }
  handleDelete = (id) => {
    let arr = this.props.arr.filter((item) => item.id !== id);
    let enter = this.props.enter - 1;

    const action = {
      type: "DELETE",
      arr: arr,
      enter: enter,
    };
    this.props.dispatch(action);
  };
  handleEdit = (id) => {
    let arr = this.props.arr.filter((item) => item.id !== id);
    let editItem = this.props.arr.find((item) => item.id === id);
    const action = {
      type: "EDIT",
      arr: arr,
      editItem: editItem,
      edit: true,
      Id: true,
    };
    this.props.dispatch(action);
  };
  Change = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  renderTable = (data) => {
    return data
      .filter((item) => {
        if (this.state.search === "") {
          return item;
        } else if (
          item.name.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
              <button
                className="btn btn-danger mr-1"
                onClick={() => this.handleDelete(`${item.id}`)}
              >
                Delete
              </button>
              <button
                className="btn btn-primary"
                onClick={() => this.handleEdit(`${item.id}`)}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      });
  };

  render() {
    return (
      <div>
        <div className="mt-3">
          <div className="mb-2 d-flex">
            <input
              type="text"
              placeholder="Search name..."
              className="form-control"
              value={this.state.search}
              onChange={this.Change}
            />
          </div>
          <table className="table">
            <thead className="bg-dark text-white">
              <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.renderTable(this.props.arr)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arr: state.Formredux.arr,
  enter: state.Formredux.enter,
  edit: state.Formredux.edit,
  editItem: state.Formredux.editItem,
  arrS: state.Formredux.arrS,
});

export default connect(mapStateToProps)(TableRedux);
