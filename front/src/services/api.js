import Session from './session';
import Logger from './logger';

const logger = new Logger('api.js');

export default class ApiService {
    static getApiHost() {
        return 'api';
    }

    static log(level, module, params) {
        return ApiService.fetch({
            method: 'post',
            path: '/log/{level}'
        }, {
            level: level
        }, {
            body: JSON.stringify({
                module: module,
                params: params
            })
        })
            .catch((err) => {
                console.error(err);
            });
    }

    static prepareRoute(route, params) {
        const preparedRoute = Session.clone(route);
        preparedRoute.path = ApiService.replaceInPath(preparedRoute.path, params);
        return preparedRoute;
    }

    static replaceInPath(path, params) {
        let pathReplaced = path;
        let queryParams = '';
        Object.keys(params).forEach(key => {
            if (pathReplaced.indexOf('{' + key + '}') !== -1) {
                pathReplaced = pathReplaced.replace('{' + key + '}', params[key]);
            } else {
                if (!queryParams) {
                    queryParams = '?';
                    queryParams += key + '=' + params[key];
                } else {
                    queryParams += '&' + key + '=' + params[key];
                }
            }
        });
        return pathReplaced + queryParams;
    }

    static async fetch(route, params = {}, optionsSupp = {}) {
        let routeReplaced = Object.assign({}, route);
        Object.assign(routeReplaced, {
            path: ApiService.replaceInPath(route.path, params)
        });
        const session = JSON.parse(window.localStorage.getItem('session'));

        const token = (session && session.token) || null;
        const options = {
            headers: { 'Content-Type': 'application/json' },
            method: route.method
        };

        Object.assign(options, optionsSupp);
        options.headers.Authorization = ('Bearer ' + (options.token || token));
        options.headers['Accept-Language'] = localStorage.getItem('lang') || 'FR';
        const response = await fetch(ApiService.getApiHost() + routeReplaced.path, options);
        if (response.status === 401) {
            window.localStorage.removeItem('session');
            document.location.href = '/?returnTo=' + encodeURIComponent(window.location.pathname)
                + '&uuid=' + JSON.parse(localStorage.getItem('session') || '{}').uid;
        }
        if (!response.ok) {
            if (route.path === '/log/{level}') {
                return;
            }
            const error = new Error();
            error.code = response.status;
            error.message = `fetch ${response.url}, `;
            let errorMessage = '';
            try {
                const json = await response.json();
                errorMessage = json.message || 'An error occured';
            } catch (err) {
                logger.error('Can\'t parse response.json()');
            }
            error.message += errorMessage;
            throw error;
        }
        try {
            return await response.json();
        } catch (ex) {
            return await {};
        }
    }
}
