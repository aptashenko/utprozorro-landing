import { USERS_URLS } from '@/api/services/users/enums.js';

export default (api) => ({
  GET_LIST: () => api.get(USERS_URLS.list),
  ADD: (data) => api.post(USERS_URLS.add, data),
  SEND_EMAIL: (data) => api.post(USERS_URLS.send_email, data),
  SUPPORT: (data) => api.post(USERS_URLS.support, data),
});
