(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-info-atendi-info-atendi-module"], {
    /***/
    "Albw":
    /*!****************************************************************!*\
      !*** ./src/app/pmal/info-atendi/info-atendi-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: InfoAtendiPageRoutingModule */

    /***/
    function Albw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoAtendiPageRoutingModule", function () {
        return InfoAtendiPageRoutingModule;
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


      var _info_atendi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./info-atendi.page */
      "VVJB");

      var routes = [{
        path: '',
        component: _info_atendi_page__WEBPACK_IMPORTED_MODULE_3__["InfoAtendiPage"]
      }];

      var InfoAtendiPageRoutingModule = function InfoAtendiPageRoutingModule() {
        _classCallCheck(this, InfoAtendiPageRoutingModule);
      };

      InfoAtendiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InfoAtendiPageRoutingModule);
      /***/
    },

    /***/
    "I6Ie":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/info-atendi/info-atendi.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function I6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class="default">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "Kwvz":
    /*!********************************************************!*\
      !*** ./src/app/pmal/info-atendi/info-atendi.module.ts ***!
      \********************************************************/

    /*! exports provided: InfoAtendiPageModule */

    /***/
    function Kwvz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoAtendiPageModule", function () {
        return InfoAtendiPageModule;
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


      var _info_atendi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./info-atendi-routing.module */
      "Albw");
      /* harmony import */


      var _info_atendi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./info-atendi.page */
      "VVJB");

      var InfoAtendiPageModule = function InfoAtendiPageModule() {
        _classCallCheck(this, InfoAtendiPageModule);
      };

      InfoAtendiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_atendi_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoAtendiPageRoutingModule"]],
        declarations: [_info_atendi_page__WEBPACK_IMPORTED_MODULE_6__["InfoAtendiPage"]]
      })], InfoAtendiPageModule);
      /***/
    },

    /***/
    "VVJB":
    /*!******************************************************!*\
      !*** ./src/app/pmal/info-atendi/info-atendi.page.ts ***!
      \******************************************************/

    /*! exports provided: InfoAtendiPage */

    /***/
    function VVJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoAtendiPage", function () {
        return InfoAtendiPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_info_atendi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./info-atendi.page.html */
      "I6Ie");
      /* harmony import */


      var _info_atendi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./info-atendi.page.scss */
      "Votk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InfoAtendiPage = /*#__PURE__*/function () {
        function InfoAtendiPage() {
          _classCallCheck(this, InfoAtendiPage);
        }

        _createClass(InfoAtendiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfoAtendiPage;
      }();

      InfoAtendiPage.ctorParameters = function () {
        return [];
      };

      InfoAtendiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info-atendi',
        template: _raw_loader_info_atendi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_atendi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InfoAtendiPage);
      /***/
    },

    /***/
    "Votk":
    /*!********************************************************!*\
      !*** ./src/app/pmal/info-atendi/info-atendi.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function Votk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWF0ZW5kaS5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-info-atendi-info-atendi-module-es5.js.map