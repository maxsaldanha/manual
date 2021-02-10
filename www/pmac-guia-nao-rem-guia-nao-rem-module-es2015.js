(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-guia-nao-rem-guia-nao-rem-module"],{

/***/ "/UKY":
/*!********************************************************!*\
  !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem.page.ts ***!
  \********************************************************/
/*! exports provided: GuiaNaoRemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaNaoRemPage", function() { return GuiaNaoRemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_guia_nao_rem_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./guia-nao-rem.page.html */ "clVH");
/* harmony import */ var _guia_nao_rem_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guia-nao-rem.page.scss */ "P+o3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let GuiaNaoRemPage = class GuiaNaoRemPage {
    constructor() { }
    ngOnInit() {
    }
};
GuiaNaoRemPage.ctorParameters = () => [];
GuiaNaoRemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guia-nao-rem',
        template: _raw_loader_guia_nao_rem_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guia_nao_rem_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GuiaNaoRemPage);



/***/ }),

/***/ "P+o3":
/*!**********************************************************!*\
  !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlhLW5hby1yZW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Y/09":
/*!******************************************************************!*\
  !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: GuiaNaoRemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaNaoRemPageRoutingModule", function() { return GuiaNaoRemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guia-nao-rem.page */ "/UKY");




const routes = [
    {
        path: '',
        component: _guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_3__["GuiaNaoRemPage"]
    }
];
let GuiaNaoRemPageRoutingModule = class GuiaNaoRemPageRoutingModule {
};
GuiaNaoRemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GuiaNaoRemPageRoutingModule);



/***/ }),

/***/ "clVH":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/guia-nao-rem/guia-nao-rem.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "ecNC":
/*!**********************************************************!*\
  !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem.module.ts ***!
  \**********************************************************/
/*! exports provided: GuiaNaoRemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaNaoRemPageModule", function() { return GuiaNaoRemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _guia_nao_rem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guia-nao-rem-routing.module */ "Y/09");
/* harmony import */ var _guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guia-nao-rem.page */ "/UKY");







let GuiaNaoRemPageModule = class GuiaNaoRemPageModule {
};
GuiaNaoRemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _guia_nao_rem_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuiaNaoRemPageRoutingModule"]
        ],
        declarations: [_guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_6__["GuiaNaoRemPage"]]
    })
], GuiaNaoRemPageModule);



/***/ })

}]);
//# sourceMappingURL=pmac-guia-nao-rem-guia-nao-rem-module-es2015.js.map