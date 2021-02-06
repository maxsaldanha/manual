(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-dig-mapa-dig-mapa-module"],{

/***/ "NkST":
/*!************************************************!*\
  !*** ./src/app/pmal/dig-mapa/dig-mapa.page.ts ***!
  \************************************************/
/*! exports provided: DigMapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigMapaPage", function() { return DigMapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dig_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dig-mapa.page.html */ "pWvL");
/* harmony import */ var _dig_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dig-mapa.page.scss */ "zcD8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DigMapaPage = class DigMapaPage {
    constructor() { }
    ngOnInit() {
    }
};
DigMapaPage.ctorParameters = () => [];
DigMapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dig-mapa',
        template: _raw_loader_dig_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dig_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DigMapaPage);



/***/ }),

/***/ "epU9":
/*!**********************************************************!*\
  !*** ./src/app/pmal/dig-mapa/dig-mapa-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: DigMapaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigMapaPageRoutingModule", function() { return DigMapaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dig_mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dig-mapa.page */ "NkST");




const routes = [
    {
        path: '',
        component: _dig_mapa_page__WEBPACK_IMPORTED_MODULE_3__["DigMapaPage"]
    }
];
let DigMapaPageRoutingModule = class DigMapaPageRoutingModule {
};
DigMapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DigMapaPageRoutingModule);



/***/ }),

/***/ "f5ua":
/*!**************************************************!*\
  !*** ./src/app/pmal/dig-mapa/dig-mapa.module.ts ***!
  \**************************************************/
/*! exports provided: DigMapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigMapaPageModule", function() { return DigMapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dig_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dig-mapa-routing.module */ "epU9");
/* harmony import */ var _dig_mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dig-mapa.page */ "NkST");







let DigMapaPageModule = class DigMapaPageModule {
};
DigMapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dig_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["DigMapaPageRoutingModule"]
        ],
        declarations: [_dig_mapa_page__WEBPACK_IMPORTED_MODULE_6__["DigMapaPage"]]
    })
], DigMapaPageModule);



/***/ }),

/***/ "pWvL":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/dig-mapa/dig-mapa.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>dig-mapa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "zcD8":
/*!**************************************************!*\
  !*** ./src/app/pmal/dig-mapa/dig-mapa.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWctbWFwYS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pmal-dig-mapa-dig-mapa-module-es2015.js.map