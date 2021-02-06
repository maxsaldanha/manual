(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-desca-bandeja-desca-bandeja-module"],{

/***/ "LvF6":
/*!********************************************************************!*\
  !*** ./src/app/pmal/desca-bandeja/desca-bandeja-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DescaBandejaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescaBandejaPageRoutingModule", function() { return DescaBandejaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _desca_bandeja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desca-bandeja.page */ "pRMf");




const routes = [
    {
        path: '',
        component: _desca_bandeja_page__WEBPACK_IMPORTED_MODULE_3__["DescaBandejaPage"]
    }
];
let DescaBandejaPageRoutingModule = class DescaBandejaPageRoutingModule {
};
DescaBandejaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DescaBandejaPageRoutingModule);



/***/ }),

/***/ "Pqwb":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/desca-bandeja/desca-bandeja.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class="default">\n    <ion-title>desca-bandeja</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "h72Z":
/*!************************************************************!*\
  !*** ./src/app/pmal/desca-bandeja/desca-bandeja.module.ts ***!
  \************************************************************/
/*! exports provided: DescaBandejaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescaBandejaPageModule", function() { return DescaBandejaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _desca_bandeja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desca-bandeja-routing.module */ "LvF6");
/* harmony import */ var _desca_bandeja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desca-bandeja.page */ "pRMf");







let DescaBandejaPageModule = class DescaBandejaPageModule {
};
DescaBandejaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _desca_bandeja_routing_module__WEBPACK_IMPORTED_MODULE_5__["DescaBandejaPageRoutingModule"]
        ],
        declarations: [_desca_bandeja_page__WEBPACK_IMPORTED_MODULE_6__["DescaBandejaPage"]]
    })
], DescaBandejaPageModule);



/***/ }),

/***/ "hURi":
/*!************************************************************!*\
  !*** ./src/app/pmal/desca-bandeja/desca-bandeja.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjYS1iYW5kZWphLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "pRMf":
/*!**********************************************************!*\
  !*** ./src/app/pmal/desca-bandeja/desca-bandeja.page.ts ***!
  \**********************************************************/
/*! exports provided: DescaBandejaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescaBandejaPage", function() { return DescaBandejaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_desca_bandeja_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./desca-bandeja.page.html */ "Pqwb");
/* harmony import */ var _desca_bandeja_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desca-bandeja.page.scss */ "hURi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DescaBandejaPage = class DescaBandejaPage {
    constructor() { }
    ngOnInit() {
    }
};
DescaBandejaPage.ctorParameters = () => [];
DescaBandejaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-desca-bandeja',
        template: _raw_loader_desca_bandeja_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_desca_bandeja_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DescaBandejaPage);



/***/ })

}]);
//# sourceMappingURL=pmal-desca-bandeja-desca-bandeja-module-es2015.js.map