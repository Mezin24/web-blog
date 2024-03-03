import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildPaths } from './types/config';

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
