const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "xxx", //需要代理的目标服务器地址
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    })
  )
}
