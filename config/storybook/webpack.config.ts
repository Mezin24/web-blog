import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.extensions?.push('ts', 'tsx');
  config.resolve?.modules?.push(paths.src);

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module.rules = config!.module!.rules!.map(
      (rule: RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
      }
    );
  }
  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoaders(true));
  config.resolve?.modules?.unshift(paths.src);
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
