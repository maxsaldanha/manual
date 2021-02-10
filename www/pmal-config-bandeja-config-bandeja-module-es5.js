(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-config-bandeja-config-bandeja-module"], {
    /***/
    "S+7+":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/config-bandeja/config-bandeja.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function S7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWctYmFuZGVqYS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "YwD9":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/config-bandeja/config-bandeja.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YwD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "al6R":
    /*!**********************************************************************!*\
      !*** ./src/app/pmal/config-bandeja/config-bandeja-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ConfigBandejaPageRoutingModule */

    /***/
    function al6R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigBandejaPageRoutingModule", function () {
        return ConfigBandejaPageRoutingModule;
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


      var _config_bandeja_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./config-bandeja.page */
      "pkNs");

      var routes = [{
        path: '',
        component: _config_bandeja_page__WEBPACK_IMPORTED_MODULE_3__["ConfigBandejaPage"]
      }];

      var ConfigBandejaPageRoutingModule = function ConfigBandejaPageRoutingModule() {
        _classCallCheck(this, ConfigBandejaPageRoutingModule);
      };

      ConfigBandejaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfigBandejaPageRoutingModule);
      /***/
    },

    /***/
    "pkNs":
    /*!************************************************************!*\
      !*** ./src/app/pmal/config-bandeja/config-bandeja.page.ts ***!
      \************************************************************/

    /*! exports provided: ConfigBandejaPage */

    /***/
    function pkNs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigBandejaPage", function () {
        return ConfigBandejaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_config_bandeja_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./config-bandeja.page.html */
      "YwD9");
      /* harmony import */


      var _config_bandeja_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config-bandeja.page.scss */
      "S+7+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConfigBandejaPage = /*#__PURE__*/function () {
        function ConfigBandejaPage() {
          _classCallCheck(this, ConfigBandejaPage);
        }

        _createClass(ConfigBandejaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfigBandejaPage;
      }();

      ConfigBandejaPage.ctorParameters = function () {
        return [];
      };

      ConfigBandejaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-config-bandeja',
        template: _raw_loader_config_bandeja_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_config_bandeja_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConfigBandejaPage);
      /***/
    },

    /***/
    "y1At":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/config-bandeja/config-bandeja.module.ts ***!
      \**************************************************************/

    /*! exports provided: ConfigBandejaPageModule */

    /***/
    function y1At(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigBandejaPageModule", function () {
        return ConfigBandejaPageModule;
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


      var _config_bandeja_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./config-bandeja-routing.module */
      "al6R");
      /* harmony import */


      var _config_bandeja_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./config-bandeja.page */
      "pkNs");

      var ConfigBandejaPageModule = function ConfigBandejaPageModule() {
        _classCallCheck(this, ConfigBandejaPageModule);
      };

      ConfigBandejaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _config_bandeja_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigBandejaPageRoutingModule"]],
        declarations: [_config_bandeja_page__WEBPACK_IMPORTED_MODULE_6__["ConfigBandejaPage"]]
      })], ConfigBandejaPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-config-bandeja-config-bandeja-module-es5.js.map