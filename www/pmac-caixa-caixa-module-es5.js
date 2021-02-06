(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-caixa-caixa-module"], {
    /***/
    "0Jgm":
    /*!********************************************!*\
      !*** ./src/app/pmac/caixa/caixa.module.ts ***!
      \********************************************/

    /*! exports provided: CaixaPageModule */

    /***/
    function Jgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaixaPageModule", function () {
        return CaixaPageModule;
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


      var _caixa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./caixa-routing.module */
      "9wBP");
      /* harmony import */


      var _caixa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./caixa.page */
      "6A+5");

      var CaixaPageModule = function CaixaPageModule() {
        _classCallCheck(this, CaixaPageModule);
      };

      CaixaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _caixa_routing_module__WEBPACK_IMPORTED_MODULE_5__["CaixaPageRoutingModule"]],
        declarations: [_caixa_page__WEBPACK_IMPORTED_MODULE_6__["CaixaPage"]]
      })], CaixaPageModule);
      /***/
    },

    /***/
    "6A+5":
    /*!******************************************!*\
      !*** ./src/app/pmac/caixa/caixa.page.ts ***!
      \******************************************/

    /*! exports provided: CaixaPage */

    /***/
    function A5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaixaPage", function () {
        return CaixaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_caixa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./caixa.page.html */
      "cJgi");
      /* harmony import */


      var _caixa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./caixa.page.scss */
      "U+G+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CaixaPage = /*#__PURE__*/function () {
        function CaixaPage() {
          _classCallCheck(this, CaixaPage);
        }

        _createClass(CaixaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CaixaPage;
      }();

      CaixaPage.ctorParameters = function () {
        return [];
      };

      CaixaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-caixa',
        template: _raw_loader_caixa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_caixa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CaixaPage);
      /***/
    },

    /***/
    "9wBP":
    /*!****************************************************!*\
      !*** ./src/app/pmac/caixa/caixa-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: CaixaPageRoutingModule */

    /***/
    function wBP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CaixaPageRoutingModule", function () {
        return CaixaPageRoutingModule;
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


      var _caixa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./caixa.page */
      "6A+5");

      var routes = [{
        path: '',
        component: _caixa_page__WEBPACK_IMPORTED_MODULE_3__["CaixaPage"]
      }];

      var CaixaPageRoutingModule = function CaixaPageRoutingModule() {
        _classCallCheck(this, CaixaPageRoutingModule);
      };

      CaixaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CaixaPageRoutingModule);
      /***/
    },

    /***/
    "U+G+":
    /*!********************************************!*\
      !*** ./src/app/pmac/caixa/caixa.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function UG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWl4YS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "cJgi":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/caixa/caixa.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function cJgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class="default">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-caixa-caixa-module-es5.js.map