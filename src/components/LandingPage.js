import React, { Component } from 'react';
import Navigation from './Navigation';
import GatewayList from './GatewayList';

/**
 * @class Gateway
 */
export default class LandingPage extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div className="overview_page">
        <Navigation />
        <div className="dashboard_body px-5">

          <div className="row mt-5 money-display">
            <div className="col-md-12 text-center mb-2 wallet_text">
              <p>
                Valentine Ezeh Gateways
              </p>
            </div>
            <div className="col-md-12 text-center product_review">
              <p className="m-0">
                Gateways Review
              </p>
            </div>
            <div className="col-md-12 text-center total_amount">
              <span>
                Total Number of gateways: 70
              </span>
            </div>
            <div className="col-md-12 text-center total_amount">
              <span>
                Devices: Each devices is allocated to a gateway.
                {' '}
              </span>
            </div>
          </div>


          <div className="container-fluid">
            <div className="row align-items-center top_header">
              <div className="col-sm my-3 top_header_content">
                Gateway Id
              </div>
              <div className="col-sm my-3 top_header_content">
                Serial Number
              </div>
              <div className="col-sm my-3 top_header_content">
                Name
              </div>
              <div className="col-sm my-3 top_header_content">
                IPV4
              </div>
              <div className="col-sm my-3 top_header_content">
                Action
              </div>
            </div>
          </div>

          <div className="accordion my-2 w-100" id="accordionExample">
            <GatewayList />
          </div>

        </div>
      </div>
    );
  }
}
