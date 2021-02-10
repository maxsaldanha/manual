(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-formato-formato-module"], {
    /***/
    "Jbcb":
    /*!**********************************************!*\
      !*** ./src/app/pmal/formato/formato.page.ts ***!
      \**********************************************/

    /*! exports provided: FormatoPage */

    /***/
    function Jbcb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormatoPage", function () {
        return FormatoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formato_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formato.page.html */
      "v/mL");
      /* harmony import */


      var _formato_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formato.page.scss */
      "UVs4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FormatoPage = /*#__PURE__*/function () {
        function FormatoPage() {
          _classCallCheck(this, FormatoPage);
        }

        _createClass(FormatoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormatoPage;
      }();

      FormatoPage.ctorParameters = function () {
        return [];
      };

      FormatoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-formato',
        template: _raw_loader_formato_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formato_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FormatoPage);
      /***/
    },

    /***/
    "UVs4":
    /*!************************************************!*\
      !*** ./src/app/pmal/formato/formato.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function UVs4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "VBx0":
    /*!************************************************!*\
      !*** ./src/app/pmal/formato/formato.module.ts ***!
      \************************************************/

    /*! exports provided: FormatoPageModule */

    /***/
    function VBx0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormatoPageModule", function () {
        return FormatoPageModule;
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


      var _formato_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./formato-routing.module */
      "jxBS");
      /* harmony import */


      var _formato_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formato.page */
      "Jbcb");

      var FormatoPageModule = function FormatoPageModule() {
        _classCallCheck(this, FormatoPageModule);
      };

      FormatoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _formato_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormatoPageRoutingModule"]],
        declarations: [_formato_page__WEBPACK_IMPORTED_MODULE_6__["FormatoPage"]]
      })], FormatoPageModule);
      /***/
    },

    /***/
    "jxBS":
    /*!********************************************************!*\
      !*** ./src/app/pmal/formato/formato-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: FormatoPageRoutingModule */

    /***/
    function jxBS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormatoPageRoutingModule", function () {
        return FormatoPageRoutingModule;
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


      var _formato_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./formato.page */
      "Jbcb");

      var routes = [{
        path: '',
        component: _formato_page__WEBPACK_IMPORTED_MODULE_3__["FormatoPage"]
      }];

      var FormatoPageRoutingModule = function FormatoPageRoutingModule() {
        _classCallCheck(this, FormatoPageRoutingModule);
      };

      FormatoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FormatoPageRoutingModule);
      /***/
    },

    /***/
    "v/mL":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/formato/formato.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function vML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>formato</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-formato-formato-module-es5.js.map