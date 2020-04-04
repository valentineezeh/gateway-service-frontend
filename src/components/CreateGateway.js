import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from 'is-empty';
import {
  Form,
  Button,
  Card
} from 'react-bootstrap';
import { userInputCreateGateway } from '../middleware/userValidation';
import TextField from './TextField';
import postGateway, { deleteCreateGatewayError } from '../actions/createGateway';
import ErrorAlertNotification from './ErrorAlertNotification';

/**
 * @class CreateGateway
 */
class CreateGateway extends Component {
  state = {
    serialNumber: '',
    name: '',
    ipv4: '',
    errors: {},
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
  *@param {*} event
  *@returns {*} - state
  */
 keyPressed = (event) => {
   if (event.key === 'Enter') {
     this.onSubmit();
   }
 }

 /**
  *
  *@returns {*} - payload
  */
 onSubmit = () => {
   const { PostGateway } = this.props;
   if (this.isValid()) {
     this.setState({ errors: {} });
     PostGateway(this.state);
   }
 }

 /**
   *
   * @returns {*} - empty strings
   */
  handleDelete = () => {
    const { DeleteCreateGatewayError } = this.props;
    DeleteCreateGatewayError();
  }

 isValid = () => {
   const { errors, isValid } = userInputCreateGateway(
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
     serialNumber,
     name,
     ipv4,
     errors
   } = this.state;

   const {
     success,
     isLoading,
     error
   } = this.props;

   if (success) {
     return <Redirect to="/" />;
   }

   return (
     <div className="dashboard_body px-5 my-5">
       <div className="container">
         <Card>
           <Card.Header>Create a Gateway</Card.Header>
           <Card.Body>
             <Card.Title>You can create a gateway with this form</Card.Title>
             {!isEmpty(error) && (
             <ErrorAlertNotification
               errors={error}
               onClick={this.handleDelete}
             />
             )}
             <Form>
               <TextField
                 onChange={this.onChange}
                 value={serialNumber}
                 error={errors.serialNumber}
                 type="text"
                 field="serialNumber"
                 placeholder="Enter Serial Number"
                 label="Serial Number"
                 onKeyPress={this.keyPressed}
               />
               <TextField
                 onChange={this.onChange}
                 value={name}
                 error={errors.name}
                 type="text"
                 field="name"
                 placeholder="Enter Name"
                 label="Name"
                 onKeyPress={this.keyPressed}
               />
               <TextField
                 onChange={this.onChange}
                 value={ipv4}
                 error={errors.ipv4}
                 type="text"
                 field="ipv4"
                 placeholder="192.0.2.1"
                 label="IPV4"
                 onKeyPress={this.keyPressed}
               />
               <Button
                 variant="info"
                 onClick={this.onSubmit}
               >
                 {
                isLoading ? (
                  <>
                    <i className="fa fa-spinner fa-spin" />
                    {'  '}
                    Submit
                  </>
                ) : 'Submit'
              }
               </Button>
             </Form>
           </Card.Body>
         </Card>
       </div>
     </div>
   );
 }
}

CreateGateway.propTypes = {
  error: PropTypes.string,
  success: PropTypes.bool,
  isLoading: PropTypes.bool,
  PostGateway: PropTypes.func,
  DeleteCreateGatewayError: PropTypes.func
};

const mapStateToProps = state => ({
  success: state.postGateway.createGateWaySuccess,
  isLoading: state.postGateway.createGatewayIsLoading,
  error: state.postGateway.error,
});

export default connect(mapStateToProps, {
  PostGateway: postGateway,
  DeleteCreateGatewayError: deleteCreateGatewayError
})(CreateGateway);
