const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.(jpg|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 25000
            }
        }
      },

      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", 'sass-loader', 'postcss-loader'],
      },

    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.ProvidePlugin({
      "React": "react",
   }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./static/frontend"),
    compress: true,
    liveReload: true, // Ensure live reload is enabled
    port: 3000,
    proxy: {
      "/api": "http://localhost:8000", // Forward API requests to Django
    },
  },
};
