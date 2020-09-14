import { get } from 'lodash';
import Service from '../../services';

const API = {
  login: async params => {
    const response = await Service.post(`/api/user/login`, params);
    const data = get(response, 'data', null);
    return data;
  },

  getUser: async () => {
    const response = await Service.get(`/api/users/profile`, {});
    const data = get(response, 'data', null);
    return data;
  },
};

export default API;
