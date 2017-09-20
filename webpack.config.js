const path = require('path');
module.exports = {
  egg: true,
  proxy: false,
  framework: 'react',
  prefix: 'static',
  buildPath: 'react/public',
  publicPath: '/react/public/',
  entry: {
    include: ['app/web/page', { layout: 'app/web/view/layout.jsx?loader=false' }],
    exclude: ['app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store'
  },
  cssExtract: true,
  cssModule: {
    include: 'app/web/page/css/module'
  },
  loaders: {
    eslint: {
      options: {
        fix: true
      }
    },
    css: {
      exclude: []
    }
  },
  onClient(){
  },
  onServer(){
  }
};