(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "AHrv":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function AHrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"home\">\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"home\" lines=\"none\">\n            <img src=\"/assets/icon/icon-bioslab.svg\" class=\"img-logo\">\n              <p class=\"p-home\"><strong>Manual do Usuário</strong></p>        \n          </ion-item> \n        </ion-col>\n        <ion-col class=\"span-col\">\n          <p class=\"p-texto-small\"> \n            Contato: \n            <a href=\"2136226400\" target=\"_blank\">\n              <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">  (21) 3622-6400 \n            </a>                                    \n            <a href=\"https://api.whatsapp.com/send?phone=+552199311-9141\" target=\"_blank\">\n              <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\"> (21) 99311-9141\n            </a> \n            <a href=\"mailto:suporte@karyon.com.br?subject=Abertura%20de%20chamado%20-%20Dúvida\" target=\"_blank\">\n              <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\"> suporte@karyon.com.br\n            </a>            \n          </p> \n        </ion-col>\n      </ion-row>           \n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding class=\"background\">\n    <ion-tabs>            \n      <ion-tab-bar slot=\"top\" >       \n        <ion-tab-button tab=\"tab1\"> \n          <ion-icon class=\"big\" src=\"/assets/icon/atendimento.svg\"></ion-icon>   \n          <ion-label class=\"span-label\">Atendimento</ion-label>   \n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"tab2\">   \n          <ion-icon class=\"big\" src=\"/assets/icon/microscopioamarelo.svg\"></ion-icon>   \n          <ion-label class=\"span-label\">Análise</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"tab3\">    \n         <ion-icon class=\"big\" src=\"/assets/icon/calculadora2.svg\"></ion-icon>   \n          <ion-label class=\"span-label\">Faturamento</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"tab4\">   \n          <ion-icon class=\"big\" src=\"/assets/icon/estatistico.svg\"></ion-icon>      \n          <ion-label class=\"span-label\">Estatístico</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"tab5\">    \n          <ion-icon class=\"big\" src=\"/assets/icon/desenhando.svg\"></ion-icon>    \n          <ion-label class=\"span-label\">Configurações</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  \n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar class=\"default\">\n      <p class=\"p-texto-small\">   \n        <a href=\"2136226400\">\n          <img src=\"../assets/icon/TELEFONE.png\" class=\"icon-contato\">  (21) 3622-6400 \n        </a>                                    \n        <a href=\"https://api.whatsapp.com/send?phone=+552199311-9141\">\n          <img src=\"../assets/icon/whatsapp-logo-1.png\" class=\"icon-contato\"> (21) 99311-9141\n        </a> \n        <a href=\"mailto:suporte@karyon.com.br?subject=Abertura%20de%20chamado%20-%20Dúvida\">\n          <img src=\"../assets/icon/icone-email.png\" class=\"icon-contato\"> suporte@karyon.com.br\n        </a>\n      </p>      \n    </ion-toolbar>\n  </ion-footer>";
      /***/
    },

    /***/
    "MJr+":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function MJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "AHrv");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "PkIa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TabsPage);
      /***/
    },

    /***/
    "PkIa":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function PkIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "hO9l":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function hO9l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "kB8F");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "kB8F":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function kB8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "MJr+");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "tmrb")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "TUkU")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "k+ul")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'tab4',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab4-tab4-module */
            "tab4-tab4-module").then(__webpack_require__.bind(null,
            /*! ../tab4/tab4.module */
            "1GDv")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: 'tab5',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab5-tab5-module */
            "tab5-tab5-module").then(__webpack_require__.bind(null,
            /*! ../tab5/tab5.module */
            "Sa0/")).then(function (m) {
              return m.Tab5PageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map