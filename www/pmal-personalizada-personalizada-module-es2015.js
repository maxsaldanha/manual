(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-personalizada-personalizada-module"],{

/***/ "LWwF":
/*!**********************************************************!*\
  !*** ./src/app/pmal/personalizada/personalizada.page.ts ***!
  \**********************************************************/
/*! exports provided: PersonalizadaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizadaPage", function() { return PersonalizadaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personalizada_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personalizada.page.html */ "OcsP");
/* harmony import */ var _personalizada_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personalizada.page.scss */ "yI4Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PersonalizadaPage = class PersonalizadaPage {
    constructor() { }
    ngOnInit() {
    }
};
PersonalizadaPage.ctorParameters = () => [];
PersonalizadaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personalizada',
        template: _raw_loader_personalizada_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personalizada_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PersonalizadaPage);



/***/ }),

/***/ "OcsP":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/personalizada/personalizada.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>personalizada</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "epNQ":
/*!************************************************************!*\
  !*** ./src/app/pmal/personalizada/personalizada.module.ts ***!
  \************************************************************/
/*! exports provided: PersonalizadaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizadaPageModule", function() { return PersonalizadaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _personalizada_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personalizada-routing.module */ "ymVa");
/* harmony import */ var _personalizada_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personalizada.page */ "LWwF");







let PersonalizadaPageModule = class PersonalizadaPageModule {
};
PersonalizadaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _personalizada_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonalizadaPageRoutingModule"]
        ],
        declarations: [_personalizada_page__WEBPACK_IMPORTED_MODULE_6__["PersonalizadaPage"]]
    })
], PersonalizadaPageModule);



/***/ }),

/***/ "yI4Q":
/*!************************************************************!*\
  !*** ./src/app/pmal/personalizada/personalizada.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbGl6YWRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ymVa":
/*!********************************************************************!*\
  !*** ./src/app/pmal/personalizada/personalizada-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PersonalizadaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizadaPageRoutingModule", function() { return PersonalizadaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personalizada_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personalizada.page */ "LWwF");




const routes = [
    {
        path: '',
        component: _personalizada_page__WEBPACK_IMPORTED_MODULE_3__["PersonalizadaPage"]
    }
];
let PersonalizadaPageRoutingModule = class PersonalizadaPageRoutingModule {
};
PersonalizadaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonalizadaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmal-personalizada-personalizada-module-es2015.js.map