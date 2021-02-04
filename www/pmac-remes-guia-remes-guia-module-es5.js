(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-remes-guia-remes-guia-module"], {
    /***/
    "9q3k":
    /*!**************************************************************!*\
      !*** ./src/app/pmac/remes-guia/remes-guia-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: RemesGuiaPageRoutingModule */

    /***/
    function q3k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemesGuiaPageRoutingModule", function () {
        return RemesGuiaPageRoutingModule;
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


      var _remes_guia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./remes-guia.page */
      "znzT");

      var routes = [{
        path: '',
        component: _remes_guia_page__WEBPACK_IMPORTED_MODULE_3__["RemesGuiaPage"]
      }];

      var RemesGuiaPageRoutingModule = function RemesGuiaPageRoutingModule() {
        _classCallCheck(this, RemesGuiaPageRoutingModule);
      };

      RemesGuiaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RemesGuiaPageRoutingModule);
      /***/
    },

    /***/
    "Gk/d":
    /*!******************************************************!*\
      !*** ./src/app/pmac/remes-guia/remes-guia.module.ts ***!
      \******************************************************/

    /*! exports provided: RemesGuiaPageModule */

    /***/
    function GkD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemesGuiaPageModule", function () {
        return RemesGuiaPageModule;
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


      var _remes_guia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./remes-guia-routing.module */
      "9q3k");
      /* harmony import */


      var _remes_guia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./remes-guia.page */
      "znzT");

      var RemesGuiaPageModule = function RemesGuiaPageModule() {
        _classCallCheck(this, RemesGuiaPageModule);
      };

      RemesGuiaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _remes_guia_routing_module__WEBPACK_IMPORTED_MODULE_5__["RemesGuiaPageRoutingModule"]],
        declarations: [_remes_guia_page__WEBPACK_IMPORTED_MODULE_6__["RemesGuiaPage"]]
      })], RemesGuiaPageModule);
      /***/
    },

    /***/
    "N0jE":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/remes-guia/remes-guia.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function N0jE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n</ion-content>";
      /***/
    },

    /***/
    "lVQb":
    /*!******************************************************!*\
      !*** ./src/app/pmac/remes-guia/remes-guia.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function lVQb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1lcy1ndWlhLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "znzT":
    /*!****************************************************!*\
      !*** ./src/app/pmac/remes-guia/remes-guia.page.ts ***!
      \****************************************************/

    /*! exports provided: RemesGuiaPage */

    /***/
    function znzT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemesGuiaPage", function () {
        return RemesGuiaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_remes_guia_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./remes-guia.page.html */
      "N0jE");
      /* harmony import */


      var _remes_guia_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./remes-guia.page.scss */
      "lVQb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RemesGuiaPage = /*#__PURE__*/function () {
        function RemesGuiaPage() {
          _classCallCheck(this, RemesGuiaPage);
        }

        _createClass(RemesGuiaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RemesGuiaPage;
      }();

      RemesGuiaPage.ctorParameters = function () {
        return [];
      };

      RemesGuiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-remes-guia',
        template: _raw_loader_remes_guia_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_remes_guia_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RemesGuiaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-remes-guia-remes-guia-module-es5.js.map