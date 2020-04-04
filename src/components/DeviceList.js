/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Accordion,
  Table,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DeviceRow from './DeviceRow';

/**
 * @class DeviceList
 */
export default class DeviceList extends Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const { gateWayPayload, gatewayId } = this.props;
    return (
      <div>
        <Accordion.Collapse eventKey="0">
          <Table responsive striped bordered hover>
            <thead>
              <tr className="header_two_child_two">
                <th>Device Id</th>
                <th>Vendor</th>
                <th>Uid</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              gateWayPayload.devices.map(device => (
                <DeviceRow
                  key={device._id}
                  device={device}
                  gatewayId={gatewayId}
                />
              ))
              }
            </tbody>
          </Table>
        </Accordion.Collapse>
      </div>
    );
  }
}

DeviceList.propTypes = {
  gateWayPayload: PropTypes.shape({
    devices: PropTypes.shape({
      _id: PropTypes.string,
      vendor: PropTypes.string,
      uid: PropTypes.number,
      status: PropTypes.string,
      createdAt: PropTypes.string
    })
  }),
  gatewayId: PropTypes.string,
};
