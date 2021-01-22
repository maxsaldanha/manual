(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/DataEXT/Ionic/manualBioslab/src/main.ts */"zUnb");


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");







let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    },
    {
        path: 'atendimento',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-atendimento-atendimento-module */ "pmac-atendimento-atendimento-module").then(__webpack_require__.bind(null, /*! ./pmac/atendimento/atendimento.module */ "K3sn")).then(m => m.AtendimentoPageModule)
    },
    {
        path: 'imprimir',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-imprimir-imprimir-module */ "pmac-imprimir-imprimir-module").then(__webpack_require__.bind(null, /*! ./pmac/imprimir/imprimir.module */ "I59B")).then(m => m.ImprimirPageModule)
    },
    {
        path: 'desbloqueimp',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-desbloqueimp-desbloqueimp-module */ "pmac-desbloqueimp-desbloqueimp-module").then(__webpack_require__.bind(null, /*! ./pmac/desbloqueimp/desbloqueimp.module */ "LmD8")).then(m => m.DesbloqueimpPageModule)
    },
    {
        path: 'caixa',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-caixa-caixa-module */ "pmac-caixa-caixa-module").then(__webpack_require__.bind(null, /*! ./pmac/caixa/caixa.module */ "0Jgm")).then(m => m.CaixaPageModule)
    },
    {
        path: 'pagam-devol',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-pagam-devol-pagam-devol-module */ "pmac-pagam-devol-pagam-devol-module").then(__webpack_require__.bind(null, /*! ./pmac/pagam-devol/pagam-devol.module */ "cqBS")).then(m => m.PagamDevolPageModule)
    },
    {
        path: 'pagam-pendent',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-pagam-pendent-pagam-pendent-module */ "pmac-pagam-pendent-pagam-pendent-module").then(__webpack_require__.bind(null, /*! ./pmac/pagam-pendent/pagam-pendent.module */ "iXyR")).then(m => m.PagamPendentPageModule)
    },
    {
        path: 'lanc-aberto',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-lanc-aberto-lanc-aberto-module */ "pmac-lanc-aberto-lanc-aberto-module").then(__webpack_require__.bind(null, /*! ./pmac/lanc-aberto/lanc-aberto.module */ "/H/z")).then(m => m.LancAbertoPageModule)
    },
    {
        path: 'deesconto',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-deesconto-deesconto-module */ "pmac-deesconto-deesconto-module").then(__webpack_require__.bind(null, /*! ./pmac/deesconto/deesconto.module */ "YGKG")).then(m => m.DeescontoPageModule)
    },
    {
        path: 'rel-guia',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-rel-guia-rel-guia-module */ "pmac-rel-guia-rel-guia-module").then(__webpack_require__.bind(null, /*! ./pmac/rel-guia/rel-guia.module */ "Y3rW")).then(m => m.RelGuiaPageModule)
    },
    {
        path: 'control-guia',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-control-guia-control-guia-module */ "pmac-control-guia-control-guia-module").then(__webpack_require__.bind(null, /*! ./pmac/control-guia/control-guia.module */ "ziJT")).then(m => m.ControlGuiaPageModule)
    },
    {
        path: 'remes-guia',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-remes-guia-remes-guia-module */ "pmac-remes-guia-remes-guia-module").then(__webpack_require__.bind(null, /*! ./pmac/remes-guia/remes-guia.module */ "Gk/d")).then(m => m.RemesGuiaPageModule)
    },
    {
        path: 'guia-nao-rem',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-guia-nao-rem-guia-nao-rem-module */ "pmac-guia-nao-rem-guia-nao-rem-module").then(__webpack_require__.bind(null, /*! ./pmac/guia-nao-rem/guia-nao-rem.module */ "ecNC")).then(m => m.GuiaNaoRemPageModule)
    },
    {
        path: 'control-rps',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-control-rps-control-rps-module */ "pmac-control-rps-control-rps-module").then(__webpack_require__.bind(null, /*! ./pmac/control-rps/control-rps.module */ "6h9L")).then(m => m.ControlRpsPageModule)
    },
    {
        path: 'loc-paciente',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-loc-paciente-loc-paciente-module */ "pmac-loc-paciente-loc-paciente-module").then(__webpack_require__.bind(null, /*! ./pmac/loc-paciente/loc-paciente.module */ "7rsK")).then(m => m.LocPacientePageModule)
    },
    {
        path: 'loc-medico',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-loc-medico-loc-medico-module */ "pmac-loc-medico-loc-medico-module").then(__webpack_require__.bind(null, /*! ./pmac/loc-medico/loc-medico.module */ "ANAz")).then(m => m.LocMedicoPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-login-login-module */ "pmac-login-login-module").then(__webpack_require__.bind(null, /*! ./pmac/login/login.module */ "dAYz")).then(m => m.LoginPageModule)
    },
    {
        path: 'servidor',
        loadChildren: () => __webpack_require__.e(/*! import() | pmac-servidor-servidor-module */ "pmac-servidor-servidor-module").then(__webpack_require__.bind(null, /*! ./pmac/servidor/servidor.module */ "ptWL")).then(m => m.ServidorPageModule)
    },
    {
        path: 'receber',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-receber-receber-module */ "pmal-receber-receber-module").then(__webpack_require__.bind(null, /*! ./pmal/receber/receber.module */ "bioy")).then(m => m.ReceberPageModule)
    },
    {
        path: 'distribuir',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-distribuir-distribuir-module */ "pmal-distribuir-distribuir-module").then(__webpack_require__.bind(null, /*! ./pmal/distribuir/distribuir.module */ "To9j")).then(m => m.DistribuirPageModule)
    },
    {
        path: 'realocar',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-realocar-realocar-module */ "pmal-realocar-realocar-module").then(__webpack_require__.bind(null, /*! ./pmal/realocar/realocar.module */ "TWhx")).then(m => m.RealocarPageModule)
    },
    {
        path: 'descartar',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-descartar-descartar-module */ "pmal-descartar-descartar-module").then(__webpack_require__.bind(null, /*! ./pmal/descartar/descartar.module */ "WWqm")).then(m => m.DescartarPageModule)
    },
    {
        path: 'control-amostra',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-control-amostra-control-amostra-module */ "pmal-control-amostra-control-amostra-module").then(__webpack_require__.bind(null, /*! ./pmal/control-amostra/control-amostra.module */ "9aa3")).then(m => m.ControlAmostraPageModule)
    },
    {
        path: 'inf-volume',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-inf-volume-inf-volume-module */ "pmal-inf-volume-inf-volume-module").then(__webpack_require__.bind(null, /*! ./pmal/inf-volume/inf-volume.module */ "W0VE")).then(m => m.InfVolumePageModule)
    },
    {
        path: 'gerar-mapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-gerar-mapa-gerar-mapa-module */ "pmal-gerar-mapa-gerar-mapa-module").then(__webpack_require__.bind(null, /*! ./pmal/gerar-mapa/gerar-mapa.module */ "Hl33")).then(m => m.GerarMapaPageModule)
    },
    {
        path: 'ret-exm-mapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-ret-exm-mapa-ret-exm-mapa-module */ "pmal-ret-exm-mapa-ret-exm-mapa-module").then(__webpack_require__.bind(null, /*! ./pmal/ret-exm-mapa/ret-exm-mapa.module */ "MyLs")).then(m => m.RetExmMapaPageModule)
    },
    {
        path: 'imp-mapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-imp-mapa-imp-mapa-module */ "pmal-imp-mapa-imp-mapa-module").then(__webpack_require__.bind(null, /*! ./pmal/imp-mapa/imp-mapa.module */ "YCA2")).then(m => m.ImpMapaPageModule)
    },
    {
        path: 'list-trabalho',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-list-trabalho-list-trabalho-module */ "pmal-list-trabalho-list-trabalho-module").then(__webpack_require__.bind(null, /*! ./pmal/list-trabalho/list-trabalho.module */ "KbCu")).then(m => m.ListTrabalhoPageModule)
    },
    {
        path: 'dig-mapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-dig-mapa-dig-mapa-module */ "pmal-dig-mapa-dig-mapa-module").then(__webpack_require__.bind(null, /*! ./pmal/dig-mapa/dig-mapa.module */ "f5ua")).then(m => m.DigMapaPageModule)
    },
    {
        path: 'and-cultura',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-and-cultura-and-cultura-module */ "pmal-and-cultura-and-cultura-module").then(__webpack_require__.bind(null, /*! ./pmal/and-cultura/and-cultura.module */ "foZx")).then(m => m.AndCulturaPageModule)
    },
    {
        path: 'neg-cultura',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-neg-cultura-neg-cultura-module */ "pmal-neg-cultura-neg-cultura-module").then(__webpack_require__.bind(null, /*! ./pmal/neg-cultura/neg-cultura.module */ "htN0")).then(m => m.NegCulturaPageModule)
    },
    {
        path: 'lib-exame',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-lib-exame-lib-exame-module */ "pmal-lib-exame-lib-exame-module").then(__webpack_require__.bind(null, /*! ./pmal/lib-exame/lib-exame.module */ "dGz7")).then(m => m.LibExamePageModule)
    },
    {
        path: 'catalogar',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-catalogar-catalogar-module */ "pmal-catalogar-catalogar-module").then(__webpack_require__.bind(null, /*! ./pmal/catalogar/catalogar.module */ "uTw+")).then(m => m.CatalogarPageModule)
    },
    {
        path: 'pesquisar',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-pesquisar-pesquisar-module */ "pmal-pesquisar-pesquisar-module").then(__webpack_require__.bind(null, /*! ./pmal/pesquisar/pesquisar.module */ "wbbk")).then(m => m.PesquisarPageModule)
    },
    {
        path: 'desca-bandeja',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-desca-bandeja-desca-bandeja-module */ "pmal-desca-bandeja-desca-bandeja-module").then(__webpack_require__.bind(null, /*! ./pmal/desca-bandeja/desca-bandeja.module */ "h72Z")).then(m => m.DescaBandejaPageModule)
    },
    {
        path: 'config-bandeja',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-config-bandeja-config-bandeja-module */ "pmal-config-bandeja-config-bandeja-module").then(__webpack_require__.bind(null, /*! ./pmal/config-bandeja/config-bandeja.module */ "y1At")).then(m => m.ConfigBandejaPageModule)
    },
    {
        path: 'agen-exame',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-agen-exame-agen-exame-module */ "pmal-agen-exame-agen-exame-module").then(__webpack_require__.bind(null, /*! ./pmal/agen-exame/agen-exame.module */ "ihp4")).then(m => m.AgenExamePageModule)
    },
    {
        path: 'dura-exame',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-dura-exame-dura-exame-module */ "pmal-dura-exame-dura-exame-module").then(__webpack_require__.bind(null, /*! ./pmal/dura-exame/dura-exame.module */ "S5ZA")).then(m => m.DuraExamePageModule)
    },
    {
        path: 'corre-laudo',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-corre-laudo-corre-laudo-module */ "pmal-corre-laudo-corre-laudo-module").then(__webpack_require__.bind(null, /*! ./pmal/corre-laudo/corre-laudo.module */ "vIKs")).then(m => m.CorreLaudoPageModule)
    },
    {
        path: 'anular-exame',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-anular-exame-anular-exame-module */ "pmal-anular-exame-anular-exame-module").then(__webpack_require__.bind(null, /*! ./pmal/anular-exame/anular-exame.module */ "T2vu")).then(m => m.AnularExamePageModule)
    },
    {
        path: 'atl-set-realiza',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-atl-set-realiza-atl-set-realiza-module */ "pmal-atl-set-realiza-atl-set-realiza-module").then(__webpack_require__.bind(null, /*! ./pmal/atl-set-realiza/atl-set-realiza.module */ "KSrp")).then(m => m.AtlSetRealizaPageModule)
    },
    {
        path: 'alt-form-mapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-alt-form-mapa-alt-form-mapa-module */ "pmal-alt-form-mapa-alt-form-mapa-module").then(__webpack_require__.bind(null, /*! ./pmal/alt-form-mapa/alt-form-mapa.module */ "rBAy")).then(m => m.AltFormMapaPageModule)
    },
    {
        path: 'redig-rean',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-redig-rean-redig-rean-module */ "pmal-redig-rean-redig-rean-module").then(__webpack_require__.bind(null, /*! ./pmal/redig-rean/redig-rean.module */ "OCdc")).then(m => m.RedigReanPageModule)
    },
    {
        path: 'desblo-impr',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-desblo-impr-desblo-impr-module */ "pmal-desblo-impr-desblo-impr-module").then(__webpack_require__.bind(null, /*! ./pmal/desblo-impr/desblo-impr.module */ "VOBR")).then(m => m.DesbloImprPageModule)
    },
    {
        path: 'personalizada',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-personalizada-personalizada-module */ "pmal-personalizada-personalizada-module").then(__webpack_require__.bind(null, /*! ./pmal/personalizada/personalizada.module */ "epNQ")).then(m => m.PersonalizadaPageModule)
    },
    {
        path: 'geri-exame',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-geri-exame-geri-exame-module */ "pmal-geri-exame-geri-exame-module").then(__webpack_require__.bind(null, /*! ./pmal/geri-exame/geri-exame.module */ "yQFg")).then(m => m.GeriExamePageModule)
    },
    {
        path: 'rastrea-exame',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-rastrea-exame-rastrea-exame-module */ "pmal-rastrea-exame-rastrea-exame-module").then(__webpack_require__.bind(null, /*! ./pmal/rastrea-exame/rastrea-exame.module */ "CmSt")).then(m => m.RastreaExamePageModule)
    },
    {
        path: 'info-atendi',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-info-atendi-info-atendi-module */ "pmal-info-atendi-info-atendi-module").then(__webpack_require__.bind(null, /*! ./pmal/info-atendi/info-atendi.module */ "Kwvz")).then(m => m.InfoAtendiPageModule)
    },
    {
        path: 'hist-paciente',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-hist-paciente-hist-paciente-module */ "pmal-hist-paciente-hist-paciente-module").then(__webpack_require__.bind(null, /*! ./pmal/hist-paciente/hist-paciente.module */ "q9VG")).then(m => m.HistPacientePageModule)
    },
    {
        path: 'tab-result',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-tab-result-tab-result-module */ "pmal-tab-result-tab-result-module").then(__webpack_require__.bind(null, /*! ./pmal/tab-result/tab-result.module */ "t/fJ")).then(m => m.TabResultPageModule)
    },
    {
        path: 'formato',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-formato-formato-module */ "pmal-formato-formato-module").then(__webpack_require__.bind(null, /*! ./pmal/formato/formato.module */ "VBx0")).then(m => m.FormatoPageModule)
    },
    {
        path: 'qtd-exam-tec',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-qtd-exam-tec-qtd-exam-tec-module */ "pmal-qtd-exam-tec-qtd-exam-tec-module").then(__webpack_require__.bind(null, /*! ./pmal/qtd-exam-tec/qtd-exam-tec.module */ "OVVn")).then(m => m.QtdExamTecPageModule)
    },
    {
        path: 'laudo-corrigido',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-laudo-corrigido-laudo-corrigido-module */ "pmal-laudo-corrigido-laudo-corrigido-module").then(__webpack_require__.bind(null, /*! ./pmal/laudo-corrigido/laudo-corrigido.module */ "Uagw")).then(m => m.LaudoCorrigidoPageModule)
    },
    {
        path: 'and-cult-consul',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-and-cult-consul-and-cult-consul-module */ "pmal-and-cult-consul-and-cult-consul-module").then(__webpack_require__.bind(null, /*! ./pmal/and-cult-consul/and-cult-consul.module */ "k20B")).then(m => m.AndCultConsulPageModule)
    },
    {
        path: 'equip-ativo',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-equip-ativo-equip-ativo-module */ "pmal-equip-ativo-equip-ativo-module").then(__webpack_require__.bind(null, /*! ./pmal/equip-ativo/equip-ativo.module */ "nkiD")).then(m => m.EquipAtivoPageModule)
    },
    {
        path: 'relatorio',
        loadChildren: () => __webpack_require__.e(/*! import() | pmal-relatorio-relatorio-module */ "pmal-relatorio-relatorio-module").then(__webpack_require__.bind(null, /*! ./pmal/relatorio/relatorio.module */ "8G8L")).then(m => m.RelatorioPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


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