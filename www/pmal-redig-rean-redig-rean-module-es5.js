(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-redig-rean-redig-rean-module"], {
    /***/
    "2gdz":
    /*!****************************************************!*\
      !*** ./src/app/pmal/redig-rean/redig-rean.page.ts ***!
      \****************************************************/

    /*! exports provided: RedigReanPage */

    /***/
    function gdz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedigReanPage", function () {
        return RedigReanPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_redig_rean_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./redig-rean.page.html */
      "eNhl");
      /* harmony import */


      var _redig_rean_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./redig-rean.page.scss */
      "LRvw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RedigReanPage = /*#__PURE__*/function () {
        function RedigReanPage() {
          _classCallCheck(this, RedigReanPage);
        }

        _createClass(RedigReanPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RedigReanPage;
      }();

      RedigReanPage.ctorParameters = function () {
        return [];
      };

      RedigReanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-redig-rean',
        template: _raw_loader_redig_rean_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_redig_rean_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RedigReanPage);
      /***/
    },

    /***/
    "2uPM":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/redig-rean/redig-rean-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: RedigReanPageRoutingModule */

    /***/
    function uPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedigReanPageRoutingModule", function () {
        return RedigReanPageRoutingModule;
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


      var _redig_rean_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redig-rean.page */
      "2gdz");

      var routes = [{
        path: '',
        component: _redig_rean_page__WEBPACK_IMPORTED_MODULE_3__["RedigReanPage"]
      }];

      var RedigReanPageRoutingModule = function RedigReanPageRoutingModule() {
        _classCallCheck(this, RedigReanPageRoutingModule);
      };

      RedigReanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedigReanPageRoutingModule);
      /***/
    },

    /***/
    "LRvw":
    /*!******************************************************!*\
      !*** ./src/app/pmal/redig-rean/redig-rean.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function LRvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpZy1yZWFuLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OCdc":
    /*!******************************************************!*\
      !*** ./src/app/pmal/redig-rean/redig-rean.module.ts ***!
      \******************************************************/

    /*! exports provided: RedigReanPageModule */

    /***/
    function OCdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedigReanPageModule", function () {
        return RedigReanPageModule;
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


      var _redig_rean_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redig-rean-routing.module */
      "2uPM");
      /* harmony import */


      var _redig_rean_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redig-rean.page */
      "2gdz");

      var RedigReanPageModule = function RedigReanPageModule() {
        _classCallCheck(this, RedigReanPageModule);
      };

      RedigReanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redig_rean_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedigReanPageRoutingModule"]],
        declarations: [_redig_rean_page__WEBPACK_IMPORTED_MODULE_6__["RedigReanPage"]]
      })], RedigReanPageModule);
      /***/
    },

    /***/
    "eNhl":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/redig-rean/redig-rean.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function eNhl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class="default">\n    <ion-title>redig-rean</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-redig-rean-redig-rean-module-es5.js.map