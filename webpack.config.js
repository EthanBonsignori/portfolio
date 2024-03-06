const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const highlight = require('highlight.js');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'main.js',
  },
  devServer: {
    port: 4000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(md)$/,
        use: [
          'html-loader',
          {
            loader: 'markdown-loader',
            options: {
              highlight: (code, lang) => {
                if (
                  !lang ||
                  ['text', 'literal', 'nohighlight'].includes(lang)
                ) {
                  return `<pre class="hljs">${code}</pre>`;
                }
                const html = highlight.highlight(lang, code).value;
                return `<span class="hljs">${html}</span>`;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
      hash: true,
      inject: true,
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(
        process.env.REACT_APP_FIREBASE_API_KEY,
      ),
      'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      ),
      'process.env.REACT_APP_FIREBASE_DATABASE_URL': JSON.stringify(
        process.env.REACT_APP_FIREBASE_DATABASE_URL,
      ),
      'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_PROJECT_ID,
      ),
      'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      ),
      'process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      ),
      'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_APP_ID,
      ),
      'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(
        process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
      ),
    }),
  ],
};
