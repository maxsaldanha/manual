(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pmal-equip-ativo-equip-ativo-module"],{

/***/ "6Yj2":
/*!******************************************************!*\
  !*** ./src/app/pmal/equip-ativo/equip-ativo.page.ts ***!
  \******************************************************/
/*! exports provided: EquipAtivoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipAtivoPage", function() { return EquipAtivoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_equip_ativo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./equip-ativo.page.html */ "q8V3");
/* harmony import */ var _equip_ativo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equip-ativo.page.scss */ "o1aY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let EquipAtivoPage = class EquipAtivoPage {
    constructor() { }
    ngOnInit() {
    }
};
EquipAtivoPage.ctorParameters = () => [];
EquipAtivoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-equip-ativo',
        template: _raw_loader_equip_ativo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_equip_ativo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EquipAtivoPage);



/***/ }),

/***/ "gCAL":
/*!****************************************************************!*\
  !*** ./src/app/pmal/equip-ativo/equip-ativo-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EquipAtivoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipAtivoPageRoutingModule", function() { return EquipAtivoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _equip_ativo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equip-ativo.page */ "6Yj2");




const routes = [
    {
        path: '',
        component: _equip_ativo_page__WEBPACK_IMPORTED_MODULE_3__["EquipAtivoPage"]
    }
];
let EquipAtivoPageRoutingModule = class EquipAtivoPageRoutingModule {
};
EquipAtivoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EquipAtivoPageRoutingModule);



/***/ }),

/***/ "nkiD":
/*!********************************************************!*\
  !*** ./src/app/pmal/equip-ativo/equip-ativo.module.ts ***!
  \********************************************************/
/*! exports provided: EquipAtivoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipAtivoPageModule", function() { return EquipAtivoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _equip_ativo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equip-ativo-routing.module */ "gCAL");
/* harmony import */ var _equip_ativo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equip-ativo.page */ "6Yj2");







let EquipAtivoPageModule = class EquipAtivoPageModule {
};
EquipAtivoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _equip_ativo_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipAtivoPageRoutingModule"]
        ],
        declarations: [_equip_ativo_page__WEBPACK_IMPORTED_MODULE_6__["EquipAtivoPage"]]
    })
], EquipAtivoPageModule);



/***/ }),

/***/ "o1aY":
/*!********************************************************!*\
  !*** ./src/app/pmal/equip-ativo/equip-ativo.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcXVpcC1hdGl2by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "q8V3":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmal/equip-ativo/equip-ativo.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>equip-ativo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pmal-equip-ativo-equip-ativo-module-es2015.js.map