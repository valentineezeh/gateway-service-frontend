/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import toastr from 'toastr';
import TextField from './TextField';
import { userInputCreateDevice } from '../middleware/userValidation';
import postDevice, { deleteCreateDeviceError } from '../actions/createDevice';
import ErrorAlertNotification from './ErrorAlertNotification';

/**
 * @class DeviceForm
 */
class DeviceForm extends Component {
  state = {
    uid: '',
    vendor: '',
    status: '',
    errors: {},
    isLoading: false
  }

  /**
  *
  *@param {*} event
  *@returns {*} - state
  */
 onChange = (event) => {
   const { errors } = this.state;
   if (errors[event.target.name]) {
     const newErrors = Object.assign({}, errors);
     delete newErrors[event.target.name];
     this.setState({
       [event.target.name]: event.target.value,
       errors: newErrors
     });
   } else {
     this.setState({
       [event.target.name]: event.target.value
     });
   }
 }

 /**
  *
  *@returns {*} - payload
  */
 onSubmit = () => {
   const { PostDevice, gateWayPayload } = this.props;
   const {
     uid,
     vendor,
     status
   } = this.state;
   if (this.isValid()) {
     const payload = {
       uid,
       vendor,
       status,
       _id: gateWayPayload._id
     };
     this.setState({ errors: {} });
     PostDevice(payload);
   }
 }

 /**
   *
   * @returns {*} - empty strings
   */
  handleDelete = () => {
    const { DeleteCreateDeviceError } = this.props;
    DeleteCreateDeviceError();
  }

 isValid = () => {
   const { errors, isValid } = userInputCreateDevice(
     this.state
   );
   if (!isValid) {
     this.setState({ errors });
   }
   return isValid;
 }

 /**
   *
   * @returns {*} - render
   */
 render() {
   const {
     uid,
     vendor,
     status,
     errors
   } = this.state;

   const {
     error,
     deviceIsLoading,
     gateWayPayload,
     deviceSuccess
   } = this.props;

   if (deviceSuccess) {
     window.location.reload();
     toastr.success('Device creation was successful');
   }

   return (
     <>
       <Form>
         {!isEmpty(error) && (
         <ErrorAlertNotification
           errors={error}
           onClick={this.handleDelete}
         />
         )}

         <TextField
           onChange={this.onChange}
           value={uid}
           error={errors.uid}
           type="text"
           field="uid"
           placeholder="Enter UID Number"
           label="UID"
           onKeyPress={this.keyPressed}
         />
         <TextField
           onChange={this.onChange}
           value={vendor}
           error={errors.vendor}
           type="text"
           field="vendor"
           placeholder="Enter vendor"
           label="Vendor"
           onKeyPress={this.keyPressed}
         />
         <TextField
           onChange={this.onChange}
           value={status}
           error={errors.status}
           type="text"
           field="status"
           placeholder="Enter Status"
           label="Status"
           onKeyPress={this.keyPressed}
         />
         <Button
           variant="info"
           onClick={this.onSubmit}
         >
           {
            deviceIsLoading ? (
              <>
                <i className="fa fa-spinner fa-spin" />
                {'  '}
                Submit
              </>
            ) : 'Submit'
              }
         </Button>
       </Form>
     </>
   );
 }
}

DeviceForm.propTypes = {
  error: PropTypes.string,
  deviceIsLoading: PropTypes.bool,
  PostDevice: PropTypes.func,
  DeleteCreateDeviceError: PropTypes.func,
  gateWayPayload: PropTypes.shape({})
};

const mapStateToProps = state => ({
  deviceSuccess: state.postDevice.createDeviceSuccess,
  deviceIsLoading: state.postDevice.createDeviceIsLoading,
  error: state.postDevice.error
});

export default connect(mapStateToProps, {
  PostDevice: postDevice,
  DeleteCreateDeviceError: deleteCreateDeviceError
})(DeviceForm);
