const proxy = require("http-proxy-middleware");

module.exports = {
    developMiddleware: app => {
      app.use(
        "/api",
        proxy({
          target: "http://localhost:5000",
        })
      )
    },
  }