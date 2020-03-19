const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/api', { target: 'http://127.0.0.1:10080' }))
    app.use(proxy('/config', { target: 'http://127.0.0.1:10080' }))
}
