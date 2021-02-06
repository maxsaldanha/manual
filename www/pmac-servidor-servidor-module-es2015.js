(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-servidor-servidor-module"],{

/***/ "2UOB":
/*!**************************************************!*\
  !*** ./src/app/pmac/servidor/servidor.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWRvci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "I6Qk":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/servidor/servidor.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class="default">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title>PMAC</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\">Alterar nome do Servidor Bioslab.</p>\n \n  <p class=\"p-texto\">Consiste em definir qual a base de informações, será acessada pelo sistema, necessita de muita atenção para configurar \n    o servidor correto\n  </p>\n  \n  <p class=\"p-texto05\">\n    <strong>PASSO 1: </strong>Clique no ícone de <ion-text color=\"danger\"><strong>\"roda dentada\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/9wMnkNJ/login-bioslab.png\"class=\"ion-img\" ></ion-img>\n \n  <p class=\"p-texto05\">\n    <strong>PASSO 2: </strong>Clique no ícone de <ion-text color=\"danger\"><strong>\"Alterar sevidor\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/k0SkcT9/bioslab-menu.png\" class=\"ion-img\"></ion-img>\n \n  <p class=\"p-texto05\">\n    <strong>PASSO 3: </strong>Defina o nome do servidor, ou seja, se o nome do servidor for SRVTESTE, ficará, \n    <ion-text color=\"tertiary\"><strong>\"Servidor: SRVTESTE\"</strong></ion-text>.     \n  </p>\n  <p class=\"p-texto\">Em caso, seja uma base de teste, ou acessa \n    um servidor configurado em porta de comunicação diferente, será necessário informar a porta de comunicação configurada no PMBS, e ficará como na imagem abaixo. \n    Karyon.\n   </p>   \n  <ion-img src=\"https://i.ibb.co/mqNmTwP/alterar-servidor.png\" class=\"ion-img\"></ion-img>   \n\n</ion-content>\n");

/***/ }),

/***/ "b6DK":
/*!************************************************!*\
  !*** ./src/app/pmac/servidor/servidor.page.ts ***!
  \************************************************/
/*! exports provided: ServidorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidorPage", function() { return ServidorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_servidor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./servidor.page.html */ "I6Qk");
/* harmony import */ var _servidor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servidor.page.scss */ "2UOB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ServidorPage = class ServidorPage {
    constructor() { }
    ngOnInit() {
    }
};
ServidorPage.ctorParameters = () => [];
ServidorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-servidor',
        template: _raw_loader_servidor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_servidor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServidorPage);



/***/ }),

/***/ "ptWL":
/*!**************************************************!*\
  !*** ./src/app/pmac/servidor/servidor.module.ts ***!
  \**************************************************/
/*! exports provided: ServidorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidorPageModule", function() { return ServidorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _servidor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servidor-routing.module */ "qNEa");
/* harmony import */ var _servidor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servidor.page */ "b6DK");







let ServidorPageModule = class ServidorPageModule {
};
ServidorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servidor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServidorPageRoutingModule"]
        ],
        declarations: [_servidor_page__WEBPACK_IMPORTED_MODULE_6__["ServidorPage"]]
    })
], ServidorPageModule);



/***/ }),

/***/ "qNEa":
/*!**********************************************************!*\
  !*** ./src/app/pmac/servidor/servidor-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ServidorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServidorPageRoutingModule", function() { return ServidorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servidor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servidor.page */ "b6DK");




const routes = [
    {
        path: '',
        component: _servidor_page__WEBPACK_IMPORTED_MODULE_3__["ServidorPage"]
    }
];
let ServidorPageRoutingModule = class ServidorPageRoutingModule {
};
ServidorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServidorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pmac-servidor-servidor-module-es2015.js.map