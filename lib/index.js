module.exports = function ({
  presetOptions = {},
  babelConfig = {},
  ...restBabelOptions
} = {}) {
  return {
    ...restBabelOptions,
    // Tell babel to guess the type, instead assuming all files are modules
    // https://github.com/webpack/webpack/issues/4039#issuecomment-419284940
    sourceType: 'unambiguous',
    babelrc: false,
    presets: [
      [
        require.resolve('@umijs/babel-preset-umi/app'),
        require('@umijs/utils').deepmerge(
          {
            nodeEnv: 'production',
            import: [
              { libraryName: 'antd-mobile', style: true },
              {
                libraryName: 'lodash',
                libraryDirectory: '',
                camel2DashComponentName: false, // default: true
              }
            ]
          },
          presetOptions
        ),
      ],
      ...(babelConfig.presets || []),
    ],
    plugins: [...(babelConfig.plugins || [])].filter(Boolean),
  }
}
