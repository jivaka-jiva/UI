(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkui"] = self["webpackChunkui"] || []).push([["src_app_pages_add-procedure_add-procedure_module_ts"], {
    /***/
    97598:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/add-procedure/add-procedure-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddProcedurePageRoutingModule": function AddProcedurePageRoutingModule() {
          return (
            /* binding */
            _AddProcedurePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _add_procedure_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-procedure.page */
      45678);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _add_procedure_page__WEBPACK_IMPORTED_MODULE_0__.AddProcedurePage
      }];

      var _AddProcedurePageRoutingModule = function _AddProcedurePageRoutingModule() {
        _classCallCheck(this, _AddProcedurePageRoutingModule);
      };

      _AddProcedurePageRoutingModule.ɵfac = function AddProcedurePageRoutingModule_Factory(t) {
        return new (t || _AddProcedurePageRoutingModule)();
      };

      _AddProcedurePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AddProcedurePageRoutingModule
      });
      _AddProcedurePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AddProcedurePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    11176:
    /*!*************************************************************!*\
      !*** ./src/app/pages/add-procedure/add-procedure.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddProcedurePageModule": function AddProcedurePageModule() {
          return (
            /* binding */
            _AddProcedurePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _add_procedure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-procedure-routing.module */
      97598);
      /* harmony import */


      var _add_procedure_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-procedure.page */
      45678);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AddProcedurePageModule = function _AddProcedurePageModule() {
        _classCallCheck(this, _AddProcedurePageModule);
      };

      _AddProcedurePageModule.ɵfac = function AddProcedurePageModule_Factory(t) {
        return new (t || _AddProcedurePageModule)();
      };

      _AddProcedurePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AddProcedurePageModule
      });
      _AddProcedurePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_procedure_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProcedurePageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AddProcedurePageModule, {
          declarations: [_add_procedure_page__WEBPACK_IMPORTED_MODULE_1__.AddProcedurePage, _add_procedure_page__WEBPACK_IMPORTED_MODULE_1__.ProcedureDetailsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_procedure_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddProcedurePageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule]
        });
      })();
      /***/

    },

    /***/
    45678:
    /*!***********************************************************!*\
      !*** ./src/app/pages/add-procedure/add-procedure.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddProcedurePage": function AddProcedurePage() {
          return (
            /* binding */
            _AddProcedurePage
          );
        },

        /* harmony export */
        "ProcedureDetailsComponent": function ProcedureDetailsComponent() {
          return (
            /* binding */
            _ProcedureDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      10629);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/header/header.component */
      43646);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      function AddProcedurePage_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hospital_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", hospital_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hospital_r4);
        }
      }

      function AddProcedurePage_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var procedure_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", procedure_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](procedure_r5);
        }
      }

      function AddProcedurePage_ion_text_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "*Swipe right to delete a procedure.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AddProcedurePage_ion_item_sliding_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item-sliding");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item-options", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddProcedurePage_ion_item_sliding_22_Template_ion_item_option_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var i_r7 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.deleteProcedure(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-expansion-panel", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var procedure_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", procedure_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", procedure_r6.get("hospital").value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", procedure_r6.get("procedure").value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", procedure_r6.get("count").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", procedure_r6.get("amount").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", procedure_r6.get("patient").value);
        }
      }

      function ProcedureDetailsComponent_ion_content_7_section_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var procedure_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](procedure_r2);
        }
      }

      function ProcedureDetailsComponent_ion_content_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProcedureDetailsComponent_ion_content_7_section_3_Template, 12, 2, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.procedureDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.procedures);
        }
      }

      var _AddProcedurePage = /*#__PURE__*/function () {
        function _AddProcedurePage(modalController, toastController, authService, router, storage) {
          var _this = this;

          _classCallCheck(this, _AddProcedurePage);

          this.modalController = modalController;
          this.toastController = toastController;
          this.authService = authService;
          this.router = router;
          this.storage = storage;
          this.hospitals = [];
          this.allProcedures = ['Inject', 'Sedate', 'Root canal', 'Eye test'];
          this.storage.get('hospitals').then(function (data) {
            return _this.hospitals = data;
          });
        }

        _createClass(_AddProcedurePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForms();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.initializeForms();
            this.addProcedureForm.get('hospital').valueChanges.subscribe(function (value) {
              _this2.addProcedureForm.get('procedures').enable();

              _this2.addProcedureForm.get('procedures').patchValue([]);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.initializeForms();
          }
        }, {
          key: "initializeForms",
          value: function initializeForms() {
            this.addProcedureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              hospital: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
              procedures: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({
                value: [],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
            });
            this.procedureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              procedures: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([])
            });
          }
        }, {
          key: "openProcedureDetailsDialog",
          value: function openProcedureDetailsDialog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal, _yield$modal$onDidDis, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _ProcedureDetailsComponent,
                        componentProps: {
                          procedures: this.addProcedureForm.get('procedures').value
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      _context.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      _yield$modal$onDidDis = _context.sent;
                      data = _yield$modal$onDidDis.data;

                      if (data !== 'dismissed') {
                        this.addProcedure(data);
                      }

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addProcedure",
          value: function addProcedure(procedureDetails) {
            var _this3 = this;

            var allSelectedProcedures = this.procedureForm.get('procedures');
            procedureDetails.forEach(function (procedureGroup) {
              var procedure = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
                hospital: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(_this3.addProcedureForm.get('hospital').value, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
                procedure: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(procedureGroup.value.procedure, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
                count: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(procedureGroup.value.count, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1)]),
                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(procedureGroup.value.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]),
                patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(procedureGroup.value.patient)
              });
              allSelectedProcedures.controls.push(procedure);
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            if (this.procedureForm.valid) {
              this.saveData();
              this.authService.showLoader('Saving procedures').then();
              setTimeout(function () {
                _this4.router.navigateByUrl('').then(function () {
                  return _this4.authService.dismissLoader();
                });
              }, 1000);
            }
          }
        }, {
          key: "saveData",
          value: function saveData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var totalFees, totalProcedures, hospitals, hospitalData, procedureList;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.t1 = parseInt;
                      _context4.next = 3;
                      return this.storage.get('total_fees_this_month');

                    case 3:
                      _context4.t2 = _context4.sent;
                      _context4.t0 = (0, _context4.t1)(_context4.t2, 10);

                      if (_context4.t0) {
                        _context4.next = 7;
                        break;
                      }

                      _context4.t0 = 0;

                    case 7:
                      totalFees = _context4.t0;
                      _context4.t4 = parseInt;
                      _context4.next = 11;
                      return this.storage.get('total_procedures');

                    case 11:
                      _context4.t5 = _context4.sent;
                      _context4.t3 = (0, _context4.t4)(_context4.t5, 10);

                      if (_context4.t3) {
                        _context4.next = 15;
                        break;
                      }

                      _context4.t3 = 0;

                    case 15:
                      totalProcedures = _context4.t3;
                      _context4.next = 18;
                      return this.storage.get('hospitals');

                    case 18:
                      hospitals = _context4.sent;
                      hospitalData = {};
                      _context4.next = 22;
                      return hospitals.forEach(function (hospital) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.storage.get(hospital);

                                case 2:
                                  _context2.t0 = _context2.sent;

                                  if (_context2.t0) {
                                    _context2.next = 5;
                                    break;
                                  }

                                  _context2.t0 = 0;

                                case 5:
                                  hospitalData[hospital] = _context2.t0;

                                case 6:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 22:
                      procedureList = this.procedureForm.get('procedures').controls;
                      procedureList.forEach(function (procedure) {
                        totalFees += parseInt(procedure.value.amount, 10) * parseInt(procedure.value.count, 10);
                        totalProcedures += parseInt(procedure.value.count, 10);
                        hospitalData[procedure.value.hospital] = parseInt(hospitalData[procedure.value.hospital], 10) + parseInt(procedure.value.amount, 10) * parseInt(procedure.value.count, 10);
                      });
                      _context4.next = 26;
                      return this.storage.set('total_fees_this_month', totalFees + '');

                    case 26:
                      _context4.next = 28;
                      return this.storage.set('total_procedures', totalProcedures + '');

                    case 28:
                      _context4.next = 30;
                      return hospitals.forEach(function (hospital) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return this.storage.set(hospital, hospitalData[hospital]);

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 30:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(mes) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: mes,
                        duration: 2000
                      });

                    case 2:
                      toast = _context5.sent;
                      _context5.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteProcedure",
          value: function deleteProcedure(index) {
            var procedures = this.procedureForm.get('procedures');
            procedures.controls.splice(index, 1);
          }
        }]);

        return _AddProcedurePage;
      }();

      _AddProcedurePage.ɵfac = function AddProcedurePage_Factory(t) {
        return new (t || _AddProcedurePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage));
      };

      _AddProcedurePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AddProcedurePage,
        selectors: [["app-add-procedure"]],
        decls: 26,
        vars: 9,
        consts: [[3, "pageName"], ["size", "12", 1, "fixed-form"], [1, "single-line-container", "flex-md-row", 3, "formGroup"], ["formControlName", "hospital", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "procedures", "multiple", "", "required", ""], ["color", "secondary", "type", "button", 3, "disabled", "click"], [4, "ngIf"], ["size", "12", 2, "margin-top", "15rem"], [3, "formGroup", "ngSubmit"], [4, "ngFor", "ngForOf"], [1, "bottom-fixed-div"], ["type", "submit", 1, "w-100", 3, "disabled"], [3, "value"], [1, "hint-text", "mt-5", "mb-0", "ml-1"], ["side", "start"], ["color", "danger", 3, "click"], [3, "formGroup"], [1, "flex-row"], [2, "width", "20%", "margin-right", "8%"], ["matInput", "", "formControlName", "count", "placeholder", "Count", 3, "value"], ["matInput", "", "formControlName", "amount", "placeholder", "Amount", 3, "value"], [2, "width", "100%"], ["matInput", "", "formControlName", "patient", "placeholder", "Patient's name", 3, "value"]],
        template: function AddProcedurePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-col", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Select hospital");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AddProcedurePage_mat_option_10_Template, 2, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Select Procedures");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddProcedurePage_mat_option_15_Template, 2, 2, "mat-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddProcedurePage_Template_ion_button_click_16_listener() {
              return ctx.openProcedureDetailsDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddProcedurePage_ion_text_18_Template, 3, 0, "ion-text", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddProcedurePage_Template_form_ngSubmit_21_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AddProcedurePage_ion_item_sliding_22_Template, 18, 6, "ion-item-sliding", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageName", "Add a Procedure");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addProcedureForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hospitals);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allProcedures);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addProcedureForm.get("procedures").value.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.procedureForm.get("procedures")["controls"].length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.procedureForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.procedureForm.get("procedures")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.procedureForm.get("procedures")["controls"].length === 0);
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelDescription, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor],
        styles: [".fixed-form[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 97% !important;\n  background-color: white;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9jZWR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLXByb2NlZHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtZm9ybSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDk3JSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xufSJdfQ== */"]
      });

      var _ProcedureDetailsComponent = /*#__PURE__*/function () {
        function _ProcedureDetailsComponent(modalController, toastController) {
          _classCallCheck(this, _ProcedureDetailsComponent);

          this.modalController = modalController;
          this.toastController = toastController;
          this.procedureDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            procedures: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArray([])
          });
        }

        _createClass(_ProcedureDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeForm();
          }
        }, {
          key: "presentToast",
          value: function presentToast(mes) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: mes,
                        duration: 2000
                      });

                    case 2:
                      toast = _context6.sent;
                      _context6.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismissModal",
          value: function dismissModal(data) {
            this.modalController.dismiss(data).then();
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            var _this6 = this;

            this.procedures.forEach(function (procedure) {
              return _this6.addProcedure(procedure);
            });
          }
        }, {
          key: "addProcedure",
          value: function addProcedure(procedure) {
            var procedureDetailArray = this.procedureDetails.get('procedures');
            var procedureDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              procedure: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(procedure),
              count: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
              amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(100, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
              patient: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
            });
            procedureDetailArray.controls.push(procedureDetails);
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.procedureDetails.valid) {
              var procedureDetails = this.procedureDetails.get('procedures');
              this.dismissModal(procedureDetails.controls);
            } else {
              this.presentToast('Form is invalid').then();
            }
          }
        }]);

        return _ProcedureDetailsComponent;
      }();

      _ProcedureDetailsComponent.ɵfac = function ProcedureDetailsComponent_Factory(t) {
        return new (t || _ProcedureDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController));
      };

      _ProcedureDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ProcedureDetailsComponent,
        selectors: [["procedure-details"]],
        inputs: {
          procedures: "procedures"
        },
        decls: 11,
        vars: 1,
        consts: [["translucent", ""], ["slot", "end"], [3, "click"], [4, "ngIf"], [1, "bottom-fixed-div"], ["type", "submit", "color", "secondary", 1, "w-100", 3, "click"], [2, "margin-bottom", "36px", 3, "formGroup"], ["formArrayName", "procedures"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [1, "flex-row", "ml-5", "mt-2", 2, "width", "72%"], [2, "width", "20%", "margin-right", "8%"], ["matInput", "", "formControlName", "count", "placeholder", "Count", "required", ""], ["matInput", "", "formControlName", "amount", "placeholder", "Amount per procedure", "required", ""], [2, "width", "100%"], ["matInput", "", "formControlName", "patient", "placeholder", "Patient's name", "required", ""]],
        template: function ProcedureDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Modal Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsComponent_Template_ion_button_click_5_listener() {
              return ctx.dismissModal("dismissed");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProcedureDetailsComponent_ion_content_7_Template, 4, 2, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProcedureDetailsComponent_Template_ion_button_click_9_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.procedureDetails);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_add-procedure_add-procedure_module_ts-es5.js.map