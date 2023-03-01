const path = require("path")
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, "src/assets/icons")
    config.module
      .rule("svg-sprite")
      .test(value, /\.svg$/)
    include.add(dir).end()//只包含icons目录
      .use("svg-sprite-loader").loader(value, "svg-sprite-loader").options(value, { extract: false }).end()
    config.plugin("svg-sprite").use(require("svg-sprite-loader/plugin"), args, [{ plainSprite: true }])
    config.module.rule("svg").exclude.add(dir)
  }
}
