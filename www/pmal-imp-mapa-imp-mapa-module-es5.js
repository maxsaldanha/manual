(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-imp-mapa-imp-mapa-module"], {
    /***/
    "Hguq":
    /*!**************************************************!*\
      !*** ./src/app/pmal/imp-mapa/imp-mapa.page.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Hguq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXAtbWFwYS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "InW4":
    /*!**********************************************************!*\
      !*** ./src/app/pmal/imp-mapa/imp-mapa-routing.module.ts ***!
      \**********************************************************/

    /*! exports provided: ImpMapaPageRoutingModule */

    /***/
    function InW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpMapaPageRoutingModule", function () {
        return ImpMapaPageRoutingModule;
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


      var _imp_mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./imp-mapa.page */
      "YSWp");

      var routes = [{
        path: '',
        component: _imp_mapa_page__WEBPACK_IMPORTED_MODULE_3__["ImpMapaPage"]
      }];

      var ImpMapaPageRoutingModule = function ImpMapaPageRoutingModule() {
        _classCallCheck(this, ImpMapaPageRoutingModule);
      };

      ImpMapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ImpMapaPageRoutingModule);
      /***/
    },

    /***/
    "UyYS":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/imp-mapa/imp-mapa.page.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function UyYS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "YCA2":
    /*!**************************************************!*\
      !*** ./src/app/pmal/imp-mapa/imp-mapa.module.ts ***!
      \**************************************************/

    /*! exports provided: ImpMapaPageModule */

    /***/
    function YCA2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpMapaPageModule", function () {
        return ImpMapaPageModule;
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


      var _imp_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./imp-mapa-routing.module */
      "InW4");
      /* harmony import */


      var _imp_mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./imp-mapa.page */
      "YSWp");

      var ImpMapaPageModule = function ImpMapaPageModule() {
        _classCallCheck(this, ImpMapaPageModule);
      };

      ImpMapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imp_mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImpMapaPageRoutingModule"]],
        declarations: [_imp_mapa_page__WEBPACK_IMPORTED_MODULE_6__["ImpMapaPage"]]
      })], ImpMapaPageModule);
      /***/
    },

    /***/
    "YSWp":
    /*!************************************************!*\
      !*** ./src/app/pmal/imp-mapa/imp-mapa.page.ts ***!
      \************************************************/

    /*! exports provided: ImpMapaPage */

    /***/
    function YSWp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpMapaPage", function () {
        return ImpMapaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_imp_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./imp-mapa.page.html */
      "UyYS");
      /* harmony import */


      var _imp_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./imp-mapa.page.scss */
      "Hguq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ImpMapaPage = /*#__PURE__*/function () {
        function ImpMapaPage() {
          _classCallCheck(this, ImpMapaPage);
        }

        _createClass(ImpMapaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImpMapaPage;
      }();

      ImpMapaPage.ctorParameters = function () {
        return [];
      };

      ImpMapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imp-mapa',
        template: _raw_loader_imp_mapa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imp_mapa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ImpMapaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-imp-mapa-imp-mapa-module-es5.js.map