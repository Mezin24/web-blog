import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module/,
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [babelLoader, fileLoader, svgLoader, scssLoader, tsLoader];
};
