const CircularDependencyPlugin = require('circular-dependency-plugin'); //AngularUpgrade14
const { share, shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
let sharedDependencies = shareAll({
  singleton: true,
  strictVersion: true,
  requiredVersion: 'auto',
  includeSecondaries: true,
}, ['angular2-query-builder', '@cds/core', 'angulartics2', 'jspdf-yworks', '@nsx/portal-components']);

const policyconfig = withModuleFederationPlugin({
  shared: {
    ...share({"@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }}),
    ...share({"@cds/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }}),
    ...sharedDependencies,
  },
  sharedMappings: ['sharedlib'],
});

  // policyconfig.optimization.concatenateModules = true;
  // policyconfig.optimization.splitChunks = {
  //   maxAsyncRequests: 20, // Maximum number of parallel requests when on-demand loading.
  //   automaticNameDelimiter: '-',
  //   minSize: 250000, // Minimum size, in bytes, for a chunk to be generated.
  //   cacheGroups: {
  //     default: {
  //       chunks: 'async',
  //       minChunks: 2,
  //       priority: 10, // Value should be less than vendor as shared application modules only should be part of default.
  //     },
  //     //vendors: false, // Turns off vendor bundles
  //     vendor: {
  //       test: /[\\/]node_modules[\\/]/,
  //       name: 'vendors',
  //       maxSize: 3000000, // 3mb
  //       minSize: 1500000, // 1.5 mb,
  //       priority: 12 // Value should be between default and yfiles. As node_modules except yfiles should only be in vendor.
  //     },
  //     yfiles: { // Breaks yfiles in multiple chunks
  //       test: /[\\/]yfiles[\\/]/,
  //       priority: 15, // Value should be more that vendor and default. This is becuase yfiles should be moved out of vendor and default chunks
  //       chunks :'async',
  //       enforce:true,
  //       maxSize: 3000000, // 3mb
  //       minSize: 1500000 // 1.5 mb
  //     }
  //   }
  // };

  policyconfig.optimization.runtimeChunk = false;
  
  // Uncomment while profiling build.
  /* config.plugins.push(
    new webpack.ProgressPlugin({
      entries: true,
      modules: true,
      modulesCount: 100,
      profile: true,
      handler(percentage, message, ...args) {
        console.info(new Date().toLocaleString(), percentage, message, ...args)
      }
    })
  ); */
  // policyconfig.plugins.push(new CircularDependencyPlugin({
  //   // exclude detection of files based on a RegExp
  //   exclude: /node_modules/,
  //   // include specific files based on a RegExp
  //   include: /src|projects/,
  //   // add errors to webpack instead of warnings
  //   failOnError: true,
  //   // allow import cycles that include an asyncronous import,
  //   // e.g. via import(/* webpackMode: "weak" */ './file.js')
  //   allowAsyncCycles: false,
  //   // set the current working directory for displaying module paths
  //   cwd: process.cwd(),
  // }));
  // policyconfig.plugins.splice(1, 1);
 module.rules = [
      {
        test: /\.worker\.(c|m)?js$/i,
        loader: "worker-loader",
        options: {
          esModule: true,
        },
      },
    ];
    
module.exports = policyconfig;

  console.log("vivek", (module.exports));
