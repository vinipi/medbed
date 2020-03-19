import Session from './session'
import ApiService from './api'

class Logger {
    debug = (...options) => {
        if (Session.config && Session.config.env === 'development') {
            this.log('debug', options)
        }
    }
    info = (...options) => {
        this.log('info', options)
    }
    warn = (...options) => {
        this.log('warn', options)
    }
    error = (...options) => {
        this.log('error', options)
    }
    log = (level, ...options) => {
        console[level](this.module, ...options)
        ApiService.log(level, this.module, options)
    }

    constructor(module) {
        this.module = module
    }
}

export default Logger
