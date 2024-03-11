const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
          REACT_APP_FIREBASE_API_KEY: JSON.stringify(
            process.env.REACT_APP_FIREBASE_API_KEY,
          ),
          REACT_APP_FIREBASE_AUTH_DOMAIN: JSON.stringify(
            process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
          ),
          REACT_APP_FIREBASE_DATABASE_URL: JSON.stringify(
            process.env.REACT_APP_FIREBASE_DATABASE_URL,
          ),
          REACT_APP_FIREBASE_PROJECT_ID: JSON.stringify(
            process.env.REACT_APP_FIREBASE_PROJECT_ID,
          ),
          REACT_APP_FIREBASE_STORAGE_BUCKET: JSON.stringify(
            process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
          ),
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(
            process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
          ),
          REACT_APP_FIREBASE_APP_ID: JSON.stringify(
            process.env.REACT_APP_FIREBASE_APP_ID,
          ),
          REACT_APP_FIREBASE_MEASUREMENT_ID: JSON.stringify(
            process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
          ),
          FIREBASE_FUNCTIONS_ROUTE_PROD: JSON.stringify(
            process.env.FIREBASE_FUNCTIONS_ROUTE_PROD,
          ),
          PROD_ORIGIN: JSON.stringify(process.env.PROD_ORIGIN),
        },
      },
    }),
  ],
});
