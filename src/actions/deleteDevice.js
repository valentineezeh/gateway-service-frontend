import axios from 'axios';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import {
  DELETE_DEVICE,
  DELETE_DEVICE_ISLOADING
} from './types';

const deleteDevice = deviceId => ({
  type: DELETE_DEVICE,
  deviceId
});

const isLoading = () => ({
  type: DELETE_DEVICE_ISLOADING
});

const deleteGatewayDevice = details => (dispatch) => {
  dispatch(isLoading());
  axios.delete(`${config.apiUrl}${routes.DELETEDEVICE}/${details._id}?deviceId=${details.deviceId}`).then((response) => {
    const { data } = response;
    dispatch(deleteDevice(details.deviceId));
    toastr.success(data.message);
  }).catch((error) => {
    throw error;
  });
};

export default deleteGatewayDevice;
