import React, { Component } from "react";

export default class TableSV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };
  render() {
    const { tableSV, deleteSV, editSV } = this.props;

    return (
      <div>
        <div className="mt-3">
          <div className="mb-2 d-flex">
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleChange}
              placeholder="Search name..."
              className="form-control"
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
            <tbody>
              {tableSV
                .filter((item) => {
                  if (this.state.searchTerm === "") {
                    return item;
                  } else if (
                    item.name
                      .toLowerCase()
                      .includes(this.state.searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>
                        <button
                          className="btn btn-danger mr-1"
                          onClick={() => deleteSV(`${item.id}`)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => editSV(`${item.id}`)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
