import React from 'react'

export function withProxy(Component) {
    if (!window.require) {
        return function(props) {
            return <Component {...props} />
        }
    }

    const electron = window.require('electron')

    function getProxyfunc(ip, port) {
        return electron.ipcRenderer.sendSync('proxy', ip, port)
    }

    function closeProxy(sshPort) {
        return electron.ipcRenderer.send('endProxy', sshPort)
    }

    return function(props) {
        return <Component {...props} getProxy={getProxyfunc} closeProxy={closeProxy} />
    }
}
