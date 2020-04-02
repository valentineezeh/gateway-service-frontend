import React, { Component } from 'react';

/**
 * @class DeviceList
 */
export default class DeviceList extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <div
          id="collapseOne"
          className="collapse my-2"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="container-fluid product_details_row">
            <div className="row">
              <div className="col-sm header_one">
                Product Details
              </div>
            </div>
            <div className="row my-5 ml-2">
              <div className="col-sm">
                <span className="header_two_child">Category:</span>
                <span className="header_two_child_two">Drinks</span>
              </div>
              <div className="col-sm">
                <span className="header_two_child">Subcategory:</span>
                <span className="header_two_child_two">Drinks</span>
              </div>
              <div className="col-sm">
                <span className="header_two_child">Subcategory:</span>
                <span className="header_two_child_two">Nil</span>
              </div>
              <div className="col-sm">
                <span className="header_two_child">Promo Price:</span>
                <span className="header_two_child_two">4.900,00</span>
              </div>
              <div className="col-sm">
                <span className="header_two_child">Date Created: </span>
                <span className="header_two_child_two">25 July 2019</span>
              </div>
            </div>
            <div className="row my-5 ml-2">
              <div className="col-sm mb-5">
                <span className="header_two_child">Product Description: </span>
                {' '}
                &nbsp
                <span className="header_two_child_para">Awesome products constantly on sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
