(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "8MT7":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Connexion\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-cnx></app-cnx>\n</ion-content>\n";
      /***/
    },

    /***/
    "A3fQ":
    /*!*********************************************!*\
      !*** ./src/app/tab1/cnx/cnx.component.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function A3fQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbnguY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "Gr6r":
    /*!*******************************************!*\
      !*** ./src/app/tab1/cnx/cnx.component.ts ***!
      \*******************************************/

    /*! exports provided: CnxComponent */

    /***/
    function Gr6r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CnxComponent", function () {
        return CnxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cnx_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cnx.component.html */
      "bVNS");
      /* harmony import */


      var _cnx_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cnx.component.scss */
      "A3fQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../api.service */
      "yTNM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngxs/store */
      "AcyG");
      /* harmony import */


      var _shared_actions_jwt_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/actions/jwt-action */
      "uICm");

      var CnxComponent = /*#__PURE__*/function () {
        function CnxComponent(fb, api, router, store) {
          _classCallCheck(this, CnxComponent);

          this.fb = fb;
          this.api = api;
          this.router = router;
          this.store = store;
          this.subscription = null;
        }

        _createClass(CnxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userForm = this.fb.group({
              login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription != null) {
              console.log("unsubsribe");
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "Connexion",
          value: function Connexion() {
            var _this = this;

            if (this.subscription != null) {
              console.log("unsubsribe");
              this.subscription.unsubscribe();
            }

            this.subscription = this.api.postLogin(this.userForm.value.login, this.userForm.value.password).subscribe(function (j) {
              console.log(j);
              _this.user$ = _this.api.getLogin(_this.userForm.value.login);
            }, this.user$ = null);
          }
        }, {
          key: "Deconnexion",
          value: function Deconnexion() {
            this.user$ = null;
            this.store.dispatch(new _shared_actions_jwt_action__WEBPACK_IMPORTED_MODULE_8__["CreateJwt"]({
              "token": ""
            }));
            this.router.navigate(['/']);
          }
        }]);

        return CnxComponent;
      }();

      CnxComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      };

      CnxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cnx',
        template: _raw_loader_cnx_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cnx_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CnxComponent);
      /***/
    },

    /***/
    "Mzl2":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function Mzl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "8MT7");
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1.page.scss */
      "rWyk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Tab1Page = function Tab1Page() {
        _classCallCheck(this, Tab1Page);
      };

      Tab1Page.ctorParameters = function () {
        return [];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab1Page);
      /***/
    },

    /***/
    "XOzS":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function XOzS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "bVNS":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/cnx/cnx.component.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function bVNS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"user$ | async as u\">\n    {{u.nom}}\n    {{u.prenom}}\n\n    <button ion-button (click)=\"Deconnexion()\">Deconnexion</button>\n\n</div>\n\n<div *ngIf=\"user$ == null\">\n<form [formGroup]=\"userForm\" >\n    <ion-item>\n      <ion-label>Login</ion-label>\n      <ion-input type=\"text\" formControlName=\"login\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input formControlName=\"password\"></ion-input>\n    </ion-item>\n    <button ion-button (click)=\"Connexion()\" [disabled]=\"!userForm.valid\">Connexion</button>\n  </form>\n  </div>";
      /***/
    },

    /***/
    "rWyk":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function rWyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "tmrb":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function tmrb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tab1.page */
      "Mzl2");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _cnx_cnx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cnx/cnx.component */
      "Gr6r");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "XOzS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_cnx_cnx_component__WEBPACK_IMPORTED_MODULE_6__["CnxComponent"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"], _cnx_cnx_component__WEBPACK_IMPORTED_MODULE_6__["CnxComponent"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(httpClient) {
          _classCallCheck(this, ApiService);

          this.httpClient = httpClient;
          this.urlApiLogin = "/api/login";
          this.urlApiAuth = "/api/auth/";
          this.tokenParse = "";
        }

        _createClass(ApiService, [{
          key: "postLogin",
          value: function postLogin(login, password) {
            var data;
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
              })
            };
            data = "login=" + login + "&pass=" + password;
            return this.httpClient.post(this.urlApiLogin, data, httpOptions);
          }
        }, {
          key: "getLogin",
          value: function getLogin(login) {
            var data;
            data = "login=" + login;
            console.log(data);
            return this.httpClient.get(this.urlApiAuth + login);
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map