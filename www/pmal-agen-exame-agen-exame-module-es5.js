(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-agen-exame-agen-exame-module"], {
    /***/
    "MnbL":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/agen-exame/agen-exame.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function MnbL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "NdK/":
    /*!**************************************************************!*\
      !*** ./src/app/pmal/agen-exame/agen-exame-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: AgenExamePageRoutingModule */

    /***/
    function NdK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgenExamePageRoutingModule", function () {
        return AgenExamePageRoutingModule;
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


      var _agen_exame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./agen-exame.page */
      "SiKi");

      var routes = [{
        path: '',
        component: _agen_exame_page__WEBPACK_IMPORTED_MODULE_3__["AgenExamePage"]
      }];

      var AgenExamePageRoutingModule = function AgenExamePageRoutingModule() {
        _classCallCheck(this, AgenExamePageRoutingModule);
      };

      AgenExamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AgenExamePageRoutingModule);
      /***/
    },

    /***/
    "SiKi":
    /*!****************************************************!*\
      !*** ./src/app/pmal/agen-exame/agen-exame.page.ts ***!
      \****************************************************/

    /*! exports provided: AgenExamePage */

    /***/
    function SiKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgenExamePage", function () {
        return AgenExamePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_agen_exame_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./agen-exame.page.html */
      "MnbL");
      /* harmony import */


      var _agen_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./agen-exame.page.scss */
      "lVux");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AgenExamePage = /*#__PURE__*/function () {
        function AgenExamePage() {
          _classCallCheck(this, AgenExamePage);
        }

        _createClass(AgenExamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AgenExamePage;
      }();

      AgenExamePage.ctorParameters = function () {
        return [];
      };

      AgenExamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agen-exame',
        template: _raw_loader_agen_exame_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agen_exame_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AgenExamePage);
      /***/
    },

    /***/
    "ihp4":
    /*!******************************************************!*\
      !*** ./src/app/pmal/agen-exame/agen-exame.module.ts ***!
      \******************************************************/

    /*! exports provided: AgenExamePageModule */

    /***/
    function ihp4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgenExamePageModule", function () {
        return AgenExamePageModule;
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


      var _agen_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./agen-exame-routing.module */
      "NdK/");
      /* harmony import */


      var _agen_exame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./agen-exame.page */
      "SiKi");

      var AgenExamePageModule = function AgenExamePageModule() {
        _classCallCheck(this, AgenExamePageModule);
      };

      AgenExamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _agen_exame_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgenExamePageRoutingModule"]],
        declarations: [_agen_exame_page__WEBPACK_IMPORTED_MODULE_6__["AgenExamePage"]]
      })], AgenExamePageModule);
      /***/
    },

    /***/
    "lVux":
    /*!******************************************************!*\
      !*** ./src/app/pmal/agen-exame/agen-exame.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function lVux(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuLWV4YW1lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-agen-exame-agen-exame-module-es5.js.map