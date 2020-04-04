/* eslint-disable no-case-declarations */
import {
  GET_GATEWAY_LIST_SUCCESS, GET_GATEWAY_LIST_ISLOADING,
  DELETE_DEVICE,
  DELETE_DEVICE_ISLOADING
} from '../actions/types';

const initialState = {
  allGateways: [],
  isLoading: false,
  deleteDeviceLoading: false,
};

const getGateways = (state = initialState, action) => {
  switch (action.type) {
    case GET_GATEWAY_LIST_SUCCESS:
      return {
        ...state,
        allGateways: action.data,
        isLoading: false,
        deleteDeviceLoading: false
      };
    case GET_GATEWAY_LIST_ISLOADING:
      return {
        ...state,
        isLoading: true,
        deleteDeviceLoading: false
      };
    case DELETE_DEVICE:
      const removeDevice = state.allGateways.map((gateway) => {
        const remove = gateway.devices.filter(i => i._id !== action.deviceId);
        return {
          ...gateway,
          devices: remove
        };
      });
      return {
        ...state,
        allGateways: removeDevice,
        deleteDeviceLoading: false
      };
    case DELETE_DEVICE_ISLOADING:
      return {
        ...state,
        deleteDeviceLoading: true
      };
    default: return state;
  }
};

export default getGateways;
