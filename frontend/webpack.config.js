const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


const dirname = __dirname;

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

const module_ = {rules: [{
  test: /\.(ts|tsx)$/,
  use: 'ts-loader',
  exclude: /nodemodules_/,
},{
  test: /\.js?$/,
  use: {
    loader: "babel-loader",
    options: {presets: ["@babel/preset-react"]}
  },
  exclude: /nodemodules_/,
}, { 
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
}, {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}, {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
} ] };

const resolve = {
  alias: {
    "/app": path.resolve(dirname, "./src/app"),
    "/api": path.resolve(dirname, "./src/api"),
    "/store": path.resolve(dirname, "./src/store"),
    "/user": path.resolve(dirname, "./src/features/user"),
    "/boards": path.resolve(dirname, "./src/features/boards"),
    "/lists": path.resolve(dirname, "./src/features/lists"),
    "/cards": path.resolve(dirname, "./src/features/cards"),
    "/labels": path.resolve(dirname, "src/features/labels"),
    "/checklists": path.resolve(dirname, "./src/features/checklists"),
    "/checkitems": path.resolve(dirname, "./src/features/checkitems"),
    
    "/util": path.resolve(dirname, "./src/util"),
    "/pages": path.resolve(dirname, "./src/pages"),
    "/style": path.resolve(dirname, "./src/style"),
    "/popups": path.resolve(dirname, "./src/components/popups"),
    "/modules": path.resolve(dirname, "./src/components/modules"),
    "/checker": path.resolve(dirname, "./src/util/checker"),
    "/features": path.resolve(dirname, "./src/features"),
    "/templates": path.resolve(dirname, "./src/templates"),
    "/components": path.resolve(dirname, "./src/components"),
  },
  extensions: [".scss", ".tsx", ".ts", ".js", ".jsx"]
};


module.exports = {
  mode,
  context,
  entry,
  output, 
  devtool,
  plugins, 
  module: module_,
  resolve,
};