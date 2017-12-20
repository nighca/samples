import path from 'path';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import isomorphicConfig from './isomorphic';

global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  isomorphicConfig
).server(path.resolve(__dirname, '..'), () => {
  require('./server.jsx');
});
