import { combineReducers } from 'redux';
import getGateways from './getGetwayReducer';
import postGateway from './createGatewayReducer';
import postDevice from './createDeviceReducer';

export default combineReducers({
  getGateways,
  postGateway,
  postDevice,
});
