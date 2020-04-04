/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import deleteGatewayDevice from '../actions/deleteDevice';

/**
 * @class DeviceRow
 */
class DeviceRow extends Component {
  onDeleteDevice = (deviceId, gatewayId) => {
    const {
      DeleteGatewayDevice,
    } = this.props;
    const payload = {
      deviceId,
      _id: gatewayId,
    };
    DeleteGatewayDevice(payload);
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const { device } = this.props;
    return (
      <>
        <tr className="header_two_child_two">
          <td>{device._id}</td>
          <td>{device.vendor}</td>
          <td>{device.uid}</td>
          <td>{device.status}</td>
          <td>{device.createdAt}</td>
          <td>
            <Button
              variant="danger"
              onClick={() => this.onDeleteDevice(device._id, device.gatewayId)}
            >
              <i className="far fa-trash-alt" />
            </Button>
          </td>
        </tr>
      </>
    );
  }
}

DeviceRow.propTypes = {
  device: PropTypes.shape({
    _id: PropTypes.string,
    vendor: PropTypes.string,
    uid: PropTypes.number,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  DeleteGatewayDevice: PropTypes.func,
};


export default connect(null, {
  DeleteGatewayDevice: deleteGatewayDevice
})(DeviceRow);
