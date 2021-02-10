(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-catalogar-catalogar-module"], {
    /***/
    "4VvW":
    /*!**************************************************!*\
      !*** ./src/app/pmal/catalogar/catalogar.page.ts ***!
      \**************************************************/

    /*! exports provided: CatalogarPage */

    /***/
    function VvW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogarPage", function () {
        return CatalogarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_catalogar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./catalogar.page.html */
      "wa4g");
      /* harmony import */


      var _catalogar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./catalogar.page.scss */
      "5BNR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CatalogarPage = /*#__PURE__*/function () {
        function CatalogarPage() {
          _classCallCheck(this, CatalogarPage);
        }

        _createClass(CatalogarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CatalogarPage;
      }();

      CatalogarPage.ctorParameters = function () {
        return [];
      };

      CatalogarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catalogar',
        template: _raw_loader_catalogar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catalogar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CatalogarPage);
      /***/
    },

    /***/
    "5BNR":
    /*!****************************************************!*\
      !*** ./src/app/pmal/catalogar/catalogar.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function BNR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRhbG9nYXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "CuNO":
    /*!************************************************************!*\
      !*** ./src/app/pmal/catalogar/catalogar-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: CatalogarPageRoutingModule */

    /***/
    function CuNO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogarPageRoutingModule", function () {
        return CatalogarPageRoutingModule;
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


      var _catalogar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./catalogar.page */
      "4VvW");

      var routes = [{
        path: '',
        component: _catalogar_page__WEBPACK_IMPORTED_MODULE_3__["CatalogarPage"]
      }];

      var CatalogarPageRoutingModule = function CatalogarPageRoutingModule() {
        _classCallCheck(this, CatalogarPageRoutingModule);
      };

      CatalogarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CatalogarPageRoutingModule);
      /***/
    },

    /***/
    "uTw+":
    /*!****************************************************!*\
      !*** ./src/app/pmal/catalogar/catalogar.module.ts ***!
      \****************************************************/

    /*! exports provided: CatalogarPageModule */

    /***/
    function uTw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogarPageModule", function () {
        return CatalogarPageModule;
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


      var _catalogar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./catalogar-routing.module */
      "CuNO");
      /* harmony import */


      var _catalogar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./catalogar.page */
      "4VvW");

      var CatalogarPageModule = function CatalogarPageModule() {
        _classCallCheck(this, CatalogarPageModule);
      };

      CatalogarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _catalogar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatalogarPageRoutingModule"]],
        declarations: [_catalogar_page__WEBPACK_IMPORTED_MODULE_6__["CatalogarPage"]]
      })], CatalogarPageModule);
      /***/
    },

    /***/
    "wa4g":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/catalogar/catalogar.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function wa4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" padding class=\"background\">\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-catalogar-catalogar-module-es5.js.map