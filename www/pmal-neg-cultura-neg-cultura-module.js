(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-neg-cultura-neg-cultura-module"],{

/***/ "0uac":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/neg-cultura/neg-cultura.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>neg-cultura</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "68h1":
/*!********************************************************!*\
  !*** ./src/app/pmal/neg-cultura/neg-cultura.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZWctY3VsdHVyYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "PZal":
/*!****************************************************************!*\
  !*** ./src/app/pmal/neg-cultura/neg-cultura-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: NegCulturaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegCulturaPageRoutingModule", function() { return NegCulturaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _neg_cultura_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neg-cultura.page */ "iFh2");




const routes = [
    {
        path: '',
        component: _neg_cultura_page__WEBPACK_IMPORTED_MODULE_3__["NegCulturaPage"]
    }
];
let NegCulturaPageRoutingModule = class NegCulturaPageRoutingModule {
};
NegCulturaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NegCulturaPageRoutingModule);



/***/ }),

/***/ "htN0":
/*!********************************************************!*\
  !*** ./src/app/pmal/neg-cultura/neg-cultura.module.ts ***!
  \********************************************************/
/*! exports provided: NegCulturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegCulturaPageModule", function() { return NegCulturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _neg_cultura_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./neg-cultura-routing.module */ "PZal");
/* harmony import */ var _neg_cultura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./neg-cultura.page */ "iFh2");







let NegCulturaPageModule = class NegCulturaPageModule {
};
NegCulturaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _neg_cultura_routing_module__WEBPACK_IMPORTED_MODULE_5__["NegCulturaPageRoutingModule"]
        ],
        declarations: [_neg_cultura_page__WEBPACK_IMPORTED_MODULE_6__["NegCulturaPage"]]
    })
], NegCulturaPageModule);



/***/ }),

/***/ "iFh2":
/*!******************************************************!*\
  !*** ./src/app/pmal/neg-cultura/neg-cultura.page.ts ***!
  \******************************************************/
/*! exports provided: NegCulturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegCulturaPage", function() { return NegCulturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_neg_cultura_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./neg-cultura.page.html */ "0uac");
/* harmony import */ var _neg_cultura_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neg-cultura.page.scss */ "68h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NegCulturaPage = class NegCulturaPage {
    constructor() { }
    ngOnInit() {
    }
};
NegCulturaPage.ctorParameters = () => [];
NegCulturaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-neg-cultura',
        template: _raw_loader_neg_cultura_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_neg_cultura_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NegCulturaPage);



/***/ })

}]);
//# sourceMappingURL=pmal-neg-cultura-neg-cultura-module.js.map