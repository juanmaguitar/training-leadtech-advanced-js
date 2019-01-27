// reference → https://github.com/umijs/umi/blob/master/packages/babel-preset-umi/src/index.js
module.exports = function(_, opts = {}) {

  const {
    useBuiltIns = false,
    loose = false,
    targets = { browsers: ['last 2 versions'] }
  } = opts;

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        targets,
        loose,
        useBuiltIns
      },
    ]
  ]

  const plugins = [
    // https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
    [require.resolve('@babel/plugin-proposal-optional-chaining'), { loose }]
  ]

  return {
    presets,
    plugins,
  }
}
