(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-hist-paciente-hist-paciente-module"], {
    /***/
    "HarL":
    /*!************************************************************!*\
      !*** ./src/app/pmal/hist-paciente/hist-paciente.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function HarL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0LXBhY2llbnRlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Sbiz":
    /*!**********************************************************!*\
      !*** ./src/app/pmal/hist-paciente/hist-paciente.page.ts ***!
      \**********************************************************/

    /*! exports provided: HistPacientePage */

    /***/
    function Sbiz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistPacientePage", function () {
        return HistPacientePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_hist_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./hist-paciente.page.html */
      "TBg+");
      /* harmony import */


      var _hist_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hist-paciente.page.scss */
      "HarL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HistPacientePage = /*#__PURE__*/function () {
        function HistPacientePage() {
          _classCallCheck(this, HistPacientePage);
        }

        _createClass(HistPacientePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HistPacientePage;
      }();

      HistPacientePage.ctorParameters = function () {
        return [];
      };

      HistPacientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hist-paciente',
        template: _raw_loader_hist_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hist_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HistPacientePage);
      /***/
    },

    /***/
    "TBg+":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/hist-paciente/hist-paciente.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "bslz":
    /*!********************************************************************!*\
      !*** ./src/app/pmal/hist-paciente/hist-paciente-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: HistPacientePageRoutingModule */

    /***/
    function bslz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistPacientePageRoutingModule", function () {
        return HistPacientePageRoutingModule;
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


      var _hist_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hist-paciente.page */
      "Sbiz");

      var routes = [{
        path: '',
        component: _hist_paciente_page__WEBPACK_IMPORTED_MODULE_3__["HistPacientePage"]
      }];

      var HistPacientePageRoutingModule = function HistPacientePageRoutingModule() {
        _classCallCheck(this, HistPacientePageRoutingModule);
      };

      HistPacientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistPacientePageRoutingModule);
      /***/
    },

    /***/
    "q9VG":
    /*!************************************************************!*\
      !*** ./src/app/pmal/hist-paciente/hist-paciente.module.ts ***!
      \************************************************************/

    /*! exports provided: HistPacientePageModule */

    /***/
    function q9VG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistPacientePageModule", function () {
        return HistPacientePageModule;
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


      var _hist_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./hist-paciente-routing.module */
      "bslz");
      /* harmony import */


      var _hist_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hist-paciente.page */
      "Sbiz");

      var HistPacientePageModule = function HistPacientePageModule() {
        _classCallCheck(this, HistPacientePageModule);
      };

      HistPacientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _hist_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistPacientePageRoutingModule"]],
        declarations: [_hist_paciente_page__WEBPACK_IMPORTED_MODULE_6__["HistPacientePage"]]
      })], HistPacientePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-hist-paciente-hist-paciente-module-es5.js.map