(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkui"] = self["webpackChunkui"] || []).push([["src_app_pages_treatments_treatments_module_ts"], {
    /***/
    10538:
    /*!***************************************************************!*\
      !*** ./src/app/pages/treatments/treatments-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TreatmentsPageRoutingModule": function TreatmentsPageRoutingModule() {
          return (
            /* binding */
            _TreatmentsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _treatments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./treatments.page */
      41665);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _treatments_page__WEBPACK_IMPORTED_MODULE_0__.TreatmentsPage
      }];

      var _TreatmentsPageRoutingModule = function _TreatmentsPageRoutingModule() {
        _classCallCheck(this, _TreatmentsPageRoutingModule);
      };

      _TreatmentsPageRoutingModule.ɵfac = function TreatmentsPageRoutingModule_Factory(t) {
        return new (t || _TreatmentsPageRoutingModule)();
      };

      _TreatmentsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _TreatmentsPageRoutingModule
      });
      _TreatmentsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_TreatmentsPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    62871:
    /*!*******************************************************!*\
      !*** ./src/app/pages/treatments/treatments.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TreatmentsPageModule": function TreatmentsPageModule() {
          return (
            /* binding */
            _TreatmentsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _treatments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./treatments-routing.module */
      10538);
      /* harmony import */


      var _treatments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./treatments.page */
      41665);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/table/table.component */
      49767);
      /* harmony import */


      var _components_mobile_treatments_table_mobile_treatments_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/mobile-treatments-table/mobile-treatments-table.component */
      75659);
      /* harmony import */


      var _components_treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/treatment-details/treatment-details.component */
      419);

      var _TreatmentsPageModule = function _TreatmentsPageModule() {
        _classCallCheck(this, _TreatmentsPageModule);
      };

      _TreatmentsPageModule.ɵfac = function TreatmentsPageModule_Factory(t) {
        return new (t || _TreatmentsPageModule)();
      };

      _TreatmentsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _TreatmentsPageModule
      });
      _TreatmentsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _treatments_routing_module__WEBPACK_IMPORTED_MODULE_0__.TreatmentsPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_TreatmentsPageModule, {
          declarations: [_treatments_page__WEBPACK_IMPORTED_MODULE_1__.TreatmentsPage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _treatments_routing_module__WEBPACK_IMPORTED_MODULE_0__.TreatmentsPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule]
        });
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_treatments_page__WEBPACK_IMPORTED_MODULE_1__.TreatmentsPage, [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRow, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonCol, _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _components_mobile_treatments_table_mobile_treatments_table_component__WEBPACK_IMPORTED_MODULE_4__.MobileTreatmentsTableComponent, _components_treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_5__.TreatmentDetailsComponent], []);
      /***/

    },

    /***/
    41665:
    /*!*****************************************************!*\
      !*** ./src/app/pages/treatments/treatments.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TreatmentsPage": function TreatmentsPage() {
          return (
            /* binding */
            _TreatmentsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function TreatmentsPage_ion_col_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectTreatment", function TreatmentsPage_ion_col_10_Template_app_table_selectTreatment_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.selectTreatment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx_r0.displayedColumns)("treatments", ctx_r0.treatments);
        }
      }

      function TreatmentsPage_ion_col_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search using patient's name or IPD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Searched value is matched anywhere within the string");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-mobile-treatments-table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allTreatments", ctx_r1.displayTreatments);
        }
      }

      function TreatmentsPage_ion_col_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-treatment-details", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("treatment", ctx_r2.allTreatments[ctx_r2.selectedTreatmentID - 1]);
        }
      } // for mocking data


      var NAMES = ['Harry', 'Ross', 'Bruce', 'Cook', 'Carolyn', 'Morgan', 'Albert', 'Walker', 'Randy', 'Reed', 'Larry', 'Barnes', 'Lois', 'Wilson', 'Jesse', 'Campbell', 'Ernest', 'Rogers', 'Theresa', 'Patterson', 'Henry', 'Simmons', 'Michelle', 'Perry', 'Frank', 'Butler', 'Shirley'];
      var IDENTIFIERS = ['Chemo', 'Transplant', 'Routine'];

      var _TreatmentsPage = /*#__PURE__*/function () {
        function _TreatmentsPage(route) {
          var _this = this;

          _classCallCheck(this, _TreatmentsPage);

          this.route = route;
          this.displayedColumns = ['sno', 'identifier', 'id', 'patient'];
          this.selectedTreatmentID = 1;
          this.allTreatments = [];
          this.displayTreatments = [];
          this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null);
          this.treatments = Array.from({
            length: 100
          }, function (_, k) {
            return _this.createMockTreatments(k + 1);
          });
          this.displayTreatments = this.allTreatments;
        }

        _createClass(_TreatmentsPage, [{
          key: "createMockTreatments",
          value: function createMockTreatments(id) {
            var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
            var rowData = {
              sno: id,
              identifier: IDENTIFIERS[Math.floor(Math.random() * IDENTIFIERS.length)],
              id: '' + Math.floor(Math.random() * (9999999 - 1000000 + 1)),
              patient: name
            };
            this.allTreatments.push({
              id: rowData.id,
              identifier: rowData.identifier,
              patient: {
                id: '' + id,
                name: rowData.patient
              },
              dischargeDate: this.randomDate(new Date(2021, 4, 1), new Date()),
              admissionDate: this.randomDate(new Date(2021, 4, 1), new Date()),
              payType: 'cash',
              notes: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            });
            return rowData;
          }
        }, {
          key: "randomDate",
          value: function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
          }
        }, {
          key: "filterTreatments",
          value: function filterTreatments(searchStr) {
            this.displayTreatments = this.allTreatments.filter(function (treatment) {
              return treatment.id.includes(searchStr) || treatment.patient.name.includes(searchStr);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.search.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(200)).subscribe(function (value) {
              return _this2.filterTreatments(value);
            });
          }
        }, {
          key: "selectTreatment",
          value: function selectTreatment(row) {
            this.selectedTreatmentID = row.sno;
          }
        }]);

        return _TreatmentsPage;
      }();

      _TreatmentsPage.ɵfac = function TreatmentsPage_Factory(t) {
        return new (t || _TreatmentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _TreatmentsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TreatmentsPage,
        selectors: [["app-treatments"]],
        decls: 13,
        vars: 3,
        consts: [["slot", "start"], ["color", "light"], ["color", "dark"], [1, "p-lg-5"], ["class", "ion-hide-md-down", "size", "6", 4, "ngIf"], ["class", "ion-hide-sm-up", "size", "12", 4, "ngIf"], ["class", "ion-hide-md-down", "size", "12", "size-md", "6", 4, "ngIf"], ["size", "6", 1, "ion-hide-md-down"], [3, "displayedColumns", "treatments", "selectTreatment"], ["size", "12", 1, "ion-hide-sm-up"], ["appearance", "fill", 1, "search-field"], ["matInput", "", 3, "formControl"], [3, "allTreatments"], ["size", "12", "size-md", "6", 1, "ion-hide-md-down"], [3, "treatment"]],
        template: function TreatmentsPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-menu-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-menu-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Treatments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TreatmentsPage_ion_col_10_Template, 2, 2, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TreatmentsPage_ion_col_11_Template, 8, 2, "ion-col", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TreatmentsPage_ion_col_12_Template, 3, 1, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treatments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treatments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allTreatments);
          }
        },
        styles: [".search-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWF0bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoidHJlYXRtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEuM3JlbTtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_treatments_treatments_module_ts-es5.js.map