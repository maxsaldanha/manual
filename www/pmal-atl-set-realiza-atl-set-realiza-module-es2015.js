(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-atl-set-realiza-atl-set-realiza-module"],{

/***/ "2PWM":
/*!****************************************************************!*\
  !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdGwtc2V0LXJlYWxpemEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "J0y1":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/atl-set-realiza/atl-set-realiza.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>");

/***/ }),

/***/ "KSrp":
/*!****************************************************************!*\
  !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza.module.ts ***!
  \****************************************************************/
/*! exports provided: AtlSetRealizaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlSetRealizaPageModule", function() { return AtlSetRealizaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _atl_set_realiza_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./atl-set-realiza-routing.module */ "a1ZR");
/* harmony import */ var _atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atl-set-realiza.page */ "ecSw");







let AtlSetRealizaPageModule = class AtlSetRealizaPageModule {
};
AtlSetRealizaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _atl_set_realiza_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtlSetRealizaPageRoutingModule"]
        ],
        declarations: [_atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_6__["AtlSetRealizaPage"]]
    })
], AtlSetRealizaPageModule);



/***/ }),

/***/ "a1ZR":
/*!************************************************************************!*\
  !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AtlSetRealizaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlSetRealizaPageRoutingModule", function() { return AtlSetRealizaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atl-set-realiza.page */ "ecSw");




const routes = [
    {
        path: '',
        component: _atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_3__["AtlSetRealizaPage"]
    }
];
let AtlSetRealizaPageRoutingModule = class AtlSetRealizaPageRoutingModule {
};
AtlSetRealizaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AtlSetRealizaPageRoutingModule);



/***/ }),

/***/ "ecSw":
/*!**************************************************************!*\
  !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza.page.ts ***!
  \**************************************************************/
/*! exports provided: AtlSetRealizaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlSetRealizaPage", function() { return AtlSetRealizaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_atl_set_realiza_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./atl-set-realiza.page.html */ "J0y1");
/* harmony import */ var _atl_set_realiza_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atl-set-realiza.page.scss */ "2PWM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AtlSetRealizaPage = class AtlSetRealizaPage {
    constructor() { }
    ngOnInit() {
    }
};
AtlSetRealizaPage.ctorParameters = () => [];
AtlSetRealizaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-atl-set-realiza',
        template: _raw_loader_atl_set_realiza_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_atl_set_realiza_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AtlSetRealizaPage);



/***/ })

}]);
//# sourceMappingURL=pmal-atl-set-realiza-atl-set-realiza-module-es2015.js.map