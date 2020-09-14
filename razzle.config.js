'use strict';

const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const paths = require('razzle/config/paths');

const cssLoaderFinder = makeLoaderFinder('css-loader');
module.exports = {
  // eslint-disable-next-line no-unused-vars
  modify(baseConfig, { dev }, webpack) {
    /* make a copy of config */
    const config = Object.assign({}, baseConfig);

    const scssLoader = {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: dev,
      },
    };

    // Copy base css rules and add scss support
    config.module.rules.filter(cssLoaderFinder).forEach(rule => {
      const isCssModuleRule = !rule.test.test('module.css');
      const scssExclude = [paths.appBuild];
      let scssTest = /\.s[ac]ss$/;
      if (isCssModuleRule) {
        scssTest = /\.module\.s[ac]ss$/;
      } else {
        scssExclude.push(/\.module\.s[ac]ss$/);
      }

      // Use default configs
      config.module.rules.push({
        test: scssTest,
        exclude: scssExclude,
        use: [...rule.use, scssLoader],
      });
    });

    // adding ./src to module resolver so I can import modules with absolute paths
    config.resolve.modules.push('./src');

    return config;
  },
};
