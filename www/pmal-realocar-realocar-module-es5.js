(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-realocar-realocar-module"], {
    /***/
    "IuNi":
    /*!************************************************!*\
      !*** ./src/app/pmal/realocar/realocar.page.ts ***!
      \************************************************/

    /*! exports provided: RealocarPage */

    /***/
    function IuNi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealocarPage", function () {
        return RealocarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_realocar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./realocar.page.html */
      "YlXc");
      /* harmony import */


      var _realocar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./realocar.page.scss */
      "Wnlh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RealocarPage = /*#__PURE__*/function () {
        function RealocarPage() {
          _classCallCheck(this, RealocarPage);
        }

        _createClass(RealocarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RealocarPage;
      }();

      RealocarPage.ctorParameters = function () {
        return [];
      };

      RealocarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-realocar',
        template: _raw_loader_realocar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_realocar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RealocarPage);
      /***/
    },

    /***/
    "MVfV":
    /*!**********************************************************!*\
      !*** ./src/app/pmal/realocar/realocar-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: RealocarPageRoutingModule */

    /***/
    function MVfV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealocarPageRoutingModule", function () {
        return RealocarPageRoutingModule;
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


      var _realocar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./realocar.page */
      "IuNi");

      var routes = [{
        path: '',
        component: _realocar_page__WEBPACK_IMPORTED_MODULE_3__["RealocarPage"]
      }];

      var RealocarPageRoutingModule = function RealocarPageRoutingModule() {
        _classCallCheck(this, RealocarPageRoutingModule);
      };

      RealocarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RealocarPageRoutingModule);
      /***/
    },

    /***/
    "TWhx":
    /*!**************************************************!*\
      !*** ./src/app/pmal/realocar/realocar.module.ts ***!
      \**************************************************/

    /*! exports provided: RealocarPageModule */

    /***/
    function TWhx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RealocarPageModule", function () {
        return RealocarPageModule;
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


      var _realocar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./realocar-routing.module */
      "MVfV");
      /* harmony import */


      var _realocar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./realocar.page */
      "IuNi");

      var RealocarPageModule = function RealocarPageModule() {
        _classCallCheck(this, RealocarPageModule);
      };

      RealocarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _realocar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RealocarPageRoutingModule"]],
        declarations: [_realocar_page__WEBPACK_IMPORTED_MODULE_6__["RealocarPage"]]
      })], RealocarPageModule);
      /***/
    },

    /***/
    "Wnlh":
    /*!**************************************************!*\
      !*** ./src/app/pmal/realocar/realocar.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Wnlh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFsb2Nhci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "YlXc":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/realocar/realocar.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function YlXc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class="default">\n    <ion-title>realocar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-realocar-realocar-module-es5.js.map