(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-list-trabalho-list-trabalho-module"],{

/***/ "H3nj":
/*!**********************************************************!*\
  !*** ./src/app/pmal/list-trabalho/list-trabalho.page.ts ***!
  \**********************************************************/
/*! exports provided: ListTrabalhoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrabalhoPage", function() { return ListTrabalhoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_trabalho_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-trabalho.page.html */ "gqOZ");
/* harmony import */ var _list_trabalho_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-trabalho.page.scss */ "PobK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ListTrabalhoPage = class ListTrabalhoPage {
    constructor() { }
    ngOnInit() {
    }
};
ListTrabalhoPage.ctorParameters = () => [];
ListTrabalhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-trabalho',
        template: _raw_loader_list_trabalho_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_trabalho_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListTrabalhoPage);



/***/ }),

/***/ "KbCu":
/*!************************************************************!*\
  !*** ./src/app/pmal/list-trabalho/list-trabalho.module.ts ***!
  \************************************************************/
/*! exports provided: ListTrabalhoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrabalhoPageModule", function() { return ListTrabalhoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_trabalho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-trabalho-routing.module */ "zw9n");
/* harmony import */ var _list_trabalho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-trabalho.page */ "H3nj");







let ListTrabalhoPageModule = class ListTrabalhoPageModule {
};
ListTrabalhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_trabalho_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListTrabalhoPageRoutingModule"]
        ],
        declarations: [_list_trabalho_page__WEBPACK_IMPORTED_MODULE_6__["ListTrabalhoPage"]]
    })
], ListTrabalhoPageModule);



/***/ }),

/***/ "PobK":
/*!************************************************************!*\
  !*** ./src/app/pmal/list-trabalho/list-trabalho.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXRyYWJhbGhvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gqOZ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/list-trabalho/list-trabalho.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>");

/***/ }),

/***/ "zw9n":
/*!********************************************************************!*\
  !*** ./src/app/pmal/list-trabalho/list-trabalho-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ListTrabalhoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTrabalhoPageRoutingModule", function() { return ListTrabalhoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_trabalho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-trabalho.page */ "H3nj");




const routes = [
    {
        path: '',
        component: _list_trabalho_page__WEBPACK_IMPORTED_MODULE_3__["ListTrabalhoPage"]
    }
];
let ListTrabalhoPageRoutingModule = class ListTrabalhoPageRoutingModule {
};
ListTrabalhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListTrabalhoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmal-list-trabalho-list-trabalho-module-es2015.js.map