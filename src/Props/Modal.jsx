import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { prodDetail } = this.props;
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#modelId"
          >
            Launch
          </button> */}
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{prodDetail.name}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-6 d-flex flex-column justify-content-center">
                      <img src={prodDetail.image} alt="" className="w-100" />
                    </div>
                    <div className="col-6">
                      <p>{prodDetail.description}</p>
                      <p className="m-0">{prodDetail.price}$</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
