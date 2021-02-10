(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-deesconto-deesconto-module"],{

/***/ "HHwp":
/*!**************************************************!*\
  !*** ./src/app/pmac/deesconto/deesconto.page.ts ***!
  \**************************************************/
/*! exports provided: DeescontoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeescontoPage", function() { return DeescontoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deesconto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deesconto.page.html */ "YYZL");
/* harmony import */ var _deesconto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deesconto.page.scss */ "Hn4q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DeescontoPage = class DeescontoPage {
    constructor() { }
    ngOnInit() {
    }
};
DeescontoPage.ctorParameters = () => [];
DeescontoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deesconto',
        template: _raw_loader_deesconto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deesconto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DeescontoPage);



/***/ }),

/***/ "Hn4q":
/*!****************************************************!*\
  !*** ./src/app/pmac/deesconto/deesconto.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWVzY29udG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "YGKG":
/*!****************************************************!*\
  !*** ./src/app/pmac/deesconto/deesconto.module.ts ***!
  \****************************************************/
/*! exports provided: DeescontoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeescontoPageModule", function() { return DeescontoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _deesconto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deesconto-routing.module */ "wEWo");
/* harmony import */ var _deesconto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deesconto.page */ "HHwp");







let DeescontoPageModule = class DeescontoPageModule {
};
DeescontoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deesconto_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeescontoPageRoutingModule"]
        ],
        declarations: [_deesconto_page__WEBPACK_IMPORTED_MODULE_6__["DeescontoPage"]]
    })
], DeescontoPageModule);



/***/ }),

/***/ "YYZL":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/deesconto/deesconto.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "wEWo":
/*!************************************************************!*\
  !*** ./src/app/pmac/deesconto/deesconto-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DeescontoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeescontoPageRoutingModule", function() { return DeescontoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deesconto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deesconto.page */ "HHwp");




const routes = [
    {
        path: '',
        component: _deesconto_page__WEBPACK_IMPORTED_MODULE_3__["DeescontoPage"]
    }
];
let DeescontoPageRoutingModule = class DeescontoPageRoutingModule {
};
DeescontoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeescontoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmac-deesconto-deesconto-module-es2015.js.map