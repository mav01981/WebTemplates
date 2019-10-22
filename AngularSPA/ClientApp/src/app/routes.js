"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var auth_guard_service_1 = require("./auth-guard.service");
var home_component_1 = require("./home/home.component");
exports.APP_ROUTES = [
    {
        path: '', component: app_component_1.AppComponent, children: [
            {
                path: '',
                component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuard]
            },
            {
                path: 'login',
                component: login_component_1.LoginComponent,
            },
            {
                path: 'home',
                component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuard]
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.APP_ROUTES);
//# sourceMappingURL=routes.js.map