const path = require('path');

module.exports = {
  // ... other Webpack configuration settings

  module: {
    rules: [
      // ... other rules

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings inlined into the bundle
              name: 'images/[name].[hash:8].[ext]', // Output file name and path
            },
          },
        ],
      },
    ],
  },
};
