import isEmpty from 'is-empty';
import {
  CREATE_DEVICE_SUCCESS,
  CREATE_DEVICE_ERROR,
  DELETE_CREATE_DEVICE_ERROR,
  CREATE_DEVICE_ERROR_ISLOADING,
} from '../actions/types';

const initialState = {
  data: {},
  error: '',
  createDeviceIsLoading: false,
  createDeviceSuccess: false,
};

const postDevice = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        createDeviceSuccess: !isEmpty(action.data),
        data: action.data,
        createDeviceIsLoading: false,
        show: false
      };
    case CREATE_DEVICE_ERROR_ISLOADING:
      return {
        ...state,
        createDeviceIsLoading: true
      };
    case CREATE_DEVICE_ERROR:
      return {
        ...state,
        data: {},
        error: action.error,
        createDeviceIsLoading: false
      };
    case DELETE_CREATE_DEVICE_ERROR:
      return {
        error: ''
      };
    default:
      return state;
  }
};

export default postDevice;
