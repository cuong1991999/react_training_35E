import React, { Component } from "react";

export default class FormCreateSV extends Component {
  render() {
    const { editItem, Submit, Change, values, errors, valid, Id } = this.props;
    return (
      <div>
        <form
          action=""
          onSubmit={(e) => {
            Submit(e);
          }}
        >
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
                      disabled={Id}
                      value={values.id}
                      className="form-control"
                      onChange={(e) => Change(e)}
                      required
                    />
                    {errors.id !== "" && (
                      <div className="text-danger mt-1">{errors.id}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Số điện thoại</p>
                    <input
                      data-type="number"
                      id="phone"
                      className="form-control"
                      value={values.phone}
                      onChange={(e) => Change(e)}
                      required
                    />

                    {errors.phone !== "" && (
                      <div className="text-danger mt-1">{errors.phone}</div>
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
                      value={values.name}
                      onChange={(e) => Change(e)}
                      required
                    />
                    {errors.name !== "" && (
                      <div className="text-danger  mt-1">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <p className="mb-1">Email</p>
                    <input
                      data-type="Email"
                      id="email"
                      value={values.email}
                      className="form-control"
                      onChange={(e) => Change(e)}
                      required
                    />
                    {errors.email !== "" && (
                      <div className="text-danger mt-1">{errors.email}</div>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={!valid}
                className={editItem ? "btn btn-primary" : "btn btn-success"}
              >
                {editItem ? "Cập Nhật" : "Thêm sinh viên"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
