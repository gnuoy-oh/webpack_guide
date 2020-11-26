const { PROJECT_NAME } = require("./project.env.js");
const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  chalk = require("chalk");
  
console.log(chalk.blue("webpack.common.js -> " + PROJECT_NAME));

module.exports = {
  entry: {
    [PROJECT_NAME]: `./assets/js/${PROJECT_NAME}.js`,
  },

  output: {
    path: path.resolve(__dirname, `./dist-${PROJECT_NAME}`),
    filename: "./js/[name].bundle.js",
    publicPath: "../../",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },

      // font-face generate
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "./assets/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },

      // SCSS to CSS Compile
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "./assets/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 js로 변환
          "postcss-loader", // vendor prefix, Minify
          "sass-loader", // SCSS -> CSS compile
        ],
      },

      // image file
      {
        test: /\.(png|jp(e*)g|gif|ico|svg)$/,
        include: path.resolve(__dirname, "./assets/images"),
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    // html에 사용할 이미지 copy
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets/images",
          to: "images/[path][name].[ext]",
        },
      ],
    }),

    // output CSS 경로
    new MiniCssExtractPlugin({
      filename: "css/[name]/style.min.css",
    }),
  ],

};
