const { resolve } = require('path')
const afBabel = require('../lib')

const cwd = resolve(__dirname, '..')
const removeCwd = path => path.replace(cwd, '')

const expectConfigToMatchSnapshot = config => {
  const { plugins = [], presets = [], ...rest } = config
  const normalize = item => {
    if (Array.isArray(item)) {
      return [removeCwd(item[0]), ...item.slice(1)]
    } else if (typeof item === 'string') {
      return removeCwd(item)
    }
  }

  config = {
    plugins: plugins.map(normalize),
    presets: presets.map(normalize),
    ...rest,
  }

  expect(config).toMatchSnapshot()
}

it('default config', function () {
  const babel = afBabel()
  expectConfigToMatchSnapshot(babel)
})

it('presetOptions', function () {
  const babel = afBabel({
    presetOptions: {
      env: {
        targets: {
          chrome: 73
        },
      }
    }
  })
  expectConfigToMatchSnapshot(babel)
})

it('babelConfig', function () {
  const babel = afBabel({
    babelConfig: {
      plugins: [
        ['babel-plugin-import', { libraryName: 'antd-mobile', style: true }]
      ]
    }
  })
  expectConfigToMatchSnapshot(babel)
})
