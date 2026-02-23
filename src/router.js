// Simple hash-based router
export class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = null;
        window.addEventListener('hashchange', () => this.resolve());
    }

    resolve() {
        const hash = window.location.hash || '#/login';
        let matched = null;
        let params = {};

        for (const route of this.routes) {
            const pattern = route.path.replace(/:(\w+)/g, '(?<$1>[^/]+)');
            const regex = new RegExp(`^${pattern}$`);
            const match = hash.replace('#', '').match(regex);
            if (match) {
                matched = route;
                params = match.groups || {};
                break;
            }
        }

        if (!matched) {
            matched = this.routes.find(r => r.path === '/login') || this.routes[0];
        }

        this.currentRoute = { ...matched, params };
        if (this.onNavigate) this.onNavigate(this.currentRoute);
    }

    navigate(path) {
        window.location.hash = `#${path}`;
    }

    start() {
        this.resolve();
    }
}

export function navigateTo(path) {
    window.location.hash = `#${path}`;
}
