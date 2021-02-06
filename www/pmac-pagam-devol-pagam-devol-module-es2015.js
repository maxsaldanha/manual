(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-pagam-devol-pagam-devol-module"],{

/***/ "0Iny":
/*!****************************************************************!*\
  !*** ./src/app/pmac/pagam-devol/pagam-devol-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PagamDevolPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamDevolPageRoutingModule", function() { return PagamDevolPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagam_devol_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagam-devol.page */ "GsRm");




const routes = [
    {
        path: '',
        component: _pagam_devol_page__WEBPACK_IMPORTED_MODULE_3__["PagamDevolPage"]
    }
];
let PagamDevolPageRoutingModule = class PagamDevolPageRoutingModule {
};
PagamDevolPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagamDevolPageRoutingModule);



/***/ }),

/***/ "GsRm":
/*!******************************************************!*\
  !*** ./src/app/pmac/pagam-devol/pagam-devol.page.ts ***!
  \******************************************************/
/*! exports provided: PagamDevolPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamDevolPage", function() { return PagamDevolPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagam_devol_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagam-devol.page.html */ "jGv9");
/* harmony import */ var _pagam_devol_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagam-devol.page.scss */ "Mhvq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PagamDevolPage = class PagamDevolPage {
    constructor() { }
    ngOnInit() {
    }
};
PagamDevolPage.ctorParameters = () => [];
PagamDevolPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagam-devol',
        template: _raw_loader_pagam_devol_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagam_devol_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagamDevolPage);



/***/ }),

/***/ "Mhvq":
/*!********************************************************!*\
  !*** ./src/app/pmac/pagam-devol/pagam-devol.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdhbS1kZXZvbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "cqBS":
/*!********************************************************!*\
  !*** ./src/app/pmac/pagam-devol/pagam-devol.module.ts ***!
  \********************************************************/
/*! exports provided: PagamDevolPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamDevolPageModule", function() { return PagamDevolPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pagam_devol_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagam-devol-routing.module */ "0Iny");
/* harmony import */ var _pagam_devol_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagam-devol.page */ "GsRm");







let PagamDevolPageModule = class PagamDevolPageModule {
};
PagamDevolPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pagam_devol_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagamDevolPageRoutingModule"]
        ],
        declarations: [_pagam_devol_page__WEBPACK_IMPORTED_MODULE_6__["PagamDevolPage"]]
    })
], PagamDevolPageModule);



/***/ }),

/***/ "jGv9":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/pagam-devol/pagam-devol.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pmac-pagam-devol-pagam-devol-module-es2015.js.map