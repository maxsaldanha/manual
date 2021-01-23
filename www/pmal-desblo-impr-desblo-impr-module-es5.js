(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-desblo-impr-desblo-impr-module"], {
    /***/
    "8jR6":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/desblo-impr/desblo-impr-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: DesbloImprPageRoutingModule */

    /***/
    function jR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesbloImprPageRoutingModule", function () {
        return DesbloImprPageRoutingModule;
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


      var _desblo_impr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./desblo-impr.page */
      "PC0L");

      var routes = [{
        path: '',
        component: _desblo_impr_page__WEBPACK_IMPORTED_MODULE_3__["DesbloImprPage"]
      }];

      var DesbloImprPageRoutingModule = function DesbloImprPageRoutingModule() {
        _classCallCheck(this, DesbloImprPageRoutingModule);
      };

      DesbloImprPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DesbloImprPageRoutingModule);
      /***/
    },

    /***/
    "MjUE":
    /*!********************************************************!*\
      !*** ./src/app/pmal/desblo-impr/desblo-impr.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function MjUE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNibG8taW1wci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "PC0L":
    /*!******************************************************!*\
      !*** ./src/app/pmal/desblo-impr/desblo-impr.page.ts ***!
      \******************************************************/

    /*! exports provided: DesbloImprPage */

    /***/
    function PC0L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesbloImprPage", function () {
        return DesbloImprPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_desblo_impr_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./desblo-impr.page.html */
      "xSuE");
      /* harmony import */


      var _desblo_impr_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./desblo-impr.page.scss */
      "MjUE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DesbloImprPage = /*#__PURE__*/function () {
        function DesbloImprPage() {
          _classCallCheck(this, DesbloImprPage);
        }

        _createClass(DesbloImprPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DesbloImprPage;
      }();

      DesbloImprPage.ctorParameters = function () {
        return [];
      };

      DesbloImprPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-desblo-impr',
        template: _raw_loader_desblo_impr_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_desblo_impr_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DesbloImprPage);
      /***/
    },

    /***/
    "VOBR":
    /*!********************************************************!*\
      !*** ./src/app/pmal/desblo-impr/desblo-impr.module.ts ***!
      \********************************************************/

    /*! exports provided: DesbloImprPageModule */

    /***/
    function VOBR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesbloImprPageModule", function () {
        return DesbloImprPageModule;
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


      var _desblo_impr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./desblo-impr-routing.module */
      "8jR6");
      /* harmony import */


      var _desblo_impr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./desblo-impr.page */
      "PC0L");

      var DesbloImprPageModule = function DesbloImprPageModule() {
        _classCallCheck(this, DesbloImprPageModule);
      };

      DesbloImprPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _desblo_impr_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesbloImprPageRoutingModule"]],
        declarations: [_desblo_impr_page__WEBPACK_IMPORTED_MODULE_6__["DesbloImprPage"]]
      })], DesbloImprPageModule);
      /***/
    },

    /***/
    "xSuE":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/desblo-impr/desblo-impr.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xSuE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>desblo-impr</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-desblo-impr-desblo-impr-module-es5.js.map