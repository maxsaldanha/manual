(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-gerar-mapa-gerar-mapa-module"],{

/***/ "Hl33":
/*!******************************************************!*\
  !*** ./src/app/pmal/gerar-mapa/gerar-mapa.module.ts ***!
  \******************************************************/
/*! exports provided: GerarMapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerarMapaPageModule", function() { return GerarMapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _gerar_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerar-mapa-routing.module */ "kp1i");
/* harmony import */ var _gerar_mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerar-mapa.page */ "rB/f");







let GerarMapaPageModule = class GerarMapaPageModule {
};
GerarMapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gerar_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["GerarMapaPageRoutingModule"]
        ],
        declarations: [_gerar_mapa_page__WEBPACK_IMPORTED_MODULE_6__["GerarMapaPage"]]
    })
], GerarMapaPageModule);



/***/ }),

/***/ "cKC1":
/*!******************************************************!*\
  !*** ./src/app/pmal/gerar-mapa/gerar-mapa.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXJhci1tYXBhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "iBNK":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/gerar-mapa/gerar-mapa.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>gerar-mapa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n</ion-content>\n");

/***/ }),

/***/ "kp1i":
/*!**************************************************************!*\
  !*** ./src/app/pmal/gerar-mapa/gerar-mapa-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: GerarMapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerarMapaPageRoutingModule", function() { return GerarMapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gerar_mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerar-mapa.page */ "rB/f");




const routes = [
    {
        path: '',
        component: _gerar_mapa_page__WEBPACK_IMPORTED_MODULE_3__["GerarMapaPage"]
    }
];
let GerarMapaPageRoutingModule = class GerarMapaPageRoutingModule {
};
GerarMapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GerarMapaPageRoutingModule);



/***/ }),

/***/ "rB/f":
/*!****************************************************!*\
  !*** ./src/app/pmal/gerar-mapa/gerar-mapa.page.ts ***!
  \****************************************************/
/*! exports provided: GerarMapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerarMapaPage", function() { return GerarMapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gerar_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gerar-mapa.page.html */ "iBNK");
/* harmony import */ var _gerar_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gerar-mapa.page.scss */ "cKC1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GerarMapaPage = class GerarMapaPage {
    constructor() { }
    ngOnInit() {
    }
};
GerarMapaPage.ctorParameters = () => [];
GerarMapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gerar-mapa',
        template: _raw_loader_gerar_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gerar_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GerarMapaPage);



/***/ })

}]);
//# sourceMappingURL=pmal-gerar-mapa-gerar-mapa-module-es2015.js.map