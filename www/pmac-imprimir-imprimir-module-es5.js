(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-imprimir-imprimir-module"], {
    /***/
    "452u":
    /*!************************************************!*\
      !*** ./src/app/pmac/imprimir/imprimir.page.ts ***!
      \************************************************/

    /*! exports provided: ImprimirPage */

    /***/
    function u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprimirPage", function () {
        return ImprimirPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_imprimir_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./imprimir.page.html */
      "Pz0B");
      /* harmony import */


      var _imprimir_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./imprimir.page.scss */
      "RsTy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ImprimirPage = /*#__PURE__*/function () {
        function ImprimirPage() {
          _classCallCheck(this, ImprimirPage);
        }

        _createClass(ImprimirPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImprimirPage;
      }();

      ImprimirPage.ctorParameters = function () {
        return [];
      };

      ImprimirPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imprimir',
        template: _raw_loader_imprimir_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imprimir_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImprimirPage);
      /***/
    },

    /***/
    "I59B":
    /*!**************************************************!*\
      !*** ./src/app/pmac/imprimir/imprimir.module.ts ***!
      \**************************************************/

    /*! exports provided: ImprimirPageModule */

    /***/
    function I59B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprimirPageModule", function () {
        return ImprimirPageModule;
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


      var _imprimir_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./imprimir-routing.module */
      "y7/d");
      /* harmony import */


      var _imprimir_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./imprimir.page */
      "452u");

      var ImprimirPageModule = function ImprimirPageModule() {
        _classCallCheck(this, ImprimirPageModule);
      };

      ImprimirPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imprimir_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImprimirPageRoutingModule"]],
        declarations: [_imprimir_page__WEBPACK_IMPORTED_MODULE_6__["ImprimirPage"]]
      })], ImprimirPageModule);
      /***/
    },

    /***/
    "Pz0B":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/imprimir/imprimir.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pz0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "RsTy":
    /*!**************************************************!*\
      !*** ./src/app/pmac/imprimir/imprimir.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function RsTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByaW1pci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "y7/d":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/imprimir/imprimir-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ImprimirPageRoutingModule */

    /***/
    function y7D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImprimirPageRoutingModule", function () {
        return ImprimirPageRoutingModule;
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


      var _imprimir_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./imprimir.page */
      "452u");

      var routes = [{
        path: '',
        component: _imprimir_page__WEBPACK_IMPORTED_MODULE_3__["ImprimirPage"]
      }];

      var ImprimirPageRoutingModule = function ImprimirPageRoutingModule() {
        _classCallCheck(this, ImprimirPageRoutingModule);
      };

      ImprimirPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImprimirPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-imprimir-imprimir-module-es5.js.map