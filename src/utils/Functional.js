import { isFunction } from 'lodash';

const Functional = {
  generateMessage: async error => {
    if (error && isFunction(error.text)) {
      const objMessage = await error.text();
      return JSON.parse(objMessage);
    }
    return { message: error.message, data: '' };
  },
};

export default Functional;
