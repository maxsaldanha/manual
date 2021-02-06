(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-lanc-aberto-lanc-aberto-module"], {
    /***/
    "/H/z":
    /*!********************************************************!*\
      !*** ./src/app/pmac/lanc-aberto/lanc-aberto.module.ts ***!
      \********************************************************/

    /*! exports provided: LancAbertoPageModule */

    /***/
    function HZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LancAbertoPageModule", function () {
        return LancAbertoPageModule;
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


      var _lanc_aberto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lanc-aberto-routing.module */
      "euQ5");
      /* harmony import */


      var _lanc_aberto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lanc-aberto.page */
      "homR");

      var LancAbertoPageModule = function LancAbertoPageModule() {
        _classCallCheck(this, LancAbertoPageModule);
      };

      LancAbertoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lanc_aberto_routing_module__WEBPACK_IMPORTED_MODULE_5__["LancAbertoPageRoutingModule"]],
        declarations: [_lanc_aberto_page__WEBPACK_IMPORTED_MODULE_6__["LancAbertoPage"]]
      })], LancAbertoPageModule);
      /***/
    },

    /***/
    "844N":
    /*!********************************************************!*\
      !*** ./src/app/pmac/lanc-aberto/lanc-aberto.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5jLWFiZXJ0by5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "WTKL":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/lanc-aberto/lanc-aberto.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WTKL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "euQ5":
    /*!****************************************************************!*\
      !*** ./src/app/pmac/lanc-aberto/lanc-aberto-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: LancAbertoPageRoutingModule */

    /***/
    function euQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LancAbertoPageRoutingModule", function () {
        return LancAbertoPageRoutingModule;
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


      var _lanc_aberto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lanc-aberto.page */
      "homR");

      var routes = [{
        path: '',
        component: _lanc_aberto_page__WEBPACK_IMPORTED_MODULE_3__["LancAbertoPage"]
      }];

      var LancAbertoPageRoutingModule = function LancAbertoPageRoutingModule() {
        _classCallCheck(this, LancAbertoPageRoutingModule);
      };

      LancAbertoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LancAbertoPageRoutingModule);
      /***/
    },

    /***/
    "homR":
    /*!******************************************************!*\
      !*** ./src/app/pmac/lanc-aberto/lanc-aberto.page.ts ***!
      \******************************************************/

    /*! exports provided: LancAbertoPage */

    /***/
    function homR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LancAbertoPage", function () {
        return LancAbertoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lanc_aberto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lanc-aberto.page.html */
      "WTKL");
      /* harmony import */


      var _lanc_aberto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lanc-aberto.page.scss */
      "844N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LancAbertoPage = /*#__PURE__*/function () {
        function LancAbertoPage() {
          _classCallCheck(this, LancAbertoPage);
        }

        _createClass(LancAbertoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LancAbertoPage;
      }();

      LancAbertoPage.ctorParameters = function () {
        return [];
      };

      LancAbertoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lanc-aberto',
        template: _raw_loader_lanc_aberto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lanc_aberto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LancAbertoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-lanc-aberto-lanc-aberto-module-es5.js.map