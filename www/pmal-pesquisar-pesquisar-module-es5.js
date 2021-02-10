(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-pesquisar-pesquisar-module"], {
    /***/
    "EIUj":
    /*!************************************************************!*\
      !*** ./src/app/pmal/pesquisar/pesquisar-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: PesquisarPageRoutingModule */

    /***/
    function EIUj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PesquisarPageRoutingModule", function () {
        return PesquisarPageRoutingModule;
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


      var _pesquisar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pesquisar.page */
      "EJMj");

      var routes = [{
        path: '',
        component: _pesquisar_page__WEBPACK_IMPORTED_MODULE_3__["PesquisarPage"]
      }];

      var PesquisarPageRoutingModule = function PesquisarPageRoutingModule() {
        _classCallCheck(this, PesquisarPageRoutingModule);
      };

      PesquisarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PesquisarPageRoutingModule);
      /***/
    },

    /***/
    "EJMj":
    /*!**************************************************!*\
      !*** ./src/app/pmal/pesquisar/pesquisar.page.ts ***!
      \**************************************************/

    /*! exports provided: PesquisarPage */

    /***/
    function EJMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PesquisarPage", function () {
        return PesquisarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pesquisar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pesquisar.page.html */
      "PHvL");
      /* harmony import */


      var _pesquisar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pesquisar.page.scss */
      "H58U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PesquisarPage = /*#__PURE__*/function () {
        function PesquisarPage() {
          _classCallCheck(this, PesquisarPage);
        }

        _createClass(PesquisarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PesquisarPage;
      }();

      PesquisarPage.ctorParameters = function () {
        return [];
      };

      PesquisarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pesquisar',
        template: _raw_loader_pesquisar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pesquisar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PesquisarPage);
      /***/
    },

    /***/
    "H58U":
    /*!****************************************************!*\
      !*** ./src/app/pmal/pesquisar/pesquisar.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function H58U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXNxdWlzYXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "PHvL":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/pesquisar/pesquisar.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function PHvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>pesquisar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n</ion-content>\n";
      /***/
    },

    /***/
    "wbbk":
    /*!****************************************************!*\
      !*** ./src/app/pmal/pesquisar/pesquisar.module.ts ***!
      \****************************************************/

    /*! exports provided: PesquisarPageModule */

    /***/
    function wbbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PesquisarPageModule", function () {
        return PesquisarPageModule;
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


      var _pesquisar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pesquisar-routing.module */
      "EIUj");
      /* harmony import */


      var _pesquisar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pesquisar.page */
      "EJMj");

      var PesquisarPageModule = function PesquisarPageModule() {
        _classCallCheck(this, PesquisarPageModule);
      };

      PesquisarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pesquisar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PesquisarPageRoutingModule"]],
        declarations: [_pesquisar_page__WEBPACK_IMPORTED_MODULE_6__["PesquisarPage"]]
      })], PesquisarPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-pesquisar-pesquisar-module-es5.js.map