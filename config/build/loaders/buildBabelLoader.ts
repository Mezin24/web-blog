import { BuildOptions } from '../types/config';

export const buildBabelLoader = ({ isDev }: BuildOptions) => ({
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        isDev && import('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
