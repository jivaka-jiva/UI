(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkui"] = self["webpackChunkui"] || []).push([["default-src_app_components_components_module_ts"], {
    /***/
    97091:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/accordion.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CdkAccordion": function CdkAccordion() {
          return (
            /* binding */
            _CdkAccordion
          );
        },

        /* harmony export */
        "CdkAccordionItem": function CdkAccordionItem() {
          return (
            /* binding */
            _CdkAccordionItem
          );
        },

        /* harmony export */
        "CdkAccordionModule": function CdkAccordionModule() {
          return (
            /* binding */
            _CdkAccordionModule
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_accordion_accordion_a": function ɵangular_material_src_cdk_accordion_accordion_a() {
          return (
            /* binding */
            CDK_ACCORDION
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      10826);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each accordion. */


      var nextId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `CdkAccordion`. It serves
       * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
      /**
       * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
       */

      var _CdkAccordion = /*#__PURE__*/function () {
        function _CdkAccordion() {
          _classCallCheck(this, _CdkAccordion);

          /** Emits when the state of the accordion changes */
          this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Stream that emits true/false when openAll/closeAll is triggered. */

          this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** A readonly id value to use for unique selection coordination. */

          this.id = "cdk-accordion-".concat(nextId$1++);
          this._multi = false;
        }
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


        _createClass(_CdkAccordion, [{
          key: "multi",
          get: function get() {
            return this._multi;
          },
          set: function set(multi) {
            this._multi = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(multi);
          }
          /** Opens all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "openAll",
          value: function openAll() {
            if (this._multi) {
              this._openCloseAllActions.next(true);
            }
          }
          /** Closes all enabled accordion items in an accordion where multi is enabled. */

        }, {
          key: "closeAll",
          value: function closeAll() {
            this._openCloseAllActions.next(false);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._stateChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();

            this._openCloseAllActions.complete();
          }
        }]);

        return _CdkAccordion;
      }();

      _CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
        return new (t || _CdkAccordion)();
      };

      _CdkAccordion.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
          multi: "multi"
        },
        exportAs: ["cdkAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: CDK_ACCORDION,
          useExisting: _CdkAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _CdkAccordion.propDecorators = {
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-accordion, [cdkAccordion]',
            exportAs: 'cdkAccordion',
            providers: [{
              provide: CDK_ACCORDION,
              useExisting: _CdkAccordion
            }]
          }]
        }], function () {
          return [];
        }, {
          multi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
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

      /** Used to generate unique ID for each accordion item. */


      var nextId = 0;
      var ɵ0 = undefined;
      /**
       * An basic directive expected to be extended and decorated as a component.  Sets up all
       * events and attributes needed to be managed by a CdkAccordion parent.
       */

      var _CdkAccordionItem = /*#__PURE__*/function () {
        function _CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
          var _this = this;

          _classCallCheck(this, _CdkAccordionItem);

          this.accordion = accordion;
          this._changeDetectorRef = _changeDetectorRef;
          this._expansionDispatcher = _expansionDispatcher;
          /** Subscription to openAll/closeAll events. */

          this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
          /** Event emitted every time the AccordionItem is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted every time the AccordionItem is opened. */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Event emitted when the AccordionItem is destroyed. */

          this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Emits whenever the expanded state of the accordion changes.
           * Primarily used to facilitate two-way binding.
           * @docs-private
           */

          this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** The unique AccordionItem id. */

          this.id = "cdk-accordion-child-".concat(nextId++);
          this._expanded = false;
          this._disabled = false;
          /** Unregister function for _expansionDispatcher. */

          this._removeUniqueSelectionListener = function () {};

          this._removeUniqueSelectionListener = _expansionDispatcher.listen(function (id, accordionId) {
            if (_this.accordion && !_this.accordion.multi && _this.accordion.id === accordionId && _this.id !== id) {
              _this.expanded = false;
            }
          }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

          if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
          }
        }
        /** Whether the AccordionItem is expanded. */


        _createClass(_CdkAccordionItem, [{
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(expanded) {
            expanded = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(expanded); // Only emit events and update the internal value if the value changes.

            if (this._expanded !== expanded) {
              this._expanded = expanded;
              this.expandedChange.emit(expanded);

              if (expanded) {
                this.opened.emit();
                /**
                 * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                 * the name value is the id of the accordion.
                 */

                var accordionId = this.accordion ? this.accordion.id : this.id;

                this._expansionDispatcher.notify(this.id, accordionId);
              } else {
                this.closed.emit();
              } // Ensures that the animation will run when the value is set outside of an `@Input`.
              // This includes cases like the open, close and toggle methods.


              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the AccordionItem is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(disabled) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(disabled);
          }
          /** Emits an event for the accordion item being destroyed. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.opened.complete();
            this.closed.complete();
            this.destroyed.emit();
            this.destroyed.complete();

            this._removeUniqueSelectionListener();

            this._openCloseAllSubscription.unsubscribe();
          }
          /** Toggles the expanded state of the accordion item. */

        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.disabled) {
              this.expanded = !this.expanded;
            }
          }
          /** Sets the expanded state of the accordion item to false. */

        }, {
          key: "close",
          value: function close() {
            if (!this.disabled) {
              this.expanded = false;
            }
          }
          /** Sets the expanded state of the accordion item to true. */

        }, {
          key: "open",
          value: function open() {
            if (!this.disabled) {
              this.expanded = true;
            }
          }
        }, {
          key: "_subscribeToOpenCloseAllActions",
          value: function _subscribeToOpenCloseAllActions() {
            var _this2 = this;

            return this.accordion._openCloseAllActions.subscribe(function (expanded) {
              // Only change expanded state if item is enabled
              if (!_this2.disabled) {
                _this2.expanded = expanded;
              }
            });
          }
        }]);

        return _CdkAccordionItem;
      }();

      _CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
        return new (t || _CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
      };

      _CdkAccordionItem.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
          expanded: "expanded",
          disabled: "disabled"
        },
        outputs: {
          closed: "closed",
          opened: "opened",
          destroyed: "destroyed",
          expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: ɵ0
        }])]
      });

      _CdkAccordionItem.ctorParameters = function () {
        return [{
          type: _CdkAccordion,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [CDK_ACCORDION]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
        }];
      };

      _CdkAccordionItem.propDecorators = {
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        destroyed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        expandedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAccordionItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-accordion-item, [cdkAccordionItem]',
            exportAs: 'cdkAccordionItem',
            providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
            // registering to the same accordion.
            {
              provide: CDK_ACCORDION,
              useValue: ɵ0
            }]
          }]
        }], function () {
          return [{
            type: _CdkAccordion,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [CDK_ACCORDION]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
          }];
        }, {
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          expandedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
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


      var _CdkAccordionModule = function _CdkAccordionModule() {
        _classCallCheck(this, _CdkAccordionModule);
      };

      _CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(t) {
        return new (t || _CdkAccordionModule)();
      };

      _CdkAccordionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CdkAccordionModule
      });
      _CdkAccordionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAccordionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_CdkAccordion, _CdkAccordionItem],
            declarations: [_CdkAccordion, _CdkAccordionItem]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CdkAccordionModule, {
          declarations: [_CdkAccordion, _CdkAccordionItem],
          exports: [_CdkAccordion, _CdkAccordionItem]
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
      //# sourceMappingURL=accordion.js.map

      /***/

    },

    /***/
    65072:
    /*!*******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BreakpointObserver": function BreakpointObserver() {
          return (
            /* binding */
            _BreakpointObserver
          );
        },

        /* harmony export */
        "Breakpoints": function Breakpoints() {
          return (
            /* binding */
            _Breakpoints
          );
        },

        /* harmony export */
        "LayoutModule": function LayoutModule() {
          return (
            /* binding */
            _LayoutModule
          );
        },

        /* harmony export */
        "MediaMatcher": function MediaMatcher() {
          return (
            /* binding */
            _MediaMatcher
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      9112);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      29923);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      13653);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _LayoutModule = function _LayoutModule() {
        _classCallCheck(this, _LayoutModule);
      };

      _LayoutModule.ɵfac = function LayoutModule_Factory(t) {
        return new (t || _LayoutModule)();
      };

      _LayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _LayoutModule
      });
      _LayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LayoutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{}]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Global registry for all dynamically-created, injected media queries. */


      var mediaQueriesForWebkitCompatibility = new Set();
      /** Style tag that holds all of the dynamically-created media queries. */

      var mediaQueryStyleNode;
      /** A utility for calling matchMedia queries. */

      var _MediaMatcher = /*#__PURE__*/function () {
        function _MediaMatcher(_platform) {
          _classCallCheck(this, _MediaMatcher);

          this._platform = _platform;
          this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window) : noopMatchMedia;
        }
        /**
         * Evaluates the given media query and returns the native MediaQueryList from which results
         * can be retrieved.
         * Confirms the layout engine will trigger for the selector query provided and returns the
         * MediaQueryList for the query provided.
         */


        _createClass(_MediaMatcher, [{
          key: "matchMedia",
          value: function matchMedia(query) {
            if (this._platform.WEBKIT) {
              createEmptyStyleRule(query);
            }

            return this._matchMedia(query);
          }
        }]);

        return _MediaMatcher;
      }();

      _MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
        return new (t || _MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
      };

      _MediaMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MediaMatcher_Factory() {
          return new _MediaMatcher(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
        },
        token: _MediaMatcher,
        providedIn: "root"
      });

      _MediaMatcher.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MediaMatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }];
        }, null);
      })();
      /**
       * For Webkit engines that only trigger the MediaQueryListListener when
       * there is at least one CSS selector for the respective media query.
       */


      function createEmptyStyleRule(query) {
        if (mediaQueriesForWebkitCompatibility.has(query)) {
          return;
        }

        try {
          if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
          }

          if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
            mediaQueriesForWebkitCompatibility.add(query);
          }
        } catch (e) {
          console.error(e);
        }
      }
      /** No-op matchMedia replacement for non-browser platforms. */


      function noopMatchMedia(query) {
        // Use `as any` here to avoid adding additional necessary properties for
        // the noop matcher.
        return {
          matches: query === 'all' || query === '',
          media: query,
          addListener: function addListener() {},
          removeListener: function removeListener() {}
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Utility for checking the matching state of @media queries. */


      var _BreakpointObserver = /*#__PURE__*/function () {
        function _BreakpointObserver(_mediaMatcher, _zone) {
          _classCallCheck(this, _BreakpointObserver);

          this._mediaMatcher = _mediaMatcher;
          this._zone = _zone;
          /**  A map of all media queries currently being listened for. */

          this._queries = new Map();
          /** A subject for all other observables to takeUntil based on. */

          this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }
        /** Completes the active subject, signalling to all other observables to complete. */


        _createClass(_BreakpointObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroySubject.next();

            this._destroySubject.complete();
          }
          /**
           * Whether one or more media queries match the current viewport size.
           * @param value One or more media queries to check.
           * @returns Whether any of the media queries match.
           */

        }, {
          key: "isMatched",
          value: function isMatched(value) {
            var _this3 = this;

            var queries = splitQueries((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
            return queries.some(function (mediaQuery) {
              return _this3._registerQuery(mediaQuery).mql.matches;
            });
          }
          /**
           * Gets an observable of results for the given queries that will emit new results for any changes
           * in matching of the given queries.
           * @param value One or more media queries to check.
           * @returns A stream of matches for the given queries.
           */

        }, {
          key: "observe",
          value: function observe(value) {
            var _this4 = this;

            var queries = splitQueries((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
            var observables = queries.map(function (query) {
              return _this4._registerQuery(query).observable;
            });
            var stateObservable = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

            stateObservable = (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
            return stateObservable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (breakpointStates) {
              var response = {
                matches: false,
                breakpoints: {}
              };
              breakpointStates.forEach(function (_ref) {
                var matches = _ref.matches,
                    query = _ref.query;
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
              });
              return response;
            }));
          }
          /** Registers a specific query to be listened for. */

        }, {
          key: "_registerQuery",
          value: function _registerQuery(query) {
            var _this5 = this;

            // Only set up a new MediaQueryList if it is not already being listened for.
            if (this._queries.has(query)) {
              return this._queries.get(query);
            }

            var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.


            var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(function (observer) {
              // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
              // back into the zone because matchMedia is only included in Zone.js by loading the
              // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
              // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
              // patches it.
              var handler = function handler(e) {
                return _this5._zone.run(function () {
                  return observer.next(e);
                });
              };

              mql.addListener(handler);
              return function () {
                mql.removeListener(handler);
              };
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref2) {
              var matches = _ref2.matches;
              return {
                query: query,
                matches: matches
              };
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject)); // Add the MediaQueryList to the set of queries.

            var output = {
              observable: queryObservable,
              mql: mql
            };

            this._queries.set(query, output);

            return output;
          }
        }]);

        return _BreakpointObserver;
      }();

      _BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
        return new (t || _BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _BreakpointObserver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function BreakpointObserver_Factory() {
          return new _BreakpointObserver(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
        },
        token: _BreakpointObserver,
        providedIn: "root"
      });

      _BreakpointObserver.ctorParameters = function () {
        return [{
          type: _MediaMatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_BreakpointObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _MediaMatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, null);
      })();
      /**
       * Split each query string into separate query strings if two queries are provided as comma
       * separated.
       */


      function splitQueries(queries) {
        return queries.map(function (query) {
          return query.split(',');
        }).reduce(function (a1, a2) {
          return a1.concat(a2);
        }).map(function (query) {
          return query.trim();
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // PascalCase is being used as Breakpoints is used like an enum.
      // tslint:disable-next-line:variable-name


      var _Breakpoints = {
        XSmall: '(max-width: 599.98px)',
        Small: '(min-width: 600px) and (max-width: 959.98px)',
        Medium: '(min-width: 960px) and (max-width: 1279.98px)',
        Large: '(min-width: 1280px) and (max-width: 1919.98px)',
        XLarge: '(min-width: 1920px)',
        Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
        Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
        Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
        HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
        TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
        WebPortrait: '(min-width: 840px) and (orientation: portrait)',
        HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
        TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
        WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
      };
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
      //# sourceMappingURL=layout.js.map

      /***/
    },

    /***/
    20552:
    /*!******************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataSource": function DataSource() {
          return (
            /* reexport safe */
            _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource
          );
        },

        /* harmony export */
        "BaseCdkCell": function BaseCdkCell() {
          return (
            /* binding */
            _BaseCdkCell
          );
        },

        /* harmony export */
        "BaseRowDef": function BaseRowDef() {
          return (
            /* binding */
            _BaseRowDef
          );
        },

        /* harmony export */
        "CDK_ROW_TEMPLATE": function CDK_ROW_TEMPLATE() {
          return (
            /* binding */
            _CDK_ROW_TEMPLATE
          );
        },

        /* harmony export */
        "CDK_TABLE": function CDK_TABLE() {
          return (
            /* binding */
            _CDK_TABLE
          );
        },

        /* harmony export */
        "CDK_TABLE_TEMPLATE": function CDK_TABLE_TEMPLATE() {
          return (
            /* binding */
            _CDK_TABLE_TEMPLATE
          );
        },

        /* harmony export */
        "CdkCell": function CdkCell() {
          return (
            /* binding */
            _CdkCell
          );
        },

        /* harmony export */
        "CdkCellDef": function CdkCellDef() {
          return (
            /* binding */
            _CdkCellDef
          );
        },

        /* harmony export */
        "CdkCellOutlet": function CdkCellOutlet() {
          return (
            /* binding */
            _CdkCellOutlet
          );
        },

        /* harmony export */
        "CdkColumnDef": function CdkColumnDef() {
          return (
            /* binding */
            _CdkColumnDef
          );
        },

        /* harmony export */
        "CdkFooterCell": function CdkFooterCell() {
          return (
            /* binding */
            _CdkFooterCell
          );
        },

        /* harmony export */
        "CdkFooterCellDef": function CdkFooterCellDef() {
          return (
            /* binding */
            _CdkFooterCellDef
          );
        },

        /* harmony export */
        "CdkFooterRow": function CdkFooterRow() {
          return (
            /* binding */
            _CdkFooterRow
          );
        },

        /* harmony export */
        "CdkFooterRowDef": function CdkFooterRowDef() {
          return (
            /* binding */
            _CdkFooterRowDef
          );
        },

        /* harmony export */
        "CdkHeaderCell": function CdkHeaderCell() {
          return (
            /* binding */
            _CdkHeaderCell
          );
        },

        /* harmony export */
        "CdkHeaderCellDef": function CdkHeaderCellDef() {
          return (
            /* binding */
            _CdkHeaderCellDef
          );
        },

        /* harmony export */
        "CdkHeaderRow": function CdkHeaderRow() {
          return (
            /* binding */
            _CdkHeaderRow
          );
        },

        /* harmony export */
        "CdkHeaderRowDef": function CdkHeaderRowDef() {
          return (
            /* binding */
            _CdkHeaderRowDef
          );
        },

        /* harmony export */
        "CdkNoDataRow": function CdkNoDataRow() {
          return (
            /* binding */
            _CdkNoDataRow
          );
        },

        /* harmony export */
        "CdkRecycleRows": function CdkRecycleRows() {
          return (
            /* binding */
            _CdkRecycleRows
          );
        },

        /* harmony export */
        "CdkRow": function CdkRow() {
          return (
            /* binding */
            _CdkRow
          );
        },

        /* harmony export */
        "CdkRowDef": function CdkRowDef() {
          return (
            /* binding */
            _CdkRowDef
          );
        },

        /* harmony export */
        "CdkTable": function CdkTable() {
          return (
            /* binding */
            _CdkTable
          );
        },

        /* harmony export */
        "CdkTableModule": function CdkTableModule() {
          return (
            /* binding */
            _CdkTableModule
          );
        },

        /* harmony export */
        "CdkTextColumn": function CdkTextColumn() {
          return (
            /* binding */
            _CdkTextColumn
          );
        },

        /* harmony export */
        "DataRowOutlet": function DataRowOutlet() {
          return (
            /* binding */
            _DataRowOutlet
          );
        },

        /* harmony export */
        "FooterRowOutlet": function FooterRowOutlet() {
          return (
            /* binding */
            _FooterRowOutlet
          );
        },

        /* harmony export */
        "HeaderRowOutlet": function HeaderRowOutlet() {
          return (
            /* binding */
            _HeaderRowOutlet
          );
        },

        /* harmony export */
        "NoDataRowOutlet": function NoDataRowOutlet() {
          return (
            /* binding */
            _NoDataRowOutlet
          );
        },

        /* harmony export */
        "STICKY_DIRECTIONS": function STICKY_DIRECTIONS() {
          return (
            /* binding */
            _STICKY_DIRECTIONS
          );
        },

        /* harmony export */
        "STICKY_POSITIONING_LISTENER": function STICKY_POSITIONING_LISTENER() {
          return (
            /* binding */
            _STICKY_POSITIONING_LISTENER
          );
        },

        /* harmony export */
        "StickyStyler": function StickyStyler() {
          return (
            /* binding */
            _StickyStyler
          );
        },

        /* harmony export */
        "TEXT_COLUMN_OPTIONS": function TEXT_COLUMN_OPTIONS() {
          return (
            /* binding */
            _TEXT_COLUMN_OPTIONS
          );
        },

        /* harmony export */
        "_COALESCED_STYLE_SCHEDULER": function _COALESCED_STYLE_SCHEDULER() {
          return (
            /* binding */
            _COALESCED_STYLE_SCHEDULER2
          );
        },

        /* harmony export */
        "_CoalescedStyleScheduler": function _CoalescedStyleScheduler() {
          return (
            /* binding */
            _CoalescedStyleScheduler2
          );
        },

        /* harmony export */
        "_Schedule": function _Schedule() {
          return (
            /* binding */
            _Schedule2
          );
        },

        /* harmony export */
        "mixinHasStickyInput": function mixinHasStickyInput() {
          return (
            /* binding */
            _mixinHasStickyInput
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      70946);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      71386);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      95639);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      15257);

      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function CdkTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function CdkTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Mixin to provide a directive with a function that checks if the sticky input has been
       * changed since the last time the function was called. Essentially adds a dirty-check to the
       * sticky value.
       * @docs-private
       */


      function _mixinHasStickyInput(base) {
        return /*#__PURE__*/function (_base) {
          _inherits(_class, _base);

          var _super = _createSuper(_class);

          function _class() {
            var _this6;

            _classCallCheck(this, _class);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this6 = _super.call.apply(_super, [this].concat(args));
            _this6._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */

            _this6._hasStickyChanged = false;
            return _this6;
          }
          /** Whether sticky positioning should be applied. */


          _createClass(_class, [{
            key: "sticky",
            get: function get() {
              return this._sticky;
            },
            set: function set(v) {
              var prevValue = this._sticky;
              this._sticky = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
              this._hasStickyChanged = prevValue !== this._sticky;
            }
            /** Whether the sticky value has changed since this was last called. */

          }, {
            key: "hasStickyChanged",
            value: function hasStickyChanged() {
              var hasStickyChanged = this._hasStickyChanged;
              this._hasStickyChanged = false;
              return hasStickyChanged;
            }
            /** Resets the dirty check for cases where the sticky state has been used without checking. */

          }, {
            key: "resetStickyChanged",
            value: function resetStickyChanged() {
              this._hasStickyChanged = false;
            }
          }]);

          return _class;
        }(base);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a table to some of the sub-components without causing a circular dependency.
       * @docs-private
       */


      var _CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_TABLE');
      /** Injection token that can be used to specify the text column options. */


      var _TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('text-column-options');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Cell definition for a CDK table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */


      var _CdkCellDef = function _CdkCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkCellDef);

        this.template = template;
      };

      _CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
        return new (t || _CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _CdkCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkCellDef,
        selectors: [["", "cdkCellDef", ""]]
      });

      _CdkCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * Header cell definition for a CDK table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var _CdkHeaderCellDef = function _CdkHeaderCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkHeaderCellDef);

        this.template = template;
      };

      _CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
        return new (t || _CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _CdkHeaderCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkHeaderCellDef,
        selectors: [["", "cdkHeaderCellDef", ""]]
      });

      _CdkHeaderCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkHeaderCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * Footer cell definition for a CDK table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var _CdkFooterCellDef = function _CdkFooterCellDef(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkFooterCellDef);

        this.template = template;
      };

      _CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
        return new (t || _CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _CdkFooterCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkFooterCellDef,
        selectors: [["", "cdkFooterCellDef", ""]]
      });

      _CdkFooterCellDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkFooterCellDef]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkColumnDef.

      /** @docs-private */


      var CdkColumnDefBase = function CdkColumnDefBase() {
        _classCallCheck(this, CdkColumnDefBase);
      };

      var _CdkColumnDefBase = _mixinHasStickyInput(CdkColumnDefBase);
      /**
       * Column definition for the CDK table.
       * Defines a set of cells available for a table column.
       */


      var _CdkColumnDef = /*#__PURE__*/function (_CdkColumnDefBase2) {
        _inherits(_CdkColumnDef, _CdkColumnDefBase2);

        var _super2 = _createSuper(_CdkColumnDef);

        function _CdkColumnDef(_table) {
          var _this7;

          _classCallCheck(this, _CdkColumnDef);

          _this7 = _super2.call(this);
          _this7._table = _table;
          _this7._stickyEnd = false;
          return _this7;
        }
        /** Unique name for this column. */


        _createClass(_CdkColumnDef, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._setNameInput(name);
          }
          /**
           * Whether this column should be sticky positioned on the end of the row. Should make sure
           * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
           * has been changed.
           */

        }, {
          key: "stickyEnd",
          get: function get() {
            return this._stickyEnd;
          },
          set: function set(v) {
            var prevValue = this._stickyEnd;
            this._stickyEnd = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
            this._hasStickyChanged = prevValue !== this._stickyEnd;
          }
          /**
           * Overridable method that sets the css classes that will be added to every cell in this
           * column.
           * In the future, columnCssClassName will change from type string[] to string and this
           * will set a single string value.
           * @docs-private
           */

        }, {
          key: "_updateColumnCssClassName",
          value: function _updateColumnCssClassName() {
            this._columnCssClassName = ["cdk-column-".concat(this.cssClassFriendlyName)];
          }
          /**
           * This has been extracted to a util because of TS 4 and VE.
           * View Engine doesn't support property rename inheritance.
           * TS 4.0 doesn't allow properties to override accessors or vice-versa.
           * @docs-private
           */

        }, {
          key: "_setNameInput",
          value: function _setNameInput(value) {
            // If the directive is set without a name (updated programmatically), then this setter will
            // trigger with an empty string and should not overwrite the programmatically set value.
            if (value) {
              this._name = value;
              this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');

              this._updateColumnCssClassName();
            }
          }
        }]);

        return _CdkColumnDef;
      }(_CdkColumnDefBase);

      _CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
        return new (t || _CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkColumnDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkColumnDef,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkCellDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkHeaderCellDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkFooterCellDef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
          }
        },
        inputs: {
          sticky: "sticky",
          name: ["cdkColumnDef", "name"],
          stickyEnd: "stickyEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: _CdkColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkColumnDef.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      _CdkColumnDef.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkColumnDef']
        }],
        stickyEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['stickyEnd']
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_CdkCellDef]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_CdkHeaderCellDef]
        }],
        footerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_CdkFooterCellDef]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: _CdkColumnDef
            }]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkColumnDef']
          }],
          stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['stickyEnd']
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_CdkCellDef]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_CdkHeaderCellDef]
          }],
          footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_CdkFooterCellDef]
          }]
        });
      })();
      /** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


      var _BaseCdkCell = function _BaseCdkCell(columnDef, elementRef) {
        _classCallCheck(this, _BaseCdkCell);

        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        var classList = elementRef.nativeElement.classList;

        var _iterator = _createForOfIteratorHelper(columnDef._columnCssClassName),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var className = _step.value;
            classList.add(className);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
      /** Header cell template container that adds the right classes and role. */


      var _CdkHeaderCell = /*#__PURE__*/function (_BaseCdkCell2) {
        _inherits(_CdkHeaderCell, _BaseCdkCell2);

        var _super3 = _createSuper(_CdkHeaderCell);

        function _CdkHeaderCell(columnDef, elementRef) {
          _classCallCheck(this, _CdkHeaderCell);

          return _super3.call(this, columnDef, elementRef);
        }

        return _CdkHeaderCell;
      }(_BaseCdkCell);

      _CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
        return new (t || _CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CdkHeaderCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkHeaderCell,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkHeaderCell.ctorParameters = function () {
        return [{
          type: _CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-header-cell, th[cdk-header-cell]',
            host: {
              'class': 'cdk-header-cell',
              'role': 'columnheader'
            }
          }]
        }], function () {
          return [{
            type: _CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var _CdkFooterCell = /*#__PURE__*/function (_BaseCdkCell3) {
        _inherits(_CdkFooterCell, _BaseCdkCell3);

        var _super4 = _createSuper(_CdkFooterCell);

        function _CdkFooterCell(columnDef, elementRef) {
          _classCallCheck(this, _CdkFooterCell);

          return _super4.call(this, columnDef, elementRef);
        }

        return _CdkFooterCell;
      }(_BaseCdkCell);

      _CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
        return new (t || _CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CdkFooterCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkFooterCell,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkFooterCell.ctorParameters = function () {
        return [{
          type: _CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-footer-cell, td[cdk-footer-cell]',
            host: {
              'class': 'cdk-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: _CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var _CdkCell = /*#__PURE__*/function (_BaseCdkCell4) {
        _inherits(_CdkCell, _BaseCdkCell4);

        var _super5 = _createSuper(_CdkCell);

        function _CdkCell(columnDef, elementRef) {
          _classCallCheck(this, _CdkCell);

          return _super5.call(this, columnDef, elementRef);
        }

        return _CdkCell;
      }(_BaseCdkCell);

      _CdkCell.ɵfac = function CdkCell_Factory(t) {
        return new (t || _CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CdkCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkCell,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "cdk-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkCell.ctorParameters = function () {
        return [{
          type: _CdkColumnDef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-cell, td[cdk-cell]',
            host: {
              'class': 'cdk-cell',
              'role': 'gridcell'
            }
          }]
        }], function () {
          return [{
            type: _CdkColumnDef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @docs-private
       */


      var _Schedule2 = function _Schedule2() {
        _classCallCheck(this, _Schedule2);

        this.tasks = [];
        this.endTasks = [];
      };
      /** Injection token used to provide a coalesced style scheduler. */


      var _COALESCED_STYLE_SCHEDULER2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('_COALESCED_STYLE_SCHEDULER');
      /**
       * Allows grouping up CSSDom mutations after the current execution context.
       * This can significantly improve performance when separate consecutive functions are
       * reading from the CSSDom and then mutating it.
       *
       * @docs-private
       */


      var _CoalescedStyleScheduler2 = /*#__PURE__*/function () {
        function _CoalescedStyleScheduler2(_ngZone) {
          _classCallCheck(this, _CoalescedStyleScheduler2);

          this._ngZone = _ngZone;
          this._currentSchedule = null;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }
        /**
         * Schedules the specified task to run at the end of the current VM turn.
         */


        _createClass(_CoalescedStyleScheduler2, [{
          key: "schedule",
          value: function schedule(task) {
            this._createScheduleIfNeeded();

            this._currentSchedule.tasks.push(task);
          }
          /**
           * Schedules the specified task to run after other scheduled tasks at the end of the current
           * VM turn.
           */

        }, {
          key: "scheduleEnd",
          value: function scheduleEnd(task) {
            this._createScheduleIfNeeded();

            this._currentSchedule.endTasks.push(task);
          }
          /** Prevent any further tasks from running. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
        }, {
          key: "_createScheduleIfNeeded",
          value: function _createScheduleIfNeeded() {
            var _this8 = this;

            if (this._currentSchedule) {
              return;
            }

            this._currentSchedule = new _Schedule2();

            this._getScheduleObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(function () {
              while (_this8._currentSchedule.tasks.length || _this8._currentSchedule.endTasks.length) {
                var schedule = _this8._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

                _this8._currentSchedule = new _Schedule2();

                var _iterator2 = _createForOfIteratorHelper(schedule.tasks),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var task = _step2.value;
                    task();
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                var _iterator3 = _createForOfIteratorHelper(schedule.endTasks),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _task = _step3.value;

                    _task();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              _this8._currentSchedule = null;
            });
          }
        }, {
          key: "_getScheduleObservable",
          value: function _getScheduleObservable() {
            // Use onStable when in the context of an ongoing change detection cycle so that we
            // do not accidentally trigger additional cycles.
            return this._ngZone.isStable ? (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(Promise.resolve(undefined)) : this._ngZone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
          }
        }]);

        return _CoalescedStyleScheduler2;
      }();

      _CoalescedStyleScheduler2.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
        return new (t || _CoalescedStyleScheduler2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CoalescedStyleScheduler2.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _CoalescedStyleScheduler2,
        factory: _CoalescedStyleScheduler2.ɵfac
      });

      _CoalescedStyleScheduler2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CoalescedStyleScheduler2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The row template that can be used by the mat-table. Should not be used outside of the
       * material library.
       */


      var _CDK_ROW_TEMPLATE = "<ng-container cdkCellOutlet></ng-container>";
      /**
       * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
       * for changes and notifying the table.
       */

      var _BaseRowDef = /*#__PURE__*/function () {
        function _BaseRowDef(
        /** @docs-private */
        template, _differs) {
          _classCallCheck(this, _BaseRowDef);

          this.template = template;
          this._differs = _differs;
        }

        _createClass(_BaseRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Create a new columns differ if one does not yet exist. Initialize it based on initial value
            // of the columns property or an empty array if none is provided.
            if (!this._columnsDiffer) {
              var columns = changes['columns'] && changes['columns'].currentValue || [];
              this._columnsDiffer = this._differs.find(columns).create();

              this._columnsDiffer.diff(columns);
            }
          }
          /**
           * Returns the difference between the current columns and the columns from the last diff, or null
           * if there is no difference.
           */

        }, {
          key: "getColumnsDiff",
          value: function getColumnsDiff() {
            return this._columnsDiffer.diff(this.columns);
          }
          /** Gets this row def's relevant cell template from the provided column def. */

        }, {
          key: "extractCellTemplate",
          value: function extractCellTemplate(column) {
            if (this instanceof _CdkHeaderRowDef) {
              return column.headerCell.template;
            }

            if (this instanceof _CdkFooterRowDef) {
              return column.footerCell.template;
            } else {
              return column.cell.template;
            }
          }
        }]);

        return _BaseRowDef;
      }();

      _BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
        return new (t || _BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers));
      };

      _BaseRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _BaseRowDef,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _BaseRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_BaseRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkHeaderRowDef.

      /** @docs-private */


      var CdkHeaderRowDefBase = /*#__PURE__*/function (_BaseRowDef2) {
        _inherits(CdkHeaderRowDefBase, _BaseRowDef2);

        var _super6 = _createSuper(CdkHeaderRowDefBase);

        function CdkHeaderRowDefBase() {
          _classCallCheck(this, CdkHeaderRowDefBase);

          return _super6.apply(this, arguments);
        }

        return CdkHeaderRowDefBase;
      }(_BaseRowDef);

      var _CdkHeaderRowDefBase = _mixinHasStickyInput(CdkHeaderRowDefBase);
      /**
       * Header row definition for the CDK table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var _CdkHeaderRowDef = /*#__PURE__*/function (_CdkHeaderRowDefBase2) {
        _inherits(_CdkHeaderRowDef, _CdkHeaderRowDefBase2);

        var _super7 = _createSuper(_CdkHeaderRowDef);

        function _CdkHeaderRowDef(template, _differs, _table) {
          var _this9;

          _classCallCheck(this, _CdkHeaderRowDef);

          _this9 = _super7.call(this, template, _differs);
          _this9._table = _table;
          return _this9;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(_CdkHeaderRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(_CdkHeaderRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return _CdkHeaderRowDef;
      }(_CdkHeaderRowDefBase);

      _CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
        return new (t || _CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkHeaderRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkHeaderRowDef,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
          columns: ["cdkHeaderRowDef", "columns"],
          sticky: ["cdkHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _CdkHeaderRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkHeaderRowDef]',
            inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, null);
      })(); // Boilerplate for applying mixins to CdkFooterRowDef.

      /** @docs-private */


      var CdkFooterRowDefBase = /*#__PURE__*/function (_BaseRowDef3) {
        _inherits(CdkFooterRowDefBase, _BaseRowDef3);

        var _super8 = _createSuper(CdkFooterRowDefBase);

        function CdkFooterRowDefBase() {
          _classCallCheck(this, CdkFooterRowDefBase);

          return _super8.apply(this, arguments);
        }

        return CdkFooterRowDefBase;
      }(_BaseRowDef);

      var _CdkFooterRowDefBase = _mixinHasStickyInput(CdkFooterRowDefBase);
      /**
       * Footer row definition for the CDK table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var _CdkFooterRowDef = /*#__PURE__*/function (_CdkFooterRowDefBase2) {
        _inherits(_CdkFooterRowDef, _CdkFooterRowDefBase2);

        var _super9 = _createSuper(_CdkFooterRowDef);

        function _CdkFooterRowDef(template, _differs, _table) {
          var _this10;

          _classCallCheck(this, _CdkFooterRowDef);

          _this10 = _super9.call(this, template, _differs);
          _this10._table = _table;
          return _this10;
        } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
        // Explicitly define it so that the method is called as part of the Angular lifecycle.


        _createClass(_CdkFooterRowDef, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            _get(_getPrototypeOf(_CdkFooterRowDef.prototype), "ngOnChanges", this).call(this, changes);
          }
        }]);

        return _CdkFooterRowDef;
      }(_CdkFooterRowDefBase);

      _CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
        return new (t || _CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkFooterRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkFooterRowDef,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
          columns: ["cdkFooterRowDef", "columns"],
          sticky: ["cdkFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _CdkFooterRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkFooterRowDef]',
            inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * Data row definition for the CDK table.
       * Captures the header row's template and other row properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var _CdkRowDef = /*#__PURE__*/function (_BaseRowDef4) {
        _inherits(_CdkRowDef, _BaseRowDef4);

        var _super10 = _createSuper(_CdkRowDef);

        // TODO(andrewseguin): Add an input for providing a switch function to determine
        //   if this template should be used.
        function _CdkRowDef(template, _differs, _table) {
          var _this11;

          _classCallCheck(this, _CdkRowDef);

          _this11 = _super10.call(this, template, _differs);
          _this11._table = _table;
          return _this11;
        }

        return _CdkRowDef;
      }(_BaseRowDef);

      _CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
        return new (t || _CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CDK_TABLE, 8));
      };

      _CdkRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkRowDef,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
          columns: ["cdkRowDefColumns", "columns"],
          when: ["cdkRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkRowDef.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_CDK_TABLE]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkRowDef]',
            inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_CDK_TABLE]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * Outlet for rendering cells inside of a row or header row.
       * @docs-private
       */


      var _CdkCellOutlet = /*#__PURE__*/function () {
        function _CdkCellOutlet(_viewContainer) {
          _classCallCheck(this, _CdkCellOutlet);

          this._viewContainer = _viewContainer;
          _CdkCellOutlet.mostRecentCellOutlet = this;
        }

        _createClass(_CdkCellOutlet, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // If this was the last outlet being rendered in the view, remove the reference
            // from the static property after it has been destroyed to avoid leaking memory.
            if (_CdkCellOutlet.mostRecentCellOutlet === this) {
              _CdkCellOutlet.mostRecentCellOutlet = null;
            }
          }
        }]);

        return _CdkCellOutlet;
      }();

      _CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
        return new (t || _CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
      };

      _CdkCellOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkCellOutlet,
        selectors: [["", "cdkCellOutlet", ""]]
      });
      /**
       * Static property containing the latest constructed instance of this class.
       * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
       * createEmbeddedView. After one of these components are created, this property will provide
       * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
       * construct the cells with the provided context.
       */

      _CdkCellOutlet.mostRecentCellOutlet = null;

      _CdkCellOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkCellOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkCellOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }];
        }, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var _CdkHeaderRow = function _CdkHeaderRow() {
        _classCallCheck(this, _CdkHeaderRow);
      };

      _CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
        return new (t || _CdkHeaderRow)();
      };

      _CdkHeaderRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkHeaderRow,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-header-row, tr[cdk-header-row]',
            template: _CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var _CdkFooterRow = function _CdkFooterRow() {
        _classCallCheck(this, _CdkFooterRow);
      };

      _CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
        return new (t || _CdkFooterRow)();
      };

      _CdkFooterRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkFooterRow,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-footer-row, tr[cdk-footer-row]',
            template: _CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var _CdkRow = function _CdkRow() {
        _classCallCheck(this, _CdkRow);
      };

      _CdkRow.ɵfac = function CdkRow_Factory(t) {
        return new (t || _CdkRow)();
      };

      _CdkRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkRow,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-row, tr[cdk-row]',
            template: _CDK_ROW_TEMPLATE,
            host: {
              'class': 'cdk-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var _CdkNoDataRow = function _CdkNoDataRow(templateRef) {
        _classCallCheck(this, _CdkNoDataRow);

        this.templateRef = templateRef;
      };

      _CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
        return new (t || _CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _CdkNoDataRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkNoDataRow,
        selectors: [["ng-template", "cdkNoDataRow", ""]]
      });

      _CdkNoDataRow.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[cdkNoDataRow]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * List of all possible directions that can be used for sticky positioning.
       * @docs-private
       */


      var _STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
      /**
       * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
       * @docs-private
       */

      var _StickyStyler = /*#__PURE__*/function () {
        /**
         * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
         *     that uses the native `<table>` element.
         * @param _stickCellCss The CSS class that will be applied to every row/cell that has
         *     sticky positioning applied.
         * @param direction The directionality context of the table (ltr/rtl); affects column positioning
         *     by reversing left/right positions.
         * @param _isBrowser Whether the table is currently being rendered on the server or the client.
         * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
         *     using inline styles. If false, it is assumed that position: sticky is included in
         *     the component stylesheet for _stickCellCss.
         * @param _positionListener A listener that is notified of changes to sticky rows/columns
         *     and their dimensions.
         */
        function _StickyStyler(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler) {
          var _isBrowser = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

          var _needsPositionStickyOnElement = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

          var _positionListener = arguments.length > 6 ? arguments[6] : undefined;

          _classCallCheck(this, _StickyStyler);

          this._isNativeHtmlTable = _isNativeHtmlTable;
          this._stickCellCss = _stickCellCss;
          this.direction = direction;
          this._coalescedStyleScheduler = _coalescedStyleScheduler;
          this._isBrowser = _isBrowser;
          this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
          this._positionListener = _positionListener;
          this._cachedCellWidths = [];
          this._borderCellCss = {
            'top': "".concat(_stickCellCss, "-border-elem-top"),
            'bottom': "".concat(_stickCellCss, "-border-elem-bottom"),
            'left': "".concat(_stickCellCss, "-border-elem-left"),
            'right': "".concat(_stickCellCss, "-border-elem-right")
          };
        }
        /**
         * Clears the sticky positioning styles from the row and its cells by resetting the `position`
         * style, setting the zIndex to 0, and unsetting each provided sticky direction.
         * @param rows The list of rows that should be cleared from sticking in the provided directions
         * @param stickyDirections The directions that should no longer be set as sticky on the rows.
         */


        _createClass(_StickyStyler, [{
          key: "clearStickyPositioning",
          value: function clearStickyPositioning(rows, stickyDirections) {
            var _this12 = this;

            var elementsToClear = [];

            var _iterator4 = _createForOfIteratorHelper(rows),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var row = _step4.value;

                // If the row isn't an element (e.g. if it's an `ng-container`),
                // it won't have inline styles or `children` so we skip it.
                if (row.nodeType !== row.ELEMENT_NODE) {
                  continue;
                }

                elementsToClear.push(row);

                for (var i = 0; i < row.children.length; i++) {
                  elementsToClear.push(row.children[i]);
                }
              } // Coalesce with sticky row/column updates (and potentially other changes like column resize).

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this._coalescedStyleScheduler.schedule(function () {
              var _iterator5 = _createForOfIteratorHelper(elementsToClear),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var element = _step5.value;

                  _this12._removeStickyStyle(element, stickyDirections);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            });
          }
          /**
           * Applies sticky left and right positions to the cells of each row according to the sticky
           * states of the rendered column definitions.
           * @param rows The rows that should have its set of cells stuck according to the sticky states.
           * @param stickyStartStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the start of the row.
           * @param stickyEndStates A list of boolean states where each state represents whether the cell
           *     in this index position should be stuck to the end of the row.
           * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
           *     column cell. If `false` cached widths will be used instead.
           */

        }, {
          key: "updateStickyColumns",
          value: function updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
            var _this13 = this;

            var recalculateCellWidths = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

            if (!rows.length || !this._isBrowser || !(stickyStartStates.some(function (state) {
              return state;
            }) || stickyEndStates.some(function (state) {
              return state;
            }))) {
              if (this._positionListener) {
                this._positionListener.stickyColumnsUpdated({
                  sizes: []
                });

                this._positionListener.stickyEndColumnsUpdated({
                  sizes: []
                });
              }

              return;
            }

            var firstRow = rows[0];
            var numCells = firstRow.children.length;

            var cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);

            var startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

            var endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

            var lastStickyStart = stickyStartStates.lastIndexOf(true);
            var firstStickyEnd = stickyEndStates.indexOf(true); // Coalesce with sticky row updates (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              var isRtl = _this13.direction === 'rtl';
              var start = isRtl ? 'right' : 'left';
              var end = isRtl ? 'left' : 'right';

              var _iterator6 = _createForOfIteratorHelper(rows),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var row = _step6.value;

                  for (var i = 0; i < numCells; i++) {
                    var cell = row.children[i];

                    if (stickyStartStates[i]) {
                      _this13._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
                    }

                    if (stickyEndStates[i]) {
                      _this13._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
                    }
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              if (_this13._positionListener) {
                _this13._positionListener.stickyColumnsUpdated({
                  sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map(function (width, index) {
                    return stickyStartStates[index] ? width : null;
                  })
                });

                _this13._positionListener.stickyEndColumnsUpdated({
                  sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map(function (width, index) {
                    return stickyEndStates[index + firstStickyEnd] ? width : null;
                  }).reverse()
                });
              }
            });
          }
          /**
           * Applies sticky positioning to the row's cells if using the native table layout, and to the
           * row itself otherwise.
           * @param rowsToStick The list of rows that should be stuck according to their corresponding
           *     sticky state and to the provided top or bottom position.
           * @param stickyStates A list of boolean states where each state represents whether the row
           *     should be stuck in the particular top or bottom position.
           * @param position The position direction in which the row should be stuck if that row should be
           *     sticky.
           *
           */

        }, {
          key: "stickRows",
          value: function stickRows(rowsToStick, stickyStates, position) {
            var _this14 = this;

            // Since we can't measure the rows on the server, we can't stick the rows properly.
            if (!this._isBrowser) {
              return;
            } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
            // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
            // sticky states need to be reversed as well.


            var rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
            var states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

            var stickyOffsets = [];
            var stickyCellHeights = [];
            var elementsToStick = [];

            for (var rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
              if (!states[rowIndex]) {
                continue;
              }

              stickyOffsets[rowIndex] = stickyOffset;
              var row = rows[rowIndex];
              elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
              var height = row.getBoundingClientRect().height;
              stickyOffset += height;
              stickyCellHeights[rowIndex] = height;
            }

            var borderedRowIndex = states.lastIndexOf(true); // Coalesce with other sticky row updates (top/bottom), sticky columns updates
            // (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              var _a, _b;

              for (var _rowIndex = 0; _rowIndex < rows.length; _rowIndex++) {
                if (!states[_rowIndex]) {
                  continue;
                }

                var offset = stickyOffsets[_rowIndex];
                var isBorderedRowIndex = _rowIndex === borderedRowIndex;

                var _iterator7 = _createForOfIteratorHelper(elementsToStick[_rowIndex]),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var element = _step7.value;

                    _this14._addStickyStyle(element, position, offset, isBorderedRowIndex);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }

              if (position === 'top') {
                (_a = _this14._positionListener) === null || _a === void 0 ? void 0 : _a.stickyHeaderRowsUpdated({
                  sizes: stickyCellHeights,
                  offsets: stickyOffsets,
                  elements: elementsToStick
                });
              } else {
                (_b = _this14._positionListener) === null || _b === void 0 ? void 0 : _b.stickyFooterRowsUpdated({
                  sizes: stickyCellHeights,
                  offsets: stickyOffsets,
                  elements: elementsToStick
                });
              }
            });
          }
          /**
           * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
           * footer rows is to apply sticky styling to the tfoot container. This should only be done if
           * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
           * the tfoot element.
           */

        }, {
          key: "updateStickyFooterContainer",
          value: function updateStickyFooterContainer(tableElement, stickyStates) {
            var _this15 = this;

            if (!this._isNativeHtmlTable) {
              return;
            }

            var tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

            this._coalescedStyleScheduler.schedule(function () {
              if (stickyStates.some(function (state) {
                return !state;
              })) {
                _this15._removeStickyStyle(tfoot, ['bottom']);
              } else {
                _this15._addStickyStyle(tfoot, 'bottom', 0, false);
              }
            });
          }
          /**
           * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
           * the zIndex, removing each of the provided sticky directions, and removing the
           * sticky position if there are no more directions.
           */

        }, {
          key: "_removeStickyStyle",
          value: function _removeStickyStyle(element, stickyDirections) {
            var _iterator8 = _createForOfIteratorHelper(stickyDirections),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var dir = _step8.value;
                element.style[dir] = '';
                element.classList.remove(this._borderCellCss[dir]);
              } // If the element no longer has any more sticky directions, remove sticky positioning and
              // the sticky CSS class.
              // Short-circuit checking element.style[dir] for stickyDirections as they
              // were already removed above.

            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            var hasDirection = _STICKY_DIRECTIONS.some(function (dir) {
              return stickyDirections.indexOf(dir) === -1 && element.style[dir];
            });

            if (hasDirection) {
              element.style.zIndex = this._getCalculatedZIndex(element);
            } else {
              // When not hasDirection, _getCalculatedZIndex will always return ''.
              element.style.zIndex = '';

              if (this._needsPositionStickyOnElement) {
                element.style.position = '';
              }

              element.classList.remove(this._stickCellCss);
            }
          }
          /**
           * Adds the sticky styling to the element by adding the sticky style class, changing position
           * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
           * direction and value.
           */

        }, {
          key: "_addStickyStyle",
          value: function _addStickyStyle(element, dir, dirValue, isBorderElement) {
            element.classList.add(this._stickCellCss);

            if (isBorderElement) {
              element.classList.add(this._borderCellCss[dir]);
            }

            element.style[dir] = "".concat(dirValue, "px");
            element.style.zIndex = this._getCalculatedZIndex(element);

            if (this._needsPositionStickyOnElement) {
              element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
            }
          }
          /**
           * Calculate what the z-index should be for the element, depending on what directions (top,
           * bottom, left, right) have been set. It should be true that elements with a top direction
           * should have the highest index since these are elements like a table header. If any of those
           * elements are also sticky in another direction, then they should appear above other elements
           * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
           * (e.g. footer rows) should then be next in the ordering such that they are below the header
           * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
           * should minimally increment so that they are above non-sticky elements but below top and bottom
           * elements.
           */

        }, {
          key: "_getCalculatedZIndex",
          value: function _getCalculatedZIndex(element) {
            var zIndexIncrements = {
              top: 100,
              bottom: 10,
              left: 1,
              right: 1
            };
            var zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

            var _iterator9 = _createForOfIteratorHelper(_STICKY_DIRECTIONS),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var dir = _step9.value;

                if (element.style[dir]) {
                  zIndex += zIndexIncrements[dir];
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return zIndex ? "".concat(zIndex) : '';
          }
          /** Gets the widths for each cell in the provided row. */

        }, {
          key: "_getCellWidths",
          value: function _getCellWidths(row) {
            var recalculateCellWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (!recalculateCellWidths && this._cachedCellWidths.length) {
              return this._cachedCellWidths;
            }

            var cellWidths = [];
            var firstRowCells = row.children;

            for (var i = 0; i < firstRowCells.length; i++) {
              var cell = firstRowCells[i];
              cellWidths.push(cell.getBoundingClientRect().width);
            }

            this._cachedCellWidths = cellWidths;
            return cellWidths;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyStartColumnPositions",
          value: function _getStickyStartColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = 0; i < widths.length; i++) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
          /**
           * Determines the left and right positions of each sticky column cell, which will be the
           * accumulation of all sticky column cell widths to the left and right, respectively.
           * Non-sticky cells do not need to have a value set since their positions will not be applied.
           */

        }, {
          key: "_getStickyEndColumnPositions",
          value: function _getStickyEndColumnPositions(widths, stickyStates) {
            var positions = [];
            var nextPosition = 0;

            for (var i = widths.length; i > 0; i--) {
              if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
              }
            }

            return positions;
          }
        }]);

        return _StickyStyler;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to find an unexisting column.
       * @param id Id whose lookup failed.
       * @docs-private
       */


      function getTableUnknownColumnError(id) {
        return Error("Could not find column with id \"".concat(id, "\"."));
      }
      /**
       * Returns an error to be thrown when two column definitions have the same name.
       * @docs-private
       */


      function getTableDuplicateColumnNameError(name) {
        return Error("Duplicate column definition name provided: \"".concat(name, "\"."));
      }
      /**
       * Returns an error to be thrown when there are multiple rows that are missing a when function.
       * @docs-private
       */


      function getTableMultipleDefaultRowDefsError() {
        return Error("There can only be one default row without a when predicate function.");
      }
      /**
       * Returns an error to be thrown when there are no matching row defs for a particular set of data.
       * @docs-private
       */


      function getTableMissingMatchingRowDefError(data) {
        return Error("Could not find a matching row definition for the" + "provided row data: ".concat(JSON.stringify(data)));
      }
      /**
       * Returns an error to be thrown when there is no row definitions present in the content.
       * @docs-private
       */


      function getTableMissingRowDefsError() {
        return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
      }
      /**
       * Returns an error to be thrown when the data source does not match the compatible types.
       * @docs-private
       */


      function getTableUnknownDataSourceError() {
        return Error("Provided data source did not match an array, Observable, or DataSource");
      }
      /**
       * Returns an error to be thrown when the text column cannot find a parent table to inject.
       * @docs-private
       */


      function getTableTextColumnMissingParentTableError() {
        return Error("Text column could not find a parent table for registration.");
      }
      /**
       * Returns an error to be thrown when a table text column doesn't have a name.
       * @docs-private
       */


      function getTableTextColumnMissingNameError() {
        return Error("Table text column must have a name.");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the StickyPositioningListener. */


      var _STICKY_POSITIONING_LISTENER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CDK_SPL');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
       * tables that animate rows.
       */


      var _CdkRecycleRows = function _CdkRecycleRows() {
        _classCallCheck(this, _CdkRecycleRows);
      };

      _CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
        return new (t || _CdkRecycleRows)();
      };

      _CdkRecycleRows.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkRecycleRows,
        selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkRecycleRows, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-table[recycleRows], table[cdk-table][recycleRows]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
            }]
          }]
        }], null, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert data rows.
       * @docs-private
       */


      var _DataRowOutlet = function _DataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _DataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      _DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
        return new (t || _DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _DataRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DataRowOutlet,
        selectors: [["", "rowOutlet", ""]]
      });

      _DataRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[rowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the header.
       * @docs-private
       */


      var _HeaderRowOutlet = function _HeaderRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _HeaderRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      _HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
        return new (t || _HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _HeaderRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _HeaderRowOutlet,
        selectors: [["", "headerRowOutlet", ""]]
      });

      _HeaderRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_HeaderRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[headerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view container's ng-container to insert the footer.
       * @docs-private
       */


      var _FooterRowOutlet = function _FooterRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _FooterRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      _FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
        return new (t || _FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _FooterRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _FooterRowOutlet,
        selectors: [["", "footerRowOutlet", ""]]
      });

      _FooterRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FooterRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[footerRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * Provides a handle for the table to grab the view
       * container's ng-container to insert the no data row.
       * @docs-private
       */


      var _NoDataRowOutlet = function _NoDataRowOutlet(viewContainer, elementRef) {
        _classCallCheck(this, _NoDataRowOutlet);

        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
      };

      _NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
        return new (t || _NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _NoDataRowOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NoDataRowOutlet,
        selectors: [["", "noDataRowOutlet", ""]]
      });

      _NoDataRowOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NoDataRowOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[noDataRowOutlet]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * The table template that can be used by the mat-table. Should not be used outside of the
       * material library.
       * @docs-private
       */


      var _CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
      // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
      "\n  <ng-content select=\"caption\"></ng-content>\n  <ng-content select=\"colgroup, col\"></ng-content>\n  <ng-container headerRowOutlet></ng-container>\n  <ng-container rowOutlet></ng-container>\n  <ng-container noDataRowOutlet></ng-container>\n  <ng-container footerRowOutlet></ng-container>\n";
      /**
       * Class used to conveniently type the embedded view ref for rows with a context.
       * @docs-private
       */

      var RowViewRef = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(RowViewRef, _angular_core__WEBPAC);

        var _super11 = _createSuper(RowViewRef);

        function RowViewRef() {
          _classCallCheck(this, RowViewRef);

          return _super11.apply(this, arguments);
        }

        return RowViewRef;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_0__.EmbeddedViewRef);
      /**
       * A data table that can render a header row, data rows, and a footer row.
       * Uses the dataSource input to determine the data to be rendered. The data can be provided either
       * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
       * connect function that will return an Observable stream that emits the data array to render.
       */


      var _CdkTable = /*#__PURE__*/function () {
        function _CdkTable(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler,
        /**
         * @deprecated `_stickyPositioningListener` parameter to become required.
         * @breaking-change 13.0.0
         */
        _stickyPositioningListener) {
          _classCallCheck(this, _CdkTable);

          this._differs = _differs;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          this._dir = _dir;
          this._platform = _platform;
          this._viewRepeater = _viewRepeater;
          this._coalescedStyleScheduler = _coalescedStyleScheduler;
          this._viewportRuler = _viewportRuler;
          this._stickyPositioningListener = _stickyPositioningListener;
          /** Subject that emits when the component has been destroyed. */

          this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          /**
           * Map of all the user's defined columns (header, data, and footer cell template) identified by
           * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
           * any custom column definitions added to `_customColumnDefs`.
           */

          this._columnDefsByName = new Map();
          /**
           * Column definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * column definitions as *its* content child.
           */

          this._customColumnDefs = new Set();
          /**
           * Data row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in data rows as *its* content child.
           */

          this._customRowDefs = new Set();
          /**
           * Header row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has
           * built-in header rows as *its* content child.
           */

          this._customHeaderRowDefs = new Set();
          /**
           * Footer row definitions that were defined outside of the direct content children of the table.
           * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
           * built-in footer row as *its* content child.
           */

          this._customFooterRowDefs = new Set();
          /**
           * Whether the header row definition has been changed. Triggers an update to the header row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._headerRowDefChanged = true;
          /**
           * Whether the footer row definition has been changed. Triggers an update to the footer row after
           * content is checked. Initialized as true so that the table renders the initial set of rows.
           */

          this._footerRowDefChanged = true;
          /**
           * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
           * change.
           */

          this._stickyColumnStylesNeedReset = true;
          /**
           * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
           * `false`, cached values will be used instead. This is only applicable to tables with
           * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
           */

          this._forceRecalculateCellWidths = true;
          /**
           * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
           * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
           * the cached `RenderRow` objects when possible, the row identity is preserved when the data
           * and row template matches, which allows the `IterableDiffer` to check rows by reference
           * and understand which rows are added/moved/removed.
           *
           * Implemented as a map of maps where the first key is the `data: T` object and the second is the
           * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
           * contains an array of created pairs. The array is necessary to handle cases where the data
           * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
           * stored.
           */

          this._cachedRenderRowsMap = new Map();
          /**
           * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
           * table subclasses.
           */

          this.stickyCssClass = 'cdk-table-sticky';
          /**
           * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
           * the position is set in a selector associated with the value of stickyCssClass. May be
           * overridden by table subclasses
           */

          this.needsPositionStickyOnElement = true;
          /** Whether the no data row is currently showing anything. */

          this._isShowingNoDataRow = false;
          this._multiTemplateDataRows = false;
          this._fixedLayout = false; // TODO(andrewseguin): Remove max value as the end index
          //   and instead calculate the view on init and scroll.

          /**
           * Stream containing the latest information on what rows are being displayed on screen.
           * Can be used by the data source to as a heuristic of what data should be provided.
           *
           * @docs-private
           */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
            start: 0,
            end: Number.MAX_VALUE
          });

          if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
          }

          this._document = _document;
          this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
        }
        /**
         * Tracking function that will be used to check the differences in data changes. Used similarly
         * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
         * relative to the function to know if a row should be added/removed/moved.
         * Accepts a function that takes two parameters, `index` and `item`.
         */


        _createClass(_CdkTable, [{
          key: "trackBy",
          get: function get() {
            return this._trackByFn;
          },
          set: function set(fn) {
            if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
              console.warn("trackBy must be a function, but received ".concat(JSON.stringify(fn), "."));
            }

            this._trackByFn = fn;
          }
          /**
           * The table's source of data, which can be provided in three ways (in order of complexity):
           *   - Simple data array (each object represents one table row)
           *   - Stream that emits a data array each time the array changes
           *   - `DataSource` object that implements the connect/disconnect interface.
           *
           * If a data array is provided, the table must be notified when the array's objects are
           * added, removed, or moved. This can be done by calling the `renderRows()` function which will
           * render the diff since the last table render. If the data array reference is changed, the table
           * will automatically trigger an update to the rows.
           *
           * When providing an Observable stream, the table will trigger an update automatically when the
           * stream emits a new array of data.
           *
           * Finally, when providing a `DataSource` object, the table will use the Observable stream
           * provided by the connect function and trigger updates when that stream emits new data array
           * values. During the table's ngOnDestroy or when the data source is removed from the table, the
           * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
           * subscriptions registered during the connect process).
           */

        }, {
          key: "dataSource",
          get: function get() {
            return this._dataSource;
          },
          set: function set(dataSource) {
            if (this._dataSource !== dataSource) {
              this._switchDataSource(dataSource);
            }
          }
          /**
           * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
           * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
           * dataobject will render the first row that evaluates its when predicate to true, in the order
           * defined in the table, or otherwise the default row which does not have a when predicate.
           */

        }, {
          key: "multiTemplateDataRows",
          get: function get() {
            return this._multiTemplateDataRows;
          },
          set: function set(v) {
            this._multiTemplateDataRows = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
            // this setter will be invoked before the row outlet has been defined hence the null check.

            if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
              this._forceRenderDataRows();

              this.updateStickyColumnStyles();
            }
          }
          /**
           * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
           * and optimize rendering sticky styles for native tables. No-op for flex tables.
           */

        }, {
          key: "fixedLayout",
          get: function get() {
            return this._fixedLayout;
          },
          set: function set(v) {
            this._fixedLayout = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.

            this._forceRecalculateCellWidths = true;
            this._stickyColumnStylesNeedReset = true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this._setupStickyStyler();

            if (this._isNativeHtmlTable) {
              this._applyNativeTableSections();
            } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
            // the user has provided a custom trackBy, return the result of that function as evaluated
            // with the values of the `RenderRow`'s data and index.


            this._dataDiffer = this._differs.find([]).create(function (_i, dataRow) {
              return _this16.trackBy ? _this16.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
            });

            this._viewportRuler.change().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(function () {
              _this16._forceRecalculateCellWidths = true;
            });
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
            this._cacheRowDefs();

            this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


            if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableMissingRowDefsError();
            } // Render updates if the list of columns have been changed for the header, row, or footer defs.


            var columnsChanged = this._renderUpdatedColumns();

            var rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // Ensure sticky column styles are reset if set to `true` elsewhere.

            this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
            this._forceRecalculateCellWidths = rowDefsChanged; // If the header row definition has been changed, trigger a render to the header row.

            if (this._headerRowDefChanged) {
              this._forceRenderHeaderRows();

              this._headerRowDefChanged = false;
            } // If the footer row definition has been changed, trigger a render to the footer row.


            if (this._footerRowDefChanged) {
              this._forceRenderFooterRows();

              this._footerRowDefChanged = false;
            } // If there is a data source and row definitions, connect to the data source unless a
            // connection has already been made.


            if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
              this._observeRenderChanges();
            } else if (this._stickyColumnStylesNeedReset) {
              // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
              // called when it row data arrives. Otherwise, we need to call it proactively.
              this.updateStickyColumnStyles();
            }

            this._checkStickyStates();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._rowOutlet.viewContainer.clear();

            this._noDataRowOutlet.viewContainer.clear();

            this._headerRowOutlet.viewContainer.clear();

            this._footerRowOutlet.viewContainer.clear();

            this._cachedRenderRowsMap.clear();

            this._onDestroy.next();

            this._onDestroy.complete();

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.isDataSource)(this.dataSource)) {
              this.dataSource.disconnect(this);
            }
          }
          /**
           * Renders rows based on the table's latest set of data, which was either provided directly as an
           * input or retrieved through an Observable stream (directly or from a DataSource).
           * Checks for differences in the data since the last diff to perform only the necessary
           * changes (add/remove/move rows).
           *
           * If the table's data source is a DataSource or Observable, this will be invoked automatically
           * each time the provided Observable stream emits a new data array. Otherwise if your data is
           * an array, this function will need to be called to render any changes.
           */

        }, {
          key: "renderRows",
          value: function renderRows() {
            var _this17 = this;

            this._renderRows = this._getAllRenderRows();

            var changes = this._dataDiffer.diff(this._renderRows);

            if (!changes) {
              this._updateNoDataRow();

              return;
            }

            var viewContainer = this._rowOutlet.viewContainer;

            this._viewRepeater.applyChanges(changes, viewContainer, function (record, _adjustedPreviousIndex, currentIndex) {
              return _this17._getEmbeddedViewArgs(record.item, currentIndex);
            }, function (record) {
              return record.item.data;
            }, function (change) {
              if (change.operation === 1
              /* INSERTED */
              && change.context) {
                _this17._renderCellTemplateForItem(change.record.item.rowDef, change.context);
              }
            }); // Update the meta context of a row's context data (index, count, first, last, ...)


            this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
            // e.g. if trackBy matched data on some property but the actual data reference changed.


            changes.forEachIdentityChange(function (record) {
              var rowView = viewContainer.get(record.currentIndex);
              rowView.context.$implicit = record.item.data;
            });

            this._updateNoDataRow();

            this.updateStickyColumnStyles();
          }
          /** Adds a column definition that was not included as part of the content children. */

        }, {
          key: "addColumnDef",
          value: function addColumnDef(columnDef) {
            this._customColumnDefs.add(columnDef);
          }
          /** Removes a column definition that was not included as part of the content children. */

        }, {
          key: "removeColumnDef",
          value: function removeColumnDef(columnDef) {
            this._customColumnDefs["delete"](columnDef);
          }
          /** Adds a row definition that was not included as part of the content children. */

        }, {
          key: "addRowDef",
          value: function addRowDef(rowDef) {
            this._customRowDefs.add(rowDef);
          }
          /** Removes a row definition that was not included as part of the content children. */

        }, {
          key: "removeRowDef",
          value: function removeRowDef(rowDef) {
            this._customRowDefs["delete"](rowDef);
          }
          /** Adds a header row definition that was not included as part of the content children. */

        }, {
          key: "addHeaderRowDef",
          value: function addHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs.add(headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Removes a header row definition that was not included as part of the content children. */

        }, {
          key: "removeHeaderRowDef",
          value: function removeHeaderRowDef(headerRowDef) {
            this._customHeaderRowDefs["delete"](headerRowDef);

            this._headerRowDefChanged = true;
          }
          /** Adds a footer row definition that was not included as part of the content children. */

        }, {
          key: "addFooterRowDef",
          value: function addFooterRowDef(footerRowDef) {
            this._customFooterRowDefs.add(footerRowDef);

            this._footerRowDefChanged = true;
          }
          /** Removes a footer row definition that was not included as part of the content children. */

        }, {
          key: "removeFooterRowDef",
          value: function removeFooterRowDef(footerRowDef) {
            this._customFooterRowDefs["delete"](footerRowDef);

            this._footerRowDefChanged = true;
          }
          /** Sets a no data row definition that was not included as a part of the content children. */

        }, {
          key: "setNoDataRow",
          value: function setNoDataRow(noDataRow) {
            this._customNoDataRow = noDataRow;
          }
          /**
           * Updates the header sticky styles. First resets all applied styles with respect to the cells
           * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
           * automatically called when the header row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyHeaderRowStyles",
          value: function updateStickyHeaderRowStyles() {
            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var thead = tableElement.querySelector('thead');

            if (thead) {
              thead.style.display = headerRows.length ? '' : 'none';
            }

            var stickyStates = this._headerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

            this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


            this._headerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the footer sticky styles. First resets all applied styles with respect to the cells
           * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
           * automatically called when the footer row changes its displayed set of columns, or if its
           * sticky input changes. May be called manually for cases where the cell content changes outside
           * of these events.
           */

        }, {
          key: "updateStickyFooterRowStyles",
          value: function updateStickyFooterRowStyles() {
            var footerRows = this._getRenderedRows(this._footerRowOutlet);

            var tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
            // overzealous a11y checkers that fail because the `rowgroup` element does not contain
            // required child `row`.

            var tfoot = tableElement.querySelector('tfoot');

            if (tfoot) {
              tfoot.style.display = footerRows.length ? '' : 'none';
            }

            var stickyStates = this._footerRowDefs.map(function (def) {
              return def.sticky;
            });

            this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

            this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

            this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


            this._footerRowDefs.forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Updates the column sticky styles. First resets all applied styles with respect to the cells
           * sticking to the left and right. Then sticky styles are added for the left and right according
           * to the column definitions for each cell in each row. This is automatically called when
           * the data source provides a new set of data or when a column definition changes its sticky
           * input. May be called manually for cases where the cell content changes outside of these events.
           */

        }, {
          key: "updateStickyColumnStyles",
          value: function updateStickyColumnStyles() {
            var _this18 = this;

            var headerRows = this._getRenderedRows(this._headerRowOutlet);

            var dataRows = this._getRenderedRows(this._rowOutlet);

            var footerRows = this._getRenderedRows(this._footerRowOutlet); // For tables not using a fixed layout, the column widths may change when new rows are rendered.
            // In a table using a fixed layout, row content won't affect column width, so sticky styles
            // don't need to be cleared unless either the sticky column config changes or one of the row
            // defs change.


            if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
              // Clear the left and right positioning from all columns in the table across all rows since
              // sticky columns span across all table sections (header, data, footer)
              this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(headerRows), _toConsumableArray(dataRows), _toConsumableArray(footerRows)), ['left', 'right']);

              this._stickyColumnStylesNeedReset = false;
            } // Update the sticky styles for each header row depending on the def's sticky state


            headerRows.forEach(function (headerRow, i) {
              _this18._addStickyColumnStyles([headerRow], _this18._headerRowDefs[i]);
            }); // Update the sticky styles for each data row depending on its def's sticky state

            this._rowDefs.forEach(function (rowDef) {
              // Collect all the rows rendered with this row definition.
              var rows = [];

              for (var i = 0; i < dataRows.length; i++) {
                if (_this18._renderRows[i].rowDef === rowDef) {
                  rows.push(dataRows[i]);
                }
              }

              _this18._addStickyColumnStyles(rows, rowDef);
            }); // Update the sticky styles for each footer row depending on the def's sticky state


            footerRows.forEach(function (footerRow, i) {
              _this18._addStickyColumnStyles([footerRow], _this18._footerRowDefs[i]);
            }); // Reset the dirty state of the sticky input change since it has been used.

            Array.from(this._columnDefsByName.values()).forEach(function (def) {
              return def.resetStickyChanged();
            });
          }
          /**
           * Get the list of RenderRow objects to render according to the current list of data and defined
           * row definitions. If the previous list already contained a particular pair, it should be reused
           * so that the differ equates their references.
           */

        }, {
          key: "_getAllRenderRows",
          value: function _getAllRenderRows() {
            var renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
            // new cache while unused ones can be picked up by garbage collection.

            var prevCachedRenderRows = this._cachedRenderRowsMap;
            this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
            // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

            for (var i = 0; i < this._data.length; i++) {
              var data = this._data[i];

              var renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

              if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
              }

              for (var j = 0; j < renderRowsForData.length; j++) {
                var renderRow = renderRowsForData[j];

                var cache = this._cachedRenderRowsMap.get(renderRow.data);

                if (cache.has(renderRow.rowDef)) {
                  cache.get(renderRow.rowDef).push(renderRow);
                } else {
                  cache.set(renderRow.rowDef, [renderRow]);
                }

                renderRows.push(renderRow);
              }
            }

            return renderRows;
          }
          /**
           * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
           * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
           * `(T, CdkRowDef)` pair.
           */

        }, {
          key: "_getRenderRowsForData",
          value: function _getRenderRowsForData(data, dataIndex, cache) {
            var rowDefs = this._getRowDefs(data, dataIndex);

            return rowDefs.map(function (rowDef) {
              var cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

              if (cachedRenderRows.length) {
                var dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
              } else {
                return {
                  data: data,
                  rowDef: rowDef,
                  dataIndex: dataIndex
                };
              }
            });
          }
          /** Update the map containing the content's column definitions. */

        }, {
          key: "_cacheColumnDefs",
          value: function _cacheColumnDefs() {
            var _this19 = this;

            this._columnDefsByName.clear();

            var columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
            columnDefs.forEach(function (columnDef) {
              if (_this19._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
              }

              _this19._columnDefsByName.set(columnDef.name, columnDef);
            });
          }
          /** Update the list of all available row definitions that can be used. */

        }, {
          key: "_cacheRowDefs",
          value: function _cacheRowDefs() {
            this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
            this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
            this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

            var defaultRowDefs = this._rowDefs.filter(function (def) {
              return !def.when;
            });

            if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableMultipleDefaultRowDefsError();
            }

            this._defaultRowDef = defaultRowDefs[0];
          }
          /**
           * Check if the header, data, or footer rows have changed what columns they want to display or
           * whether the sticky states have changed for the header or footer. If there is a diff, then
           * re-render that section.
           */

        }, {
          key: "_renderUpdatedColumns",
          value: function _renderUpdatedColumns() {
            var columnsDiffReducer = function columnsDiffReducer(acc, def) {
              return acc || !!def.getColumnsDiff();
            }; // Force re-render data rows if the list of column definitions have changed.


            var dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

            if (dataColumnsChanged) {
              this._forceRenderDataRows();
            } // Force re-render header/footer rows if the list of column definitions have changed.


            var headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

            if (headerColumnsChanged) {
              this._forceRenderHeaderRows();
            }

            var footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

            if (footerColumnsChanged) {
              this._forceRenderFooterRows();
            }

            return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
          }
          /**
           * Switch to the provided data source by resetting the data and unsubscribing from the current
           * render change subscription if one exists. If the data source is null, interpret this by
           * clearing the row outlet. Otherwise start listening for new data.
           */

        }, {
          key: "_switchDataSource",
          value: function _switchDataSource(dataSource) {
            this._data = [];

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.isDataSource)(this.dataSource)) {
              this.dataSource.disconnect(this);
            } // Stop listening for data from the previous data source.


            if (this._renderChangeSubscription) {
              this._renderChangeSubscription.unsubscribe();

              this._renderChangeSubscription = null;
            }

            if (!dataSource) {
              if (this._dataDiffer) {
                this._dataDiffer.diff([]);
              }

              this._rowOutlet.viewContainer.clear();
            }

            this._dataSource = dataSource;
          }
          /** Set up a subscription for the data provided by the data source. */

        }, {
          key: "_observeRenderChanges",
          value: function _observeRenderChanges() {
            var _this20 = this;

            // If no data source has been set, there is nothing to observe for changes.
            if (!this.dataSource) {
              return;
            }

            var dataStream;

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.isDataSource)(this.dataSource)) {
              dataStream = this.dataSource.connect(this);
            } else if ((0, rxjs__WEBPACK_IMPORTED_MODULE_8__.isObservable)(this.dataSource)) {
              dataStream = this.dataSource;
            } else if (Array.isArray(this.dataSource)) {
              dataStream = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.dataSource);
            }

            if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableUnknownDataSourceError();
            }

            this._renderChangeSubscription = dataStream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(function (data) {
              _this20._data = data || [];

              _this20.renderRows();
            });
          }
          /**
           * Clears any existing content in the header row outlet and creates a new embedded view
           * in the outlet using the header row definition.
           */

        }, {
          key: "_forceRenderHeaderRows",
          value: function _forceRenderHeaderRows() {
            var _this21 = this;

            // Clear the header row outlet if any content exists.
            if (this._headerRowOutlet.viewContainer.length > 0) {
              this._headerRowOutlet.viewContainer.clear();
            }

            this._headerRowDefs.forEach(function (def, i) {
              return _this21._renderRow(_this21._headerRowOutlet, def, i);
            });

            this.updateStickyHeaderRowStyles();
          }
          /**
           * Clears any existing content in the footer row outlet and creates a new embedded view
           * in the outlet using the footer row definition.
           */

        }, {
          key: "_forceRenderFooterRows",
          value: function _forceRenderFooterRows() {
            var _this22 = this;

            // Clear the footer row outlet if any content exists.
            if (this._footerRowOutlet.viewContainer.length > 0) {
              this._footerRowOutlet.viewContainer.clear();
            }

            this._footerRowDefs.forEach(function (def, i) {
              return _this22._renderRow(_this22._footerRowOutlet, def, i);
            });

            this.updateStickyFooterRowStyles();
          }
          /** Adds the sticky column styles for the rows according to the columns' stick states. */

        }, {
          key: "_addStickyColumnStyles",
          value: function _addStickyColumnStyles(rows, rowDef) {
            var _this23 = this;

            var columnDefs = Array.from(rowDef.columns || []).map(function (columnName) {
              var columnDef = _this23._columnDefsByName.get(columnName);

              if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
              }

              return columnDef;
            });
            var stickyStartStates = columnDefs.map(function (columnDef) {
              return columnDef.sticky;
            });
            var stickyEndStates = columnDefs.map(function (columnDef) {
              return columnDef.stickyEnd;
            });

            this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
          }
          /** Gets the list of rows that have been rendered in the row outlet. */

        }, {
          key: "_getRenderedRows",
          value: function _getRenderedRows(rowOutlet) {
            var renderedRows = [];

            for (var i = 0; i < rowOutlet.viewContainer.length; i++) {
              var viewRef = rowOutlet.viewContainer.get(i);
              renderedRows.push(viewRef.rootNodes[0]);
            }

            return renderedRows;
          }
          /**
           * Get the matching row definitions that should be used for this row data. If there is only
           * one row definition, it is returned. Otherwise, find the row definitions that has a when
           * predicate that returns true with the data. If none return true, return the default row
           * definition.
           */

        }, {
          key: "_getRowDefs",
          value: function _getRowDefs(data, dataIndex) {
            if (this._rowDefs.length == 1) {
              return [this._rowDefs[0]];
            }

            var rowDefs = [];

            if (this.multiTemplateDataRows) {
              rowDefs = this._rowDefs.filter(function (def) {
                return !def.when || def.when(dataIndex, data);
              });
            } else {
              var rowDef = this._rowDefs.find(function (def) {
                return def.when && def.when(dataIndex, data);
              }) || this._defaultRowDef;

              if (rowDef) {
                rowDefs.push(rowDef);
              }
            }

            if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableMissingMatchingRowDefError(data);
            }

            return rowDefs;
          }
        }, {
          key: "_getEmbeddedViewArgs",
          value: function _getEmbeddedViewArgs(renderRow, index) {
            var rowDef = renderRow.rowDef;
            var context = {
              $implicit: renderRow.data
            };
            return {
              templateRef: rowDef.template,
              context: context,
              index: index
            };
          }
          /**
           * Creates a new row template in the outlet and fills it with the set of cell templates.
           * Optionally takes a context to provide to the row and cells, as well as an optional index
           * of where to place the new row template in the outlet.
           */

        }, {
          key: "_renderRow",
          value: function _renderRow(outlet, rowDef, index) {
            var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
            var view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

            this._renderCellTemplateForItem(rowDef, context);

            return view;
          }
        }, {
          key: "_renderCellTemplateForItem",
          value: function _renderCellTemplateForItem(rowDef, context) {
            var _iterator10 = _createForOfIteratorHelper(this._getCellTemplates(rowDef)),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var cellTemplate = _step10.value;

                if (_CdkCellOutlet.mostRecentCellOutlet) {
                  _CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            this._changeDetectorRef.markForCheck();
          }
          /**
           * Updates the index-related context for each row to reflect any changes in the index of the rows,
           * e.g. first/last/even/odd.
           */

        }, {
          key: "_updateRowIndexContext",
          value: function _updateRowIndexContext() {
            var viewContainer = this._rowOutlet.viewContainer;

            for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
              var viewRef = viewContainer.get(renderIndex);
              var context = viewRef.context;
              context.count = count;
              context.first = renderIndex === 0;
              context.last = renderIndex === count - 1;
              context.even = renderIndex % 2 === 0;
              context.odd = !context.even;

              if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
              } else {
                context.index = this._renderRows[renderIndex].dataIndex;
              }
            }
          }
          /** Gets the column definitions for the provided row def. */

        }, {
          key: "_getCellTemplates",
          value: function _getCellTemplates(rowDef) {
            var _this24 = this;

            if (!rowDef || !rowDef.columns) {
              return [];
            }

            return Array.from(rowDef.columns, function (columnId) {
              var column = _this24._columnDefsByName.get(columnId);

              if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
              }

              return rowDef.extractCellTemplate(column);
            });
          }
          /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */

        }, {
          key: "_applyNativeTableSections",
          value: function _applyNativeTableSections() {
            var documentFragment = this._document.createDocumentFragment();

            var sections = [{
              tag: 'thead',
              outlets: [this._headerRowOutlet]
            }, {
              tag: 'tbody',
              outlets: [this._rowOutlet, this._noDataRowOutlet]
            }, {
              tag: 'tfoot',
              outlets: [this._footerRowOutlet]
            }];

            for (var _i2 = 0, _sections = sections; _i2 < _sections.length; _i2++) {
              var section = _sections[_i2];

              var element = this._document.createElement(section.tag);

              element.setAttribute('role', 'rowgroup');

              var _iterator11 = _createForOfIteratorHelper(section.outlets),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var outlet = _step11.value;
                  element.appendChild(outlet.elementRef.nativeElement);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              documentFragment.appendChild(element);
            } // Use a DocumentFragment so we don't hit the DOM on each iteration.


            this._elementRef.nativeElement.appendChild(documentFragment);
          }
          /**
           * Forces a re-render of the data rows. Should be called in cases where there has been an input
           * change that affects the evaluation of which rows should be rendered, e.g. toggling
           * `multiTemplateDataRows` or adding/removing row definitions.
           */

        }, {
          key: "_forceRenderDataRows",
          value: function _forceRenderDataRows() {
            this._dataDiffer.diff([]);

            this._rowOutlet.viewContainer.clear();

            this.renderRows();
          }
          /**
           * Checks if there has been a change in sticky states since last check and applies the correct
           * sticky styles. Since checking resets the "dirty" state, this should only be performed once
           * during a change detection and after the inputs are settled (after content check).
           */

        }, {
          key: "_checkStickyStates",
          value: function _checkStickyStates() {
            var stickyCheckReducer = function stickyCheckReducer(acc, d) {
              return acc || d.hasStickyChanged();
            }; // Note that the check needs to occur for every definition since it notifies the definition
            // that it can reset its dirty state. Using another operator like `some` may short-circuit
            // remaining definitions and leave them in an unchecked state.


            if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyHeaderRowStyles();
            }

            if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
              this.updateStickyFooterRowStyles();
            }

            if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
              this._stickyColumnStylesNeedReset = true;
              this.updateStickyColumnStyles();
            }
          }
          /**
           * Creates the sticky styler that will be used for sticky rows and columns. Listens
           * for directionality changes and provides the latest direction to the styler. Re-applies column
           * stickiness when directionality changes.
           */

        }, {
          key: "_setupStickyStyler",
          value: function _setupStickyStyler() {
            var _this25 = this;

            var direction = this._dir ? this._dir.value : 'ltr';
            this._stickyStyler = new _StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
            (this._dir ? this._dir.change : (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.of)()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(function (value) {
              _this25._stickyStyler.direction = value;

              _this25.updateStickyColumnStyles();
            });
          }
          /** Filters definitions that belong to this table from a QueryList. */

        }, {
          key: "_getOwnDefs",
          value: function _getOwnDefs(items) {
            var _this26 = this;

            return items.filter(function (item) {
              return !item._table || item._table === _this26;
            });
          }
          /** Creates or removes the no data row, depending on whether any data is being shown. */

        }, {
          key: "_updateNoDataRow",
          value: function _updateNoDataRow() {
            var noDataRow = this._customNoDataRow || this._noDataRow;

            if (noDataRow) {
              var shouldShow = this._rowOutlet.viewContainer.length === 0;

              if (shouldShow !== this._isShowingNoDataRow) {
                var container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
              }
            }
          }
        }]);

        return _CdkTable;
      }();

      _CdkTable.ɵfac = function CdkTable_Factory(t) {
        return new (t || _CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_STICKY_POSITIONING_LISTENER, 12));
      };

      _CdkTable.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkTable,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkNoDataRow, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkColumnDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkRowDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkHeaderRowDef, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkFooterRowDef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
          }
        },
        viewQuery: function CdkTable_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_DataRowOutlet, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_HeaderRowOutlet, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_FooterRowOutlet, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_NoDataRowOutlet, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
          }
        },
        hostAttrs: [1, "cdk-table"],
        hostVars: 2,
        hostBindings: function CdkTable_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
          }
        },
        inputs: {
          trackBy: "trackBy",
          dataSource: "dataSource",
          multiTemplateDataRows: "multiTemplateDataRows",
          fixedLayout: "fixedLayout"
        },
        exportAs: ["cdkTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _CDK_TABLE,
          useExisting: _CdkTable
        }, {
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
        }, {
          provide: _COALESCED_STYLE_SCHEDULER2,
          useClass: _CoalescedStyleScheduler2
        }, // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: _STICKY_POSITIONING_LISTENER,
          useValue: null
        }])],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function CdkTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [_HeaderRowOutlet, _DataRowOutlet, _NoDataRowOutlet, _FooterRowOutlet],
        styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
        encapsulation: 2
      });

      _CdkTable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['role']
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY]
          }]
        }, {
          type: _CoalescedStyleScheduler2,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_COALESCED_STYLE_SCHEDULER2]
          }]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_STICKY_POSITIONING_LISTENER]
          }]
        }];
      };

      _CdkTable.propDecorators = {
        trackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dataSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        multiTemplateDataRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        fixedLayout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _rowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_DataRowOutlet, {
            "static": true
          }]
        }],
        _headerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_HeaderRowOutlet, {
            "static": true
          }]
        }],
        _footerRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_FooterRowOutlet, {
            "static": true
          }]
        }],
        _noDataRowOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_NoDataRowOutlet, {
            "static": true
          }]
        }],
        _contentColumnDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_CdkColumnDef, {
            descendants: true
          }]
        }],
        _contentRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_CdkRowDef, {
            descendants: true
          }]
        }],
        _contentHeaderRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_CdkHeaderRowDef, {
            descendants: true
          }]
        }],
        _contentFooterRowDefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_CdkFooterRowDef, {
            descendants: true
          }]
        }],
        _noDataRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_CdkNoDataRow]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-table, table[cdk-table]',
            exportAs: 'cdkTable',
            template: _CDK_TABLE_TEMPLATE,
            host: {
              'class': 'cdk-table',
              '[class.cdk-table-fixed-layout]': 'fixedLayout'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
            // The view for `MatTable` consists entirely of templates declared in other views. As they are
            // declared elsewhere, they are checked when their declaration points are checked.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            providers: [{
              provide: _CDK_TABLE,
              useExisting: _CdkTable
            }, {
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
            }, {
              provide: _COALESCED_STYLE_SCHEDULER2,
              useClass: _CoalescedStyleScheduler2
            }, // Prevent nested tables from seeing this table's StickyPositioningListener.
            {
              provide: _STICKY_POSITIONING_LISTENER,
              useValue: null
            }],
            styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['role']
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY]
            }]
          }, {
            type: _CoalescedStyleScheduler2,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_COALESCED_STYLE_SCHEDULER2]
            }]
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_STICKY_POSITIONING_LISTENER]
            }]
          }];
        }, {
          trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fixedLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_DataRowOutlet, {
              "static": true
            }]
          }],
          _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_HeaderRowOutlet, {
              "static": true
            }]
          }],
          _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_FooterRowOutlet, {
              "static": true
            }]
          }],
          _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_NoDataRowOutlet, {
              "static": true
            }]
          }],
          _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_CdkColumnDef, {
              descendants: true
            }]
          }],
          _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_CdkRowDef, {
              descendants: true
            }]
          }],
          _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_CdkHeaderRowDef, {
              descendants: true
            }]
          }],
          _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_CdkFooterRowDef, {
              descendants: true
            }]
          }],
          _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_CdkNoDataRow]
          }]
        });
      })();
      /** Utility function that gets a merged list of the entries in an array and values of a Set. */


      function mergeArrayAndSet(array, set) {
        return array.concat(Array.from(set));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var _CdkTextColumn = /*#__PURE__*/function () {
        function _CdkTextColumn( // `CdkTextColumn` is always requiring a table, but we just assert it manually
        // for better error reporting.
        // tslint:disable-next-line: lightweight-tokens
        _table, _options) {
          _classCallCheck(this, _CdkTextColumn);

          this._table = _table;
          this._options = _options;
          /** Alignment of the cell values. */

          this.justify = 'start';
          this._options = _options || {};
        }
        /** Column name that should be used to reference this column. */


        _createClass(_CdkTextColumn, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name; // With Ivy, inputs can be initialized before static query results are
            // available. In that case, we defer the synchronization until "ngOnInit" fires.

            this._syncColumnDefName();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._syncColumnDefName();

            if (this.headerText === undefined) {
              this.headerText = this._createDefaultHeaderText();
            }

            if (!this.dataAccessor) {
              this.dataAccessor = this._options.defaultDataAccessor || function (data, name) {
                return data[name];
              };
            }

            if (this._table) {
              // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
              // since the columnDef will not pick up its content by the time the table finishes checking
              // its content and initializing the rows.
              this.columnDef.cell = this.cell;
              this.columnDef.headerCell = this.headerCell;

              this._table.addColumnDef(this.columnDef);
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw getTableTextColumnMissingParentTableError();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._table) {
              this._table.removeColumnDef(this.columnDef);
            }
          }
          /**
           * Creates a default header text. Use the options' header text transformation function if one
           * has been provided. Otherwise simply capitalize the column name.
           */

        }, {
          key: "_createDefaultHeaderText",
          value: function _createDefaultHeaderText() {
            var name = this.name;

            if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getTableTextColumnMissingNameError();
            }

            if (this._options && this._options.defaultHeaderTextTransform) {
              return this._options.defaultHeaderTextTransform(name);
            }

            return name[0].toUpperCase() + name.slice(1);
          }
          /** Synchronizes the column definition name with the text column name. */

        }, {
          key: "_syncColumnDefName",
          value: function _syncColumnDefName() {
            if (this.columnDef) {
              this.columnDef.name = this.name;
            }
          }
        }]);

        return _CdkTextColumn;
      }();

      _CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
        return new (t || _CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_TEXT_COLUMN_OPTIONS, 8));
      };

      _CdkTextColumn.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkTextColumn,
        selectors: [["cdk-text-column"]],
        viewQuery: function CdkTextColumn_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_CdkColumnDef, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_CdkCellDef, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_CdkHeaderCellDef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          }
        },
        inputs: {
          justify: "justify",
          name: "name",
          headerText: "headerText",
          dataAccessor: "dataAccessor"
        },
        decls: 3,
        vars: 0,
        consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
        template: function CdkTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [_CdkColumnDef, _CdkHeaderCellDef, _CdkCellDef, _CdkHeaderCell, _CdkCell],
        encapsulation: 2
      });

      _CdkTextColumn.ctorParameters = function () {
        return [{
          type: _CdkTable,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_TEXT_COLUMN_OPTIONS]
          }]
        }];
      };

      _CdkTextColumn.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dataAccessor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        justify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        columnDef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_CdkColumnDef, {
            "static": true
          }]
        }],
        cell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_CdkCellDef, {
            "static": true
          }]
        }],
        headerCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_CdkHeaderCellDef, {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-text-column',
            template: "\n    <ng-container cdkColumnDef>\n      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td cdk-cell *cdkCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
          }]
        }], function () {
          return [{
            type: _CdkTable,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_TEXT_COLUMN_OPTIONS]
            }]
          }];
        }, {
          justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_CdkColumnDef, {
              "static": true
            }]
          }],
          cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_CdkCellDef, {
              "static": true
            }]
          }],
          headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_CdkHeaderCellDef, {
              "static": true
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


      var EXPORTED_DECLARATIONS = [_CdkTable, _CdkRowDef, _CdkCellDef, _CdkCellOutlet, _CdkHeaderCellDef, _CdkFooterCellDef, _CdkColumnDef, _CdkCell, _CdkRow, _CdkHeaderCell, _CdkFooterCell, _CdkHeaderRow, _CdkHeaderRowDef, _CdkFooterRow, _CdkFooterRowDef, _DataRowOutlet, _HeaderRowOutlet, _FooterRowOutlet, _CdkTextColumn, _CdkNoDataRow, _CdkRecycleRows, _NoDataRowOutlet];

      var _CdkTableModule = function _CdkTableModule() {
        _classCallCheck(this, _CdkTableModule);
      };

      _CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
        return new (t || _CdkTableModule)();
      };

      _CdkTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CdkTableModule
      });
      _CdkTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: EXPORTED_DECLARATIONS,
            declarations: EXPORTED_DECLARATIONS,
            imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CdkTableModule, {
          declarations: function declarations() {
            return [_CdkTable, _CdkRowDef, _CdkCellDef, _CdkCellOutlet, _CdkHeaderCellDef, _CdkFooterCellDef, _CdkColumnDef, _CdkCell, _CdkRow, _CdkHeaderCell, _CdkFooterCell, _CdkHeaderRow, _CdkHeaderRowDef, _CdkFooterRow, _CdkFooterRowDef, _DataRowOutlet, _HeaderRowOutlet, _FooterRowOutlet, _CdkTextColumn, _CdkNoDataRow, _CdkRecycleRows, _NoDataRowOutlet];
          },
          imports: function imports() {
            return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule];
          },
          exports: function exports() {
            return [_CdkTable, _CdkRowDef, _CdkCellDef, _CdkCellOutlet, _CdkHeaderCellDef, _CdkFooterCellDef, _CdkColumnDef, _CdkCell, _CdkRow, _CdkHeaderCell, _CdkFooterCell, _CdkHeaderRow, _CdkHeaderRowDef, _CdkFooterRow, _CdkFooterRowDef, _DataRowOutlet, _HeaderRowOutlet, _FooterRowOutlet, _CdkTextColumn, _CdkNoDataRow, _CdkRecycleRows, _NoDataRowOutlet];
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
      //# sourceMappingURL=table.js.map

      /***/

    },

    /***/
    91841:
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HTTP_INTERCEPTORS": function HTTP_INTERCEPTORS() {
          return (
            /* binding */
            _HTTP_INTERCEPTORS
          );
        },

        /* harmony export */
        "HttpBackend": function HttpBackend() {
          return (
            /* binding */
            _HttpBackend
          );
        },

        /* harmony export */
        "HttpClient": function HttpClient() {
          return (
            /* binding */
            _HttpClient
          );
        },

        /* harmony export */
        "HttpClientJsonpModule": function HttpClientJsonpModule() {
          return (
            /* binding */
            _HttpClientJsonpModule
          );
        },

        /* harmony export */
        "HttpClientModule": function HttpClientModule() {
          return (
            /* binding */
            _HttpClientModule
          );
        },

        /* harmony export */
        "HttpClientXsrfModule": function HttpClientXsrfModule() {
          return (
            /* binding */
            _HttpClientXsrfModule
          );
        },

        /* harmony export */
        "HttpContext": function HttpContext() {
          return (
            /* binding */
            _HttpContext
          );
        },

        /* harmony export */
        "HttpContextToken": function HttpContextToken() {
          return (
            /* binding */
            _HttpContextToken
          );
        },

        /* harmony export */
        "HttpErrorResponse": function HttpErrorResponse() {
          return (
            /* binding */
            _HttpErrorResponse
          );
        },

        /* harmony export */
        "HttpEventType": function HttpEventType() {
          return (
            /* binding */
            _HttpEventType
          );
        },

        /* harmony export */
        "HttpHandler": function HttpHandler() {
          return (
            /* binding */
            _HttpHandler
          );
        },

        /* harmony export */
        "HttpHeaderResponse": function HttpHeaderResponse() {
          return (
            /* binding */
            _HttpHeaderResponse
          );
        },

        /* harmony export */
        "HttpHeaders": function HttpHeaders() {
          return (
            /* binding */
            _HttpHeaders
          );
        },

        /* harmony export */
        "HttpParams": function HttpParams() {
          return (
            /* binding */
            _HttpParams
          );
        },

        /* harmony export */
        "HttpRequest": function HttpRequest() {
          return (
            /* binding */
            _HttpRequest
          );
        },

        /* harmony export */
        "HttpResponse": function HttpResponse() {
          return (
            /* binding */
            _HttpResponse
          );
        },

        /* harmony export */
        "HttpResponseBase": function HttpResponseBase() {
          return (
            /* binding */
            _HttpResponseBase
          );
        },

        /* harmony export */
        "HttpUrlEncodingCodec": function HttpUrlEncodingCodec() {
          return (
            /* binding */
            _HttpUrlEncodingCodec
          );
        },

        /* harmony export */
        "HttpXhrBackend": function HttpXhrBackend() {
          return (
            /* binding */
            _HttpXhrBackend
          );
        },

        /* harmony export */
        "HttpXsrfTokenExtractor": function HttpXsrfTokenExtractor() {
          return (
            /* binding */
            _HttpXsrfTokenExtractor
          );
        },

        /* harmony export */
        "JsonpClientBackend": function JsonpClientBackend() {
          return (
            /* binding */
            _JsonpClientBackend
          );
        },

        /* harmony export */
        "JsonpInterceptor": function JsonpInterceptor() {
          return (
            /* binding */
            _JsonpInterceptor
          );
        },

        /* harmony export */
        "XhrFactory": function XhrFactory() {
          return (
            /* binding */
            _XhrFactory
          );
        },

        /* harmony export */
        "ɵHttpInterceptingHandler": function ɵHttpInterceptingHandler() {
          return (
            /* binding */
            HttpInterceptingHandler
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_a": function ɵangular_packages_common_http_http_a() {
          return (
            /* binding */
            NoopInterceptor
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_b": function ɵangular_packages_common_http_http_b() {
          return (
            /* binding */
            JsonpCallbackContext
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_c": function ɵangular_packages_common_http_http_c() {
          return (
            /* binding */
            jsonpCallbackContext
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_d": function ɵangular_packages_common_http_http_d() {
          return (
            /* binding */
            XSRF_COOKIE_NAME
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_e": function ɵangular_packages_common_http_http_e() {
          return (
            /* binding */
            XSRF_HEADER_NAME
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_f": function ɵangular_packages_common_http_http_f() {
          return (
            /* binding */
            HttpXsrfCookieExtractor
          );
        },

        /* harmony export */
        "ɵangular_packages_common_http_http_g": function ɵangular_packages_common_http_http_g() {
          return (
            /* binding */
            HttpXsrfInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      94612);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /**
       * @license Angular v12.0.5
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
       * `HttpResponse`.
       *
       * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
       * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
       * `HttpBackend`.
       *
       * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
       *
       * @publicApi
       */


      var _HttpHandler = function _HttpHandler() {
        _classCallCheck(this, _HttpHandler);
      };
      /**
       * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
       *
       * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
       *
       * When injected, `HttpBackend` dispatches requests directly to the backend, without going
       * through the interceptor chain.
       *
       * @publicApi
       */


      var _HttpBackend = function _HttpBackend() {
        _classCallCheck(this, _HttpBackend);
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Represents the header configuration options for an HTTP request.
       * Instances are immutable. Modifying methods return a cloned
       * instance with the change. The original object is never changed.
       *
       * @publicApi
       */


      var _HttpHeaders = /*#__PURE__*/function () {
        /**  Constructs a new HTTP header object with the given values.*/
        function _HttpHeaders(headers) {
          var _this27 = this;

          _classCallCheck(this, _HttpHeaders);

          /**
           * Internal map of lowercased header names to the normalized
           * form of the name (the form seen first).
           */
          this.normalizedNames = new Map();
          /**
           * Queued updates to be materialized the next initialization.
           */

          this.lazyUpdate = null;

          if (!headers) {
            this.headers = new Map();
          } else if (typeof headers === 'string') {
            this.lazyInit = function () {
              _this27.headers = new Map();
              headers.split('\n').forEach(function (line) {
                var index = line.indexOf(':');

                if (index > 0) {
                  var name = line.slice(0, index);
                  var key = name.toLowerCase();
                  var value = line.slice(index + 1).trim();

                  _this27.maybeSetNormalizedName(name, key);

                  if (_this27.headers.has(key)) {
                    _this27.headers.get(key).push(value);
                  } else {
                    _this27.headers.set(key, [value]);
                  }
                }
              });
            };
          } else {
            this.lazyInit = function () {
              _this27.headers = new Map();
              Object.keys(headers).forEach(function (name) {
                var values = headers[name];
                var key = name.toLowerCase();

                if (typeof values === 'string') {
                  values = [values];
                }

                if (values.length > 0) {
                  _this27.headers.set(key, values);

                  _this27.maybeSetNormalizedName(name, key);
                }
              });
            };
          }
        }
        /**
         * Checks for existence of a given header.
         *
         * @param name The header name to check for existence.
         *
         * @returns True if the header exists, false otherwise.
         */


        _createClass(_HttpHeaders, [{
          key: "has",
          value: function has(name) {
            this.init();
            return this.headers.has(name.toLowerCase());
          }
          /**
           * Retrieves the first value of a given header.
           *
           * @param name The header name.
           *
           * @returns The value string if the header exists, null otherwise
           */

        }, {
          key: "get",
          value: function get(name) {
            this.init();
            var values = this.headers.get(name.toLowerCase());
            return values && values.length > 0 ? values[0] : null;
          }
          /**
           * Retrieves the names of the headers.
           *
           * @returns A list of header names.
           */

        }, {
          key: "keys",
          value: function keys() {
            this.init();
            return Array.from(this.normalizedNames.values());
          }
          /**
           * Retrieves a list of values for a given header.
           *
           * @param name The header name from which to retrieve values.
           *
           * @returns A string of values if the header exists, null otherwise.
           */

        }, {
          key: "getAll",
          value: function getAll(name) {
            this.init();
            return this.headers.get(name.toLowerCase()) || null;
          }
          /**
           * Appends a new value to the existing set of values for a header
           * and returns them in a clone of the original instance.
           *
           * @param name The header name for which to append the values.
           * @param value The value to append.
           *
           * @returns A clone of the HTTP headers object with the value appended to the given header.
           */

        }, {
          key: "append",
          value: function append(name, value) {
            return this.clone({
              name: name,
              value: value,
              op: 'a'
            });
          }
          /**
           * Sets or modifies a value for a given header in a clone of the original instance.
           * If the header already exists, its value is replaced with the given value
           * in the returned object.
           *
           * @param name The header name.
           * @param value The value or values to set or overide for the given header.
           *
           * @returns A clone of the HTTP headers object with the newly set header value.
           */

        }, {
          key: "set",
          value: function set(name, value) {
            return this.clone({
              name: name,
              value: value,
              op: 's'
            });
          }
          /**
           * Deletes values for a given header in a clone of the original instance.
           *
           * @param name The header name.
           * @param value The value or values to delete for the given header.
           *
           * @returns A clone of the HTTP headers object with the given value deleted.
           */

        }, {
          key: "delete",
          value: function _delete(name, value) {
            return this.clone({
              name: name,
              value: value,
              op: 'd'
            });
          }
        }, {
          key: "maybeSetNormalizedName",
          value: function maybeSetNormalizedName(name, lcName) {
            if (!this.normalizedNames.has(lcName)) {
              this.normalizedNames.set(lcName, name);
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this28 = this;

            if (!!this.lazyInit) {
              if (this.lazyInit instanceof _HttpHeaders) {
                this.copyFrom(this.lazyInit);
              } else {
                this.lazyInit();
              }

              this.lazyInit = null;

              if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) {
                  return _this28.applyUpdate(update);
                });
                this.lazyUpdate = null;
              }
            }
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(other) {
            var _this29 = this;

            other.init();
            Array.from(other.headers.keys()).forEach(function (key) {
              _this29.headers.set(key, other.headers.get(key));

              _this29.normalizedNames.set(key, other.normalizedNames.get(key));
            });
          }
        }, {
          key: "clone",
          value: function clone(update) {
            var clone = new _HttpHeaders();
            clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
            clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
            return clone;
          }
        }, {
          key: "applyUpdate",
          value: function applyUpdate(update) {
            var key = update.name.toLowerCase();

            switch (update.op) {
              case 'a':
              case 's':
                var value = update.value;

                if (typeof value === 'string') {
                  value = [value];
                }

                if (value.length === 0) {
                  return;
                }

                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, _toConsumableArray(value));
                this.headers.set(key, base);
                break;

              case 'd':
                var toDelete = update.value;

                if (!toDelete) {
                  this.headers["delete"](key);
                  this.normalizedNames["delete"](key);
                } else {
                  var existing = this.headers.get(key);

                  if (!existing) {
                    return;
                  }

                  existing = existing.filter(function (value) {
                    return toDelete.indexOf(value) === -1;
                  });

                  if (existing.length === 0) {
                    this.headers["delete"](key);
                    this.normalizedNames["delete"](key);
                  } else {
                    this.headers.set(key, existing);
                  }
                }

                break;
            }
          }
          /**
           * @internal
           */

        }, {
          key: "forEach",
          value: function forEach(fn) {
            var _this30 = this;

            this.init();
            Array.from(this.normalizedNames.keys()).forEach(function (key) {
              return fn(_this30.normalizedNames.get(key), _this30.headers.get(key));
            });
          }
        }]);

        return _HttpHeaders;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Provides encoding and decoding of URL parameter and query-string values.
       *
       * Serializes and parses URL parameter keys and values to encode and decode them.
       * If you pass URL query parameters without encoding,
       * the query parameters can be misinterpreted at the receiving end.
       *
       *
       * @publicApi
       */


      var _HttpUrlEncodingCodec = /*#__PURE__*/function () {
        function _HttpUrlEncodingCodec() {
          _classCallCheck(this, _HttpUrlEncodingCodec);
        }

        _createClass(_HttpUrlEncodingCodec, [{
          key: "encodeKey",
          value:
          /**
           * Encodes a key name for a URL parameter or query-string.
           * @param key The key name.
           * @returns The encoded key name.
           */
          function encodeKey(key) {
            return standardEncoding(key);
          }
          /**
           * Encodes the value of a URL parameter or query-string.
           * @param value The value.
           * @returns The encoded value.
           */

        }, {
          key: "encodeValue",
          value: function encodeValue(value) {
            return standardEncoding(value);
          }
          /**
           * Decodes an encoded URL parameter or query-string key.
           * @param key The encoded key name.
           * @returns The decoded key name.
           */

        }, {
          key: "decodeKey",
          value: function decodeKey(key) {
            return decodeURIComponent(key);
          }
          /**
           * Decodes an encoded URL parameter or query-string value.
           * @param value The encoded value.
           * @returns The decoded value.
           */

        }, {
          key: "decodeValue",
          value: function decodeValue(value) {
            return decodeURIComponent(value);
          }
        }]);

        return _HttpUrlEncodingCodec;
      }();

      function paramParser(rawParams, codec) {
        var map = new Map();

        if (rawParams.length > 0) {
          // The `window.location.search` can be used while creating an instance of the `HttpParams` class
          // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
          // may start with the `?` char, so we strip it if it's present.
          var params = rawParams.replace(/^\?/, '').split('&');
          params.forEach(function (param) {
            var eqIdx = param.indexOf('=');

            var _ref3 = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
                _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                val = _ref4[1];

            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
          });
        }

        return map;
      }

      function standardEncoding(v) {
        return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
      }

      function valueToString(value) {
        return "".concat(value);
      }
      /**
       * An HTTP request/response body that represents serialized parameters,
       * per the MIME type `application/x-www-form-urlencoded`.
       *
       * This class is immutable; all mutation operations return a new instance.
       *
       * @publicApi
       */


      var _HttpParams = /*#__PURE__*/function () {
        function _HttpParams() {
          var _this31 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, _HttpParams);

          this.updates = null;
          this.cloneFrom = null;
          this.encoder = options.encoder || new _HttpUrlEncodingCodec();

          if (!!options.fromString) {
            if (!!options.fromObject) {
              throw new Error("Cannot specify both fromString and fromObject.");
            }

            this.map = paramParser(options.fromString, this.encoder);
          } else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
              var value = options.fromObject[key];

              _this31.map.set(key, Array.isArray(value) ? value : [value]);
            });
          } else {
            this.map = null;
          }
        }
        /**
         * Reports whether the body includes one or more values for a given parameter.
         * @param param The parameter name.
         * @returns True if the parameter has one or more values,
         * false if it has no value or is not present.
         */


        _createClass(_HttpParams, [{
          key: "has",
          value: function has(param) {
            this.init();
            return this.map.has(param);
          }
          /**
           * Retrieves the first value for a parameter.
           * @param param The parameter name.
           * @returns The first value of the given parameter,
           * or `null` if the parameter is not present.
           */

        }, {
          key: "get",
          value: function get(param) {
            this.init();
            var res = this.map.get(param);
            return !!res ? res[0] : null;
          }
          /**
           * Retrieves all values for a  parameter.
           * @param param The parameter name.
           * @returns All values in a string array,
           * or `null` if the parameter not present.
           */

        }, {
          key: "getAll",
          value: function getAll(param) {
            this.init();
            return this.map.get(param) || null;
          }
          /**
           * Retrieves all the parameters for this body.
           * @returns The parameter names in a string array.
           */

        }, {
          key: "keys",
          value: function keys() {
            this.init();
            return Array.from(this.map.keys());
          }
          /**
           * Appends a new value to existing values for a parameter.
           * @param param The parameter name.
           * @param value The new value to add.
           * @return A new body with the appended value.
           */

        }, {
          key: "append",
          value: function append(param, value) {
            return this.clone({
              param: param,
              value: value,
              op: 'a'
            });
          }
          /**
           * Constructs a new body with appended values for the given parameter name.
           * @param params parameters and values
           * @return A new body with the new value.
           */

        }, {
          key: "appendAll",
          value: function appendAll(params) {
            var updates = [];
            Object.keys(params).forEach(function (param) {
              var value = params[param];

              if (Array.isArray(value)) {
                value.forEach(function (_value) {
                  updates.push({
                    param: param,
                    value: _value,
                    op: 'a'
                  });
                });
              } else {
                updates.push({
                  param: param,
                  value: value,
                  op: 'a'
                });
              }
            });
            return this.clone(updates);
          }
          /**
           * Replaces the value for a parameter.
           * @param param The parameter name.
           * @param value The new value.
           * @return A new body with the new value.
           */

        }, {
          key: "set",
          value: function set(param, value) {
            return this.clone({
              param: param,
              value: value,
              op: 's'
            });
          }
          /**
           * Removes a given value or all values from a parameter.
           * @param param The parameter name.
           * @param value The value to remove, if provided.
           * @return A new body with the given value removed, or with all values
           * removed if no value is specified.
           */

        }, {
          key: "delete",
          value: function _delete(param, value) {
            return this.clone({
              param: param,
              value: value,
              op: 'd'
            });
          }
          /**
           * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
           * separated by `&`s.
           */

        }, {
          key: "toString",
          value: function toString() {
            var _this32 = this;

            this.init();
            return this.keys().map(function (key) {
              var eKey = _this32.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
              // `b: []` produces `''`
              // `c: ['1', '2']` produces `'c=1&c=2'`


              return _this32.map.get(key).map(function (value) {
                return eKey + '=' + _this32.encoder.encodeValue(value);
              }).join('&');
            }) // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(function (param) {
              return param !== '';
            }).join('&');
          }
        }, {
          key: "clone",
          value: function clone(update) {
            var clone = new _HttpParams({
              encoder: this.encoder
            });
            clone.cloneFrom = this.cloneFrom || this;
            clone.updates = (this.updates || []).concat(update);
            return clone;
          }
        }, {
          key: "init",
          value: function init() {
            var _this33 = this;

            if (this.map === null) {
              this.map = new Map();
            }

            if (this.cloneFrom !== null) {
              this.cloneFrom.init();
              this.cloneFrom.keys().forEach(function (key) {
                return _this33.map.set(key, _this33.cloneFrom.map.get(key));
              });
              this.updates.forEach(function (update) {
                switch (update.op) {
                  case 'a':
                  case 's':
                    var base = (update.op === 'a' ? _this33.map.get(update.param) : undefined) || [];
                    base.push(valueToString(update.value));

                    _this33.map.set(update.param, base);

                    break;

                  case 'd':
                    if (update.value !== undefined) {
                      var _base2 = _this33.map.get(update.param) || [];

                      var idx = _base2.indexOf(valueToString(update.value));

                      if (idx !== -1) {
                        _base2.splice(idx, 1);
                      }

                      if (_base2.length > 0) {
                        _this33.map.set(update.param, _base2);
                      } else {
                        _this33.map["delete"](update.param);
                      }
                    } else {
                      _this33.map["delete"](update.param);

                      break;
                    }

                }
              });
              this.cloneFrom = this.updates = null;
            }
          }
        }]);

        return _HttpParams;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A token used to manipulate and access values stored in `HttpContext`.
       *
       * @publicApi
       */


      var _HttpContextToken = function _HttpContextToken(defaultValue) {
        _classCallCheck(this, _HttpContextToken);

        this.defaultValue = defaultValue;
      };
      /**
       * Http context stores arbitrary user defined values and ensures type safety without
       * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
       *
       * This context is mutable and is shared between cloned requests unless explicitly specified.
       *
       * @usageNotes
       *
       * ### Usage Example
       *
       * ```typescript
       * // inside cache.interceptors.ts
       * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
       *
       * export class CacheInterceptor implements HttpInterceptor {
       *
       *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
       *     if (req.context.get(IS_CACHE_ENABLED) === true) {
       *       return ...;
       *     }
       *     return delegate.handle(req);
       *   }
       * }
       *
       * // inside a service
       *
       * this.httpClient.get('/api/weather', {
       *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
       * }).subscribe(...);
       * ```
       *
       * @publicApi
       */


      var _HttpContext = /*#__PURE__*/function () {
        function _HttpContext() {
          _classCallCheck(this, _HttpContext);

          this.map = new Map();
        }
        /**
         * Store a value in the context. If a value is already present it will be overwritten.
         *
         * @param token The reference to an instance of `HttpContextToken`.
         * @param value The value to store.
         *
         * @returns A reference to itself for easy chaining.
         */


        _createClass(_HttpContext, [{
          key: "set",
          value: function set(token, value) {
            this.map.set(token, value);
            return this;
          }
          /**
           * Retrieve the value associated with the given token.
           *
           * @param token The reference to an instance of `HttpContextToken`.
           *
           * @returns The stored value or default if one is defined.
           */

        }, {
          key: "get",
          value: function get(token) {
            if (!this.map.has(token)) {
              this.map.set(token, token.defaultValue());
            }

            return this.map.get(token);
          }
          /**
           * Delete the value associated with the given token.
           *
           * @param token The reference to an instance of `HttpContextToken`.
           *
           * @returns A reference to itself for easy chaining.
           */

        }, {
          key: "delete",
          value: function _delete(token) {
            this.map["delete"](token);
            return this;
          }
          /**
           * @returns a list of tokens currently stored in the context.
           */

        }, {
          key: "keys",
          value: function keys() {
            return this.map.keys();
          }
        }]);

        return _HttpContext;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Determine whether the given HTTP method may include a body.
       */


      function mightHaveBody(method) {
        switch (method) {
          case 'DELETE':
          case 'GET':
          case 'HEAD':
          case 'OPTIONS':
          case 'JSONP':
            return false;

          default:
            return true;
        }
      }
      /**
       * Safely assert whether the given value is an ArrayBuffer.
       *
       * In some execution environments ArrayBuffer is not defined.
       */


      function isArrayBuffer(value) {
        return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
      }
      /**
       * Safely assert whether the given value is a Blob.
       *
       * In some execution environments Blob is not defined.
       */


      function isBlob(value) {
        return typeof Blob !== 'undefined' && value instanceof Blob;
      }
      /**
       * Safely assert whether the given value is a FormData instance.
       *
       * In some execution environments FormData is not defined.
       */


      function isFormData(value) {
        return typeof FormData !== 'undefined' && value instanceof FormData;
      }
      /**
       * An outgoing HTTP request with an optional typed body.
       *
       * `HttpRequest` represents an outgoing request, including URL, method,
       * headers, body, and other request configuration options. Instances should be
       * assumed to be immutable. To modify a `HttpRequest`, the `clone`
       * method should be used.
       *
       * @publicApi
       */


      var _HttpRequest = /*#__PURE__*/function () {
        function _HttpRequest(method, url, third, fourth) {
          _classCallCheck(this, _HttpRequest);

          this.url = url;
          /**
           * The request body, or `null` if one isn't set.
           *
           * Bodies are not enforced to be immutable, as they can include a reference to any
           * user-defined data type. However, interceptors should take care to preserve
           * idempotence by treating them as such.
           */

          this.body = null;
          /**
           * Whether this request should be made in a way that exposes progress events.
           *
           * Progress events are expensive (change detection runs on each event) and so
           * they should only be requested if the consumer intends to monitor them.
           */

          this.reportProgress = false;
          /**
           * Whether this request should be sent with outgoing credentials (cookies).
           */

          this.withCredentials = false;
          /**
           * The expected response type of the server.
           *
           * This is used to parse the response appropriately before returning it to
           * the requestee.
           */

          this.responseType = 'json';
          this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
          // options, if any.

          var options; // Check whether a body argument is expected. The only valid way to omit
          // the body argument is to use a known no-body method like GET.

          if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = third !== undefined ? third : null;
            options = fourth;
          } else {
            // No body required, options are the third argument. The body stays null.
            options = third;
          } // If options have been passed, interpret them.


          if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

            if (!!options.responseType) {
              this.responseType = options.responseType;
            } // Override headers if they're provided.


            if (!!options.headers) {
              this.headers = options.headers;
            }

            if (!!options.context) {
              this.context = options.context;
            }

            if (!!options.params) {
              this.params = options.params;
            }
          } // If no headers have been passed in, construct a new HttpHeaders instance.


          if (!this.headers) {
            this.headers = new _HttpHeaders();
          } // If no context have been passed in, construct a new HttpContext instance.


          if (!this.context) {
            this.context = new _HttpContext();
          } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


          if (!this.params) {
            this.params = new _HttpParams();
            this.urlWithParams = url;
          } else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();

            if (params.length === 0) {
              // No parameters, the visible URL is just the URL given at creation time.
              this.urlWithParams = url;
            } else {
              // Does the URL already have query parameters? Look for '?'.
              var qIdx = url.indexOf('?'); // There are 3 cases to handle:
              // 1) No existing parameters -> append '?' followed by params.
              // 2) '?' exists and is followed by existing query string ->
              //    append '&' followed by params.
              // 3) '?' exists at the end of the url -> append params directly.
              // This basically amounts to determining the character, if any, with
              // which to join the URL and parameters.

              var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
              this.urlWithParams = url + sep + params;
            }
          }
        }
        /**
         * Transform the free-form body into a serialized format suitable for
         * transmission to the server.
         */


        _createClass(_HttpRequest, [{
          key: "serializeBody",
          value: function serializeBody() {
            // If no body is present, no need to serialize it.
            if (this.body === null) {
              return null;
            } // Check whether the body is already in a serialized form. If so,
            // it can just be returned directly.


            if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
              return this.body;
            } // Check whether the body is an instance of HttpUrlEncodedParams.


            if (this.body instanceof _HttpParams) {
              return this.body.toString();
            } // Check whether the body is an object or array, and serialize with JSON if so.


            if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
              return JSON.stringify(this.body);
            } // Fall back on toString() for everything else.


            return this.body.toString();
          }
          /**
           * Examine the body and attempt to infer an appropriate MIME type
           * for it.
           *
           * If no such type can be inferred, this method will return `null`.
           */

        }, {
          key: "detectContentTypeHeader",
          value: function detectContentTypeHeader() {
            // An empty body has no content type.
            if (this.body === null) {
              return null;
            } // FormData bodies rely on the browser's content type assignment.


            if (isFormData(this.body)) {
              return null;
            } // Blobs usually have their own content type. If it doesn't, then
            // no type can be inferred.


            if (isBlob(this.body)) {
              return this.body.type || null;
            } // Array buffers have unknown contents and thus no type can be inferred.


            if (isArrayBuffer(this.body)) {
              return null;
            } // Technically, strings could be a form of JSON data, but it's safe enough
            // to assume they're plain strings.


            if (typeof this.body === 'string') {
              return 'text/plain';
            } // `HttpUrlEncodedParams` has its own content-type.


            if (this.body instanceof _HttpParams) {
              return 'application/x-www-form-urlencoded;charset=UTF-8';
            } // Arrays, objects, boolean and numbers will be encoded as JSON.


            if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
              return 'application/json';
            } // No type could be inferred.


            return null;
          }
        }, {
          key: "clone",
          value: function clone() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _a; // For method, url, and responseType, take the current value unless
            // it is overridden in the update hash.


            var method = update.method || this.method;
            var url = update.url || this.url;
            var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
            // whatever current body is present is being overridden with an empty
            // body, whereas an `undefined` value in update.body implies no
            // override.

            var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
            // `false` and `undefined` in the update args.

            var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
            var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
            // `setParams` are used.

            var headers = update.headers || this.headers;
            var params = update.params || this.params; // Pass on context if needed

            var context = (_a = update.context) !== null && _a !== void 0 ? _a : this.context; // Check whether the caller has asked to add headers.

            if (update.setHeaders !== undefined) {
              // Set every requested header.
              headers = Object.keys(update.setHeaders).reduce(function (headers, name) {
                return headers.set(name, update.setHeaders[name]);
              }, headers);
            } // Check whether the caller has asked to set params.


            if (update.setParams) {
              // Set every requested param.
              params = Object.keys(update.setParams).reduce(function (params, param) {
                return params.set(param, update.setParams[param]);
              }, params);
            } // Finally, construct the new HttpRequest using the pieces from above.


            return new _HttpRequest(method, url, body, {
              params: params,
              headers: headers,
              context: context,
              reportProgress: reportProgress,
              responseType: responseType,
              withCredentials: withCredentials
            });
          }
        }]);

        return _HttpRequest;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Type enumeration for the different kinds of `HttpEvent`.
       *
       * @publicApi
       */


      var _HttpEventType;

      (function (HttpEventType) {
        /**
         * The request was sent out over the wire.
         */
        HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
        /**
         * An upload progress event was received.
         */

        HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
        /**
         * The response status code and headers were received.
         */

        HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
        /**
         * A download progress event was received.
         */

        HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
        /**
         * The full response including the body was received.
         */

        HttpEventType[HttpEventType["Response"] = 4] = "Response";
        /**
         * A custom event from an interceptor or a backend.
         */

        HttpEventType[HttpEventType["User"] = 5] = "User";
      })(_HttpEventType || (_HttpEventType = {}));
      /**
       * Base class for both `HttpResponse` and `HttpHeaderResponse`.
       *
       * @publicApi
       */


      var _HttpResponseBase =
      /**
       * Super-constructor for all responses.
       *
       * The single parameter accepted is an initialization hash. Any properties
       * of the response passed there will override the default values.
       */
      function _HttpResponseBase(init) {
        var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
        var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

        _classCallCheck(this, _HttpResponseBase);

        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new _HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null; // Cache the ok value to avoid defining a getter.

        this.ok = this.status >= 200 && this.status < 300;
      };
      /**
       * A partial HTTP response which only includes the status and header data,
       * but no response body.
       *
       * `HttpHeaderResponse` is a `HttpEvent` available on the response
       * event stream, only when progress events are requested.
       *
       * @publicApi
       */


      var _HttpHeaderResponse = /*#__PURE__*/function (_HttpResponseBase2) {
        _inherits(_HttpHeaderResponse, _HttpResponseBase2);

        var _super12 = _createSuper(_HttpHeaderResponse);

        /**
         * Create a new `HttpHeaderResponse` with the given parameters.
         */
        function _HttpHeaderResponse() {
          var _this34;

          var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, _HttpHeaderResponse);

          _this34 = _super12.call(this, init);
          _this34.type = _HttpEventType.ResponseHeader;
          return _this34;
        }
        /**
         * Copy this `HttpHeaderResponse`, overriding its contents with the
         * given parameter hash.
         */


        _createClass(_HttpHeaderResponse, [{
          key: "clone",
          value: function clone() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            // Perform a straightforward initialization of the new HttpHeaderResponse,
            // overriding the current parameters with new ones if given.
            return new _HttpHeaderResponse({
              headers: update.headers || this.headers,
              status: update.status !== undefined ? update.status : this.status,
              statusText: update.statusText || this.statusText,
              url: update.url || this.url || undefined
            });
          }
        }]);

        return _HttpHeaderResponse;
      }(_HttpResponseBase);
      /**
       * A full HTTP response, including a typed response body (which may be `null`
       * if one was not returned).
       *
       * `HttpResponse` is a `HttpEvent` available on the response event
       * stream.
       *
       * @publicApi
       */


      var _HttpResponse = /*#__PURE__*/function (_HttpResponseBase3) {
        _inherits(_HttpResponse, _HttpResponseBase3);

        var _super13 = _createSuper(_HttpResponse);

        /**
         * Construct a new `HttpResponse`.
         */
        function _HttpResponse() {
          var _this35;

          var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, _HttpResponse);

          _this35 = _super13.call(this, init);
          _this35.type = _HttpEventType.Response;
          _this35.body = init.body !== undefined ? init.body : null;
          return _this35;
        }

        _createClass(_HttpResponse, [{
          key: "clone",
          value: function clone() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new _HttpResponse({
              body: update.body !== undefined ? update.body : this.body,
              headers: update.headers || this.headers,
              status: update.status !== undefined ? update.status : this.status,
              statusText: update.statusText || this.statusText,
              url: update.url || this.url || undefined
            });
          }
        }]);

        return _HttpResponse;
      }(_HttpResponseBase);
      /**
       * A response that represents an error or failure, either from a
       * non-successful HTTP status, an error while executing the request,
       * or some other failure which occurred during the parsing of the response.
       *
       * Any error returned on the `Observable` response stream will be
       * wrapped in an `HttpErrorResponse` to provide additional context about
       * the state of the HTTP layer when the error occurred. The error property
       * will contain either a wrapped Error object or the error response returned
       * from the server.
       *
       * @publicApi
       */


      var _HttpErrorResponse = /*#__PURE__*/function (_HttpResponseBase4) {
        _inherits(_HttpErrorResponse, _HttpResponseBase4);

        var _super14 = _createSuper(_HttpErrorResponse);

        function _HttpErrorResponse(init) {
          var _this36;

          _classCallCheck(this, _HttpErrorResponse);

          // Initialize with a default status of 0 / Unknown Error.
          _this36 = _super14.call(this, init, 0, 'Unknown Error');
          _this36.name = 'HttpErrorResponse';
          /**
           * Errors are never okay, even when the status code is in the 2xx success range.
           */

          _this36.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
          // a protocol-level failure of some sort. Either the request failed in transit
          // or the server returned an unsuccessful status code.

          if (_this36.status >= 200 && _this36.status < 300) {
            _this36.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
          } else {
            _this36.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
          }

          _this36.error = init.error || null;
          return _this36;
        }

        return _HttpErrorResponse;
      }(_HttpResponseBase);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
       * the given `body`. This function clones the object and adds the body.
       *
       * Note that the `responseType` *options* value is a String that identifies the
       * single data type of the response.
       * A single overload version of the method handles each response type.
       * The value of `responseType` cannot be a union, as the combined signature could imply.
       *
       */


      function addBody(options, body) {
        return {
          body: body,
          headers: options.headers,
          context: options.context,
          observe: options.observe,
          params: options.params,
          reportProgress: options.reportProgress,
          responseType: options.responseType,
          withCredentials: options.withCredentials
        };
      }
      /**
       * Performs HTTP requests.
       * This service is available as an injectable class, with methods to perform HTTP requests.
       * Each request method has multiple signatures, and the return type varies based on
       * the signature that is called (mainly the values of `observe` and `responseType`).
       *
       * Note that the `responseType` *options* value is a String that identifies the
       * single data type of the response.
       * A single overload version of the method handles each response type.
       * The value of `responseType` cannot be a union, as the combined signature could imply.
      
       *
       * @usageNotes
       * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
       *
       * ### HTTP Request Example
       *
       * ```
       *  // GET heroes whose name contains search term
       * searchHeroes(term: string): observable<Hero[]>{
       *
       *  const params = new HttpParams({fromString: 'name=term'});
       *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
       * }
       * ```
       *
       * Alternatively, the parameter string can be used without invoking HttpParams
       * by directly joining to the URL.
       * ```
       * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
       * ```
       *
       *
       * ### JSONP Example
       * ```
       * requestJsonp(url, callback = 'callback') {
       *  return this.httpClient.jsonp(this.heroesURL, callback);
       * }
       * ```
       *
       * ### PATCH Example
       * ```
       * // PATCH one of the heroes' name
       * patchHero (id: number, heroName: string): Observable<{}> {
       * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
       *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
       *    .pipe(catchError(this.handleError('patchHero')));
       * }
       * ```
       *
       * @see [HTTP Guide](guide/http)
       * @see [HTTP Request](api/common/http/HttpRequest)
       *
       * @publicApi
       */


      var _HttpClient = /*#__PURE__*/function () {
        function _HttpClient(handler) {
          _classCallCheck(this, _HttpClient);

          this.handler = handler;
        }
        /**
         * Constructs an observable for a generic HTTP request that, when subscribed,
         * fires the request through the chain of registered interceptors and on to the
         * server.
         *
         * You can pass an `HttpRequest` directly as the only parameter. In this case,
         * the call returns an observable of the raw `HttpEvent` stream.
         *
         * Alternatively you can pass an HTTP method as the first parameter,
         * a URL string as the second, and an options hash containing the request body as the third.
         * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
         * type of returned observable.
         *   * The `responseType` value determines how a successful response body is parsed.
         *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
         * object as a type parameter to the call.
         *
         * The `observe` value determines the return type, according to what you are interested in
         * observing.
         *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
         * progress events by default.
         *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
         * where the `T` parameter depends on the `responseType` and any optionally provided type
         * parameter.
         *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
         *
         */


        _createClass(_HttpClient, [{
          key: "request",
          value: function request(first, url) {
            var _this37 = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var req; // First, check whether the primary argument is an instance of `HttpRequest`.

            if (first instanceof _HttpRequest) {
              // It is. The other arguments must be undefined (per the signatures) and can be
              // ignored.
              req = first;
            } else {
              // It's a string, so it represents a URL. Construct a request based on it,
              // and incorporate the remaining arguments (assuming `GET` unless a method is
              // provided.
              // Figure out the headers.
              var headers = undefined;

              if (options.headers instanceof _HttpHeaders) {
                headers = options.headers;
              } else {
                headers = new _HttpHeaders(options.headers);
              } // Sort out parameters.


              var params = undefined;

              if (!!options.params) {
                if (options.params instanceof _HttpParams) {
                  params = options.params;
                } else {
                  params = new _HttpParams({
                    fromObject: options.params
                  });
                }
              } // Construct the request.


              req = new _HttpRequest(first, url, options.body !== undefined ? options.body : null, {
                headers: headers,
                context: options.context,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials
              });
            } // Start with an Observable.of() the initial request, and run the handler (which
            // includes all interceptors) inside a concatMap(). This way, the handler runs
            // inside an Observable chain, which causes interceptors to be re-run on every
            // subscription (this also makes retries re-run the handler, including interceptors).


            var events$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(function (req) {
              return _this37.handler.handle(req);
            })); // If coming via the API signature which accepts a previously constructed HttpRequest,
            // the only option is to get the event stream. Otherwise, return the event stream if
            // that is what was requested.

            if (first instanceof _HttpRequest || options.observe === 'events') {
              return events$;
            } // The requested stream contains either the full response or the body. In either
            // case, the first step is to filter the event stream to extract a stream of
            // responses(s).


            var res$ = events$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
              return event instanceof _HttpResponse;
            })); // Decide which stream to return.

            switch (options.observe || 'body') {
              case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                  case 'arraybuffer':
                    return res$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (res) {
                      // Validate that the body is an ArrayBuffer.
                      if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                        throw new Error('Response is not an ArrayBuffer.');
                      }

                      return res.body;
                    }));

                  case 'blob':
                    return res$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (res) {
                      // Validate that the body is a Blob.
                      if (res.body !== null && !(res.body instanceof Blob)) {
                        throw new Error('Response is not a Blob.');
                      }

                      return res.body;
                    }));

                  case 'text':
                    return res$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (res) {
                      // Validate that the body is a string.
                      if (res.body !== null && typeof res.body !== 'string') {
                        throw new Error('Response is not a string.');
                      }

                      return res.body;
                    }));

                  case 'json':
                  default:
                    // No validation needed for JSON responses, as they can be of any type.
                    return res$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (res) {
                      return res.body;
                    }));
                }

              case 'response':
                // The response stream was requested directly, so return it.
                return res$;

              default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
            }
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `DELETE` request to execute on the server. See the individual overloads for
           * details on the return type.
           *
           * @param url     The endpoint URL.
           * @param options The HTTP options to send with the request.
           *
           */

        }, {
          key: "delete",
          value: function _delete(url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request('DELETE', url, options);
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `GET` request to execute on the server. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "get",
          value: function get(url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request('GET', url, options);
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `HEAD` request to execute on the server. The `HEAD` method returns
           * meta information about the resource without transferring the
           * resource itself. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "head",
          value: function head(url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request('HEAD', url, options);
          }
          /**
           * Constructs an `Observable` that, when subscribed, causes a request with the special method
           * `JSONP` to be dispatched via the interceptor pipeline.
           * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
           * API endpoints that don't support newer,
           * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
           * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
           * requests even if the API endpoint is not located on the same domain (origin) as the client-side
           * application making the request.
           * The endpoint API must support JSONP callback for JSONP requests to work.
           * The resource API returns the JSON response wrapped in a callback function.
           * You can pass the callback function name as one of the query parameters.
           * Note that JSONP requests can only be used with `GET` requests.
           *
           * @param url The resource URL.
           * @param callbackParam The callback function name.
           *
           */

        }, {
          key: "jsonp",
          value: function jsonp(url, callbackParam) {
            return this.request('JSONP', url, {
              params: new _HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          /**
           * Constructs an `Observable` that, when subscribed, causes the configured
           * `OPTIONS` request to execute on the server. This method allows the client
           * to determine the supported HTTP methods and other capabilites of an endpoint,
           * without implying a resource action. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "options",
          value: function options(url) {
            var _options2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.request('OPTIONS', url, _options2);
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `PATCH` request to execute on the server. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "patch",
          value: function patch(url, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.request('PATCH', url, addBody(options, body));
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `POST` request to execute on the server. The server responds with the location of
           * the replaced resource. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "post",
          value: function post(url, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.request('POST', url, addBody(options, body));
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
           * with a new set of values.
           * See the individual overloads for details on the return type.
           */

        }, {
          key: "put",
          value: function put(url, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.request('PUT', url, addBody(options, body));
          }
        }]);

        return _HttpClient;
      }();

      _HttpClient.ɵfac = function HttpClient_Factory(t) {
        return new (t || _HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_HttpHandler));
      };

      _HttpClient.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _HttpClient,
        factory: _HttpClient.ɵfac
      });

      _HttpClient.ctorParameters = function () {
        return [{
          type: _HttpHandler
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_HttpClient, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: _HttpHandler
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
       *
       *
       */


      var HttpInterceptorHandler = /*#__PURE__*/function () {
        function HttpInterceptorHandler(next, interceptor) {
          _classCallCheck(this, HttpInterceptorHandler);

          this.next = next;
          this.interceptor = interceptor;
        }

        _createClass(HttpInterceptorHandler, [{
          key: "handle",
          value: function handle(req) {
            return this.interceptor.intercept(req, this.next);
          }
        }]);

        return HttpInterceptorHandler;
      }();
      /**
       * A multi-provider token that represents the array of registered
       * `HttpInterceptor` objects.
       *
       * @publicApi
       */


      var _HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');

      var NoopInterceptor = /*#__PURE__*/function () {
        function NoopInterceptor() {
          _classCallCheck(this, NoopInterceptor);
        }

        _createClass(NoopInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req);
          }
        }]);

        return NoopInterceptor;
      }();

      NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
        return new (t || NoopInterceptor)();
      };

      NoopInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: NoopInterceptor,
        factory: NoopInterceptor.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NoopInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Every request made through JSONP needs a callback name that's unique across the
      // whole page. Each request is assigned an id and the callback name is constructed
      // from that. The next id to be assigned is tracked in a global variable here that
      // is shared among all applications on the page.


      var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
      // passed in its URL.

      var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
      // have a request method JSONP.

      var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
      var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
      /**
       * DI token/abstract type representing a map of JSONP callbacks.
       *
       * In the browser, this should always be the `window` object.
       *
       *
       */

      var JsonpCallbackContext = function JsonpCallbackContext() {
        _classCallCheck(this, JsonpCallbackContext);
      };
      /**
       * Processes an `HttpRequest` with the JSONP method,
       * by performing JSONP style requests.
       * @see `HttpHandler`
       * @see `HttpXhrBackend`
       *
       * @publicApi
       */


      var _JsonpClientBackend = /*#__PURE__*/function () {
        function _JsonpClientBackend(callbackMap, document) {
          _classCallCheck(this, _JsonpClientBackend);

          this.callbackMap = callbackMap;
          this.document = document;
          /**
           * A resolved promise that can be used to schedule microtasks in the event handlers.
           */

          this.resolvedPromise = Promise.resolve();
        }
        /**
         * Get the name of the next callback method, by incrementing the global `nextRequestId`.
         */


        _createClass(_JsonpClientBackend, [{
          key: "nextCallback",
          value: function nextCallback() {
            return "ng_jsonp_callback_".concat(nextRequestId++);
          }
          /**
           * Processes a JSONP request and returns an event stream of the results.
           * @param req The request object.
           * @returns An observable of the response events.
           *
           */

        }, {
          key: "handle",
          value: function handle(req) {
            var _this38 = this;

            // Firstly, check both the method and response type. If either doesn't match
            // then the request was improperly routed here and cannot be handled.
            if (req.method !== 'JSONP') {
              throw new Error(JSONP_ERR_WRONG_METHOD);
            } else if (req.responseType !== 'json') {
              throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
            } // Everything else happens inside the Observable boundary.


            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(function (observer) {
              // The first step to make a request is to generate the callback name, and replace the
              // callback placeholder in the URL with the name. Care has to be taken here to ensure
              // a trailing &, if matched, gets inserted back into the URL in the correct place.
              var callback = _this38.nextCallback();

              var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

              var node = _this38.document.createElement('script');

              node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
              // are closed over and track state across those callbacks.
              // The response object, if one has been received, or null otherwise.

              var body = null; // Whether the response callback has been called.

              var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
              // should be ignored.

              var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
              // object in the browser. The script being loaded via the <script> tag will
              // eventually call this callback.

              _this38.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this38.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

                if (cancelled) {
                  return;
                } // Set state to indicate data was received.


                body = data;
                finished = true;
              }; // cleanup() is a utility closure that removes the <script> from the page and
              // the response callback from the window. This logic is used in both the
              // success, error, and cancellation paths, so it's extracted out for convenience.


              var cleanup = function cleanup() {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                  node.parentNode.removeChild(node);
                } // Remove the response callback from the callbackMap (window object in the
                // browser).


                delete _this38.callbackMap[callback];
              }; // onLoad() is the success callback which runs after the response callback
              // if the JSONP script loads successfully. The event itself is unimportant.
              // If something went wrong, onLoad() may run without the response callback
              // having been invoked.


              var onLoad = function onLoad(event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                  return;
                } // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496


                _this38.resolvedPromise.then(function () {
                  // Cleanup the page.
                  cleanup(); // Check whether the response callback has run.

                  if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new _HttpErrorResponse({
                      url: url,
                      status: 0,
                      statusText: 'JSONP Error',
                      error: new Error(JSONP_ERR_NO_CALLBACK)
                    }));
                    return;
                  } // Success. body either contains the response body or null if none was
                  // returned.


                  observer.next(new _HttpResponse({
                    body: body,
                    status: 200
                    /* Ok */
                    ,
                    statusText: 'OK',
                    url: url
                  })); // Complete the stream, the response is over.

                  observer.complete();
                });
              }; // onError() is the error callback, which runs if the script returned generates
              // a Javascript error. It emits the error via the Observable error channel as
              // a HttpErrorResponse.


              var onError = function onError(error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                  return;
                }

                cleanup(); // Wrap the error in a HttpErrorResponse.

                observer.error(new _HttpErrorResponse({
                  error: error,
                  status: 0,
                  statusText: 'JSONP Error',
                  url: url
                }));
              }; // Subscribe to both the success (load) and error events on the <script> tag,
              // and add it to the page.


              node.addEventListener('load', onLoad);
              node.addEventListener('error', onError);

              _this38.document.body.appendChild(node); // The request has now been successfully sent.


              observer.next({
                type: _HttpEventType.Sent
              }); // Cancellation handler.

              return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              };
            });
          }
        }]);

        return _JsonpClientBackend;
      }();

      _JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
        return new (t || _JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
      };

      _JsonpClientBackend.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _JsonpClientBackend,
        factory: _JsonpClientBackend.ɵfac
      });

      _JsonpClientBackend.ctorParameters = function () {
        return [{
          type: JsonpCallbackContext
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_JsonpClientBackend, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: JsonpCallbackContext
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * Identifies requests with the method JSONP and
       * shifts them to the `JsonpClientBackend`.
       *
       * @see `HttpInterceptor`
       *
       * @publicApi
       */


      var _JsonpInterceptor = /*#__PURE__*/function () {
        function _JsonpInterceptor(jsonp) {
          _classCallCheck(this, _JsonpInterceptor);

          this.jsonp = jsonp;
        }
        /**
         * Identifies and handles a given JSONP request.
         * @param req The outgoing request object to handle.
         * @param next The next interceptor in the chain, or the backend
         * if no interceptors remain in the chain.
         * @returns An observable of the event stream.
         */


        _createClass(_JsonpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            if (req.method === 'JSONP') {
              return this.jsonp.handle(req);
            } // Fall through for normal HTTP requests.


            return next.handle(req);
          }
        }]);

        return _JsonpInterceptor;
      }();

      _JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
        return new (t || _JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_JsonpClientBackend));
      };

      _JsonpInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _JsonpInterceptor,
        factory: _JsonpInterceptor.ɵfac
      });

      _JsonpInterceptor.ctorParameters = function () {
        return [{
          type: _JsonpClientBackend
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_JsonpInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: _JsonpClientBackend
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var XSSI_PREFIX = /^\)\]\}',?\n/;
      /**
       * Determine an appropriate URL for the response, by checking either
       * XMLHttpRequest.responseURL or the X-Request-URL header.
       */

      function getResponseUrl(xhr) {
        if ('responseURL' in xhr && xhr.responseURL) {
          return xhr.responseURL;
        }

        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL');
        }

        return null;
      }
      /**
       * Uses `XMLHttpRequest` to send requests to a backend server.
       * @see `HttpHandler`
       * @see `JsonpClientBackend`
       *
       * @publicApi
       */


      var _HttpXhrBackend = /*#__PURE__*/function () {
        function _HttpXhrBackend(xhrFactory) {
          _classCallCheck(this, _HttpXhrBackend);

          this.xhrFactory = xhrFactory;
        }
        /**
         * Processes a request and returns a stream of response events.
         * @param req The request object.
         * @returns An observable of the response events.
         */


        _createClass(_HttpXhrBackend, [{
          key: "handle",
          value: function handle(req) {
            var _this39 = this;

            // Quick check to give a better error message when a user attempts to use
            // HttpClient.jsonp() without installing the HttpClientJsonpModule
            if (req.method === 'JSONP') {
              throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
            } // Everything happens on Observable subscription.


            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(function (observer) {
              // Start by setting up the XHR object with request method, URL, and withCredentials flag.
              var xhr = _this39.xhrFactory.build();

              xhr.open(req.method, req.urlWithParams);

              if (!!req.withCredentials) {
                xhr.withCredentials = true;
              } // Add all the requested headers.


              req.headers.forEach(function (name, values) {
                return xhr.setRequestHeader(name, values.join(','));
              }); // Add an Accept header if one isn't present already.

              if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
              } // Auto-detect the Content-Type header if one isn't present already.


              if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

                if (detectedType !== null) {
                  xhr.setRequestHeader('Content-Type', detectedType);
                }
              } // Set the responseType if one was requested.


              if (req.responseType) {
                var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.

                xhr.responseType = responseType !== 'json' ? responseType : 'text';
              } // Serialize the request body if one is present. If not, this will be set to null.


              var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
              // in two events - the HttpHeaderResponse event and the full HttpResponse
              // event. However, since response headers don't change in between these
              // two events, it doesn't make sense to parse them twice. So headerResponse
              // caches the data extracted from the response whenever it's first parsed,
              // to ensure parsing isn't duplicated.

              var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
              // state, and memoizes it into headerResponse.

              var partialFromXhr = function partialFromXhr() {
                if (headerResponse !== null) {
                  return headerResponse;
                } // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).


                var status = xhr.status === 1223 ? 204
                /* NoContent */
                : xhr.status;
                var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

                var headers = new _HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.

                var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

                headerResponse = new _HttpHeaderResponse({
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url
                });
                return headerResponse;
              }; // Next, a few closures are defined for the various events which XMLHttpRequest can
              // emit. This allows them to be unregistered as event listeners later.
              // First up is the load event, which represents a response being fully available.


              var onLoad = function onLoad() {
                // Read response state from the memoized partial data.
                var _partialFromXhr = partialFromXhr(),
                    headers = _partialFromXhr.headers,
                    status = _partialFromXhr.status,
                    statusText = _partialFromXhr.statusText,
                    url = _partialFromXhr.url; // The body will be read out if present.


                var body = null;

                if (status !== 204
                /* NoContent */
                ) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
                  } // Normalize another potential bug (this one comes from CORS).


                if (status === 0) {
                  status = !!body ? 200
                  /* Ok */
                  : 0;
                } // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.


                var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).

                if (req.responseType === 'json' && typeof body === 'string') {
                  // Save the original body, before attempting XSSI prefix stripping.
                  var originalBody = body;
                  body = body.replace(XSSI_PREFIX, '');

                  try {
                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                    body = body !== '' ? JSON.parse(body) : null;
                  } catch (error) {
                    // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                    // JSON response. Restore the original body (including any XSSI prefix) to deliver
                    // a better error response.
                    body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                    // just isn't JSON. Otherwise, deliver the parsing error to the user.

                    if (ok) {
                      // Even though the response status was 2xx, this is still an error.
                      ok = false; // The parse error contains the text of the body that failed to parse.

                      body = {
                        error: error,
                        text: body
                      };
                    }
                  }
                }

                if (ok) {
                  // A successful response is delivered on the event stream.
                  observer.next(new _HttpResponse({
                    body: body,
                    headers: headers,
                    status: status,
                    statusText: statusText,
                    url: url || undefined
                  })); // The full body has been received and delivered, no further events
                  // are possible. This request is complete.

                  observer.complete();
                } else {
                  // An unsuccessful request is delivered on the error channel.
                  observer.error(new _HttpErrorResponse({
                    // The error in this case is the response body (error from the server).
                    error: body,
                    headers: headers,
                    status: status,
                    statusText: statusText,
                    url: url || undefined
                  }));
                }
              }; // The onError callback is called when something goes wrong at the network level.
              // Connection timeout, DNS error, offline, etc. These are actual errors, and are
              // transmitted on the error channel.


              var onError = function onError(error) {
                var _partialFromXhr2 = partialFromXhr(),
                    url = _partialFromXhr2.url;

                var res = new _HttpErrorResponse({
                  error: error,
                  status: xhr.status || 0,
                  statusText: xhr.statusText || 'Unknown Error',
                  url: url || undefined
                });
                observer.error(res);
              }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
              // has been sent on the stream. This is necessary to track if progress
              // is enabled since the event will be sent on only the first download
              // progerss event.


              var sentHeaders = false; // The download progress event handler, which is only registered if
              // progress events are enabled.

              var onDownProgress = function onDownProgress(event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                  observer.next(partialFromXhr());
                  sentHeaders = true;
                } // Start building the download progress event to deliver on the response
                // event stream.


                var progressEvent = {
                  type: _HttpEventType.DownloadProgress,
                  loaded: event.loaded
                }; // Set the total number of bytes in the event if it's available.

                if (event.lengthComputable) {
                  progressEvent.total = event.total;
                } // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.


                if (req.responseType === 'text' && !!xhr.responseText) {
                  progressEvent.partialText = xhr.responseText;
                } // Finally, fire the event.


                observer.next(progressEvent);
              }; // The upload progress event handler, which is only registered if
              // progress events are enabled.


              var onUpProgress = function onUpProgress(event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                  type: _HttpEventType.UploadProgress,
                  loaded: event.loaded
                }; // If the total number of bytes being uploaded is available, include
                // it.

                if (event.lengthComputable) {
                  progress.total = event.total;
                } // Send the event.


                observer.next(progress);
              }; // By default, register for load and error events.


              xhr.addEventListener('load', onLoad);
              xhr.addEventListener('error', onError);
              xhr.addEventListener('timeout', onError);
              xhr.addEventListener('abort', onError); // Progress events are only enabled if requested.

              if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

                if (reqBody !== null && xhr.upload) {
                  xhr.upload.addEventListener('progress', onUpProgress);
                }
              } // Fire the request, and notify the event stream that it was fired.


              xhr.send(reqBody);
              observer.next({
                type: _HttpEventType.Sent
              }); // This is the return from the Observable function, which is the
              // request cancellation handler.

              return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                if (xhr.readyState !== xhr.DONE) {
                  xhr.abort();
                }
              };
            });
          }
        }]);

        return _HttpXhrBackend;
      }();

      _HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
        return new (t || _HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory));
      };

      _HttpXhrBackend.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _HttpXhrBackend,
        factory: _HttpXhrBackend.ɵfac
      });

      _HttpXhrBackend.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_HttpXhrBackend, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME');
      var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME');
      /**
       * Retrieves the current XSRF token to use with the next outgoing request.
       *
       * @publicApi
       */

      var _HttpXsrfTokenExtractor = function _HttpXsrfTokenExtractor() {
        _classCallCheck(this, _HttpXsrfTokenExtractor);
      };
      /**
       * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
       */


      var HttpXsrfCookieExtractor = /*#__PURE__*/function () {
        function HttpXsrfCookieExtractor(doc, platform, cookieName) {
          _classCallCheck(this, HttpXsrfCookieExtractor);

          this.doc = doc;
          this.platform = platform;
          this.cookieName = cookieName;
          this.lastCookieString = '';
          this.lastToken = null;
          /**
           * @internal for testing
           */

          this.parseCount = 0;
        }

        _createClass(HttpXsrfCookieExtractor, [{
          key: "getToken",
          value: function getToken() {
            if (this.platform === 'server') {
              return null;
            }

            var cookieString = this.doc.cookie || '';

            if (cookieString !== this.lastCookieString) {
              this.parseCount++;
              this.lastToken = (0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
              this.lastCookieString = cookieString;
            }

            return this.lastToken;
          }
        }]);

        return HttpXsrfCookieExtractor;
      }();

      HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
        return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME));
      };

      HttpXsrfCookieExtractor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: HttpXsrfCookieExtractor,
        factory: HttpXsrfCookieExtractor.ɵfac
      });

      HttpXsrfCookieExtractor.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [XSRF_COOKIE_NAME]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
              args: [XSRF_COOKIE_NAME]
            }]
          }];
        }, null);
      })();
      /**
       * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
       */


      var HttpXsrfInterceptor = /*#__PURE__*/function () {
        function HttpXsrfInterceptor(tokenService, headerName) {
          _classCallCheck(this, HttpXsrfInterceptor);

          this.tokenService = tokenService;
          this.headerName = headerName;
        }

        _createClass(HttpXsrfInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
            // Non-mutating requests don't require a token, and absolute URLs require special handling
            // anyway as the cookie set
            // on our origin is not the same as the token expected by another origin.

            if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
              return next.handle(req);
            }

            var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

            if (token !== null && !req.headers.has(this.headerName)) {
              req = req.clone({
                headers: req.headers.set(this.headerName, token)
              });
            }

            return next.handle(req);
          }
        }]);

        return HttpXsrfInterceptor;
      }();

      HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
        return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_HEADER_NAME));
      };

      HttpXsrfInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: HttpXsrfInterceptor,
        factory: HttpXsrfInterceptor.ɵfac
      });

      HttpXsrfInterceptor.ctorParameters = function () {
        return [{
          type: _HttpXsrfTokenExtractor
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
            args: [XSRF_HEADER_NAME]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: _HttpXsrfTokenExtractor
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
              args: [XSRF_HEADER_NAME]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An injectable `HttpHandler` that applies multiple interceptors
       * to a request before passing it to the given `HttpBackend`.
       *
       * The interceptors are loaded lazily from the injector, to allow
       * interceptors to themselves inject classes depending indirectly
       * on `HttpInterceptingHandler` itself.
       * @see `HttpInterceptor`
       */


      var HttpInterceptingHandler = /*#__PURE__*/function () {
        function HttpInterceptingHandler(backend, injector) {
          _classCallCheck(this, HttpInterceptingHandler);

          this.backend = backend;
          this.injector = injector;
          this.chain = null;
        }

        _createClass(HttpInterceptingHandler, [{
          key: "handle",
          value: function handle(req) {
            if (this.chain === null) {
              var interceptors = this.injector.get(_HTTP_INTERCEPTORS, []);
              this.chain = interceptors.reduceRight(function (next, interceptor) {
                return new HttpInterceptorHandler(next, interceptor);
              }, this.backend);
            }

            return this.chain.handle(req);
          }
        }]);

        return HttpInterceptingHandler;
      }();

      HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) {
        return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
      };

      HttpInterceptingHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: HttpInterceptingHandler,
        factory: HttpInterceptingHandler.ɵfac
      });

      HttpInterceptingHandler.ctorParameters = function () {
        return [{
          type: _HttpBackend
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
        }], function () {
          return [{
            type: _HttpBackend
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector
          }];
        }, null);
      })();
      /**
       * Constructs an `HttpHandler` that applies interceptors
       * to a request before passing it to the given `HttpBackend`.
       *
       * Use as a factory function within `HttpClientModule`.
       *
       *
       */


      function interceptingHandler(backend) {
        var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (!interceptors) {
          return backend;
        }

        return interceptors.reduceRight(function (next, interceptor) {
          return new HttpInterceptorHandler(next, interceptor);
        }, backend);
      }
      /**
       * Factory function that determines where to store JSONP callbacks.
       *
       * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
       * in test environments. In that case, callbacks are stored on an anonymous object instead.
       *
       *
       */


      function jsonpCallbackContext() {
        if (typeof window === 'object') {
          return window;
        }

        return {};
      }
      /**
       * Configures XSRF protection support for outgoing requests.
       *
       * For a server that supports a cookie-based XSRF protection system,
       * use directly to configure XSRF protection with the correct
       * cookie and header names.
       *
       * If no names are supplied, the default cookie name is `XSRF-TOKEN`
       * and the default header name is `X-XSRF-TOKEN`.
       *
       * @publicApi
       */


      var _HttpClientXsrfModule = /*#__PURE__*/function () {
        function _HttpClientXsrfModule() {
          _classCallCheck(this, _HttpClientXsrfModule);
        }

        _createClass(_HttpClientXsrfModule, null, [{
          key: "disable",
          value:
          /**
           * Disable the default XSRF protection.
           */
          function disable() {
            return {
              ngModule: _HttpClientXsrfModule,
              providers: [{
                provide: HttpXsrfInterceptor,
                useClass: NoopInterceptor
              }]
            };
          }
          /**
           * Configure XSRF protection.
           * @param options An object that can specify either or both
           * cookie name or header name.
           * - Cookie name default is `XSRF-TOKEN`.
           * - Header name default is `X-XSRF-TOKEN`.
           *
           */

        }, {
          key: "withOptions",
          value: function withOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: _HttpClientXsrfModule,
              providers: [options.cookieName ? {
                provide: XSRF_COOKIE_NAME,
                useValue: options.cookieName
              } : [], options.headerName ? {
                provide: XSRF_HEADER_NAME,
                useValue: options.headerName
              } : []]
            };
          }
        }]);

        return _HttpClientXsrfModule;
      }();

      _HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
        return new (t || _HttpClientXsrfModule)();
      };

      _HttpClientXsrfModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _HttpClientXsrfModule
      });
      _HttpClientXsrfModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [HttpXsrfInterceptor, {
          provide: _HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: _HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_HttpClientXsrfModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
          args: [{
            providers: [HttpXsrfInterceptor, {
              provide: _HTTP_INTERCEPTORS,
              useExisting: HttpXsrfInterceptor,
              multi: true
            }, {
              provide: _HttpXsrfTokenExtractor,
              useClass: HttpXsrfCookieExtractor
            }, {
              provide: XSRF_COOKIE_NAME,
              useValue: 'XSRF-TOKEN'
            }, {
              provide: XSRF_HEADER_NAME,
              useValue: 'X-XSRF-TOKEN'
            }]
          }]
        }], null, null);
      })();
      /**
       * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
       * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
       *
       * You can add interceptors to the chain behind `HttpClient` by binding them to the
       * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
       *
       * @publicApi
       */


      var _HttpClientModule = function _HttpClientModule() {
        _classCallCheck(this, _HttpClientModule);
      };

      _HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
        return new (t || _HttpClientModule)();
      };

      _HttpClientModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _HttpClientModule
      });
      _HttpClientModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_HttpClient, {
          provide: _HttpHandler,
          useClass: HttpInterceptingHandler
        }, _HttpXhrBackend, {
          provide: _HttpBackend,
          useExisting: _HttpXhrBackend
        }],
        imports: [[_HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_HttpClientModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
          args: [{
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [_HttpClientXsrfModule.withOptions({
              cookieName: 'XSRF-TOKEN',
              headerName: 'X-XSRF-TOKEN'
            })],

            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [_HttpClient, {
              provide: _HttpHandler,
              useClass: HttpInterceptingHandler
            }, _HttpXhrBackend, {
              provide: _HttpBackend,
              useExisting: _HttpXhrBackend
            }]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_HttpClientModule, {
          imports: [_HttpClientXsrfModule]
        });
      })();
      /**
       * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
       * with supporting services for JSONP.
       * Without this module, Jsonp requests reach the backend
       * with method JSONP, where they are rejected.
       *
       * You can add interceptors to the chain behind `HttpClient` by binding them to the
       * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
       *
       * @publicApi
       */


      var _HttpClientJsonpModule = function _HttpClientJsonpModule() {
        _classCallCheck(this, _HttpClientJsonpModule);
      };

      _HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
        return new (t || _HttpClientJsonpModule)();
      };

      _HttpClientJsonpModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _HttpClientJsonpModule
      });
      _HttpClientJsonpModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: _HTTP_INTERCEPTORS,
          useClass: _JsonpInterceptor,
          multi: true
        }]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_HttpClientJsonpModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
          args: [{
            providers: [_JsonpClientBackend, {
              provide: JsonpCallbackContext,
              useFactory: jsonpCallbackContext
            }, {
              provide: _HTTP_INTERCEPTORS,
              useClass: _JsonpInterceptor,
              multi: true
            }]
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

      /**
       * A wrapper around the `XMLHttpRequest` constructor.
       *
       * @publicApi
       * @see `XhrFactory`
       * @deprecated
       * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
       */


      var _XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;
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
      //# sourceMappingURL=http.js.map

      /***/
    },

    /***/
    1562:
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EXPANSION_PANEL_ANIMATION_TIMING": function EXPANSION_PANEL_ANIMATION_TIMING() {
          return (
            /* binding */
            _EXPANSION_PANEL_ANIMATION_TIMING
          );
        },

        /* harmony export */
        "MAT_ACCORDION": function MAT_ACCORDION() {
          return (
            /* binding */
            _MAT_ACCORDION
          );
        },

        /* harmony export */
        "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS": function MAT_EXPANSION_PANEL_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_EXPANSION_PANEL_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MatAccordion": function MatAccordion() {
          return (
            /* binding */
            _MatAccordion
          );
        },

        /* harmony export */
        "MatExpansionModule": function MatExpansionModule() {
          return (
            /* binding */
            _MatExpansionModule
          );
        },

        /* harmony export */
        "MatExpansionPanel": function MatExpansionPanel() {
          return (
            /* binding */
            _MatExpansionPanel
          );
        },

        /* harmony export */
        "MatExpansionPanelActionRow": function MatExpansionPanelActionRow() {
          return (
            /* binding */
            _MatExpansionPanelActionRow
          );
        },

        /* harmony export */
        "MatExpansionPanelContent": function MatExpansionPanelContent() {
          return (
            /* binding */
            _MatExpansionPanelContent
          );
        },

        /* harmony export */
        "MatExpansionPanelDescription": function MatExpansionPanelDescription() {
          return (
            /* binding */
            _MatExpansionPanelDescription
          );
        },

        /* harmony export */
        "MatExpansionPanelHeader": function MatExpansionPanelHeader() {
          return (
            /* binding */
            _MatExpansionPanelHeader
          );
        },

        /* harmony export */
        "MatExpansionPanelTitle": function MatExpansionPanelTitle() {
          return (
            /* binding */
            _MatExpansionPanelTitle
          );
        },

        /* harmony export */
        "matExpansionAnimations": function matExpansionAnimations() {
          return (
            /* binding */
            _matExpansionAnimations
          );
        },

        /* harmony export */
        "ɵ0": function ɵ0() {
          return (
            /* binding */
            _ɵ
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/accordion */
      97091);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/portal */
      87636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      59193);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
       * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
       */


      var _c0 = ["body"];

      function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

      var _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
      var _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

      function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
        }
      }

      var _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
      var _c4 = ["mat-panel-title", "mat-panel-description", "*"];

      var _MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time and timing curve for expansion panel animations. */
      // Note: Keep this in sync with the Sass variable for the panel header animation.


      var _EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
      /**
       * Animations used by the Material expansion panel.
       *
       * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
       * causes the animation state of moved components to become `void` upon exit, and not update again
       * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
       * of the panel is `expanded` or `collapsed` but the animation state is `void`.
       *
       * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
       * are defined to have the same styles. Since angular animates from the current styles to the
       * destination state's style definition, in situations where we are moving from `void`'s styles to
       * `collapsed` this acts a noop since no style values change.
       *
       * In the case where angular's animation state is out of sync with the expansion panel's state, the
       * expansion panel being `expanded` and angular animations being `void`, the animation from the
       * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
       * occur as expected.
       *
       * Angular Bug: https://github.com/angular/angular/issues/18847
       *
       * @docs-private
       */

      var _matExpansionAnimations = {
        /** Animation that rotates the indicator arrow. */
        indicatorRotate: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          transform: 'rotate(0deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          transform: 'rotate(180deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(_EXPANSION_PANEL_ANIMATION_TIMING))]),

        /** Animation that expands and collapses the panel content. */
        bodyExpansion: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          height: '0px',
          visibility: 'hidden'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          height: '*',
          visibility: 'visible'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(_EXPANSION_PANEL_ANIMATION_TIMING))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Expansion panel content that will be rendered lazily
       * after the panel is opened for the first time.
       */

      var _MatExpansionPanelContent = function _MatExpansionPanelContent(_template) {
        _classCallCheck(this, _MatExpansionPanelContent);

        this._template = _template;
      };

      _MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
        return new (t || _MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _MatExpansionPanelContent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]]
      });

      _MatExpansionPanelContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[matExpansionPanelContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Counter for generating unique element ids. */


      var uniqueId = 0;
      /**
       * Injection token that can be used to configure the defalt
       * options for the expansion panel component.
       */

      var _MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');

      var _ɵ = undefined;
      /**
       * This component can be used as a single element to show expandable content, or as one of
       * multiple children of an element with the MatAccordion directive attached.
       */

      var _MatExpansionPanel = /*#__PURE__*/function (_angular_cdk_accordio) {
        _inherits(_MatExpansionPanel, _angular_cdk_accordio);

        var _super15 = _createSuper(_MatExpansionPanel);

        function _MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
          var _this40;

          _classCallCheck(this, _MatExpansionPanel);

          _this40 = _super15.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
          _this40._viewContainerRef = _viewContainerRef;
          _this40._animationMode = _animationMode;
          _this40._hideToggle = false;
          /** An event emitted after the body's expansion animation happens. */

          _this40.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** An event emitted after the body's collapse animation happens. */

          _this40.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /** Stream that emits for changes in `@Input` properties. */

          _this40._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          /** ID for the associated header element. Used for a11y labelling. */

          _this40._headerId = "mat-expansion-panel-header-".concat(uniqueId++);
          /** Stream of body animation done events. */

          _this40._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          _this40.accordion = accordion;
          _this40._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
          // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

          _this40._bodyAnimationDone.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
          })).subscribe(function (event) {
            if (event.fromState !== 'void') {
              if (event.toState === 'expanded') {
                _this40.afterExpand.emit();
              } else if (event.toState === 'collapsed') {
                _this40.afterCollapse.emit();
              }
            }
          });

          if (defaultOptions) {
            _this40.hideToggle = defaultOptions.hideToggle;
          }

          return _this40;
        }
        /** Whether the toggle indicator should be hidden. */


        _createClass(_MatExpansionPanel, [{
          key: "hideToggle",
          get: function get() {
            return this._hideToggle || this.accordion && this.accordion.hideToggle;
          },
          set: function set(value) {
            this._hideToggle = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /** The position of the expansion indicator. */

        }, {
          key: "togglePosition",
          get: function get() {
            return this._togglePosition || this.accordion && this.accordion.togglePosition;
          },
          set: function set(value) {
            this._togglePosition = value;
          }
          /** Determines whether the expansion panel should have spacing between it and its siblings. */

        }, {
          key: "_hasSpacing",
          value: function _hasSpacing() {
            if (this.accordion) {
              return this.expanded && this.accordion.displayMode === 'default';
            }

            return false;
          }
          /** Gets the expanded state string. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.expanded ? 'expanded' : 'collapsed';
          }
          /** Toggles the expanded state of the expansion panel. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
          /** Sets the expanded state of the expansion panel to false. */

        }, {
          key: "close",
          value: function close() {
            this.expanded = false;
          }
          /** Sets the expanded state of the expansion panel to true. */

        }, {
          key: "open",
          value: function open() {
            this.expanded = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this41 = this;

            if (this._lazyContent) {
              // Render the content as soon as the panel becomes open.
              this.opened.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
                return _this41.expanded && !_this41._portal;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(function () {
                _this41._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(_this41._lazyContent._template, _this41._viewContainerRef);
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._inputChanges.next(changes);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatExpansionPanel.prototype), "ngOnDestroy", this).call(this);

            this._bodyAnimationDone.complete();

            this._inputChanges.complete();
          }
          /** Checks whether the expansion panel's content contains the currently-focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            if (this._body) {
              var focusedElement = this._document.activeElement;
              var bodyElement = this._body.nativeElement;
              return focusedElement === bodyElement || bodyElement.contains(focusedElement);
            }

            return false;
          }
        }]);

        return _MatExpansionPanel;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem);

      _MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
        return new (t || _MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
      };

      _MatExpansionPanel.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatExpansionPanelContent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
          }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 6,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
          }
        },
        inputs: {
          disabled: "disabled",
          expanded: "expanded",
          hideToggle: "hideToggle",
          togglePosition: "togglePosition"
        },
        outputs: {
          opened: "opened",
          closed: "closed",
          expandedChange: "expandedChange",
          afterExpand: "afterExpand",
          afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: _MAT_ACCORDION,
          useValue: _ɵ
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 4,
        consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
              return ctx._bodyAnimationDone.next($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.CdkPortalOutlet],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        data: {
          animation: [_matExpansionAnimations.bodyExpansion]
        },
        changeDetection: 0
      });

      _MatExpansionPanel.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_ACCORDION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      _MatExpansionPanel.propDecorators = {
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        afterExpand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        afterCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_MatExpansionPanelContent]
        }],
        _body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['body']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-expansion-panel',
            exportAs: 'matExpansionPanel',
            template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            inputs: ['disabled', 'expanded'],
            outputs: ['opened', 'closed', 'expandedChange'],
            animations: [_matExpansionAnimations.bodyExpansion],
            providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
            // to the same accordion.
            {
              provide: _MAT_ACCORDION,
              useValue: _ɵ
            }],
            host: {
              'class': 'mat-expansion-panel',
              '[class.mat-expanded]': 'expanded',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
            },
            styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_ACCORDION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          afterExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          afterCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_MatExpansionPanelContent]
          }],
          _body: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['body']
          }]
        });
      })();
      /**
       * Actions of a `<mat-expansion-panel>`.
       */


      var _MatExpansionPanelActionRow = function _MatExpansionPanelActionRow() {
        _classCallCheck(this, _MatExpansionPanelActionRow);
      };

      _MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
        return new (t || _MatExpansionPanelActionRow)();
      };

      _MatExpansionPanelActionRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelActionRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-action-row',
            host: {
              "class": 'mat-action-row'
            }
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

      /**
       * Header element of a `<mat-expansion-panel>`.
       */


      var _MatExpansionPanelHeader = /*#__PURE__*/function () {
        function _MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode) {
          var _this42 = this;

          _classCallCheck(this, _MatExpansionPanelHeader);

          this.panel = panel;
          this._element = _element;
          this._focusMonitor = _focusMonitor;
          this._changeDetectorRef = _changeDetectorRef;
          this._animationMode = _animationMode;
          this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
          var accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (changes) {
            return !!(changes['hideToggle'] || changes['togglePosition']);
          })) : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY; // Since the toggle state depends on an @Input on the panel, we
          // need to subscribe and trigger change detection manually.

          this._parentChangeSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (changes) {
            return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
          }))).subscribe(function () {
            return _this42._changeDetectorRef.markForCheck();
          }); // Avoids focus being lost if the panel contained the focused element and was closed.

          panel.closed.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function () {
            return panel._containsFocus();
          })).subscribe(function () {
            return _focusMonitor.focusVia(_element, 'program');
          });

          if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
          }
        }
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */


        _createClass(_MatExpansionPanelHeader, [{
          key: "disabled",
          get: function get() {
            return this.panel.disabled;
          }
          /** Toggles the expanded state of the panel. */

        }, {
          key: "_toggle",
          value: function _toggle() {
            if (!this.disabled) {
              this.panel.toggle();
            }
          }
          /** Gets whether the panel is expanded. */

        }, {
          key: "_isExpanded",
          value: function _isExpanded() {
            return this.panel.expanded;
          }
          /** Gets the expanded state string of the panel. */

        }, {
          key: "_getExpandedState",
          value: function _getExpandedState() {
            return this.panel._getExpandedState();
          }
          /** Gets the panel id. */

        }, {
          key: "_getPanelId",
          value: function _getPanelId() {
            return this.panel.id;
          }
          /** Gets the toggle position for the header. */

        }, {
          key: "_getTogglePosition",
          value: function _getTogglePosition() {
            return this.panel.togglePosition;
          }
          /** Gets whether the expand indicator should be shown. */

        }, {
          key: "_showToggle",
          value: function _showToggle() {
            return !this.panel.hideToggle && !this.panel.disabled;
          }
          /**
           * Gets the current height of the header. Null if no custom height has been
           * specified, and if the default height from the stylesheet should be used.
           */

        }, {
          key: "_getHeaderHeight",
          value: function _getHeaderHeight() {
            var isExpanded = this._isExpanded();

            if (isExpanded && this.expandedHeight) {
              return this.expandedHeight;
            } else if (!isExpanded && this.collapsedHeight) {
              return this.collapsedHeight;
            }

            return null;
          }
          /** Handle keydown event calling to toggle() if appropriate. */

        }, {
          key: "_keydown",
          value: function _keydown(event) {
            switch (event.keyCode) {
              // Toggle for space and enter keys.
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE:
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER:
                if (!(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
                  event.preventDefault();

                  this._toggle();
                }

                break;

              default:
                if (this.panel.accordion) {
                  this.panel.accordion._handleHeaderKeydown(event);
                }

                return;
            }
          }
          /**
           * Focuses the panel header. Implemented as a part of `FocusableOption`.
           * @param origin Origin of the action that triggered the focus.
           * @docs-private
           */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (origin) {
              this._focusMonitor.focusVia(this._element, origin, options);
            } else {
              this._element.nativeElement.focus(options);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this43 = this;

            this._focusMonitor.monitor(this._element).subscribe(function (origin) {
              if (origin && _this43.panel.accordion) {
                _this43.panel.accordion._handleHeaderFocus(_this43);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._parentChangeSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._element);
          }
        }]);

        return _MatExpansionPanelHeader;
      }();

      _MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
        return new (t || _MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatExpansionPanelHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 15,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
              return ctx._toggle();
            })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
              return ctx._keydown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : 0)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          expandedHeight: "expandedHeight",
          collapsedHeight: "collapsedHeight"
        },
        ngContentSelectors: _c4,
        decls: 5,
        vars: 1,
        consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._showToggle());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
        styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}\n"],
        encapsulation: 2,
        data: {
          animation: [_matExpansionAnimations.indicatorRotate]
        },
        changeDetection: 0
      });

      _MatExpansionPanelHeader.ctorParameters = function () {
        return [{
          type: _MatExpansionPanel,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        collapsedHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-expansion-panel-header',
            template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            animations: [_matExpansionAnimations.indicatorRotate],
            host: {
              'class': 'mat-expansion-panel-header mat-focus-indicator',
              'role': 'button',
              '[attr.id]': 'panel._headerId',
              '[attr.tabindex]': 'disabled ? -1 : 0',
              '[attr.aria-controls]': '_getPanelId()',
              '[attr.aria-expanded]': '_isExpanded()',
              '[attr.aria-disabled]': 'panel.disabled',
              '[class.mat-expanded]': '_isExpanded()',
              '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
              '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[style.height]': '_getHeaderHeight()',
              '(click)': '_toggle()',
              '(keydown)': '_keydown($event)'
            },
            styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}\n"]
          }]
        }], function () {
          return [{
            type: _MatExpansionPanel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          expandedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          collapsedHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Description element of a `<mat-expansion-panel-header>`.
       */


      var _MatExpansionPanelDescription = function _MatExpansionPanelDescription() {
        _classCallCheck(this, _MatExpansionPanelDescription);
      };

      _MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
        return new (t || _MatExpansionPanelDescription)();
      };

      _MatExpansionPanelDescription.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelDescription, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-panel-description',
            host: {
              "class": 'mat-expansion-panel-header-description'
            }
          }]
        }], null, null);
      })();
      /**
       * Title element of a `<mat-expansion-panel-header>`.
       */


      var _MatExpansionPanelTitle = function _MatExpansionPanelTitle() {
        _classCallCheck(this, _MatExpansionPanelTitle);
      };

      _MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
        return new (t || _MatExpansionPanelTitle)();
      };

      _MatExpansionPanelTitle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionPanelTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-panel-title',
            host: {
              "class": 'mat-expansion-panel-header-title'
            }
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

      /**
       * Directive for a Material Design Accordion.
       */


      var _MatAccordion = /*#__PURE__*/function (_angular_cdk_accordio2) {
        _inherits(_MatAccordion, _angular_cdk_accordio2);

        var _super16 = _createSuper(_MatAccordion);

        function _MatAccordion() {
          var _this44;

          _classCallCheck(this, _MatAccordion);

          _this44 = _super16.apply(this, arguments);
          /** Headers belonging to this accordion. */

          _this44._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
          _this44._hideToggle = false;
          /**
           * Display mode used for all expansion panels in the accordion. Currently two display
           * modes exist:
           *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
           *     panel at a different elevation from the rest of the accordion.
           *  flat - no spacing is placed around expanded panels, showing all panels at the same
           *     elevation.
           */

          _this44.displayMode = 'default';
          /** The position of the expansion indicator. */

          _this44.togglePosition = 'after';
          return _this44;
        }
        /** Whether the expansion indicator should be hidden. */


        _createClass(_MatAccordion, [{
          key: "hideToggle",
          get: function get() {
            return this._hideToggle;
          },
          set: function set(show) {
            this._hideToggle = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(show);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this45 = this;

            this._headers.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this._headers)).subscribe(function (headers) {
              _this45._ownHeaders.reset(headers.filter(function (header) {
                return header.panel.accordion === _this45;
              }));

              _this45._ownHeaders.notifyOnChanges();
            });

            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
          }
          /** Handles keyboard events coming in from the panel headers. */

        }, {
          key: "_handleHeaderKeydown",
          value: function _handleHeaderKeydown(event) {
            this._keyManager.onKeydown(event);
          }
        }, {
          key: "_handleHeaderFocus",
          value: function _handleHeaderFocus(header) {
            this._keyManager.updateActiveItem(header);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_MatAccordion.prototype), "ngOnDestroy", this).call(this);

            this._ownHeaders.destroy();
          }
        }]);

        return _MatAccordion;
      }(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion);

      _MatAccordion.ɵfac = /*@__PURE__*/function () {
        var ɵMatAccordion_BaseFactory;
        return function MatAccordion_Factory(t) {
          return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatAccordion)))(t || _MatAccordion);
        };
      }();

      _MatAccordion.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatExpansionPanelHeader, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
          }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
          }
        },
        inputs: {
          multi: "multi",
          displayMode: "displayMode",
          togglePosition: "togglePosition",
          hideToggle: "hideToggle"
        },
        exportAs: ["matAccordion"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _MAT_ACCORDION,
          useExisting: _MatAccordion
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _MatAccordion.propDecorators = {
        _headers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_MatExpansionPanelHeader, {
            descendants: true
          }]
        }],
        hideToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        displayMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        togglePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAccordion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-accordion',
            exportAs: 'matAccordion',
            inputs: ['multi'],
            providers: [{
              provide: _MAT_ACCORDION,
              useExisting: _MatAccordion
            }],
            host: {
              "class": 'mat-accordion',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if multiple panel support is enabled.
              '[class.mat-accordion-multi]': 'this.multi'
            }
          }]
        }], null, {
          displayMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          togglePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MatExpansionPanelHeader, {
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


      var _MatExpansionModule = function _MatExpansionModule() {
        _classCallCheck(this, _MatExpansionModule);
      };

      _MatExpansionModule.ɵfac = function MatExpansionModule_Factory(t) {
        return new (t || _MatExpansionModule)();
      };

      _MatExpansionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatExpansionModule
      });
      _MatExpansionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatExpansionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule],
            exports: [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent],
            declarations: [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatExpansionModule, {
          declarations: function declarations() {
            return [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule];
          },
          exports: function exports() {
            return [_MatAccordion, _MatExpansionPanel, _MatExpansionPanelActionRow, _MatExpansionPanelHeader, _MatExpansionPanelTitle, _MatExpansionPanelDescription, _MatExpansionPanelContent];
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
      //# sourceMappingURL=expansion.js.map

      /***/

    },

    /***/
    76627:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ICON_REGISTRY_PROVIDER": function ICON_REGISTRY_PROVIDER() {
          return (
            /* binding */
            _ICON_REGISTRY_PROVIDER
          );
        },

        /* harmony export */
        "ICON_REGISTRY_PROVIDER_FACTORY": function ICON_REGISTRY_PROVIDER_FACTORY() {
          return (
            /* binding */
            _ICON_REGISTRY_PROVIDER_FACTORY
          );
        },

        /* harmony export */
        "MAT_ICON_LOCATION": function MAT_ICON_LOCATION() {
          return (
            /* binding */
            _MAT_ICON_LOCATION
          );
        },

        /* harmony export */
        "MAT_ICON_LOCATION_FACTORY": function MAT_ICON_LOCATION_FACTORY() {
          return (
            /* binding */
            _MAT_ICON_LOCATION_FACTORY
          );
        },

        /* harmony export */
        "MatIcon": function MatIcon() {
          return (
            /* binding */
            _MatIcon
          );
        },

        /* harmony export */
        "MatIconModule": function MatIconModule() {
          return (
            /* binding */
            _MatIconModule
          );
        },

        /* harmony export */
        "MatIconRegistry": function MatIconRegistry() {
          return (
            /* binding */
            _MatIconRegistry
          );
        },

        /* harmony export */
        "getMatIconFailedToSanitizeLiteralError": function getMatIconFailedToSanitizeLiteralError() {
          return (
            /* binding */
            _getMatIconFailedToSanitizeLiteralError
          );
        },

        /* harmony export */
        "getMatIconFailedToSanitizeUrlError": function getMatIconFailedToSanitizeUrlError() {
          return (
            /* binding */
            _getMatIconFailedToSanitizeUrlError
          );
        },

        /* harmony export */
        "getMatIconNameNotFoundError": function getMatIconNameNotFoundError() {
          return (
            /* binding */
            _getMatIconNameNotFoundError
          );
        },

        /* harmony export */
        "getMatIconNoHttpProviderError": function getMatIconNoHttpProviderError() {
          return (
            /* binding */
            _getMatIconNoHttpProviderError
          );
        },

        /* harmony export */
        "ɵ0": function ɵ0() {
          return (
            /* binding */
            _ɵ2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      10826);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      68939);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      78345);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown in the case when attempting to
       * load an icon with a name that cannot be found.
       * @docs-private
       */


      var _c0 = ["*"];

      function _getMatIconNameNotFoundError(iconName) {
        return Error("Unable to find icon with the name \"".concat(iconName, "\""));
      }
      /**
       * Returns an exception to be thrown when the consumer attempts to use
       * `<mat-icon>` without including @angular/common/http.
       * @docs-private
       */


      function _getMatIconNoHttpProviderError() {
        return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
      }
      /**
       * Returns an exception to be thrown when a URL couldn't be sanitized.
       * @param url URL that was attempted to be sanitized.
       * @docs-private
       */


      function _getMatIconFailedToSanitizeUrlError(url) {
        return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
      }
      /**
       * Returns an exception to be thrown when a HTML string couldn't be sanitized.
       * @param literal HTML that was attempted to be sanitized.
       * @docs-private
       */


      function _getMatIconFailedToSanitizeLiteralError(literal) {
        return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
      }
      /**
       * Configuration for an icon, including the URL and possibly the cached SVG element.
       * @docs-private
       */


      var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
        _classCallCheck(this, SvgIconConfig);

        this.url = url;
        this.svgText = svgText;
        this.options = options;
      };
      /**
       * Service to register and display icons used by the `<mat-icon>` component.
       * - Registers icon URLs by namespace and name.
       * - Registers icon set URLs by namespace.
       * - Registers aliases for CSS classes, for use with icon fonts.
       * - Loads icons from URLs and extracts individual icons from icon sets.
       */


      var _MatIconRegistry = /*#__PURE__*/function () {
        function _MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
          _classCallCheck(this, _MatIconRegistry);

          this._httpClient = _httpClient;
          this._sanitizer = _sanitizer;
          this._errorHandler = _errorHandler;
          /**
           * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
           */

          this._svgIconConfigs = new Map();
          /**
           * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
           * Multiple icon sets can be registered under the same namespace.
           */

          this._iconSetConfigs = new Map();
          /** Cache for icons loaded by direct URLs. */

          this._cachedIconsByUrl = new Map();
          /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

          this._inProgressUrlFetches = new Map();
          /** Map from font identifiers to their CSS class names. Used for icon fonts. */

          this._fontCssClassesByAlias = new Map();
          /** Registered icon resolver functions. */

          this._resolvers = [];
          /**
           * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
           * The default 'material-icons' value assumes that the material icon font has been loaded as
           * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
           */

          this._defaultFontSetClass = 'material-icons';
          this._document = document;
        }
        /**
         * Registers an icon by URL in the default namespace.
         * @param iconName Name under which the icon should be registered.
         * @param url
         */


        _createClass(_MatIconRegistry, [{
          key: "addSvgIcon",
          value: function addSvgIcon(iconName, url, options) {
            return this.addSvgIconInNamespace('', iconName, url, options);
          }
          /**
           * Registers an icon using an HTML string in the default namespace.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteral",
          value: function addSvgIconLiteral(iconName, literal, options) {
            return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
          }
          /**
           * Registers an icon by URL in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param url
           */

        }, {
          key: "addSvgIconInNamespace",
          value: function addSvgIconInNamespace(namespace, iconName, url, options) {
            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon resolver function with the registry. The function will be invoked with the
           * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
           * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
           * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
           * will be invoked in the order in which they have been registered.
           * @param resolver Resolver function to be registered.
           */

        }, {
          key: "addSvgIconResolver",
          value: function addSvgIconResolver(resolver) {
            this._resolvers.push(resolver);

            return this;
          }
          /**
           * Registers an icon using an HTML string in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteralInNamespace",
          value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal); // TODO: add an ngDevMode check


            if (!cleanLiteral) {
              throw _getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Registers an icon set by URL in the default namespace.
           * @param url
           */

        }, {
          key: "addSvgIconSet",
          value: function addSvgIconSet(url, options) {
            return this.addSvgIconSetInNamespace('', url, options);
          }
          /**
           * Registers an icon set using an HTML string in the default namespace.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteral",
          value: function addSvgIconSetLiteral(literal, options) {
            return this.addSvgIconSetLiteralInNamespace('', literal, options);
          }
          /**
           * Registers an icon set by URL in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param url
           */

        }, {
          key: "addSvgIconSetInNamespace",
          value: function addSvgIconSetInNamespace(namespace, url, options) {
            return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon set using an HTML string in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteralInNamespace",
          value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);

            if (!cleanLiteral) {
              throw _getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
           * component with the alias as the fontSet input will cause the class name to be applied
           * to the `<mat-icon>` element.
           *
           * @param alias Alias for the font.
           * @param className Class name override to be used instead of the alias.
           */

        }, {
          key: "registerFontClassAlias",
          value: function registerFontClassAlias(alias) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

            this._fontCssClassesByAlias.set(alias, className);

            return this;
          }
          /**
           * Returns the CSS class name associated with the alias by a previous call to
           * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
           */

        }, {
          key: "classNameForFontAlias",
          value: function classNameForFontAlias(alias) {
            return this._fontCssClassesByAlias.get(alias) || alias;
          }
          /**
           * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           *
           * @param className
           */

        }, {
          key: "setDefaultFontSetClass",
          value: function setDefaultFontSetClass(className) {
            this._defaultFontSetClass = className;
            return this;
          }
          /**
           * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           */

        }, {
          key: "getDefaultFontSetClass",
          value: function getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
           * The response from the URL may be cached so this will not always cause an HTTP request, but
           * the produced element will always be a new copy of the originally fetched icon. (That is,
           * it will not contain any modifications made to elements previously returned).
           *
           * @param safeUrl URL from which to fetch the SVG icon.
           */

        }, {
          key: "getSvgIconFromUrl",
          value: function getSvgIconFromUrl(safeUrl) {
            var _this46 = this;

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);

            if (!url) {
              throw _getMatIconFailedToSanitizeUrlError(safeUrl);
            }

            var cachedIcon = this._cachedIconsByUrl.get(url);

            if (cachedIcon) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(cachedIcon));
            }

            return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (svg) {
              return _this46._cachedIconsByUrl.set(url, svg);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (svg) {
              return cloneSvg(svg);
            }));
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
           * and namespace. The icon must have been previously registered with addIcon or addIconSet;
           * if not, the Observable will throw an error.
           *
           * @param name Name of the icon to be retrieved.
           * @param namespace Namespace in which to look for the icon.
           */

        }, {
          key: "getNamedSvgIcon",
          value: function getNamedSvgIcon(name) {
            var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var key = iconKey(namespace, name);

            var config = this._svgIconConfigs.get(key); // Return (copy of) cached icon if possible.


            if (config) {
              return this._getSvgFromConfig(config);
            } // Otherwise try to resolve the config from one of the resolver functions.


            config = this._getIconConfigFromResolvers(namespace, name);

            if (config) {
              this._svgIconConfigs.set(key, config);

              return this._getSvgFromConfig(config);
            } // See if we have any icon sets registered for the namespace.


            var iconSetConfigs = this._iconSetConfigs.get(namespace);

            if (iconSetConfigs) {
              return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(_getMatIconNameNotFoundError(key));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._resolvers = [];

            this._svgIconConfigs.clear();

            this._iconSetConfigs.clear();

            this._cachedIconsByUrl.clear();
          }
          /**
           * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
           */

        }, {
          key: "_getSvgFromConfig",
          value: function _getSvgFromConfig(config) {
            if (config.svgText) {
              // We already have the SVG element for this icon, return a copy.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(this._svgElementFromConfig(config)));
            } else {
              // Fetch the icon from the config's URL, cache it, and return a copy.
              return this._loadSvgIconFromConfig(config).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (svg) {
                return cloneSvg(svg);
              }));
            }
          }
          /**
           * Attempts to find an icon with the specified name in any of the SVG icon sets.
           * First searches the available cached icons for a nested element with a matching name, and
           * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
           * that have not been cached, and searches again after all fetches are completed.
           * The returned Observable produces the SVG element if possible, and throws
           * an error if no icon with the specified name can be found.
           */

        }, {
          key: "_getSvgFromIconSetConfigs",
          value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
            var _this47 = this;

            // For all the icon set SVG elements we've fetched, see if any contain an icon with the
            // requested name.
            var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (namedIcon) {
              // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
              // time anyway, there's probably not much advantage compared to just always extracting
              // it from the icon set.
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(namedIcon);
            } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
            // fetched, fetch them now and look for iconName in the results.


            var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
              return !iconSetConfig.svgText;
            }).map(function (iconSetConfig) {
              return _this47._loadSvgIconSetFromConfig(iconSetConfig).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
                var url = _this47._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.


                var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

                _this47._errorHandler.handleError(new Error(errorMessage));

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
              }));
            }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
            // cached SVG element (unless the request failed), and we can check again for the icon.

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(iconSetFetchRequests).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () {
              var foundIcon = _this47._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


              if (!foundIcon) {
                throw _getMatIconNameNotFoundError(name);
              }

              return foundIcon;
            }));
          }
          /**
           * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractIconWithNameFromAnySet",
          value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
            // Iterate backwards, so icon sets added later have precedence.
            for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
              var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
              // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
              // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
              // some of the parsing.

              if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                var svg = this._svgElementFromConfig(config);

                var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

                if (foundIcon) {
                  return foundIcon;
                }
              }
            }

            return null;
          }
          /**
           * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
           * from it.
           */

        }, {
          key: "_loadSvgIconFromConfig",
          value: function _loadSvgIconFromConfig(config) {
            var _this48 = this;

            return this._fetchIcon(config).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (svgText) {
              return config.svgText = svgText;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function () {
              return _this48._svgElementFromConfig(config);
            }));
          }
          /**
           * Loads the content of the icon set URL specified in the
           * SvgIconConfig and attaches it to the config.
           */

        }, {
          key: "_loadSvgIconSetFromConfig",
          value: function _loadSvgIconSetFromConfig(config) {
            if (config.svgText) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
            }

            return this._fetchIcon(config).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (svgText) {
              return config.svgText = svgText;
            }));
          }
          /**
           * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractSvgIconFromSet",
          value: function _extractSvgIconFromSet(iconSet, iconName, options) {
            // Use the `id="iconName"` syntax in order to escape special
            // characters in the ID (versus using the #iconName syntax).
            var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

            if (!iconSource) {
              return null;
            } // Clone the element and remove the ID to prevent multiple elements from being added
            // to the page with the same ID.


            var iconElement = iconSource.cloneNode(true);
            iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
            // the content of a new <svg> node.

            if (iconElement.nodeName.toLowerCase() === 'svg') {
              return this._setSvgAttributes(iconElement, options);
            } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
            // that the same could be achieved by referring to it via <use href="#id">, however the <use>
            // tag is problematic on Firefox, because it needs to include the current page path.


            if (iconElement.nodeName.toLowerCase() === 'symbol') {
              return this._setSvgAttributes(this._toSvgElement(iconElement), options);
            } // createElement('SVG') doesn't work as expected; the DOM ends up with
            // the correct nodes, but the SVG content doesn't render. Instead we
            // have to create an empty SVG node using innerHTML and append its content.
            // Elements created using DOMParser.parseFromString have the same problem.
            // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


            var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


            svg.appendChild(iconElement);
            return this._setSvgAttributes(svg, options);
          }
          /**
           * Creates a DOM element from the given SVG string.
           */

        }, {
          key: "_svgElementFromString",
          value: function _svgElementFromString(str) {
            var div = this._document.createElement('DIV');

            div.innerHTML = str;
            var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

            if (!svg) {
              throw Error('<svg> tag not found');
            }

            return svg;
          }
          /**
           * Converts an element into an SVG node by cloning all of its children.
           */

        }, {
          key: "_toSvgElement",
          value: function _toSvgElement(element) {
            var svg = this._svgElementFromString('<svg></svg>');

            var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

            for (var i = 0; i < attributes.length; i++) {
              var _attributes$i = attributes[i],
                  name = _attributes$i.name,
                  value = _attributes$i.value;

              if (name !== 'id') {
                svg.setAttribute(name, value);
              }
            }

            for (var _i3 = 0; _i3 < element.childNodes.length; _i3++) {
              if (element.childNodes[_i3].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[_i3].cloneNode(true));
              }
            }

            return svg;
          }
          /**
           * Sets the default attributes for an SVG element to be used as an icon.
           */

        }, {
          key: "_setSvgAttributes",
          value: function _setSvgAttributes(svg, options) {
            svg.setAttribute('fit', '');
            svg.setAttribute('height', '100%');
            svg.setAttribute('width', '100%');
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

            if (options && options.viewBox) {
              svg.setAttribute('viewBox', options.viewBox);
            }

            return svg;
          }
          /**
           * Returns an Observable which produces the string contents of the given icon. Results may be
           * cached, so future calls with the same URL may not cause another HTTP request.
           */

        }, {
          key: "_fetchIcon",
          value: function _fetchIcon(iconConfig) {
            var _this49 = this;

            var _a;

            var safeUrl = iconConfig.url,
                options = iconConfig.options;
            var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

            if (!this._httpClient) {
              throw _getMatIconNoHttpProviderError();
            } // TODO: add an ngDevMode check


            if (safeUrl == null) {
              throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
            }

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


            if (!url) {
              throw _getMatIconFailedToSanitizeUrlError(safeUrl);
            } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
            // already a request in progress for that URL. It's necessary to call share() on the
            // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


            var inProgressFetch = this._inProgressUrlFetches.get(url);

            if (inProgressFetch) {
              return inProgressFetch;
            }

            var req = this._httpClient.get(url, {
              responseType: 'text',
              withCredentials: withCredentials
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(function () {
              return _this49._inProgressUrlFetches["delete"](url);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());

            this._inProgressUrlFetches.set(url, req);

            return req;
          }
          /**
           * Registers an icon config by name in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param iconName Name under which to register the config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconConfig",
          value: function _addSvgIconConfig(namespace, iconName, config) {
            this._svgIconConfigs.set(iconKey(namespace, iconName), config);

            return this;
          }
          /**
           * Registers an icon set config in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconSetConfig",
          value: function _addSvgIconSetConfig(namespace, config) {
            var configNamespace = this._iconSetConfigs.get(namespace);

            if (configNamespace) {
              configNamespace.push(config);
            } else {
              this._iconSetConfigs.set(namespace, [config]);
            }

            return this;
          }
          /** Parses a config's text into an SVG element. */

        }, {
          key: "_svgElementFromConfig",
          value: function _svgElementFromConfig(config) {
            if (!config.svgElement) {
              var svg = this._svgElementFromString(config.svgText);

              this._setSvgAttributes(svg, config.options);

              config.svgElement = svg;
            }

            return config.svgElement;
          }
          /** Tries to create an icon config through the registered resolver functions. */

        }, {
          key: "_getIconConfigFromResolvers",
          value: function _getIconConfigFromResolvers(namespace, name) {
            for (var i = 0; i < this._resolvers.length; i++) {
              var result = this._resolvers[i](name, namespace);

              if (result) {
                return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
              }
            }

            return undefined;
          }
        }]);

        return _MatIconRegistry;
      }();

      _MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
        return new (t || _MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
      };

      _MatIconRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MatIconRegistry_Factory() {
          return new _MatIconRegistry(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
        },
        token: _MatIconRegistry,
        providedIn: "root"
      });

      _MatIconRegistry.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatIconRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
          }];
        }, null);
      })();
      /** @docs-private */


      function _ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
        return parentRegistry || new _MatIconRegistry(httpClient, sanitizer, document, errorHandler);
      }
      /** @docs-private */


      var _ICON_REGISTRY_PROVIDER = {
        // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
        provide: _MatIconRegistry,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), _MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]],
        useFactory: _ICON_REGISTRY_PROVIDER_FACTORY
      };
      /** Clones an SVGElement while preserving type information. */

      function cloneSvg(svg) {
        return svg.cloneNode(true);
      }
      /** Returns the cache key to use for an icon namespace and name. */


      function iconKey(namespace, name) {
        return namespace + ':' + name;
      }

      function isSafeUrlWithOptions(value) {
        return !!(value.url && value.options);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatIcon.

      /** @docs-private */


      var MatIconBase = function MatIconBase(_elementRef) {
        _classCallCheck(this, MatIconBase);

        this._elementRef = _elementRef;
      };

      var _MatIconMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)(MatIconBase);
      /**
       * Injection token used to provide the current location to `MatIcon`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var _MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
        providedIn: 'root',
        factory: _MAT_ICON_LOCATION_FACTORY
      });
      /** @docs-private */


      function _MAT_ICON_LOCATION_FACTORY() {
        var _document = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


      var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

      var _ɵ2 = function _ɵ2(attr) {
        return "[".concat(attr, "]");
      };
      /** Selector that can be used to find all elements that are using a `FuncIRI`. */


      var funcIriAttributeSelector = funcIriAttributes.map(_ɵ2).join(', ');
      /** Regex that can be used to extract the id out of a FuncIRI. */

      var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
      /**
       * Component to display an icon. It can be used in the following ways:
       *
       * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
       *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
       *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
       *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
       *   Examples:
       *     `<mat-icon svgIcon="left-arrow"></mat-icon>
       *     <mat-icon svgIcon="animals:cat"></mat-icon>`
       *
       * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
       *   component. By default the Material icons font is used as described at
       *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
       *   alternate font by setting the fontSet input to either the CSS class to apply to use the
       *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
       *   Examples:
       *     `<mat-icon>home</mat-icon>
       *     <mat-icon fontSet="myfont">sun</mat-icon>`
       *
       * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
       *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
       *   CSS class which causes the glyph to be displayed via a :before selector, as in
       *   https://fortawesome.github.io/Font-Awesome/examples/
       *   Example:
       *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
       */

      var _MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
        _inherits(_MatIcon, _MatIconMixinBase2);

        var _super17 = _createSuper(_MatIcon);

        function _MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
          var _this50;

          _classCallCheck(this, _MatIcon);

          _this50 = _super17.call(this, elementRef);
          _this50._iconRegistry = _iconRegistry;
          _this50._location = _location;
          _this50._errorHandler = _errorHandler;
          _this50._inline = false;
          /** Subscription to the current in-progress SVG icon request. */

          _this50._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
          // the right thing to do for the majority of icon use-cases.

          if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
          }

          return _this50;
        }
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */


        _createClass(_MatIcon, [{
          key: "inline",
          get: function get() {
            return this._inline;
          },
          set: function set(inline) {
            this._inline = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(inline);
          }
          /** Name of the icon in the SVG icon set. */

        }, {
          key: "svgIcon",
          get: function get() {
            return this._svgIcon;
          },
          set: function set(value) {
            if (value !== this._svgIcon) {
              if (value) {
                this._updateSvgIcon(value);
              } else if (this._svgIcon) {
                this._clearSvgElement();
              }

              this._svgIcon = value;
            }
          }
          /** Font set that the icon is a part of. */

        }, {
          key: "fontSet",
          get: function get() {
            return this._fontSet;
          },
          set: function set(value) {
            var newValue = this._cleanupFontValue(value);

            if (newValue !== this._fontSet) {
              this._fontSet = newValue;

              this._updateFontIconClasses();
            }
          }
          /** Name of an icon within a font set. */

        }, {
          key: "fontIcon",
          get: function get() {
            return this._fontIcon;
          },
          set: function set(value) {
            var newValue = this._cleanupFontValue(value);

            if (newValue !== this._fontIcon) {
              this._fontIcon = newValue;

              this._updateFontIconClasses();
            }
          }
          /**
           * Splits an svgIcon binding value into its icon set and icon name components.
           * Returns a 2-element array of [(icon set), (icon name)].
           * The separator for the two fields is ':'. If there is no separator, an empty
           * string is returned for the icon set and the entire value is returned for
           * the icon name. If the argument is falsy, returns an array of two empty strings.
           * Throws an error if the name contains two or more ':' separators.
           * Examples:
           *   `'social:cake' -> ['social', 'cake']
           *   'penguin' -> ['', 'penguin']
           *   null -> ['', '']
           *   'a:b:c' -> (throws Error)`
           */

        }, {
          key: "_splitIconName",
          value: function _splitIconName(iconName) {
            if (!iconName) {
              return ['', ''];
            }

            var parts = iconName.split(':');

            switch (parts.length) {
              case 1:
                return ['', parts[0]];
              // Use default namespace.

              case 2:
                return parts;

              default:
                throw Error("Invalid icon name: \"".concat(iconName, "\""));
              // TODO: add an ngDevMode check
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // Update font classes because ngOnChanges won't be called if none of the inputs are present,
            // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
            this._updateFontIconClasses();
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var cachedElements = this._elementsWithExternalReferences;

            if (cachedElements && cachedElements.size) {
              var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
              // the browser doesn't have an API that will let us react on link clicks and
              // we can't depend on the Angular router. The references need to be updated,
              // because while most browsers don't care whether the URL is correct after
              // the first render, Safari will break if the user navigates to a different
              // page and the SVG isn't re-rendered.


              if (newPath !== this._previousPath) {
                this._previousPath = newPath;

                this._prependPathToReferences(newPath);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._currentIconFetch.unsubscribe();

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            }
          }
        }, {
          key: "_usingFontIcon",
          value: function _usingFontIcon() {
            return !this.svgIcon;
          }
        }, {
          key: "_setSvgElement",
          value: function _setSvgElement(svg) {
            this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
            // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
            // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


            var styleTags = svg.querySelectorAll('style');

            for (var i = 0; i < styleTags.length; i++) {
              styleTags[i].textContent += ' ';
            } // Note: we do this fix here, rather than the icon registry, because the
            // references have to point to the URL at the time that the icon was created.


            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);

            this._elementRef.nativeElement.appendChild(svg);
          }
        }, {
          key: "_clearSvgElement",
          value: function _clearSvgElement() {
            var layoutElement = this._elementRef.nativeElement;
            var childCount = layoutElement.childNodes.length;

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
            // we can't use innerHTML, because IE will throw if the element has a data binding.


            while (childCount--) {
              var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
              // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

              if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
              }
            }
          }
        }, {
          key: "_updateFontIconClasses",
          value: function _updateFontIconClasses() {
            if (!this._usingFontIcon()) {
              return;
            }

            var elem = this._elementRef.nativeElement;
            var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

            if (fontSetClass != this._previousFontSetClass) {
              if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
              }

              if (fontSetClass) {
                elem.classList.add(fontSetClass);
              }

              this._previousFontSetClass = fontSetClass;
            }

            if (this.fontIcon != this._previousFontIconClass) {
              if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
              }

              if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
              }

              this._previousFontIconClass = this.fontIcon;
            }
          }
          /**
           * Cleans up a value to be used as a fontIcon or fontSet.
           * Since the value ends up being assigned as a CSS class, we
           * have to trim the value and omit space-separated values.
           */

        }, {
          key: "_cleanupFontValue",
          value: function _cleanupFontValue(value) {
            return typeof value === 'string' ? value.trim().split(' ')[0] : value;
          }
          /**
           * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
           * reference. This is required because WebKit browsers require references to be prefixed with
           * the current path, if the page has a `base` tag.
           */

        }, {
          key: "_prependPathToReferences",
          value: function _prependPathToReferences(path) {
            var elements = this._elementsWithExternalReferences;

            if (elements) {
              elements.forEach(function (attrs, element) {
                attrs.forEach(function (attr) {
                  element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
                });
              });
            }
          }
          /**
           * Caches the children of an SVG element that have `url()`
           * references that we need to prefix with the current path.
           */

        }, {
          key: "_cacheChildrenWithExternalReferences",
          value: function _cacheChildrenWithExternalReferences(element) {
            var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
            var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

            var _loop = function _loop(i) {
              funcIriAttributes.forEach(function (attr) {
                var elementWithReference = elementsWithFuncIri[i];
                var value = elementWithReference.getAttribute(attr);
                var match = value ? value.match(funcIriPattern) : null;

                if (match) {
                  var attributes = elements.get(elementWithReference);

                  if (!attributes) {
                    attributes = [];
                    elements.set(elementWithReference, attributes);
                  }

                  attributes.push({
                    name: attr,
                    value: match[1]
                  });
                }
              });
            };

            for (var i = 0; i < elementsWithFuncIri.length; i++) {
              _loop(i);
            }
          }
          /** Sets a new SVG icon with a particular name. */

        }, {
          key: "_updateSvgIcon",
          value: function _updateSvgIcon(rawName) {
            var _this51 = this;

            this._svgNamespace = null;
            this._svgName = null;

            this._currentIconFetch.unsubscribe();

            if (rawName) {
              var _this$_splitIconName = this._splitIconName(rawName),
                  _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                  namespace = _this$_splitIconName2[0],
                  iconName = _this$_splitIconName2[1];

              if (namespace) {
                this._svgNamespace = namespace;
              }

              if (iconName) {
                this._svgName = iconName;
              }

              this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(function (svg) {
                return _this51._setSvgElement(svg);
              }, function (err) {
                var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

                _this51._errorHandler.handleError(new Error(errorMessage));
              });
            }
          }
        }]);

        return _MatIcon;
      }(_MatIconMixinBase);

      _MatIcon.ɵfac = function MatIcon_Factory(t) {
        return new (t || _MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
      };

      _MatIcon.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatIcon,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 7,
        hostBindings: function MatIcon_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
          }
        },
        inputs: {
          color: "color",
          inline: "inline",
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon"
        },
        exportAs: ["matIcon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
        }];
      };

      _MatIcon.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            template: '<ng-content></ng-content>',
            selector: 'mat-icon',
            exportAs: 'matIcon',
            inputs: ['color'],
            host: {
              'role': 'img',
              'class': 'mat-icon notranslate',
              '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
              '[attr.data-mat-icon-name]': '_svgName || fontIcon',
              '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
              '[class.mat-icon-inline]': 'inline',
              '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _MatIconRegistry
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['aria-hidden']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_ICON_LOCATION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
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


      var _MatIconModule = function _MatIconModule() {
        _classCallCheck(this, _MatIconModule);
      };

      _MatIconModule.ɵfac = function MatIconModule_Factory(t) {
        return new (t || _MatIconModule)();
      };

      _MatIconModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatIconModule
      });
      _MatIconModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatIconModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
            exports: [_MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
            declarations: [_MatIcon]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatIconModule, {
          declarations: function declarations() {
            return [_MatIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule];
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
      //# sourceMappingURL=icon.js.map

      /***/

    },

    /***/
    99692:
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_PAGINATOR_DEFAULT_OPTIONS": function MAT_PAGINATOR_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_PAGINATOR_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MAT_PAGINATOR_INTL_PROVIDER": function MAT_PAGINATOR_INTL_PROVIDER() {
          return (
            /* binding */
            _MAT_PAGINATOR_INTL_PROVIDER
          );
        },

        /* harmony export */
        "MAT_PAGINATOR_INTL_PROVIDER_FACTORY": function MAT_PAGINATOR_INTL_PROVIDER_FACTORY() {
          return (
            /* binding */
            _MAT_PAGINATOR_INTL_PROVIDER_FACTORY
          );
        },

        /* harmony export */
        "MatPaginator": function MatPaginator() {
          return (
            /* binding */
            _MatPaginator
          );
        },

        /* harmony export */
        "MatPaginatorIntl": function MatPaginatorIntl() {
          return (
            /* binding */
            _MatPaginatorIntl
          );
        },

        /* harmony export */
        "MatPaginatorModule": function MatPaginatorModule() {
          return (
            /* binding */
            _MatPaginatorModule
          );
        },

        /* harmony export */
        "PageEvent": function PageEvent() {
          return (
            /* binding */
            _PageEvent
          );
        },

        /* harmony export */
        "_MatPaginatorBase": function _MatPaginatorBase() {
          return (
            /* binding */
            _MatPaginatorBase2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatPaginatorIntl and
       * include it in a custom provider
       */


      function MatPaginator_div_2_mat_form_field_3_mat_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageSizeOption_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pageSizeOption_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r6, " ");
        }
      }

      function MatPaginator_div_2_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MatPaginator_div_2_mat_form_field_3_Template_mat_select_selectionChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7._changePageSize($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_div_2_mat_form_field_3_mat_option_2_Template, 2, 2, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-label", ctx_r3._intl.itemsPerPageLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3._displayedPageSizeOptions);
        }
      }

      function MatPaginator_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.pageSize);
        }
      }

      function MatPaginator_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatPaginator_div_2_mat_form_field_3_Template, 3, 6, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatPaginator_div_2_div_4_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0._intl.itemsPerPageLabel, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._displayedPageSizeOptions.length <= 1);
        }
      }

      function MatPaginator_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.firstPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1._intl.firstPageLabel);
        }
      }

      function MatPaginator_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.lastPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2._intl.lastPageLabel);
        }
      }

      var _MatPaginatorIntl = function _MatPaginatorIntl() {
        _classCallCheck(this, _MatPaginatorIntl);

        /**
         * Stream to emit from when labels are changed. Use this to notify components when the labels have
         * changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** A label for the page size selector. */

        this.itemsPerPageLabel = 'Items per page:';
        /** A label for the button that increments the current page. */

        this.nextPageLabel = 'Next page';
        /** A label for the button that decrements the current page. */

        this.previousPageLabel = 'Previous page';
        /** A label for the button that moves to the first page. */

        this.firstPageLabel = 'First page';
        /** A label for the button that moves to the last page. */

        this.lastPageLabel = 'Last page';
        /** A label for the range of items within the current page and the length of the whole list. */

        this.getRangeLabel = function (page, pageSize, length) {
          if (length == 0 || pageSize == 0) {
            return "0 of ".concat(length);
          }

          length = Math.max(length, 0);
          var startIndex = page * pageSize; // If the start index exceeds the list length, do not try and fix the end index to the end.

          var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
          return "".concat(startIndex + 1, " \u2013 ").concat(endIndex, " of ").concat(length);
        };
      };

      _MatPaginatorIntl.ɵfac = function MatPaginatorIntl_Factory(t) {
        return new (t || _MatPaginatorIntl)();
      };

      _MatPaginatorIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MatPaginatorIntl_Factory() {
          return new _MatPaginatorIntl();
        },
        token: _MatPaginatorIntl,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatPaginatorIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function _MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new _MatPaginatorIntl();
      }
      /** @docs-private */


      var _MAT_PAGINATOR_INTL_PROVIDER = {
        // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
        provide: _MatPaginatorIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), _MatPaginatorIntl]],
        useFactory: _MAT_PAGINATOR_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The default page size if there is no page size and there are no provided page size options. */

      var DEFAULT_PAGE_SIZE = 50;
      /**
       * Change event object that is emitted when the user selects a
       * different page size or navigates to another page.
       */

      var _PageEvent = function _PageEvent() {
        _classCallCheck(this, _PageEvent);
      };
      /** Injection token that can be used to provide the default options for the paginator module. */


      var _MAT_PAGINATOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_PAGINATOR_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to _MatPaginatorBase.

      /** @docs-private */


      var MatPaginatorMixinBase = function MatPaginatorMixinBase() {
        _classCallCheck(this, MatPaginatorMixinBase);
      };

      var _MatPaginatorMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinInitialized)(MatPaginatorMixinBase));
      /**
       * Base class with all of the `MatPaginator` functionality.
       * @docs-private
       */


      var _MatPaginatorBase2 = /*#__PURE__*/function (_MatPaginatorMixinBas) {
        _inherits(_MatPaginatorBase2, _MatPaginatorMixinBas);

        var _super18 = _createSuper(_MatPaginatorBase2);

        function _MatPaginatorBase2(_intl, _changeDetectorRef, defaults) {
          var _this52;

          _classCallCheck(this, _MatPaginatorBase2);

          _this52 = _super18.call(this);
          _this52._intl = _intl;
          _this52._changeDetectorRef = _changeDetectorRef;
          _this52._pageIndex = 0;
          _this52._length = 0;
          _this52._pageSizeOptions = [];
          _this52._hidePageSize = false;
          _this52._showFirstLastButtons = false;
          /** Event emitted when the paginator changes the page size or page index. */

          _this52.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this52._intlChanges = _intl.changes.subscribe(function () {
            return _this52._changeDetectorRef.markForCheck();
          });

          if (defaults) {
            var pageSize = defaults.pageSize,
                pageSizeOptions = defaults.pageSizeOptions,
                hidePageSize = defaults.hidePageSize,
                showFirstLastButtons = defaults.showFirstLastButtons;

            if (pageSize != null) {
              _this52._pageSize = pageSize;
            }

            if (pageSizeOptions != null) {
              _this52._pageSizeOptions = pageSizeOptions;
            }

            if (hidePageSize != null) {
              _this52._hidePageSize = hidePageSize;
            }

            if (showFirstLastButtons != null) {
              _this52._showFirstLastButtons = showFirstLastButtons;
            }
          }

          return _this52;
        }
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */


        _createClass(_MatPaginatorBase2, [{
          key: "pageIndex",
          get: function get() {
            return this._pageIndex;
          },
          set: function set(value) {
            this._pageIndex = Math.max((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value), 0);

            this._changeDetectorRef.markForCheck();
          }
          /** The length of the total number of items that are being paginated. Defaulted to 0. */

        }, {
          key: "length",
          get: function get() {
            return this._length;
          },
          set: function set(value) {
            this._length = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Number of items to display on a page. By default set to 50. */

        }, {
          key: "pageSize",
          get: function get() {
            return this._pageSize;
          },
          set: function set(value) {
            this._pageSize = Math.max((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value), 0);

            this._updateDisplayedPageSizeOptions();
          }
          /** The set of provided page size options to display to the user. */

        }, {
          key: "pageSizeOptions",
          get: function get() {
            return this._pageSizeOptions;
          },
          set: function set(value) {
            this._pageSizeOptions = (value || []).map(function (p) {
              return (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(p);
            });

            this._updateDisplayedPageSizeOptions();
          }
          /** Whether to hide the page size selection UI from the user. */

        }, {
          key: "hidePageSize",
          get: function get() {
            return this._hidePageSize;
          },
          set: function set(value) {
            this._hidePageSize = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
          /** Whether to show the first/last buttons UI to the user. */

        }, {
          key: "showFirstLastButtons",
          get: function get() {
            return this._showFirstLastButtons;
          },
          set: function set(value) {
            this._showFirstLastButtons = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._initialized = true;

            this._updateDisplayedPageSizeOptions();

            this._markInitialized();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlChanges.unsubscribe();
          }
          /** Advances to the next page if it exists. */

        }, {
          key: "nextPage",
          value: function nextPage() {
            if (!this.hasNextPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex++;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move back to the previous page if it exists. */

        }, {
          key: "previousPage",
          value: function previousPage() {
            if (!this.hasPreviousPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex--;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move to the first page if not already there. */

        }, {
          key: "firstPage",
          value: function firstPage() {
            // hasPreviousPage being false implies at the start
            if (!this.hasPreviousPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex = 0;

            this._emitPageEvent(previousPageIndex);
          }
          /** Move to the last page if not already there. */

        }, {
          key: "lastPage",
          value: function lastPage() {
            // hasNextPage being false implies at the end
            if (!this.hasNextPage()) {
              return;
            }

            var previousPageIndex = this.pageIndex;
            this.pageIndex = this.getNumberOfPages() - 1;

            this._emitPageEvent(previousPageIndex);
          }
          /** Whether there is a previous page. */

        }, {
          key: "hasPreviousPage",
          value: function hasPreviousPage() {
            return this.pageIndex >= 1 && this.pageSize != 0;
          }
          /** Whether there is a next page. */

        }, {
          key: "hasNextPage",
          value: function hasNextPage() {
            var maxPageIndex = this.getNumberOfPages() - 1;
            return this.pageIndex < maxPageIndex && this.pageSize != 0;
          }
          /** Calculate the number of pages */

        }, {
          key: "getNumberOfPages",
          value: function getNumberOfPages() {
            if (!this.pageSize) {
              return 0;
            }

            return Math.ceil(this.length / this.pageSize);
          }
          /**
           * Changes the page size so that the first item displayed on the page will still be
           * displayed using the new page size.
           *
           * For example, if the page size is 10 and on the second page (items indexed 10-19) then
           * switching so that the page size is 5 will set the third page as the current page so
           * that the 10th item will still be displayed.
           */

        }, {
          key: "_changePageSize",
          value: function _changePageSize(pageSize) {
            // Current page needs to be updated to reflect the new page size. Navigate to the page
            // containing the previous page's first item.
            var startIndex = this.pageIndex * this.pageSize;
            var previousPageIndex = this.pageIndex;
            this.pageIndex = Math.floor(startIndex / pageSize) || 0;
            this.pageSize = pageSize;

            this._emitPageEvent(previousPageIndex);
          }
          /** Checks whether the buttons for going forwards should be disabled. */

        }, {
          key: "_nextButtonsDisabled",
          value: function _nextButtonsDisabled() {
            return this.disabled || !this.hasNextPage();
          }
          /** Checks whether the buttons for going backwards should be disabled. */

        }, {
          key: "_previousButtonsDisabled",
          value: function _previousButtonsDisabled() {
            return this.disabled || !this.hasPreviousPage();
          }
          /**
           * Updates the list of page size options to display to the user. Includes making sure that
           * the page size is an option and that the list is sorted.
           */

        }, {
          key: "_updateDisplayedPageSizeOptions",
          value: function _updateDisplayedPageSizeOptions() {
            if (!this._initialized) {
              return;
            } // If no page size is provided, use the first page size option or the default page size.


            if (!this.pageSize) {
              this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
            }

            this._displayedPageSizeOptions = this.pageSizeOptions.slice();

            if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
              this._displayedPageSizeOptions.push(this.pageSize);
            } // Sort the numbers using a number-specific sort function.


            this._displayedPageSizeOptions.sort(function (a, b) {
              return a - b;
            });

            this._changeDetectorRef.markForCheck();
          }
          /** Emits an event notifying that a change of the paginator's properties has been triggered. */

        }, {
          key: "_emitPageEvent",
          value: function _emitPageEvent(previousPageIndex) {
            this.page.emit({
              previousPageIndex: previousPageIndex,
              pageIndex: this.pageIndex,
              pageSize: this.pageSize,
              length: this.length
            });
          }
        }]);

        return _MatPaginatorBase2;
      }(_MatPaginatorMixinBase);

      _MatPaginatorBase2.ɵfac = function _MatPaginatorBase_Factory(t) {
        return new (t || _MatPaginatorBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](undefined));
      };

      _MatPaginatorBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatPaginatorBase2,
        inputs: {
          pageIndex: "pageIndex",
          length: "length",
          pageSize: "pageSize",
          pageSizeOptions: "pageSizeOptions",
          hidePageSize: "hidePageSize",
          showFirstLastButtons: "showFirstLastButtons",
          color: "color"
        },
        outputs: {
          page: "page"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _MatPaginatorBase2.ctorParameters = function () {
        return [{
          type: _MatPaginatorIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined
        }];
      };

      _MatPaginatorBase2.propDecorators = {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pageIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        length: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        pageSizeOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        hidePageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        showFirstLastButtons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatPaginatorBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _MatPaginatorIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined
          }];
        }, {
          page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          pageIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          pageSizeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hidePageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showFirstLastButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * Component to provide navigation between paged information. Displays the size of the current
       * page, user-selectable options to change that size, what items are being shown, and
       * navigational button to go to the previous or next page.
       */


      var _MatPaginator = /*#__PURE__*/function (_MatPaginatorBase3) {
        _inherits(_MatPaginator, _MatPaginatorBase3);

        var _super19 = _createSuper(_MatPaginator);

        function _MatPaginator(intl, changeDetectorRef, defaults) {
          var _this53;

          _classCallCheck(this, _MatPaginator);

          _this53 = _super19.call(this, intl, changeDetectorRef, defaults);

          if (defaults && defaults.formFieldAppearance != null) {
            _this53._formFieldAppearance = defaults.formFieldAppearance;
          }

          return _this53;
        }

        return _MatPaginator;
      }(_MatPaginatorBase2);

      _MatPaginator.ɵfac = function MatPaginator_Factory(t) {
        return new (t || _MatPaginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatPaginatorIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
      };

      _MatPaginator.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatPaginator,
        selectors: [["mat-paginator"]],
        hostAttrs: ["role", "group", 1, "mat-paginator"],
        inputs: {
          disabled: "disabled"
        },
        exportAs: ["matPaginator"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 14,
        consts: [[1, "mat-paginator-outer-container"], [1, "mat-paginator-container"], ["class", "mat-paginator-page-size", 4, "ngIf"], [1, "mat-paginator-range-actions"], [1, "mat-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", 1, "mat-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click", 4, "ngIf"], [1, "mat-paginator-page-size"], [1, "mat-paginator-page-size-label"], ["class", "mat-paginator-page-size-select", 3, "appearance", "color", 4, "ngIf"], ["class", "mat-paginator-page-size-value", 4, "ngIf"], [1, "mat-paginator-page-size-select", 3, "appearance", "color"], [3, "value", "disabled", "aria-label", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mat-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
        template: function MatPaginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatPaginator_div_2_Template, 5, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatPaginator_button_6_Template, 3, 5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_7_listener() {
              return ctx.previousPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatPaginator_Template_button_click_10_listener() {
              return ctx.nextPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MatPaginator_button_13_Template, 3, 5, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidePageSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.previousPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx._intl.nextPageLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFirstLastButtons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption],
        styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatPaginator.ctorParameters = function () {
        return [{
          type: _MatPaginatorIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_PAGINATOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatPaginator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-paginator',
            exportAs: 'matPaginator',
            template: "<div class=\"mat-paginator-outer-container\">\n  <div class=\"mat-paginator-container\">\n    <div class=\"mat-paginator-page-size\" *ngIf=\"!hidePageSize\">\n      <div class=\"mat-paginator-page-size-label\">\n        {{_intl.itemsPerPageLabel}}\n      </div>\n\n      <mat-form-field\n        *ngIf=\"_displayedPageSizeOptions.length > 1\"\n        [appearance]=\"_formFieldAppearance!\"\n        [color]=\"color\"\n        class=\"mat-paginator-page-size-select\">\n        <mat-select\n          [value]=\"pageSize\"\n          [disabled]=\"disabled\"\n          [aria-label]=\"_intl.itemsPerPageLabel\"\n          (selectionChange)=\"_changePageSize($event.value)\">\n          <mat-option *ngFor=\"let pageSizeOption of _displayedPageSizeOptions\" [value]=\"pageSizeOption\">\n            {{pageSizeOption}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <div\n        class=\"mat-paginator-page-size-value\"\n        *ngIf=\"_displayedPageSizeOptions.length <= 1\">{{pageSize}}</div>\n    </div>\n\n    <div class=\"mat-paginator-range-actions\">\n      <div class=\"mat-paginator-range-label\">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-first\"\n              (click)=\"firstPage()\"\n              [attr.aria-label]=\"_intl.firstPageLabel\"\n              [matTooltip]=\"_intl.firstPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-previous\"\n              (click)=\"previousPage()\"\n              [attr.aria-label]=\"_intl.previousPageLabel\"\n              [matTooltip]=\"_intl.previousPageLabel\"\n              [matTooltipDisabled]=\"_previousButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_previousButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-next\"\n              (click)=\"nextPage()\"\n              [attr.aria-label]=\"_intl.nextPageLabel\"\n              [matTooltip]=\"_intl.nextPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/>\n        </svg>\n      </button>\n      <button mat-icon-button type=\"button\"\n              class=\"mat-paginator-navigation-last\"\n              (click)=\"lastPage()\"\n              [attr.aria-label]=\"_intl.lastPageLabel\"\n              [matTooltip]=\"_intl.lastPageLabel\"\n              [matTooltipDisabled]=\"_nextButtonsDisabled()\"\n              [matTooltipPosition]=\"'above'\"\n              [disabled]=\"_nextButtonsDisabled()\"\n              *ngIf=\"showFirstLastButtons\">\n        <svg class=\"mat-paginator-icon\" viewBox=\"0 0 24 24\" focusable=\"false\">\n          <path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\"/>\n        </svg>\n      </button>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled'],
            host: {
              'class': 'mat-paginator',
              'role': 'group'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            styles: [".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}\n"]
          }]
        }], function () {
          return [{
            type: _MatPaginatorIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_PAGINATOR_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatPaginatorModule = function _MatPaginatorModule() {
        _classCallCheck(this, _MatPaginatorModule);
      };

      _MatPaginatorModule.ɵfac = function MatPaginatorModule_Factory(t) {
        return new (t || _MatPaginatorModule)();
      };

      _MatPaginatorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatPaginatorModule
      });
      _MatPaginatorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MAT_PAGINATOR_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatPaginatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
            exports: [_MatPaginator],
            declarations: [_MatPaginator],
            providers: [_MAT_PAGINATOR_INTL_PROVIDER]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatPaginatorModule, {
          declarations: function declarations() {
            return [_MatPaginator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltipModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatPaginator];
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
      //# sourceMappingURL=paginator.js.map

      /***/

    },

    /***/
    11494:
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_SORT_DEFAULT_OPTIONS": function MAT_SORT_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_SORT_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MAT_SORT_HEADER_INTL_PROVIDER": function MAT_SORT_HEADER_INTL_PROVIDER() {
          return (
            /* binding */
            _MAT_SORT_HEADER_INTL_PROVIDER
          );
        },

        /* harmony export */
        "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY": function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY() {
          return (
            /* binding */
            _MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
          );
        },

        /* harmony export */
        "MatSort": function MatSort() {
          return (
            /* binding */
            _MatSort
          );
        },

        /* harmony export */
        "MatSortHeader": function MatSortHeader() {
          return (
            /* binding */
            _MatSortHeader
          );
        },

        /* harmony export */
        "MatSortHeaderIntl": function MatSortHeaderIntl() {
          return (
            /* binding */
            _MatSortHeaderIntl
          );
        },

        /* harmony export */
        "MatSortModule": function MatSortModule() {
          return (
            /* binding */
            _MatSortModule
          );
        },

        /* harmony export */
        "matSortAnimations": function matSortAnimations() {
          return (
            /* binding */
            _matSortAnimations
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      var _c0 = ["mat-sort-header", ""];

      function MatSortHeader_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1._disableViewStateAnimation = true;
          })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3._disableViewStateAnimation = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
        }
      }

      var _c1 = ["*"];

      function getSortDuplicateSortableIdError(id) {
        return Error("Cannot have two MatSortables with the same id (".concat(id, ")."));
      }
      /** @docs-private */


      function getSortHeaderNotContainedWithinSortError() {
        return Error("MatSortHeader must be placed within a parent element with the MatSort directive.");
      }
      /** @docs-private */


      function getSortHeaderMissingIdError() {
        return Error("MatSortHeader must be provided with a unique id.");
      }
      /** @docs-private */


      function getSortInvalidDirectionError(direction) {
        return Error("".concat(direction, " is not a valid sort direction ('asc' or 'desc')."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-sort`. */


      var _MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS'); // Boilerplate for applying mixins to MatSort.

      /** @docs-private */


      var MatSortBase = function MatSortBase() {
        _classCallCheck(this, MatSortBase);
      };

      var _MatSortMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinInitialized)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(MatSortBase));
      /** Container for MatSortables to manage the sort state and provide default sort parameters. */


      var _MatSort = /*#__PURE__*/function (_MatSortMixinBase2) {
        _inherits(_MatSort, _MatSortMixinBase2);

        var _super20 = _createSuper(_MatSort);

        function _MatSort(_defaultOptions) {
          var _this54;

          _classCallCheck(this, _MatSort);

          _this54 = _super20.call(this);
          _this54._defaultOptions = _defaultOptions;
          /** Collection of all registered sortables that this directive manages. */

          _this54.sortables = new Map();
          /** Used to notify any child components listening to state changes. */

          _this54._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          /**
           * The direction to set when an MatSortable is initially sorted.
           * May be overriden by the MatSortable's sort start.
           */

          _this54.start = 'asc';
          _this54._direction = '';
          /** Event emitted when the user changes either the active sort or sort direction. */

          _this54.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          return _this54;
        }
        /** The sort direction of the currently active MatSortable. */


        _createClass(_MatSort, [{
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(direction) {
            if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getSortInvalidDirectionError(direction);
            }

            this._direction = direction;
          }
          /**
           * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
           * May be overriden by the MatSortable's disable clear input.
           */

        }, {
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          },
          set: function set(v) {
            this._disableClear = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(v);
          }
          /**
           * Register function to be used by the contained MatSortables. Adds the MatSortable to the
           * collection of MatSortables.
           */

        }, {
          key: "register",
          value: function register(sortable) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!sortable.id) {
                throw getSortHeaderMissingIdError();
              }

              if (this.sortables.has(sortable.id)) {
                throw getSortDuplicateSortableIdError(sortable.id);
              }
            }

            this.sortables.set(sortable.id, sortable);
          }
          /**
           * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
           * collection of contained MatSortables.
           */

        }, {
          key: "deregister",
          value: function deregister(sortable) {
            this.sortables["delete"](sortable.id);
          }
          /** Sets the active sort id and determines the new sort direction. */

        }, {
          key: "sort",
          value: function sort(sortable) {
            if (this.active != sortable.id) {
              this.active = sortable.id;
              this.direction = sortable.start ? sortable.start : this.start;
            } else {
              this.direction = this.getNextSortDirection(sortable);
            }

            this.sortChange.emit({
              active: this.active,
              direction: this.direction
            });
          }
          /** Returns the next sort direction of the active sortable, checking for potential overrides. */

        }, {
          key: "getNextSortDirection",
          value: function getNextSortDirection(sortable) {
            var _a, _b, _c;

            if (!sortable) {
              return '';
            } // Get the sort direction cycle with the potential sortable overrides.


            var disableClear = (_b = (_a = sortable === null || sortable === void 0 ? void 0 : sortable.disableClear) !== null && _a !== void 0 ? _a : this.disableClear) !== null && _b !== void 0 ? _b : !!((_c = this._defaultOptions) === null || _c === void 0 ? void 0 : _c.disableClear);
            var sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear); // Get and return the next direction in the cycle

            var nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;

            if (nextDirectionIndex >= sortDirectionCycle.length) {
              nextDirectionIndex = 0;
            }

            return sortDirectionCycle[nextDirectionIndex];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._markInitialized();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._stateChanges.complete();
          }
        }]);

        return _MatSort;
      }(_MatSortMixinBase);

      _MatSort.ɵfac = function MatSort_Factory(t) {
        return new (t || _MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_SORT_DEFAULT_OPTIONS, 8));
      };

      _MatSort.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatSort,
        selectors: [["", "matSort", ""]],
        hostAttrs: [1, "mat-sort"],
        inputs: {
          disabled: ["matSortDisabled", "disabled"],
          start: ["matSortStart", "start"],
          direction: ["matSortDirection", "direction"],
          disableClear: ["matSortDisableClear", "disableClear"],
          active: ["matSortActive", "active"]
        },
        outputs: {
          sortChange: "matSortChange"
        },
        exportAs: ["matSort"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _MatSort.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_SORT_DEFAULT_OPTIONS]
          }]
        }];
      };

      _MatSort.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matSortActive']
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matSortStart']
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matSortDirection']
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matSortDisableClear']
        }],
        sortChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['matSortChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSort, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matSort]',
            exportAs: 'matSort',
            host: {
              'class': 'mat-sort'
            },
            inputs: ['disabled: matSortDisabled']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_SORT_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matSortStart']
          }],
          sortChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['matSortChange']
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matSortDirection']
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matSortDisableClear']
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matSortActive']
          }]
        });
      })();
      /** Returns the sort direction cycle to use given the provided parameters of order and clear. */


      function getSortDirectionCycle(start, disableClear) {
        var sortOrder = ['asc', 'desc'];

        if (start == 'desc') {
          sortOrder.reverse();
        }

        if (!disableClear) {
          sortOrder.push('');
        }

        return sortOrder;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationCurves.STANDARD_CURVE;
      /**
       * Animations used by MatSort.
       * @docs-private
       */

      var _matSortAnimations = {
        /** Animation that moves the sort indicator. */
        indicator: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('indicator', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(0px)'
        })), // 10px is the height of the sort indicator, minus the width of the pointers
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(10px)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
        leftPointer: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('leftPointer', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'rotate(-45deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'rotate(45deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

        /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
        rightPointer: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rightPointer', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'rotate(45deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'rotate(-45deg)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

        /** Animation that controls the arrow opacity. */
        arrowOpacity: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowOpacity', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-active, asc-to-active, active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 1
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: .54
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 0
        })), // Transition between all states except for immediate transitions
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc, * => desc, * => active, * => hint, * => void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0ms')), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),

        /**
         * Animation for the translation of the arrow as a whole. States are separated into two
         * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
         * peek, and active. The other states define a specific animation (source-to-destination)
         * and are determined as a function of their prev user-perceived state and what the next state
         * should be.
         */
        arrowPosition: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowPosition', [// Hidden Above => Hint Center
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => desc-to-hint, * => desc-to-active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(-25%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Below
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-desc, * => active-to-desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(0)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(25%)'
        })]))), // Hidden Below => Hint Center
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc-to-hint, * => asc-to-active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(25%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(0)'
        })]))), // Hint Center => Hidden Above
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-asc, * => active-to-asc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(0)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(-25%)'
        })]))), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(0)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(-25%)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-asc, active-to-asc, asc', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'translateY(25%)'
        }))]),

        /** Necessary trigger that calls animate on children animations. */
        allowChildren: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('allowChildren', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)('@*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animateChild)(), {
          optional: true
        })])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
       * include it in a custom provider.
       * @deprecated No longer being used. To be removed.
       * @breaking-change 13.0.0
       */

      var _MatSortHeaderIntl = function _MatSortHeaderIntl() {
        _classCallCheck(this, _MatSortHeaderIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      };

      _MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
        return new (t || _MatSortHeaderIntl)();
      };

      _MatSortHeaderIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MatSortHeaderIntl_Factory() {
          return new _MatSortHeaderIntl();
        },
        token: _MatSortHeaderIntl,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSortHeaderIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function _MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new _MatSortHeaderIntl();
      }
      /** @docs-private */


      var _MAT_SORT_HEADER_INTL_PROVIDER = {
        // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
        provide: _MatSortHeaderIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), _MatSortHeaderIntl]],
        useFactory: _MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to the sort header.

      /** @docs-private */

      var MatSortHeaderBase = function MatSortHeaderBase() {
        _classCallCheck(this, MatSortHeaderBase);
      };

      var _MatSortHeaderMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(MatSortHeaderBase);
      /**
       * Applies sorting behavior (click to change sort) and styles to an element, including an
       * arrow to display the current sort direction.
       *
       * Must be provided with an id and contained within a parent MatSort directive.
       *
       * If used on header cells in a CdkTable, it will automatically default its id from its containing
       * column definition.
       */


      var _MatSortHeader = /*#__PURE__*/function (_MatSortHeaderMixinBa) {
        _inherits(_MatSortHeader, _MatSortHeaderMixinBa);

        var _super21 = _createSuper(_MatSortHeader);

        function _MatSortHeader(
        /**
         * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
         * @breaking-change 13.0.0
         */
        _intl, _changeDetectorRef, // `MatSort` is not optionally injected, but just asserted manually w/ better error.
        // tslint:disable-next-line: lightweight-tokens
        _sort, _columnDef, _focusMonitor, _elementRef) {
          var _this55;

          _classCallCheck(this, _MatSortHeader);

          // Note that we use a string token for the `_columnDef`, because the value is provided both by
          // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
          // and we want to avoid having the sort header depending on the CDK table because
          // of this single reference.
          _this55 = _super21.call(this);
          _this55._intl = _intl;
          _this55._changeDetectorRef = _changeDetectorRef;
          _this55._sort = _sort;
          _this55._columnDef = _columnDef;
          _this55._focusMonitor = _focusMonitor;
          _this55._elementRef = _elementRef;
          /**
           * Flag set to true when the indicator should be displayed while the sort is not active. Used to
           * provide an affordance that the header is sortable by showing on focus and hover.
           */

          _this55._showIndicatorHint = false;
          /**
           * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
           * position through the animation. If animations are currently disabled, the fromState is removed
           * so that there is no animation displayed.
           */

          _this55._viewState = {};
          /** The direction the arrow should be facing according to the current state. */

          _this55._arrowDirection = '';
          /**
           * Whether the view state animation should show the transition between the `from` and `to` states.
           */

          _this55._disableViewStateAnimation = false;
          /** Sets the position of the arrow that displays when sorted. */

          _this55.arrowPosition = 'after';

          if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getSortHeaderNotContainedWithinSortError();
          }

          _this55._handleStateChanges();

          return _this55;
        }
        /** Overrides the disable clear value of the containing MatSort for this MatSortable. */


        _createClass(_MatSortHeader, [{
          key: "disableClear",
          get: function get() {
            return this._disableClear;
          },
          set: function set(v) {
            this._disableClear = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(v);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.id && this._columnDef) {
              this.id = this._columnDef.name;
            } // Initialize the direction of the arrow and set the view state to be immediately that state.


            this._updateArrowDirection();

            this._setAnimationTransitionState({
              toState: this._isSorted() ? 'active' : this._arrowDirection
            });

            this._sort.register(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this56 = this;

            // We use the focus monitor because we also want to style
            // things differently based on the focus origin.
            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              var newState = !!origin;

              if (newState !== _this56._showIndicatorHint) {
                _this56._setIndicatorHintVisible(newState);

                _this56._changeDetectorRef.markForCheck();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            this._sort.deregister(this);

            this._rerenderSubscription.unsubscribe();
          }
          /**
           * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
           * user showing what the active sort will become. If set to false, the arrow will fade away.
           */

        }, {
          key: "_setIndicatorHintVisible",
          value: function _setIndicatorHintVisible(visible) {
            // No-op if the sort header is disabled - should not make the hint visible.
            if (this._isDisabled() && visible) {
              return;
            }

            this._showIndicatorHint = visible;

            if (!this._isSorted()) {
              this._updateArrowDirection();

              if (this._showIndicatorHint) {
                this._setAnimationTransitionState({
                  fromState: this._arrowDirection,
                  toState: 'hint'
                });
              } else {
                this._setAnimationTransitionState({
                  fromState: 'hint',
                  toState: this._arrowDirection
                });
              }
            }
          }
          /**
           * Sets the animation transition view state for the arrow's position and opacity. If the
           * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
           * no animation appears.
           */

        }, {
          key: "_setAnimationTransitionState",
          value: function _setAnimationTransitionState(viewState) {
            this._viewState = viewState || {}; // If the animation for arrow position state (opacity/translation) should be disabled,
            // remove the fromState so that it jumps right to the toState.

            if (this._disableViewStateAnimation) {
              this._viewState = {
                toState: viewState.toState
              };
            }
          }
          /** Triggers the sort on this sort header and removes the indicator hint. */

        }, {
          key: "_toggleOnInteraction",
          value: function _toggleOnInteraction() {
            this._sort.sort(this); // Do not show the animation if the header was already shown in the right position.


            if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
              this._disableViewStateAnimation = true;
            }
          }
        }, {
          key: "_handleClick",
          value: function _handleClick() {
            if (!this._isDisabled()) {
              this._sort.sort(this);
            }
          }
        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER)) {
              event.preventDefault();

              this._toggleOnInteraction();
            }
          }
          /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */

        }, {
          key: "_isSorted",
          value: function _isSorted() {
            return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
          }
          /** Returns the animation state for the arrow direction (indicator and pointers). */

        }, {
          key: "_getArrowDirectionState",
          value: function _getArrowDirectionState() {
            return "".concat(this._isSorted() ? 'active-' : '').concat(this._arrowDirection);
          }
          /** Returns the arrow position state (opacity, translation). */

        }, {
          key: "_getArrowViewState",
          value: function _getArrowViewState() {
            var fromState = this._viewState.fromState;
            return (fromState ? "".concat(fromState, "-to-") : '') + this._viewState.toState;
          }
          /**
           * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
           * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
           * active sorted direction. The reason this is updated through a function is because the direction
           * should only be changed at specific times - when deactivated but the hint is displayed and when
           * the sort is active and the direction changes. Otherwise the arrow's direction should linger
           * in cases such as the sort becoming deactivated but we want to animate the arrow away while
           * preserving its direction, even though the next sort direction is actually different and should
           * only be changed once the arrow displays again (hint or activation).
           */

        }, {
          key: "_updateArrowDirection",
          value: function _updateArrowDirection() {
            this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
          }
        }, {
          key: "_isDisabled",
          value: function _isDisabled() {
            return this._sort.disabled || this.disabled;
          }
          /**
           * Gets the aria-sort attribute that should be applied to this sort header. If this header
           * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
           * says that the aria-sort property should only be present on one header at a time, so removing
           * ensures this is true.
           */

        }, {
          key: "_getAriaSortAttribute",
          value: function _getAriaSortAttribute() {
            if (!this._isSorted()) {
              return 'none';
            }

            return this._sort.direction == 'asc' ? 'ascending' : 'descending';
          }
          /** Whether the arrow inside the sort header should be rendered. */

        }, {
          key: "_renderArrow",
          value: function _renderArrow() {
            return !this._isDisabled() || this._isSorted();
          }
          /** Handles changes in the sorting state. */

        }, {
          key: "_handleStateChanges",
          value: function _handleStateChanges() {
            var _this57 = this;

            this._rerenderSubscription = (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(function () {
              if (_this57._isSorted()) {
                _this57._updateArrowDirection(); // Do not show the animation if the header was already shown in the right position.


                if (_this57._viewState.toState === 'hint' || _this57._viewState.toState === 'active') {
                  _this57._disableViewStateAnimation = true;
                }

                _this57._setAnimationTransitionState({
                  fromState: _this57._arrowDirection,
                  toState: 'active'
                });

                _this57._showIndicatorHint = false;
              } // If this header was recently active and now no longer sorted, animate away the arrow.


              if (!_this57._isSorted() && _this57._viewState && _this57._viewState.toState === 'active') {
                _this57._disableViewStateAnimation = false;

                _this57._setAnimationTransitionState({
                  fromState: 'active',
                  toState: _this57._arrowDirection
                });
              }

              _this57._changeDetectorRef.markForCheck();
            });
          }
        }]);

        return _MatSortHeader;
      }(_MatSortHeaderMixinBase);

      _MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
        return new (t || _MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _MatSortHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatSortHeader,
        selectors: [["", "mat-sort-header", ""]],
        hostAttrs: [1, "mat-sort-header"],
        hostVars: 3,
        hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
              return ctx._handleClick();
            })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(true);
            })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
              return ctx._setIndicatorHintVisible(false);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
          }
        },
        inputs: {
          disabled: "disabled",
          arrowPosition: "arrowPosition",
          disableClear: "disableClear",
          id: ["mat-sort-header", "id"],
          start: "start"
        },
        exportAs: ["matSortHeader"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 6,
        consts: [["role", "button", 1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
        template: function MatSortHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition == "before");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
        styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],
        encapsulation: 2,
        data: {
          animation: [_matSortAnimations.indicator, _matSortAnimations.leftPointer, _matSortAnimations.rightPointer, _matSortAnimations.arrowOpacity, _matSortAnimations.arrowPosition, _matSortAnimations.allowChildren]
        },
        changeDetection: 0
      });

      _MatSortHeader.ctorParameters = function () {
        return [{
          type: _MatSortHeaderIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _MatSort,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: ['MAT_SORT_HEADER_COLUMN_DEF']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _MatSortHeader.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['mat-sort-header']
        }],
        arrowPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disableClear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSortHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: '[mat-sort-header]',
            exportAs: 'matSortHeader',
            template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition == 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     role=\"button\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
            host: {
              'class': 'mat-sort-header',
              '(click)': '_handleClick()',
              '(keydown)': '_handleKeydown($event)',
              '(mouseenter)': '_setIndicatorHintVisible(true)',
              '(mouseleave)': '_setIndicatorHintVisible(false)',
              '[attr.aria-sort]': '_getAriaSortAttribute()',
              '[class.mat-sort-header-disabled]': '_isDisabled()'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            inputs: ['disabled'],
            animations: [_matSortAnimations.indicator, _matSortAnimations.leftPointer, _matSortAnimations.rightPointer, _matSortAnimations.arrowOpacity, _matSortAnimations.arrowPosition, _matSortAnimations.allowChildren],
            styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"]
          }]
        }], function () {
          return [{
            type: _MatSortHeaderIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _MatSort,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: ['MAT_SORT_HEADER_COLUMN_DEF']
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          arrowPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disableClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mat-sort-header']
          }],
          start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
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


      var _MatSortModule = function _MatSortModule() {
        _classCallCheck(this, _MatSortModule);
      };

      _MatSortModule.ɵfac = function MatSortModule_Factory(t) {
        return new (t || _MatSortModule)();
      };

      _MatSortModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatSortModule
      });
      _MatSortModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MAT_SORT_HEADER_INTL_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSortModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
            exports: [_MatSort, _MatSortHeader],
            declarations: [_MatSort, _MatSortHeader],
            providers: [_MAT_SORT_HEADER_INTL_PROVIDER]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatSortModule, {
          declarations: function declarations() {
            return [_MatSort, _MatSortHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatSort, _MatSortHeader];
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
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=sort.js.map

      /***/

    },

    /***/
    32091:
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MatCell": function MatCell() {
          return (
            /* binding */
            _MatCell
          );
        },

        /* harmony export */
        "MatCellDef": function MatCellDef() {
          return (
            /* binding */
            _MatCellDef
          );
        },

        /* harmony export */
        "MatColumnDef": function MatColumnDef() {
          return (
            /* binding */
            _MatColumnDef
          );
        },

        /* harmony export */
        "MatFooterCell": function MatFooterCell() {
          return (
            /* binding */
            _MatFooterCell
          );
        },

        /* harmony export */
        "MatFooterCellDef": function MatFooterCellDef() {
          return (
            /* binding */
            _MatFooterCellDef
          );
        },

        /* harmony export */
        "MatFooterRow": function MatFooterRow() {
          return (
            /* binding */
            _MatFooterRow
          );
        },

        /* harmony export */
        "MatFooterRowDef": function MatFooterRowDef() {
          return (
            /* binding */
            _MatFooterRowDef
          );
        },

        /* harmony export */
        "MatHeaderCell": function MatHeaderCell() {
          return (
            /* binding */
            _MatHeaderCell
          );
        },

        /* harmony export */
        "MatHeaderCellDef": function MatHeaderCellDef() {
          return (
            /* binding */
            _MatHeaderCellDef
          );
        },

        /* harmony export */
        "MatHeaderRow": function MatHeaderRow() {
          return (
            /* binding */
            _MatHeaderRow
          );
        },

        /* harmony export */
        "MatHeaderRowDef": function MatHeaderRowDef() {
          return (
            /* binding */
            _MatHeaderRowDef
          );
        },

        /* harmony export */
        "MatNoDataRow": function MatNoDataRow() {
          return (
            /* binding */
            _MatNoDataRow
          );
        },

        /* harmony export */
        "MatRecycleRows": function MatRecycleRows() {
          return (
            /* binding */
            _MatRecycleRows
          );
        },

        /* harmony export */
        "MatRow": function MatRow() {
          return (
            /* binding */
            _MatRow
          );
        },

        /* harmony export */
        "MatRowDef": function MatRowDef() {
          return (
            /* binding */
            _MatRowDef
          );
        },

        /* harmony export */
        "MatTable": function MatTable() {
          return (
            /* binding */
            _MatTable
          );
        },

        /* harmony export */
        "MatTableDataSource": function MatTableDataSource() {
          return (
            /* binding */
            _MatTableDataSource2
          );
        },

        /* harmony export */
        "MatTableModule": function MatTableModule() {
          return (
            /* binding */
            _MatTableModule
          );
        },

        /* harmony export */
        "MatTextColumn": function MatTextColumn() {
          return (
            /* binding */
            _MatTextColumn
          );
        },

        /* harmony export */
        "_MatTableDataSource": function _MatTableDataSource() {
          return (
            /* binding */
            _MatTableDataSource3
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/table */
      20552);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/collections */
      38345);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      9112);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
       * tables that animate rows.
       */


      var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
      var _c1 = ["caption", "colgroup, col"];

      function MatTextColumn_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
        }
      }

      function MatTextColumn_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
        }
      }

      var _MatRecycleRows = function _MatRecycleRows() {
        _classCallCheck(this, _MatRecycleRows);
      };

      _MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
        return new (t || _MatRecycleRows)();
      };

      _MatRecycleRows.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatRecycleRows,
        selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
        }])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRecycleRows, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-table[recycleRows], table[mat-table][recycleRows]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
            }]
          }]
        }], null, null);
      })();
      /**
       * Wrapper for the CdkTable with Material design styles.
       */


      var _MatTable = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(_MatTable, _angular_cdk_table__W);

        var _super22 = _createSuper(_MatTable);

        function _MatTable() {
          var _this58;

          _classCallCheck(this, _MatTable);

          _this58 = _super22.apply(this, arguments);
          /** Overrides the sticky CSS class set by the `CdkTable`. */

          _this58.stickyCssClass = 'mat-table-sticky';
          /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

          _this58.needsPositionStickyOnElement = false;
          return _this58;
        }

        return _MatTable;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable);

      _MatTable.ɵfac = /*@__PURE__*/function () {
        var ɵMatTable_BaseFactory;
        return function MatTable_Factory(t) {
          return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatTable)))(t || _MatTable);
        };
      }();

      _MatTable.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTable,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-table"],
        hostVars: 2,
        hostBindings: function MatTable_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
          }
        },
        exportAs: ["matTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
          useExisting: _MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
          useExisting: _MatTable
        }, {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
          useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
        }, // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
          useValue: null
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 6,
        vars: 0,
        consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function MatTable_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.NoDataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.FooterRowOutlet],
        styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-table, table[mat-table]',
            exportAs: 'matTable',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE_TEMPLATE,
            host: {
              'class': 'mat-table',
              '[class.mat-table-fixed-layout]': 'fixedLayout'
            },
            providers: [// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
            //  is only included in the build if used.
            {
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
              useExisting: _MatTable
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
              useExisting: _MatTable
            }, {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
              useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
            }, // Prevent nested tables from seeing this table's StickyPositioningListener.
            {
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
              useValue: null
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n"]
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

      /**
       * Cell definition for the mat-table.
       * Captures the template of a column's data row cell as well as cell-specific properties.
       */


      var _MatCellDef = /*#__PURE__*/function (_angular_cdk_table__W2) {
        _inherits(_MatCellDef, _angular_cdk_table__W2);

        var _super23 = _createSuper(_MatCellDef);

        function _MatCellDef() {
          _classCallCheck(this, _MatCellDef);

          return _super23.apply(this, arguments);
        }

        return _MatCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef);

      _MatCellDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatCellDef_BaseFactory;
        return function MatCellDef_Factory(t) {
          return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatCellDef)))(t || _MatCellDef);
        };
      }();

      _MatCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatCellDef,
        selectors: [["", "matCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
          useExisting: _MatCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
              useExisting: _MatCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Header cell definition for the mat-table.
       * Captures the template of a column's header cell and as well as cell-specific properties.
       */


      var _MatHeaderCellDef = /*#__PURE__*/function (_angular_cdk_table__W3) {
        _inherits(_MatHeaderCellDef, _angular_cdk_table__W3);

        var _super24 = _createSuper(_MatHeaderCellDef);

        function _MatHeaderCellDef() {
          _classCallCheck(this, _MatHeaderCellDef);

          return _super24.apply(this, arguments);
        }

        return _MatHeaderCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef);

      _MatHeaderCellDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatHeaderCellDef_BaseFactory;
        return function MatHeaderCellDef_Factory(t) {
          return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderCellDef)))(t || _MatHeaderCellDef);
        };
      }();

      _MatHeaderCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHeaderCellDef,
        selectors: [["", "matHeaderCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
          useExisting: _MatHeaderCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matHeaderCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
              useExisting: _MatHeaderCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Footer cell definition for the mat-table.
       * Captures the template of a column's footer cell and as well as cell-specific properties.
       */


      var _MatFooterCellDef = /*#__PURE__*/function (_angular_cdk_table__W4) {
        _inherits(_MatFooterCellDef, _angular_cdk_table__W4);

        var _super25 = _createSuper(_MatFooterCellDef);

        function _MatFooterCellDef() {
          _classCallCheck(this, _MatFooterCellDef);

          return _super25.apply(this, arguments);
        }

        return _MatFooterCellDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef);

      _MatFooterCellDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatFooterCellDef_BaseFactory;
        return function MatFooterCellDef_Factory(t) {
          return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterCellDef)))(t || _MatFooterCellDef);
        };
      }();

      _MatFooterCellDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatFooterCellDef,
        selectors: [["", "matFooterCellDef", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
          useExisting: _MatFooterCellDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterCellDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matFooterCellDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
              useExisting: _MatFooterCellDef
            }]
          }]
        }], null, null);
      })();
      /**
       * Column definition for the mat-table.
       * Defines a set of cells available for a table column.
       */


      var _MatColumnDef = /*#__PURE__*/function (_angular_cdk_table__W5) {
        _inherits(_MatColumnDef, _angular_cdk_table__W5);

        var _super26 = _createSuper(_MatColumnDef);

        function _MatColumnDef() {
          _classCallCheck(this, _MatColumnDef);

          return _super26.apply(this, arguments);
        }

        _createClass(_MatColumnDef, [{
          key: "name",
          get:
          /** Unique name for this column. */
          function get() {
            return this._name;
          },
          set: function set(name) {
            this._setNameInput(name);
          }
          /**
           * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
           * In the future, this will only add "mat-column-" and columnCssClassName
           * will change from type string[] to string.
           * @docs-private
           */

        }, {
          key: "_updateColumnCssClassName",
          value: function _updateColumnCssClassName() {
            _get(_getPrototypeOf(_MatColumnDef.prototype), "_updateColumnCssClassName", this).call(this);

            this._columnCssClassName.push("mat-column-".concat(this.cssClassFriendlyName));
          }
        }]);

        return _MatColumnDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef);

      _MatColumnDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatColumnDef_BaseFactory;
        return function MatColumnDef_Factory(t) {
          return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatColumnDef)))(t || _MatColumnDef);
        };
      }();

      _MatColumnDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatColumnDef,
        selectors: [["", "matColumnDef", ""]],
        inputs: {
          sticky: "sticky",
          name: ["matColumnDef", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
          useExisting: _MatColumnDef
        }, {
          provide: 'MAT_SORT_HEADER_COLUMN_DEF',
          useExisting: _MatColumnDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
      _MatColumnDef.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matColumnDef']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatColumnDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matColumnDef]',
            inputs: ['sticky'],
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
              useExisting: _MatColumnDef
            }, {
              provide: 'MAT_SORT_HEADER_COLUMN_DEF',
              useExisting: _MatColumnDef
            }]
          }]
        }], null, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matColumnDef']
          }]
        });
      })();
      /** Header cell template container that adds the right classes and role. */


      var _MatHeaderCell = /*#__PURE__*/function (_angular_cdk_table__W6) {
        _inherits(_MatHeaderCell, _angular_cdk_table__W6);

        var _super27 = _createSuper(_MatHeaderCell);

        function _MatHeaderCell() {
          _classCallCheck(this, _MatHeaderCell);

          return _super27.apply(this, arguments);
        }

        return _MatHeaderCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCell);

      _MatHeaderCell.ɵfac = /*@__PURE__*/function () {
        var ɵMatHeaderCell_BaseFactory;
        return function MatHeaderCell_Factory(t) {
          return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderCell)))(t || _MatHeaderCell);
        };
      }();

      _MatHeaderCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHeaderCell,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-header-cell, th[mat-header-cell]',
            host: {
              'class': 'mat-header-cell',
              'role': 'columnheader'
            }
          }]
        }], null, null);
      })();
      /** Footer cell template container that adds the right classes and role. */


      var _MatFooterCell = /*#__PURE__*/function (_angular_cdk_table__W7) {
        _inherits(_MatFooterCell, _angular_cdk_table__W7);

        var _super28 = _createSuper(_MatFooterCell);

        function _MatFooterCell() {
          _classCallCheck(this, _MatFooterCell);

          return _super28.apply(this, arguments);
        }

        return _MatFooterCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCell);

      _MatFooterCell.ɵfac = /*@__PURE__*/function () {
        var ɵMatFooterCell_BaseFactory;
        return function MatFooterCell_Factory(t) {
          return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterCell)))(t || _MatFooterCell);
        };
      }();

      _MatFooterCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatFooterCell,
        selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-footer-cell, td[mat-footer-cell]',
            host: {
              'class': 'mat-footer-cell',
              'role': 'gridcell'
            }
          }]
        }], null, null);
      })();
      /** Cell template container that adds the right classes and role. */


      var _MatCell = /*#__PURE__*/function (_angular_cdk_table__W8) {
        _inherits(_MatCell, _angular_cdk_table__W8);

        var _super29 = _createSuper(_MatCell);

        function _MatCell() {
          _classCallCheck(this, _MatCell);

          return _super29.apply(this, arguments);
        }

        return _MatCell;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCell);

      _MatCell.ɵfac = /*@__PURE__*/function () {
        var ɵMatCell_BaseFactory;
        return function MatCell_Factory(t) {
          return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatCell)))(t || _MatCell);
        };
      }();

      _MatCell.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatCell,
        selectors: [["mat-cell"], ["td", "mat-cell", ""]],
        hostAttrs: ["role", "gridcell", 1, "mat-cell"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCell, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-cell, td[mat-cell]',
            host: {
              'class': 'mat-cell',
              'role': 'gridcell'
            }
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

      /**
       * Header row definition for the mat-table.
       * Captures the header row's template and other header properties such as the columns to display.
       */


      var _MatHeaderRowDef = /*#__PURE__*/function (_angular_cdk_table__W9) {
        _inherits(_MatHeaderRowDef, _angular_cdk_table__W9);

        var _super30 = _createSuper(_MatHeaderRowDef);

        function _MatHeaderRowDef() {
          _classCallCheck(this, _MatHeaderRowDef);

          return _super30.apply(this, arguments);
        }

        return _MatHeaderRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef);

      _MatHeaderRowDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatHeaderRowDef_BaseFactory;
        return function MatHeaderRowDef_Factory(t) {
          return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderRowDef)))(t || _MatHeaderRowDef);
        };
      }();

      _MatHeaderRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHeaderRowDef,
        selectors: [["", "matHeaderRowDef", ""]],
        inputs: {
          columns: ["matHeaderRowDef", "columns"],
          sticky: ["matHeaderRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
          useExisting: _MatHeaderRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matHeaderRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
              useExisting: _MatHeaderRowDef
            }],
            inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Footer row definition for the mat-table.
       * Captures the footer row's template and other footer properties such as the columns to display.
       */


      var _MatFooterRowDef = /*#__PURE__*/function (_angular_cdk_table__W10) {
        _inherits(_MatFooterRowDef, _angular_cdk_table__W10);

        var _super31 = _createSuper(_MatFooterRowDef);

        function _MatFooterRowDef() {
          _classCallCheck(this, _MatFooterRowDef);

          return _super31.apply(this, arguments);
        }

        return _MatFooterRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef);

      _MatFooterRowDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatFooterRowDef_BaseFactory;
        return function MatFooterRowDef_Factory(t) {
          return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterRowDef)))(t || _MatFooterRowDef);
        };
      }();

      _MatFooterRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatFooterRowDef,
        selectors: [["", "matFooterRowDef", ""]],
        inputs: {
          columns: ["matFooterRowDef", "columns"],
          sticky: ["matFooterRowDefSticky", "sticky"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
          useExisting: _MatFooterRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matFooterRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
              useExisting: _MatFooterRowDef
            }],
            inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
          }]
        }], null, null);
      })();
      /**
       * Data row definition for the mat-table.
       * Captures the data row's template and other properties such as the columns to display and
       * a when predicate that describes when this row should be used.
       */


      var _MatRowDef = /*#__PURE__*/function (_angular_cdk_table__W11) {
        _inherits(_MatRowDef, _angular_cdk_table__W11);

        var _super32 = _createSuper(_MatRowDef);

        function _MatRowDef() {
          _classCallCheck(this, _MatRowDef);

          return _super32.apply(this, arguments);
        }

        return _MatRowDef;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef);

      _MatRowDef.ɵfac = /*@__PURE__*/function () {
        var ɵMatRowDef_BaseFactory;
        return function MatRowDef_Factory(t) {
          return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatRowDef)))(t || _MatRowDef);
        };
      }();

      _MatRowDef.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatRowDef,
        selectors: [["", "matRowDef", ""]],
        inputs: {
          columns: ["matRowDefColumns", "columns"],
          when: ["matRowDefWhen", "when"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
          useExisting: _MatRowDef
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRowDef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matRowDef]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
              useExisting: _MatRowDef
            }],
            inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
          }]
        }], null, null);
      })();
      /** Header template container that contains the cell outlet. Adds the right class and role. */


      var _MatHeaderRow = /*#__PURE__*/function (_angular_cdk_table__W12) {
        _inherits(_MatHeaderRow, _angular_cdk_table__W12);

        var _super33 = _createSuper(_MatHeaderRow);

        function _MatHeaderRow() {
          _classCallCheck(this, _MatHeaderRow);

          return _super33.apply(this, arguments);
        }

        return _MatHeaderRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow);

      _MatHeaderRow.ɵfac = /*@__PURE__*/function () {
        var ɵMatHeaderRow_BaseFactory;
        return function MatHeaderRow_Factory(t) {
          return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHeaderRow)))(t || _MatHeaderRow);
        };
      }();

      _MatHeaderRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatHeaderRow,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-header-row"],
        exportAs: ["matHeaderRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
          useExisting: _MatHeaderRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatHeaderRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHeaderRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-header-row, tr[mat-header-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
            host: {
              'class': 'mat-header-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matHeaderRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
              useExisting: _MatHeaderRow
            }]
          }]
        }], null, null);
      })();
      /** Footer template container that contains the cell outlet. Adds the right class and role. */


      var _MatFooterRow = /*#__PURE__*/function (_angular_cdk_table__W13) {
        _inherits(_MatFooterRow, _angular_cdk_table__W13);

        var _super34 = _createSuper(_MatFooterRow);

        function _MatFooterRow() {
          _classCallCheck(this, _MatFooterRow);

          return _super34.apply(this, arguments);
        }

        return _MatFooterRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow);

      _MatFooterRow.ɵfac = /*@__PURE__*/function () {
        var ɵMatFooterRow_BaseFactory;
        return function MatFooterRow_Factory(t) {
          return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatFooterRow)))(t || _MatFooterRow);
        };
      }();

      _MatFooterRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatFooterRow,
        selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-footer-row"],
        exportAs: ["matFooterRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
          useExisting: _MatFooterRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatFooterRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatFooterRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-footer-row, tr[mat-footer-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
            host: {
              'class': 'mat-footer-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matFooterRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
              useExisting: _MatFooterRow
            }]
          }]
        }], null, null);
      })();
      /** Data row template container that contains the cell outlet. Adds the right class and role. */


      var _MatRow = /*#__PURE__*/function (_angular_cdk_table__W14) {
        _inherits(_MatRow, _angular_cdk_table__W14);

        var _super35 = _createSuper(_MatRow);

        function _MatRow() {
          _classCallCheck(this, _MatRow);

          return _super35.apply(this, arguments);
        }

        return _MatRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow);

      _MatRow.ɵfac = /*@__PURE__*/function () {
        var ɵMatRow_BaseFactory;
        return function MatRow_Factory(t) {
          return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatRow)))(t || _MatRow);
        };
      }();

      _MatRow.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatRow,
        selectors: [["mat-row"], ["tr", "mat-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-row"],
        exportAs: ["matRow"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
          useExisting: _MatRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatRow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
          }
        },
        directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-row, tr[mat-row]',
            template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_ROW_TEMPLATE,
            host: {
              'class': 'mat-row',
              'role': 'row'
            },
            // See note on CdkTable for explanation on why this uses the default change detection strategy.
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matRow',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
              useExisting: _MatRow
            }]
          }]
        }], null, null);
      })();
      /** Row that can be used to display a message when no data is shown in the table. */


      var _MatNoDataRow = /*#__PURE__*/function (_angular_cdk_table__W15) {
        _inherits(_MatNoDataRow, _angular_cdk_table__W15);

        var _super36 = _createSuper(_MatNoDataRow);

        function _MatNoDataRow() {
          _classCallCheck(this, _MatNoDataRow);

          return _super36.apply(this, arguments);
        }

        return _MatNoDataRow;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow);

      _MatNoDataRow.ɵfac = /*@__PURE__*/function () {
        var ɵMatNoDataRow_BaseFactory;
        return function MatNoDataRow_Factory(t) {
          return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatNoDataRow)))(t || _MatNoDataRow);
        };
      }();

      _MatNoDataRow.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatNoDataRow,
        selectors: [["ng-template", "matNoDataRow", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
          useExisting: _MatNoDataRow
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatNoDataRow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[matNoDataRow]',
            providers: [{
              provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
              useExisting: _MatNoDataRow
            }]
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

      /**
       * Column that simply shows text content for the header and row cells. Assumes that the table
       * is using the native table implementation (`<table>`).
       *
       * By default, the name of this column will be the header text and data property accessor.
       * The header text can be overridden with the `headerText` input. Cell values can be overridden with
       * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
       * input.
       */


      var _MatTextColumn = /*#__PURE__*/function (_angular_cdk_table__W16) {
        _inherits(_MatTextColumn, _angular_cdk_table__W16);

        var _super37 = _createSuper(_MatTextColumn);

        function _MatTextColumn() {
          _classCallCheck(this, _MatTextColumn);

          return _super37.apply(this, arguments);
        }

        return _MatTextColumn;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTextColumn);

      _MatTextColumn.ɵfac = /*@__PURE__*/function () {
        var ɵMatTextColumn_BaseFactory;
        return function MatTextColumn_Factory(t) {
          return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatTextColumn)))(t || _MatTextColumn);
        };
      }();

      _MatTextColumn.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatTextColumn,
        selectors: [["mat-text-column"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 0,
        consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
        template: function MatTextColumn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }
        },
        directives: [_MatColumnDef, _MatHeaderCellDef, _MatCellDef, _MatHeaderCell, _MatCell],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTextColumn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-text-column',
            template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef [style.text-align]=\"justify\">\n        {{headerText}}\n      </th>\n      <td mat-cell *matCellDef=\"let data\" [style.text-align]=\"justify\">\n        {{dataAccessor(data, name)}}\n      </td>\n    </ng-container>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            // Change detection is intentionally not set to OnPush. This component's template will be provided
            // to the table to be inserted into its view. This is problematic when change detection runs since
            // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
            // mean's the template in the table's view will not have the updated value (and in fact will cause
            // an ExpressionChangedAfterItHasBeenCheckedError).
            // tslint:disable-next-line:validate-decorators
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
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


      var EXPORTED_DECLARATIONS = [// Table
      _MatTable, _MatRecycleRows, // Template defs
      _MatHeaderCellDef, _MatHeaderRowDef, _MatColumnDef, _MatCellDef, _MatRowDef, _MatFooterCellDef, _MatFooterRowDef, // Cell directives
      _MatHeaderCell, _MatCell, _MatFooterCell, // Row directives
      _MatHeaderRow, _MatRow, _MatFooterRow, _MatNoDataRow, _MatTextColumn];

      var _MatTableModule = function _MatTableModule() {
        _classCallCheck(this, _MatTableModule);
      };

      _MatTableModule.ɵfac = function MatTableModule_Factory(t) {
        return new (t || _MatTableModule)();
      };

      _MatTableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatTableModule
      });
      _MatTableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, EXPORTED_DECLARATIONS],
            declarations: EXPORTED_DECLARATIONS
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatTableModule, {
          declarations: function declarations() {
            return [_MatTable, _MatRecycleRows, _MatHeaderCellDef, _MatHeaderRowDef, _MatColumnDef, _MatCellDef, _MatRowDef, _MatFooterCellDef, _MatFooterRowDef, _MatHeaderCell, _MatCell, _MatFooterCell, _MatHeaderRow, _MatRow, _MatFooterRow, _MatNoDataRow, _MatTextColumn];
          },
          imports: function imports() {
            return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _MatTable, _MatRecycleRows, _MatHeaderCellDef, _MatHeaderRowDef, _MatColumnDef, _MatCellDef, _MatRowDef, _MatFooterCellDef, _MatFooterRowDef, _MatHeaderCell, _MatCell, _MatFooterCell, _MatHeaderRow, _MatRow, _MatFooterRow, _MatNoDataRow, _MatTextColumn];
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
       * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
       * flaky browser support and the value not being defined in Closure's typings.
       */


      var MAX_SAFE_INTEGER = 9007199254740991;
      /** Shared base class with MDC-based implementation. */

      var _MatTableDataSource3 = /*#__PURE__*/function (_angular_cdk_collecti) {
        _inherits(_MatTableDataSource3, _angular_cdk_collecti);

        var _super38 = _createSuper(_MatTableDataSource3);

        function _MatTableDataSource3() {
          var _this59;

          var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          _classCallCheck(this, _MatTableDataSource3);

          _this59 = _super38.call(this);
          /** Stream emitting render data to the table (depends on ordered data changes). */

          _this59._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
          /** Stream that emits when a new filter string is set on the data source. */

          _this59._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
          /** Used to react to internal changes of the paginator that are made by the data source itself. */

          _this59._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /**
           * Subscription to the changes that should trigger an update to the table's rendered rows, such
           * as filtering, sorting, pagination, or base data changes.
           */

          _this59._renderChangesSubscription = null;
          /**
           * Data accessor function that is used for accessing data properties for sorting through
           * the default sortData function.
           * This default function assumes that the sort header IDs (which defaults to the column name)
           * matches the data's properties (e.g. column Xyz represents data['Xyz']).
           * May be set to a custom function for different behavior.
           * @param data Data object that is being accessed.
           * @param sortHeaderId The name of the column that represents the data.
           */

          _this59.sortingDataAccessor = function (data, sortHeaderId) {
            var value = data[sortHeaderId];

            if ((0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__._isNumberValue)(value)) {
              var numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
              // leave them as strings. For more info: https://goo.gl/y5vbSg

              return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }

            return value;
          };
          /**
           * Gets a sorted copy of the data array based on the state of the MatSort. Called
           * after changes are made to the filtered data or when sort changes are emitted from MatSort.
           * By default, the function retrieves the active sort and its direction and compares data
           * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
           * of data ordering.
           * @param data The array of data that should be sorted.
           * @param sort The connected MatSort that holds the current sort state.
           */


          _this59.sortData = function (data, sort) {
            var active = sort.active;
            var direction = sort.direction;

            if (!active || direction == '') {
              return data;
            }

            return data.sort(function (a, b) {
              var valueA = _this59.sortingDataAccessor(a, active);

              var valueB = _this59.sortingDataAccessor(b, active); // If there are data in the column that can be converted to a number,
              // it must be ensured that the rest of the data
              // is of the same type so as not to order incorrectly.


              var valueAType = typeof valueA;
              var valueBType = typeof valueB;

              if (valueAType !== valueBType) {
                if (valueAType === 'number') {
                  valueA += '';
                }

                if (valueBType === 'number') {
                  valueB += '';
                }
              } // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
              // one value exists while the other doesn't. In this case, existing value should come last.
              // This avoids inconsistent results when comparing values to undefined/null.
              // If neither value exists, return 0 (equal).


              var comparatorResult = 0;

              if (valueA != null && valueB != null) {
                // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                if (valueA > valueB) {
                  comparatorResult = 1;
                } else if (valueA < valueB) {
                  comparatorResult = -1;
                }
              } else if (valueA != null) {
                comparatorResult = 1;
              } else if (valueB != null) {
                comparatorResult = -1;
              }

              return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
          };
          /**
           * Checks if a data object matches the data source's filter string. By default, each data object
           * is converted to a string of its properties and returns true if the filter has
           * at least one occurrence in that string. By default, the filter string has its whitespace
           * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
           * filter matching.
           * @param data Data object used to check against the filter.
           * @param filter Filter string that has been set on the data source.
           * @returns Whether the filter matches against the data
           */


          _this59.filterPredicate = function (data, filter) {
            // Transform the data into a lowercase string of all property values.
            var dataStr = Object.keys(data).reduce(function (currentTerm, key) {
              // Use an obscure Unicode character to delimit the words in the concatenated string.
              // This avoids matches where the values of two columns combined will match the user's query
              // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
              // that has a very low chance of being typed in by somebody in a text field. This one in
              // particular is "White up-pointing triangle with dot" from
              // https://en.wikipedia.org/wiki/List_of_Unicode_characters
              return currentTerm + data[key] + '◬';
            }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
          };

          _this59._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(initialData);

          _this59._updateChangeSubscription();

          return _this59;
        }
        /** Array of data that should be rendered by the table, where each object represents one row. */


        _createClass(_MatTableDataSource3, [{
          key: "data",
          get: function get() {
            return this._data.value;
          },
          set: function set(data) {
            this._data.next(data); // Normally the `filteredData` is updated by the re-render
            // subscription, but that won't happen if it's inactive.


            if (!this._renderChangesSubscription) {
              this._filterData(data);
            }
          }
          /**
           * Filter term that should be used to filter out objects from the data array. To override how
           * data objects match to this filter string, provide a custom function for filterPredicate.
           */

        }, {
          key: "filter",
          get: function get() {
            return this._filter.value;
          },
          set: function set(filter) {
            this._filter.next(filter); // Normally the `filteredData` is updated by the re-render
            // subscription, but that won't happen if it's inactive.


            if (!this._renderChangesSubscription) {
              this._filterData(this.data);
            }
          }
          /**
           * Instance of the MatSort directive used by the table to control its sorting. Sort changes
           * emitted by the MatSort will trigger an update to the table's rendered data.
           */

        }, {
          key: "sort",
          get: function get() {
            return this._sort;
          },
          set: function set(sort) {
            this._sort = sort;

            this._updateChangeSubscription();
          }
          /**
           * Instance of the MatPaginator component used by the table to control what page of the data is
           * displayed. Page changes emitted by the MatPaginator will trigger an update to the
           * table's rendered data.
           *
           * Note that the data source uses the paginator's properties to calculate which page of data
           * should be displayed. If the paginator receives its properties as template inputs,
           * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
           * initialized before assigning it to this data source.
           */

        }, {
          key: "paginator",
          get: function get() {
            return this._paginator;
          },
          set: function set(paginator) {
            this._paginator = paginator;

            this._updateChangeSubscription();
          }
          /**
           * Subscribe to changes that should trigger an update to the table's rendered rows. When the
           * changes occur, process the current state of the filter, sort, and pagination along with
           * the provided base data and send it to the table for rendering.
           */

        }, {
          key: "_updateChangeSubscription",
          value: function _updateChangeSubscription() {
            var _this60 = this;

            var _a; // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
            // The events should emit whenever the component emits a change or initializes, or if no
            // component is provided, a stream with just a null event should be provided.
            // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
            // pipeline can progress to the next step. Note that the value from these streams are not used,
            // they purely act as a signal to progress in the pipeline.


            var sortChange = this._sort ? (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._sort.sortChange, this._sort.initialized) : (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            var pageChange = this._paginator ? (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            var dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

            var filteredData = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([dataStream, this._filter]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 1),
                  data = _ref6[0];

              return _this60._filterData(data);
            })); // Watch for filtered data or sort changes to provide an ordered set of data.

            var orderedData = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([filteredData, sortChange]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 1),
                  data = _ref8[0];

              return _this60._orderData(data);
            })); // Watch for ordered data or page changes to provide a paged set of data.

            var paginatedData = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([orderedData, pageChange]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 1),
                  data = _ref10[0];

              return _this60._pageData(data);
            })); // Watched for paged data changes and send the result to the table to render.

            (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this._renderChangesSubscription = paginatedData.subscribe(function (data) {
              return _this60._renderData.next(data);
            });
          }
          /**
           * Returns a filtered data array where each filter object contains the filter string within
           * the result of the filterTermAccessor function. If no filter is set, returns the data array
           * as provided.
           */

        }, {
          key: "_filterData",
          value: function _filterData(data) {
            var _this61 = this;

            // If there is a filter string, filter out data that does not contain it.
            // Each data object is converted to a string using the function defined by filterTermAccessor.
            // May be overridden for customization.
            this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(function (obj) {
              return _this61.filterPredicate(obj, _this61.filter);
            });

            if (this.paginator) {
              this._updatePaginator(this.filteredData.length);
            }

            return this.filteredData;
          }
          /**
           * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
           * data array as provided. Uses the default data accessor for data lookup, unless a
           * sortDataAccessor function is defined.
           */

        }, {
          key: "_orderData",
          value: function _orderData(data) {
            // If there is no active sort or direction, return the data without trying to sort.
            if (!this.sort) {
              return data;
            }

            return this.sortData(data.slice(), this.sort);
          }
          /**
           * Returns a paged slice of the provided data array according to the provided MatPaginator's page
           * index and length. If there is no paginator provided, returns the data array as provided.
           */

        }, {
          key: "_pageData",
          value: function _pageData(data) {
            if (!this.paginator) {
              return data;
            }

            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.slice(startIndex, startIndex + this.paginator.pageSize);
          }
          /**
           * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
           * index does not exceed the paginator's last page. Values are changed in a resolved promise to
           * guard against making property changes within a round of change detection.
           */

        }, {
          key: "_updatePaginator",
          value: function _updatePaginator(filteredDataLength) {
            var _this62 = this;

            Promise.resolve().then(function () {
              var paginator = _this62.paginator;

              if (!paginator) {
                return;
              }

              paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

              if (paginator.pageIndex > 0) {
                var lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                var newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

                if (newPageIndex !== paginator.pageIndex) {
                  paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
                  // we need our own stream so we know to should re-render the data.

                  _this62._internalPageChanges.next();
                }
              }
            });
          }
          /**
           * Used by the MatTable. Called when it connects to the data source.
           * @docs-private
           */

        }, {
          key: "connect",
          value: function connect() {
            if (!this._renderChangesSubscription) {
              this._updateChangeSubscription();
            }

            return this._renderData;
          }
          /**
           * Used by the MatTable. Called when it disconnects from the data source.
           * @docs-private
           */

        }, {
          key: "disconnect",
          value: function disconnect() {
            var _a;

            (_a = this._renderChangesSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this._renderChangesSubscription = null;
          }
        }]);

        return _MatTableDataSource3;
      }(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource);
      /**
       * Data source that accepts a client-side data array and includes native support of filtering,
       * sorting (using MatSort), and pagination (using MatPaginator).
       *
       * Allows for sort customization by overriding sortingDataAccessor, which defines how data
       * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
       * which defines how row data is converted to a string for filter matching.
       *
       * **Note:** This class is meant to be a simple data source to help you get started. As such
       * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
       * interactions. If your app needs to support more advanced use cases, consider implementing your
       * own `DataSource`.
       */


      var _MatTableDataSource2 = /*#__PURE__*/function (_MatTableDataSource4) {
        _inherits(_MatTableDataSource2, _MatTableDataSource4);

        var _super39 = _createSuper(_MatTableDataSource2);

        function _MatTableDataSource2() {
          _classCallCheck(this, _MatTableDataSource2);

          return _super39.apply(this, arguments);
        }

        return _MatTableDataSource2;
      }(_MatTableDataSource3);
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
      //# sourceMappingURL=table.js.map

      /***/

    },

    /***/
    11436:
    /*!*************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_TOOLTIP_DEFAULT_OPTIONS": function MAT_TOOLTIP_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_TOOLTIP_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY": function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
          return (
            /* binding */
            _MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
          );
        },

        /* harmony export */
        "MAT_TOOLTIP_SCROLL_STRATEGY": function MAT_TOOLTIP_SCROLL_STRATEGY() {
          return (
            /* binding */
            _MAT_TOOLTIP_SCROLL_STRATEGY
          );
        },

        /* harmony export */
        "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY": function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY() {
          return (
            /* binding */
            _MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
          );
        },

        /* harmony export */
        "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER": function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER() {
          return (
            /* binding */
            _MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER
          );
        },

        /* harmony export */
        "MatTooltip": function MatTooltip() {
          return (
            /* binding */
            _MatTooltip
          );
        },

        /* harmony export */
        "MatTooltipModule": function MatTooltipModule() {
          return (
            /* binding */
            _MatTooltipModule
          );
        },

        /* harmony export */
        "SCROLL_THROTTLE_MS": function SCROLL_THROTTLE_MS() {
          return (
            /* binding */
            _SCROLL_THROTTLE_MS
          );
        },

        /* harmony export */
        "TOOLTIP_PANEL_CLASS": function TOOLTIP_PANEL_CLASS() {
          return (
            /* binding */
            _TOOLTIP_PANEL_CLASS
          );
        },

        /* harmony export */
        "TooltipComponent": function TooltipComponent() {
          return (
            /* binding */
            _TooltipComponent
          );
        },

        /* harmony export */
        "_MatTooltipBase": function _MatTooltipBase() {
          return (
            /* binding */
            _MatTooltipBase2
          );
        },

        /* harmony export */
        "_TooltipComponentBase": function _TooltipComponentBase() {
          return (
            /* binding */
            _TooltipComponentBase2
          );
        },

        /* harmony export */
        "getMatTooltipInvalidPositionError": function getMatTooltipInvalidPositionError() {
          return (
            /* binding */
            _getMatTooltipInvalidPositionError
          );
        },

        /* harmony export */
        "matTooltipAnimations": function matTooltipAnimations() {
          return (
            /* binding */
            _matTooltipAnimations
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      58203);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      71386);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      70946);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      36461);
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/layout */
      65072);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/portal */
      87636);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by MatTooltip.
       * @docs-private
       */


      var _matTooltipAnimations = {
        /** Animation that transitions a tooltip in and out. */
        tooltipState: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('state', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('initial, void, hidden', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          opacity: 0,
          transform: 'scale(0)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('visible', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'scale(1)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => visible', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms cubic-bezier(0, 0, 0.2, 1)', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          opacity: 0,
          transform: 'scale(0)',
          offset: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          opacity: 0.5,
          transform: 'scale(0.99)',
          offset: 0.5
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1
        })]))), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => hidden', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms cubic-bezier(0, 0, 0.2, 1)', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          opacity: 0
        })))])
      };
      /** Time in ms to throttle repositioning after scroll events. */

      var _SCROLL_THROTTLE_MS = 20;
      /**
       * CSS class that will be attached to the overlay panel.
       * @deprecated
       * @breaking-change 13.0.0 remove this variable
       */

      var _TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
      var PANEL_CLASS = 'tooltip-panel';
      /** Options used to bind passive event listeners. */

      var passiveListenerOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({
        passive: true
      });
      /**
       * Time between the user putting the pointer on a tooltip
       * trigger and the long press event being fired.
       */

      var LONGPRESS_DELAY = 500;
      /**
       * Creates an error to be thrown if the user supplied an invalid tooltip position.
       * @docs-private
       */

      function _getMatTooltipInvalidPositionError(position) {
        return Error("Tooltip position \"".concat(position, "\" is invalid."));
      }
      /** Injection token that determines the scroll handling while a tooltip is visible. */


      var _MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-tooltip-scroll-strategy');
      /** @docs-private */


      function _MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: _SCROLL_THROTTLE_MS
          });
        };
      }
      /** @docs-private */


      var _MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: _MAT_TOOLTIP_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay],
        useFactory: _MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
      };
      /** Injection token to be used to override the default options for `matTooltip`. */

      var _MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('mat-tooltip-default-options', {
        providedIn: 'root',
        factory: _MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */


      function _MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
        return {
          showDelay: 0,
          hideDelay: 0,
          touchendHideDelay: 1500
        };
      }

      var _MatTooltipBase2 = /*#__PURE__*/function () {
        function _MatTooltipBase2(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
          var _this63 = this;

          _classCallCheck(this, _MatTooltipBase2);

          this._overlay = _overlay;
          this._elementRef = _elementRef;
          this._scrollDispatcher = _scrollDispatcher;
          this._viewContainerRef = _viewContainerRef;
          this._ngZone = _ngZone;
          this._platform = _platform;
          this._ariaDescriber = _ariaDescriber;
          this._focusMonitor = _focusMonitor;
          this._dir = _dir;
          this._defaultOptions = _defaultOptions;
          this._position = 'below';
          this._disabled = false;
          this._viewInitialized = false;
          this._pointerExitEventsInitialized = false;
          this._viewportMargin = 8;
          this._cssClassPrefix = 'mat';
          /** The default delay in ms before showing the tooltip after show is called */

          this.showDelay = this._defaultOptions.showDelay;
          /** The default delay in ms before hiding the tooltip after hide is called */

          this.hideDelay = this._defaultOptions.hideDelay;
          /**
           * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
           * uses a long press gesture to show and hide, however it can conflict with the native browser
           * gestures. To work around the conflict, Angular Material disables native gestures on the
           * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
           * elements). The different values for this option configure the touch event handling as follows:
           * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
           *   browser gestures on particular elements. In particular, it allows text selection on inputs
           *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
           * - `on` - Enables touch gestures for all elements and disables native
           *   browser gestures with no exceptions.
           * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
           *   showing on touch devices.
           */

          this.touchGestures = 'auto';
          this._message = '';
          /** Manually-bound passive event listeners. */

          this._passiveListeners = [];
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          /**
           * Handles the keydown events on the host element.
           * Needs to be an arrow function so that we can use it in addEventListener.
           */

          this._handleKeydown = function (event) {
            if (_this63._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ESCAPE && !(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.hasModifierKey)(event)) {
              event.preventDefault();
              event.stopPropagation();

              _this63._ngZone.run(function () {
                return _this63.hide(0);
              });
            }
          };

          this._scrollStrategy = scrollStrategy;
          this._document = _document;

          if (_defaultOptions) {
            if (_defaultOptions.position) {
              this.position = _defaultOptions.position;
            }

            if (_defaultOptions.touchGestures) {
              this.touchGestures = _defaultOptions.touchGestures;
            }
          }

          _dir.change.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function () {
            if (_this63._overlayRef) {
              _this63._updatePosition(_this63._overlayRef);
            }
          });

          _ngZone.runOutsideAngular(function () {
            _elementRef.nativeElement.addEventListener('keydown', _this63._handleKeydown);
          });
        }
        /** Allows the user to define the position of the tooltip relative to the parent element */


        _createClass(_MatTooltipBase2, [{
          key: "position",
          get: function get() {
            return this._position;
          },
          set: function set(value) {
            var _a;

            if (value !== this._position) {
              this._position = value;

              if (this._overlayRef) {
                this._updatePosition(this._overlayRef);

                (_a = this._tooltipInstance) === null || _a === void 0 ? void 0 : _a.show(0);

                this._overlayRef.updatePosition();
              }
            }
          }
          /** Disables the display of the tooltip. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__.coerceBooleanProperty)(value); // If tooltip is disabled, hide immediately.

            if (this._disabled) {
              this.hide(0);
            } else {
              this._setupPointerEnterEventsIfNeeded();
            }
          }
          /** The message to be displayed in the tooltip */

        }, {
          key: "message",
          get: function get() {
            return this._message;
          },
          set: function set(value) {
            var _this64 = this;

            this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, 'tooltip'); // If the message is not a string (e.g. number), convert it to a string and trim it.
            // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
            // away the string-conversion: https://github.com/angular/components/issues/20684


            this._message = value != null ? String(value).trim() : '';

            if (!this._message && this._isTooltipVisible()) {
              this.hide(0);
            } else {
              this._setupPointerEnterEventsIfNeeded();

              this._updateTooltipMessage();

              this._ngZone.runOutsideAngular(function () {
                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                Promise.resolve().then(function () {
                  _this64._ariaDescriber.describe(_this64._elementRef.nativeElement, _this64.message, 'tooltip');
                });
              });
            }
          }
          /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */

        }, {
          key: "tooltipClass",
          get: function get() {
            return this._tooltipClass;
          },
          set: function set(value) {
            this._tooltipClass = value;

            if (this._tooltipInstance) {
              this._setTooltipClass(this._tooltipClass);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this65 = this;

            // This needs to happen after view init so the initial values for all inputs have been set.
            this._viewInitialized = true;

            this._setupPointerEnterEventsIfNeeded();

            this._focusMonitor.monitor(this._elementRef).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function (origin) {
              // Note that the focus monitor runs outside the Angular zone.
              if (!origin) {
                _this65._ngZone.run(function () {
                  return _this65.hide(0);
                });
              } else if (origin === 'keyboard') {
                _this65._ngZone.run(function () {
                  return _this65.show();
                });
              }
            });
          }
          /**
           * Dispose the tooltip when destroyed.
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var nativeElement = this._elementRef.nativeElement;
            clearTimeout(this._touchstartTimeout);

            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._tooltipInstance = null;
            } // Clean up the event listeners set in the constructor


            nativeElement.removeEventListener('keydown', this._handleKeydown);

            this._passiveListeners.forEach(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  event = _ref12[0],
                  listener = _ref12[1];

              nativeElement.removeEventListener(event, listener, passiveListenerOptions);
            });

            this._passiveListeners.length = 0;

            this._destroyed.next();

            this._destroyed.complete();

            this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');

            this._focusMonitor.stopMonitoring(nativeElement);
          }
          /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */

        }, {
          key: "show",
          value: function show() {
            var _this66 = this;

            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

            if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
              return;
            }

            var overlayRef = this._createOverlay();

            this._detach();

            this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
            this._tooltipInstance = overlayRef.attach(this._portal).instance;

            this._tooltipInstance.afterHidden().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function () {
              return _this66._detach();
            });

            this._setTooltipClass(this._tooltipClass);

            this._updateTooltipMessage();

            this._tooltipInstance.show(delay);
          }
          /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */

        }, {
          key: "hide",
          value: function hide() {
            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

            if (this._tooltipInstance) {
              this._tooltipInstance.hide(delay);
            }
          }
          /** Shows/hides the tooltip */

        }, {
          key: "toggle",
          value: function toggle() {
            this._isTooltipVisible() ? this.hide() : this.show();
          }
          /** Returns true if the tooltip is currently visible to the user */

        }, {
          key: "_isTooltipVisible",
          value: function _isTooltipVisible() {
            return !!this._tooltipInstance && this._tooltipInstance.isVisible();
          }
          /** Create the overlay config and position strategy */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this67 = this;

            if (this._overlayRef) {
              return this._overlayRef;
            }

            var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


            var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".".concat(this._cssClassPrefix, "-tooltip")).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);

            strategy.positionChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function (change) {
              _this67._updateCurrentPositionClass(change.connectionPair);

              if (_this67._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && _this67._tooltipInstance.isVisible()) {
                  // After position changes occur and the overlay is clipped by
                  // a parent scrollable then close the tooltip.
                  _this67._ngZone.run(function () {
                    return _this67.hide(0);
                  });
                }
              }
            });
            this._overlayRef = this._overlay.create({
              direction: this._dir,
              positionStrategy: strategy,
              panelClass: "".concat(this._cssClassPrefix, "-").concat(PANEL_CLASS),
              scrollStrategy: this._scrollStrategy()
            });

            this._updatePosition(this._overlayRef);

            this._overlayRef.detachments().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function () {
              return _this67._detach();
            });

            return this._overlayRef;
          }
          /** Detaches the currently-attached tooltip. */

        }, {
          key: "_detach",
          value: function _detach() {
            if (this._overlayRef && this._overlayRef.hasAttached()) {
              this._overlayRef.detach();
            }

            this._tooltipInstance = null;
          }
          /** Updates the position of the current tooltip. */

        }, {
          key: "_updatePosition",
          value: function _updatePosition(overlayRef) {
            var position = overlayRef.getConfig().positionStrategy;

            var origin = this._getOrigin();

            var overlay = this._getOverlayPosition();

            position.withPositions([this._addOffset(Object.assign(Object.assign({}, origin.main), overlay.main)), this._addOffset(Object.assign(Object.assign({}, origin.fallback), overlay.fallback))]);
          }
          /** Adds the configured offset to a position. Used as a hook for child classes. */

        }, {
          key: "_addOffset",
          value: function _addOffset(position) {
            return position;
          }
          /**
           * Returns the origin position and a fallback position based on the user's position preference.
           * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
           */

        }, {
          key: "_getOrigin",
          value: function _getOrigin() {
            var isLtr = !this._dir || this._dir.value == 'ltr';
            var position = this.position;
            var originPosition;

            if (position == 'above' || position == 'below') {
              originPosition = {
                originX: 'center',
                originY: position == 'above' ? 'top' : 'bottom'
              };
            } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
              originPosition = {
                originX: 'start',
                originY: 'center'
              };
            } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
              originPosition = {
                originX: 'end',
                originY: 'center'
              };
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw _getMatTooltipInvalidPositionError(position);
            }

            var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
                x = _this$_invertPosition.x,
                y = _this$_invertPosition.y;

            return {
              main: originPosition,
              fallback: {
                originX: x,
                originY: y
              }
            };
          }
          /** Returns the overlay position and a fallback position based on the user's preference */

        }, {
          key: "_getOverlayPosition",
          value: function _getOverlayPosition() {
            var isLtr = !this._dir || this._dir.value == 'ltr';
            var position = this.position;
            var overlayPosition;

            if (position == 'above') {
              overlayPosition = {
                overlayX: 'center',
                overlayY: 'bottom'
              };
            } else if (position == 'below') {
              overlayPosition = {
                overlayX: 'center',
                overlayY: 'top'
              };
            } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
              overlayPosition = {
                overlayX: 'end',
                overlayY: 'center'
              };
            } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
              overlayPosition = {
                overlayX: 'start',
                overlayY: 'center'
              };
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throw _getMatTooltipInvalidPositionError(position);
            }

            var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
                x = _this$_invertPosition2.x,
                y = _this$_invertPosition2.y;

            return {
              main: overlayPosition,
              fallback: {
                overlayX: x,
                overlayY: y
              }
            };
          }
          /** Updates the tooltip message and repositions the overlay according to the new message length */

        }, {
          key: "_updateTooltipMessage",
          value: function _updateTooltipMessage() {
            var _this68 = this;

            // Must wait for the message to be painted to the tooltip so that the overlay can properly
            // calculate the correct positioning based on the size of the text.
            if (this._tooltipInstance) {
              this._tooltipInstance.message = this.message;

              this._tooltipInstance._markForCheck();

              this._ngZone.onMicrotaskEmpty.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroyed)).subscribe(function () {
                if (_this68._tooltipInstance) {
                  _this68._overlayRef.updatePosition();
                }
              });
            }
          }
          /** Updates the tooltip class */

        }, {
          key: "_setTooltipClass",
          value: function _setTooltipClass(tooltipClass) {
            if (this._tooltipInstance) {
              this._tooltipInstance.tooltipClass = tooltipClass;

              this._tooltipInstance._markForCheck();
            }
          }
          /** Inverts an overlay position. */

        }, {
          key: "_invertPosition",
          value: function _invertPosition(x, y) {
            if (this.position === 'above' || this.position === 'below') {
              if (y === 'top') {
                y = 'bottom';
              } else if (y === 'bottom') {
                y = 'top';
              }
            } else {
              if (x === 'end') {
                x = 'start';
              } else if (x === 'start') {
                x = 'end';
              }
            }

            return {
              x: x,
              y: y
            };
          }
          /** Updates the class on the overlay panel based on the current position of the tooltip. */

        }, {
          key: "_updateCurrentPositionClass",
          value: function _updateCurrentPositionClass(connectionPair) {
            var overlayY = connectionPair.overlayY,
                originX = connectionPair.originX,
                originY = connectionPair.originY;
            var newPosition; // If the overlay is in the middle along the Y axis,
            // it means that it's either before or after.

            if (overlayY === 'center') {
              // Note that since this information is used for styling, we want to
              // resolve `start` and `end` to their real values, otherwise consumers
              // would have to remember to do it themselves on each consumption.
              if (this._dir && this._dir.value === 'rtl') {
                newPosition = originX === 'end' ? 'left' : 'right';
              } else {
                newPosition = originX === 'start' ? 'left' : 'right';
              }
            } else {
              newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
            }

            if (newPosition !== this._currentPosition) {
              var overlayRef = this._overlayRef;

              if (overlayRef) {
                var classPrefix = "".concat(this._cssClassPrefix, "-").concat(PANEL_CLASS, "-");
                overlayRef.removePanelClass(classPrefix + this._currentPosition);
                overlayRef.addPanelClass(classPrefix + newPosition);
              }

              this._currentPosition = newPosition;
            }
          }
          /** Binds the pointer events to the tooltip trigger. */

        }, {
          key: "_setupPointerEnterEventsIfNeeded",
          value: function _setupPointerEnterEventsIfNeeded() {
            var _this69 = this;

            // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
            if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
              return;
            } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
            // first tap from firing its click event or can cause the tooltip to open for clicks.


            if (this._platformSupportsMouseEvents()) {
              this._passiveListeners.push(['mouseenter', function () {
                _this69._setupPointerExitEventsIfNeeded();

                _this69.show();
              }]);
            } else if (this.touchGestures !== 'off') {
              this._disableNativeGesturesIfNecessary();

              this._passiveListeners.push(['touchstart', function () {
                // Note that it's important that we don't `preventDefault` here,
                // because it can prevent click events from firing on the element.
                _this69._setupPointerExitEventsIfNeeded();

                clearTimeout(_this69._touchstartTimeout);
                _this69._touchstartTimeout = setTimeout(function () {
                  return _this69.show();
                }, LONGPRESS_DELAY);
              }]);
            }

            this._addListeners(this._passiveListeners);
          }
        }, {
          key: "_setupPointerExitEventsIfNeeded",
          value: function _setupPointerExitEventsIfNeeded() {
            var _this70 = this,
                _this$_passiveListene;

            if (this._pointerExitEventsInitialized) {
              return;
            }

            this._pointerExitEventsInitialized = true;
            var exitListeners = [];

            if (this._platformSupportsMouseEvents()) {
              exitListeners.push(['mouseleave', function () {
                return _this70.hide();
              }], ['wheel', function (event) {
                return _this70._wheelListener(event);
              }]);
            } else if (this.touchGestures !== 'off') {
              this._disableNativeGesturesIfNecessary();

              var touchendListener = function touchendListener() {
                clearTimeout(_this70._touchstartTimeout);

                _this70.hide(_this70._defaultOptions.touchendHideDelay);
              };

              exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
            }

            this._addListeners(exitListeners);

            (_this$_passiveListene = this._passiveListeners).push.apply(_this$_passiveListene, exitListeners);
          }
        }, {
          key: "_addListeners",
          value: function _addListeners(listeners) {
            var _this71 = this;

            listeners.forEach(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  event = _ref14[0],
                  listener = _ref14[1];

              _this71._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
            });
          }
        }, {
          key: "_platformSupportsMouseEvents",
          value: function _platformSupportsMouseEvents() {
            return !this._platform.IOS && !this._platform.ANDROID;
          }
          /** Listener for the `wheel` event on the element. */

        }, {
          key: "_wheelListener",
          value: function _wheelListener(event) {
            if (this._isTooltipVisible()) {
              var elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);

              var element = this._elementRef.nativeElement; // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
              // won't fire if the user scrolls away using the wheel without moving their cursor. We
              // work around it by finding the element under the user's cursor and closing the tooltip
              // if it's not the trigger.

              if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
                this.hide();
              }
            }
          }
          /** Disables the native browser gestures, based on how the tooltip has been configured. */

        }, {
          key: "_disableNativeGesturesIfNecessary",
          value: function _disableNativeGesturesIfNecessary() {
            var gestures = this.touchGestures;

            if (gestures !== 'off') {
              var element = this._elementRef.nativeElement;
              var style = element.style; // If gestures are set to `auto`, we don't disable text selection on inputs and
              // textareas, because it prevents the user from typing into them on iOS Safari.

              if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
                style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
              } // If we have `auto` gestures and the element uses native HTML dragging,
              // we don't set `-webkit-user-drag` because it prevents the native behavior.


              if (gestures === 'on' || !element.draggable) {
                style.webkitUserDrag = 'none';
              }

              style.touchAction = 'none';
              style.webkitTapHighlightColor = 'transparent';
            }
          }
        }]);

        return _MatTooltipBase2;
      }();

      _MatTooltipBase2.ɵfac = function _MatTooltipBase_Factory(t) {
        return new (t || _MatTooltipBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT));
      };

      _MatTooltipBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTooltipBase2,
        inputs: {
          showDelay: ["matTooltipShowDelay", "showDelay"],
          hideDelay: ["matTooltipHideDelay", "hideDelay"],
          touchGestures: ["matTooltipTouchGestures", "touchGestures"],
          position: ["matTooltipPosition", "position"],
          disabled: ["matTooltipDisabled", "disabled"],
          message: ["matTooltip", "message"],
          tooltipClass: ["matTooltipClass", "tooltipClass"]
        }
      });

      _MatTooltipBase2.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor
        }, {
          type: undefined
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality
        }, {
          type: undefined
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
          }]
        }];
      };

      _MatTooltipBase2.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltipPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltipDisabled']
        }],
        showDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltipShowDelay']
        }],
        hideDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltipHideDelay']
        }],
        touchGestures: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltipTouchGestures']
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltip']
        }],
        tooltipClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ['matTooltipClass']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTooltipBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor
          }, {
            type: undefined
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality
          }, {
            type: undefined
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
            }]
          }];
        }, {
          showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipShowDelay']
          }],
          hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipHideDelay']
          }],
          touchGestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipTouchGestures']
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipPosition']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipDisabled']
          }],
          message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltip']
          }],
          tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['matTooltipClass']
          }]
        });
      })();
      /**
       * Directive that attaches a material design tooltip to the host element. Animates the showing and
       * hiding of a tooltip provided position (defaults to below the element).
       *
       * https://material.io/design/components/tooltips.html
       */


      var _MatTooltip = /*#__PURE__*/function (_MatTooltipBase3) {
        _inherits(_MatTooltip, _MatTooltipBase3);

        var _super40 = _createSuper(_MatTooltip);

        function _MatTooltip(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document) {
          var _this72;

          _classCallCheck(this, _MatTooltip);

          _this72 = _super40.call(this, overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document);
          _this72._tooltipComponent = _TooltipComponent;
          return _this72;
        }

        return _MatTooltip;
      }(_MatTooltipBase2);

      _MatTooltip.ɵfac = function MatTooltip_Factory(t) {
        return new (t || _MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT));
      };

      _MatTooltip.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _MatTooltip,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-tooltip-trigger"],
        exportAs: ["matTooltip"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      _MatTooltip.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_MAT_TOOLTIP_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_MAT_TOOLTIP_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTooltip, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[matTooltip]',
            exportAs: 'matTooltip',
            host: {
              'class': 'mat-tooltip-trigger'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.AriaDescriber
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.FocusMonitor
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_MAT_TOOLTIP_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_MAT_TOOLTIP_DEFAULT_OPTIONS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
            }]
          }];
        }, null);
      })();

      var _TooltipComponentBase2 = /*#__PURE__*/function () {
        function _TooltipComponentBase2(_changeDetectorRef) {
          _classCallCheck(this, _TooltipComponentBase2);

          this._changeDetectorRef = _changeDetectorRef;
          /** Property watched by the animation framework to show or hide the tooltip */

          this._visibility = 'initial';
          /** Whether interactions on the page should close the tooltip */

          this._closeOnInteraction = false;
          /** Subject for notifying that the tooltip has been hidden from the view */

          this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }
        /**
         * Shows the tooltip with an animation originating from the provided origin
         * @param delay Amount of milliseconds to the delay showing the tooltip.
         */


        _createClass(_TooltipComponentBase2, [{
          key: "show",
          value: function show(delay) {
            var _this73 = this;

            // Cancel the delayed hide if it is scheduled
            clearTimeout(this._hideTimeoutId); // Body interactions should cancel the tooltip if there is a delay in showing.

            this._closeOnInteraction = true;
            this._showTimeoutId = setTimeout(function () {
              _this73._visibility = 'visible';
              _this73._showTimeoutId = undefined; // Mark for check so if any parent component has set the
              // ChangeDetectionStrategy to OnPush it will be checked anyways

              _this73._markForCheck();
            }, delay);
          }
          /**
           * Begins the animation to hide the tooltip after the provided delay in ms.
           * @param delay Amount of milliseconds to delay showing the tooltip.
           */

        }, {
          key: "hide",
          value: function hide(delay) {
            var _this74 = this;

            // Cancel the delayed show if it is scheduled
            clearTimeout(this._showTimeoutId);
            this._hideTimeoutId = setTimeout(function () {
              _this74._visibility = 'hidden';
              _this74._hideTimeoutId = undefined; // Mark for check so if any parent component has set the
              // ChangeDetectionStrategy to OnPush it will be checked anyways

              _this74._markForCheck();
            }, delay);
          }
          /** Returns an observable that notifies when the tooltip has been hidden from view. */

        }, {
          key: "afterHidden",
          value: function afterHidden() {
            return this._onHide;
          }
          /** Whether the tooltip is being displayed. */

        }, {
          key: "isVisible",
          value: function isVisible() {
            return this._visibility === 'visible';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this._showTimeoutId);
            clearTimeout(this._hideTimeoutId);

            this._onHide.complete();
          }
        }, {
          key: "_animationStart",
          value: function _animationStart() {
            this._closeOnInteraction = false;
          }
        }, {
          key: "_animationDone",
          value: function _animationDone(event) {
            var toState = event.toState;

            if (toState === 'hidden' && !this.isVisible()) {
              this._onHide.next();
            }

            if (toState === 'visible' || toState === 'hidden') {
              this._closeOnInteraction = true;
            }
          }
          /**
           * Interactions on the HTML body should close the tooltip immediately as defined in the
           * material design spec.
           * https://material.io/design/components/tooltips.html#behavior
           */

        }, {
          key: "_handleBodyInteraction",
          value: function _handleBodyInteraction() {
            if (this._closeOnInteraction) {
              this.hide(0);
            }
          }
          /**
           * Marks that the tooltip needs to be checked in the next change detection run.
           * Mainly used for rendering the initial text before positioning a tooltip, which
           * can be problematic in components with OnPush change detection.
           */

        }, {
          key: "_markForCheck",
          value: function _markForCheck() {
            this._changeDetectorRef.markForCheck();
          }
        }]);

        return _TooltipComponentBase2;
      }();

      _TooltipComponentBase2.ɵfac = function _TooltipComponentBase_Factory(t) {
        return new (t || _TooltipComponentBase2)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _TooltipComponentBase2.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _TooltipComponentBase2
      });

      _TooltipComponentBase2.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_TooltipComponentBase2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }];
        }, null);
      })();
      /**
       * Internal component that wraps the tooltip's content.
       * @docs-private
       */


      var _TooltipComponent = /*#__PURE__*/function (_TooltipComponentBase3) {
        _inherits(_TooltipComponent, _TooltipComponentBase3);

        var _super41 = _createSuper(_TooltipComponent);

        function _TooltipComponent(changeDetectorRef, _breakpointObserver) {
          var _this75;

          _classCallCheck(this, _TooltipComponent);

          _this75 = _super41.call(this, changeDetectorRef);
          _this75._breakpointObserver = _breakpointObserver;
          /** Stream that emits whether the user has a handset-sized display.  */

          _this75._isHandset = _this75._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.Breakpoints.Handset);
          return _this75;
        }

        return _TooltipComponent;
      }(_TooltipComponentBase2);

      _TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
        return new (t || _TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver));
      };

      _TooltipComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _TooltipComponent,
        selectors: [["mat-tooltip-component"]],
        hostAttrs: ["aria-hidden", "true"],
        hostVars: 2,
        hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
              return ctx._handleBodyInteraction();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveBody"])("auxclick", function TooltipComponent_auxclick_HostBindingHandler() {
              return ctx._handleBodyInteraction();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveBody"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 7,
        consts: [[1, "mat-tooltip", 3, "ngClass"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
              return ctx._animationStart();
            })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
              return ctx._animationDone($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_0_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
        styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
        encapsulation: 2,
        data: {
          animation: [_matTooltipAnimations.tooltipState]
        },
        changeDetection: 0
      });

      _TooltipComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_TooltipComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mat-tooltip-component',
            template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            animations: [_matTooltipAnimations.tooltipState],
            host: {
              // Forces the element to have a layout in IE and Edge. This fixes issues where the element
              // won't be rendered if the animations are disabled or there is no web animations polyfill.
              '[style.zoom]': '_visibility === "visible" ? 1 : null',
              '(body:click)': 'this._handleBodyInteraction()',
              '(body:auxclick)': 'this._handleBodyInteraction()',
              'aria-hidden': 'true'
            },
            styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }, {
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatTooltipModule = function _MatTooltipModule() {
        _classCallCheck(this, _MatTooltipModule);
      };

      _MatTooltipModule.ɵfac = function MatTooltipModule_Factory(t) {
        return new (t || _MatTooltipModule)();
      };

      _MatTooltipModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MatTooltipModule
      });
      _MatTooltipModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollableModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatTooltipModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule],
            exports: [_MatTooltip, _TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollableModule],
            declarations: [_MatTooltip, _TooltipComponent],
            entryComponents: [_TooltipComponent],
            providers: [_MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatTooltipModule, {
          declarations: function declarations() {
            return [_MatTooltip, _TooltipComponent];
          },
          imports: function imports() {
            return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatTooltip, _TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollableModule];
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
      //# sourceMappingURL=tooltip.js.map

      /***/

    },

    /***/
    13653:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/skip.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "skip": function skip() {
          return (
            /* binding */
            _skip
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      77393);

      function _skip(count) {
        return function (source) {
          return source.lift(new SkipOperator(count));
        };
      }

      var SkipOperator = /*#__PURE__*/function () {
        function SkipOperator(total) {
          _classCallCheck(this, SkipOperator);

          this.total = total;
        }

        _createClass(SkipOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new SkipSubscriber(subscriber, this.total));
          }
        }]);

        return SkipOperator;
      }();

      var SkipSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(SkipSubscriber, _Subscriber__WEBPACK_);

        var _super42 = _createSuper(SkipSubscriber);

        function SkipSubscriber(destination, total) {
          var _this76;

          _classCallCheck(this, SkipSubscriber);

          _this76 = _super42.call(this, destination);
          _this76.total = total;
          _this76.count = 0;
          return _this76;
        }

        _createClass(SkipSubscriber, [{
          key: "_next",
          value: function _next(x) {
            if (++this.count > this.total) {
              this.destination.next(x);
            }
          }
        }]);

        return SkipSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber); //# sourceMappingURL=skip.js.map

      /***/

    },

    /***/
    45642:
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      43646);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./table/table.component */
      49767);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./treatment-details/treatment-details.component */
      419);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _mobile_treatments_table_mobile_treatments_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mobile-treatments-table/mobile-treatments-table.component */
      75659);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ComponentsModule = function _ComponentsModule() {
        _classCallCheck(this, _ComponentsModule);
      };

      _ComponentsModule.ɵfac = function ComponentsModule_Factory(t) {
        return new (t || _ComponentsModule)();
      };

      _ComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ComponentsModule
      });
      _ComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ComponentsModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _table_table_component__WEBPACK_IMPORTED_MODULE_1__.TableComponent, _treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_2__.TreatmentDetailsComponent, _mobile_treatments_table_mobile_treatments_table_component__WEBPACK_IMPORTED_MODULE_3__.MobileTreatmentsTableComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatRippleModule],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _table_table_component__WEBPACK_IMPORTED_MODULE_1__.TableComponent, _treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_2__.TreatmentDetailsComponent, _mobile_treatments_table_mobile_treatments_table_component__WEBPACK_IMPORTED_MODULE_3__.MobileTreatmentsTableComponent]
        });
      })();
      /***/

    },

    /***/
    43646:
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/services/auth.service */
      10629);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(authService) {
          _classCallCheck(this, _HeaderComponent);

          this.authService = authService;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        inputs: {
          pageName: "pageName"
        },
        decls: 8,
        vars: 3,
        consts: [["color", "primary"], ["slot", "start"], ["autoHide", "true"], ["slot", "end", 1, "mr-3", 3, "click"], [3, "ios", "md"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_ion_buttons_click_4_listener() {
              return ctx.authService.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ios", "power-outline")("md", "power-sharp");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageName);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    75659:
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/mobile-treatments-table/mobile-treatments-table.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MobileTreatmentsTableComponent": function MobileTreatmentsTableComponent() {
          return (
            /* binding */
            _MobileTreatmentsTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../treatment-details/treatment-details.component */
      419);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);

      function MobileTreatmentsTableComponent_mat_expansion_panel_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-treatment-details", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Procedures: 14 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "view_list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var treatment_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", treatment_r1.patient.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", treatment_r1.identifier, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("treatment", treatment_r1);
        }
      }

      var _MobileTreatmentsTableComponent = /*#__PURE__*/function () {
        function _MobileTreatmentsTableComponent() {
          _classCallCheck(this, _MobileTreatmentsTableComponent);

          this.displayedColumns = ['id', 'patient'];
        }

        _createClass(_MobileTreatmentsTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _MobileTreatmentsTableComponent;
      }();

      _MobileTreatmentsTableComponent.ɵfac = function MobileTreatmentsTableComponent_Factory(t) {
        return new (t || _MobileTreatmentsTableComponent)();
      };

      _MobileTreatmentsTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MobileTreatmentsTableComponent,
        selectors: [["app-mobile-treatments-table"]],
        inputs: {
          allTreatments: "allTreatments"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "example-headers-align"], [4, "ngFor", "ngForOf"], [3, "treatment"], ["mat-mini-fab", "", "mat-raised-button", "", "color", ""], ["mat-mini-fab", "", "mat-raised-button", "", "color", "primary"]],
        template: function MobileTreatmentsTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-accordion", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MobileTreatmentsTableComponent_mat_expansion_panel_1_Template, 17, 3, "mat-expansion-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allTreatments);
          }
        },
        directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelDescription, _treatment_details_treatment_details_component__WEBPACK_IMPORTED_MODULE_0__.TreatmentDetailsComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionPanelActionRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.mat-action-row[_ngcontent-%COMP%] {\n  place-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS10cmVhdG1lbnRzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFFRiIsImZpbGUiOiJtb2JpbGUtdHJlYXRtZW50cy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWF0LWFjdGlvbi1yb3cge1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    49767:
    /*!*****************************************************!*\
      !*** ./src/app/components/table/table.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableComponent": function TableComponent() {
          return (
            /* binding */
            _TableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function TableComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " S.No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12.sno, " ");
        }
      }

      function TableComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Identifier ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13.identifier, " ");
        }
      }

      function TableComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " IPD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r14.id, " ");
        }
      }

      function TableComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Patient name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r15.patient, " ");
        }
      }

      function TableComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          highlight: a0
        };
      };

      function TableComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_tr_20_Template_tr_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var row_r16 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.onSelectTreatment(row_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r16 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r10.selectedTreatmentID == row_r16.sno));
        }
      }

      function TableComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 12, 15, 20, 25];
      };

      var _TableComponent = /*#__PURE__*/function () {
        function _TableComponent() {
          _classCallCheck(this, _TableComponent);

          this.selectTreatment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.selectedTreatmentID = 1;
        }

        _createClass(_TableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.treatments);
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();

            if (this.dataSource.paginator) {
              this.dataSource.paginator.firstPage();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        }, {
          key: "onSelectTreatment",
          value: function onSelectTreatment(row) {
            this.selectedTreatmentID = parseInt(row.sno, 10);
            this.selectTreatment.emit(row);
          }
        }]);

        return _TableComponent;
      }();

      _TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || _TableComponent)();
      };

      _TableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TableComponent,
        selectors: [["app-table"]],
        viewQuery: function TableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        inputs: {
          treatments: "treatments",
          displayedColumns: "displayedColumns"
        },
        outputs: {
          selectTreatment: "selectTreatment"
        },
        decls: 23,
        vars: 5,
        consts: [["matInput", "", "placeholder", "Ex. IPD number", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "sno"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "identifier"], ["matColumnDef", "id"], ["matColumnDef", "patient"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableComponent_Template_input_keyup_3_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_th_8_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_td_9_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableComponent_th_11_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_td_12_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableComponent_th_14_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableComponent_td_15_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableComponent_th_17_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableComponent_td_18_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableComponent_tr_19_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableComponent_tr_20_Template, 1, 3, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TableComponent_tr_21_Template, 3, 1, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-primary-rgb), 0.14);\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLG9EQUFBO0VBQXNELFVBQUE7QUFHeEQiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuLmhpZ2hsaWdodHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTsgLyogZ3JlZW4gKi9cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    419:
    /*!*****************************************************************************!*\
      !*** ./src/app/components/treatment-details/treatment-details.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TreatmentDetailsComponent": function TreatmentDetailsComponent() {
          return (
            /* binding */
            _TreatmentDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      51095);

      function TreatmentDetailsComponent_mat_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " IPD number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Treatment Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Date of admission: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Date of discharge: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Payment type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Notes: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add Procedure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.treatment.patient.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treatment.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treatment.identifier, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treatment.admissionDate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treatment.dischargeDate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treatment.payType, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.treatment.notes, " ");
        }
      }

      function TreatmentDetailsComponent_mat_card_content_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " IPD number: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Date of admission: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Date of discharge: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Payment type: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Notes: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treatment.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treatment.admissionDate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treatment.dischargeDate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treatment.payType, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treatment.notes, " ");
        }
      }

      var _TreatmentDetailsComponent = /*#__PURE__*/function () {
        function _TreatmentDetailsComponent() {
          _classCallCheck(this, _TreatmentDetailsComponent);
        }

        _createClass(_TreatmentDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TreatmentDetailsComponent;
      }();

      _TreatmentDetailsComponent.ɵfac = function TreatmentDetailsComponent_Factory(t) {
        return new (t || _TreatmentDetailsComponent)();
      };

      _TreatmentDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TreatmentDetailsComponent,
        selectors: [["app-treatment-details"]],
        inputs: {
          treatment: "treatment"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "ion-hide-md-down", 4, "ngIf"], ["class", "ion-hide-sm-up", 4, "ngIf"], [1, "ion-hide-md-down"], ["size", "6"], ["mat-raised-button", "", "mat-button", ""], [1, "ion-hide-sm-up"]],
        template: function TreatmentDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreatmentDetailsComponent_mat_card_0_Template, 34, 7, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreatmentDetailsComponent_mat_card_content_1_Template, 23, 5, "mat-card-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treatment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.treatment);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVhdG1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_components_components_module_ts-es5.js.map