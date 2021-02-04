(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-control-rps-control-rps-module"], {
    /***/
    "3yYX":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/control-rps/control-rps.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function yYX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "6h9L":
    /*!********************************************************!*\
      !*** ./src/app/pmac/control-rps/control-rps.module.ts ***!
      \********************************************************/

    /*! exports provided: ControlRpsPageModule */

    /***/
    function h9L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlRpsPageModule", function () {
        return ControlRpsPageModule;
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


      var _control_rps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./control-rps-routing.module */
      "GhAF");
      /* harmony import */


      var _control_rps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./control-rps.page */
      "JLaX");

      var ControlRpsPageModule = function ControlRpsPageModule() {
        _classCallCheck(this, ControlRpsPageModule);
      };

      ControlRpsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _control_rps_routing_module__WEBPACK_IMPORTED_MODULE_5__["ControlRpsPageRoutingModule"]],
        declarations: [_control_rps_page__WEBPACK_IMPORTED_MODULE_6__["ControlRpsPage"]]
      })], ControlRpsPageModule);
      /***/
    },

    /***/
    "GhAF":
    /*!****************************************************************!*\
      !*** ./src/app/pmac/control-rps/control-rps-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ControlRpsPageRoutingModule */

    /***/
    function GhAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlRpsPageRoutingModule", function () {
        return ControlRpsPageRoutingModule;
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


      var _control_rps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./control-rps.page */
      "JLaX");

      var routes = [{
        path: '',
        component: _control_rps_page__WEBPACK_IMPORTED_MODULE_3__["ControlRpsPage"]
      }];

      var ControlRpsPageRoutingModule = function ControlRpsPageRoutingModule() {
        _classCallCheck(this, ControlRpsPageRoutingModule);
      };

      ControlRpsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ControlRpsPageRoutingModule);
      /***/
    },

    /***/
    "JLaX":
    /*!******************************************************!*\
      !*** ./src/app/pmac/control-rps/control-rps.page.ts ***!
      \******************************************************/

    /*! exports provided: ControlRpsPage */

    /***/
    function JLaX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlRpsPage", function () {
        return ControlRpsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_control_rps_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./control-rps.page.html */
      "3yYX");
      /* harmony import */


      var _control_rps_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./control-rps.page.scss */
      "kO/H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlRpsPage = /*#__PURE__*/function () {
        function ControlRpsPage() {
          _classCallCheck(this, ControlRpsPage);
        }

        _createClass(ControlRpsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ControlRpsPage;
      }();

      ControlRpsPage.ctorParameters = function () {
        return [];
      };

      ControlRpsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-control-rps',
        template: _raw_loader_control_rps_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_control_rps_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ControlRpsPage);
      /***/
    },

    /***/
    "kO/H":
    /*!********************************************************!*\
      !*** ./src/app/pmac/control-rps/control-rps.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function kOH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLXJwcy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-control-rps-control-rps-module-es5.js.map