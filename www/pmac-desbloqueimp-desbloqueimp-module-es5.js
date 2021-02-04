(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-desbloqueimp-desbloqueimp-module"], {
    /***/
    "LmD8":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/desbloqueimp/desbloqueimp.module.ts ***!
      \**********************************************************/

    /*! exports provided: DesbloqueimpPageModule */

    /***/
    function LmD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesbloqueimpPageModule", function () {
        return DesbloqueimpPageModule;
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


      var _desbloqueimp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./desbloqueimp-routing.module */
      "aHgQ");
      /* harmony import */


      var _desbloqueimp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./desbloqueimp.page */
      "juMN");

      var DesbloqueimpPageModule = function DesbloqueimpPageModule() {
        _classCallCheck(this, DesbloqueimpPageModule);
      };

      DesbloqueimpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _desbloqueimp_routing_module__WEBPACK_IMPORTED_MODULE_5__["DesbloqueimpPageRoutingModule"]],
        declarations: [_desbloqueimp_page__WEBPACK_IMPORTED_MODULE_6__["DesbloqueimpPage"]]
      })], DesbloqueimpPageModule);
      /***/
    },

    /***/
    "VKST":
    /*!**********************************************************!*\
      !*** ./src/app/pmac/desbloqueimp/desbloqueimp.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function VKST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNibG9xdWVpbXAucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "WSkc":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/desbloqueimp/desbloqueimp.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WSkc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "aHgQ":
    /*!******************************************************************!*\
      !*** ./src/app/pmac/desbloqueimp/desbloqueimp-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: DesbloqueimpPageRoutingModule */

    /***/
    function aHgQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesbloqueimpPageRoutingModule", function () {
        return DesbloqueimpPageRoutingModule;
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


      var _desbloqueimp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./desbloqueimp.page */
      "juMN");

      var routes = [{
        path: '',
        component: _desbloqueimp_page__WEBPACK_IMPORTED_MODULE_3__["DesbloqueimpPage"]
      }];

      var DesbloqueimpPageRoutingModule = function DesbloqueimpPageRoutingModule() {
        _classCallCheck(this, DesbloqueimpPageRoutingModule);
      };

      DesbloqueimpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DesbloqueimpPageRoutingModule);
      /***/
    },

    /***/
    "juMN":
    /*!********************************************************!*\
      !*** ./src/app/pmac/desbloqueimp/desbloqueimp.page.ts ***!
      \********************************************************/

    /*! exports provided: DesbloqueimpPage */

    /***/
    function juMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DesbloqueimpPage", function () {
        return DesbloqueimpPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_desbloqueimp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./desbloqueimp.page.html */
      "WSkc");
      /* harmony import */


      var _desbloqueimp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./desbloqueimp.page.scss */
      "VKST");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DesbloqueimpPage = /*#__PURE__*/function () {
        function DesbloqueimpPage() {
          _classCallCheck(this, DesbloqueimpPage);
        }

        _createClass(DesbloqueimpPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DesbloqueimpPage;
      }();

      DesbloqueimpPage.ctorParameters = function () {
        return [];
      };

      DesbloqueimpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-desbloqueimp',
        template: _raw_loader_desbloqueimp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_desbloqueimp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DesbloqueimpPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-desbloqueimp-desbloqueimp-module-es5.js.map