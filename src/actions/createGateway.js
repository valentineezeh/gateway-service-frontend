/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import toastr from 'toastr';
import {
  CREATE_GATEWAY_SUCCESS,
  CREATE_GATEWAY_ERROR,
  DELETE_CREATE_GATEWAY_ERROR,
  CREATE_GATEWAY_ERROR_ISLOADING
} from './types';
import config from '../config/index';
import routes from '../constants/routes';

const createGateway = data => ({
  type: CREATE_GATEWAY_SUCCESS,
  data
});

const createGatewayIsLoading = () => ({
  type: CREATE_GATEWAY_ERROR_ISLOADING
});

const setGatewayError = error => ({
  type: CREATE_GATEWAY_ERROR,
  error
});

export const deleteCreateGatewayError = () => ({
  type: DELETE_CREATE_GATEWAY_ERROR
});

const postGateway = details => (dispatch) => {
  dispatch(createGatewayIsLoading());
  axios.post(`${config.apiUrl}${routes.CREATEGATEWAY}`, details).then((response) => {
    const { data } = response;
    dispatch(createGateway(data));
    toastr.success(data.message);
  }).catch((error) => {
    if (error.response === undefined) {
      dispatch(setGatewayError('Ooops! something went wrong please check your internet connection'));
      throw error;
    } else {
      const { data } = error.response;
      dispatch(setGatewayError(data.message));
    }
  });
};

export default postGateway;
