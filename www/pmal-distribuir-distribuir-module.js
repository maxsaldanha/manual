(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-distribuir-distribuir-module"],{

/***/ "KduP":
/*!****************************************************!*\
  !*** ./src/app/pmal/distribuir/distribuir.page.ts ***!
  \****************************************************/
/*! exports provided: DistribuirPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuirPage", function() { return DistribuirPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_distribuir_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./distribuir.page.html */ "mCwX");
/* harmony import */ var _distribuir_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distribuir.page.scss */ "akB8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DistribuirPage = class DistribuirPage {
    constructor() { }
    ngOnInit() {
    }
};
DistribuirPage.ctorParameters = () => [];
DistribuirPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-distribuir',
        template: _raw_loader_distribuir_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_distribuir_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DistribuirPage);



/***/ }),

/***/ "To9j":
/*!******************************************************!*\
  !*** ./src/app/pmal/distribuir/distribuir.module.ts ***!
  \******************************************************/
/*! exports provided: DistribuirPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuirPageModule", function() { return DistribuirPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _distribuir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./distribuir-routing.module */ "fVGj");
/* harmony import */ var _distribuir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distribuir.page */ "KduP");







let DistribuirPageModule = class DistribuirPageModule {
};
DistribuirPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _distribuir_routing_module__WEBPACK_IMPORTED_MODULE_5__["DistribuirPageRoutingModule"]
        ],
        declarations: [_distribuir_page__WEBPACK_IMPORTED_MODULE_6__["DistribuirPage"]]
    })
], DistribuirPageModule);



/***/ }),

/***/ "akB8":
/*!******************************************************!*\
  !*** ./src/app/pmal/distribuir/distribuir.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXN0cmlidWlyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "fVGj":
/*!**************************************************************!*\
  !*** ./src/app/pmal/distribuir/distribuir-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DistribuirPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistribuirPageRoutingModule", function() { return DistribuirPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _distribuir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distribuir.page */ "KduP");




const routes = [
    {
        path: '',
        component: _distribuir_page__WEBPACK_IMPORTED_MODULE_3__["DistribuirPage"]
    }
];
let DistribuirPageRoutingModule = class DistribuirPageRoutingModule {
};
DistribuirPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DistribuirPageRoutingModule);



/***/ }),

/***/ "mCwX":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/distribuir/distribuir.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>distribuir</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pmal-distribuir-distribuir-module.js.map