(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-relatorio-relatorio-module"], {
    /***/
    "8G8L":
    /*!****************************************************!*\
      !*** ./src/app/pmal/relatorio/relatorio.module.ts ***!
      \****************************************************/

    /*! exports provided: RelatorioPageModule */

    /***/
    function G8L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioPageModule", function () {
        return RelatorioPageModule;
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


      var _relatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./relatorio-routing.module */
      "ma1A");
      /* harmony import */


      var _relatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relatorio.page */
      "WW5O");

      var RelatorioPageModule = function RelatorioPageModule() {
        _classCallCheck(this, RelatorioPageModule);
      };

      RelatorioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _relatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RelatorioPageRoutingModule"]],
        declarations: [_relatorio_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioPage"]]
      })], RelatorioPageModule);
      /***/
    },

    /***/
    "8yxM":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/relatorio/relatorio.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function yxM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>relatorio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "O3U0":
    /*!****************************************************!*\
      !*** ./src/app/pmal/relatorio/relatorio.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function O3U0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdG9yaW8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "WW5O":
    /*!**************************************************!*\
      !*** ./src/app/pmal/relatorio/relatorio.page.ts ***!
      \**************************************************/

    /*! exports provided: RelatorioPage */

    /***/
    function WW5O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioPage", function () {
        return RelatorioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorio.page.html */
      "8yxM");
      /* harmony import */


      var _relatorio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorio.page.scss */
      "O3U0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RelatorioPage = /*#__PURE__*/function () {
        function RelatorioPage() {
          _classCallCheck(this, RelatorioPage);
        }

        _createClass(RelatorioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RelatorioPage;
      }();

      RelatorioPage.ctorParameters = function () {
        return [];
      };

      RelatorioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-relatorio',
        template: _raw_loader_relatorio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RelatorioPage);
      /***/
    },

    /***/
    "ma1A":
    /*!************************************************************!*\
      !*** ./src/app/pmal/relatorio/relatorio-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: RelatorioPageRoutingModule */

    /***/
    function ma1A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelatorioPageRoutingModule", function () {
        return RelatorioPageRoutingModule;
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


      var _relatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorio.page */
      "WW5O");

      var routes = [{
        path: '',
        component: _relatorio_page__WEBPACK_IMPORTED_MODULE_3__["RelatorioPage"]
      }];

      var RelatorioPageRoutingModule = function RelatorioPageRoutingModule() {
        _classCallCheck(this, RelatorioPageRoutingModule);
      };

      RelatorioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RelatorioPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-relatorio-relatorio-module-es5.js.map