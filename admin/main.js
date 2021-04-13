(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\Jayesh\scrap-app\src\main.ts */"zUnb");


/***/ }),

/***/ "3zNB":
/*!***************************************************************!*\
  !*** ./src/app/@core/backend/common/common-backend.module.ts ***!
  \***************************************************************/
/*! exports provided: CommonBackendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBackendModule", function() { return CommonBackendModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/users.service */ "4FL0");
/* harmony import */ var _api_users_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/users.api */ "W7rx");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ "lKVI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const API = [_api_users_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]];
const SERVICES = [
    _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
];
class CommonBackendModule {
}
CommonBackendModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CommonBackendModule });
CommonBackendModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CommonBackendModule_Factory(t) { return new (t || CommonBackendModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CommonBackendModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "4FL0":
/*!****************************************************************!*\
  !*** ./src/app/@core/backend/common/services/users.service.ts ***!
  \****************************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_users_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/users.api */ "W7rx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class UsersService {
    constructor(api, http) {
        this.api = api;
        this.http = http;
    }
    AdminLogin(data) {
        return this.api.AdminLogin(data);
    }
    GetAllUsersList() {
        return this.api.GetAllUsersList();
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_users_api__WEBPACK_IMPORTED_MODULE_2__["UsersApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "L21N":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["scrap-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "V5UK":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "L21N");
/* harmony import */ var _backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend/common/common-backend.module */ "3zNB");
/* harmony import */ var _backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend/common/services/users.service */ "4FL0");
/* harmony import */ var _backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend/common/api/http.service */ "sZbP");
/* harmony import */ var _backend_common_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backend/common/services/api.service */ "lKVI");
/* harmony import */ var _backend_common_api_users_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend/common/api/users.api */ "W7rx");
/* harmony import */ var _backend_common_api_auth_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backend/common/api/auth.api */ "w7S6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class CoreModule {
    constructor(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](CoreModule, 12)); }, providers: [
        _backend_common_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _backend_common_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
        _backend_common_api_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _backend_common_api_users_api__WEBPACK_IMPORTED_MODULE_6__["UsersApi"],
        _backend_common_api_auth_api__WEBPACK_IMPORTED_MODULE_7__["AuthApi"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _backend_common_common_backend_module__WEBPACK_IMPORTED_MODULE_2__["CommonBackendModule"]] }); })();


/***/ }),

/***/ "W7rx":
/*!*******************************************************!*\
  !*** ./src/app/@core/backend/common/api/users.api.ts ***!
  \*******************************************************/
/*! exports provided: UsersApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApi", function() { return UsersApi; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "sZbP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "lKVI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");









class UsersApi {
    constructor(api, http, apiService) {
        this.api = api;
        this.http = http;
        this.apiService = apiService;
        this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGM2YWE3NmEwMWNkMWUwMjNiMDY2NSIsInVzZXJuYW1lIjoidW5kZWZpbmVkIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjA4OTYyNzEyfQ.B_DSG9J4wBNcw3EgyXIis7-V8KJGXolNYcfQDbGsOeo";
        this.apiController = 'users';
        this.url = apiService.url + 'users/';
    }
    AdminLogin(data) {
        let url = this.url + 'login/admin';
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            return result;
        }));
    }
    ;
    GetAllUsersList() {
        let url = this.url + 'get-all-users';
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'token': this.token }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            return result;
        }));
    }
    ;
}
UsersApi.ɵfac = function UsersApi_Factory(t) { return new (t || UsersApi)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
UsersApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UsersApi, factory: UsersApi.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@core/core.module */ "V5UK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();


/***/ }),

/***/ "lKVI":
/*!**************************************************************!*\
  !*** ./src/app/@core/backend/common/services/api.service.ts ***!
  \**************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
class ApiService {
    constructor() {
        this.url = 'http://localhost:3000/';
    }
}


/***/ }),

/***/ "sZbP":
/*!**********************************************************!*\
  !*** ./src/app/@core/backend/common/api/http.service.ts ***!
  \**********************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HttpService {
    constructor(http) {
        this.http = http;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | scrap-scrap-module */ "scrap-scrap-module").then(__webpack_require__.bind(null, /*! ./scrap/scrap.module */ "veyI")).then(m => m.ScrapAppModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w7S6":
/*!******************************************************!*\
  !*** ./src/app/@core/backend/common/api/auth.api.ts ***!
  \******************************************************/
/*! exports provided: AuthApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthApi", function() { return AuthApi; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "sZbP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "lKVI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AuthApi {
    constructor(api, http, apiService) {
        this.api = api;
        this.http = http;
        this.apiService = apiService;
        this.apiController = 'users';
        this.url = apiService.url + 'users/';
    }
    session() {
        let url = this.url + 'session';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => {
            return result;
        }));
    }
    ;
}
AuthApi.ɵfac = function AuthApi_Factory(t) { return new (t || AuthApi)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AuthApi.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthApi, factory: AuthApi.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map