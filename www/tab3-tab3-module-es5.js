(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "IqiF":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function IqiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "h1hx");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "nRCe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Tab3Page = function Tab3Page() {
        _classCallCheck(this, Tab3Page);
      };

      Tab3Page.ctorParameters = function () {
        return [];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "OcaV":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function OcaV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "h1hx":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function h1hx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" padding class=\"background\">\n  <ion-list> <ion-item-divider><p class=\"p-divider\">Como faço para ...</p></ion-item-divider>    \n    <ion-card >\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\" ><ion-label >Receber</ion-label></ion-item>\n    </ion-card> \n    <ion-card >\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\" ><ion-label >Distribuir</ion-label></ion-item>\n    </ion-card>      \n    <ion-card >\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\" ><ion-label >Resdistribuir</ion-label></ion-item>\n    </ion-card> \n    <ion-card >\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\" ><ion-label >Devolver</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Controle de Guia</ion-label></ion-item>\n    </ion-card>\n    <ion-card>       \n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Reperfilar Guia</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Impressão de Guias SP/SPDAT</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Relatórios</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Rastreabilidade de Guias</ion-label></ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Gerar Borderô</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Verificar Borderô</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Alterar Borderô</ion-label></ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Gerar Fatura</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Verificar Fatura</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Desfazer Fatura</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Faturamento Eletrônico</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >SUS BPA</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Gerar Processo para Pagamento</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Gerenciamento de Grupo de Fatura</ion-label></ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Encontro de Contas</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Fechamento de Conta por Paciente</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Controle de Culturas</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Corrigir o número de Conselho do Profissional Solicitante</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Bloquear Atendimento pelo Convênio</ion-label></ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Autorizar Desconto</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >cobrança e Estorna</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Entrada e Saída Extraordinária</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Laudos Vinculados ao Borderô</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Revisão de Glosa</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Autorização de Faturamento</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Recibo Provisório de Serviço</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Reindexar Fatura</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Reindexar Exames</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Personalizadas</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Informações do Atendimento</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Guias não remetidas</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Cobranças e Estornos</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Valores a Faturar</ion-label></ion-item>\n    </ion-card>   \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Gerenciamento de Guias</ion-label></ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Gerenciamento de Faturas</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Estatística de Atendimento</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Lançamento de Caixa</ion-label></ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class=\"ion-item\" lines=\"none\" href=\"/\"><ion-label >Relatórios</ion-label></ion-item>\n    </ion-card>        \n  </ion-list>  \n</ion-content>\n";
      /***/
    },

    /***/
    "k+ul":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function kUl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "IqiF");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "OcaV");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "nRCe":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function nRCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map