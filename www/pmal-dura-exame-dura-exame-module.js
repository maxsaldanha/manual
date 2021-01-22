(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-dura-exame-dura-exame-module"],{

/***/ "+Z4m":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/dura-exame/dura-exame.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>dura-exame</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "MJ4q":
/*!**************************************************************!*\
  !*** ./src/app/pmal/dura-exame/dura-exame-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DuraExamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuraExamePageRoutingModule", function() { return DuraExamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dura_exame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dura-exame.page */ "bmyo");




const routes = [
    {
        path: '',
        component: _dura_exame_page__WEBPACK_IMPORTED_MODULE_3__["DuraExamePage"]
    }
];
let DuraExamePageRoutingModule = class DuraExamePageRoutingModule {
};
DuraExamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DuraExamePageRoutingModule);



/***/ }),

/***/ "S5ZA":
/*!******************************************************!*\
  !*** ./src/app/pmal/dura-exame/dura-exame.module.ts ***!
  \******************************************************/
/*! exports provided: DuraExamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuraExamePageModule", function() { return DuraExamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dura_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dura-exame-routing.module */ "MJ4q");
/* harmony import */ var _dura_exame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dura-exame.page */ "bmyo");







let DuraExamePageModule = class DuraExamePageModule {
};
DuraExamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dura_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__["DuraExamePageRoutingModule"]
        ],
        declarations: [_dura_exame_page__WEBPACK_IMPORTED_MODULE_6__["DuraExamePage"]]
    })
], DuraExamePageModule);



/***/ }),

/***/ "Z6yw":
/*!******************************************************!*\
  !*** ./src/app/pmal/dura-exame/dura-exame.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdXJhLWV4YW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "bmyo":
/*!****************************************************!*\
  !*** ./src/app/pmal/dura-exame/dura-exame.page.ts ***!
  \****************************************************/
/*! exports provided: DuraExamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuraExamePage", function() { return DuraExamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dura_exame_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dura-exame.page.html */ "+Z4m");
/* harmony import */ var _dura_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dura-exame.page.scss */ "Z6yw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DuraExamePage = class DuraExamePage {
    constructor() { }
    ngOnInit() {
    }
};
DuraExamePage.ctorParameters = () => [];
DuraExamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dura-exame',
        template: _raw_loader_dura_exame_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dura_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DuraExamePage);



/***/ })

}]);
//# sourceMappingURL=pmal-dura-exame-dura-exame-module.js.map