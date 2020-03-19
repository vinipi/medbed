export default class Helpers {
    static checkUserSession() {
        return localStorage.getItem('session')
            && localStorage.getItem('tokenExpire')
            && parseInt(localStorage.getItem('tokenExpire'), 10) > Date.now()
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('session') || '{}')
    }

    static getConfig() {
        return JSON.parse(localStorage.getItem('config') || '{}')
    }

    static setConfig(config) {
        localStorage.setItem('config', JSON.stringify(config))
    }

    static getSession() {
        if (localStorage.getItem('session')) {
            return JSON.parse(localStorage.getItem('session'))
        }
        return null
    }

    static clone(object) {
        return JSON.parse(JSON.stringify(object))
    }

    static humanFileSize(size) {
        var i = Math.floor(Math.log(size) / Math.log(1024))
        return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    }
}
