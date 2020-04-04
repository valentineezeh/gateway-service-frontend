/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Accordion,
  Card,
  Button,
  Dropdown,
  DropdownButton,
  Modal,
} from 'react-bootstrap';
import DeviceList from './DeviceList';
import DeviceForm from './DeviceForm';


/**
 * @class GatewayList
 */
class GatewayList extends Component {
  state = {
    show: false,
    id: ''
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  getId = (gatewayId) => {
    this.setState({ id: gatewayId });
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const {
      gateWayPayload,
    } = this.props;
    const { show, id } = this.state;
    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <div className="row justify-content-center">
                <div className="col-sm my-3">
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey="0"
                    onClick={
                      () => this.getId(gateWayPayload._id)
                    }
                  >
                    <i className="fas fa-angle-down" />
                    <span className="header_two_child_two">
                      {'  '}
                      {gateWayPayload._id}
                    </span>
                  </Accordion.Toggle>
                </div>
                <div className="col-sm my-3 header_two_child_two">
                  {gateWayPayload.serialNumber}
                </div>
                <div className="col-sm my-3 header_two_child_two">
                  {gateWayPayload.name}
                </div>
                <div className="col-sm my-3 header_two_child_two">
                  {gateWayPayload.ipv4}
                </div>
                <div className="col-sm my-3 ">
                  <DropdownButton
                    variant="success"
                  >
                    <Dropdown.Item
                      eventKey="1"
                      className="dropdown-text"
                      onClick={this.handleShow}
                    >
                      Add Device
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Card.Header>
            <DeviceList
              gateWayPayload={gateWayPayload}
              gatewayId={id}
            />
          </Card>
        </Accordion>

        <Modal
          show={show}
          onHide={this.handleClose}
          animation={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Device</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DeviceForm
              gateWayPayload={gateWayPayload}
            />
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

GatewayList.propTypes = {
  gateWayPayload: PropTypes.shape,
};


export default GatewayList;
