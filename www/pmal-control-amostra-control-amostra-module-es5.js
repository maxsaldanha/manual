(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-control-amostra-control-amostra-module"], {
    /***/
    "9aa3":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/control-amostra/control-amostra.module.ts ***!
      \****************************************************************/

    /*! exports provided: ControlAmostraPageModule */

    /***/
    function aa3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlAmostraPageModule", function () {
        return ControlAmostraPageModule;
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


      var _control_amostra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./control-amostra-routing.module */
      "GjZw");
      /* harmony import */


      var _control_amostra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./control-amostra.page */
      "CvXN");

      var ControlAmostraPageModule = function ControlAmostraPageModule() {
        _classCallCheck(this, ControlAmostraPageModule);
      };

      ControlAmostraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _control_amostra_routing_module__WEBPACK_IMPORTED_MODULE_5__["ControlAmostraPageRoutingModule"]],
        declarations: [_control_amostra_page__WEBPACK_IMPORTED_MODULE_6__["ControlAmostraPage"]]
      })], ControlAmostraPageModule);
      /***/
    },

    /***/
    "CvXN":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/control-amostra/control-amostra.page.ts ***!
      \**************************************************************/

    /*! exports provided: ControlAmostraPage */

    /***/
    function CvXN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlAmostraPage", function () {
        return ControlAmostraPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_control_amostra_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./control-amostra.page.html */
      "TlYv");
      /* harmony import */


      var _control_amostra_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./control-amostra.page.scss */
      "P8vd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlAmostraPage = /*#__PURE__*/function () {
        function ControlAmostraPage() {
          _classCallCheck(this, ControlAmostraPage);
        }

        _createClass(ControlAmostraPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ControlAmostraPage;
      }();

      ControlAmostraPage.ctorParameters = function () {
        return [];
      };

      ControlAmostraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-control-amostra',
        template: _raw_loader_control_amostra_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_control_amostra_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ControlAmostraPage);
      /***/
    },

    /***/
    "GjZw":
    /*!************************************************************************!*\
      !*** ./src/app/pmal/control-amostra/control-amostra-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: ControlAmostraPageRoutingModule */

    /***/
    function GjZw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlAmostraPageRoutingModule", function () {
        return ControlAmostraPageRoutingModule;
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


      var _control_amostra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./control-amostra.page */
      "CvXN");

      var routes = [{
        path: '',
        component: _control_amostra_page__WEBPACK_IMPORTED_MODULE_3__["ControlAmostraPage"]
      }];

      var ControlAmostraPageRoutingModule = function ControlAmostraPageRoutingModule() {
        _classCallCheck(this, ControlAmostraPageRoutingModule);
      };

      ControlAmostraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ControlAmostraPageRoutingModule);
      /***/
    },

    /***/
    "P8vd":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/control-amostra/control-amostra.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function P8vd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLWFtb3N0cmEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "TlYv":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/control-amostra/control-amostra.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TlYv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>control-amostra</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-control-amostra-control-amostra-module-es5.js.map