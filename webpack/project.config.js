const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  /** The environment to use when building the project */
  env: NODE_ENV,
  /** The full path to the project's root directory */
  basePath: `${__dirname}/..`,
  /** The name of the directory containing the application source code */
  srcDir: './client/browser/src',

  publicDir: './public',
  /** The file name of the application's entry point */
  main: './index',
  /** The name of the directory in which to emit compiled assets */
  outDir: `./dist/${NODE_ENV}`,
  /** The base path for all projects assets (relative to the website root) */
  publicPath: NODE_ENV === 'production' ? '/' : '/',
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {
  },
  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'react',
    'react-dom',
    /*'redux',
    'react-redux',
    'redux-thunk',
    'react-router',*/
  ],
};