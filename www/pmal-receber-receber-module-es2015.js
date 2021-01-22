(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-receber-receber-module"],{

/***/ "SqKy":
/*!************************************************!*\
  !*** ./src/app/pmal/receber/receber.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlYmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "YXG1":
/*!**********************************************!*\
  !*** ./src/app/pmal/receber/receber.page.ts ***!
  \**********************************************/
/*! exports provided: ReceberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceberPage", function() { return ReceberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_receber_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./receber.page.html */ "bDmZ");
/* harmony import */ var _receber_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receber.page.scss */ "SqKy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ReceberPage = class ReceberPage {
    constructor() { }
    ngOnInit() {
    }
};
ReceberPage.ctorParameters = () => [];
ReceberPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-receber',
        template: _raw_loader_receber_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_receber_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReceberPage);



/***/ }),

/***/ "bDmZ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/receber/receber.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>receber</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "bioy":
/*!************************************************!*\
  !*** ./src/app/pmal/receber/receber.module.ts ***!
  \************************************************/
/*! exports provided: ReceberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceberPageModule", function() { return ReceberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _receber_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receber-routing.module */ "l4YS");
/* harmony import */ var _receber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receber.page */ "YXG1");







let ReceberPageModule = class ReceberPageModule {
};
ReceberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _receber_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceberPageRoutingModule"]
        ],
        declarations: [_receber_page__WEBPACK_IMPORTED_MODULE_6__["ReceberPage"]]
    })
], ReceberPageModule);



/***/ }),

/***/ "l4YS":
/*!********************************************************!*\
  !*** ./src/app/pmal/receber/receber-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ReceberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceberPageRoutingModule", function() { return ReceberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _receber_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receber.page */ "YXG1");




const routes = [
    {
        path: '',
        component: _receber_page__WEBPACK_IMPORTED_MODULE_3__["ReceberPage"]
    }
];
let ReceberPageRoutingModule = class ReceberPageRoutingModule {
};
ReceberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReceberPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmal-receber-receber-module-es2015.js.map