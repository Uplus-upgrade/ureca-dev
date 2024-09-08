import { http, HttpResponse } from 'msw';
import userData from './data/userInfoData.json';

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({ userData });
  }),
];
