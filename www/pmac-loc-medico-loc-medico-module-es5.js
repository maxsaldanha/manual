(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmac-loc-medico-loc-medico-module"], {
    /***/
    "4AN+":
    /*!**************************************************************!*\
      !*** ./src/app/pmac/loc-medico/loc-medico-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: LocMedicoPageRoutingModule */

    /***/
    function AN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocMedicoPageRoutingModule", function () {
        return LocMedicoPageRoutingModule;
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


      var _loc_medico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loc-medico.page */
      "7FkU");

      var routes = [{
        path: '',
        component: _loc_medico_page__WEBPACK_IMPORTED_MODULE_3__["LocMedicoPage"]
      }];

      var LocMedicoPageRoutingModule = function LocMedicoPageRoutingModule() {
        _classCallCheck(this, LocMedicoPageRoutingModule);
      };

      LocMedicoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocMedicoPageRoutingModule);
      /***/
    },

    /***/
    "7FkU":
    /*!****************************************************!*\
      !*** ./src/app/pmac/loc-medico/loc-medico.page.ts ***!
      \****************************************************/

    /*! exports provided: LocMedicoPage */

    /***/
    function FkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocMedicoPage", function () {
        return LocMedicoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loc_medico_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loc-medico.page.html */
      "Vof9");
      /* harmony import */


      var _loc_medico_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loc-medico.page.scss */
      "Wlu+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocMedicoPage = /*#__PURE__*/function () {
        function LocMedicoPage() {
          _classCallCheck(this, LocMedicoPage);
        }

        _createClass(LocMedicoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LocMedicoPage;
      }();

      LocMedicoPage.ctorParameters = function () {
        return [];
      };

      LocMedicoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loc-medico',
        template: _raw_loader_loc_medico_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loc_medico_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LocMedicoPage);
      /***/
    },

    /***/
    "ANAz":
    /*!******************************************************!*\
      !*** ./src/app/pmac/loc-medico/loc-medico.module.ts ***!
      \******************************************************/

    /*! exports provided: LocMedicoPageModule */

    /***/
    function ANAz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocMedicoPageModule", function () {
        return LocMedicoPageModule;
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


      var _loc_medico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./loc-medico-routing.module */
      "4AN+");
      /* harmony import */


      var _loc_medico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./loc-medico.page */
      "7FkU");

      var LocMedicoPageModule = function LocMedicoPageModule() {
        _classCallCheck(this, LocMedicoPageModule);
      };

      LocMedicoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _loc_medico_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocMedicoPageRoutingModule"]],
        declarations: [_loc_medico_page__WEBPACK_IMPORTED_MODULE_6__["LocMedicoPage"]]
      })], LocMedicoPageModule);
      /***/
    },

    /***/
    "Vof9":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmac/loc-medico/loc-medico.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vof9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>";
      /***/
    },

    /***/
    "Wlu+":
    /*!******************************************************!*\
      !*** ./src/app/pmac/loc-medico/loc-medico.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function Wlu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtbWVkaWNvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmac-loc-medico-loc-medico-module-es5.js.map