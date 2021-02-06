(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-qtd-exam-tec-qtd-exam-tec-module"], {
    /***/
    "+R1u":
    /*!**********************************************************!*\
      !*** ./src/app/pmal/qtd-exam-tec/qtd-exam-tec.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function R1u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdGQtZXhhbS10ZWMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "7hKR":
    /*!******************************************************************!*\
      !*** ./src/app/pmal/qtd-exam-tec/qtd-exam-tec-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: QtdExamTecPageRoutingModule */

    /***/
    function hKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QtdExamTecPageRoutingModule", function () {
        return QtdExamTecPageRoutingModule;
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


      var _qtd_exam_tec_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qtd-exam-tec.page */
      "VN1c");

      var routes = [{
        path: '',
        component: _qtd_exam_tec_page__WEBPACK_IMPORTED_MODULE_3__["QtdExamTecPage"]
      }];

      var QtdExamTecPageRoutingModule = function QtdExamTecPageRoutingModule() {
        _classCallCheck(this, QtdExamTecPageRoutingModule);
      };

      QtdExamTecPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QtdExamTecPageRoutingModule);
      /***/
    },

    /***/
    "OVVn":
    /*!**********************************************************!*\
      !*** ./src/app/pmal/qtd-exam-tec/qtd-exam-tec.module.ts ***!
      \**********************************************************/

    /*! exports provided: QtdExamTecPageModule */

    /***/
    function OVVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QtdExamTecPageModule", function () {
        return QtdExamTecPageModule;
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


      var _qtd_exam_tec_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qtd-exam-tec-routing.module */
      "7hKR");
      /* harmony import */


      var _qtd_exam_tec_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qtd-exam-tec.page */
      "VN1c");

      var QtdExamTecPageModule = function QtdExamTecPageModule() {
        _classCallCheck(this, QtdExamTecPageModule);
      };

      QtdExamTecPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qtd_exam_tec_routing_module__WEBPACK_IMPORTED_MODULE_5__["QtdExamTecPageRoutingModule"]],
        declarations: [_qtd_exam_tec_page__WEBPACK_IMPORTED_MODULE_6__["QtdExamTecPage"]]
      })], QtdExamTecPageModule);
      /***/
    },

    /***/
    "VN1c":
    /*!********************************************************!*\
      !*** ./src/app/pmal/qtd-exam-tec/qtd-exam-tec.page.ts ***!
      \********************************************************/

    /*! exports provided: QtdExamTecPage */

    /***/
    function VN1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QtdExamTecPage", function () {
        return QtdExamTecPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_qtd_exam_tec_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./qtd-exam-tec.page.html */
      "oSU/");
      /* harmony import */


      var _qtd_exam_tec_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./qtd-exam-tec.page.scss */
      "+R1u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QtdExamTecPage = /*#__PURE__*/function () {
        function QtdExamTecPage() {
          _classCallCheck(this, QtdExamTecPage);
        }

        _createClass(QtdExamTecPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QtdExamTecPage;
      }();

      QtdExamTecPage.ctorParameters = function () {
        return [];
      };

      QtdExamTecPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-qtd-exam-tec',
        template: _raw_loader_qtd_exam_tec_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_qtd_exam_tec_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], QtdExamTecPage);
      /***/
    },

    /***/
    "oSU/":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/qtd-exam-tec/qtd-exam-tec.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oSU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class="default">\n    <ion-title>qtd-exam-tec</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pmal-qtd-exam-tec-qtd-exam-tec-module-es5.js.map