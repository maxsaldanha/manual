(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-alt-form-mapa-alt-form-mapa-module"], {
    /***/
    "8oyV":
    /*!************************************************************!*\
      !*** ./src/app/pmal/alt-form-mapa/alt-form-mapa.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function oyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHQtZm9ybS1tYXBhLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "VaSC":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/alt-form-mapa/alt-form-mapa.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VaSC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "gxSw":
    /*!**********************************************************!*\
      !*** ./src/app/pmal/alt-form-mapa/alt-form-mapa.page.ts ***!
      \**********************************************************/

    /*! exports provided: AltFormMapaPage */

    /***/
    function gxSw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AltFormMapaPage", function () {
        return AltFormMapaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_alt_form_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./alt-form-mapa.page.html */
      "VaSC");
      /* harmony import */


      var _alt_form_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alt-form-mapa.page.scss */
      "8oyV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AltFormMapaPage = /*#__PURE__*/function () {
        function AltFormMapaPage() {
          _classCallCheck(this, AltFormMapaPage);
        }

        _createClass(AltFormMapaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AltFormMapaPage;
      }();

      AltFormMapaPage.ctorParameters = function () {
        return [];
      };

      AltFormMapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alt-form-mapa',
        template: _raw_loader_alt_form_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alt_form_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AltFormMapaPage);
      /***/
    },

    /***/
    "k/r7":
    /*!********************************************************************!*\
      !*** ./src/app/pmal/alt-form-mapa/alt-form-mapa-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: AltFormMapaPageRoutingModule */

    /***/
    function kR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AltFormMapaPageRoutingModule", function () {
        return AltFormMapaPageRoutingModule;
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


      var _alt_form_mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alt-form-mapa.page */
      "gxSw");

      var routes = [{
        path: '',
        component: _alt_form_mapa_page__WEBPACK_IMPORTED_MODULE_3__["AltFormMapaPage"]
      }];

      var AltFormMapaPageRoutingModule = function AltFormMapaPageRoutingModule() {
        _classCallCheck(this, AltFormMapaPageRoutingModule);
      };

      AltFormMapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AltFormMapaPageRoutingModule);
      /***/
    },

    /***/
    "rBAy":
    /*!************************************************************!*\
      !*** ./src/app/pmal/alt-form-mapa/alt-form-mapa.module.ts ***!
      \************************************************************/

    /*! exports provided: AltFormMapaPageModule */

    /***/
    function rBAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AltFormMapaPageModule", function () {
        return AltFormMapaPageModule;
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


      var _alt_form_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alt-form-mapa-routing.module */
      "k/r7");
      /* harmony import */


      var _alt_form_mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alt-form-mapa.page */
      "gxSw");

      var AltFormMapaPageModule = function AltFormMapaPageModule() {
        _classCallCheck(this, AltFormMapaPageModule);
      };

      AltFormMapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _alt_form_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["AltFormMapaPageRoutingModule"]],
        declarations: [_alt_form_mapa_page__WEBPACK_IMPORTED_MODULE_6__["AltFormMapaPage"]]
      })], AltFormMapaPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-alt-form-mapa-alt-form-mapa-module-es5.js.map