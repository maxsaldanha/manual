(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-atl-set-realiza-atl-set-realiza-module"], {
    /***/
    "2PWM":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function PWM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdGwtc2V0LXJlYWxpemEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "J0y1":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/atl-set-realiza/atl-set-realiza.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J0y1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "KSrp":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza.module.ts ***!
      \****************************************************************/

    /*! exports provided: AtlSetRealizaPageModule */

    /***/
    function KSrp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtlSetRealizaPageModule", function () {
        return AtlSetRealizaPageModule;
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


      var _atl_set_realiza_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./atl-set-realiza-routing.module */
      "a1ZR");
      /* harmony import */


      var _atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./atl-set-realiza.page */
      "ecSw");

      var AtlSetRealizaPageModule = function AtlSetRealizaPageModule() {
        _classCallCheck(this, AtlSetRealizaPageModule);
      };

      AtlSetRealizaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _atl_set_realiza_routing_module__WEBPACK_IMPORTED_MODULE_5__["AtlSetRealizaPageRoutingModule"]],
        declarations: [_atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_6__["AtlSetRealizaPage"]]
      })], AtlSetRealizaPageModule);
      /***/
    },

    /***/
    "a1ZR":
    /*!************************************************************************!*\
      !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: AtlSetRealizaPageRoutingModule */

    /***/
    function a1ZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtlSetRealizaPageRoutingModule", function () {
        return AtlSetRealizaPageRoutingModule;
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


      var _atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./atl-set-realiza.page */
      "ecSw");

      var routes = [{
        path: '',
        component: _atl_set_realiza_page__WEBPACK_IMPORTED_MODULE_3__["AtlSetRealizaPage"]
      }];

      var AtlSetRealizaPageRoutingModule = function AtlSetRealizaPageRoutingModule() {
        _classCallCheck(this, AtlSetRealizaPageRoutingModule);
      };

      AtlSetRealizaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AtlSetRealizaPageRoutingModule);
      /***/
    },

    /***/
    "ecSw":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/atl-set-realiza/atl-set-realiza.page.ts ***!
      \**************************************************************/

    /*! exports provided: AtlSetRealizaPage */

    /***/
    function ecSw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtlSetRealizaPage", function () {
        return AtlSetRealizaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_atl_set_realiza_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./atl-set-realiza.page.html */
      "J0y1");
      /* harmony import */


      var _atl_set_realiza_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./atl-set-realiza.page.scss */
      "2PWM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AtlSetRealizaPage = /*#__PURE__*/function () {
        function AtlSetRealizaPage() {
          _classCallCheck(this, AtlSetRealizaPage);
        }

        _createClass(AtlSetRealizaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AtlSetRealizaPage;
      }();

      AtlSetRealizaPage.ctorParameters = function () {
        return [];
      };

      AtlSetRealizaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-atl-set-realiza',
        template: _raw_loader_atl_set_realiza_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_atl_set_realiza_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AtlSetRealizaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-atl-set-realiza-atl-set-realiza-module-es5.js.map