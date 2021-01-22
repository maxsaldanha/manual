(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-rastrea-exame-rastrea-exame-module"],{

/***/ "2g31":
/*!********************************************************************!*\
  !*** ./src/app/pmal/rastrea-exame/rastrea-exame-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RastreaExamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastreaExamePageRoutingModule", function() { return RastreaExamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rastrea_exame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rastrea-exame.page */ "Ryv4");




const routes = [
    {
        path: '',
        component: _rastrea_exame_page__WEBPACK_IMPORTED_MODULE_3__["RastreaExamePage"]
    }
];
let RastreaExamePageRoutingModule = class RastreaExamePageRoutingModule {
};
RastreaExamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RastreaExamePageRoutingModule);



/***/ }),

/***/ "Aix1":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/rastrea-exame/rastrea-exame.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>rastrea-exame</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "CmSt":
/*!************************************************************!*\
  !*** ./src/app/pmal/rastrea-exame/rastrea-exame.module.ts ***!
  \************************************************************/
/*! exports provided: RastreaExamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastreaExamePageModule", function() { return RastreaExamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rastrea_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rastrea-exame-routing.module */ "2g31");
/* harmony import */ var _rastrea_exame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rastrea-exame.page */ "Ryv4");







let RastreaExamePageModule = class RastreaExamePageModule {
};
RastreaExamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rastrea_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__["RastreaExamePageRoutingModule"]
        ],
        declarations: [_rastrea_exame_page__WEBPACK_IMPORTED_MODULE_6__["RastreaExamePage"]]
    })
], RastreaExamePageModule);



/***/ }),

/***/ "Ryv4":
/*!**********************************************************!*\
  !*** ./src/app/pmal/rastrea-exame/rastrea-exame.page.ts ***!
  \**********************************************************/
/*! exports provided: RastreaExamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RastreaExamePage", function() { return RastreaExamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rastrea_exame_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rastrea-exame.page.html */ "Aix1");
/* harmony import */ var _rastrea_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rastrea-exame.page.scss */ "y57j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RastreaExamePage = class RastreaExamePage {
    constructor() { }
    ngOnInit() {
    }
};
RastreaExamePage.ctorParameters = () => [];
RastreaExamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rastrea-exame',
        template: _raw_loader_rastrea_exame_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rastrea_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RastreaExamePage);



/***/ }),

/***/ "y57j":
/*!************************************************************!*\
  !*** ./src/app/pmal/rastrea-exame/rastrea-exame.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXN0cmVhLWV4YW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pmal-rastrea-exame-rastrea-exame-module.js.map