import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = {
    entry: paths.entryPath,
    resolve: {
      alias: {
        Components: paths.componentsPath,
        Pages: paths.pagesPath,
        Store: paths.storePath,
        Styles: paths.stylesPath,
        Api: paths.apiPath,
      }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.module\.s(a|c)ss$/,
              loader: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    camelCase: true,
                    sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    sourceMap: true,
                    plugins: () => [
                        require('autoprefixer')({
                        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                      })
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            },
            {
              test: /\.s(a|c)ss$/,
              exclude: /\.module.(s(a|c)ss)$/,
              loader: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    sourceMap: true,
                    plugins: () => [
                        require('autoprefixer')({
                        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
                      })
                    ]
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['url-loader?limit=10000', 'img-loader']
            }
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: `${paths.cssFolder}/[name].[hash].css`,
            chunkFilename: `${paths.cssFolder}/[name].[hash].css`,
          }),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        })
    ]
};