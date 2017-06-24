const project      = require('./project.config.js');
const merge        = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const path         = require('path');

module.exports = merge(
  commonConfig,
  {
    devServer: {
      contentBase: path.resolve(project.basePath, project.outDir),
      publicPath: `${project.publicPath}`,
      port: 9000,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    }
  }
);

