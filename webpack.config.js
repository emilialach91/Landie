const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';



module.exports = {
    entry: {
      
      main: "./src/index.js",
      
    },
    
    output: {
        filename: "[name].[contenthash].[bundle].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
    },

    module: {
      
        rules: [
         
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              }
            },
  
          {
            test: /\.html$/i,
            loader: 'html-loader',
            options: { minimize: true }
          },
          
          {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg|ttf)$/i,
            use: [
              {
                loader: 'file-loader',
                options:{
            
                  name:"[name].[contenthash].[ext]",
                  outputPath: "imgs&fonts"
                }
              },
            ],
          },
      
        ],
      },

      plugins : [

        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),

        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
          chunkFilename: '[id].[contenthash].css',
        }),

        new CleanWebpackPlugin({}),

      ]
}
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var path = require('path');


// module.exports = {
//     entry: {
//         app: './src/index.js',
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         publicPath: '',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader",
//                         options: { minimize: true }
//                     }
//                 ]

//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg|ttf)$/i,
//                 use: [
//                   {
//                     loader: 'url-loader',
//                             'file-loader'
//                         options: {
//                             name: 'assets/images/[name].[ext]',
//                             publicPath: '../'
//                     }
//                   },
//                 ],
//               },
//             {
//                 test: /\.css$/i,
//                 use: [
//                     "style-loader",
//                     "css-loader"
//                 ]
//             },
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/index.html",
//             filename: "./index.html"
//         }),
//         new MiniCssExtractPlugin ({
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//         }),
// ]}

