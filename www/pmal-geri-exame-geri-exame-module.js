(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-geri-exame-geri-exame-module"],{

/***/ "F4pQ":
/*!****************************************************!*\
  !*** ./src/app/pmal/geri-exame/geri-exame.page.ts ***!
  \****************************************************/
/*! exports provided: GeriExamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeriExamePage", function() { return GeriExamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_geri_exame_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./geri-exame.page.html */ "gY7N");
/* harmony import */ var _geri_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geri-exame.page.scss */ "QBCA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GeriExamePage = class GeriExamePage {
    constructor() { }
    ngOnInit() {
    }
};
GeriExamePage.ctorParameters = () => [];
GeriExamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-geri-exame',
        template: _raw_loader_geri_exame_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_geri_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GeriExamePage);



/***/ }),

/***/ "QBCA":
/*!******************************************************!*\
  !*** ./src/app/pmal/geri-exame/geri-exame.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXJpLWV4YW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gY7N":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/geri-exame/geri-exame.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>geri-exame</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "tvhr":
/*!**************************************************************!*\
  !*** ./src/app/pmal/geri-exame/geri-exame-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: GeriExamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeriExamePageRoutingModule", function() { return GeriExamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _geri_exame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geri-exame.page */ "F4pQ");




const routes = [
    {
        path: '',
        component: _geri_exame_page__WEBPACK_IMPORTED_MODULE_3__["GeriExamePage"]
    }
];
let GeriExamePageRoutingModule = class GeriExamePageRoutingModule {
};
GeriExamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeriExamePageRoutingModule);



/***/ }),

/***/ "yQFg":
/*!******************************************************!*\
  !*** ./src/app/pmal/geri-exame/geri-exame.module.ts ***!
  \******************************************************/
/*! exports provided: GeriExamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeriExamePageModule", function() { return GeriExamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _geri_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geri-exame-routing.module */ "tvhr");
/* harmony import */ var _geri_exame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geri-exame.page */ "F4pQ");







let GeriExamePageModule = class GeriExamePageModule {
};
GeriExamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _geri_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeriExamePageRoutingModule"]
        ],
        declarations: [_geri_exame_page__WEBPACK_IMPORTED_MODULE_6__["GeriExamePage"]]
    })
], GeriExamePageModule);



/***/ })

}]);
//# sourceMappingURL=pmal-geri-exame-geri-exame-module.js.map