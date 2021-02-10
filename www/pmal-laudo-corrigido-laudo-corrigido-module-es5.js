(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-laudo-corrigido-laudo-corrigido-module"], {
    /***/
    "1klc":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/laudo-corrigido/laudo-corrigido.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function klc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXVkby1jb3JyaWdpZG8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Uagw":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/laudo-corrigido/laudo-corrigido.module.ts ***!
      \****************************************************************/

    /*! exports provided: LaudoCorrigidoPageModule */

    /***/
    function Uagw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LaudoCorrigidoPageModule", function () {
        return LaudoCorrigidoPageModule;
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


      var _laudo_corrigido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./laudo-corrigido-routing.module */
      "awTk");
      /* harmony import */


      var _laudo_corrigido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./laudo-corrigido.page */
      "mjvY");

      var LaudoCorrigidoPageModule = function LaudoCorrigidoPageModule() {
        _classCallCheck(this, LaudoCorrigidoPageModule);
      };

      LaudoCorrigidoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _laudo_corrigido_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaudoCorrigidoPageRoutingModule"]],
        declarations: [_laudo_corrigido_page__WEBPACK_IMPORTED_MODULE_6__["LaudoCorrigidoPage"]]
      })], LaudoCorrigidoPageModule);
      /***/
    },

    /***/
    "awTk":
    /*!************************************************************************!*\
      !*** ./src/app/pmal/laudo-corrigido/laudo-corrigido-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: LaudoCorrigidoPageRoutingModule */

    /***/
    function awTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LaudoCorrigidoPageRoutingModule", function () {
        return LaudoCorrigidoPageRoutingModule;
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


      var _laudo_corrigido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./laudo-corrigido.page */
      "mjvY");

      var routes = [{
        path: '',
        component: _laudo_corrigido_page__WEBPACK_IMPORTED_MODULE_3__["LaudoCorrigidoPage"]
      }];

      var LaudoCorrigidoPageRoutingModule = function LaudoCorrigidoPageRoutingModule() {
        _classCallCheck(this, LaudoCorrigidoPageRoutingModule);
      };

      LaudoCorrigidoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LaudoCorrigidoPageRoutingModule);
      /***/
    },

    /***/
    "d613":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/laudo-corrigido/laudo-corrigido.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d613(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "mjvY":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/laudo-corrigido/laudo-corrigido.page.ts ***!
      \**************************************************************/

    /*! exports provided: LaudoCorrigidoPage */

    /***/
    function mjvY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LaudoCorrigidoPage", function () {
        return LaudoCorrigidoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_laudo_corrigido_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./laudo-corrigido.page.html */
      "d613");
      /* harmony import */


      var _laudo_corrigido_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./laudo-corrigido.page.scss */
      "1klc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LaudoCorrigidoPage = /*#__PURE__*/function () {
        function LaudoCorrigidoPage() {
          _classCallCheck(this, LaudoCorrigidoPage);
        }

        _createClass(LaudoCorrigidoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LaudoCorrigidoPage;
      }();

      LaudoCorrigidoPage.ctorParameters = function () {
        return [];
      };

      LaudoCorrigidoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-laudo-corrigido',
        template: _raw_loader_laudo_corrigido_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_laudo_corrigido_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LaudoCorrigidoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-laudo-corrigido-laudo-corrigido-module-es5.js.map