(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-control-guia-control-guia-module"],{

/***/ "/49/":
/*!**********************************************************!*\
  !*** ./src/app/pmac/control-guia/control-guia.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLWd1aWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "1cEg":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/control-guia/control-guia.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "E8lF":
/*!********************************************************!*\
  !*** ./src/app/pmac/control-guia/control-guia.page.ts ***!
  \********************************************************/
/*! exports provided: ControlGuiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlGuiaPage", function() { return ControlGuiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_control_guia_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./control-guia.page.html */ "1cEg");
/* harmony import */ var _control_guia_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-guia.page.scss */ "/49/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ControlGuiaPage = class ControlGuiaPage {
    constructor() { }
    ngOnInit() {
    }
};
ControlGuiaPage.ctorParameters = () => [];
ControlGuiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-control-guia',
        template: _raw_loader_control_guia_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_control_guia_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ControlGuiaPage);



/***/ }),

/***/ "OamY":
/*!******************************************************************!*\
  !*** ./src/app/pmac/control-guia/control-guia-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ControlGuiaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlGuiaPageRoutingModule", function() { return ControlGuiaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _control_guia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-guia.page */ "E8lF");




const routes = [
    {
        path: '',
        component: _control_guia_page__WEBPACK_IMPORTED_MODULE_3__["ControlGuiaPage"]
    }
];
let ControlGuiaPageRoutingModule = class ControlGuiaPageRoutingModule {
};
ControlGuiaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ControlGuiaPageRoutingModule);



/***/ }),

/***/ "ziJT":
/*!**********************************************************!*\
  !*** ./src/app/pmac/control-guia/control-guia.module.ts ***!
  \**********************************************************/
/*! exports provided: ControlGuiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlGuiaPageModule", function() { return ControlGuiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _control_guia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-guia-routing.module */ "OamY");
/* harmony import */ var _control_guia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-guia.page */ "E8lF");







let ControlGuiaPageModule = class ControlGuiaPageModule {
};
ControlGuiaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _control_guia_routing_module__WEBPACK_IMPORTED_MODULE_5__["ControlGuiaPageRoutingModule"]
        ],
        declarations: [_control_guia_page__WEBPACK_IMPORTED_MODULE_6__["ControlGuiaPage"]]
    })
], ControlGuiaPageModule);



/***/ })

}]);
//# sourceMappingURL=pmac-control-guia-control-guia-module-es2015.js.map