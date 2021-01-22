(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-and-cult-consul-and-cult-consul-module"],{

/***/ "9Fs7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/and-cult-consul/and-cult-consul.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>");

/***/ }),

/***/ "B82H":
/*!**************************************************************!*\
  !*** ./src/app/pmal/and-cult-consul/and-cult-consul.page.ts ***!
  \**************************************************************/
/*! exports provided: AndCultConsulPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndCultConsulPage", function() { return AndCultConsulPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_and_cult_consul_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./and-cult-consul.page.html */ "9Fs7");
/* harmony import */ var _and_cult_consul_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./and-cult-consul.page.scss */ "s4dc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AndCultConsulPage = class AndCultConsulPage {
    constructor() { }
    ngOnInit() {
    }
};
AndCultConsulPage.ctorParameters = () => [];
AndCultConsulPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-and-cult-consul',
        template: _raw_loader_and_cult_consul_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_and_cult_consul_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AndCultConsulPage);



/***/ }),

/***/ "k20B":
/*!****************************************************************!*\
  !*** ./src/app/pmal/and-cult-consul/and-cult-consul.module.ts ***!
  \****************************************************************/
/*! exports provided: AndCultConsulPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndCultConsulPageModule", function() { return AndCultConsulPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _and_cult_consul_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./and-cult-consul-routing.module */ "zjJA");
/* harmony import */ var _and_cult_consul_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./and-cult-consul.page */ "B82H");







let AndCultConsulPageModule = class AndCultConsulPageModule {
};
AndCultConsulPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _and_cult_consul_routing_module__WEBPACK_IMPORTED_MODULE_5__["AndCultConsulPageRoutingModule"]
        ],
        declarations: [_and_cult_consul_page__WEBPACK_IMPORTED_MODULE_6__["AndCultConsulPage"]]
    })
], AndCultConsulPageModule);



/***/ }),

/***/ "s4dc":
/*!****************************************************************!*\
  !*** ./src/app/pmal/and-cult-consul/and-cult-consul.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmQtY3VsdC1jb25zdWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "zjJA":
/*!************************************************************************!*\
  !*** ./src/app/pmal/and-cult-consul/and-cult-consul-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AndCultConsulPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndCultConsulPageRoutingModule", function() { return AndCultConsulPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _and_cult_consul_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./and-cult-consul.page */ "B82H");




const routes = [
    {
        path: '',
        component: _and_cult_consul_page__WEBPACK_IMPORTED_MODULE_3__["AndCultConsulPage"]
    }
];
let AndCultConsulPageRoutingModule = class AndCultConsulPageRoutingModule {
};
AndCultConsulPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AndCultConsulPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmal-and-cult-consul-and-cult-consul-module.js.map