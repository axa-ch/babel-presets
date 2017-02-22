module.exports = {
  presets: [
    require('babel-preset-es2025')
  ],

  plugins: [
    require('babel-plugin-transform-object-assign'),
    require('babel-plugin-transform-decorators-legacy'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-object-rest-spread')
  ]
}
