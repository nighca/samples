import Home from './Home';
import Notfound from './Notfound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/404',
    exact: true,
    component: Notfound
  }
];

export default routes;
