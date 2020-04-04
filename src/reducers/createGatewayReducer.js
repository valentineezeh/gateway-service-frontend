import isEmpty from 'is-empty';
import {
  CREATE_GATEWAY_SUCCESS,
  CREATE_GATEWAY_ERROR,
  DELETE_CREATE_GATEWAY_ERROR,
  CREATE_GATEWAY_ERROR_ISLOADING
} from '../actions/types';

const initialState = {
  data: {},
  error: '',
  createGatewayIsLoading: false,
  createGateWaySuccess: false
};

const postGateway = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GATEWAY_SUCCESS:
      return {
        ...state,
        createGateWaySuccess: !isEmpty(action.data),
        data: action.data,
        createGatewayIsLoading: false
      };
    case CREATE_GATEWAY_ERROR_ISLOADING:
      return {
        ...state,
        createGatewayIsLoading: true
      };
    case CREATE_GATEWAY_ERROR:
      return {
        ...state,
        data: {},
        error: action.error,
        createGatewayIsLoading: false
      };
    case DELETE_CREATE_GATEWAY_ERROR:
      return {
        error: ''
      };
    default:
      return state;
  }
};

export default postGateway;
