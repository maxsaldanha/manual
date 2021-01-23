(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-guia-nao-rem-guia-nao-rem-module"], {
    /***/
    "/UKY":
    /*!********************************************************!*\
      !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem.page.ts ***!
      \********************************************************/

    /*! exports provided: GuiaNaoRemPage */

    /***/
    function UKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuiaNaoRemPage", function () {
        return GuiaNaoRemPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_guia_nao_rem_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./guia-nao-rem.page.html */
      "clVH");
      /* harmony import */


      var _guia_nao_rem_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guia-nao-rem.page.scss */
      "P+o3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GuiaNaoRemPage = /*#__PURE__*/function () {
        function GuiaNaoRemPage() {
          _classCallCheck(this, GuiaNaoRemPage);
        }

        _createClass(GuiaNaoRemPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GuiaNaoRemPage;
      }();

      GuiaNaoRemPage.ctorParameters = function () {
        return [];
      };

      GuiaNaoRemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-guia-nao-rem',
        template: _raw_loader_guia_nao_rem_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_guia_nao_rem_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GuiaNaoRemPage);
      /***/
    },

    /***/
    "P+o3":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function PO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlhLW5hby1yZW0ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Y/09":
    /*!******************************************************************!*\
      !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: GuiaNaoRemPageRoutingModule */

    /***/
    function Y09(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuiaNaoRemPageRoutingModule", function () {
        return GuiaNaoRemPageRoutingModule;
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


      var _guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guia-nao-rem.page */
      "/UKY");

      var routes = [{
        path: '',
        component: _guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_3__["GuiaNaoRemPage"]
      }];

      var GuiaNaoRemPageRoutingModule = function GuiaNaoRemPageRoutingModule() {
        _classCallCheck(this, GuiaNaoRemPageRoutingModule);
      };

      GuiaNaoRemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GuiaNaoRemPageRoutingModule);
      /***/
    },

    /***/
    "clVH":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/guia-nao-rem/guia-nao-rem.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function clVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  <ion-footer>  \n    <ion-toolbar class=\"toobar-footer\">\n      <p class=\"p-texto-small\">    \n        <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">(21) 3622-6400\n        <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\">(21) 99311-9141\n        <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\">suporte@karyon.com.br\n      </p>\n    </ion-toolbar>     \n  </ion-footer>\n\n</ion-content>";
      /***/
    },

    /***/
    "ecNC":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/guia-nao-rem/guia-nao-rem.module.ts ***!
      \**********************************************************/

    /*! exports provided: GuiaNaoRemPageModule */

    /***/
    function ecNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuiaNaoRemPageModule", function () {
        return GuiaNaoRemPageModule;
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


      var _guia_nao_rem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guia-nao-rem-routing.module */
      "Y/09");
      /* harmony import */


      var _guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guia-nao-rem.page */
      "/UKY");

      var GuiaNaoRemPageModule = function GuiaNaoRemPageModule() {
        _classCallCheck(this, GuiaNaoRemPageModule);
      };

      GuiaNaoRemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _guia_nao_rem_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuiaNaoRemPageRoutingModule"]],
        declarations: [_guia_nao_rem_page__WEBPACK_IMPORTED_MODULE_6__["GuiaNaoRemPage"]]
      })], GuiaNaoRemPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-guia-nao-rem-guia-nao-rem-module-es5.js.map