import axios from 'axios';
import toastr from 'toastr';
import {
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_ERROR,
  DELETE_CREATE_DEVICE_ERROR,
  CREATE_DEVICE_ERROR_ISLOADING,
} from './types';
import config from '../config/index';
import routes from '../constants/routes';

const createDevice = data => ({
  type: CREATE_DEVICE_SUCCESS,
  data
});

const createDeviceIsLoading = () => ({
  type: CREATE_DEVICE_ERROR_ISLOADING
});

const setDeviceError = error => ({
  type: CREATE_DEVICE_ERROR,
  error
});

export const deleteCreateDeviceError = () => ({
  type: DELETE_CREATE_DEVICE_ERROR,
});

const postDevice = details => (dispatch) => {
  dispatch(createDeviceIsLoading());
  axios.post(`${config.apiUrl}${routes.CREATEDEVICE}/${details._id}`, details).then(
    (response) => {
      const { data } = response;
      dispatch(createDevice(data));
      toastr.success(data.message);
    }
  ).catch((error) => {
    if (error.response === undefined) {
      dispatch(setDeviceError('Ooops! something went wrong please check your internet connection'));
      throw error;
    } else {
      const { data } = error.response;
      dispatch(setDeviceError(data.message));
    }
  });
};

export default postDevice;
