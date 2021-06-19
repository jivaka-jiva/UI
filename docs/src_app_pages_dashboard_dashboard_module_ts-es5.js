(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkui"] = self["webpackChunkui"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"], {
    /***/
    21554:
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS": function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
          );
        },

        /* harmony export */
        "MAT_AUTOCOMPLETE_SCROLL_STRATEGY": function MAT_AUTOCOMPLETE_SCROLL_STRATEGY() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_SCROLL_STRATEGY
          );
        },

        /* harmony export */
        "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
          );
        },

        /* harmony export */
        "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER
          );
        },

        /* harmony export */
        "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": function MAT_AUTOCOMPLETE_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "MatAutocomplete": function MatAutocomplete() {
          return (
            /* binding */
            _MatAutocomplete
          );
        },

        /* harmony export */
        "MatAutocompleteModule": function MatAutocompleteModule() {
          return (
            /* binding */
            _MatAutocompleteModule
          );
        },

        /* harmony export */
        "MatAutocompleteOrigin": function MatAutocompleteOrigin() {
          return (
            /* binding */
            _MatAutocompleteOrigin
          );
        },

        /* harmony export */
        "MatAutocompleteSelectedEvent": function MatAutocompleteSelectedEvent() {
          return (
            /* binding */
            _MatAutocompleteSelectedEvent
          );
        },

        /* harmony export */
        "MatAutocompleteTrigger": function MatAutocompleteTrigger() {
          return (
            /* binding */
            _MatAutocompleteTrigger
          );
        },

        /* harmony export */
        "_MatAutocompleteBase": function _MatAutocompleteBase() {
          return (
            /* binding */
            _MatAutocompleteBase2
          );
        },

        /* harmony export */
        "_MatAutocompleteOriginBase": function _MatAutocompleteOriginBase() {
          return (
            /* binding */
            _MatAutocompleteOriginBase2
          );
        },

        /* harmony export */
        "_MatAutocompleteTriggerBase": function _MatAutocompleteTriggerBase() {
          return (
            /* binding */
            _MatAutocompleteTriggerBase2
          );
        },

        /* harmony export */
        "getMatAutocompleteMissingPanelError": function getMatAutocompleteMissingPanelError() {
          return (
            /* binding */
            _getMatAutocompleteMissingPanelError
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      41439);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      58203);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      71386);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      70946);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/portal */
      87636);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! rxjs/operators */
      65792);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Autocomplete IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _c0 = ["panel"];

      function MatAutocomplete_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var formFieldId_r1 = ctx.id;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
        }
      }

      var _c1 = ["*"];
      var _uniqueAutocompleteIdCounter = 0;
      /** Event object that is emitted when an autocomplete option is selected. */

      var _MatAutocompleteSelectedEvent = function _MatAutocompleteSelectedEvent(
      /** Reference to the autocomplete panel that emitted the event. */
      source,
      /** Option that was selected. */
      option) {
        _classCallCheck(this, _MatAutocompleteSelectedEvent);

        this.source = source;
        this.option = option;
      }; // Boilerplate for applying mixins to MatAutocomplete.

      /** @docs-private */


      var MatAutocompleteBase = function MatAutocompleteBase() {
        _classCallCheck(this, MatAutocompleteBase);
      };

      var _MatAutocompleteMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(MatAutocompleteBase);
      /** Injection token to be used to override the default options for `mat-autocomplete`. */


      var _MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-default-options', {
        providedIn: 'root',
        factory: _MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */


      function _MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return {
          autoActiveFirstOption: false
        };
      }
      /** Base class with all of the `MatAutocomplete` functionality. */


      var _MatAutocompleteBase2 = /*#__PURE__*/function (_MatAutocompleteMixin) {
        _inherits(_MatAutocompleteBase2, _MatAutocompleteMixin);

        var _super = _createSuper(_MatAutocompleteBase2);

        function _MatAutocompleteBase2(_changeDetectorRef, _elementRef, defaults, platform) {
          var _this;

          _classCallCheck(this, _MatAutocompleteBase2);

          _this = _super.call(this);
          _this._changeDetectorRef = _changeDetectorRef;
          _this._elementRef = _elementRef;
          _this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /** Whether the autocomplete panel should be visible, depending on option length. */

          _this.showPanel = false;
          _this._isOpen = false;
          /** Function that maps an option's control value to its display value in the trigger. */

          _this.displayWith = null;
          /** Event that is emitted whenever an option from the list is selected. */

          _this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event that is emitted when the autocomplete panel is opened. */

          _this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event that is emitted when the autocomplete panel is closed. */

          _this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Emits whenever an option is activated using the keyboard. */

          _this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this._classList = {};
          /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

          _this.id = "mat-autocomplete-".concat(_uniqueAutocompleteIdCounter++); // TODO(crisbeto): the problem that the `inertGroups` option resolves is only present on
          // Safari using VoiceOver. We should occasionally check back to see whether the bug
          // wasn't resolved in VoiceOver, and if it has, we can remove this and the `inertGroups`
          // option altogether.

          _this.inertGroups = (platform === null || platform === void 0 ? void 0 : platform.SAFARI) || false;
          _this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
          return _this;
        }
        /** Whether the autocomplete panel is open. */


        _createClass(_MatAutocompleteBase2, [{
          key: "isOpen",
          get: function get() {
            return this._isOpen && this.showPanel;
          }
          /**
           * Whether the first option should be highlighted when the autocomplete panel is opened.
           * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
           */

        }, {
          key: "autoActiveFirstOption",
          get: function get() {
            return this._autoActiveFirstOption;
          },
          set: function set(value) {
            this._autoActiveFirstOption = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
          /**
           * Takes classes set on the host mat-autocomplete element and applies them to the panel
           * inside the overlay container to allow for easy styling.
           */

        }, {
          key: "classList",
          set: function set(value) {
            if (value && value.length) {
              this._classList = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceStringArray)(value).reduce(function (classList, className) {
                classList[className] = true;
                return classList;
              }, {});
            } else {
              this._classList = {};
            }

            this._setVisibilityClasses(this._classList);

            this._elementRef.nativeElement.className = '';
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.ActiveDescendantKeyManager(this.options).withWrap();
            this._activeOptionChanges = this._keyManager.change.subscribe(function (index) {
              _this2.optionActivated.emit({
                source: _this2,
                option: _this2.options.toArray()[index] || null
              });
            }); // Set the initial visibility state.

            this._setVisibility();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._activeOptionChanges.unsubscribe();
          }
          /**
           * Sets the panel scrollTop. This allows us to manually scroll to display options
           * above or below the fold, as they are not actually being focused when active.
           */

        }, {
          key: "_setScrollTop",
          value: function _setScrollTop(scrollTop) {
            if (this.panel) {
              this.panel.nativeElement.scrollTop = scrollTop;
            }
          }
          /** Returns the panel's scrollTop. */

        }, {
          key: "_getScrollTop",
          value: function _getScrollTop() {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
          }
          /** Panel should hide itself when the option list is empty. */

        }, {
          key: "_setVisibility",
          value: function _setVisibility() {
            this.showPanel = !!this.options.length;

            this._setVisibilityClasses(this._classList);

            this._changeDetectorRef.markForCheck();
          }
          /** Emits the `select` event. */

        }, {
          key: "_emitSelectEvent",
          value: function _emitSelectEvent(option) {
            var event = new _MatAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
          }
          /** Gets the aria-labelledby for the autocomplete panel. */

        }, {
          key: "_getPanelAriaLabelledby",
          value: function _getPanelAriaLabelledby(labelId) {
            if (this.ariaLabel) {
              return null;
            }

            var labelExpression = labelId ? labelId + ' ' : '';
            return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
          }
          /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */

        }, {
          key: "_setVisibilityClasses",
          value: function _setVisibilityClasses(classList) {
            classList[this._visibleClass] = this.showPanel;
            classList[this._hiddenClass] = !this.showPanel;
          }
        }]);

        return _MatAutocompleteBase2;
      }(_MatAutocompleteMixinBase);

      _MatAutocompleteBase2.ɵfac = function _MatAutocompleteBase_Factory(t) {
        return new (t || _MatAutocompleteBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform));
      };

      _MatAutocompleteBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAutocompleteBase2,
        viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          }
        },
        inputs: {
          displayWith: "displayWith",
          autoActiveFirstOption: "autoActiveFirstOption",
          classList: ["class", "classList"],
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          panelWidth: "panelWidth"
        },
        outputs: {
          optionSelected: "optionSelected",
          opened: "opened",
          closed: "closed",
          optionActivated: "optionActivated"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatAutocompleteBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform
        }];
      };

      _MatAutocompleteBase2.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
            "static": true
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['panel']
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-labelledby']
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        autoActiveFirstOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        panelWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        optionSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        optionActivated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        classList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['class']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform
          }];
        }, {
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          optionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          optionActivated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          autoActiveFirstOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['class']
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
              "static": true
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['panel']
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
          }],
          panelWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _MatAutocomplete = /*#__PURE__*/function (_MatAutocompleteBase3) {
        _inherits(_MatAutocomplete, _MatAutocompleteBase3);

        var _super2 = _createSuper(_MatAutocomplete);

        function _MatAutocomplete() {
          var _this3;

          _classCallCheck(this, _MatAutocomplete);

          _this3 = _super2.apply(this, arguments);
          _this3._visibleClass = 'mat-autocomplete-visible';
          _this3._hiddenClass = 'mat-autocomplete-hidden';
          return _this3;
        }

        return _MatAutocomplete;
      }(_MatAutocompleteBase2);

      _MatAutocomplete.ɵfac = /*@__PURE__*/function () {
        var ɵMatAutocomplete_BaseFactory;
        return function MatAutocomplete_Factory(t) {
          return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatAutocomplete)))(t || _MatAutocomplete);
        };
      }();

      _MatAutocomplete.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatAutocomplete,
        selectors: [["mat-autocomplete"]],
        contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
          }
        },
        hostAttrs: [1, "mat-autocomplete"],
        inputs: {
          disableRipple: "disableRipple"
        },
        exportAs: ["matAutocomplete"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT,
          useExisting: _MatAutocomplete
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
        template: function MatAutocomplete_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
      _MatAutocomplete.propDecorators = {
        optionGroups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, {
            descendants: true
          }]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocomplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-autocomplete',
            template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            exportAs: 'matAutocomplete',
            inputs: ['disableRipple'],
            host: {
              'class': 'mat-autocomplete'
            },
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT,
              useExisting: _MatAutocomplete
            }],
            styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"]
          }]
        }], null, {
          optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, {
              descendants: true
            }]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Base class containing all of the functionality for `MatAutocompleteOrigin`. */


      var _MatAutocompleteOriginBase2 = function _MatAutocompleteOriginBase2(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, _MatAutocompleteOriginBase2);

        this.elementRef = elementRef;
      };

      _MatAutocompleteOriginBase2.ɵfac = function _MatAutocompleteOriginBase_Factory(t) {
        return new (t || _MatAutocompleteOriginBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _MatAutocompleteOriginBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAutocompleteOriginBase2
      });

      _MatAutocompleteOriginBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOriginBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * Directive applied to an element to make it usable
       * as a connection point for an autocomplete panel.
       */


      var _MatAutocompleteOrigin = /*#__PURE__*/function (_MatAutocompleteOrigi) {
        _inherits(_MatAutocompleteOrigin, _MatAutocompleteOrigi);

        var _super3 = _createSuper(_MatAutocompleteOrigin);

        function _MatAutocompleteOrigin() {
          _classCallCheck(this, _MatAutocompleteOrigin);

          return _super3.apply(this, arguments);
        }

        return _MatAutocompleteOrigin;
      }(_MatAutocompleteOriginBase2);

      _MatAutocompleteOrigin.ɵfac = /*@__PURE__*/function () {
        var ɵMatAutocompleteOrigin_BaseFactory;
        return function MatAutocompleteOrigin_Factory(t) {
          return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatAutocompleteOrigin)))(t || _MatAutocompleteOrigin);
        };
      }();

      _MatAutocompleteOrigin.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAutocompleteOrigin,
        selectors: [["", "matAutocompleteOrigin", ""]],
        exportAs: ["matAutocompleteOrigin"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matAutocompleteOrigin]',
            exportAs: 'matAutocompleteOrigin'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that determines the scroll handling while the autocomplete panel is open. */


      var _MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-scroll-strategy');
      /** @docs-private */


      function _MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var _MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: _MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay],
        useFactory: _MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Provider that allows the autocomplete to register as a ControlValueAccessor.
       * @docs-private
       */

      var _MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MatAutocompleteTrigger;
        }),
        multi: true
      };
      /**
       * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
       * @docs-private
       */

      function _getMatAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
      }
      /** Base class with all of the `MatAutocompleteTrigger` functionality. */


      var _MatAutocompleteTriggerBase2 = /*#__PURE__*/function () {
        function _MatAutocompleteTriggerBase2(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
          var _this4 = this;

          _classCallCheck(this, _MatAutocompleteTriggerBase2);

          this._element = _element;
          this._overlay = _overlay;
          this._viewContainerRef = _viewContainerRef;
          this._zone = _zone;
          this._changeDetectorRef = _changeDetectorRef;
          this._dir = _dir;
          this._formField = _formField;
          this._document = _document;
          this._viewportRuler = _viewportRuler;
          this._defaults = _defaults;
          this._componentDestroyed = false;
          this._autocompleteDisabled = false;
          /** Whether or not the label state is being overridden. */

          this._manuallyFloatingLabel = false;
          /** Subscription to viewport size changes. */

          this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
          /**
           * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
           * closed autocomplete from being reopened if the user switches to another browser tab and then
           * comes back.
           */

          this._canOpenOnNextFocus = true;
          /** Stream of keyboard events that can close the panel. */

          this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
          /**
           * Event handler for when the window is blurred. Needs to be an
           * arrow function in order to preserve the context.
           */

          this._windowBlurHandler = function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this4._canOpenOnNextFocus = _this4._document.activeElement !== _this4._element.nativeElement || _this4.panelOpen;
          };
          /** `View -> model callback called when value changes` */


          this._onChange = function () {};
          /** `View -> model callback called when autocomplete has been touched` */


          this._onTouched = function () {};
          /**
           * Position of the autocomplete panel relative to the trigger element. A position of `auto`
           * will render the panel underneath the trigger if there is enough space for it to fit in
           * the viewport, otherwise the panel will be shown above it. If the position is set to
           * `above` or `below`, the panel will always be shown above or below the trigger. no matter
           * whether it fits completely in the viewport.
           */


          this.position = 'auto';
          /**
           * `autocomplete` attribute to be set on the input element.
           * @docs-private
           */

          this.autocompleteAttribute = 'off';
          this._overlayAttached = false;
          /** Stream of autocomplete option selections. */

          this.optionSelections = (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(function () {
            if (_this4.autocomplete && _this4.autocomplete.options) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge).apply(void 0, _toConsumableArray(_this4.autocomplete.options.map(function (option) {
                return option.onSelectionChange;
              })));
            } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.


            return _this4._zone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(function () {
              return _this4.optionSelections;
            }));
          });
          this._scrollStrategy = scrollStrategy;
        }
        /**
         * Whether the autocomplete is disabled. When disabled, the element will
         * act as a regular input and the user won't be able to open the panel.
         */


        _createClass(_MatAutocompleteTriggerBase2, [{
          key: "autocompleteDisabled",
          get: function get() {
            return this._autocompleteDisabled;
          },
          set: function set(value) {
            this._autocompleteDisabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              this._zone.runOutsideAngular(function () {
                return window.addEventListener('blur', _this5._windowBlurHandler);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['position'] && this._positionStrategy) {
              this._setStrategyPositions(this._positionStrategy);

              if (this.panelOpen) {
                this._overlayRef.updatePosition();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var window = this._getWindow();

            if (typeof window !== 'undefined') {
              window.removeEventListener('blur', this._windowBlurHandler);
            }

            this._viewportSubscription.unsubscribe();

            this._componentDestroyed = true;

            this._destroyPanel();

            this._closeKeyEventStream.complete();
          }
          /** Whether or not the autocomplete panel is open. */

        }, {
          key: "panelOpen",
          get: function get() {
            return this._overlayAttached && this.autocomplete.showPanel;
          }
          /** Opens the autocomplete suggestion panel. */

        }, {
          key: "openPanel",
          value: function openPanel() {
            this._attachOverlay();

            this._floatLabel();
          }
          /** Closes the autocomplete suggestion panel. */

        }, {
          key: "closePanel",
          value: function closePanel() {
            this._resetLabel();

            if (!this._overlayAttached) {
              return;
            }

            if (this.panelOpen) {
              // Only emit if the panel was visible.
              this.autocomplete.closed.emit();
            }

            this.autocomplete._isOpen = this._overlayAttached = false;

            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();

              this._closingActionsSubscription.unsubscribe();
            } // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.


            if (!this._componentDestroyed) {
              // We need to trigger change detection manually, because
              // `fromEvent` doesn't seem to do it at the proper time.
              // This ensures that the label is reset when the
              // user clicks outside.
              this._changeDetectorRef.detectChanges();
            }
          }
          /**
           * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
           * within the viewport.
           */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._overlayAttached) {
              this._overlayRef.updatePosition();
            }
          }
          /**
           * A stream of actions that should close the autocomplete panel, including
           * when an option is selected, on blur, and when TAB is pressed.
           */

        }, {
          key: "panelClosingActions",
          get: function get() {
            var _this6 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function () {
              return _this6._overlayAttached;
            })), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function () {
              return _this6._overlayAttached;
            })) : (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.of)()).pipe( // Normalize the output so we return a consistent type.
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(function (event) {
              return event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionSelectionChange ? event : null;
            }));
          }
          /** The currently active option, coerced to MatOption type. */

        }, {
          key: "activeOption",
          get: function get() {
            if (this.autocomplete && this.autocomplete._keyManager) {
              return this.autocomplete._keyManager.activeItem;
            }

            return null;
          }
          /** Stream of clicks outside of the autocomplete panel. */

        }, {
          key: "_getOutsideClickStream",
          value: function _getOutsideClickStream() {
            var _this7 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)((0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'click'), (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'auxclick'), (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this._document, 'touchend')).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(function (event) {
              // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
              // fall back to check the first element in the path of the click event.
              var clickTarget = _this7._isInsideShadowRoot && event.composedPath ? event.composedPath()[0] : event.target;
              var formField = _this7._formField ? _this7._formField._elementRef.nativeElement : null;
              var customOrigin = _this7.connectedTo ? _this7.connectedTo.elementRef.nativeElement : null;
              return _this7._overlayAttached && clickTarget !== _this7._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!_this7._overlayRef && !_this7._overlayRef.overlayElement.contains(clickTarget);
            }));
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this8 = this;

            Promise.resolve(null).then(function () {
              return _this8._setTriggerValue(value);
            });
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._element.nativeElement.disabled = isDisabled;
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
            // in line with other browsers. By default, pressing escape on IE will cause it to revert
            // the input value to the one that it had on focus, however it won't dispatch any events
            // which means that the model value will be out of sync with the view.

            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ESCAPE && !(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event)) {
              event.preventDefault();
            }

            if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ENTER && this.panelOpen) {
              this.activeOption._selectViaInteraction();

              this._resetActiveItem();

              event.preventDefault();
            } else if (this.autocomplete) {
              var prevActiveItem = this.autocomplete._keyManager.activeItem;
              var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.DOWN_ARROW;

              if (this.panelOpen || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.TAB) {
                this.autocomplete._keyManager.onKeydown(event);
              } else if (isArrowKey && this._canOpen()) {
                this.openPanel();
              }

              if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
              }
            }
          }
        }, {
          key: "_handleInput",
          value: function _handleInput(event) {
            var target = event.target;
            var value = target.value; // Based on `NumberValueAccessor` from forms.

            if (target.type === 'number') {
              value = value == '' ? null : parseFloat(value);
            } // If the input has a placeholder, IE will fire the `input` event on page load,
            // focus and blur, in addition to when the user actually changed the value. To
            // filter out all of the extra events, we save the value on focus and between
            // `input` events, and we check whether it changed.
            // See: https://connect.microsoft.com/IE/feedback/details/885747/


            if (this._previousValue !== value) {
              this._previousValue = value;

              this._onChange(value);

              if (this._canOpen() && this._document.activeElement === event.target) {
                this.openPanel();
              }
            }
          }
        }, {
          key: "_handleFocus",
          value: function _handleFocus() {
            if (!this._canOpenOnNextFocus) {
              this._canOpenOnNextFocus = true;
            } else if (this._canOpen()) {
              this._previousValue = this._element.nativeElement.value;

              this._attachOverlay();

              this._floatLabel(true);
            }
          }
          /**
           * In "auto" mode, the label will animate down as soon as focus is lost.
           * This causes the value to jump when selecting an option with the mouse.
           * This method manually floats the label until the panel can be closed.
           * @param shouldAnimate Whether the label should be animated when it is floated.
           */

        }, {
          key: "_floatLabel",
          value: function _floatLabel() {
            var shouldAnimate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this._formField && this._formField.floatLabel === 'auto') {
              if (shouldAnimate) {
                this._formField._animateAndLockLabel();
              } else {
                this._formField.floatLabel = 'always';
              }

              this._manuallyFloatingLabel = true;
            }
          }
          /** If the label has been manually elevated, return it to its normal state. */

        }, {
          key: "_resetLabel",
          value: function _resetLabel() {
            if (this._manuallyFloatingLabel) {
              this._formField.floatLabel = 'auto';
              this._manuallyFloatingLabel = false;
            }
          }
          /**
           * This method listens to a stream of panel closing actions and resets the
           * stream every time the option list changes.
           */

        }, {
          key: "_subscribeToClosingActions",
          value: function _subscribeToClosingActions() {
            var _this9 = this;

            var firstStable = this._zone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1));

            var optionChanges = this.autocomplete.options.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(function () {
              return _this9._positionStrategy.reapplyLastPosition();
            }), // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.delay)(0)); // When the zone is stable initially, and when the option list changes...

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(function () {
              var wasOpen = _this9.panelOpen;

              _this9._resetActiveItem();

              _this9.autocomplete._setVisibility();

              if (_this9.panelOpen) {
                _this9._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.


                if (wasOpen !== _this9.panelOpen) {
                  _this9.autocomplete.opened.emit();
                }
              }

              return _this9.panelClosingActions;
            }), // when the first closing event occurs...
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)) // set the value, close the panel, and complete.
            .subscribe(function (event) {
              return _this9._setValueAndClose(event);
            });
          }
          /** Destroys the autocomplete suggestion panel. */

        }, {
          key: "_destroyPanel",
          value: function _destroyPanel() {
            if (this._overlayRef) {
              this.closePanel();

              this._overlayRef.dispose();

              this._overlayRef = null;
            }
          }
        }, {
          key: "_setTriggerValue",
          value: function _setTriggerValue(value) {
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.

            var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
            // through change detection.

            if (this._formField) {
              this._formField._control.value = inputValue;
            } else {
              this._element.nativeElement.value = inputValue;
            }

            this._previousValue = inputValue;
          }
          /**
           * This method closes the panel, and if a value is specified, also sets the associated
           * control to that value. It will also mark the control as dirty if this interaction
           * stemmed from the user.
           */

        }, {
          key: "_setValueAndClose",
          value: function _setValueAndClose(event) {
            if (event && event.source) {
              this._clearPreviousSelectedOption(event.source);

              this._setTriggerValue(event.source.value);

              this._onChange(event.source.value);

              this._element.nativeElement.focus();

              this.autocomplete._emitSelectEvent(event.source);
            }

            this.closePanel();
          }
          /**
           * Clear any previous selected option and emit a selection change event for this option
           */

        }, {
          key: "_clearPreviousSelectedOption",
          value: function _clearPreviousSelectedOption(skip) {
            this.autocomplete.options.forEach(function (option) {
              if (option !== skip && option.selected) {
                option.deselect();
              }
            });
          }
        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this10 = this;

            var _a;

            if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getMatAutocompleteMissingPanelError();
            } // We want to resolve this once, as late as possible so that we can be
            // sure that the element has been moved into its final place in the DOM.


            if (this._isInsideShadowRoot == null) {
              this._isInsideShadowRoot = !!(0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getShadowRoot)(this._element.nativeElement);
            }

            var overlayRef = this._overlayRef;

            if (!overlayRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_21__.TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
                id: (_a = this._formField) === null || _a === void 0 ? void 0 : _a.getLabelId()
              });
              overlayRef = this._overlay.create(this._getOverlayConfig());
              this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
              // the overlay event targeting provided by the CDK overlay.

              overlayRef.keydownEvents().subscribe(function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.ESCAPE && !(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.UP_ARROW && (0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__.hasModifierKey)(event, 'altKey')) {
                  _this10._resetActiveItem();

                  _this10._closeKeyEventStream.next(); // We need to stop propagation, otherwise the event will eventually
                  // reach the input itself and cause the overlay to be reopened.


                  event.stopPropagation();
                  event.preventDefault();
                }
              });
              this._viewportSubscription = this._viewportRuler.change().subscribe(function () {
                if (_this10.panelOpen && overlayRef) {
                  overlayRef.updateSize({
                    width: _this10._getPanelWidth()
                  });
                }
              });
            } else {
              // Update the trigger, panel width and direction, in case anything has changed.
              this._positionStrategy.setOrigin(this._getConnectedElement());

              overlayRef.updateSize({
                width: this._getPanelWidth()
              });
            }

            if (overlayRef && !overlayRef.hasAttached()) {
              overlayRef.attach(this._portal);
              this._closingActionsSubscription = this._subscribeToClosingActions();
            }

            var wasOpen = this.panelOpen;

            this.autocomplete._setVisibility();

            this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.

            if (this.panelOpen && wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            var _a;

            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayConfig({
              positionStrategy: this._getOverlayPosition(),
              scrollStrategy: this._scrollStrategy(),
              width: this._getPanelWidth(),
              direction: this._dir,
              panelClass: (_a = this._defaults) === null || _a === void 0 ? void 0 : _a.overlayPanelClass
            });
          }
        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            var strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

            this._setStrategyPositions(strategy);

            this._positionStrategy = strategy;
            return strategy;
          }
          /** Sets the positions on a position strategy based on the directive's input state. */

        }, {
          key: "_setStrategyPositions",
          value: function _setStrategyPositions(positionStrategy) {
            // Note that we provide horizontal fallback positions, even though by default the dropdown
            // width matches the input, because consumers can override the width. See #18854.
            var belowPositions = [{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]; // The overlay edge connected to the trigger should have squared corners, while
            // the opposite end has rounded corners. We apply a CSS class to swap the
            // border-radius based on the overlay position.

            var panelClass = this._aboveClass;
            var abovePositions = [{
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom',
              panelClass: panelClass
            }, {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom',
              panelClass: panelClass
            }];
            var positions;

            if (this.position === 'above') {
              positions = abovePositions;
            } else if (this.position === 'below') {
              positions = belowPositions;
            } else {
              positions = [].concat(belowPositions, abovePositions);
            }

            positionStrategy.withPositions(positions);
          }
        }, {
          key: "_getConnectedElement",
          value: function _getConnectedElement() {
            if (this.connectedTo) {
              return this.connectedTo.elementRef;
            }

            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
          }
        }, {
          key: "_getPanelWidth",
          value: function _getPanelWidth() {
            return this.autocomplete.panelWidth || this._getHostWidth();
          }
          /** Returns the width of the input element, so the panel width can match it. */

        }, {
          key: "_getHostWidth",
          value: function _getHostWidth() {
            return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
          }
          /**
           * Resets the active item to -1 so arrow events will activate the
           * correct options, or to 0 if the consumer opted into it.
           */

        }, {
          key: "_resetActiveItem",
          value: function _resetActiveItem() {
            var autocomplete = this.autocomplete;

            if (autocomplete.autoActiveFirstOption) {
              // Note that we go through `setFirstItemActive`, rather than `setActiveItem(0)`, because
              // the former will find the next enabled option, if the first one is disabled.
              autocomplete._keyManager.setFirstItemActive();
            } else {
              autocomplete._keyManager.setActiveItem(-1);
            }
          }
          /** Determines whether the panel can be opened. */

        }, {
          key: "_canOpen",
          value: function _canOpen() {
            var element = this._element.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var _a;

            return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
          }
          /** Scrolls to a particular option in the list. */

        }, {
          key: "_scrollToOption",
          value: function _scrollToOption(index) {
            // Given that we are not actually focusing active options, we must manually adjust scroll
            // to reveal options below the fold. First, we find the offset of the option from the top
            // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
            // the panel height + the option height, so the active option will be just visible at the
            // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
            // will become the offset. If that offset is visible within the panel already, the scrollTop is
            // not adjusted.
            var autocomplete = this.autocomplete;
            var labelCount = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__._countGroupLabelsBeforeOption)(index, autocomplete.options, autocomplete.optionGroups);

            if (index === 0 && labelCount === 1) {
              // If we've got one group label before the option and we're at the top option,
              // scroll the list to the top. This is better UX than scrolling the list to the
              // top of the option, because it allows the user to read the top group's label.
              autocomplete._setScrollTop(0);
            } else if (autocomplete.panel) {
              var option = autocomplete.options.toArray()[index];

              if (option) {
                var element = option._getHostElement();

                var newScrollPosition = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);

                autocomplete._setScrollTop(newScrollPosition);
              }
            }
          }
        }]);

        return _MatAutocompleteTriggerBase2;
      }();

      _MatAutocompleteTriggerBase2.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) {
        return new (t || _MatAutocompleteTriggerBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8));
      };

      _MatAutocompleteTriggerBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAutocompleteTriggerBase2,
        inputs: {
          position: ["matAutocompletePosition", "position"],
          autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
          autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"],
          autocomplete: ["matAutocomplete", "autocomplete"],
          connectedTo: ["matAutocompleteConnectedTo", "connectedTo"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _MatAutocompleteTriggerBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatAutocompleteTriggerBase2.propDecorators = {
        autocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matAutocomplete']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matAutocompletePosition']
        }],
        connectedTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matAutocompleteConnectedTo']
        }],
        autocompleteAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['autocomplete']
        }],
        autocompleteDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matAutocompleteDisabled']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MAT_FORM_FIELD]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompletePosition']
          }],
          autocompleteAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['autocomplete']
          }],
          autocompleteDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteDisabled']
          }],
          autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocomplete']
          }],
          connectedTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matAutocompleteConnectedTo']
          }]
        });
      })();

      var _MatAutocompleteTrigger = /*#__PURE__*/function (_MatAutocompleteTrigg) {
        _inherits(_MatAutocompleteTrigger, _MatAutocompleteTrigg);

        var _super4 = _createSuper(_MatAutocompleteTrigger);

        function _MatAutocompleteTrigger() {
          var _this11;

          _classCallCheck(this, _MatAutocompleteTrigger);

          _this11 = _super4.apply(this, arguments);
          _this11._aboveClass = 'mat-autocomplete-panel-above';
          return _this11;
        }

        return _MatAutocompleteTrigger;
      }(_MatAutocompleteTriggerBase2);

      _MatAutocompleteTrigger.ɵfac = /*@__PURE__*/function () {
        var ɵMatAutocompleteTrigger_BaseFactory;
        return function MatAutocompleteTrigger_Factory(t) {
          return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatAutocompleteTrigger)))(t || _MatAutocompleteTrigger);
        };
      }();

      _MatAutocompleteTrigger.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAutocompleteTrigger,
        selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
        hostAttrs: [1, "mat-autocomplete-trigger"],
        hostVars: 7,
        hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
              return ctx._handleFocus();
            })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
              return ctx._onTouched();
            })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
              return ctx._handleInput($event);
            })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", !ctx.autocompleteDisabled);
          }
        },
        exportAs: ["matAutocompleteTrigger"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "input[matAutocomplete], textarea[matAutocomplete]",
            host: {
              'class': 'mat-autocomplete-trigger',
              '[attr.autocomplete]': 'autocompleteAttribute',
              '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
              '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
              '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
              '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
              '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
              '[attr.aria-haspopup]': '!autocompleteDisabled',
              // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
              // a little earlier. This avoids issues where IE delays the focusing of the input.
              '(focusin)': '_handleFocus()',
              '(blur)': '_onTouched()',
              '(input)': '_handleInput($event)',
              '(keydown)': '_handleKeydown($event)'
            },
            exportAs: 'matAutocompleteTrigger',
            providers: [_MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatAutocompleteModule = function _MatAutocompleteModule() {
        _classCallCheck(this, _MatAutocompleteModule);
      };

      _MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) {
        return new (t || _MatAutocompleteModule)();
      };

      _MatAutocompleteModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatAutocompleteModule
      });
      _MatAutocompleteModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
            exports: [_MatAutocomplete, _MatAutocompleteTrigger, _MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
            declarations: [_MatAutocomplete, _MatAutocompleteTrigger, _MatAutocompleteOrigin],
            providers: [_MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatAutocompleteModule, {
          declarations: function declarations() {
            return [_MatAutocomplete, _MatAutocompleteTrigger, _MatAutocompleteOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule];
          },
          exports: function exports() {
            return [_MatAutocomplete, _MatAutocompleteTrigger, _MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=autocomplete.js.map

      /***/

    },

    /***/
    65792:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "delay": function delay() {
          return (
            /* binding */
            _delay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isDate */
      39989);
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Subscriber */
      77393);
      /* harmony import */


      var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Notification */
      23098);

      function _delay(delay) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        var absoluteDelay = (0, _util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
        var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
        return function (source) {
          return source.lift(new DelayOperator(delayFor, scheduler));
        };
      }

      var DelayOperator = /*#__PURE__*/function () {
        function DelayOperator(delay, scheduler) {
          _classCallCheck(this, DelayOperator);

          this.delay = delay;
          this.scheduler = scheduler;
        }

        _createClass(DelayOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
          }
        }]);

        return DelayOperator;
      }();

      var DelaySubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(DelaySubscriber, _Subscriber__WEBPACK_);

        var _super5 = _createSuper(DelaySubscriber);

        function DelaySubscriber(destination, delay, scheduler) {
          var _this12;

          _classCallCheck(this, DelaySubscriber);

          _this12 = _super5.call(this, destination);
          _this12.delay = delay;
          _this12.scheduler = scheduler;
          _this12.queue = [];
          _this12.active = false;
          _this12.errored = false;
          return _this12;
        }

        _createClass(DelaySubscriber, [{
          key: "_schedule",
          value: function _schedule(scheduler) {
            this.active = true;
            var destination = this.destination;
            destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
              source: this,
              destination: this.destination,
              scheduler: scheduler
            }));
          }
        }, {
          key: "scheduleNotification",
          value: function scheduleNotification(notification) {
            if (this.errored === true) {
              return;
            }

            var scheduler = this.scheduler;
            var message = new DelayMessage(scheduler.now() + this.delay, notification);
            this.queue.push(message);

            if (this.active === false) {
              this._schedule(scheduler);
            }
          }
        }, {
          key: "_next",
          value: function _next(value) {
            this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
          }
        }, {
          key: "_error",
          value: function _error(err) {
            this.errored = true;
            this.queue = [];
            this.destination.error(err);
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
            this.unsubscribe();
          }
        }], [{
          key: "dispatch",
          value: function dispatch(state) {
            var source = state.source;
            var queue = source.queue;
            var scheduler = state.scheduler;
            var destination = state.destination;

            while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
              queue.shift().notification.observe(destination);
            }

            if (queue.length > 0) {
              var delay = Math.max(0, queue[0].time - scheduler.now());
              this.schedule(state, delay);
            } else {
              this.unsubscribe();
              source.active = false;
            }
          }
        }]);

        return DelaySubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber);

      var DelayMessage = function DelayMessage(time, notification) {
        _classCallCheck(this, DelayMessage);

        this.time = time;
        this.notification = notification;
      }; //# sourceMappingURL=delay.js.map

      /***/

    },

    /***/
    39989:
    /*!************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isDate": function isDate() {
          return (
            /* binding */
            _isDate
          );
        }
        /* harmony export */

      });

      function _isDate(value) {
        return value instanceof Date && !isNaN(+value);
      } //# sourceMappingURL=isDate.js.map

      /***/

    },

    /***/
    11910:
    /*!*****************************************************************!*\
      !*** ./src/app/components/add-patient/add-patient.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddPatientComponent": function AddPatientComponent() {
          return (
            /* binding */
            _AddPatientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      function AddPatientComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter patient's unique ID ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddPatientComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter patient's name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _AddPatientComponent = /*#__PURE__*/function () {
        function _AddPatientComponent(dialogRef, data, router) {
          _classCallCheck(this, _AddPatientComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.router = router;
        }

        _createClass(_AddPatientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addPatientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
              patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
              patientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.data.patientId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
            });
          }
        }, {
          key: "addPatient",
          value: function addPatient() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.addPatientForm.valid) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 3;
                      return this.closeModal();

                    case 3:
                      this.router.navigate(['treatments'], {
                        queryParams: {
                          patientId: this.addPatientForm.value.patientId
                        }
                      }).then();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.dialogRef.close();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return _AddPatientComponent;
      }();

      _AddPatientComponent.ɵfac = function AddPatientComponent_Factory(t) {
        return new (t || _AddPatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _AddPatientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AddPatientComponent,
        selectors: [["app-add-patient"]],
        decls: 18,
        vars: 3,
        consts: [["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "ion-justify-content-center", "h-100", "d-flex"], [1, "m-auto", "card-dimensions"], [1, "single-line-container", 2, "padding", "2rem", 3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "Patient ID", "type", "text", "required", "", "formControlName", "patientId"], [4, "ngIf"], ["matInput", "", "placeholder", "Name", "type", "text", "required", "", "formControlName", "patientName"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "mt-4", 2, "margin-bottom", "1.5em"]],
        template: function AddPatientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add patient");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPatientComponent_Template_ion_button_click_4_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPatientComponent_Template_form_ngSubmit_9_listener() {
              return ctx.addPatient();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddPatientComponent_mat_error_12_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddPatientComponent_mat_error_15_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addPatientForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addPatientForm.get("patientId").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addPatientForm.get("patientName").hasError("required"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcGF0aWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    99366:
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageRoutingModule": function DashboardPageRoutingModule() {
          return (
            /* binding */
            _DashboardPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      76446);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
      }];

      var _DashboardPageRoutingModule = function _DashboardPageRoutingModule() {
        _classCallCheck(this, _DashboardPageRoutingModule);
      };

      _DashboardPageRoutingModule.ɵfac = function DashboardPageRoutingModule_Factory(t) {
        return new (t || _DashboardPageRoutingModule)();
      };

      _DashboardPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DashboardPageRoutingModule
      });
      _DashboardPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DashboardPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    71659:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageModule": function DashboardPageModule() {
          return (
            /* binding */
            _DashboardPageModule
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      99366);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _full_page_layout_full_page_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../full-page-layout/full-page-layout.module */
      29806);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _components_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/add-patient/add-patient.component */
      11910);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard.page */
      76446);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DashboardPageModule = function _DashboardPageModule() {
        _classCallCheck(this, _DashboardPageModule);
      };

      _DashboardPageModule.ɵfac = function DashboardPageModule_Factory(t) {
        return new (t || _DashboardPageModule)();
      };

      _DashboardPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _DashboardPageModule
      });
      _DashboardPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: {
            hasBackdrop: true
          }
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(), _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _full_page_layout_full_page_layout_module__WEBPACK_IMPORTED_MODULE_1__.FullPageLayoutModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_DashboardPageModule, {
          declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_4__.DashboardPage, _components_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_3__.AddPatientComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _full_page_layout_full_page_layout_module__WEBPACK_IMPORTED_MODULE_1__.FullPageLayoutModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule]
        });
      })();
      /***/

    },

    /***/
    76446:
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPage": function DashboardPage() {
          return (
            /* binding */
            _DashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _shared_appText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/appText */
      42213);
      /* harmony import */


      var _components_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/add-patient/add-patient.component */
      11910);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/header/header.component */
      43646);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      93738);

      function DashboardPage_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r3, " ");
        }
      }

      function DashboardPage_ion_col_15_h3_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, card_r4.value, "INR"), " ");
        }
      }

      function DashboardPage_ion_col_15_h3_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, card_r4.value), " ");
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function DashboardPage_ion_col_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DashboardPage_ion_col_15_h3_3_Template, 3, 4, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DashboardPage_ion_col_15_h3_4_Template, 3, 3, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "View More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("size", card_r4.colClasses.xs)("sizeSm", card_r4.colClasses.sm)("sizeMd", card_r4.colClasses.md)("sizeLg", card_r4.colClasses.lg)("sizeXl", card_r4.colClasses.xl);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", card_r4.cardColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r4.type === "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r4.type === "value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", card_r4.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", card_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, card_r4.viewMoreLink));
        }
      }

      var _DashboardPage = /*#__PURE__*/function () {
        function _DashboardPage(router, storage, dialog) {
          _classCallCheck(this, _DashboardPage);

          this.router = router;
          this.storage = storage;
          this.dialog = dialog;
          this.cards = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl();
          this.patients = [{
            id: 'FSFDS2242EW',
            name: 'Patient 1'
          }, {
            id: 'DSFJD7642FS',
            name: 'Patient 2'
          }, {
            id: 'KDSFJ7322FG',
            name: 'Patient 3'
          }, {
            id: 'PYTUT6552HG',
            name: 'Patient 4'
          }];
        }

        _createClass(_DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.initializeCards().then();
            this.filteredPatients = this.myControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (value) {
              return _this13._filter(value);
            }));
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            var results = this.patients.filter(function (option) {
              return option.id.toLowerCase().includes(filterValue);
            }).map(function (searchedPatient) {
              return searchedPatient.id;
            });

            if (results.length < 1) {
              results = [_shared_appText__WEBPACK_IMPORTED_MODULE_0__.APP_TEXT.patientQuestion + '"' + value + '" ?'];
            }

            return results;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.initializeCards().then();
          }
        }, {
          key: "initializeCards",
          value: function initializeCards() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this14 = this;

              var hospitals;
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
                      _context4.t3 = _context4.t0;
                      _context4.t4 = {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        lg: 6,
                        xl: 6
                      };
                      _context4.t5 = {
                        value: _context4.t3,
                        cardColor: 'bg-green-200',
                        colClasses: _context4.t4,
                        type: 'currency',
                        title: 'Fees this month',
                        icon: 'fa fa-rupee-sign',
                        viewMoreLink: '/dashboard'
                      };
                      _context4.t7 = parseInt;
                      _context4.next = 13;
                      return this.storage.get('total_procedures');

                    case 13:
                      _context4.t8 = _context4.sent;
                      _context4.t6 = (0, _context4.t7)(_context4.t8, 10);

                      if (_context4.t6) {
                        _context4.next = 17;
                        break;
                      }

                      _context4.t6 = 0;

                    case 17:
                      _context4.t9 = _context4.t6;
                      _context4.t10 = {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        lg: 6,
                        xl: 6
                      };
                      _context4.t11 = {
                        value: _context4.t9,
                        cardColor: 'bg-blue-200',
                        colClasses: _context4.t10,
                        type: 'value',
                        title: 'Total Procedures',
                        icon: 'fa fa-stethoscope',
                        viewMoreLink: '/dashboard'
                      };
                      this.cards = [_context4.t5, _context4.t11];
                      _context4.next = 23;
                      return this.storage.get('hospitals');

                    case 23:
                      hospitals = _context4.sent;
                      _context4.next = 26;
                      return hospitals.forEach(function (hospital) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var hospitalCard, hospitalValue;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.t1 = parseInt;
                                  _context3.next = 3;
                                  return this.storage.get('total_fees_this_month');

                                case 3:
                                  _context3.t2 = _context3.sent;
                                  _context3.t0 = (0, _context3.t1)(_context3.t2, 10);

                                  if (_context3.t0) {
                                    _context3.next = 7;
                                    break;
                                  }

                                  _context3.t0 = 0;

                                case 7:
                                  _context3.t3 = _context3.t0;
                                  _context3.t4 = {
                                    xs: 6,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    xl: 3
                                  };
                                  hospitalCard = {
                                    value: _context3.t3,
                                    cardColor: 'bg-cyan-200',
                                    colClasses: _context3.t4,
                                    type: 'currency',
                                    title: 'Hospital 1',
                                    icon: 'fa fa-hospital-symbol',
                                    viewMoreLink: '/dashboard'
                                  };
                                  _context3.next = 12;
                                  return this.storage.get(hospital);

                                case 12:
                                  hospitalValue = _context3.sent;
                                  hospitalCard.value = parseInt(hospitalValue, 10) || 0;
                                  hospitalCard.title = hospital;
                                  this.cards.push(hospitalCard);

                                case 16:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 26:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "optionSelected",
          value: function optionSelected(option) {
            if (option.value.includes(_shared_appText__WEBPACK_IMPORTED_MODULE_0__.APP_TEXT.patientQuestion)) {
              this.addPatient(option.value.split('"')[1]);
            }
          }
        }, {
          key: "addPatient",
          value: function addPatient(newName) {
            var dialogRef = this.dialog.open(_components_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_1__.AddPatientComponent, {
              data: {
                patientId: newName
              }
            });
          }
        }]);

        return _DashboardPage;
      }();

      _DashboardPage.ɵfac = function DashboardPage_Factory(t) {
        return new (t || _DashboardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
      };

      _DashboardPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DashboardPage,
        selectors: [["app-dashboard"]],
        decls: 19,
        vars: 8,
        consts: [[3, "pageName"], [1, "example-form"], [1, "example-full-width"], ["type", "text", "placeholder", "Patient ID", "aria-label", "Search patient", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "size", "sizeSm", "sizeMd", "sizeLg", "sizeXl", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "secondary"], ["ios", "add-outline", "md", "add-sharp", 3, "routerLink"], [3, "value"], [3, "size", "sizeSm", "sizeMd", "sizeLg", "sizeXl"], [1, "card-box", "m-0", 3, "ngClass"], [1, "inner"], [4, "ngIf"], [1, "icon"], ["aria-hidden", "true", 3, "ngClass"], [1, "card-box-footer", 3, "routerLink"], [1, "fa", "fa-arrow-circle-right"]],
        template: function DashboardPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Search Patient");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-autocomplete", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function DashboardPage_Template_mat_autocomplete_optionSelected_10_listener($event) {
              return ctx.optionSelected($event.option);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DashboardPage_mat_option_12_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DashboardPage_ion_col_15_Template, 12, 13, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-fab", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-fab-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageName", "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 6, ctx.filteredPatients));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cards);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/add-procedure");
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe],
        styles: [".card-box[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  padding: 20px 10px 40px;\n  margin: 20px 0px;\n}\n\n.card-box[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #f1f1f1;\n}\n\n.card-box[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 100px;\n  transition: 1s;\n  -webkit-transition: 1s;\n}\n\n.card-box[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  padding: 5px 10px 0 10px;\n}\n\n.card-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  font-weight: bold;\n  margin: 0 0 8px 0;\n  white-space: nowrap;\n  padding: 0;\n  text-align: left;\n}\n\n.card-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.card-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: auto;\n  bottom: 5px;\n  right: 5px;\n  z-index: 0;\n  font-size: 72px;\n  color: rgba(0, 0, 0, 0.15);\n}\n\n.card-box[_ngcontent-%COMP%]   .card-box-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  text-align: center;\n  padding: 3px 0;\n  color: rgba(255, 255, 255, 0.8);\n  background: rgba(0, 0, 0, 0.1);\n  width: 100%;\n  text-decoration: none;\n}\n\n.card-box[_ngcontent-%COMP%]:hover   .card-box-footer[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSx3QkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVFGOztBQU5BO0VBQ0UsOEJBQUE7QUFTRjs7QUFQQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0FBVUYiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTBweCA0MHB4O1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmNhcmQtYm94OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2YxZjFmMTtcbn1cbi5jYXJkLWJveDpob3ZlciAuaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXM7XG59XG4uY2FyZC1ib3ggLmlubmVyIHtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAxMHB4O1xufVxuLmNhcmQtYm94IGgzIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2FyZC1ib3ggcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jYXJkLWJveCAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgei1pbmRleDogMDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5jYXJkLWJveCAuY2FyZC1ib3gtZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2FyZC1ib3g6aG92ZXIgLmNhcmQtYm94LWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    42213:
    /*!***********************************!*\
      !*** ./src/app/shared/appText.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "APP_TEXT": function APP_TEXT() {
          return (
            /* binding */
            _APP_TEXT
          );
        }
        /* harmony export */

      });

      var _APP_TEXT = {
        patientQuestion: 'Would you like to add new patient: '
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts-es5.js.map