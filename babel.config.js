module.exports = process.env.COMMIT
  ? {}
  : {
      presets: ['@babel/preset-env'],
      plugins: [['@vue/babel-plugin-jsx', { mergeProps: false }]],
    }
