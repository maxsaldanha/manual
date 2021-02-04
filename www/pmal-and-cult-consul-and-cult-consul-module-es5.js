(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-and-cult-consul-and-cult-consul-module"], {
    /***/
    "9Fs7":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/and-cult-consul/and-cult-consul.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fs7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "B82H":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/and-cult-consul/and-cult-consul.page.ts ***!
      \**************************************************************/

    /*! exports provided: AndCultConsulPage */

    /***/
    function B82H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AndCultConsulPage", function () {
        return AndCultConsulPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_and_cult_consul_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./and-cult-consul.page.html */
      "9Fs7");
      /* harmony import */


      var _and_cult_consul_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./and-cult-consul.page.scss */
      "s4dc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AndCultConsulPage = /*#__PURE__*/function () {
        function AndCultConsulPage() {
          _classCallCheck(this, AndCultConsulPage);
        }

        _createClass(AndCultConsulPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AndCultConsulPage;
      }();

      AndCultConsulPage.ctorParameters = function () {
        return [];
      };

      AndCultConsulPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-and-cult-consul',
        template: _raw_loader_and_cult_consul_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_and_cult_consul_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AndCultConsulPage);
      /***/
    },

    /***/
    "k20B":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/and-cult-consul/and-cult-consul.module.ts ***!
      \****************************************************************/

    /*! exports provided: AndCultConsulPageModule */

    /***/
    function k20B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AndCultConsulPageModule", function () {
        return AndCultConsulPageModule;
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


      var _and_cult_consul_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./and-cult-consul-routing.module */
      "zjJA");
      /* harmony import */


      var _and_cult_consul_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./and-cult-consul.page */
      "B82H");

      var AndCultConsulPageModule = function AndCultConsulPageModule() {
        _classCallCheck(this, AndCultConsulPageModule);
      };

      AndCultConsulPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _and_cult_consul_routing_module__WEBPACK_IMPORTED_MODULE_5__["AndCultConsulPageRoutingModule"]],
        declarations: [_and_cult_consul_page__WEBPACK_IMPORTED_MODULE_6__["AndCultConsulPage"]]
      })], AndCultConsulPageModule);
      /***/
    },

    /***/
    "s4dc":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/and-cult-consul/and-cult-consul.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function s4dc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmQtY3VsdC1jb25zdWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "zjJA":
    /*!************************************************************************!*\
      !*** ./src/app/pmal/and-cult-consul/and-cult-consul-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: AndCultConsulPageRoutingModule */

    /***/
    function zjJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AndCultConsulPageRoutingModule", function () {
        return AndCultConsulPageRoutingModule;
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


      var _and_cult_consul_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./and-cult-consul.page */
      "B82H");

      var routes = [{
        path: '',
        component: _and_cult_consul_page__WEBPACK_IMPORTED_MODULE_3__["AndCultConsulPage"]
      }];

      var AndCultConsulPageRoutingModule = function AndCultConsulPageRoutingModule() {
        _classCallCheck(this, AndCultConsulPageRoutingModule);
      };

      AndCultConsulPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AndCultConsulPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-and-cult-consul-and-cult-consul-module-es5.js.map