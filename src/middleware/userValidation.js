/* eslint-disable no-restricted-globals */
import isEmpty from 'is-empty';
import isIp from 'is-ip';

const userInputCreateGateway = (data) => {
  const errors = {};
  if (data.serialNumber === '' || !data.serialNumber || data.serialNumber.trim().length === 0) {
    errors.serialNumber = 'This field is required.';
  }

  if (data.name === '' || !data.name || data.name.trim().length === 0) {
    errors.name = 'This field is required.';
  }

  if (data.ipv4 === '' || !data.ipv4 || data.ipv4.trim().length === 0) {
    errors.ipv4 = 'This field is required.';
  }

  if (isIp.v4(data.ipv4) === false) {
    errors.ipv4 = 'Invalid ipv4 format.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const userInputCreateDevice = (data) => {
  const errors = {};
  if (data.uid === '' || !data.uid || data.uid.trim().length === 0) {
    errors.uid = 'This field is required.';
  }

  if (isNaN(data.uid)) {
    errors.uid = 'Uid must be numbers.'
  }

  if (data.vendor === '' || !data.vendor || data.vendor.trim().length === 0) {
    errors.vendor = 'This field is required.';
  }

  if (data.status === '' || !data.status || data.status.trim().length === 0) {
    errors.status = 'This field is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export {
  userInputCreateGateway,
  userInputCreateDevice
};
