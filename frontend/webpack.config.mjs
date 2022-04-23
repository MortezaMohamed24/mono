import url from "node:url";
import path from "node:path";
import HTMLWebpackPlugin from "html-webpack-plugin";


const fileurl = import.meta.url
const filename = url.fileURLToPath(fileurl);
const dirname = path.dirname(filename);


const mode    = "development";
const entry   = "./index";
const devtool = "inline-source-map";
const context = path.join(dirname, "src");


const output  = {
  filename: "[name].bundle.js",
  path: path.join(dirname, "dist"),
  clean: false,
};


const plugins  = [
  // new HTMLWebpackPlugin({ 
  //   template: "../public/index.html",
  // })
];


const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.js?$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react"
          ]
        }
      },
      exclude: /node_modules/,
    }, 
    { 
      test: /\.scss$/u, 
      use: [ 
        {
          loader: "style-loader",
          // options: { injectType: "singletonStyleTag" }
        }, {
          loader: "css-loader",
          options: { 
            modules: "local", 
            sourceMap: true, 
          }
        }, 
        "sass-loader" 
      ]
    }, 
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }, 
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    } 
  ] 
};


const resolve = {
  alias: {
    // TODO: Remove alias
    boards: "/features/boards",
    // TODO: Remove alias
    labels: "/features/labels",
  },
  extensions: [".scss", ".tsx", ".ts", ".js", ".jsx"]
};


export default {
  mode,
  entry,
  module,
  output, 
  context,
  devtool,
  plugins, 
  resolve,
}