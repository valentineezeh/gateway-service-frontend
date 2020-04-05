/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import GatewayList from './GatewayList';
import getGateways from '../actions/getGateways';
import EmptyPage from './EmptyPage';
import Paginate from './pagination';

/**
 * @class Gateway
 */
class LandingPage extends Component {
  state = {
    currentPage: 1,
    postPerPage: 10,
  }

  // Get all gateways
  componentDidMount = () => {
    const { GetGateways } = this.props;
    GetGateways();
  }

  // Change page
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      gateWayPayload,
      gatewayIsLoading
    } = this.props;

    // Get current page
    const { currentPage, postPerPage } = this.state;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = gateWayPayload.allGateways.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div>
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
                Total Number of gateways:
                {' '}
                {gateWayPayload.allGateways.length === 0 ? 0 : `${gateWayPayload.allGateways.length}`}
              </span>
            </div>
            <div className="col-md-12 text-center total_amount">
              <span>
                Devices: Each devices is allocated to a gateway.
                {' '}
              </span>
            </div>
          </div>
          {
            gatewayIsLoading ? (
              <div className="text-center py-5">
                <Loader
                  type="Circles"
                  color="#99BF16"
                  height="100"
                  width="100"
                />
              </div>
            ) : gateWayPayload.allGateways.length === 0 ? (
              <EmptyPage />
            ) : (
              <>
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
                  {
            // eslint-disable-next-line react/prop-types
            currentPosts.map(gateway => (
              <GatewayList
                key={gateway._id}
                gateWayPayload={gateway}
              />
            ))
          }
                </div>

                <div className="container-fluid">
                  <div className="row align-items-center">
                    <Paginate
                      postPerPage={postPerPage}
                      totalPosts={gateWayPayload.allGateways.length}
                      paginate={this.paginate}
                    />
                  </div>
                </div>
              </>
            )
          }

        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  GetGateways: PropTypes.func,
  gateWayPayload: PropTypes.array,
  gatewayIsLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  gateWayPayload: state.getGateways,
  gatewayIsLoading: state.getGateways.isLoading
});

export default connect(mapStateToProps, {
  GetGateways: getGateways
})(LandingPage);
