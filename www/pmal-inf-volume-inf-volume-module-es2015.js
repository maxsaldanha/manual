(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-inf-volume-inf-volume-module"],{

/***/ "IrSj":
/*!****************************************************!*\
  !*** ./src/app/pmal/inf-volume/inf-volume.page.ts ***!
  \****************************************************/
/*! exports provided: InfVolumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfVolumePage", function() { return InfVolumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inf_volume_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inf-volume.page.html */ "a5JY");
/* harmony import */ var _inf_volume_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inf-volume.page.scss */ "k1yS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InfVolumePage = class InfVolumePage {
    constructor() { }
    ngOnInit() {
    }
};
InfVolumePage.ctorParameters = () => [];
InfVolumePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inf-volume',
        template: _raw_loader_inf_volume_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inf_volume_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfVolumePage);



/***/ }),

/***/ "W0VE":
/*!******************************************************!*\
  !*** ./src/app/pmal/inf-volume/inf-volume.module.ts ***!
  \******************************************************/
/*! exports provided: InfVolumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfVolumePageModule", function() { return InfVolumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inf_volume_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inf-volume-routing.module */ "jwpb");
/* harmony import */ var _inf_volume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inf-volume.page */ "IrSj");







let InfVolumePageModule = class InfVolumePageModule {
};
InfVolumePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inf_volume_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfVolumePageRoutingModule"]
        ],
        declarations: [_inf_volume_page__WEBPACK_IMPORTED_MODULE_6__["InfVolumePage"]]
    })
], InfVolumePageModule);



/***/ }),

/***/ "a5JY":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/inf-volume/inf-volume.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"default\">\n    <ion-buttons slot=\"start\"> <ion-back-button defaultHref=\"/\" color=\"light\" text=\"\"></ion-back-button> </ion-buttons>\n    <ion-title ></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <p class=\"p-title\"></p>\n\n  <p class=\"p-texto\"></p>\n  \n  <p class=\"p-textoUP\"></p>\n\n  <ion-img src=\"\" class=\"ion-img\"></ion-img>\n  \n  <p class=\"p-textoUP\">\n    <ion-icon name=\"ellipse-sharp\" class=\"icon-red\"></ion-icon>  \n    <strong>: </strong>\n  </p>\n  \n\n</ion-content>");

/***/ }),

/***/ "jwpb":
/*!**************************************************************!*\
  !*** ./src/app/pmal/inf-volume/inf-volume-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: InfVolumePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfVolumePageRoutingModule", function() { return InfVolumePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inf_volume_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inf-volume.page */ "IrSj");




const routes = [
    {
        path: '',
        component: _inf_volume_page__WEBPACK_IMPORTED_MODULE_3__["InfVolumePage"]
    }
];
let InfVolumePageRoutingModule = class InfVolumePageRoutingModule {
};
InfVolumePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfVolumePageRoutingModule);



/***/ }),

/***/ "k1yS":
/*!******************************************************!*\
  !*** ./src/app/pmal/inf-volume/inf-volume.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmYtdm9sdW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pmal-inf-volume-inf-volume-module-es2015.js.map