const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 현재 작업할 서비스만 번들링하는게 조금 더 빠를 것으로 보임
  entry: {
    "brick": "./assets/js/brick.js",
    "cluster": "./assets/js/cluster.js",
    "dashboard": "./assets/js/dashboard.js",
    "db-browser": "./assets/js/db-browser.js",
    'hdfs': "./assets/js/hdfs.js",
    "sherman": "./assets/js/sherman.js",                         // sherman, studio
    "styleguide": "./assets/js/styleguide.js",
    "meta": "./assets/js/meta.js",                               // account, acl, menu
    // "hadoop-manager": "./assets/js/hadoop-manager.js",
    // "nms-plus-sherman": "./assets/js/nms-plus-sherman.js",
    // "suwon": "./assets/js/suwon.js",
    // 'mda': "./assets/js/mda.js",
    // "vlu-bis-sherman": "./assets/js/vlu-bis-sherman.js",
    // "vlu-bis-brick": "./assets/js/vlu-bis-brick.js",
    // "kdn-m-sherman": "./assets/js/kdn-m-sherman.js",
    // "kdn-v": "./assets/js/kdn-v.js",
    // "kdn-v-sherman": "./assets/js/kdn-v-sherman.js",
    // "kdn-m-brick": "./assets/js/kdn-m-brick.js",
  },

  optimization: {
    minimize: true,
    concatenateModules: true,
  },

  module: {
    rules: [{
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
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        }, ],
      },

      // CSS Compile
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./assets/css/db-browser"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 js로 변환
          "postcss-loader", // vendor prefix, Minify
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
            context: "assets/"
          },
        },
      },

      // svg icon
      // {
      //   test: /\.svg$/,
      //   include: path.resolve(__dirname, "./assets/images"),
      //   use: {
      //     loader: "svg-sprite-loader",
      //     options: {},
      //   },
      // },
    ]

  },

  plugins: [
    // new CleanWebpackPlugin({
    // }),

    // html에 사용할 이미지 copy
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: './assets/images', 
          to: 'images/[path][name].[ext]',
      },
      ],
    }),

    // output CSS 경로
    new MiniCssExtractPlugin({
      filename: "css/[name]/style.min.css",
    }),

    // generate svg
    // new SvgSpriteLoaderPlugin({}),

    // new HtmlWebpackPlugin({
    //   title: "Output Management",
    // }),
  ],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "../../",
  },
}