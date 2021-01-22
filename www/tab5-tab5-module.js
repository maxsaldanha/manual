(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "FFfc":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Ki12":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab5.page */ "Tlso");




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ "Sa0/":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "Ki12");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "Tlso");







let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "Tlso":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab5.page.html */ "pXFx");
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5.page.scss */ "FFfc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab5Page = class Tab5Page {
    constructor() { }
    ngOnInit() {
    }
};
Tab5Page.ctorParameters = () => [];
Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab5Page);



/***/ }),

/***/ "pXFx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item-divider><p class=\"p-divider\">Exame</p></ion-item-divider>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/\" ><ion-label>Exame</ion-label></ion-item>\n    </ion-card> \n    <ion-card >\n      <ion-item lines=\"none\" href=\"/\" ><ion-label>Grupo de Exames</ion-label></ion-item>\n    </ion-card>     \n    <ion-card >\n      <ion-item lines=\"none\" href=\"/\" ><ion-label>Informações Adicionais</ion-label></ion-item>\n    </ion-card>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/\" ><ion-label>Formato</ion-label></ion-item>\n    </ion-card>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/\" ><ion-label>Tabela de Resultato</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Grupo de Modelo de Resultado</ion-label></ion-item>\n    </ion-card>\n    \n    <ion-item-divider><p class=\"p-divider\">Preço e Cobertura</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Tabela de Cobrança</ion-label></ion-item>\n    </ion-card>\n    <ion-card>       \n      <ion-item lines=\"none\" href=\"/\"><ion-label>Similitude</ion-label></ion-item>\n    </ion-card>\n    <ion-card>       \n      <ion-item lines=\"none\" href=\"/\"><ion-label>Cobertura</ion-label></ion-item>\n    </ion-card>   \n    \n    <ion-item-divider><p class=\"p-divider\">Empresas</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Convênio</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Laboratório e Clinica</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Laboratório Externo</ion-label></ion-item>\n    </ion-card>        \n\n    <ion-item-divider><p class=\"p-divider\">Auxiliar</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Filiais e Postos</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Área Técnica</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Setor Técnico</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Material e Amostra</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Agendamento</ion-label></ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Feriados</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Serviços</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Tabelas de Sistema</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Municípios e Impostos</ion-label></ion-item>\n    </ion-card> \n\n    <ion-item-divider><p class=\"p-divider\">Usuário</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Usuário</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Grupo de Permissão</ion-label></ion-item>\n    </ion-card>  \n    \n    <ion-item-divider><p class=\"p-divider\">Configurações</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Sistema</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Estação</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Template</ion-label></ion-item>\n    </ion-card>  \n\n    <ion-item-divider><p class=\"p-divider\">Ferramentas</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Relatórios</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Personalizadas</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Registrar Customizações</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Unificar Pacientes Duplicados</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Parâmetro de Liberação</ion-label></ion-item>\n    </ion-card>  \n    \n    <ion-item-divider><p class=\"p-divider\">Consultas</p></ion-item-divider>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/\"><ion-label>Relatórios</ion-label></ion-item>\n    </ion-card>   \n   \n  </ion-list>  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map