(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-descartar-descartar-module"],{

/***/ "E+DT":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/descartar/descartar.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>descartar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "WWqm":
/*!****************************************************!*\
  !*** ./src/app/pmal/descartar/descartar.module.ts ***!
  \****************************************************/
/*! exports provided: DescartarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescartarPageModule", function() { return DescartarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _descartar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./descartar-routing.module */ "n5Bt");
/* harmony import */ var _descartar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descartar.page */ "btim");







let DescartarPageModule = class DescartarPageModule {
};
DescartarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _descartar_routing_module__WEBPACK_IMPORTED_MODULE_5__["DescartarPageRoutingModule"]
        ],
        declarations: [_descartar_page__WEBPACK_IMPORTED_MODULE_6__["DescartarPage"]]
    })
], DescartarPageModule);



/***/ }),

/***/ "btim":
/*!**************************************************!*\
  !*** ./src/app/pmal/descartar/descartar.page.ts ***!
  \**************************************************/
/*! exports provided: DescartarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescartarPage", function() { return DescartarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_descartar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./descartar.page.html */ "E+DT");
/* harmony import */ var _descartar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descartar.page.scss */ "ojyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DescartarPage = class DescartarPage {
    constructor() { }
    ngOnInit() {
    }
};
DescartarPage.ctorParameters = () => [];
DescartarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-descartar',
        template: _raw_loader_descartar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_descartar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DescartarPage);



/***/ }),

/***/ "n5Bt":
/*!************************************************************!*\
  !*** ./src/app/pmal/descartar/descartar-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DescartarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescartarPageRoutingModule", function() { return DescartarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _descartar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descartar.page */ "btim");




const routes = [
    {
        path: '',
        component: _descartar_page__WEBPACK_IMPORTED_MODULE_3__["DescartarPage"]
    }
];
let DescartarPageRoutingModule = class DescartarPageRoutingModule {
};
DescartarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DescartarPageRoutingModule);



/***/ }),

/***/ "ojyB":
/*!****************************************************!*\
  !*** ./src/app/pmal/descartar/descartar.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjYXJ0YXIucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pmal-descartar-descartar-module-es2015.js.map