(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-remes-guia-remes-guia-module"],{

/***/ "9q3k":
/*!**************************************************************!*\
  !*** ./src/app/pmac/remes-guia/remes-guia-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RemesGuiaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemesGuiaPageRoutingModule", function() { return RemesGuiaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _remes_guia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remes-guia.page */ "znzT");




const routes = [
    {
        path: '',
        component: _remes_guia_page__WEBPACK_IMPORTED_MODULE_3__["RemesGuiaPage"]
    }
];
let RemesGuiaPageRoutingModule = class RemesGuiaPageRoutingModule {
};
RemesGuiaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RemesGuiaPageRoutingModule);



/***/ }),

/***/ "Gk/d":
/*!******************************************************!*\
  !*** ./src/app/pmac/remes-guia/remes-guia.module.ts ***!
  \******************************************************/
/*! exports provided: RemesGuiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemesGuiaPageModule", function() { return RemesGuiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _remes_guia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remes-guia-routing.module */ "9q3k");
/* harmony import */ var _remes_guia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remes-guia.page */ "znzT");







let RemesGuiaPageModule = class RemesGuiaPageModule {
};
RemesGuiaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _remes_guia_routing_module__WEBPACK_IMPORTED_MODULE_5__["RemesGuiaPageRoutingModule"]
        ],
        declarations: [_remes_guia_page__WEBPACK_IMPORTED_MODULE_6__["RemesGuiaPage"]]
    })
], RemesGuiaPageModule);



/***/ }),

/***/ "N0jE":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/remes-guia/remes-guia.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>");

/***/ }),

/***/ "lVQb":
/*!******************************************************!*\
  !*** ./src/app/pmac/remes-guia/remes-guia.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1lcy1ndWlhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "znzT":
/*!****************************************************!*\
  !*** ./src/app/pmac/remes-guia/remes-guia.page.ts ***!
  \****************************************************/
/*! exports provided: RemesGuiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemesGuiaPage", function() { return RemesGuiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_remes_guia_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./remes-guia.page.html */ "N0jE");
/* harmony import */ var _remes_guia_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remes-guia.page.scss */ "lVQb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RemesGuiaPage = class RemesGuiaPage {
    constructor() { }
    ngOnInit() {
    }
};
RemesGuiaPage.ctorParameters = () => [];
RemesGuiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-remes-guia',
        template: _raw_loader_remes_guia_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remes_guia_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RemesGuiaPage);



/***/ })

}]);
//# sourceMappingURL=pmac-remes-guia-remes-guia-module.js.map