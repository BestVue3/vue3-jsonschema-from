import path from 'path'
import ts from 'rollup-plugin-typescript2'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import resolvePlugin from '@rollup/plugin-node-resolve'

const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, 'core')
const resolve = p => path.resolve(packageDir, p)

const name = '@v3jsf/core'

const pkg = require(resolve(`package.json`))

function createConfig() {
  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...['vue'],
  ]

  const tsPlugin = ts({
    check: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: true,
        declaration: true,
      },
      exclude: ['**/__tests__', 'test-dts', 'node_modules'],
      include: [
        'lib/**/*.ts',
        'lib/**/*.tsx',
        'tests/**/*.ts',
        'tests/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.tsx',
      ],
    },
  })

  return {
    input: resolve('src/index.ts'),
    external,
    output: {
      file: resolve(`dist/${name}.esm-bundler.js`),
      format: `es`,
    },
    plugins: [
      // json({
      //   namedExports: false
      // }),
      tsPlugin,
      resolvePlugin({
        preferBuiltins: true,
      }),
      babel({
        exclude: /node_modules/,
        presets: ['@babel/preset-env'],
        plugins: [['@vue/babel-plugin-jsx', { mergeProps: false }]],
        extensions: ['.ts', '.tsx'],
      }),
      // ...nodePlugins,
      // ...plugins,
    ],
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
    treeshake: {
      moduleSideEffects: false,
    },
  }
}

const configs = [createConfig()]

module.exports = configs
