import React, { Component } from 'react';
import DeviceList from './DeviceList';

/**
 * @class GatewayList
 */
export default class GatewayList extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row toggle_two d-flex justify-content-center" id="headingOne">
            <div className="col-sm my-3">
              <span className="prod_drop_down">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <i className="fas fa-angle-down" />
                </button>
                {' '}
                RN12345678
              </span>
            </div>
            <div className="col-sm my-3 header_two_child_two">
              <img src="../utils/images/monsterDrink.jpeg" id="prod_image_size" alt="" />
              Monster Energy Ultra
            </div>
            <div className="col-sm my-3 header_two_child_two">
              Drinks
            </div>
            <div className="col-sm my-3 header_two_child_two">
              5
            </div>
            <div className="col-sm my-3 header_two_child_two">
              ₦44,850.00
            </div>
            <div className="col-sm my-3 ">
              ...
            </div>
          </div>
        </div>
        <DeviceList />
      </div>
    );
  }
}
