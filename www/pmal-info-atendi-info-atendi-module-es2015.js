(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-info-atendi-info-atendi-module"],{

/***/ "Albw":
/*!****************************************************************!*\
  !*** ./src/app/pmal/info-atendi/info-atendi-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InfoAtendiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAtendiPageRoutingModule", function() { return InfoAtendiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _info_atendi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-atendi.page */ "VVJB");




const routes = [
    {
        path: '',
        component: _info_atendi_page__WEBPACK_IMPORTED_MODULE_3__["InfoAtendiPage"]
    }
];
let InfoAtendiPageRoutingModule = class InfoAtendiPageRoutingModule {
};
InfoAtendiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoAtendiPageRoutingModule);



/***/ }),

/***/ "I6Ie":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/info-atendi/info-atendi.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "Kwvz":
/*!********************************************************!*\
  !*** ./src/app/pmal/info-atendi/info-atendi.module.ts ***!
  \********************************************************/
/*! exports provided: InfoAtendiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAtendiPageModule", function() { return InfoAtendiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _info_atendi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-atendi-routing.module */ "Albw");
/* harmony import */ var _info_atendi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-atendi.page */ "VVJB");







let InfoAtendiPageModule = class InfoAtendiPageModule {
};
InfoAtendiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_atendi_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoAtendiPageRoutingModule"]
        ],
        declarations: [_info_atendi_page__WEBPACK_IMPORTED_MODULE_6__["InfoAtendiPage"]]
    })
], InfoAtendiPageModule);



/***/ }),

/***/ "VVJB":
/*!******************************************************!*\
  !*** ./src/app/pmal/info-atendi/info-atendi.page.ts ***!
  \******************************************************/
/*! exports provided: InfoAtendiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAtendiPage", function() { return InfoAtendiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_atendi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info-atendi.page.html */ "I6Ie");
/* harmony import */ var _info_atendi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-atendi.page.scss */ "Votk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InfoAtendiPage = class InfoAtendiPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoAtendiPage.ctorParameters = () => [];
InfoAtendiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info-atendi',
        template: _raw_loader_info_atendi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_atendi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfoAtendiPage);



/***/ }),

/***/ "Votk":
/*!********************************************************!*\
  !*** ./src/app/pmal/info-atendi/info-atendi.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWF0ZW5kaS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pmal-info-atendi-info-atendi-module-es2015.js.map