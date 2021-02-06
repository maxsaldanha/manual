(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-tab-result-tab-result-module"],{

/***/ "+Oy3":
/*!******************************************************!*\
  !*** ./src/app/pmal/tab-result/tab-result.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItcmVzdWx0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "4UmB":
/*!****************************************************!*\
  !*** ./src/app/pmal/tab-result/tab-result.page.ts ***!
  \****************************************************/
/*! exports provided: TabResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabResultPage", function() { return TabResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab_result_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab-result.page.html */ "gh3R");
/* harmony import */ var _tab_result_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-result.page.scss */ "+Oy3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TabResultPage = class TabResultPage {
    constructor() { }
    ngOnInit() {
    }
};
TabResultPage.ctorParameters = () => [];
TabResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab-result',
        template: _raw_loader_tab_result_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab_result_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabResultPage);



/***/ }),

/***/ "94Yy":
/*!**************************************************************!*\
  !*** ./src/app/pmal/tab-result/tab-result-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TabResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabResultPageRoutingModule", function() { return TabResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-result.page */ "4UmB");




const routes = [
    {
        path: '',
        component: _tab_result_page__WEBPACK_IMPORTED_MODULE_3__["TabResultPage"]
    }
];
let TabResultPageRoutingModule = class TabResultPageRoutingModule {
};
TabResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabResultPageRoutingModule);



/***/ }),

/***/ "gh3R":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/tab-result/tab-result.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-title>tab-result</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "t/fJ":
/*!******************************************************!*\
  !*** ./src/app/pmal/tab-result/tab-result.module.ts ***!
  \******************************************************/
/*! exports provided: TabResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabResultPageModule", function() { return TabResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tab_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-result-routing.module */ "94Yy");
/* harmony import */ var _tab_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-result.page */ "4UmB");







let TabResultPageModule = class TabResultPageModule {
};
TabResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabResultPageRoutingModule"]
        ],
        declarations: [_tab_result_page__WEBPACK_IMPORTED_MODULE_6__["TabResultPage"]]
    })
], TabResultPageModule);



/***/ })

}]);
//# sourceMappingURL=pmal-tab-result-tab-result-module-es2015.js.map