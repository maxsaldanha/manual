(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-corre-laudo-corre-laudo-module"],{

/***/ "95r5":
/*!********************************************************!*\
  !*** ./src/app/pmal/corre-laudo/corre-laudo.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3JyZS1sYXVkby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "P0+m":
/*!****************************************************************!*\
  !*** ./src/app/pmal/corre-laudo/corre-laudo-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CorreLaudoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreLaudoPageRoutingModule", function() { return CorreLaudoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _corre_laudo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corre-laudo.page */ "cHeg");




const routes = [
    {
        path: '',
        component: _corre_laudo_page__WEBPACK_IMPORTED_MODULE_3__["CorreLaudoPage"]
    }
];
let CorreLaudoPageRoutingModule = class CorreLaudoPageRoutingModule {
};
CorreLaudoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CorreLaudoPageRoutingModule);



/***/ }),

/***/ "cHeg":
/*!******************************************************!*\
  !*** ./src/app/pmal/corre-laudo/corre-laudo.page.ts ***!
  \******************************************************/
/*! exports provided: CorreLaudoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreLaudoPage", function() { return CorreLaudoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_corre_laudo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./corre-laudo.page.html */ "l1nU");
/* harmony import */ var _corre_laudo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corre-laudo.page.scss */ "95r5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CorreLaudoPage = class CorreLaudoPage {
    constructor() { }
    ngOnInit() {
    }
};
CorreLaudoPage.ctorParameters = () => [];
CorreLaudoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-corre-laudo',
        template: _raw_loader_corre_laudo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_corre_laudo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CorreLaudoPage);



/***/ }),

/***/ "l1nU":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/corre-laudo/corre-laudo.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>corre-laudo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n</ion-content>\n");

/***/ }),

/***/ "vIKs":
/*!********************************************************!*\
  !*** ./src/app/pmal/corre-laudo/corre-laudo.module.ts ***!
  \********************************************************/
/*! exports provided: CorreLaudoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreLaudoPageModule", function() { return CorreLaudoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _corre_laudo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corre-laudo-routing.module */ "P0+m");
/* harmony import */ var _corre_laudo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corre-laudo.page */ "cHeg");







let CorreLaudoPageModule = class CorreLaudoPageModule {
};
CorreLaudoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _corre_laudo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CorreLaudoPageRoutingModule"]
        ],
        declarations: [_corre_laudo_page__WEBPACK_IMPORTED_MODULE_6__["CorreLaudoPage"]]
    })
], CorreLaudoPageModule);



/***/ })

}]);
//# sourceMappingURL=pmal-corre-laudo-corre-laudo-module-es2015.js.map