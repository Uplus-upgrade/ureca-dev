import { http, HttpResponse } from 'msw';
import userData from './data/userInfoData.json';
import popularMobile from './data/popularMobile.json';
export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ userData });
  }),

  http.get('/api/popular-mobile', () => {
    return HttpResponse.json({ popularMobile });
  }),
];
