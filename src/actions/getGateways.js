import axios from 'axios';
import config from '../config/index';
import routes from '../constants/routes';
import {
  GET_GATEWAY_LIST_SUCCESS, GET_GATEWAY_LIST_ISLOADING
} from './types';

const gateways = data => ({
  type: GET_GATEWAY_LIST_SUCCESS,
  data
});

const isLoading = () => ({
  type: GET_GATEWAY_LIST_ISLOADING
});

const getGateways = () => (dispatch) => {
  dispatch(isLoading());
  return axios.get(`${config.apiUrl}${routes.GETGATEWAYS}`).then((response) => {
    const { data } = response;
    dispatch(gateways(data.data));
  }).catch(err => err);
};

export default getGateways;
