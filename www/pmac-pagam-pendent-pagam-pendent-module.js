(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-pagam-pendent-pagam-pendent-module"],{

/***/ "9ISo":
/*!********************************************************************!*\
  !*** ./src/app/pmac/pagam-pendent/pagam-pendent-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PagamPendentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamPendentPageRoutingModule", function() { return PagamPendentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pagam_pendent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagam-pendent.page */ "UHnO");




const routes = [
    {
        path: '',
        component: _pagam_pendent_page__WEBPACK_IMPORTED_MODULE_3__["PagamPendentPage"]
    }
];
let PagamPendentPageRoutingModule = class PagamPendentPageRoutingModule {
};
PagamPendentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagamPendentPageRoutingModule);



/***/ }),

/***/ "Hq65":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/pagam-pendent/pagam-pendent.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>");

/***/ }),

/***/ "UHnO":
/*!**********************************************************!*\
  !*** ./src/app/pmac/pagam-pendent/pagam-pendent.page.ts ***!
  \**********************************************************/
/*! exports provided: PagamPendentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamPendentPage", function() { return PagamPendentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagam_pendent_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagam-pendent.page.html */ "Hq65");
/* harmony import */ var _pagam_pendent_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagam-pendent.page.scss */ "r28E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PagamPendentPage = class PagamPendentPage {
    constructor() { }
    ngOnInit() {
    }
};
PagamPendentPage.ctorParameters = () => [];
PagamPendentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagam-pendent',
        template: _raw_loader_pagam_pendent_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagam_pendent_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagamPendentPage);



/***/ }),

/***/ "iXyR":
/*!************************************************************!*\
  !*** ./src/app/pmac/pagam-pendent/pagam-pendent.module.ts ***!
  \************************************************************/
/*! exports provided: PagamPendentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagamPendentPageModule", function() { return PagamPendentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pagam_pendent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagam-pendent-routing.module */ "9ISo");
/* harmony import */ var _pagam_pendent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagam-pendent.page */ "UHnO");







let PagamPendentPageModule = class PagamPendentPageModule {
};
PagamPendentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pagam_pendent_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagamPendentPageRoutingModule"]
        ],
        declarations: [_pagam_pendent_page__WEBPACK_IMPORTED_MODULE_6__["PagamPendentPage"]]
    })
], PagamPendentPageModule);



/***/ }),

/***/ "r28E":
/*!************************************************************!*\
  !*** ./src/app/pmac/pagam-pendent/pagam-pendent.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdhbS1wZW5kZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pmac-pagam-pendent-pagam-pendent-module.js.map