# af-babel

> Get babel config of Ant financial for best practice.

## Introduction

This package provides the shortest approach for you to get the babel config of Ant financial, with [@umijs/babel-preset-umi](https://github.com/umijs/umi-next/tree/master/packages/babel-preset-umi) under the hood.

## Usage

```js
const afBabel = require('af-babel')
afBabel(/* Options */) // => standard babel config.
```

## Options

### presetOptions

- Type: `IPresetOptions`
- Description: Options for [@umijs/babel-preset-umi](https://github.com/umijs/umi-next/tree/master/packages/babel-preset-umi).

```typescript
export interface IPresetOptions {
  /**
   * process.env.NODE_ENV.
   */  
  nodeEnv: 'production' | 'development';
  /**
   * Flag to enable @babel/preset-typescript and its options.
   */  
  typescript?: boolean;
  /**
   * Flag to enable @babel/preset-react and its options.
   */
  react?: object;
  /**
   * debug flag for @babel/preset-env.
   */
  debug?: boolean;
  /**
   * Flag to enable @babel/preset-env and its options.
   */
  env?: object;
  /**
   * Flag to enable @babel/plugin-transform-runtime and its options.
   */
  transformRuntime?: object;
  /**
   * Flag to enable babel-plugin-transform-react-remove-prop-types and its options.
   * https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
   */
  reactRemovePropTypes?: boolean;
  /**
   * Flag to enable babel-plugin-react-require and its options.
   * https://github.com/vslinko/babel-plugin-react-require 
   */
  reactRequire?: boolean;
  /**
   * Flag to enable babel-plugin-dynamic-import-node and its options.
   * https://github.com/airbnb/babel-plugin-dynamic-import-node 
   */
  dynamicImportNode?: boolean;
  /**
   * Flag to enable babel-plugin-auto-css-modules and its options.
   * https://github.com/umijs/umi-next/blob/master/packages/babel-plugin-auto-css-modules
   */
  autoCSSModules?: boolean;
  /**
   * Flag to enable babel-plugin-named-asset-import and its options.
   * https://github.com/facebook/create-react-app/blob/master/packages/babel-plugin-named-asset-import
   */
  svgr?: object;
  /**
   * Flag to enable babel-plugin-import and its options.
   * https://github.com/ant-design/babel-plugin-import
   */
  import?: IImportPluginOpts[];
}

interface IImportPluginOpts {
    libraryName: string;
    libraryDirectory?: string;
    style?: boolean;
    camel2DashComponentName?: boolean;
}
```

### babelConfig

- Type: `IPresetOptions`
- Description: extra babel config.

```typescript
type IPresetOrPlugin = string | [string, any];

interface BabelConfig {
  plugins: IPresetOrPlugin[];
  presets: IPresetOrPlugin[];
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**af-babel** © [ULIVZ](https://github.com/ulivz) under [Richlab Team](https://www.yuque.com/richlab/join-us/invitation), Released under the [MIT](./LICENSE) License.<br>
