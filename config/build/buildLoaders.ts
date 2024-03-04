import { RuleSetRule } from 'webpack';

export const buildLoaders = (): RuleSetRule[] => {
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
};
