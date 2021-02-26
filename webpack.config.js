const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const highlight = require('highlight.js');

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
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: [
          'url-loader',
        ],
      },
      {
        test: /\.(md)$/,
        use: [
          'html-loader',
          {
            loader: 'markdown-loader',
            options: {
              highlight: (code, lang) => {
                if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
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
      filename: './index.html',
      favicon: './src/assets/favicon.ico',
      hash: true,
      inject: true,
    }),
  ],
};
