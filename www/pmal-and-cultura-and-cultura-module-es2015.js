(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-and-cultura-and-cultura-module"],{

/***/ "8U0q":
/*!********************************************************!*\
  !*** ./src/app/pmal/and-cultura/and-cultura.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmQtY3VsdHVyYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JExI":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/and-cultura/and-cultura.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>");

/***/ }),

/***/ "foZx":
/*!********************************************************!*\
  !*** ./src/app/pmal/and-cultura/and-cultura.module.ts ***!
  \********************************************************/
/*! exports provided: AndCulturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndCulturaPageModule", function() { return AndCulturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _and_cultura_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./and-cultura-routing.module */ "w9a7");
/* harmony import */ var _and_cultura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./and-cultura.page */ "hIZZ");







let AndCulturaPageModule = class AndCulturaPageModule {
};
AndCulturaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _and_cultura_routing_module__WEBPACK_IMPORTED_MODULE_5__["AndCulturaPageRoutingModule"]
        ],
        declarations: [_and_cultura_page__WEBPACK_IMPORTED_MODULE_6__["AndCulturaPage"]]
    })
], AndCulturaPageModule);



/***/ }),

/***/ "hIZZ":
/*!******************************************************!*\
  !*** ./src/app/pmal/and-cultura/and-cultura.page.ts ***!
  \******************************************************/
/*! exports provided: AndCulturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndCulturaPage", function() { return AndCulturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_and_cultura_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./and-cultura.page.html */ "JExI");
/* harmony import */ var _and_cultura_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./and-cultura.page.scss */ "8U0q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AndCulturaPage = class AndCulturaPage {
    constructor() { }
    ngOnInit() {
    }
};
AndCulturaPage.ctorParameters = () => [];
AndCulturaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-and-cultura',
        template: _raw_loader_and_cultura_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_and_cultura_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AndCulturaPage);



/***/ }),

/***/ "w9a7":
/*!****************************************************************!*\
  !*** ./src/app/pmal/and-cultura/and-cultura-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AndCulturaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndCulturaPageRoutingModule", function() { return AndCulturaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _and_cultura_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./and-cultura.page */ "hIZZ");




const routes = [
    {
        path: '',
        component: _and_cultura_page__WEBPACK_IMPORTED_MODULE_3__["AndCulturaPage"]
    }
];
let AndCulturaPageRoutingModule = class AndCulturaPageRoutingModule {
};
AndCulturaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AndCulturaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmal-and-cultura-and-cultura-module-es2015.js.map