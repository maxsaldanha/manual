(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-atendimento-atendimento-module"], {
    /***/
    "+Vxk":
    /*!****************************************************************!*\
      !*** ./src/app/pmac/atendimento/atendimento-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: AtendimentoPageRoutingModule */

    /***/
    function Vxk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtendimentoPageRoutingModule", function () {
        return AtendimentoPageRoutingModule;
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


      var _atendimento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./atendimento.page */
      "9SMA");

      var routes = [{
        path: '',
        component: _atendimento_page__WEBPACK_IMPORTED_MODULE_3__["AtendimentoPage"]
      }];

      var AtendimentoPageRoutingModule = function AtendimentoPageRoutingModule() {
        _classCallCheck(this, AtendimentoPageRoutingModule);
      };

      AtendimentoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AtendimentoPageRoutingModule);
      /***/
    },

    /***/
    "9SMA":
    /*!******************************************************!*\
      !*** ./src/app/pmac/atendimento/atendimento.page.ts ***!
      \******************************************************/

    /*! exports provided: AtendimentoPage */

    /***/
    function SMA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtendimentoPage", function () {
        return AtendimentoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_atendimento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./atendimento.page.html */
      "tDCy");
      /* harmony import */


      var _atendimento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./atendimento.page.scss */
      "v3Y8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AtendimentoPage = /*#__PURE__*/function () {
        function AtendimentoPage() {
          _classCallCheck(this, AtendimentoPage);
        }

        _createClass(AtendimentoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AtendimentoPage;
      }();

      AtendimentoPage.ctorParameters = function () {
        return [];
      };

      AtendimentoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-atendimento',
        template: _raw_loader_atendimento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_atendimento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AtendimentoPage);
      /***/
    },

    /***/
    "K3sn":
    /*!********************************************************!*\
      !*** ./src/app/pmac/atendimento/atendimento.module.ts ***!
      \********************************************************/

    /*! exports provided: AtendimentoPageModule */

    /***/
    function K3sn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtendimentoPageModule", function () {
        return AtendimentoPageModule;
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


      var _atendimento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./atendimento-routing.module */
      "+Vxk");
      /* harmony import */


      var _atendimento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./atendimento.page */
      "9SMA");

      var AtendimentoPageModule = function AtendimentoPageModule() {
        _classCallCheck(this, AtendimentoPageModule);
      };

      AtendimentoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _atendimento_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtendimentoPageRoutingModule"]],
        declarations: [_atendimento_page__WEBPACK_IMPORTED_MODULE_6__["AtendimentoPage"]]
      })], AtendimentoPageModule);
      /***/
    },

    /***/
    "tDCy":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/atendimento/atendimento.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function tDCy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class="default">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"https://i.ibb.co/9wMnkNJ/login-bioslab.png\"></ion-img>\n  <ion-img src=\"https://i.ibb.co/Nj8DvSH/image.png\"></ion-img>\n  <ion-img src=\"https://i.ibb.co/PgK2pm0/PMAC-Tela-Inicial.png\"></ion-img>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n  \n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "v3Y8":
    /*!********************************************************!*\
      !*** ./src/app/pmac/atendimento/atendimento.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function v3Y8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdGVuZGltZW50by5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-atendimento-atendimento-module-es5.js.map