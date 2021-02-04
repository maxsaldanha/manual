(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-lib-exame-lib-exame-module"],{

/***/ "BfWL":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/lib-exame/lib-exame.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "TcM8":
/*!****************************************************!*\
  !*** ./src/app/pmal/lib-exame/lib-exame.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWItZXhhbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "dGz7":
/*!****************************************************!*\
  !*** ./src/app/pmal/lib-exame/lib-exame.module.ts ***!
  \****************************************************/
/*! exports provided: LibExamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibExamePageModule", function() { return LibExamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lib_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib-exame-routing.module */ "ouzk");
/* harmony import */ var _lib_exame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib-exame.page */ "nyp9");







let LibExamePageModule = class LibExamePageModule {
};
LibExamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lib_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__["LibExamePageRoutingModule"]
        ],
        declarations: [_lib_exame_page__WEBPACK_IMPORTED_MODULE_6__["LibExamePage"]]
    })
], LibExamePageModule);



/***/ }),

/***/ "nyp9":
/*!**************************************************!*\
  !*** ./src/app/pmal/lib-exame/lib-exame.page.ts ***!
  \**************************************************/
/*! exports provided: LibExamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibExamePage", function() { return LibExamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lib_exame_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lib-exame.page.html */ "BfWL");
/* harmony import */ var _lib_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib-exame.page.scss */ "TcM8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LibExamePage = class LibExamePage {
    constructor() { }
    ngOnInit() {
    }
};
LibExamePage.ctorParameters = () => [];
LibExamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lib-exame',
        template: _raw_loader_lib_exame_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lib_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LibExamePage);



/***/ }),

/***/ "ouzk":
/*!************************************************************!*\
  !*** ./src/app/pmal/lib-exame/lib-exame-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LibExamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibExamePageRoutingModule", function() { return LibExamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lib_exame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib-exame.page */ "nyp9");




const routes = [
    {
        path: '',
        component: _lib_exame_page__WEBPACK_IMPORTED_MODULE_3__["LibExamePage"]
    }
];
let LibExamePageRoutingModule = class LibExamePageRoutingModule {
};
LibExamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LibExamePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmal-lib-exame-lib-exame-module-es2015.js.map