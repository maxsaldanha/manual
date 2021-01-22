(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab2Page = class Tab2Page {
    constructor() { }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item-divider><p class=\"p-divider\">Material</p></ion-item-divider>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/receber\" ><ion-label>Receber</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card >\n      <ion-item lines=\"none\" href=\"/distribuir\" ><ion-label>Distribuir</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card >\n      <ion-item lines=\"none\" href=\"/realocar\" ><ion-label>Realocar</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/descartar\" ><ion-label>Descartar</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/control-amostra\" ><ion-label>Controle de Amostra</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card >\n      <ion-item lines=\"none\" href=\"/inf-volume\" ><ion-label>Informar Volume</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    \n    <ion-item-divider><p class=\"p-divider\">Mapa de Trabalho</p></ion-item-divider>\n\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/gerar-mapa\"><ion-label>Gerar Mapa de Trabalho</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>       \n      <ion-item lines=\"none\" href=\"/ret-exm-mapa\"><ion-label>Retirar exame de mapa de trabalho</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/imp-mapa\"><ion-label>Imprimir mapa de trabalho</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>       \n      <ion-item lines=\"none\" href=\"/list-trabalho\"><ion-label>Lista de Trabalho</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>      \n    \n    <ion-item-divider><p class=\"p-divider\">Digitação</p></ion-item-divider>\n\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/dig-mapa\"><ion-label>Mapa de Trabalho</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/and-cultura\"><ion-label>Andamento de Cultura</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/neg-cultura\"><ion-label>Negativar Cultura</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>      \n\n    <ion-item-divider><p class=\"p-divider\">Liberação</p></ion-item-divider>\n\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/lib-exame\"><ion-label>Liberação de Exames</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>      \n\n    <ion-item-divider><p class=\"p-divider\">Soroteca</p></ion-item-divider>\n\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/catalogar\"><ion-label>Catalogar</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/pesquisar\"><ion-label>Pesquisar</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/desca-bandeja\"><ion-label>Descartar Bandeja</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/config-bandeja\"><ion-label>Configurações de Bandejas</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    \n    <ion-item-divider><p class=\"p-divider\">Ferramentas</p></ion-item-divider>\n\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/agen-exame\"><ion-label>Agendar Exames</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/dura-exame\"><ion-label>Duração de Exames</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/corre-laudo\"><ion-label>Correção de Laudo</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/anular-exame\"><ion-label>Anular exame</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/atl-set-realiza\"><ion-label>Alterar Setor de Realização</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/alt-form-mapa\"><ion-label>Alterar Formato por Mapa</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/redig-rean\"><ion-label>Solicitar Redigitação e Reanálise</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/desblo-impr\"><ion-label>Desbloqueio de Impressão</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/personalizada\"><ion-label>Personalizadas</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n\n    <ion-item-divider><p class=\"p-divider\">Consultas</p></ion-item-divider>\n\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/geri-exame\"><ion-label>Gerenciamento de Exames</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/rastrea-exame\"><ion-label>Rastreabilidade de Operações</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/info-atendi\"><ion-label>Informações do Atendimento</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item lines=\"none\" href=\"/hist-paciente\"><ion-label>Histórico do Paciente</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/hist-paciente\"><ion-label>Tabelas de Resultados</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/formato\"><ion-label>Formatos</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/qtd-exam-tec\"><ion-label>Quantidade Exames Liberados por Técnicos</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/laudo-corrigido\"><ion-label>Laudos Corrigidos por Período</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/and-cult-consul\"><ion-label>Andamento de Cultura</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/equip-ativo\"><ion-label>Equipamentos Ativos</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item lines=\"none\" href=\"/relatorio\"><ion-label>Relatórios</ion-label><ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon></ion-item>\n    </ion-card>   \n    \n  </ion-list>  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map