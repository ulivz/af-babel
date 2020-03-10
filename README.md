# af-babel

> Mobile appication babel config for Ant financial, based on [@umijs/babel-preset-umi](https://github.com/umijs/umi-next/tree/master/packages/babel-preset-umi).

For more details please head to [live docs](https://sherry.antfin-inc.com/under-the-hood/packages/af-babel.html). 

## Usage

```js
const afBabel = require('af-babel')
afBabel(/* Options */)
```

## Options

### presetOptions

```typescript
interface IImportPluginOpts {
    libraryName: string;
    libraryDirectory?: string;
    style?: boolean;
    camel2DashComponentName?: boolean;
}

export interface IPresetOptions {
    nodeEnv: 'production' | 'development';
    typescript?: boolean;
    react?: object;
    debug?: boolean;
    env?: object;
    transformRuntime?: object;
    // https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types
    reactRemovePropTypes?: boolean;
    // https://github.com/vslinko/babel-plugin-react-require
    reactRequire?: boolean;
    // https://github.com/airbnb/babel-plugin-dynamic-import-node
    dynamicImportNode?: boolean;
    // https://github.com/umijs/umi-next/blob/master/packages/babel-plugin-auto-css-modules
    autoCSSModules?: boolean;
    // https://github.com/facebook/create-react-app/blob/master/packages/babel-plugin-named-asset-import
    svgr?: object;
    import?: IImportPluginOpts[];
}
```

### babelConfig

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

**depcost** © [ULIVZ](https://github.com/ulivz) under [Richlab Team](https://www.yuque.com/richlab/join-us/invitation), Released under the [MIT](./LICENSE) License.<br>
