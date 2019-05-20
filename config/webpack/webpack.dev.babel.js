import paths from "./paths";

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: paths.outputPath,
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  watchOptions: {
    poll: true,
  },
  performance: {
    hints: "warning",
    maxAssetSize: 450000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => {
      return assetFilename.endsWith(".scss") || assetFilename.endsWith(".js");
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    historyApiFallback: true,
  },
};
