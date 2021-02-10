(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-anular-exame-anular-exame-module"],{

/***/ "T2vu":
/*!**********************************************************!*\
  !*** ./src/app/pmal/anular-exame/anular-exame.module.ts ***!
  \**********************************************************/
/*! exports provided: AnularExamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnularExamePageModule", function() { return AnularExamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _anular_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anular-exame-routing.module */ "WHzN");
/* harmony import */ var _anular_exame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anular-exame.page */ "gtr3");







let AnularExamePageModule = class AnularExamePageModule {
};
AnularExamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _anular_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnularExamePageRoutingModule"]
        ],
        declarations: [_anular_exame_page__WEBPACK_IMPORTED_MODULE_6__["AnularExamePage"]]
    })
], AnularExamePageModule);



/***/ }),

/***/ "WHzN":
/*!******************************************************************!*\
  !*** ./src/app/pmal/anular-exame/anular-exame-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AnularExamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnularExamePageRoutingModule", function() { return AnularExamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _anular_exame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anular-exame.page */ "gtr3");




const routes = [
    {
        path: '',
        component: _anular_exame_page__WEBPACK_IMPORTED_MODULE_3__["AnularExamePage"]
    }
];
let AnularExamePageRoutingModule = class AnularExamePageRoutingModule {
};
AnularExamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnularExamePageRoutingModule);



/***/ }),

/***/ "gtr3":
/*!********************************************************!*\
  !*** ./src/app/pmal/anular-exame/anular-exame.page.ts ***!
  \********************************************************/
/*! exports provided: AnularExamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnularExamePage", function() { return AnularExamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_anular_exame_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./anular-exame.page.html */ "iXcc");
/* harmony import */ var _anular_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anular-exame.page.scss */ "vejh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AnularExamePage = class AnularExamePage {
    constructor() { }
    ngOnInit() {
    }
};
AnularExamePage.ctorParameters = () => [];
AnularExamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-anular-exame',
        template: _raw_loader_anular_exame_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_anular_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AnularExamePage);



/***/ }),

/***/ "iXcc":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/anular-exame/anular-exame.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "vejh":
/*!**********************************************************!*\
  !*** ./src/app/pmal/anular-exame/anular-exame.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnVsYXItZXhhbWUucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pmal-anular-exame-anular-exame-module-es2015.js.map