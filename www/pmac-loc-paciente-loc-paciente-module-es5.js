(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-loc-paciente-loc-paciente-module"], {
    /***/
    "5sqk":
    /*!********************************************************!*\
      !*** ./src/app/pmac/loc-paciente/loc-paciente.page.ts ***!
      \********************************************************/

    /*! exports provided: LocPacientePage */

    /***/
    function sqk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocPacientePage", function () {
        return LocPacientePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loc_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loc-paciente.page.html */
      "Beim");
      /* harmony import */


      var _loc_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loc-paciente.page.scss */
      "WzZ2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocPacientePage = /*#__PURE__*/function () {
        function LocPacientePage() {
          _classCallCheck(this, LocPacientePage);
        }

        _createClass(LocPacientePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LocPacientePage;
      }();

      LocPacientePage.ctorParameters = function () {
        return [];
      };

      LocPacientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loc-paciente',
        template: _raw_loader_loc_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loc_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LocPacientePage);
      /***/
    },

    /***/
    "7C7D":
    /*!******************************************************************!*\
      !*** ./src/app/pmac/loc-paciente/loc-paciente-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: LocPacientePageRoutingModule */

    /***/
    function C7D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocPacientePageRoutingModule", function () {
        return LocPacientePageRoutingModule;
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


      var _loc_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loc-paciente.page */
      "5sqk");

      var routes = [{
        path: '',
        component: _loc_paciente_page__WEBPACK_IMPORTED_MODULE_3__["LocPacientePage"]
      }];

      var LocPacientePageRoutingModule = function LocPacientePageRoutingModule() {
        _classCallCheck(this, LocPacientePageRoutingModule);
      };

      LocPacientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocPacientePageRoutingModule);
      /***/
    },

    /***/
    "7rsK":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/loc-paciente/loc-paciente.module.ts ***!
      \**********************************************************/

    /*! exports provided: LocPacientePageModule */

    /***/
    function rsK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocPacientePageModule", function () {
        return LocPacientePageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _loc_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loc-paciente-routing.module */
      "7C7D");
      /* harmony import */


      var _loc_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loc-paciente.page */
      "5sqk");

      var LocPacientePageModule = function LocPacientePageModule() {
        _classCallCheck(this, LocPacientePageModule);
      };

      LocPacientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loc_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocPacientePageRoutingModule"]],
        declarations: [_loc_paciente_page__WEBPACK_IMPORTED_MODULE_6__["LocPacientePage"]]
      })], LocPacientePageModule);
      /***/
    },

    /***/
    "Beim":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/loc-paciente/loc-paciente.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Beim(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\" ></ion-back-button> </ion-buttons>\n    <ion-title >Localizar Paciente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"p-title\">Como localizar um paciente durante o atendimento.</p>\n\n  <p class=\"p-texto05\"><strong>PASSO 1:</strong> Clique nos três pontinhos do campo <ion-text color=\"danger\"><strong>\"Identificação do paciente\"</strong></ion-text>, e uma caixa de diálogo será\n    mostrada na tela.</p>\n  <ion-img src=\"https://i.ibb.co/3Bk5BVG/image.png\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-texto05\"><strong>PASSO 2:</strong> Na tela <ion-text color=\"danger\"><strong>\"Localizar Paciente\"</strong></ion-text>, podemos localizar o cadastro por algumas chaves padrões, como:\n  <ion-text color=\"tertiary\">\"Nome\", \"Sexo/Nascimento\", \"CPF\", \"Atendimento\", \"Matrícula\", \"Número de Guia\"</ion-text>, porém em alguns casos devido a particularidades, outras chaves podem ser utlilizadas.\n  </p>\n  <p class=\"p-texto\">\n    Ao lado esquerdo da tela, encontraremos um grupo de seletores <ion-text color=\"danger\"><strong>\"Localizar Por\"</strong></ion-text>, que fará o filtro do dado para ser\n  pesquisado, e um quadro <ion-text color=\"danger\"><strong>\"Opções\"</strong></ion-text>, onde é possivel filtrar apenas pelos cadastros ativos, aplicar ou seja, confirmar\n  a informação selecionada, ou criar um novo paciente.\n  </p>\n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>    \n    <strong>Localizar paciente por \"Nome\"</strong>\n  </p>\n  <p class=\"p-texto\">\n    <strong>PASSO 1: </strong>Selecione a opção nome e digite o nome do paciente no campo <ion-text color=\"danger\"><strong>\"Nome do paciente\"</strong></ion-text>\n  </p>\n  \n  <ion-img src=\"https://i.ibb.co/Sn5tD03/image.png\" class=\"ion-img\"></ion-img>\n  <p class=\"p-texto\"><strong>PASSO 2: </strong>Selecione na lista o nome desejado, então, clique <ion-text color=\"danger\"><strong>\"ENTER\"</strong></ion-text> \n    ou <ion-text color=\"danger\"><strong>\"Aplicar\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/Qr2g6Tm/image.png\" class=\"ion-img\"></ion-img>\n   \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>Localizar por \"Sexo/Nasc\": </strong>\n  </p>\n  <p class=\"p-texto\">Clique no campo <ion-text color=\"danger\"><strong>\"Sexo do paciente\"</strong></ion-text> e uma lista com as opções será deslizada, e clique na opção desejada. \n    Depois digite no campo<ion-text color=\"danger\"><strong>\"Data de nascimento\"</strong></ion-text>, então, clique <ion-text color=\"danger\"><strong>\"ENTER\"</strong></ion-text> \n    ou <ion-text color=\"danger\"><strong>\"Aplicar\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/C55PSLZ/image.png\" class=\"ion-img\"></ion-img> \n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>Localizar por \"CPF\": </strong>\n  </p>\n  <p class=\"p-texto\">Clique no campo <ion-text color=\"danger\"><strong>\"CPF\"</strong></ion-text> e digite o número do CPF do paciente, então, clique <ion-text color=\"danger\"><strong>\"ENTER\"</strong></ion-text> \n    ou <ion-text color=\"danger\"><strong>\"Aplicar\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/x7mCBs9/image.png\" class=\"ion-img\"></ion-img>\n \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>Localizar por \"Atendimento\": </strong>\n  </p>\n  <p class=\"p-texto\">Clique no campo <ion-text color=\"danger\"><strong>\"Atendimento\"</strong></ion-text> e digite o número de atendimento do paciente, então, clique <ion-text color=\"danger\"><strong>\"ENTER\"</strong></ion-text> \n    ou <ion-text color=\"danger\"><strong>\"Aplicar\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/5s2scbR/image.png\" class=\"ion-img\"></ion-img>\n \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>Localizar por \"Matrícula\": </strong>\n  </p>\n  <p class=\"p-texto\">Clique no campo <ion-text color=\"danger\"><strong>\"Matricula\"</strong></ion-text> e digite o número de matrícula do paciente, então, clique <ion-text color=\"danger\"><strong>\"ENTER\"</strong></ion-text> \n    ou <ion-text color=\"danger\"><strong>\"Aplicar\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/F05LqsM/image.png\" class=\"ion-img\"></ion-img> \n \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>Localizar por \"Número de Guia\": </strong>\n  </p>\n  <p class=\"p-texto\">Clique no campo <ion-text color=\"danger\"><strong>\"Convênio\"</strong></ion-text> e uma lista com as opções será deslizada, e clique na opção desejada. \n    Depois digite no campo<ion-text color=\"danger\"><strong>\"Número da Guia\"</strong></ion-text>, então, clique <ion-text color=\"danger\"><strong>\"ENTER\"</strong></ion-text> \n    ou <ion-text color=\"danger\"><strong>\"Aplicar\"</strong></ion-text>\n  </p>\n  <ion-img src=\"https://i.ibb.co/hH9G6P1/image.png\" class=\"ion-img\"></ion-img>\n\n  <ion-footer>\n    <p class=\"p-texto-small\">\n      Dúvida? \n      <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400 \n      <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n      <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n    </p>\n  </ion-footer>\n \n</ion-content>\n";
      /***/
    },

    /***/
    "WzZ2":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/loc-paciente/loc-paciente.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function WzZ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtcGFjaWVudGUucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-loc-paciente-loc-paciente-module-es5.js.map