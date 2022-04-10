import { RouteConfig } from 'react-router-config';
import { PackageTravelPage } from '../pages/PackageTravelPage';

const routesConfig: RouteConfig[] = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: PackageTravelPage,
  },
];

export default routesConfig;
