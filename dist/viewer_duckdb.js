(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends;
      var __assign;
      var __rest;
      var __decorate;
      var __param;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __createBinding;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v2) {
            return exports2[id] = previous ? previous(id, v2) : v2;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b) {
          d2.__proto__ = b;
        } || function(d2, b) {
          for (var p2 in b)
            if (Object.prototype.hasOwnProperty.call(b, p2))
              d2[p2] = b[p2];
        };
        __extends = function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p2 in s)
              if (Object.prototype.hasOwnProperty.call(s, p2))
                t[p2] = s[p2];
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p2 in s)
            if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
              t[p2] = s[p2];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
              if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
                t[p2[i]] = s[p2[i]];
            }
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d2 = decorators[i])
                r = (c < 3 ? d2(r) : c > 3 ? d2(target, key, r) : d2(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y2, t, g2;
          return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
            return this;
          }), g2;
          function verb(n) {
            return function(v2) {
              return step([n, v2]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
                  return t;
                if (y2 = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y2 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y2 = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar = function(m, o2) {
          for (var p2 in m)
            if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2))
              __createBinding(o2, m, p2);
        };
        __createBinding = Object.create ? function(o2, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o2, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o2, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o2[k2] = m[k];
        };
        __values = function(o2) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o2[s], i = 0;
          if (m)
            return m.call(o2);
          if (o2 && typeof o2.length === "number")
            return {
              next: function() {
                if (o2 && i >= o2.length)
                  o2 = void 0;
                return { value: o2 && o2[i++], done: !o2 };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o2, n) {
          var m = typeof Symbol === "function" && o2[Symbol.iterator];
          if (!m)
            return o2;
          var i = m.call(o2), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j2 = 0, jl = a.length; j2 < jl; j2++, k++)
              r[k] = a[j2];
          return r;
        };
        __spreadArray = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await = function(v2) {
          return this instanceof __await ? (this.v = v2, this) : new __await(v2);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g2 = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g2[n])
              i[n] = function(v2) {
                return new Promise(function(a, b) {
                  q.push([n, v2, a, b]) > 1 || resume(n, v2);
                });
              };
          }
          function resume(n, v2) {
            try {
              step(g2[n](v2));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v2) {
            if (f(v2), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o2) {
          var i, p2;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o2[n] ? function(v2) {
              return (p2 = !p2) ? { value: __await(o2[n](v2)), done: n === "return" } : f ? f(v2) : v2;
            } : f;
          }
        };
        __asyncValues = function(o2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o2[Symbol.asyncIterator], i;
          return m ? m.call(o2) : (o2 = typeof __values === "function" ? __values(o2) : o2[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o2[n] && function(v2) {
              return new Promise(function(resolve, reject) {
                v2 = o2[n](v2), settle(resolve, reject, v2.done, v2.value);
              });
            };
          }
          function settle(resolve, reject, d2, v2) {
            Promise.resolve(v2).then(function(v3) {
              resolve({ value: v3, done: d2 });
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o2, v2) {
          Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
        } : function(o2, v2) {
          o2["default"] = v2;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends);
        exporter("__assign", __assign);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__spreadArray", __spreadArray);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      });
    }
  });

  // node_modules/flatbuffers/js/flatbuffers.js
  var require_flatbuffers = __commonJS({
    "node_modules/flatbuffers/js/flatbuffers.js"(exports) {
      var flatbuffers = {};
      flatbuffers.Offset;
      flatbuffers.Table;
      flatbuffers.SIZEOF_SHORT = 2;
      flatbuffers.SIZEOF_INT = 4;
      flatbuffers.FILE_IDENTIFIER_LENGTH = 4;
      flatbuffers.SIZE_PREFIX_LENGTH = 4;
      flatbuffers.Encoding = {
        UTF8_BYTES: 1,
        UTF16_STRING: 2
      };
      flatbuffers.int32 = new Int32Array(2);
      flatbuffers.float32 = new Float32Array(flatbuffers.int32.buffer);
      flatbuffers.float64 = new Float64Array(flatbuffers.int32.buffer);
      flatbuffers.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
      flatbuffers.Long = function(low, high) {
        this.low = low | 0;
        this.high = high | 0;
      };
      flatbuffers.Long.create = function(low, high) {
        return low == 0 && high == 0 ? flatbuffers.Long.ZERO : new flatbuffers.Long(low, high);
      };
      flatbuffers.Long.prototype.toFloat64 = function() {
        return (this.low >>> 0) + this.high * 4294967296;
      };
      flatbuffers.Long.prototype.equals = function(other) {
        return this.low == other.low && this.high == other.high;
      };
      flatbuffers.Long.ZERO = new flatbuffers.Long(0, 0);
      flatbuffers.Builder = function(opt_initial_size) {
        if (!opt_initial_size) {
          var initial_size = 1024;
        } else {
          var initial_size = opt_initial_size;
        }
        this.bb = flatbuffers.ByteBuffer.allocate(initial_size);
        this.space = initial_size;
        this.minalign = 1;
        this.vtable = null;
        this.vtable_in_use = 0;
        this.isNested = false;
        this.object_start = 0;
        this.vtables = [];
        this.vector_num_elems = 0;
        this.force_defaults = false;
      };
      flatbuffers.Builder.prototype.clear = function() {
        this.bb.clear();
        this.space = this.bb.capacity();
        this.minalign = 1;
        this.vtable = null;
        this.vtable_in_use = 0;
        this.isNested = false;
        this.object_start = 0;
        this.vtables = [];
        this.vector_num_elems = 0;
        this.force_defaults = false;
      };
      flatbuffers.Builder.prototype.forceDefaults = function(forceDefaults) {
        this.force_defaults = forceDefaults;
      };
      flatbuffers.Builder.prototype.dataBuffer = function() {
        return this.bb;
      };
      flatbuffers.Builder.prototype.asUint8Array = function() {
        return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
      };
      flatbuffers.Builder.prototype.prep = function(size, additional_bytes) {
        if (size > this.minalign) {
          this.minalign = size;
        }
        var align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
        while (this.space < align_size + size + additional_bytes) {
          var old_buf_size = this.bb.capacity();
          this.bb = flatbuffers.Builder.growByteBuffer(this.bb);
          this.space += this.bb.capacity() - old_buf_size;
        }
        this.pad(align_size);
      };
      flatbuffers.Builder.prototype.pad = function(byte_size) {
        for (var i = 0; i < byte_size; i++) {
          this.bb.writeInt8(--this.space, 0);
        }
      };
      flatbuffers.Builder.prototype.writeInt8 = function(value) {
        this.bb.writeInt8(this.space -= 1, value);
      };
      flatbuffers.Builder.prototype.writeInt16 = function(value) {
        this.bb.writeInt16(this.space -= 2, value);
      };
      flatbuffers.Builder.prototype.writeInt32 = function(value) {
        this.bb.writeInt32(this.space -= 4, value);
      };
      flatbuffers.Builder.prototype.writeInt64 = function(value) {
        this.bb.writeInt64(this.space -= 8, value);
      };
      flatbuffers.Builder.prototype.writeFloat32 = function(value) {
        this.bb.writeFloat32(this.space -= 4, value);
      };
      flatbuffers.Builder.prototype.writeFloat64 = function(value) {
        this.bb.writeFloat64(this.space -= 8, value);
      };
      flatbuffers.Builder.prototype.addInt8 = function(value) {
        this.prep(1, 0);
        this.writeInt8(value);
      };
      flatbuffers.Builder.prototype.addInt16 = function(value) {
        this.prep(2, 0);
        this.writeInt16(value);
      };
      flatbuffers.Builder.prototype.addInt32 = function(value) {
        this.prep(4, 0);
        this.writeInt32(value);
      };
      flatbuffers.Builder.prototype.addInt64 = function(value) {
        this.prep(8, 0);
        this.writeInt64(value);
      };
      flatbuffers.Builder.prototype.addFloat32 = function(value) {
        this.prep(4, 0);
        this.writeFloat32(value);
      };
      flatbuffers.Builder.prototype.addFloat64 = function(value) {
        this.prep(8, 0);
        this.writeFloat64(value);
      };
      flatbuffers.Builder.prototype.addFieldInt8 = function(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addInt8(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldInt16 = function(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addInt16(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldInt32 = function(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addInt32(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldInt64 = function(voffset, value, defaultValue) {
        if (this.force_defaults || !value.equals(defaultValue)) {
          this.addInt64(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldFloat32 = function(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addFloat32(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldFloat64 = function(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addFloat64(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldOffset = function(voffset, value, defaultValue) {
        if (this.force_defaults || value != defaultValue) {
          this.addOffset(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.addFieldStruct = function(voffset, value, defaultValue) {
        if (value != defaultValue) {
          this.nested(value);
          this.slot(voffset);
        }
      };
      flatbuffers.Builder.prototype.nested = function(obj) {
        if (obj != this.offset()) {
          throw new Error("FlatBuffers: struct must be serialized inline.");
        }
      };
      flatbuffers.Builder.prototype.notNested = function() {
        if (this.isNested) {
          throw new Error("FlatBuffers: object serialization must not be nested.");
        }
      };
      flatbuffers.Builder.prototype.slot = function(voffset) {
        this.vtable[voffset] = this.offset();
      };
      flatbuffers.Builder.prototype.offset = function() {
        return this.bb.capacity() - this.space;
      };
      flatbuffers.Builder.growByteBuffer = function(bb) {
        var old_buf_size = bb.capacity();
        if (old_buf_size & 3221225472) {
          throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
        }
        var new_buf_size = old_buf_size << 1;
        var nbb = flatbuffers.ByteBuffer.allocate(new_buf_size);
        nbb.setPosition(new_buf_size - old_buf_size);
        nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
        return nbb;
      };
      flatbuffers.Builder.prototype.addOffset = function(offset) {
        this.prep(flatbuffers.SIZEOF_INT, 0);
        this.writeInt32(this.offset() - offset + flatbuffers.SIZEOF_INT);
      };
      flatbuffers.Builder.prototype.startObject = function(numfields) {
        this.notNested();
        if (this.vtable == null) {
          this.vtable = [];
        }
        this.vtable_in_use = numfields;
        for (var i = 0; i < numfields; i++) {
          this.vtable[i] = 0;
        }
        this.isNested = true;
        this.object_start = this.offset();
      };
      flatbuffers.Builder.prototype.endObject = function() {
        if (this.vtable == null || !this.isNested) {
          throw new Error("FlatBuffers: endObject called without startObject");
        }
        this.addInt32(0);
        var vtableloc = this.offset();
        var i = this.vtable_in_use - 1;
        for (; i >= 0 && this.vtable[i] == 0; i--) {
        }
        var trimmed_size = i + 1;
        for (; i >= 0; i--) {
          this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
        }
        var standard_fields = 2;
        this.addInt16(vtableloc - this.object_start);
        var len = (trimmed_size + standard_fields) * flatbuffers.SIZEOF_SHORT;
        this.addInt16(len);
        var existing_vtable = 0;
        var vt1 = this.space;
        outer_loop:
          for (i = 0; i < this.vtables.length; i++) {
            var vt2 = this.bb.capacity() - this.vtables[i];
            if (len == this.bb.readInt16(vt2)) {
              for (var j2 = flatbuffers.SIZEOF_SHORT; j2 < len; j2 += flatbuffers.SIZEOF_SHORT) {
                if (this.bb.readInt16(vt1 + j2) != this.bb.readInt16(vt2 + j2)) {
                  continue outer_loop;
                }
              }
              existing_vtable = this.vtables[i];
              break;
            }
          }
        if (existing_vtable) {
          this.space = this.bb.capacity() - vtableloc;
          this.bb.writeInt32(this.space, existing_vtable - vtableloc);
        } else {
          this.vtables.push(this.offset());
          this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
        }
        this.isNested = false;
        return vtableloc;
      };
      flatbuffers.Builder.prototype.finish = function(root_table, opt_file_identifier, opt_size_prefix) {
        var size_prefix = opt_size_prefix ? flatbuffers.SIZE_PREFIX_LENGTH : 0;
        if (opt_file_identifier) {
          var file_identifier = opt_file_identifier;
          this.prep(this.minalign, flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH + size_prefix);
          if (file_identifier.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
            throw new Error("FlatBuffers: file identifier must be length " + flatbuffers.FILE_IDENTIFIER_LENGTH);
          }
          for (var i = flatbuffers.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
            this.writeInt8(file_identifier.charCodeAt(i));
          }
        }
        this.prep(this.minalign, flatbuffers.SIZEOF_INT + size_prefix);
        this.addOffset(root_table);
        if (size_prefix) {
          this.addInt32(this.bb.capacity() - this.space);
        }
        this.bb.setPosition(this.space);
      };
      flatbuffers.Builder.prototype.finishSizePrefixed = function(root_table, opt_file_identifier) {
        this.finish(root_table, opt_file_identifier, true);
      };
      flatbuffers.Builder.prototype.requiredField = function(table, field) {
        var table_start = this.bb.capacity() - table;
        var vtable_start = table_start - this.bb.readInt32(table_start);
        var ok = this.bb.readInt16(vtable_start + field) != 0;
        if (!ok) {
          throw new Error("FlatBuffers: field " + field + " must be set");
        }
      };
      flatbuffers.Builder.prototype.startVector = function(elem_size, num_elems, alignment) {
        this.notNested();
        this.vector_num_elems = num_elems;
        this.prep(flatbuffers.SIZEOF_INT, elem_size * num_elems);
        this.prep(alignment, elem_size * num_elems);
      };
      flatbuffers.Builder.prototype.endVector = function() {
        this.writeInt32(this.vector_num_elems);
        return this.offset();
      };
      flatbuffers.Builder.prototype.createString = function(s) {
        if (s instanceof Uint8Array) {
          var utf8 = s;
        } else {
          var utf8 = [];
          var i = 0;
          while (i < s.length) {
            var codePoint;
            var a = s.charCodeAt(i++);
            if (a < 55296 || a >= 56320) {
              codePoint = a;
            } else {
              var b = s.charCodeAt(i++);
              codePoint = (a << 10) + b + (65536 - (55296 << 10) - 56320);
            }
            if (codePoint < 128) {
              utf8.push(codePoint);
            } else {
              if (codePoint < 2048) {
                utf8.push(codePoint >> 6 & 31 | 192);
              } else {
                if (codePoint < 65536) {
                  utf8.push(codePoint >> 12 & 15 | 224);
                } else {
                  utf8.push(codePoint >> 18 & 7 | 240, codePoint >> 12 & 63 | 128);
                }
                utf8.push(codePoint >> 6 & 63 | 128);
              }
              utf8.push(codePoint & 63 | 128);
            }
          }
        }
        this.addInt8(0);
        this.startVector(1, utf8.length, 1);
        this.bb.setPosition(this.space -= utf8.length);
        for (var i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) {
          bytes[offset++] = utf8[i];
        }
        return this.endVector();
      };
      flatbuffers.Builder.prototype.createLong = function(low, high) {
        return flatbuffers.Long.create(low, high);
      };
      flatbuffers.ByteBuffer = function(bytes) {
        this.bytes_ = bytes;
        this.position_ = 0;
      };
      flatbuffers.ByteBuffer.allocate = function(byte_size) {
        return new flatbuffers.ByteBuffer(new Uint8Array(byte_size));
      };
      flatbuffers.ByteBuffer.prototype.clear = function() {
        this.position_ = 0;
      };
      flatbuffers.ByteBuffer.prototype.bytes = function() {
        return this.bytes_;
      };
      flatbuffers.ByteBuffer.prototype.position = function() {
        return this.position_;
      };
      flatbuffers.ByteBuffer.prototype.setPosition = function(position) {
        this.position_ = position;
      };
      flatbuffers.ByteBuffer.prototype.capacity = function() {
        return this.bytes_.length;
      };
      flatbuffers.ByteBuffer.prototype.readInt8 = function(offset) {
        return this.readUint8(offset) << 24 >> 24;
      };
      flatbuffers.ByteBuffer.prototype.readUint8 = function(offset) {
        return this.bytes_[offset];
      };
      flatbuffers.ByteBuffer.prototype.readInt16 = function(offset) {
        return this.readUint16(offset) << 16 >> 16;
      };
      flatbuffers.ByteBuffer.prototype.readUint16 = function(offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
      };
      flatbuffers.ByteBuffer.prototype.readInt32 = function(offset) {
        return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
      };
      flatbuffers.ByteBuffer.prototype.readUint32 = function(offset) {
        return this.readInt32(offset) >>> 0;
      };
      flatbuffers.ByteBuffer.prototype.readInt64 = function(offset) {
        return new flatbuffers.Long(this.readInt32(offset), this.readInt32(offset + 4));
      };
      flatbuffers.ByteBuffer.prototype.readUint64 = function(offset) {
        return new flatbuffers.Long(this.readUint32(offset), this.readUint32(offset + 4));
      };
      flatbuffers.ByteBuffer.prototype.readFloat32 = function(offset) {
        flatbuffers.int32[0] = this.readInt32(offset);
        return flatbuffers.float32[0];
      };
      flatbuffers.ByteBuffer.prototype.readFloat64 = function(offset) {
        flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1] = this.readInt32(offset);
        flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
        return flatbuffers.float64[0];
      };
      flatbuffers.ByteBuffer.prototype.writeInt8 = function(offset, value) {
        this.bytes_[offset] = value;
      };
      flatbuffers.ByteBuffer.prototype.writeUint8 = function(offset, value) {
        this.bytes_[offset] = value;
      };
      flatbuffers.ByteBuffer.prototype.writeInt16 = function(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
      };
      flatbuffers.ByteBuffer.prototype.writeUint16 = function(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
      };
      flatbuffers.ByteBuffer.prototype.writeInt32 = function(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
        this.bytes_[offset + 2] = value >> 16;
        this.bytes_[offset + 3] = value >> 24;
      };
      flatbuffers.ByteBuffer.prototype.writeUint32 = function(offset, value) {
        this.bytes_[offset] = value;
        this.bytes_[offset + 1] = value >> 8;
        this.bytes_[offset + 2] = value >> 16;
        this.bytes_[offset + 3] = value >> 24;
      };
      flatbuffers.ByteBuffer.prototype.writeInt64 = function(offset, value) {
        this.writeInt32(offset, value.low);
        this.writeInt32(offset + 4, value.high);
      };
      flatbuffers.ByteBuffer.prototype.writeUint64 = function(offset, value) {
        this.writeUint32(offset, value.low);
        this.writeUint32(offset + 4, value.high);
      };
      flatbuffers.ByteBuffer.prototype.writeFloat32 = function(offset, value) {
        flatbuffers.float32[0] = value;
        this.writeInt32(offset, flatbuffers.int32[0]);
      };
      flatbuffers.ByteBuffer.prototype.writeFloat64 = function(offset, value) {
        flatbuffers.float64[0] = value;
        this.writeInt32(offset, flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1]);
        this.writeInt32(offset + 4, flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0]);
      };
      flatbuffers.ByteBuffer.prototype.getBufferIdentifier = function() {
        if (this.bytes_.length < this.position_ + flatbuffers.SIZEOF_INT + flatbuffers.FILE_IDENTIFIER_LENGTH) {
          throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
        }
        var result = "";
        for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
          result += String.fromCharCode(this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i));
        }
        return result;
      };
      flatbuffers.ByteBuffer.prototype.__offset = function(bb_pos, vtable_offset) {
        var vtable = bb_pos - this.readInt32(bb_pos);
        return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
      };
      flatbuffers.ByteBuffer.prototype.__union = function(t, offset) {
        t.bb_pos = offset + this.readInt32(offset);
        t.bb = this;
        return t;
      };
      flatbuffers.ByteBuffer.prototype.__string = function(offset, opt_encoding) {
        offset += this.readInt32(offset);
        var length = this.readInt32(offset);
        var result = "";
        var i = 0;
        offset += flatbuffers.SIZEOF_INT;
        if (opt_encoding === flatbuffers.Encoding.UTF8_BYTES) {
          return this.bytes_.subarray(offset, offset + length);
        }
        while (i < length) {
          var codePoint;
          var a = this.readUint8(offset + i++);
          if (a < 192) {
            codePoint = a;
          } else {
            var b = this.readUint8(offset + i++);
            if (a < 224) {
              codePoint = (a & 31) << 6 | b & 63;
            } else {
              var c = this.readUint8(offset + i++);
              if (a < 240) {
                codePoint = (a & 15) << 12 | (b & 63) << 6 | c & 63;
              } else {
                var d2 = this.readUint8(offset + i++);
                codePoint = (a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d2 & 63;
              }
            }
          }
          if (codePoint < 65536) {
            result += String.fromCharCode(codePoint);
          } else {
            codePoint -= 65536;
            result += String.fromCharCode((codePoint >> 10) + 55296, (codePoint & (1 << 10) - 1) + 56320);
          }
        }
        return result;
      };
      flatbuffers.ByteBuffer.prototype.__indirect = function(offset) {
        return offset + this.readInt32(offset);
      };
      flatbuffers.ByteBuffer.prototype.__vector = function(offset) {
        return offset + this.readInt32(offset) + flatbuffers.SIZEOF_INT;
      };
      flatbuffers.ByteBuffer.prototype.__vector_len = function(offset) {
        return this.readInt32(offset + this.readInt32(offset));
      };
      flatbuffers.ByteBuffer.prototype.__has_identifier = function(ident) {
        if (ident.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
          throw new Error("FlatBuffers: file identifier must be length " + flatbuffers.FILE_IDENTIFIER_LENGTH);
        }
        for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
          if (ident.charCodeAt(i) != this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i)) {
            return false;
          }
        }
        return true;
      };
      flatbuffers.ByteBuffer.prototype.createLong = function(low, high) {
        return flatbuffers.Long.create(low, high);
      };
      exports.flatbuffers = flatbuffers;
    }
  });

  // node_modules/apache-arrow/util/utf8.js
  var require_utf8 = __commonJS({
    "node_modules/apache-arrow/util/utf8.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.encodeUtf8 = exports.decodeUtf8 = void 0;
      var decoder = new TextDecoder("utf-8");
      exports.decodeUtf8 = (buffer) => decoder.decode(buffer);
      var encoder = new TextEncoder();
      exports.encodeUtf8 = (value) => encoder.encode(value);
    }
  });

  // node_modules/apache-arrow/io/interfaces.js
  var require_interfaces = __commonJS({
    "node_modules/apache-arrow/io/interfaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncQueue = exports.ReadableInterop = exports.ArrowJSON = exports.ITERATOR_DONE = void 0;
      var tslib_1 = require_tslib();
      var adapters_1 = require_adapters();
      exports.ITERATOR_DONE = Object.freeze({ done: true, value: void 0 });
      var ArrowJSON = class {
        constructor(_json) {
          this._json = _json;
        }
        get schema() {
          return this._json["schema"];
        }
        get batches() {
          return this._json["batches"] || [];
        }
        get dictionaries() {
          return this._json["dictionaries"] || [];
        }
      };
      exports.ArrowJSON = ArrowJSON;
      var ReadableInterop = class {
        tee() {
          return this._getDOMStream().tee();
        }
        pipe(writable, options) {
          return this._getNodeStream().pipe(writable, options);
        }
        pipeTo(writable, options) {
          return this._getDOMStream().pipeTo(writable, options);
        }
        pipeThrough(duplex, options) {
          return this._getDOMStream().pipeThrough(duplex, options);
        }
        _getDOMStream() {
          return this._DOMStream || (this._DOMStream = this.toDOMStream());
        }
        _getNodeStream() {
          return this._nodeStream || (this._nodeStream = this.toNodeStream());
        }
      };
      exports.ReadableInterop = ReadableInterop;
      var AsyncQueue = class extends ReadableInterop {
        constructor() {
          super();
          this._values = [];
          this.resolvers = [];
          this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
        }
        get closed() {
          return this._closedPromise;
        }
        cancel(reason) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.return(reason);
          });
        }
        write(value) {
          if (this._ensureOpen()) {
            this.resolvers.length <= 0 ? this._values.push(value) : this.resolvers.shift().resolve({ done: false, value });
          }
        }
        abort(value) {
          if (this._closedPromiseResolve) {
            this.resolvers.length <= 0 ? this._error = { error: value } : this.resolvers.shift().reject({ done: true, value });
          }
        }
        close() {
          if (this._closedPromiseResolve) {
            const { resolvers } = this;
            while (resolvers.length > 0) {
              resolvers.shift().resolve(exports.ITERATOR_DONE);
            }
            this._closedPromiseResolve();
            this._closedPromiseResolve = void 0;
          }
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        toDOMStream(options) {
          return adapters_1.default.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, options);
        }
        toNodeStream(options) {
          return adapters_1.default.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, options);
        }
        throw(_) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.abort(_);
            return exports.ITERATOR_DONE;
          });
        }
        return(_) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.close();
            return exports.ITERATOR_DONE;
          });
        }
        read(size) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.next(size, "read")).value;
          });
        }
        peek(size) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.next(size, "peek")).value;
          });
        }
        next(..._args) {
          if (this._values.length > 0) {
            return Promise.resolve({ done: false, value: this._values.shift() });
          } else if (this._error) {
            return Promise.reject({ done: true, value: this._error.error });
          } else if (!this._closedPromiseResolve) {
            return Promise.resolve(exports.ITERATOR_DONE);
          } else {
            return new Promise((resolve, reject) => {
              this.resolvers.push({ resolve, reject });
            });
          }
        }
        _ensureOpen() {
          if (this._closedPromiseResolve) {
            return true;
          }
          throw new Error(`AsyncQueue is closed`);
        }
      };
      exports.AsyncQueue = AsyncQueue;
    }
  });

  // node_modules/apache-arrow/util/compat.js
  var require_compat = __commonJS({
    "node_modules/apache-arrow/util/compat.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isReadableNodeStream = exports.isWritableNodeStream = exports.isReadableDOMStream = exports.isWritableDOMStream = exports.isFetchResponse = exports.isFSReadStream = exports.isFileHandle = exports.isUnderlyingSink = exports.isIteratorResult = exports.isArrayLike = exports.isArrowJSON = exports.isAsyncIterable = exports.isIterable = exports.isObservable = exports.isPromise = exports.isObject = exports.BigUint64ArrayAvailable = exports.BigUint64Array = exports.BigInt64ArrayAvailable = exports.BigInt64Array = exports.BigIntAvailable = exports.BigInt = void 0;
      var interfaces_1 = require_interfaces();
      var [BigIntCtor, BigIntAvailable] = (() => {
        const BigIntUnavailableError = () => {
          throw new Error("BigInt is not available in this environment");
        };
        function BigIntUnavailable() {
          throw BigIntUnavailableError();
        }
        BigIntUnavailable.asIntN = () => {
          throw BigIntUnavailableError();
        };
        BigIntUnavailable.asUintN = () => {
          throw BigIntUnavailableError();
        };
        return typeof BigInt !== "undefined" ? [BigInt, true] : [BigIntUnavailable, false];
      })();
      exports.BigInt = BigIntCtor;
      exports.BigIntAvailable = BigIntAvailable;
      var [BigInt64ArrayCtor, BigInt64ArrayAvailable] = (() => {
        const BigInt64ArrayUnavailableError = () => {
          throw new Error("BigInt64Array is not available in this environment");
        };
        class BigInt64ArrayUnavailable {
          static get BYTES_PER_ELEMENT() {
            return 8;
          }
          static of() {
            throw BigInt64ArrayUnavailableError();
          }
          static from() {
            throw BigInt64ArrayUnavailableError();
          }
          constructor() {
            throw BigInt64ArrayUnavailableError();
          }
        }
        return typeof BigInt64Array !== "undefined" ? [BigInt64Array, true] : [BigInt64ArrayUnavailable, false];
      })();
      exports.BigInt64Array = BigInt64ArrayCtor;
      exports.BigInt64ArrayAvailable = BigInt64ArrayAvailable;
      var [BigUint64ArrayCtor, BigUint64ArrayAvailable] = (() => {
        const BigUint64ArrayUnavailableError = () => {
          throw new Error("BigUint64Array is not available in this environment");
        };
        class BigUint64ArrayUnavailable {
          static get BYTES_PER_ELEMENT() {
            return 8;
          }
          static of() {
            throw BigUint64ArrayUnavailableError();
          }
          static from() {
            throw BigUint64ArrayUnavailableError();
          }
          constructor() {
            throw BigUint64ArrayUnavailableError();
          }
        }
        return typeof BigUint64Array !== "undefined" ? [BigUint64Array, true] : [BigUint64ArrayUnavailable, false];
      })();
      exports.BigUint64Array = BigUint64ArrayCtor;
      exports.BigUint64ArrayAvailable = BigUint64ArrayAvailable;
      var isNumber = (x) => typeof x === "number";
      var isBoolean = (x) => typeof x === "boolean";
      var isFunction = (x) => typeof x === "function";
      exports.isObject = (x) => x != null && Object(x) === x;
      exports.isPromise = (x) => {
        return exports.isObject(x) && isFunction(x.then);
      };
      exports.isObservable = (x) => {
        return exports.isObject(x) && isFunction(x.subscribe);
      };
      exports.isIterable = (x) => {
        return exports.isObject(x) && isFunction(x[Symbol.iterator]);
      };
      exports.isAsyncIterable = (x) => {
        return exports.isObject(x) && isFunction(x[Symbol.asyncIterator]);
      };
      exports.isArrowJSON = (x) => {
        return exports.isObject(x) && exports.isObject(x["schema"]);
      };
      exports.isArrayLike = (x) => {
        return exports.isObject(x) && isNumber(x["length"]);
      };
      exports.isIteratorResult = (x) => {
        return exports.isObject(x) && "done" in x && "value" in x;
      };
      exports.isUnderlyingSink = (x) => {
        return exports.isObject(x) && isFunction(x["abort"]) && isFunction(x["close"]) && isFunction(x["start"]) && isFunction(x["write"]);
      };
      exports.isFileHandle = (x) => {
        return exports.isObject(x) && isFunction(x["stat"]) && isNumber(x["fd"]);
      };
      exports.isFSReadStream = (x) => {
        return exports.isReadableNodeStream(x) && isNumber(x["bytesRead"]);
      };
      exports.isFetchResponse = (x) => {
        return exports.isObject(x) && exports.isReadableDOMStream(x["body"]);
      };
      exports.isWritableDOMStream = (x) => {
        return exports.isObject(x) && isFunction(x["abort"]) && isFunction(x["getWriter"]) && !(x instanceof interfaces_1.ReadableInterop);
      };
      exports.isReadableDOMStream = (x) => {
        return exports.isObject(x) && isFunction(x["cancel"]) && isFunction(x["getReader"]) && !(x instanceof interfaces_1.ReadableInterop);
      };
      exports.isWritableNodeStream = (x) => {
        return exports.isObject(x) && isFunction(x["end"]) && isFunction(x["write"]) && isBoolean(x["writable"]) && !(x instanceof interfaces_1.ReadableInterop);
      };
      exports.isReadableNodeStream = (x) => {
        return exports.isObject(x) && isFunction(x["read"]) && isFunction(x["pipe"]) && isBoolean(x["readable"]) && !(x instanceof interfaces_1.ReadableInterop);
      };
    }
  });

  // node_modules/apache-arrow/util/buffer.js
  var require_buffer = __commonJS({
    "node_modules/apache-arrow/util/buffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compareArrayLike = exports.rebaseValueOffsets = exports.toUint8ClampedArrayAsyncIterator = exports.toFloat64ArrayAsyncIterator = exports.toFloat32ArrayAsyncIterator = exports.toUint32ArrayAsyncIterator = exports.toUint16ArrayAsyncIterator = exports.toUint8ArrayAsyncIterator = exports.toInt32ArrayAsyncIterator = exports.toInt16ArrayAsyncIterator = exports.toInt8ArrayAsyncIterator = exports.toArrayBufferViewAsyncIterator = exports.toUint8ClampedArrayIterator = exports.toFloat64ArrayIterator = exports.toFloat32ArrayIterator = exports.toUint32ArrayIterator = exports.toUint16ArrayIterator = exports.toUint8ArrayIterator = exports.toInt32ArrayIterator = exports.toInt16ArrayIterator = exports.toInt8ArrayIterator = exports.toArrayBufferViewIterator = exports.toUint8ClampedArray = exports.toFloat64Array = exports.toFloat32Array = exports.toBigUint64Array = exports.toUint32Array = exports.toUint16Array = exports.toUint8Array = exports.toBigInt64Array = exports.toInt32Array = exports.toInt16Array = exports.toInt8Array = exports.toArrayBufferView = exports.joinUint8Arrays = exports.memcpy = void 0;
      var tslib_1 = require_tslib();
      var flatbuffers_1 = require_flatbuffers();
      var utf8_1 = require_utf8();
      var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
      var compat_1 = require_compat();
      var SharedArrayBuf = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;
      function collapseContiguousByteRanges(chunks) {
        const result = chunks[0] ? [chunks[0]] : [];
        let xOffset, yOffset, xLen, yLen;
        for (let x, y2, i = 0, j2 = 0, n = chunks.length; ++i < n; ) {
          x = result[j2];
          y2 = chunks[i];
          if (!x || !y2 || x.buffer !== y2.buffer || y2.byteOffset < x.byteOffset) {
            y2 && (result[++j2] = y2);
            continue;
          }
          ({ byteOffset: xOffset, byteLength: xLen } = x);
          ({ byteOffset: yOffset, byteLength: yLen } = y2);
          if (xOffset + xLen < yOffset || yOffset + yLen < xOffset) {
            y2 && (result[++j2] = y2);
            continue;
          }
          result[j2] = new Uint8Array(x.buffer, xOffset, yOffset - xOffset + yLen);
        }
        return result;
      }
      function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
        const targetByteLength = target.byteLength;
        const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
        const src = new Uint8Array(source.buffer, source.byteOffset, Math.min(sourceByteLength, targetByteLength));
        dst.set(src, targetByteOffset);
        return target;
      }
      exports.memcpy = memcpy;
      function joinUint8Arrays(chunks, size) {
        const result = collapseContiguousByteRanges(chunks);
        const byteLength = result.reduce((x, b) => x + b.byteLength, 0);
        let source, sliced, buffer;
        let offset = 0, index = -1;
        const length = Math.min(size || Infinity, byteLength);
        for (let n = result.length; ++index < n; ) {
          source = result[index];
          sliced = source.subarray(0, Math.min(source.length, length - offset));
          if (length <= offset + sliced.length) {
            if (sliced.length < source.length) {
              result[index] = source.subarray(sliced.length);
            } else if (sliced.length === source.length) {
              index++;
            }
            buffer ? memcpy(buffer, sliced, offset) : buffer = sliced;
            break;
          }
          memcpy(buffer || (buffer = new Uint8Array(length)), sliced, offset);
          offset += sliced.length;
        }
        return [buffer || new Uint8Array(0), result.slice(index), byteLength - (buffer ? buffer.byteLength : 0)];
      }
      exports.joinUint8Arrays = joinUint8Arrays;
      function toArrayBufferView(ArrayBufferViewCtor, input) {
        let value = compat_1.isIteratorResult(input) ? input.value : input;
        if (value instanceof ArrayBufferViewCtor) {
          if (ArrayBufferViewCtor === Uint8Array) {
            return new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength);
          }
          return value;
        }
        if (!value) {
          return new ArrayBufferViewCtor(0);
        }
        if (typeof value === "string") {
          value = utf8_1.encodeUtf8(value);
        }
        if (value instanceof ArrayBuffer) {
          return new ArrayBufferViewCtor(value);
        }
        if (value instanceof SharedArrayBuf) {
          return new ArrayBufferViewCtor(value);
        }
        if (value instanceof ByteBuffer) {
          return toArrayBufferView(ArrayBufferViewCtor, value.bytes());
        }
        return !ArrayBuffer.isView(value) ? ArrayBufferViewCtor.from(value) : value.byteLength <= 0 ? new ArrayBufferViewCtor(0) : new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT);
      }
      exports.toArrayBufferView = toArrayBufferView;
      exports.toInt8Array = (input) => toArrayBufferView(Int8Array, input);
      exports.toInt16Array = (input) => toArrayBufferView(Int16Array, input);
      exports.toInt32Array = (input) => toArrayBufferView(Int32Array, input);
      exports.toBigInt64Array = (input) => toArrayBufferView(compat_1.BigInt64Array, input);
      exports.toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
      exports.toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
      exports.toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
      exports.toBigUint64Array = (input) => toArrayBufferView(compat_1.BigUint64Array, input);
      exports.toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
      exports.toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
      exports.toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
      var pump = (iterator) => {
        iterator.next();
        return iterator;
      };
      function* toArrayBufferViewIterator(ArrayCtor, source) {
        const wrap = function* (x) {
          yield x;
        };
        const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : !compat_1.isIterable(source) ? wrap(source) : source;
        yield* pump(function* (it) {
          let r = null;
          do {
            r = it.next(yield toArrayBufferView(ArrayCtor, r));
          } while (!r.done);
        }(buffers[Symbol.iterator]()));
        return new ArrayCtor();
      }
      exports.toArrayBufferViewIterator = toArrayBufferViewIterator;
      exports.toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
      exports.toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
      exports.toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
      exports.toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
      exports.toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
      exports.toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
      exports.toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
      exports.toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
      exports.toUint8ClampedArrayIterator = (input) => toArrayBufferViewIterator(Uint8ClampedArray, input);
      function toArrayBufferViewAsyncIterator(ArrayCtor, source) {
        return tslib_1.__asyncGenerator(this, arguments, function* toArrayBufferViewAsyncIterator_1() {
          if (compat_1.isPromise(source)) {
            return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(toArrayBufferViewAsyncIterator(ArrayCtor, yield tslib_1.__await(source))))));
          }
          const wrap = function(x) {
            return tslib_1.__asyncGenerator(this, arguments, function* () {
              yield yield tslib_1.__await(yield tslib_1.__await(x));
            });
          };
          const emit = function(source2) {
            return tslib_1.__asyncGenerator(this, arguments, function* () {
              yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(pump(function* (it) {
                let r = null;
                do {
                  r = it.next(yield r === null || r === void 0 ? void 0 : r.value);
                } while (!r.done);
              }(source2[Symbol.iterator]())))));
            });
          };
          const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : compat_1.isIterable(source) ? emit(source) : !compat_1.isAsyncIterable(source) ? wrap(source) : source;
          yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(pump(function(it) {
            return tslib_1.__asyncGenerator(this, arguments, function* () {
              let r = null;
              do {
                r = yield tslib_1.__await(it.next(yield yield tslib_1.__await(toArrayBufferView(ArrayCtor, r))));
              } while (!r.done);
            });
          }(buffers[Symbol.asyncIterator]())))));
          return yield tslib_1.__await(new ArrayCtor());
        });
      }
      exports.toArrayBufferViewAsyncIterator = toArrayBufferViewAsyncIterator;
      exports.toInt8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int8Array, input);
      exports.toInt16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int16Array, input);
      exports.toInt32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int32Array, input);
      exports.toUint8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8Array, input);
      exports.toUint16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint16Array, input);
      exports.toUint32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint32Array, input);
      exports.toFloat32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float32Array, input);
      exports.toFloat64ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float64Array, input);
      exports.toUint8ClampedArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
      function rebaseValueOffsets(offset, length, valueOffsets) {
        if (offset !== 0) {
          valueOffsets = valueOffsets.slice(0, length + 1);
          for (let i = -1; ++i <= length; ) {
            valueOffsets[i] += offset;
          }
        }
        return valueOffsets;
      }
      exports.rebaseValueOffsets = rebaseValueOffsets;
      function compareArrayLike(a, b) {
        let i = 0;
        const n = a.length;
        if (n !== b.length) {
          return false;
        }
        if (n > 0) {
          do {
            if (a[i] !== b[i]) {
              return false;
            }
          } while (++i < n);
        }
        return true;
      }
      exports.compareArrayLike = compareArrayLike;
    }
  });

  // node_modules/apache-arrow/io/adapters.js
  var require_adapters = __commonJS({
    "node_modules/apache-arrow/io/adapters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = require_tslib();
      var buffer_1 = require_buffer();
      exports.default = {
        fromIterable(source) {
          return pump(fromIterable(source));
        },
        fromAsyncIterable(source) {
          return pump(fromAsyncIterable(source));
        },
        fromDOMStream(source) {
          return pump(fromDOMStream(source));
        },
        fromNodeStream(stream) {
          return pump(fromNodeStream(stream));
        },
        toDOMStream(source, options) {
          throw new Error(`"toDOMStream" not available in this environment`);
        },
        toNodeStream(source, options) {
          throw new Error(`"toNodeStream" not available in this environment`);
        }
      };
      var pump = (iterator) => {
        iterator.next();
        return iterator;
      };
      function* fromIterable(source) {
        let done, threw = false;
        let buffers = [], buffer;
        let cmd, size, bufferLength = 0;
        function byteRange() {
          if (cmd === "peek") {
            return buffer_1.joinUint8Arrays(buffers, size)[0];
          }
          [buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
          return buffer;
        }
        ({ cmd, size } = yield null);
        const it = buffer_1.toUint8ArrayIterator(source)[Symbol.iterator]();
        try {
          do {
            ({ done, value: buffer } = isNaN(size - bufferLength) ? it.next(void 0) : it.next(size - bufferLength));
            if (!done && buffer.byteLength > 0) {
              buffers.push(buffer);
              bufferLength += buffer.byteLength;
            }
            if (done || size <= bufferLength) {
              do {
                ({ cmd, size } = yield byteRange());
              } while (size < bufferLength);
            }
          } while (!done);
        } catch (e) {
          (threw = true) && typeof it.throw === "function" && it.throw(e);
        } finally {
          threw === false && typeof it.return === "function" && it.return(null);
        }
        return null;
      }
      function fromAsyncIterable(source) {
        return tslib_1.__asyncGenerator(this, arguments, function* fromAsyncIterable_1() {
          let done, threw = false;
          let buffers = [], buffer;
          let cmd, size, bufferLength = 0;
          function byteRange() {
            if (cmd === "peek") {
              return buffer_1.joinUint8Arrays(buffers, size)[0];
            }
            [buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
            return buffer;
          }
          ({ cmd, size } = yield yield tslib_1.__await(null));
          const it = buffer_1.toUint8ArrayAsyncIterator(source)[Symbol.asyncIterator]();
          try {
            do {
              ({ done, value: buffer } = isNaN(size - bufferLength) ? yield tslib_1.__await(it.next(void 0)) : yield tslib_1.__await(it.next(size - bufferLength)));
              if (!done && buffer.byteLength > 0) {
                buffers.push(buffer);
                bufferLength += buffer.byteLength;
              }
              if (done || size <= bufferLength) {
                do {
                  ({ cmd, size } = yield yield tslib_1.__await(byteRange()));
                } while (size < bufferLength);
              }
            } while (!done);
          } catch (e) {
            (threw = true) && typeof it.throw === "function" && (yield tslib_1.__await(it.throw(e)));
          } finally {
            threw === false && typeof it.return === "function" && (yield tslib_1.__await(it.return(new Uint8Array(0))));
          }
          return yield tslib_1.__await(null);
        });
      }
      function fromDOMStream(source) {
        return tslib_1.__asyncGenerator(this, arguments, function* fromDOMStream_1() {
          let done = false, threw = false;
          let buffers = [], buffer;
          let cmd, size, bufferLength = 0;
          function byteRange() {
            if (cmd === "peek") {
              return buffer_1.joinUint8Arrays(buffers, size)[0];
            }
            [buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
            return buffer;
          }
          ({ cmd, size } = yield yield tslib_1.__await(null));
          const it = new AdaptiveByteReader(source);
          try {
            do {
              ({ done, value: buffer } = isNaN(size - bufferLength) ? yield tslib_1.__await(it["read"](void 0)) : yield tslib_1.__await(it["read"](size - bufferLength)));
              if (!done && buffer.byteLength > 0) {
                buffers.push(buffer_1.toUint8Array(buffer));
                bufferLength += buffer.byteLength;
              }
              if (done || size <= bufferLength) {
                do {
                  ({ cmd, size } = yield yield tslib_1.__await(byteRange()));
                } while (size < bufferLength);
              }
            } while (!done);
          } catch (e) {
            (threw = true) && (yield tslib_1.__await(it["cancel"](e)));
          } finally {
            threw === false ? yield tslib_1.__await(it["cancel"]()) : source["locked"] && it.releaseLock();
          }
          return yield tslib_1.__await(null);
        });
      }
      var AdaptiveByteReader = class {
        constructor(source) {
          this.source = source;
          this.byobReader = null;
          this.defaultReader = null;
          try {
            this.supportsBYOB = !!(this.reader = this.getBYOBReader());
          } catch (e) {
            this.supportsBYOB = !(this.reader = this.getDefaultReader());
          }
        }
        get closed() {
          return this.reader ? this.reader["closed"].catch(() => {
          }) : Promise.resolve();
        }
        releaseLock() {
          if (this.reader) {
            this.reader.releaseLock();
          }
          this.reader = this.byobReader = this.defaultReader = null;
        }
        cancel(reason) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { reader, source } = this;
            reader && (yield reader["cancel"](reason).catch(() => {
            }));
            source && (source["locked"] && this.releaseLock());
          });
        }
        read(size) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (size === 0) {
              return { done: this.reader == null, value: new Uint8Array(0) };
            }
            const result = !this.supportsBYOB || typeof size !== "number" ? yield this.getDefaultReader().read() : yield this.readFromBYOBReader(size);
            !result.done && (result.value = buffer_1.toUint8Array(result));
            return result;
          });
        }
        getDefaultReader() {
          if (this.byobReader) {
            this.releaseLock();
          }
          if (!this.defaultReader) {
            this.defaultReader = this.source["getReader"]();
            this.defaultReader["closed"].catch(() => {
            });
          }
          return this.reader = this.defaultReader;
        }
        getBYOBReader() {
          if (this.defaultReader) {
            this.releaseLock();
          }
          if (!this.byobReader) {
            this.byobReader = this.source["getReader"]({ mode: "byob" });
            this.byobReader["closed"].catch(() => {
            });
          }
          return this.reader = this.byobReader;
        }
        readFromBYOBReader(size) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield readInto(this.getBYOBReader(), new ArrayBuffer(size), 0, size);
          });
        }
      };
      function readInto(reader, buffer, offset, size) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (offset >= size) {
            return { done: false, value: new Uint8Array(buffer, 0, size) };
          }
          const { done, value } = yield reader.read(new Uint8Array(buffer, offset, size - offset));
          if ((offset += value.byteLength) < size && !done) {
            return yield readInto(reader, value.buffer, offset, size);
          }
          return { done, value: new Uint8Array(value.buffer, 0, offset) };
        });
      }
      var onEvent = (stream, event) => {
        const handler = (_) => resolve([event, _]);
        let resolve;
        return [event, handler, new Promise((r) => (resolve = r) && stream["once"](event, handler))];
      };
      function fromNodeStream(stream) {
        return tslib_1.__asyncGenerator(this, arguments, function* fromNodeStream_1() {
          const events = [];
          let event = "error";
          let done = false, err = null;
          let cmd, size, bufferLength = 0;
          let buffers = [], buffer;
          function byteRange() {
            if (cmd === "peek") {
              return buffer_1.joinUint8Arrays(buffers, size)[0];
            }
            [buffer, buffers, bufferLength] = buffer_1.joinUint8Arrays(buffers, size);
            return buffer;
          }
          ({ cmd, size } = yield yield tslib_1.__await(null));
          if (stream["isTTY"]) {
            yield yield tslib_1.__await(new Uint8Array(0));
            return yield tslib_1.__await(null);
          }
          try {
            events[0] = onEvent(stream, "end");
            events[1] = onEvent(stream, "error");
            do {
              events[2] = onEvent(stream, "readable");
              [event, err] = yield tslib_1.__await(Promise.race(events.map((x) => x[2])));
              if (event === "error") {
                break;
              }
              if (!(done = event === "end")) {
                if (!isFinite(size - bufferLength)) {
                  buffer = buffer_1.toUint8Array(stream["read"](void 0));
                } else {
                  buffer = buffer_1.toUint8Array(stream["read"](size - bufferLength));
                  if (buffer.byteLength < size - bufferLength) {
                    buffer = buffer_1.toUint8Array(stream["read"](void 0));
                  }
                }
                if (buffer.byteLength > 0) {
                  buffers.push(buffer);
                  bufferLength += buffer.byteLength;
                }
              }
              if (done || size <= bufferLength) {
                do {
                  ({ cmd, size } = yield yield tslib_1.__await(byteRange()));
                } while (size < bufferLength);
              }
            } while (!done);
          } finally {
            yield tslib_1.__await(cleanup(events, event === "error" ? err : null));
          }
          return yield tslib_1.__await(null);
          function cleanup(events2, err2) {
            buffer = buffers = null;
            return new Promise((resolve, reject) => {
              for (const [evt, fn] of events2) {
                stream["off"](evt, fn);
              }
              try {
                const destroy = stream["destroy"];
                destroy && destroy.call(stream, err2);
                err2 = void 0;
              } catch (e) {
                err2 = e || err2;
              } finally {
                err2 != null ? reject(err2) : resolve();
              }
            });
          }
        });
      }
    }
  });

  // node_modules/apache-arrow/vector.js
  var require_vector = __commonJS({
    "node_modules/apache-arrow/vector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Vector = exports.AbstractVector = void 0;
      var AbstractVector = class {
      };
      exports.AbstractVector = AbstractVector;
      exports.Vector = AbstractVector;
      AbstractVector.prototype.data = null;
    }
  });

  // node_modules/apache-arrow/fb/Schema.js
  var require_Schema = __commonJS({
    "node_modules/apache-arrow/fb/Schema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Schema = exports.Buffer = exports.Field = exports.DictionaryEncoding = exports.KeyValue = exports.Duration = exports.Interval = exports.Timestamp = exports.Time = exports.Date = exports.Decimal = exports.Bool = exports.FixedSizeBinary = exports.LargeBinary = exports.LargeUtf8 = exports.Binary = exports.Utf8 = exports.FloatingPoint = exports.Int = exports.Union = exports.Map = exports.FixedSizeList = exports.LargeList = exports.List = exports.Struct_ = exports.Null = exports.Endianness = exports.DictionaryKind = exports.Type = exports.IntervalUnit = exports.TimeUnit = exports.DateUnit = exports.Precision = exports.UnionMode = exports.Feature = exports.MetadataVersion = void 0;
      var flatbuffers_1 = require_flatbuffers();
      var MetadataVersion;
      (function(MetadataVersion2) {
        MetadataVersion2[MetadataVersion2["V1"] = 0] = "V1";
        MetadataVersion2[MetadataVersion2["V2"] = 1] = "V2";
        MetadataVersion2[MetadataVersion2["V3"] = 2] = "V3";
        MetadataVersion2[MetadataVersion2["V4"] = 3] = "V4";
        MetadataVersion2[MetadataVersion2["V5"] = 4] = "V5";
      })(MetadataVersion = exports.MetadataVersion || (exports.MetadataVersion = {}));
      var Feature;
      (function(Feature2) {
        Feature2[Feature2["UNUSED"] = 0] = "UNUSED";
        Feature2[Feature2["DICTIONARY_REPLACEMENT"] = 1] = "DICTIONARY_REPLACEMENT";
        Feature2[Feature2["COMPRESSED_BODY"] = 2] = "COMPRESSED_BODY";
      })(Feature = exports.Feature || (exports.Feature = {}));
      var UnionMode;
      (function(UnionMode2) {
        UnionMode2[UnionMode2["Sparse"] = 0] = "Sparse";
        UnionMode2[UnionMode2["Dense"] = 1] = "Dense";
      })(UnionMode = exports.UnionMode || (exports.UnionMode = {}));
      var Precision;
      (function(Precision2) {
        Precision2[Precision2["HALF"] = 0] = "HALF";
        Precision2[Precision2["SINGLE"] = 1] = "SINGLE";
        Precision2[Precision2["DOUBLE"] = 2] = "DOUBLE";
      })(Precision = exports.Precision || (exports.Precision = {}));
      var DateUnit;
      (function(DateUnit2) {
        DateUnit2[DateUnit2["DAY"] = 0] = "DAY";
        DateUnit2[DateUnit2["MILLISECOND"] = 1] = "MILLISECOND";
      })(DateUnit = exports.DateUnit || (exports.DateUnit = {}));
      var TimeUnit;
      (function(TimeUnit2) {
        TimeUnit2[TimeUnit2["SECOND"] = 0] = "SECOND";
        TimeUnit2[TimeUnit2["MILLISECOND"] = 1] = "MILLISECOND";
        TimeUnit2[TimeUnit2["MICROSECOND"] = 2] = "MICROSECOND";
        TimeUnit2[TimeUnit2["NANOSECOND"] = 3] = "NANOSECOND";
      })(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
      var IntervalUnit;
      (function(IntervalUnit2) {
        IntervalUnit2[IntervalUnit2["YEAR_MONTH"] = 0] = "YEAR_MONTH";
        IntervalUnit2[IntervalUnit2["DAY_TIME"] = 1] = "DAY_TIME";
      })(IntervalUnit = exports.IntervalUnit || (exports.IntervalUnit = {}));
      var Type;
      (function(Type2) {
        Type2[Type2["NONE"] = 0] = "NONE";
        Type2[Type2["Null"] = 1] = "Null";
        Type2[Type2["Int"] = 2] = "Int";
        Type2[Type2["FloatingPoint"] = 3] = "FloatingPoint";
        Type2[Type2["Binary"] = 4] = "Binary";
        Type2[Type2["Utf8"] = 5] = "Utf8";
        Type2[Type2["Bool"] = 6] = "Bool";
        Type2[Type2["Decimal"] = 7] = "Decimal";
        Type2[Type2["Date"] = 8] = "Date";
        Type2[Type2["Time"] = 9] = "Time";
        Type2[Type2["Timestamp"] = 10] = "Timestamp";
        Type2[Type2["Interval"] = 11] = "Interval";
        Type2[Type2["List"] = 12] = "List";
        Type2[Type2["Struct_"] = 13] = "Struct_";
        Type2[Type2["Union"] = 14] = "Union";
        Type2[Type2["FixedSizeBinary"] = 15] = "FixedSizeBinary";
        Type2[Type2["FixedSizeList"] = 16] = "FixedSizeList";
        Type2[Type2["Map"] = 17] = "Map";
        Type2[Type2["Duration"] = 18] = "Duration";
        Type2[Type2["LargeBinary"] = 19] = "LargeBinary";
        Type2[Type2["LargeUtf8"] = 20] = "LargeUtf8";
        Type2[Type2["LargeList"] = 21] = "LargeList";
      })(Type = exports.Type || (exports.Type = {}));
      var DictionaryKind;
      (function(DictionaryKind2) {
        DictionaryKind2[DictionaryKind2["DenseArray"] = 0] = "DenseArray";
      })(DictionaryKind = exports.DictionaryKind || (exports.DictionaryKind = {}));
      var Endianness;
      (function(Endianness2) {
        Endianness2[Endianness2["Little"] = 0] = "Little";
        Endianness2[Endianness2["Big"] = 1] = "Big";
      })(Endianness = exports.Endianness || (exports.Endianness = {}));
      var Null = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsNull(bb, obj) {
          return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsNull(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startNull(builder) {
          builder.startObject(0);
        }
        static endNull(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createNull(builder) {
          Null.startNull(builder);
          return Null.endNull(builder);
        }
      };
      exports.Null = Null;
      var Struct_ = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsStruct_(bb, obj) {
          return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsStruct_(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startStruct_(builder) {
          builder.startObject(0);
        }
        static endStruct_(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createStruct_(builder) {
          Struct_.startStruct_(builder);
          return Struct_.endStruct_(builder);
        }
      };
      exports.Struct_ = Struct_;
      var List = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsList(bb, obj) {
          return (obj || new List()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsList(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new List()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startList(builder) {
          builder.startObject(0);
        }
        static endList(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createList(builder) {
          List.startList(builder);
          return List.endList(builder);
        }
      };
      exports.List = List;
      var LargeList = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsLargeList(bb, obj) {
          return (obj || new LargeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsLargeList(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new LargeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startLargeList(builder) {
          builder.startObject(0);
        }
        static endLargeList(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createLargeList(builder) {
          LargeList.startLargeList(builder);
          return LargeList.endLargeList(builder);
        }
      };
      exports.LargeList = LargeList;
      var FixedSizeList = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsFixedSizeList(bb, obj) {
          return (obj || new FixedSizeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsFixedSizeList(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new FixedSizeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        listSize() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
        }
        static startFixedSizeList(builder) {
          builder.startObject(1);
        }
        static addListSize(builder, listSize) {
          builder.addFieldInt32(0, listSize, 0);
        }
        static endFixedSizeList(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createFixedSizeList(builder, listSize) {
          FixedSizeList.startFixedSizeList(builder);
          FixedSizeList.addListSize(builder, listSize);
          return FixedSizeList.endFixedSizeList(builder);
        }
      };
      exports.FixedSizeList = FixedSizeList;
      var Map2 = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsMap(bb, obj) {
          return (obj || new Map2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsMap(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Map2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        keysSorted() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
        }
        static startMap(builder) {
          builder.startObject(1);
        }
        static addKeysSorted(builder, keysSorted) {
          builder.addFieldInt8(0, +keysSorted, 0);
        }
        static endMap(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createMap(builder, keysSorted) {
          Map2.startMap(builder);
          Map2.addKeysSorted(builder, keysSorted);
          return Map2.endMap(builder);
        }
      };
      exports.Map = Map2;
      var Union = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsUnion(bb, obj) {
          return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsUnion(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        mode() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : UnionMode.Sparse;
        }
        typeIds(index) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
        }
        typeIdsLength() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        typeIdsArray() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
        }
        static startUnion(builder) {
          builder.startObject(2);
        }
        static addMode(builder, mode) {
          builder.addFieldInt16(0, mode, UnionMode.Sparse);
        }
        static addTypeIds(builder, typeIdsOffset) {
          builder.addFieldOffset(1, typeIdsOffset, 0);
        }
        static createTypeIdsVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
          }
          return builder.endVector();
        }
        static startTypeIdsVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static endUnion(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createUnion(builder, mode, typeIdsOffset) {
          Union.startUnion(builder);
          Union.addMode(builder, mode);
          Union.addTypeIds(builder, typeIdsOffset);
          return Union.endUnion(builder);
        }
      };
      exports.Union = Union;
      var Int = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsInt(bb, obj) {
          return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsInt(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        bitWidth() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
        }
        isSigned() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
        }
        static startInt(builder) {
          builder.startObject(2);
        }
        static addBitWidth(builder, bitWidth) {
          builder.addFieldInt32(0, bitWidth, 0);
        }
        static addIsSigned(builder, isSigned) {
          builder.addFieldInt8(1, +isSigned, 0);
        }
        static endInt(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createInt(builder, bitWidth, isSigned) {
          Int.startInt(builder);
          Int.addBitWidth(builder, bitWidth);
          Int.addIsSigned(builder, isSigned);
          return Int.endInt(builder);
        }
      };
      exports.Int = Int;
      var FloatingPoint = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsFloatingPoint(bb, obj) {
          return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsFloatingPoint(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        precision() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : Precision.HALF;
        }
        static startFloatingPoint(builder) {
          builder.startObject(1);
        }
        static addPrecision(builder, precision) {
          builder.addFieldInt16(0, precision, Precision.HALF);
        }
        static endFloatingPoint(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createFloatingPoint(builder, precision) {
          FloatingPoint.startFloatingPoint(builder);
          FloatingPoint.addPrecision(builder, precision);
          return FloatingPoint.endFloatingPoint(builder);
        }
      };
      exports.FloatingPoint = FloatingPoint;
      var Utf8 = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsUtf8(bb, obj) {
          return (obj || new Utf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsUtf8(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Utf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startUtf8(builder) {
          builder.startObject(0);
        }
        static endUtf8(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createUtf8(builder) {
          Utf8.startUtf8(builder);
          return Utf8.endUtf8(builder);
        }
      };
      exports.Utf8 = Utf8;
      var Binary = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsBinary(bb, obj) {
          return (obj || new Binary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsBinary(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Binary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startBinary(builder) {
          builder.startObject(0);
        }
        static endBinary(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createBinary(builder) {
          Binary.startBinary(builder);
          return Binary.endBinary(builder);
        }
      };
      exports.Binary = Binary;
      var LargeUtf8 = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsLargeUtf8(bb, obj) {
          return (obj || new LargeUtf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsLargeUtf8(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new LargeUtf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startLargeUtf8(builder) {
          builder.startObject(0);
        }
        static endLargeUtf8(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createLargeUtf8(builder) {
          LargeUtf8.startLargeUtf8(builder);
          return LargeUtf8.endLargeUtf8(builder);
        }
      };
      exports.LargeUtf8 = LargeUtf8;
      var LargeBinary = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsLargeBinary(bb, obj) {
          return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsLargeBinary(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startLargeBinary(builder) {
          builder.startObject(0);
        }
        static endLargeBinary(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createLargeBinary(builder) {
          LargeBinary.startLargeBinary(builder);
          return LargeBinary.endLargeBinary(builder);
        }
      };
      exports.LargeBinary = LargeBinary;
      var FixedSizeBinary = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsFixedSizeBinary(bb, obj) {
          return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsFixedSizeBinary(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        byteWidth() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
        }
        static startFixedSizeBinary(builder) {
          builder.startObject(1);
        }
        static addByteWidth(builder, byteWidth) {
          builder.addFieldInt32(0, byteWidth, 0);
        }
        static endFixedSizeBinary(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createFixedSizeBinary(builder, byteWidth) {
          FixedSizeBinary.startFixedSizeBinary(builder);
          FixedSizeBinary.addByteWidth(builder, byteWidth);
          return FixedSizeBinary.endFixedSizeBinary(builder);
        }
      };
      exports.FixedSizeBinary = FixedSizeBinary;
      var Bool = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsBool(bb, obj) {
          return (obj || new Bool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsBool(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Bool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static startBool(builder) {
          builder.startObject(0);
        }
        static endBool(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createBool(builder) {
          Bool.startBool(builder);
          return Bool.endBool(builder);
        }
      };
      exports.Bool = Bool;
      var Decimal = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsDecimal(bb, obj) {
          return (obj || new Decimal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsDecimal(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Decimal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        precision() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
        }
        scale() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
        }
        bitWidth() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 128;
        }
        static startDecimal(builder) {
          builder.startObject(3);
        }
        static addPrecision(builder, precision) {
          builder.addFieldInt32(0, precision, 0);
        }
        static addScale(builder, scale) {
          builder.addFieldInt32(1, scale, 0);
        }
        static addBitWidth(builder, bitWidth) {
          builder.addFieldInt32(2, bitWidth, 128);
        }
        static endDecimal(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createDecimal(builder, precision, scale, bitWidth) {
          Decimal.startDecimal(builder);
          Decimal.addPrecision(builder, precision);
          Decimal.addScale(builder, scale);
          Decimal.addBitWidth(builder, bitWidth);
          return Decimal.endDecimal(builder);
        }
      };
      exports.Decimal = Decimal;
      var Date2 = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsDate(bb, obj) {
          return (obj || new Date2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsDate(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Date2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        unit() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : DateUnit.MILLISECOND;
        }
        static startDate(builder) {
          builder.startObject(1);
        }
        static addUnit(builder, unit) {
          builder.addFieldInt16(0, unit, DateUnit.MILLISECOND);
        }
        static endDate(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createDate(builder, unit) {
          Date2.startDate(builder);
          Date2.addUnit(builder, unit);
          return Date2.endDate(builder);
        }
      };
      exports.Date = Date2;
      var Time = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsTime(bb, obj) {
          return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsTime(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        unit() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit.MILLISECOND;
        }
        bitWidth() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
        }
        static startTime(builder) {
          builder.startObject(2);
        }
        static addUnit(builder, unit) {
          builder.addFieldInt16(0, unit, TimeUnit.MILLISECOND);
        }
        static addBitWidth(builder, bitWidth) {
          builder.addFieldInt32(1, bitWidth, 32);
        }
        static endTime(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createTime(builder, unit, bitWidth) {
          Time.startTime(builder);
          Time.addUnit(builder, unit);
          Time.addBitWidth(builder, bitWidth);
          return Time.endTime(builder);
        }
      };
      exports.Time = Time;
      var Timestamp = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsTimestamp(bb, obj) {
          return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsTimestamp(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        unit() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit.SECOND;
        }
        timezone(optionalEncoding) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
        }
        static startTimestamp(builder) {
          builder.startObject(2);
        }
        static addUnit(builder, unit) {
          builder.addFieldInt16(0, unit, TimeUnit.SECOND);
        }
        static addTimezone(builder, timezoneOffset) {
          builder.addFieldOffset(1, timezoneOffset, 0);
        }
        static endTimestamp(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createTimestamp(builder, unit, timezoneOffset) {
          Timestamp.startTimestamp(builder);
          Timestamp.addUnit(builder, unit);
          Timestamp.addTimezone(builder, timezoneOffset);
          return Timestamp.endTimestamp(builder);
        }
      };
      exports.Timestamp = Timestamp;
      var Interval = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsInterval(bb, obj) {
          return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsInterval(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        unit() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : IntervalUnit.YEAR_MONTH;
        }
        static startInterval(builder) {
          builder.startObject(1);
        }
        static addUnit(builder, unit) {
          builder.addFieldInt16(0, unit, IntervalUnit.YEAR_MONTH);
        }
        static endInterval(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createInterval(builder, unit) {
          Interval.startInterval(builder);
          Interval.addUnit(builder, unit);
          return Interval.endInterval(builder);
        }
      };
      exports.Interval = Interval;
      var Duration = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsDuration(bb, obj) {
          return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsDuration(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        unit() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit.MILLISECOND;
        }
        static startDuration(builder) {
          builder.startObject(1);
        }
        static addUnit(builder, unit) {
          builder.addFieldInt16(0, unit, TimeUnit.MILLISECOND);
        }
        static endDuration(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createDuration(builder, unit) {
          Duration.startDuration(builder);
          Duration.addUnit(builder, unit);
          return Duration.endDuration(builder);
        }
      };
      exports.Duration = Duration;
      var KeyValue = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsKeyValue(bb, obj) {
          return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsKeyValue(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        key(optionalEncoding) {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
        }
        value(optionalEncoding) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
        }
        static startKeyValue(builder) {
          builder.startObject(2);
        }
        static addKey(builder, keyOffset) {
          builder.addFieldOffset(0, keyOffset, 0);
        }
        static addValue(builder, valueOffset) {
          builder.addFieldOffset(1, valueOffset, 0);
        }
        static endKeyValue(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createKeyValue(builder, keyOffset, valueOffset) {
          KeyValue.startKeyValue(builder);
          KeyValue.addKey(builder, keyOffset);
          KeyValue.addValue(builder, valueOffset);
          return KeyValue.endKeyValue(builder);
        }
      };
      exports.KeyValue = KeyValue;
      var DictionaryEncoding = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsDictionaryEncoding(bb, obj) {
          return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsDictionaryEncoding(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        id() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
        }
        indexType(obj) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? (obj || new Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
        }
        isOrdered() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
        }
        dictionaryKind() {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : DictionaryKind.DenseArray;
        }
        static startDictionaryEncoding(builder) {
          builder.startObject(4);
        }
        static addId(builder, id) {
          builder.addFieldInt64(0, id, builder.createLong(0, 0));
        }
        static addIndexType(builder, indexTypeOffset) {
          builder.addFieldOffset(1, indexTypeOffset, 0);
        }
        static addIsOrdered(builder, isOrdered) {
          builder.addFieldInt8(2, +isOrdered, 0);
        }
        static addDictionaryKind(builder, dictionaryKind) {
          builder.addFieldInt16(3, dictionaryKind, DictionaryKind.DenseArray);
        }
        static endDictionaryEncoding(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createDictionaryEncoding(builder, id, indexTypeOffset, isOrdered, dictionaryKind) {
          DictionaryEncoding.startDictionaryEncoding(builder);
          DictionaryEncoding.addId(builder, id);
          DictionaryEncoding.addIndexType(builder, indexTypeOffset);
          DictionaryEncoding.addIsOrdered(builder, isOrdered);
          DictionaryEncoding.addDictionaryKind(builder, dictionaryKind);
          return DictionaryEncoding.endDictionaryEncoding(builder);
        }
      };
      exports.DictionaryEncoding = DictionaryEncoding;
      var Field = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsField(bb, obj) {
          return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsField(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        name(optionalEncoding) {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
        }
        nullable() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
        }
        typeType() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? this.bb.readUint8(this.bb_pos + offset) : Type.NONE;
        }
        type(obj) {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
        }
        dictionary(obj) {
          const offset = this.bb.__offset(this.bb_pos, 12);
          return offset ? (obj || new DictionaryEncoding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
        }
        children(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 14);
          return offset ? (obj || new Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        childrenLength() {
          const offset = this.bb.__offset(this.bb_pos, 14);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        customMetadata(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 16);
          return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        customMetadataLength() {
          const offset = this.bb.__offset(this.bb_pos, 16);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        static startField(builder) {
          builder.startObject(7);
        }
        static addName(builder, nameOffset) {
          builder.addFieldOffset(0, nameOffset, 0);
        }
        static addNullable(builder, nullable) {
          builder.addFieldInt8(1, +nullable, 0);
        }
        static addTypeType(builder, typeType) {
          builder.addFieldInt8(2, typeType, Type.NONE);
        }
        static addType(builder, typeOffset) {
          builder.addFieldOffset(3, typeOffset, 0);
        }
        static addDictionary(builder, dictionaryOffset) {
          builder.addFieldOffset(4, dictionaryOffset, 0);
        }
        static addChildren(builder, childrenOffset) {
          builder.addFieldOffset(5, childrenOffset, 0);
        }
        static createChildrenVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
          }
          return builder.endVector();
        }
        static startChildrenVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static addCustomMetadata(builder, customMetadataOffset) {
          builder.addFieldOffset(6, customMetadataOffset, 0);
        }
        static createCustomMetadataVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
          }
          return builder.endVector();
        }
        static startCustomMetadataVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static endField(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createField(builder, nameOffset, nullable, typeType, typeOffset, dictionaryOffset, childrenOffset, customMetadataOffset) {
          Field.startField(builder);
          Field.addName(builder, nameOffset);
          Field.addNullable(builder, nullable);
          Field.addTypeType(builder, typeType);
          Field.addType(builder, typeOffset);
          Field.addDictionary(builder, dictionaryOffset);
          Field.addChildren(builder, childrenOffset);
          Field.addCustomMetadata(builder, customMetadataOffset);
          return Field.endField(builder);
        }
      };
      exports.Field = Field;
      var Buffer2 = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        offset() {
          return this.bb.readInt64(this.bb_pos);
        }
        length() {
          return this.bb.readInt64(this.bb_pos + 8);
        }
        static createBuffer(builder, offset, length) {
          builder.prep(8, 16);
          builder.writeInt64(length);
          builder.writeInt64(offset);
          return builder.offset();
        }
      };
      exports.Buffer = Buffer2;
      var Schema = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsSchema(bb, obj) {
          return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsSchema(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        endianness() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : Endianness.Little;
        }
        fields(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? (obj || new Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        fieldsLength() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        customMetadata(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        customMetadataLength() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        features(index) {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : this.bb.createLong(0, 0);
        }
        featuresLength() {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        static startSchema(builder) {
          builder.startObject(4);
        }
        static addEndianness(builder, endianness) {
          builder.addFieldInt16(0, endianness, Endianness.Little);
        }
        static addFields(builder, fieldsOffset) {
          builder.addFieldOffset(1, fieldsOffset, 0);
        }
        static createFieldsVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
          }
          return builder.endVector();
        }
        static startFieldsVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static addCustomMetadata(builder, customMetadataOffset) {
          builder.addFieldOffset(2, customMetadataOffset, 0);
        }
        static createCustomMetadataVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
          }
          return builder.endVector();
        }
        static startCustomMetadataVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static addFeatures(builder, featuresOffset) {
          builder.addFieldOffset(3, featuresOffset, 0);
        }
        static createFeaturesVector(builder, data) {
          builder.startVector(8, data.length, 8);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addInt64(data[i]);
          }
          return builder.endVector();
        }
        static startFeaturesVector(builder, numElems) {
          builder.startVector(8, numElems, 8);
        }
        static endSchema(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static finishSchemaBuffer(builder, offset) {
          builder.finish(offset);
        }
        static finishSizePrefixedSchemaBuffer(builder, offset) {
          builder.finish(offset, void 0, true);
        }
        static createSchema(builder, endianness, fieldsOffset, customMetadataOffset, featuresOffset) {
          Schema.startSchema(builder);
          Schema.addEndianness(builder, endianness);
          Schema.addFields(builder, fieldsOffset);
          Schema.addCustomMetadata(builder, customMetadataOffset);
          Schema.addFeatures(builder, featuresOffset);
          return Schema.endSchema(builder);
        }
      };
      exports.Schema = Schema;
    }
  });

  // node_modules/apache-arrow/fb/Message.js
  var require_Message = __commonJS({
    "node_modules/apache-arrow/fb/Message.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Message = exports.DictionaryBatch = exports.RecordBatch = exports.BodyCompression = exports.FieldNode = exports.MessageHeader = exports.BodyCompressionMethod = exports.CompressionType = void 0;
      var flatbuffers_1 = require_flatbuffers();
      var NS13596923344997147894 = require_Schema();
      var CompressionType;
      (function(CompressionType2) {
        CompressionType2[CompressionType2["LZ4_FRAME"] = 0] = "LZ4_FRAME";
        CompressionType2[CompressionType2["ZSTD"] = 1] = "ZSTD";
      })(CompressionType = exports.CompressionType || (exports.CompressionType = {}));
      var BodyCompressionMethod;
      (function(BodyCompressionMethod2) {
        BodyCompressionMethod2[BodyCompressionMethod2["BUFFER"] = 0] = "BUFFER";
      })(BodyCompressionMethod = exports.BodyCompressionMethod || (exports.BodyCompressionMethod = {}));
      var MessageHeader;
      (function(MessageHeader2) {
        MessageHeader2[MessageHeader2["NONE"] = 0] = "NONE";
        MessageHeader2[MessageHeader2["Schema"] = 1] = "Schema";
        MessageHeader2[MessageHeader2["DictionaryBatch"] = 2] = "DictionaryBatch";
        MessageHeader2[MessageHeader2["RecordBatch"] = 3] = "RecordBatch";
        MessageHeader2[MessageHeader2["Tensor"] = 4] = "Tensor";
        MessageHeader2[MessageHeader2["SparseTensor"] = 5] = "SparseTensor";
      })(MessageHeader = exports.MessageHeader || (exports.MessageHeader = {}));
      var FieldNode = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        length() {
          return this.bb.readInt64(this.bb_pos);
        }
        nullCount() {
          return this.bb.readInt64(this.bb_pos + 8);
        }
        static createFieldNode(builder, length, null_count) {
          builder.prep(8, 16);
          builder.writeInt64(null_count);
          builder.writeInt64(length);
          return builder.offset();
        }
      };
      exports.FieldNode = FieldNode;
      var BodyCompression = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsBodyCompression(bb, obj) {
          return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsBodyCompression(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        codec() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt8(this.bb_pos + offset) : CompressionType.LZ4_FRAME;
        }
        method() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.readInt8(this.bb_pos + offset) : BodyCompressionMethod.BUFFER;
        }
        static startBodyCompression(builder) {
          builder.startObject(2);
        }
        static addCodec(builder, codec) {
          builder.addFieldInt8(0, codec, CompressionType.LZ4_FRAME);
        }
        static addMethod(builder, method) {
          builder.addFieldInt8(1, method, BodyCompressionMethod.BUFFER);
        }
        static endBodyCompression(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createBodyCompression(builder, codec, method) {
          BodyCompression.startBodyCompression(builder);
          BodyCompression.addCodec(builder, codec);
          BodyCompression.addMethod(builder, method);
          return BodyCompression.endBodyCompression(builder);
        }
      };
      exports.BodyCompression = BodyCompression;
      var RecordBatch = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsRecordBatch(bb, obj) {
          return (obj || new RecordBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsRecordBatch(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new RecordBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        length() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
        }
        nodes(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? (obj || new FieldNode()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
        }
        nodesLength() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        buffers(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? (obj || new NS13596923344997147894.Buffer()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
        }
        buffersLength() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        compression(obj) {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? (obj || new BodyCompression()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
        }
        static startRecordBatch(builder) {
          builder.startObject(4);
        }
        static addLength(builder, length) {
          builder.addFieldInt64(0, length, builder.createLong(0, 0));
        }
        static addNodes(builder, nodesOffset) {
          builder.addFieldOffset(1, nodesOffset, 0);
        }
        static startNodesVector(builder, numElems) {
          builder.startVector(16, numElems, 8);
        }
        static addBuffers(builder, buffersOffset) {
          builder.addFieldOffset(2, buffersOffset, 0);
        }
        static startBuffersVector(builder, numElems) {
          builder.startVector(16, numElems, 8);
        }
        static addCompression(builder, compressionOffset) {
          builder.addFieldOffset(3, compressionOffset, 0);
        }
        static endRecordBatch(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createRecordBatch(builder, length, nodesOffset, buffersOffset, compressionOffset) {
          RecordBatch.startRecordBatch(builder);
          RecordBatch.addLength(builder, length);
          RecordBatch.addNodes(builder, nodesOffset);
          RecordBatch.addBuffers(builder, buffersOffset);
          RecordBatch.addCompression(builder, compressionOffset);
          return RecordBatch.endRecordBatch(builder);
        }
      };
      exports.RecordBatch = RecordBatch;
      var DictionaryBatch = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsDictionaryBatch(bb, obj) {
          return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsDictionaryBatch(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        id() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
        }
        data(obj) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? (obj || new RecordBatch()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
        }
        isDelta() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
        }
        static startDictionaryBatch(builder) {
          builder.startObject(3);
        }
        static addId(builder, id) {
          builder.addFieldInt64(0, id, builder.createLong(0, 0));
        }
        static addData(builder, dataOffset) {
          builder.addFieldOffset(1, dataOffset, 0);
        }
        static addIsDelta(builder, isDelta) {
          builder.addFieldInt8(2, +isDelta, 0);
        }
        static endDictionaryBatch(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static createDictionaryBatch(builder, id, dataOffset, isDelta) {
          DictionaryBatch.startDictionaryBatch(builder);
          DictionaryBatch.addId(builder, id);
          DictionaryBatch.addData(builder, dataOffset);
          DictionaryBatch.addIsDelta(builder, isDelta);
          return DictionaryBatch.endDictionaryBatch(builder);
        }
      };
      exports.DictionaryBatch = DictionaryBatch;
      var Message = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsMessage(bb, obj) {
          return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsMessage(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        version() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : NS13596923344997147894.MetadataVersion.V1;
        }
        headerType() {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? this.bb.readUint8(this.bb_pos + offset) : MessageHeader.NONE;
        }
        header(obj) {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
        }
        bodyLength() {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
        }
        customMetadata(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 12);
          return offset ? (obj || new NS13596923344997147894.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        customMetadataLength() {
          const offset = this.bb.__offset(this.bb_pos, 12);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        static startMessage(builder) {
          builder.startObject(5);
        }
        static addVersion(builder, version) {
          builder.addFieldInt16(0, version, NS13596923344997147894.MetadataVersion.V1);
        }
        static addHeaderType(builder, headerType) {
          builder.addFieldInt8(1, headerType, MessageHeader.NONE);
        }
        static addHeader(builder, headerOffset) {
          builder.addFieldOffset(2, headerOffset, 0);
        }
        static addBodyLength(builder, bodyLength) {
          builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
        }
        static addCustomMetadata(builder, customMetadataOffset) {
          builder.addFieldOffset(4, customMetadataOffset, 0);
        }
        static createCustomMetadataVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
          }
          return builder.endVector();
        }
        static startCustomMetadataVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static endMessage(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static finishMessageBuffer(builder, offset) {
          builder.finish(offset);
        }
        static finishSizePrefixedMessageBuffer(builder, offset) {
          builder.finish(offset, void 0, true);
        }
        static createMessage(builder, version, headerType, headerOffset, bodyLength, customMetadataOffset) {
          Message.startMessage(builder);
          Message.addVersion(builder, version);
          Message.addHeaderType(builder, headerType);
          Message.addHeader(builder, headerOffset);
          Message.addBodyLength(builder, bodyLength);
          Message.addCustomMetadata(builder, customMetadataOffset);
          return Message.endMessage(builder);
        }
      };
      exports.Message = Message;
    }
  });

  // node_modules/apache-arrow/enum.js
  var require_enum = __commonJS({
    "node_modules/apache-arrow/enum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BufferType = exports.Type = exports.MessageHeader = exports.MetadataVersion = exports.IntervalUnit = exports.UnionMode = exports.Precision = exports.TimeUnit = exports.DateUnit = void 0;
      var Schema_1 = require_Schema();
      Object.defineProperty(exports, "DateUnit", { enumerable: true, get: function() {
        return Schema_1.DateUnit;
      } });
      Object.defineProperty(exports, "TimeUnit", { enumerable: true, get: function() {
        return Schema_1.TimeUnit;
      } });
      Object.defineProperty(exports, "Precision", { enumerable: true, get: function() {
        return Schema_1.Precision;
      } });
      Object.defineProperty(exports, "UnionMode", { enumerable: true, get: function() {
        return Schema_1.UnionMode;
      } });
      Object.defineProperty(exports, "IntervalUnit", { enumerable: true, get: function() {
        return Schema_1.IntervalUnit;
      } });
      Object.defineProperty(exports, "MetadataVersion", { enumerable: true, get: function() {
        return Schema_1.MetadataVersion;
      } });
      var Message_1 = require_Message();
      Object.defineProperty(exports, "MessageHeader", { enumerable: true, get: function() {
        return Message_1.MessageHeader;
      } });
      var Type;
      (function(Type2) {
        Type2[Type2["NONE"] = 0] = "NONE";
        Type2[Type2["Null"] = 1] = "Null";
        Type2[Type2["Int"] = 2] = "Int";
        Type2[Type2["Float"] = 3] = "Float";
        Type2[Type2["Binary"] = 4] = "Binary";
        Type2[Type2["Utf8"] = 5] = "Utf8";
        Type2[Type2["Bool"] = 6] = "Bool";
        Type2[Type2["Decimal"] = 7] = "Decimal";
        Type2[Type2["Date"] = 8] = "Date";
        Type2[Type2["Time"] = 9] = "Time";
        Type2[Type2["Timestamp"] = 10] = "Timestamp";
        Type2[Type2["Interval"] = 11] = "Interval";
        Type2[Type2["List"] = 12] = "List";
        Type2[Type2["Struct"] = 13] = "Struct";
        Type2[Type2["Union"] = 14] = "Union";
        Type2[Type2["FixedSizeBinary"] = 15] = "FixedSizeBinary";
        Type2[Type2["FixedSizeList"] = 16] = "FixedSizeList";
        Type2[Type2["Map"] = 17] = "Map";
        Type2[Type2["Dictionary"] = -1] = "Dictionary";
        Type2[Type2["Int8"] = -2] = "Int8";
        Type2[Type2["Int16"] = -3] = "Int16";
        Type2[Type2["Int32"] = -4] = "Int32";
        Type2[Type2["Int64"] = -5] = "Int64";
        Type2[Type2["Uint8"] = -6] = "Uint8";
        Type2[Type2["Uint16"] = -7] = "Uint16";
        Type2[Type2["Uint32"] = -8] = "Uint32";
        Type2[Type2["Uint64"] = -9] = "Uint64";
        Type2[Type2["Float16"] = -10] = "Float16";
        Type2[Type2["Float32"] = -11] = "Float32";
        Type2[Type2["Float64"] = -12] = "Float64";
        Type2[Type2["DateDay"] = -13] = "DateDay";
        Type2[Type2["DateMillisecond"] = -14] = "DateMillisecond";
        Type2[Type2["TimestampSecond"] = -15] = "TimestampSecond";
        Type2[Type2["TimestampMillisecond"] = -16] = "TimestampMillisecond";
        Type2[Type2["TimestampMicrosecond"] = -17] = "TimestampMicrosecond";
        Type2[Type2["TimestampNanosecond"] = -18] = "TimestampNanosecond";
        Type2[Type2["TimeSecond"] = -19] = "TimeSecond";
        Type2[Type2["TimeMillisecond"] = -20] = "TimeMillisecond";
        Type2[Type2["TimeMicrosecond"] = -21] = "TimeMicrosecond";
        Type2[Type2["TimeNanosecond"] = -22] = "TimeNanosecond";
        Type2[Type2["DenseUnion"] = -23] = "DenseUnion";
        Type2[Type2["SparseUnion"] = -24] = "SparseUnion";
        Type2[Type2["IntervalDayTime"] = -25] = "IntervalDayTime";
        Type2[Type2["IntervalYearMonth"] = -26] = "IntervalYearMonth";
      })(Type = exports.Type || (exports.Type = {}));
      var BufferType;
      (function(BufferType2) {
        BufferType2[BufferType2["OFFSET"] = 0] = "OFFSET";
        BufferType2[BufferType2["DATA"] = 1] = "DATA";
        BufferType2[BufferType2["VALIDITY"] = 2] = "VALIDITY";
        BufferType2[BufferType2["TYPE"] = 3] = "TYPE";
      })(BufferType = exports.BufferType || (exports.BufferType = {}));
    }
  });

  // node_modules/apache-arrow/util/bit.js
  var require_bit = __commonJS({
    "node_modules/apache-arrow/util/bit.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.popcnt_uint32 = exports.popcnt_array = exports.popcnt_bit_range = exports.BitIterator = exports.packBools = exports.truncateBitmap = exports.setBool = exports.getBit = exports.getBool = void 0;
      function getBool(_data, _index, byte, bit) {
        return (byte & 1 << bit) !== 0;
      }
      exports.getBool = getBool;
      function getBit(_data, _index, byte, bit) {
        return (byte & 1 << bit) >> bit;
      }
      exports.getBit = getBit;
      function setBool(bytes, index, value) {
        return value ? !!(bytes[index >> 3] |= 1 << index % 8) || true : !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
      }
      exports.setBool = setBool;
      function truncateBitmap(offset, length, bitmap) {
        const alignedSize = bitmap.byteLength + 7 & ~7;
        if (offset > 0 || bitmap.byteLength < alignedSize) {
          const bytes = new Uint8Array(alignedSize);
          bytes.set(offset % 8 === 0 ? bitmap.subarray(offset >> 3) : packBools(new BitIterator(bitmap, offset, length, null, getBool)).subarray(0, alignedSize));
          return bytes;
        }
        return bitmap;
      }
      exports.truncateBitmap = truncateBitmap;
      function packBools(values) {
        const xs = [];
        let i = 0, bit = 0, byte = 0;
        for (const value of values) {
          value && (byte |= 1 << bit);
          if (++bit === 8) {
            xs[i++] = byte;
            byte = bit = 0;
          }
        }
        if (i === 0 || bit > 0) {
          xs[i++] = byte;
        }
        const b = new Uint8Array(xs.length + 7 & ~7);
        b.set(xs);
        return b;
      }
      exports.packBools = packBools;
      var BitIterator = class {
        constructor(bytes, begin, length, context, get) {
          this.bytes = bytes;
          this.length = length;
          this.context = context;
          this.get = get;
          this.bit = begin % 8;
          this.byteIndex = begin >> 3;
          this.byte = bytes[this.byteIndex++];
          this.index = 0;
        }
        next() {
          if (this.index < this.length) {
            if (this.bit === 8) {
              this.bit = 0;
              this.byte = this.bytes[this.byteIndex++];
            }
            return {
              value: this.get(this.context, this.index++, this.byte, this.bit++)
            };
          }
          return { done: true, value: null };
        }
        [Symbol.iterator]() {
          return this;
        }
      };
      exports.BitIterator = BitIterator;
      function popcnt_bit_range(data, lhs, rhs) {
        if (rhs - lhs <= 0) {
          return 0;
        }
        if (rhs - lhs < 8) {
          let sum = 0;
          for (const bit of new BitIterator(data, lhs, rhs - lhs, data, getBit)) {
            sum += bit;
          }
          return sum;
        }
        const rhsInside = rhs >> 3 << 3;
        const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
        return popcnt_bit_range(data, lhs, lhsInside) + popcnt_bit_range(data, rhsInside, rhs) + popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3);
      }
      exports.popcnt_bit_range = popcnt_bit_range;
      function popcnt_array(arr, byteOffset, byteLength) {
        let cnt = 0, pos = byteOffset | 0;
        const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
        const len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
        while (len - pos >= 4) {
          cnt += popcnt_uint32(view.getUint32(pos));
          pos += 4;
        }
        while (len - pos >= 2) {
          cnt += popcnt_uint32(view.getUint16(pos));
          pos += 2;
        }
        while (len - pos >= 1) {
          cnt += popcnt_uint32(view.getUint8(pos));
          pos += 1;
        }
        return cnt;
      }
      exports.popcnt_array = popcnt_array;
      function popcnt_uint32(uint32) {
        let i = uint32 | 0;
        i = i - (i >>> 1 & 1431655765);
        i = (i & 858993459) + (i >>> 2 & 858993459);
        return (i + (i >>> 4) & 252645135) * 16843009 >>> 24;
      }
      exports.popcnt_uint32 = popcnt_uint32;
    }
  });

  // node_modules/apache-arrow/type.js
  var require_type = __commonJS({
    "node_modules/apache-arrow/type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.strideForType = exports.Dictionary = exports.Map_ = exports.FixedSizeList = exports.FixedSizeBinary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.Decimal = exports.Bool = exports.Utf8 = exports.Binary = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Null = exports.DataType = void 0;
      var enum_1 = require_enum();
      var DataType = class {
        static isNull(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Null;
        }
        static isInt(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Int;
        }
        static isFloat(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Float;
        }
        static isBinary(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Binary;
        }
        static isUtf8(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Utf8;
        }
        static isBool(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Bool;
        }
        static isDecimal(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Decimal;
        }
        static isDate(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Date;
        }
        static isTime(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Time;
        }
        static isTimestamp(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Timestamp;
        }
        static isInterval(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Interval;
        }
        static isList(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.List;
        }
        static isStruct(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Struct;
        }
        static isUnion(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Union;
        }
        static isFixedSizeBinary(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.FixedSizeBinary;
        }
        static isFixedSizeList(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.FixedSizeList;
        }
        static isMap(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Map;
        }
        static isDictionary(x) {
          return (x === null || x === void 0 ? void 0 : x.typeId) === enum_1.Type.Dictionary;
        }
        get typeId() {
          return enum_1.Type.NONE;
        }
      };
      exports.DataType = DataType;
      DataType[Symbol.toStringTag] = ((proto) => {
        proto.children = null;
        proto.ArrayType = Array;
        return proto[Symbol.toStringTag] = "DataType";
      })(DataType.prototype);
      var Null = class extends DataType {
        toString() {
          return `Null`;
        }
        get typeId() {
          return enum_1.Type.Null;
        }
      };
      exports.Null = Null;
      Null[Symbol.toStringTag] = ((proto) => {
        return proto[Symbol.toStringTag] = "Null";
      })(Null.prototype);
      var Int_ = class extends DataType {
        constructor(isSigned, bitWidth) {
          super();
          this.isSigned = isSigned;
          this.bitWidth = bitWidth;
        }
        get typeId() {
          return enum_1.Type.Int;
        }
        get ArrayType() {
          switch (this.bitWidth) {
            case 8:
              return this.isSigned ? Int8Array : Uint8Array;
            case 16:
              return this.isSigned ? Int16Array : Uint16Array;
            case 32:
              return this.isSigned ? Int32Array : Uint32Array;
            case 64:
              return this.isSigned ? Int32Array : Uint32Array;
          }
          throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
        }
        toString() {
          return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`;
        }
      };
      exports.Int = Int_;
      Int_[Symbol.toStringTag] = ((proto) => {
        proto.isSigned = null;
        proto.bitWidth = null;
        return proto[Symbol.toStringTag] = "Int";
      })(Int_.prototype);
      var Int8 = class extends Int_ {
        constructor() {
          super(true, 8);
        }
      };
      exports.Int8 = Int8;
      var Int16 = class extends Int_ {
        constructor() {
          super(true, 16);
        }
      };
      exports.Int16 = Int16;
      var Int32 = class extends Int_ {
        constructor() {
          super(true, 32);
        }
      };
      exports.Int32 = Int32;
      var Int64 = class extends Int_ {
        constructor() {
          super(true, 64);
        }
      };
      exports.Int64 = Int64;
      var Uint8 = class extends Int_ {
        constructor() {
          super(false, 8);
        }
      };
      exports.Uint8 = Uint8;
      var Uint16 = class extends Int_ {
        constructor() {
          super(false, 16);
        }
      };
      exports.Uint16 = Uint16;
      var Uint32 = class extends Int_ {
        constructor() {
          super(false, 32);
        }
      };
      exports.Uint32 = Uint32;
      var Uint64 = class extends Int_ {
        constructor() {
          super(false, 64);
        }
      };
      exports.Uint64 = Uint64;
      Object.defineProperty(Int8.prototype, "ArrayType", { value: Int8Array });
      Object.defineProperty(Int16.prototype, "ArrayType", { value: Int16Array });
      Object.defineProperty(Int32.prototype, "ArrayType", { value: Int32Array });
      Object.defineProperty(Int64.prototype, "ArrayType", { value: Int32Array });
      Object.defineProperty(Uint8.prototype, "ArrayType", { value: Uint8Array });
      Object.defineProperty(Uint16.prototype, "ArrayType", { value: Uint16Array });
      Object.defineProperty(Uint32.prototype, "ArrayType", { value: Uint32Array });
      Object.defineProperty(Uint64.prototype, "ArrayType", { value: Uint32Array });
      var Float = class extends DataType {
        constructor(precision) {
          super();
          this.precision = precision;
        }
        get typeId() {
          return enum_1.Type.Float;
        }
        get ArrayType() {
          switch (this.precision) {
            case enum_1.Precision.HALF:
              return Uint16Array;
            case enum_1.Precision.SINGLE:
              return Float32Array;
            case enum_1.Precision.DOUBLE:
              return Float64Array;
          }
          throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
        }
        toString() {
          return `Float${this.precision << 5 || 16}`;
        }
      };
      exports.Float = Float;
      Float[Symbol.toStringTag] = ((proto) => {
        proto.precision = null;
        return proto[Symbol.toStringTag] = "Float";
      })(Float.prototype);
      var Float16 = class extends Float {
        constructor() {
          super(enum_1.Precision.HALF);
        }
      };
      exports.Float16 = Float16;
      var Float32 = class extends Float {
        constructor() {
          super(enum_1.Precision.SINGLE);
        }
      };
      exports.Float32 = Float32;
      var Float64 = class extends Float {
        constructor() {
          super(enum_1.Precision.DOUBLE);
        }
      };
      exports.Float64 = Float64;
      Object.defineProperty(Float16.prototype, "ArrayType", { value: Uint16Array });
      Object.defineProperty(Float32.prototype, "ArrayType", { value: Float32Array });
      Object.defineProperty(Float64.prototype, "ArrayType", { value: Float64Array });
      var Binary = class extends DataType {
        constructor() {
          super();
        }
        get typeId() {
          return enum_1.Type.Binary;
        }
        toString() {
          return `Binary`;
        }
      };
      exports.Binary = Binary;
      Binary[Symbol.toStringTag] = ((proto) => {
        proto.ArrayType = Uint8Array;
        return proto[Symbol.toStringTag] = "Binary";
      })(Binary.prototype);
      var Utf8 = class extends DataType {
        constructor() {
          super();
        }
        get typeId() {
          return enum_1.Type.Utf8;
        }
        toString() {
          return `Utf8`;
        }
      };
      exports.Utf8 = Utf8;
      Utf8[Symbol.toStringTag] = ((proto) => {
        proto.ArrayType = Uint8Array;
        return proto[Symbol.toStringTag] = "Utf8";
      })(Utf8.prototype);
      var Bool = class extends DataType {
        constructor() {
          super();
        }
        get typeId() {
          return enum_1.Type.Bool;
        }
        toString() {
          return `Bool`;
        }
      };
      exports.Bool = Bool;
      Bool[Symbol.toStringTag] = ((proto) => {
        proto.ArrayType = Uint8Array;
        return proto[Symbol.toStringTag] = "Bool";
      })(Bool.prototype);
      var Decimal = class extends DataType {
        constructor(scale, precision) {
          super();
          this.scale = scale;
          this.precision = precision;
        }
        get typeId() {
          return enum_1.Type.Decimal;
        }
        toString() {
          return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`;
        }
      };
      exports.Decimal = Decimal;
      Decimal[Symbol.toStringTag] = ((proto) => {
        proto.scale = null;
        proto.precision = null;
        proto.ArrayType = Uint32Array;
        return proto[Symbol.toStringTag] = "Decimal";
      })(Decimal.prototype);
      var Date_ = class extends DataType {
        constructor(unit) {
          super();
          this.unit = unit;
        }
        get typeId() {
          return enum_1.Type.Date;
        }
        toString() {
          return `Date${(this.unit + 1) * 32}<${enum_1.DateUnit[this.unit]}>`;
        }
      };
      exports.Date_ = Date_;
      Date_[Symbol.toStringTag] = ((proto) => {
        proto.unit = null;
        proto.ArrayType = Int32Array;
        return proto[Symbol.toStringTag] = "Date";
      })(Date_.prototype);
      var DateDay = class extends Date_ {
        constructor() {
          super(enum_1.DateUnit.DAY);
        }
      };
      exports.DateDay = DateDay;
      var DateMillisecond = class extends Date_ {
        constructor() {
          super(enum_1.DateUnit.MILLISECOND);
        }
      };
      exports.DateMillisecond = DateMillisecond;
      var Time_ = class extends DataType {
        constructor(unit, bitWidth) {
          super();
          this.unit = unit;
          this.bitWidth = bitWidth;
        }
        get typeId() {
          return enum_1.Type.Time;
        }
        toString() {
          return `Time${this.bitWidth}<${enum_1.TimeUnit[this.unit]}>`;
        }
      };
      exports.Time = Time_;
      Time_[Symbol.toStringTag] = ((proto) => {
        proto.unit = null;
        proto.bitWidth = null;
        proto.ArrayType = Int32Array;
        return proto[Symbol.toStringTag] = "Time";
      })(Time_.prototype);
      var TimeSecond = class extends Time_ {
        constructor() {
          super(enum_1.TimeUnit.SECOND, 32);
        }
      };
      exports.TimeSecond = TimeSecond;
      var TimeMillisecond = class extends Time_ {
        constructor() {
          super(enum_1.TimeUnit.MILLISECOND, 32);
        }
      };
      exports.TimeMillisecond = TimeMillisecond;
      var TimeMicrosecond = class extends Time_ {
        constructor() {
          super(enum_1.TimeUnit.MICROSECOND, 64);
        }
      };
      exports.TimeMicrosecond = TimeMicrosecond;
      var TimeNanosecond = class extends Time_ {
        constructor() {
          super(enum_1.TimeUnit.NANOSECOND, 64);
        }
      };
      exports.TimeNanosecond = TimeNanosecond;
      var Timestamp_ = class extends DataType {
        constructor(unit, timezone) {
          super();
          this.unit = unit;
          this.timezone = timezone;
        }
        get typeId() {
          return enum_1.Type.Timestamp;
        }
        toString() {
          return `Timestamp<${enum_1.TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`;
        }
      };
      exports.Timestamp = Timestamp_;
      Timestamp_[Symbol.toStringTag] = ((proto) => {
        proto.unit = null;
        proto.timezone = null;
        proto.ArrayType = Int32Array;
        return proto[Symbol.toStringTag] = "Timestamp";
      })(Timestamp_.prototype);
      var TimestampSecond = class extends Timestamp_ {
        constructor(timezone) {
          super(enum_1.TimeUnit.SECOND, timezone);
        }
      };
      exports.TimestampSecond = TimestampSecond;
      var TimestampMillisecond = class extends Timestamp_ {
        constructor(timezone) {
          super(enum_1.TimeUnit.MILLISECOND, timezone);
        }
      };
      exports.TimestampMillisecond = TimestampMillisecond;
      var TimestampMicrosecond = class extends Timestamp_ {
        constructor(timezone) {
          super(enum_1.TimeUnit.MICROSECOND, timezone);
        }
      };
      exports.TimestampMicrosecond = TimestampMicrosecond;
      var TimestampNanosecond = class extends Timestamp_ {
        constructor(timezone) {
          super(enum_1.TimeUnit.NANOSECOND, timezone);
        }
      };
      exports.TimestampNanosecond = TimestampNanosecond;
      var Interval_ = class extends DataType {
        constructor(unit) {
          super();
          this.unit = unit;
        }
        get typeId() {
          return enum_1.Type.Interval;
        }
        toString() {
          return `Interval<${enum_1.IntervalUnit[this.unit]}>`;
        }
      };
      exports.Interval = Interval_;
      Interval_[Symbol.toStringTag] = ((proto) => {
        proto.unit = null;
        proto.ArrayType = Int32Array;
        return proto[Symbol.toStringTag] = "Interval";
      })(Interval_.prototype);
      var IntervalDayTime = class extends Interval_ {
        constructor() {
          super(enum_1.IntervalUnit.DAY_TIME);
        }
      };
      exports.IntervalDayTime = IntervalDayTime;
      var IntervalYearMonth = class extends Interval_ {
        constructor() {
          super(enum_1.IntervalUnit.YEAR_MONTH);
        }
      };
      exports.IntervalYearMonth = IntervalYearMonth;
      var List = class extends DataType {
        constructor(child) {
          super();
          this.children = [child];
        }
        get typeId() {
          return enum_1.Type.List;
        }
        toString() {
          return `List<${this.valueType}>`;
        }
        get valueType() {
          return this.children[0].type;
        }
        get valueField() {
          return this.children[0];
        }
        get ArrayType() {
          return this.valueType.ArrayType;
        }
      };
      exports.List = List;
      List[Symbol.toStringTag] = ((proto) => {
        proto.children = null;
        return proto[Symbol.toStringTag] = "List";
      })(List.prototype);
      var Struct = class extends DataType {
        constructor(children) {
          super();
          this.children = children;
        }
        get typeId() {
          return enum_1.Type.Struct;
        }
        toString() {
          return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
        }
      };
      exports.Struct = Struct;
      Struct[Symbol.toStringTag] = ((proto) => {
        proto.children = null;
        return proto[Symbol.toStringTag] = "Struct";
      })(Struct.prototype);
      var Union_ = class extends DataType {
        constructor(mode, typeIds, children) {
          super();
          this.mode = mode;
          this.children = children;
          this.typeIds = typeIds = Int32Array.from(typeIds);
          this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => {
            return (typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex || typeIdToChildIndex;
          }, Object.create(null));
        }
        get typeId() {
          return enum_1.Type.Union;
        }
        toString() {
          return `${this[Symbol.toStringTag]}<${this.children.map((x) => `${x.type}`).join(` | `)}>`;
        }
      };
      exports.Union = Union_;
      Union_[Symbol.toStringTag] = ((proto) => {
        proto.mode = null;
        proto.typeIds = null;
        proto.children = null;
        proto.typeIdToChildIndex = null;
        proto.ArrayType = Int8Array;
        return proto[Symbol.toStringTag] = "Union";
      })(Union_.prototype);
      var DenseUnion = class extends Union_ {
        constructor(typeIds, children) {
          super(enum_1.UnionMode.Dense, typeIds, children);
        }
      };
      exports.DenseUnion = DenseUnion;
      var SparseUnion = class extends Union_ {
        constructor(typeIds, children) {
          super(enum_1.UnionMode.Sparse, typeIds, children);
        }
      };
      exports.SparseUnion = SparseUnion;
      var FixedSizeBinary = class extends DataType {
        constructor(byteWidth) {
          super();
          this.byteWidth = byteWidth;
        }
        get typeId() {
          return enum_1.Type.FixedSizeBinary;
        }
        toString() {
          return `FixedSizeBinary[${this.byteWidth}]`;
        }
      };
      exports.FixedSizeBinary = FixedSizeBinary;
      FixedSizeBinary[Symbol.toStringTag] = ((proto) => {
        proto.byteWidth = null;
        proto.ArrayType = Uint8Array;
        return proto[Symbol.toStringTag] = "FixedSizeBinary";
      })(FixedSizeBinary.prototype);
      var FixedSizeList = class extends DataType {
        constructor(listSize, child) {
          super();
          this.listSize = listSize;
          this.children = [child];
        }
        get typeId() {
          return enum_1.Type.FixedSizeList;
        }
        get valueType() {
          return this.children[0].type;
        }
        get valueField() {
          return this.children[0];
        }
        get ArrayType() {
          return this.valueType.ArrayType;
        }
        toString() {
          return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
        }
      };
      exports.FixedSizeList = FixedSizeList;
      FixedSizeList[Symbol.toStringTag] = ((proto) => {
        proto.children = null;
        proto.listSize = null;
        return proto[Symbol.toStringTag] = "FixedSizeList";
      })(FixedSizeList.prototype);
      var Map_ = class extends DataType {
        constructor(child, keysSorted = false) {
          super();
          this.children = [child];
          this.keysSorted = keysSorted;
        }
        get typeId() {
          return enum_1.Type.Map;
        }
        get keyType() {
          return this.children[0].type.children[0].type;
        }
        get valueType() {
          return this.children[0].type.children[1].type;
        }
        toString() {
          return `Map<{${this.children[0].type.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
        }
      };
      exports.Map_ = Map_;
      Map_[Symbol.toStringTag] = ((proto) => {
        proto.children = null;
        proto.keysSorted = null;
        return proto[Symbol.toStringTag] = "Map_";
      })(Map_.prototype);
      var getId = ((atomicDictionaryId) => () => ++atomicDictionaryId)(-1);
      var Dictionary = class extends DataType {
        constructor(dictionary, indices, id, isOrdered) {
          super();
          this.indices = indices;
          this.dictionary = dictionary;
          this.isOrdered = isOrdered || false;
          this.id = id == null ? getId() : typeof id === "number" ? id : id.low;
        }
        get typeId() {
          return enum_1.Type.Dictionary;
        }
        get children() {
          return this.dictionary.children;
        }
        get valueType() {
          return this.dictionary;
        }
        get ArrayType() {
          return this.dictionary.ArrayType;
        }
        toString() {
          return `Dictionary<${this.indices}, ${this.dictionary}>`;
        }
      };
      exports.Dictionary = Dictionary;
      Dictionary[Symbol.toStringTag] = ((proto) => {
        proto.id = null;
        proto.indices = null;
        proto.isOrdered = null;
        proto.dictionary = null;
        return proto[Symbol.toStringTag] = "Dictionary";
      })(Dictionary.prototype);
      function strideForType(type) {
        const t = type;
        switch (type.typeId) {
          case enum_1.Type.Decimal:
            return 4;
          case enum_1.Type.Timestamp:
            return 2;
          case enum_1.Type.Date:
            return 1 + t.unit;
          case enum_1.Type.Interval:
            return 1 + t.unit;
          case enum_1.Type.Int:
            return 1 + +(t.bitWidth > 32);
          case enum_1.Type.Time:
            return 1 + +(t.bitWidth > 32);
          case enum_1.Type.FixedSizeList:
            return t.listSize;
          case enum_1.Type.FixedSizeBinary:
            return t.byteWidth;
          default:
            return 1;
        }
      }
      exports.strideForType = strideForType;
    }
  });

  // node_modules/apache-arrow/data.js
  var require_data = __commonJS({
    "node_modules/apache-arrow/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Data = exports.kUnknownNullCount = void 0;
      var bit_1 = require_bit();
      var bit_2 = require_bit();
      var enum_1 = require_enum();
      var type_1 = require_type();
      var buffer_1 = require_buffer();
      exports.kUnknownNullCount = -1;
      var Data = class {
        constructor(type, offset, length, nullCount, buffers, childData, dictionary) {
          this.type = type;
          this.dictionary = dictionary;
          this.offset = Math.floor(Math.max(offset || 0, 0));
          this.length = Math.floor(Math.max(length || 0, 0));
          this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
          this.childData = (childData || []).map((x) => x instanceof Data ? x : x.data);
          let buffer;
          if (buffers instanceof Data) {
            this.stride = buffers.stride;
            this.values = buffers.values;
            this.typeIds = buffers.typeIds;
            this.nullBitmap = buffers.nullBitmap;
            this.valueOffsets = buffers.valueOffsets;
          } else {
            this.stride = type_1.strideForType(type);
            if (buffers) {
              (buffer = buffers[0]) && (this.valueOffsets = buffer);
              (buffer = buffers[1]) && (this.values = buffer);
              (buffer = buffers[2]) && (this.nullBitmap = buffer);
              (buffer = buffers[3]) && (this.typeIds = buffer);
            }
          }
        }
        get typeId() {
          return this.type.typeId;
        }
        get ArrayType() {
          return this.type.ArrayType;
        }
        get buffers() {
          return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
        }
        get byteLength() {
          let byteLength = 0;
          const { valueOffsets, values, nullBitmap, typeIds } = this;
          valueOffsets && (byteLength += valueOffsets.byteLength);
          values && (byteLength += values.byteLength);
          nullBitmap && (byteLength += nullBitmap.byteLength);
          typeIds && (byteLength += typeIds.byteLength);
          return this.childData.reduce((byteLength2, child) => byteLength2 + child.byteLength, byteLength);
        }
        get nullCount() {
          let nullCount = this._nullCount;
          let nullBitmap;
          if (nullCount <= exports.kUnknownNullCount && (nullBitmap = this.nullBitmap)) {
            this._nullCount = nullCount = this.length - bit_2.popcnt_bit_range(nullBitmap, this.offset, this.offset + this.length);
          }
          return nullCount;
        }
        clone(type, offset = this.offset, length = this.length, nullCount = this._nullCount, buffers = this, childData = this.childData) {
          return new Data(type, offset, length, nullCount, buffers, childData, this.dictionary);
        }
        slice(offset, length) {
          const { stride, typeId, childData } = this;
          const nullCount = +(this._nullCount === 0) - 1;
          const childStride = typeId === 16 ? stride : 1;
          const buffers = this._sliceBuffers(offset, length, stride, typeId);
          return this.clone(this.type, this.offset + offset, length, nullCount, buffers, !childData.length || this.valueOffsets ? childData : this._sliceChildren(childData, childStride * offset, childStride * length));
        }
        _changeLengthAndBackfillNullBitmap(newLength) {
          if (this.typeId === enum_1.Type.Null) {
            return this.clone(this.type, 0, newLength, 0);
          }
          const { length, nullCount } = this;
          const bitmap = new Uint8Array((newLength + 63 & ~63) >> 3).fill(255, 0, length >> 3);
          bitmap[length >> 3] = (1 << length - (length & ~7)) - 1;
          if (nullCount > 0) {
            bitmap.set(bit_1.truncateBitmap(this.offset, length, this.nullBitmap), 0);
          }
          const buffers = this.buffers;
          buffers[enum_1.BufferType.VALIDITY] = bitmap;
          return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
        }
        _sliceBuffers(offset, length, stride, typeId) {
          let arr;
          const { buffers } = this;
          (arr = buffers[enum_1.BufferType.TYPE]) && (buffers[enum_1.BufferType.TYPE] = arr.subarray(offset, offset + length));
          (arr = buffers[enum_1.BufferType.OFFSET]) && (buffers[enum_1.BufferType.OFFSET] = arr.subarray(offset, offset + length + 1)) || (arr = buffers[enum_1.BufferType.DATA]) && (buffers[enum_1.BufferType.DATA] = typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length)));
          return buffers;
        }
        _sliceChildren(childData, offset, length) {
          return childData.map((child) => child.slice(offset, length));
        }
        static new(type, offset, length, nullCount, buffers, childData, dictionary) {
          if (buffers instanceof Data) {
            buffers = buffers.buffers;
          } else if (!buffers) {
            buffers = [];
          }
          switch (type.typeId) {
            case enum_1.Type.Null:
              return Data.Null(type, offset, length);
            case enum_1.Type.Int:
              return Data.Int(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Dictionary:
              return Data.Dictionary(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || [], dictionary);
            case enum_1.Type.Float:
              return Data.Float(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Bool:
              return Data.Bool(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Decimal:
              return Data.Decimal(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Date:
              return Data.Date(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Time:
              return Data.Time(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Timestamp:
              return Data.Timestamp(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Interval:
              return Data.Interval(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.FixedSizeBinary:
              return Data.FixedSizeBinary(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Binary:
              return Data.Binary(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.OFFSET] || [], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.Utf8:
              return Data.Utf8(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.OFFSET] || [], buffers[enum_1.BufferType.DATA] || []);
            case enum_1.Type.List:
              return Data.List(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.OFFSET] || [], (childData || [])[0]);
            case enum_1.Type.FixedSizeList:
              return Data.FixedSizeList(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], (childData || [])[0]);
            case enum_1.Type.Struct:
              return Data.Struct(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], childData || []);
            case enum_1.Type.Map:
              return Data.Map(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.OFFSET] || [], (childData || [])[0]);
            case enum_1.Type.Union:
              return Data.Union(type, offset, length, nullCount || 0, buffers[enum_1.BufferType.VALIDITY], buffers[enum_1.BufferType.TYPE] || [], buffers[enum_1.BufferType.OFFSET] || childData, childData);
          }
          throw new Error(`Unrecognized typeId ${type.typeId}`);
        }
        static Null(type, offset, length) {
          return new Data(type, offset, length, 0);
        }
        static Int(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Dictionary(type, offset, length, nullCount, nullBitmap, data, dictionary) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.indices.ArrayType, data), buffer_1.toUint8Array(nullBitmap)], [], dictionary);
        }
        static Float(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Bool(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Decimal(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Date(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Time(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Timestamp(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Interval(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static FixedSizeBinary(type, offset, length, nullCount, nullBitmap, data) {
          return new Data(type, offset, length, nullCount, [void 0, buffer_1.toArrayBufferView(type.ArrayType, data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Binary(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
          return new Data(type, offset, length, nullCount, [buffer_1.toInt32Array(valueOffsets), buffer_1.toUint8Array(data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static Utf8(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
          return new Data(type, offset, length, nullCount, [buffer_1.toInt32Array(valueOffsets), buffer_1.toUint8Array(data), buffer_1.toUint8Array(nullBitmap)]);
        }
        static List(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
          return new Data(type, offset, length, nullCount, [buffer_1.toInt32Array(valueOffsets), void 0, buffer_1.toUint8Array(nullBitmap)], child ? [child] : []);
        }
        static FixedSizeList(type, offset, length, nullCount, nullBitmap, child) {
          return new Data(type, offset, length, nullCount, [void 0, void 0, buffer_1.toUint8Array(nullBitmap)], child ? [child] : []);
        }
        static Struct(type, offset, length, nullCount, nullBitmap, children) {
          return new Data(type, offset, length, nullCount, [void 0, void 0, buffer_1.toUint8Array(nullBitmap)], children);
        }
        static Map(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
          return new Data(type, offset, length, nullCount, [buffer_1.toInt32Array(valueOffsets), void 0, buffer_1.toUint8Array(nullBitmap)], child ? [child] : []);
        }
        static Union(type, offset, length, nullCount, nullBitmap, typeIds, valueOffsetsOrChildren, children) {
          const buffers = [
            void 0,
            void 0,
            buffer_1.toUint8Array(nullBitmap),
            buffer_1.toArrayBufferView(type.ArrayType, typeIds)
          ];
          if (type.mode === enum_1.UnionMode.Sparse) {
            return new Data(type, offset, length, nullCount, buffers, valueOffsetsOrChildren);
          }
          buffers[enum_1.BufferType.OFFSET] = buffer_1.toInt32Array(valueOffsetsOrChildren);
          return new Data(type, offset, length, nullCount, buffers, children);
        }
      };
      exports.Data = Data;
      Data.prototype.childData = Object.freeze([]);
    }
  });

  // node_modules/apache-arrow/util/pretty.js
  var require_pretty = __commonJS({
    "node_modules/apache-arrow/util/pretty.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.valueToString = void 0;
      var undf = void 0;
      function valueToString(x) {
        if (x === null) {
          return "null";
        }
        if (x === undf) {
          return "undefined";
        }
        switch (typeof x) {
          case "number":
            return `${x}`;
          case "bigint":
            return `${x}`;
          case "string":
            return `"${x}"`;
        }
        if (typeof x[Symbol.toPrimitive] === "function") {
          return x[Symbol.toPrimitive]("string");
        }
        return ArrayBuffer.isView(x) ? `[${x}]` : JSON.stringify(x);
      }
      exports.valueToString = valueToString;
    }
  });

  // node_modules/apache-arrow/builder/valid.js
  var require_valid = __commonJS({
    "node_modules/apache-arrow/builder/valid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createIsValidFunction = void 0;
      var pretty_1 = require_pretty();
      var compat_1 = require_compat();
      function createIsValidFunction(nullValues) {
        if (!nullValues || nullValues.length <= 0) {
          return function isValid(value) {
            return true;
          };
        }
        let fnBody = "";
        const noNaNs = nullValues.filter((x) => x === x);
        if (noNaNs.length > 0) {
          fnBody = `
    switch (x) {${noNaNs.map((x) => `
        case ${valueToCase(x)}:`).join("")}
            return false;
    }`;
        }
        if (nullValues.length !== noNaNs.length) {
          fnBody = `if (x !== x) return false;
${fnBody}`;
        }
        return new Function(`x`, `${fnBody}
return true;`);
      }
      exports.createIsValidFunction = createIsValidFunction;
      function valueToCase(x) {
        if (typeof x !== "bigint") {
          return pretty_1.valueToString(x);
        } else if (compat_1.BigIntAvailable) {
          return `${pretty_1.valueToString(x)}n`;
        }
        return `"${pretty_1.valueToString(x)}"`;
      }
    }
  });

  // node_modules/apache-arrow/builder/buffer.js
  var require_buffer2 = __commonJS({
    "node_modules/apache-arrow/builder/buffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WideBufferBuilder = exports.OffsetsBufferBuilder = exports.BitmapBufferBuilder = exports.DataBufferBuilder = exports.BufferBuilder = void 0;
      var buffer_1 = require_buffer();
      var compat_1 = require_compat();
      var roundLengthUpToNearest64Bytes = (len, BPE) => (len * BPE + 63 & ~63 || 64) / BPE;
      var sliceOrExtendArray = (arr, len = 0) => arr.length >= len ? arr.subarray(0, len) : buffer_1.memcpy(new arr.constructor(len), arr, 0);
      var BufferBuilder = class {
        constructor(buffer, stride = 1) {
          this.buffer = buffer;
          this.stride = stride;
          this.BYTES_PER_ELEMENT = buffer.BYTES_PER_ELEMENT;
          this.ArrayType = buffer.constructor;
          this._resize(this.length = buffer.length / stride | 0);
        }
        get byteLength() {
          return this.length * this.stride * this.BYTES_PER_ELEMENT | 0;
        }
        get reservedLength() {
          return this.buffer.length / this.stride;
        }
        get reservedByteLength() {
          return this.buffer.byteLength;
        }
        set(index, value) {
          return this;
        }
        append(value) {
          return this.set(this.length, value);
        }
        reserve(extra) {
          if (extra > 0) {
            this.length += extra;
            const stride = this.stride;
            const length = this.length * stride;
            const reserved = this.buffer.length;
            if (length >= reserved) {
              this._resize(reserved === 0 ? roundLengthUpToNearest64Bytes(length * 1, this.BYTES_PER_ELEMENT) : roundLengthUpToNearest64Bytes(length * 2, this.BYTES_PER_ELEMENT));
            }
          }
          return this;
        }
        flush(length = this.length) {
          length = roundLengthUpToNearest64Bytes(length * this.stride, this.BYTES_PER_ELEMENT);
          const array = sliceOrExtendArray(this.buffer, length);
          this.clear();
          return array;
        }
        clear() {
          this.length = 0;
          this._resize(0);
          return this;
        }
        _resize(newLength) {
          return this.buffer = buffer_1.memcpy(new this.ArrayType(newLength), this.buffer);
        }
      };
      exports.BufferBuilder = BufferBuilder;
      BufferBuilder.prototype.offset = 0;
      var DataBufferBuilder = class extends BufferBuilder {
        last() {
          return this.get(this.length - 1);
        }
        get(index) {
          return this.buffer[index];
        }
        set(index, value) {
          this.reserve(index - this.length + 1);
          this.buffer[index * this.stride] = value;
          return this;
        }
      };
      exports.DataBufferBuilder = DataBufferBuilder;
      var BitmapBufferBuilder = class extends DataBufferBuilder {
        constructor(data = new Uint8Array(0)) {
          super(data, 1 / 8);
          this.numValid = 0;
        }
        get numInvalid() {
          return this.length - this.numValid;
        }
        get(idx) {
          return this.buffer[idx >> 3] >> idx % 8 & 1;
        }
        set(idx, val) {
          const { buffer } = this.reserve(idx - this.length + 1);
          const byte = idx >> 3, bit = idx % 8, cur = buffer[byte] >> bit & 1;
          val ? cur === 0 && (buffer[byte] |= 1 << bit, ++this.numValid) : cur === 1 && (buffer[byte] &= ~(1 << bit), --this.numValid);
          return this;
        }
        clear() {
          this.numValid = 0;
          return super.clear();
        }
      };
      exports.BitmapBufferBuilder = BitmapBufferBuilder;
      var OffsetsBufferBuilder = class extends DataBufferBuilder {
        constructor(data = new Int32Array(1)) {
          super(data, 1);
        }
        append(value) {
          return this.set(this.length - 1, value);
        }
        set(index, value) {
          const offset = this.length - 1;
          const buffer = this.reserve(index - offset + 1).buffer;
          if (offset < index++) {
            buffer.fill(buffer[offset], offset, index);
          }
          buffer[index] = buffer[index - 1] + value;
          return this;
        }
        flush(length = this.length - 1) {
          if (length > this.length) {
            this.set(length - 1, 0);
          }
          return super.flush(length + 1);
        }
      };
      exports.OffsetsBufferBuilder = OffsetsBufferBuilder;
      var WideBufferBuilder = class extends BufferBuilder {
        get ArrayType64() {
          return this._ArrayType64 || (this._ArrayType64 = this.buffer instanceof Int32Array ? compat_1.BigInt64Array : compat_1.BigUint64Array);
        }
        set(index, value) {
          this.reserve(index - this.length + 1);
          switch (typeof value) {
            case "bigint":
              this.buffer64[index] = value;
              break;
            case "number":
              this.buffer[index * this.stride] = value;
              break;
            default:
              this.buffer.set(value, index * this.stride);
          }
          return this;
        }
        _resize(newLength) {
          const data = super._resize(newLength);
          const length = data.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
          if (compat_1.BigIntAvailable) {
            this.buffer64 = new this.ArrayType64(data.buffer, data.byteOffset, length);
          }
          return data;
        }
      };
      exports.WideBufferBuilder = WideBufferBuilder;
    }
  });

  // node_modules/apache-arrow/builder.js
  var require_builder = __commonJS({
    "node_modules/apache-arrow/builder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.VariableWidthBuilder = exports.FixedWidthBuilder = exports.Builder = void 0;
      var tslib_1 = require_tslib();
      var vector_1 = require_vector();
      var enum_1 = require_enum();
      var data_1 = require_data();
      var valid_1 = require_valid();
      var buffer_1 = require_buffer2();
      var type_1 = require_type();
      var Builder2 = class {
        constructor({ "type": type, "nullValues": nulls }) {
          this.length = 0;
          this.finished = false;
          this.type = type;
          this.children = [];
          this.nullValues = nulls;
          this.stride = type_1.strideForType(type);
          this._nulls = new buffer_1.BitmapBufferBuilder();
          if (nulls && nulls.length > 0) {
            this._isValid = valid_1.createIsValidFunction(nulls);
          }
        }
        static new(options) {
        }
        static throughNode(options) {
          throw new Error(`"throughNode" not available in this environment`);
        }
        static throughDOM(options) {
          throw new Error(`"throughDOM" not available in this environment`);
        }
        static throughIterable(options) {
          return throughIterable(options);
        }
        static throughAsyncIterable(options) {
          return throughAsyncIterable(options);
        }
        toVector() {
          return vector_1.Vector.new(this.flush());
        }
        get ArrayType() {
          return this.type.ArrayType;
        }
        get nullCount() {
          return this._nulls.numInvalid;
        }
        get numChildren() {
          return this.children.length;
        }
        get byteLength() {
          let size = 0;
          this._offsets && (size += this._offsets.byteLength);
          this._values && (size += this._values.byteLength);
          this._nulls && (size += this._nulls.byteLength);
          this._typeIds && (size += this._typeIds.byteLength);
          return this.children.reduce((size2, child) => size2 + child.byteLength, size);
        }
        get reservedLength() {
          return this._nulls.reservedLength;
        }
        get reservedByteLength() {
          let size = 0;
          this._offsets && (size += this._offsets.reservedByteLength);
          this._values && (size += this._values.reservedByteLength);
          this._nulls && (size += this._nulls.reservedByteLength);
          this._typeIds && (size += this._typeIds.reservedByteLength);
          return this.children.reduce((size2, child) => size2 + child.reservedByteLength, size);
        }
        get valueOffsets() {
          return this._offsets ? this._offsets.buffer : null;
        }
        get values() {
          return this._values ? this._values.buffer : null;
        }
        get nullBitmap() {
          return this._nulls ? this._nulls.buffer : null;
        }
        get typeIds() {
          return this._typeIds ? this._typeIds.buffer : null;
        }
        append(value) {
          return this.set(this.length, value);
        }
        isValid(value) {
          return this._isValid(value);
        }
        set(index, value) {
          if (this.setValid(index, this.isValid(value))) {
            this.setValue(index, value);
          }
          return this;
        }
        setValue(index, value) {
          this._setValue(this, index, value);
        }
        setValid(index, valid) {
          this.length = this._nulls.set(index, +valid).length;
          return valid;
        }
        addChild(child, name = `${this.numChildren}`) {
          throw new Error(`Cannot append children to non-nested type "${this.type}"`);
        }
        getChildAt(index) {
          return this.children[index] || null;
        }
        flush() {
          const buffers = [];
          const values = this._values;
          const offsets = this._offsets;
          const typeIds = this._typeIds;
          const { length, nullCount } = this;
          if (typeIds) {
            buffers[enum_1.BufferType.TYPE] = typeIds.flush(length);
            offsets && (buffers[enum_1.BufferType.OFFSET] = offsets.flush(length));
          } else if (offsets) {
            values && (buffers[enum_1.BufferType.DATA] = values.flush(offsets.last()));
            buffers[enum_1.BufferType.OFFSET] = offsets.flush(length);
          } else if (values) {
            buffers[enum_1.BufferType.DATA] = values.flush(length);
          }
          nullCount > 0 && (buffers[enum_1.BufferType.VALIDITY] = this._nulls.flush(length));
          const data = data_1.Data.new(this.type, 0, length, nullCount, buffers, this.children.map((child) => child.flush()));
          this.clear();
          return data;
        }
        finish() {
          this.finished = true;
          this.children.forEach((child) => child.finish());
          return this;
        }
        clear() {
          this.length = 0;
          this._offsets && this._offsets.clear();
          this._values && this._values.clear();
          this._nulls && this._nulls.clear();
          this._typeIds && this._typeIds.clear();
          this.children.forEach((child) => child.clear());
          return this;
        }
      };
      exports.Builder = Builder2;
      Builder2.prototype.length = 1;
      Builder2.prototype.stride = 1;
      Builder2.prototype.children = null;
      Builder2.prototype.finished = false;
      Builder2.prototype.nullValues = null;
      Builder2.prototype._isValid = () => true;
      var FixedWidthBuilder = class extends Builder2 {
        constructor(opts) {
          super(opts);
          this._values = new buffer_1.DataBufferBuilder(new this.ArrayType(0), this.stride);
        }
        setValue(index, value) {
          const values = this._values;
          values.reserve(index - values.length + 1);
          return super.setValue(index, value);
        }
      };
      exports.FixedWidthBuilder = FixedWidthBuilder;
      var VariableWidthBuilder = class extends Builder2 {
        constructor(opts) {
          super(opts);
          this._pendingLength = 0;
          this._offsets = new buffer_1.OffsetsBufferBuilder();
        }
        setValue(index, value) {
          const pending = this._pending || (this._pending = new Map());
          const current = pending.get(index);
          current && (this._pendingLength -= current.length);
          this._pendingLength += value.length;
          pending.set(index, value);
        }
        setValid(index, isValid) {
          if (!super.setValid(index, isValid)) {
            (this._pending || (this._pending = new Map())).set(index, void 0);
            return false;
          }
          return true;
        }
        clear() {
          this._pendingLength = 0;
          this._pending = void 0;
          return super.clear();
        }
        flush() {
          this._flush();
          return super.flush();
        }
        finish() {
          this._flush();
          return super.finish();
        }
        _flush() {
          const pending = this._pending;
          const pendingLength = this._pendingLength;
          this._pendingLength = 0;
          this._pending = void 0;
          if (pending && pending.size > 0) {
            this._flushPending(pending, pendingLength);
          }
          return this;
        }
      };
      exports.VariableWidthBuilder = VariableWidthBuilder;
      function throughIterable(options) {
        const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
        const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? 1e3 : Math.pow(2, 14) } = options;
        const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
        return function* (source) {
          let numChunks = 0;
          const builder = Builder2.new(options);
          for (const value of source) {
            if (builder.append(value)[sizeProperty] >= highWaterMark) {
              ++numChunks && (yield builder.toVector());
            }
          }
          if (builder.finish().length > 0 || numChunks === 0) {
            yield builder.toVector();
          }
        };
      }
      function throughAsyncIterable(options) {
        const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
        const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? 1e3 : Math.pow(2, 14) } = options;
        const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
        return function(source) {
          return tslib_1.__asyncGenerator(this, arguments, function* () {
            var e_1, _a;
            let numChunks = 0;
            const builder = Builder2.new(options);
            try {
              for (var source_1 = tslib_1.__asyncValues(source), source_1_1; source_1_1 = yield tslib_1.__await(source_1.next()), !source_1_1.done; ) {
                const value = source_1_1.value;
                if (builder.append(value)[sizeProperty] >= highWaterMark) {
                  ++numChunks && (yield yield tslib_1.__await(builder.toVector()));
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (source_1_1 && !source_1_1.done && (_a = source_1.return))
                  yield tslib_1.__await(_a.call(source_1));
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            if (builder.finish().length > 0 || numChunks === 0) {
              yield yield tslib_1.__await(builder.toVector());
            }
          });
        };
      }
    }
  });

  // node_modules/apache-arrow/builder/bool.js
  var require_bool = __commonJS({
    "node_modules/apache-arrow/builder/bool.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BoolBuilder = void 0;
      var buffer_1 = require_buffer2();
      var builder_1 = require_builder();
      var BoolBuilder = class extends builder_1.Builder {
        constructor(options) {
          super(options);
          this._values = new buffer_1.BitmapBufferBuilder();
        }
        setValue(index, value) {
          this._values.set(index, +value);
        }
      };
      exports.BoolBuilder = BoolBuilder;
    }
  });

  // node_modules/apache-arrow/builder/null.js
  var require_null = __commonJS({
    "node_modules/apache-arrow/builder/null.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NullBuilder = void 0;
      var builder_1 = require_builder();
      var NullBuilder = class extends builder_1.Builder {
        setValue(index, value) {
        }
        setValid(index, valid) {
          this.length = Math.max(index + 1, this.length);
          return valid;
        }
      };
      exports.NullBuilder = NullBuilder;
    }
  });

  // node_modules/apache-arrow/builder/date.js
  var require_date = __commonJS({
    "node_modules/apache-arrow/builder/date.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = void 0;
      var builder_1 = require_builder();
      var DateBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.DateBuilder = DateBuilder;
      var DateDayBuilder = class extends DateBuilder {
      };
      exports.DateDayBuilder = DateDayBuilder;
      var DateMillisecondBuilder = class extends DateBuilder {
      };
      exports.DateMillisecondBuilder = DateMillisecondBuilder;
    }
  });

  // node_modules/apache-arrow/builder/decimal.js
  var require_decimal = __commonJS({
    "node_modules/apache-arrow/builder/decimal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DecimalBuilder = void 0;
      var builder_1 = require_builder();
      var DecimalBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.DecimalBuilder = DecimalBuilder;
    }
  });

  // node_modules/apache-arrow/builder/dictionary.js
  var require_dictionary = __commonJS({
    "node_modules/apache-arrow/builder/dictionary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DictionaryBuilder = void 0;
      var type_1 = require_type();
      var builder_1 = require_builder();
      var DictionaryBuilder = class extends builder_1.Builder {
        constructor({ "type": type, "nullValues": nulls, "dictionaryHashFunction": hashFn }) {
          super({ type: new type_1.Dictionary(type.dictionary, type.indices, type.id, type.isOrdered) });
          this._nulls = null;
          this._dictionaryOffset = 0;
          this._keysToIndices = Object.create(null);
          this.indices = builder_1.Builder.new({ "type": this.type.indices, "nullValues": nulls });
          this.dictionary = builder_1.Builder.new({ "type": this.type.dictionary, "nullValues": null });
          if (typeof hashFn === "function") {
            this.valueToKey = hashFn;
          }
        }
        get values() {
          return this.indices.values;
        }
        get nullCount() {
          return this.indices.nullCount;
        }
        get nullBitmap() {
          return this.indices.nullBitmap;
        }
        get byteLength() {
          return this.indices.byteLength + this.dictionary.byteLength;
        }
        get reservedLength() {
          return this.indices.reservedLength + this.dictionary.reservedLength;
        }
        get reservedByteLength() {
          return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
        }
        isValid(value) {
          return this.indices.isValid(value);
        }
        setValid(index, valid) {
          const indices = this.indices;
          valid = indices.setValid(index, valid);
          this.length = indices.length;
          return valid;
        }
        setValue(index, value) {
          const keysToIndices = this._keysToIndices;
          const key = this.valueToKey(value);
          let idx = keysToIndices[key];
          if (idx === void 0) {
            keysToIndices[key] = idx = this._dictionaryOffset + this.dictionary.append(value).length - 1;
          }
          return this.indices.setValue(index, idx);
        }
        flush() {
          const type = this.type;
          const prev = this._dictionary;
          const curr = this.dictionary.toVector();
          const data = this.indices.flush().clone(type);
          data.dictionary = prev ? prev.concat(curr) : curr;
          this.finished || (this._dictionaryOffset += curr.length);
          this._dictionary = data.dictionary;
          this.clear();
          return data;
        }
        finish() {
          this.indices.finish();
          this.dictionary.finish();
          this._dictionaryOffset = 0;
          this._keysToIndices = Object.create(null);
          return super.finish();
        }
        clear() {
          this.indices.clear();
          this.dictionary.clear();
          return super.clear();
        }
        valueToKey(val) {
          return typeof val === "string" ? val : `${val}`;
        }
      };
      exports.DictionaryBuilder = DictionaryBuilder;
    }
  });

  // node_modules/apache-arrow/builder/fixedsizebinary.js
  var require_fixedsizebinary = __commonJS({
    "node_modules/apache-arrow/builder/fixedsizebinary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FixedSizeBinaryBuilder = void 0;
      var builder_1 = require_builder();
      var FixedSizeBinaryBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.FixedSizeBinaryBuilder = FixedSizeBinaryBuilder;
    }
  });

  // node_modules/apache-arrow/util/math.js
  var require_math = __commonJS({
    "node_modules/apache-arrow/util/math.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.float64ToUint16 = exports.uint16ToFloat64 = void 0;
      var f64 = new Float64Array(1);
      var u32 = new Uint32Array(f64.buffer);
      function uint16ToFloat64(h) {
        const expo = (h & 31744) >> 10;
        const sigf = (h & 1023) / 1024;
        const sign = Math.pow(-1, (h & 32768) >> 15);
        switch (expo) {
          case 31:
            return sign * (sigf ? NaN : 1 / 0);
          case 0:
            return sign * (sigf ? 6103515625e-14 * sigf : 0);
        }
        return sign * Math.pow(2, expo - 15) * (1 + sigf);
      }
      exports.uint16ToFloat64 = uint16ToFloat64;
      function float64ToUint16(d2) {
        if (d2 !== d2) {
          return 32256;
        }
        f64[0] = d2;
        const sign = (u32[1] & 2147483648) >> 16 & 65535;
        let expo = u32[1] & 2146435072, sigf = 0;
        if (expo >= 1089470464) {
          if (u32[0] > 0) {
            expo = 31744;
          } else {
            expo = (expo & 2080374784) >> 16;
            sigf = (u32[1] & 1048575) >> 10;
          }
        } else if (expo <= 1056964608) {
          sigf = 1048576 + (u32[1] & 1048575);
          sigf = 1048576 + (sigf << (expo >> 20) - 998) >> 21;
          expo = 0;
        } else {
          expo = expo - 1056964608 >> 10;
          sigf = (u32[1] & 1048575) + 512 >> 10;
        }
        return sign | expo | sigf & 65535;
      }
      exports.float64ToUint16 = float64ToUint16;
    }
  });

  // node_modules/apache-arrow/builder/float.js
  var require_float = __commonJS({
    "node_modules/apache-arrow/builder/float.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = void 0;
      var math_1 = require_math();
      var builder_1 = require_builder();
      var FloatBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.FloatBuilder = FloatBuilder;
      var Float16Builder = class extends FloatBuilder {
        setValue(index, value) {
          this._values.set(index, math_1.float64ToUint16(value));
        }
      };
      exports.Float16Builder = Float16Builder;
      var Float32Builder = class extends FloatBuilder {
        setValue(index, value) {
          this._values.set(index, value);
        }
      };
      exports.Float32Builder = Float32Builder;
      var Float64Builder = class extends FloatBuilder {
        setValue(index, value) {
          this._values.set(index, value);
        }
      };
      exports.Float64Builder = Float64Builder;
    }
  });

  // node_modules/apache-arrow/util/bn.js
  var require_bn = __commonJS({
    "node_modules/apache-arrow/util/bn.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BN = exports.bignumToBigInt = exports.bignumToString = exports.isArrowBigNumSymbol = void 0;
      var buffer_1 = require_buffer();
      var compat_1 = require_compat();
      exports.isArrowBigNumSymbol = Symbol.for("isArrowBigNum");
      function BigNum(x, ...xs) {
        if (xs.length === 0) {
          return Object.setPrototypeOf(buffer_1.toArrayBufferView(this["TypedArray"], x), this.constructor.prototype);
        }
        return Object.setPrototypeOf(new this["TypedArray"](x, ...xs), this.constructor.prototype);
      }
      BigNum.prototype[exports.isArrowBigNumSymbol] = true;
      BigNum.prototype.toJSON = function() {
        return `"${exports.bignumToString(this)}"`;
      };
      BigNum.prototype.valueOf = function() {
        return bignumToNumber(this);
      };
      BigNum.prototype.toString = function() {
        return exports.bignumToString(this);
      };
      BigNum.prototype[Symbol.toPrimitive] = function(hint = "default") {
        switch (hint) {
          case "number":
            return bignumToNumber(this);
          case "string":
            return exports.bignumToString(this);
          case "default":
            return exports.bignumToBigInt(this);
        }
        return exports.bignumToString(this);
      };
      function SignedBigNum(...args) {
        return BigNum.apply(this, args);
      }
      function UnsignedBigNum(...args) {
        return BigNum.apply(this, args);
      }
      function DecimalBigNum(...args) {
        return BigNum.apply(this, args);
      }
      Object.setPrototypeOf(SignedBigNum.prototype, Object.create(Int32Array.prototype));
      Object.setPrototypeOf(UnsignedBigNum.prototype, Object.create(Uint32Array.prototype));
      Object.setPrototypeOf(DecimalBigNum.prototype, Object.create(Uint32Array.prototype));
      Object.assign(SignedBigNum.prototype, BigNum.prototype, { "constructor": SignedBigNum, "signed": true, "TypedArray": Int32Array, "BigIntArray": compat_1.BigInt64Array });
      Object.assign(UnsignedBigNum.prototype, BigNum.prototype, { "constructor": UnsignedBigNum, "signed": false, "TypedArray": Uint32Array, "BigIntArray": compat_1.BigUint64Array });
      Object.assign(DecimalBigNum.prototype, BigNum.prototype, { "constructor": DecimalBigNum, "signed": true, "TypedArray": Uint32Array, "BigIntArray": compat_1.BigUint64Array });
      function bignumToNumber(bn) {
        const { buffer, byteOffset, length, "signed": signed } = bn;
        const words = new Int32Array(buffer, byteOffset, length);
        let number = 0, i = 0;
        const n = words.length;
        let hi, lo;
        while (i < n) {
          lo = words[i++];
          hi = words[i++];
          signed || (hi = hi >>> 0);
          number += (lo >>> 0) + hi * Math.pow(i, 32);
        }
        return number;
      }
      if (!compat_1.BigIntAvailable) {
        exports.bignumToString = decimalToString;
        exports.bignumToBigInt = exports.bignumToString;
      } else {
        exports.bignumToBigInt = (a) => a.byteLength === 8 ? new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0] : decimalToString(a);
        exports.bignumToString = (a) => a.byteLength === 8 ? `${new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0]}` : decimalToString(a);
      }
      function decimalToString(a) {
        let digits = "";
        const base64 = new Uint32Array(2);
        let base32 = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
        const checks = new Uint32Array((base32 = new Uint16Array(base32).reverse()).buffer);
        let i = -1;
        const n = base32.length - 1;
        do {
          for (base64[0] = base32[i = 0]; i < n; ) {
            base32[i++] = base64[1] = base64[0] / 10;
            base64[0] = (base64[0] - base64[1] * 10 << 16) + base32[i];
          }
          base32[i] = base64[1] = base64[0] / 10;
          base64[0] = base64[0] - base64[1] * 10;
          digits = `${base64[0]}${digits}`;
        } while (checks[0] || checks[1] || checks[2] || checks[3]);
        return digits ? digits : `0`;
      }
      var BN = class {
        static new(num, isSigned) {
          switch (isSigned) {
            case true:
              return new SignedBigNum(num);
            case false:
              return new UnsignedBigNum(num);
          }
          switch (num.constructor) {
            case Int8Array:
            case Int16Array:
            case Int32Array:
            case compat_1.BigInt64Array:
              return new SignedBigNum(num);
          }
          if (num.byteLength === 16) {
            return new DecimalBigNum(num);
          }
          return new UnsignedBigNum(num);
        }
        static signed(num) {
          return new SignedBigNum(num);
        }
        static unsigned(num) {
          return new UnsignedBigNum(num);
        }
        static decimal(num) {
          return new DecimalBigNum(num);
        }
        constructor(num, isSigned) {
          return BN.new(num, isSigned);
        }
      };
      exports.BN = BN;
    }
  });

  // node_modules/apache-arrow/builder/int.js
  var require_int = __commonJS({
    "node_modules/apache-arrow/builder/int.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = void 0;
      var bn_1 = require_bn();
      var buffer_1 = require_buffer2();
      var compat_1 = require_compat();
      var builder_1 = require_builder();
      var IntBuilder = class extends builder_1.FixedWidthBuilder {
        setValue(index, value) {
          this._values.set(index, value);
        }
      };
      exports.IntBuilder = IntBuilder;
      var Int8Builder = class extends IntBuilder {
      };
      exports.Int8Builder = Int8Builder;
      var Int16Builder = class extends IntBuilder {
      };
      exports.Int16Builder = Int16Builder;
      var Int32Builder = class extends IntBuilder {
      };
      exports.Int32Builder = Int32Builder;
      var Int64Builder = class extends IntBuilder {
        constructor(options) {
          if (options["nullValues"]) {
            options["nullValues"] = options["nullValues"].map(toBigInt);
          }
          super(options);
          this._values = new buffer_1.WideBufferBuilder(new Int32Array(0), 2);
        }
        get values64() {
          return this._values.buffer64;
        }
        isValid(value) {
          return super.isValid(toBigInt(value));
        }
      };
      exports.Int64Builder = Int64Builder;
      var Uint8Builder = class extends IntBuilder {
      };
      exports.Uint8Builder = Uint8Builder;
      var Uint16Builder = class extends IntBuilder {
      };
      exports.Uint16Builder = Uint16Builder;
      var Uint32Builder = class extends IntBuilder {
      };
      exports.Uint32Builder = Uint32Builder;
      var Uint64Builder = class extends IntBuilder {
        constructor(options) {
          if (options["nullValues"]) {
            options["nullValues"] = options["nullValues"].map(toBigInt);
          }
          super(options);
          this._values = new buffer_1.WideBufferBuilder(new Uint32Array(0), 2);
        }
        get values64() {
          return this._values.buffer64;
        }
        isValid(value) {
          return super.isValid(toBigInt(value));
        }
      };
      exports.Uint64Builder = Uint64Builder;
      var toBigInt = ((memo) => (value) => {
        if (ArrayBuffer.isView(value)) {
          memo.buffer = value.buffer;
          memo.byteOffset = value.byteOffset;
          memo.byteLength = value.byteLength;
          value = bn_1.bignumToBigInt(memo);
          memo.buffer = null;
        }
        return value;
      })({ "BigIntArray": compat_1.BigInt64Array });
    }
  });

  // node_modules/apache-arrow/builder/time.js
  var require_time = __commonJS({
    "node_modules/apache-arrow/builder/time.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = void 0;
      var builder_1 = require_builder();
      var TimeBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.TimeBuilder = TimeBuilder;
      var TimeSecondBuilder = class extends TimeBuilder {
      };
      exports.TimeSecondBuilder = TimeSecondBuilder;
      var TimeMillisecondBuilder = class extends TimeBuilder {
      };
      exports.TimeMillisecondBuilder = TimeMillisecondBuilder;
      var TimeMicrosecondBuilder = class extends TimeBuilder {
      };
      exports.TimeMicrosecondBuilder = TimeMicrosecondBuilder;
      var TimeNanosecondBuilder = class extends TimeBuilder {
      };
      exports.TimeNanosecondBuilder = TimeNanosecondBuilder;
    }
  });

  // node_modules/apache-arrow/builder/timestamp.js
  var require_timestamp = __commonJS({
    "node_modules/apache-arrow/builder/timestamp.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = void 0;
      var builder_1 = require_builder();
      var TimestampBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.TimestampBuilder = TimestampBuilder;
      var TimestampSecondBuilder = class extends TimestampBuilder {
      };
      exports.TimestampSecondBuilder = TimestampSecondBuilder;
      var TimestampMillisecondBuilder = class extends TimestampBuilder {
      };
      exports.TimestampMillisecondBuilder = TimestampMillisecondBuilder;
      var TimestampMicrosecondBuilder = class extends TimestampBuilder {
      };
      exports.TimestampMicrosecondBuilder = TimestampMicrosecondBuilder;
      var TimestampNanosecondBuilder = class extends TimestampBuilder {
      };
      exports.TimestampNanosecondBuilder = TimestampNanosecondBuilder;
    }
  });

  // node_modules/apache-arrow/builder/interval.js
  var require_interval = __commonJS({
    "node_modules/apache-arrow/builder/interval.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = void 0;
      var builder_1 = require_builder();
      var IntervalBuilder = class extends builder_1.FixedWidthBuilder {
      };
      exports.IntervalBuilder = IntervalBuilder;
      var IntervalDayTimeBuilder = class extends IntervalBuilder {
      };
      exports.IntervalDayTimeBuilder = IntervalDayTimeBuilder;
      var IntervalYearMonthBuilder = class extends IntervalBuilder {
      };
      exports.IntervalYearMonthBuilder = IntervalYearMonthBuilder;
    }
  });

  // node_modules/apache-arrow/builder/binary.js
  var require_binary = __commonJS({
    "node_modules/apache-arrow/builder/binary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BinaryBuilder = void 0;
      var buffer_1 = require_buffer();
      var buffer_2 = require_buffer2();
      var builder_1 = require_builder();
      var BinaryBuilder = class extends builder_1.VariableWidthBuilder {
        constructor(opts) {
          super(opts);
          this._values = new buffer_2.BufferBuilder(new Uint8Array(0));
        }
        get byteLength() {
          let size = this._pendingLength + this.length * 4;
          this._offsets && (size += this._offsets.byteLength);
          this._values && (size += this._values.byteLength);
          this._nulls && (size += this._nulls.byteLength);
          return size;
        }
        setValue(index, value) {
          return super.setValue(index, buffer_1.toUint8Array(value));
        }
        _flushPending(pending, pendingLength) {
          const offsets = this._offsets;
          const data = this._values.reserve(pendingLength).buffer;
          let index = 0, length = 0, offset = 0, value;
          for ([index, value] of pending) {
            if (value === void 0) {
              offsets.set(index, 0);
            } else {
              length = value.length;
              data.set(value, offset);
              offsets.set(index, length);
              offset += length;
            }
          }
        }
      };
      exports.BinaryBuilder = BinaryBuilder;
    }
  });

  // node_modules/apache-arrow/builder/utf8.js
  var require_utf82 = __commonJS({
    "node_modules/apache-arrow/builder/utf8.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Utf8Builder = void 0;
      var utf8_1 = require_utf8();
      var binary_1 = require_binary();
      var buffer_1 = require_buffer2();
      var builder_1 = require_builder();
      var Utf8Builder = class extends builder_1.VariableWidthBuilder {
        constructor(opts) {
          super(opts);
          this._values = new buffer_1.BufferBuilder(new Uint8Array(0));
        }
        get byteLength() {
          let size = this._pendingLength + this.length * 4;
          this._offsets && (size += this._offsets.byteLength);
          this._values && (size += this._values.byteLength);
          this._nulls && (size += this._nulls.byteLength);
          return size;
        }
        setValue(index, value) {
          return super.setValue(index, utf8_1.encodeUtf8(value));
        }
        _flushPending(pending, pendingLength) {
        }
      };
      exports.Utf8Builder = Utf8Builder;
      Utf8Builder.prototype._flushPending = binary_1.BinaryBuilder.prototype._flushPending;
    }
  });

  // node_modules/apache-arrow/builder/run.js
  var require_run = __commonJS({
    "node_modules/apache-arrow/builder/run.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Run = void 0;
      var vector_1 = require_vector();
      var Run = class {
        get length() {
          return this._values.length;
        }
        get(index) {
          return this._values[index];
        }
        clear() {
          this._values = null;
          return this;
        }
        bind(values) {
          if (values instanceof vector_1.Vector) {
            return values;
          }
          this._values = values;
          return this;
        }
      };
      exports.Run = Run;
    }
  });

  // node_modules/apache-arrow/schema.js
  var require_schema = __commonJS({
    "node_modules/apache-arrow/schema.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Field = exports.Schema = void 0;
      var type_1 = require_type();
      var Schema = class {
        constructor(fields = [], metadata, dictionaries) {
          this.fields = fields || [];
          this.metadata = metadata || new Map();
          if (!dictionaries) {
            dictionaries = generateDictionaryMap(fields);
          }
          this.dictionaries = dictionaries;
        }
        get [Symbol.toStringTag]() {
          return "Schema";
        }
        toString() {
          return `Schema<{ ${this.fields.map((f, i) => `${i}: ${f}`).join(", ")} }>`;
        }
        select(...columnNames) {
          const names = columnNames.reduce((xs, x) => (xs[x] = true) && xs, Object.create(null));
          return new Schema(this.fields.filter((f) => names[f.name]), this.metadata);
        }
        selectAt(...columnIndices) {
          return new Schema(columnIndices.map((i) => this.fields[i]).filter(Boolean), this.metadata);
        }
        assign(...args) {
          const other = args[0] instanceof Schema ? args[0] : Array.isArray(args[0]) ? new Schema(args[0]) : new Schema(args);
          const curFields = [...this.fields];
          const metadata = mergeMaps(mergeMaps(new Map(), this.metadata), other.metadata);
          const newFields = other.fields.filter((f2) => {
            const i = curFields.findIndex((f) => f.name === f2.name);
            return ~i ? (curFields[i] = f2.clone({
              metadata: mergeMaps(mergeMaps(new Map(), curFields[i].metadata), f2.metadata)
            })) && false : true;
          });
          const newDictionaries = generateDictionaryMap(newFields, new Map());
          return new Schema([...curFields, ...newFields], metadata, new Map([...this.dictionaries, ...newDictionaries]));
        }
      };
      exports.Schema = Schema;
      var Field = class {
        constructor(name, type, nullable = false, metadata) {
          this.name = name;
          this.type = type;
          this.nullable = nullable;
          this.metadata = metadata || new Map();
        }
        static new(...args) {
          let [name, type, nullable, metadata] = args;
          if (args[0] && typeof args[0] === "object") {
            ({ name } = args[0]);
            type === void 0 && (type = args[0].type);
            nullable === void 0 && (nullable = args[0].nullable);
            metadata === void 0 && (metadata = args[0].metadata);
          }
          return new Field(`${name}`, type, nullable, metadata);
        }
        get typeId() {
          return this.type.typeId;
        }
        get [Symbol.toStringTag]() {
          return "Field";
        }
        toString() {
          return `${this.name}: ${this.type}`;
        }
        clone(...args) {
          let [name, type, nullable, metadata] = args;
          !args[0] || typeof args[0] !== "object" ? [name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata] = args : { name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata } = args[0];
          return Field.new(name, type, nullable, metadata);
        }
      };
      exports.Field = Field;
      function mergeMaps(m1, m2) {
        return new Map([...m1 || new Map(), ...m2 || new Map()]);
      }
      function generateDictionaryMap(fields, dictionaries = new Map()) {
        for (let i = -1, n = fields.length; ++i < n; ) {
          const field = fields[i];
          const type = field.type;
          if (type_1.DataType.isDictionary(type)) {
            if (!dictionaries.has(type.id)) {
              dictionaries.set(type.id, type.dictionary);
            } else if (dictionaries.get(type.id) !== type.dictionary) {
              throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
            }
          }
          if (type.children && type.children.length > 0) {
            generateDictionaryMap(type.children, dictionaries);
          }
        }
        return dictionaries;
      }
      Schema.prototype.fields = null;
      Schema.prototype.metadata = null;
      Schema.prototype.dictionaries = null;
      Field.prototype.type = null;
      Field.prototype.name = null;
      Field.prototype.nullable = null;
      Field.prototype.metadata = null;
    }
  });

  // node_modules/apache-arrow/builder/list.js
  var require_list = __commonJS({
    "node_modules/apache-arrow/builder/list.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ListBuilder = void 0;
      var run_1 = require_run();
      var schema_1 = require_schema();
      var type_1 = require_type();
      var buffer_1 = require_buffer2();
      var builder_1 = require_builder();
      var ListBuilder = class extends builder_1.VariableWidthBuilder {
        constructor(opts) {
          super(opts);
          this._run = new run_1.Run();
          this._offsets = new buffer_1.OffsetsBufferBuilder();
        }
        addChild(child, name = "0") {
          if (this.numChildren > 0) {
            throw new Error("ListBuilder can only have one child.");
          }
          this.children[this.numChildren] = child;
          this.type = new type_1.List(new schema_1.Field(name, child.type, true));
          return this.numChildren - 1;
        }
        clear() {
          this._run.clear();
          return super.clear();
        }
        _flushPending(pending) {
          const run = this._run;
          const offsets = this._offsets;
          const setValue = this._setValue;
          let index = 0, value;
          for ([index, value] of pending) {
            if (value === void 0) {
              offsets.set(index, 0);
            } else {
              offsets.set(index, value.length);
              setValue(this, index, run.bind(value));
            }
          }
        }
      };
      exports.ListBuilder = ListBuilder;
    }
  });

  // node_modules/apache-arrow/builder/fixedsizelist.js
  var require_fixedsizelist = __commonJS({
    "node_modules/apache-arrow/builder/fixedsizelist.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FixedSizeListBuilder = void 0;
      var run_1 = require_run();
      var schema_1 = require_schema();
      var builder_1 = require_builder();
      var type_1 = require_type();
      var FixedSizeListBuilder = class extends builder_1.Builder {
        constructor() {
          super(...arguments);
          this._run = new run_1.Run();
        }
        setValue(index, value) {
          super.setValue(index, this._run.bind(value));
        }
        addChild(child, name = "0") {
          if (this.numChildren > 0) {
            throw new Error("FixedSizeListBuilder can only have one child.");
          }
          const childIndex = this.children.push(child);
          this.type = new type_1.FixedSizeList(this.type.listSize, new schema_1.Field(name, child.type, true));
          return childIndex;
        }
        clear() {
          this._run.clear();
          return super.clear();
        }
      };
      exports.FixedSizeListBuilder = FixedSizeListBuilder;
    }
  });

  // node_modules/apache-arrow/builder/map.js
  var require_map = __commonJS({
    "node_modules/apache-arrow/builder/map.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MapBuilder = void 0;
      var schema_1 = require_schema();
      var type_1 = require_type();
      var builder_1 = require_builder();
      var MapBuilder = class extends builder_1.VariableWidthBuilder {
        set(index, value) {
          return super.set(index, value);
        }
        setValue(index, value) {
          value = value instanceof Map ? value : new Map(Object.entries(value));
          const pending = this._pending || (this._pending = new Map());
          const current = pending.get(index);
          current && (this._pendingLength -= current.size);
          this._pendingLength += value.size;
          pending.set(index, value);
        }
        addChild(child, name = `${this.numChildren}`) {
          if (this.numChildren > 0) {
            throw new Error("ListBuilder can only have one child.");
          }
          this.children[this.numChildren] = child;
          this.type = new type_1.Map_(new schema_1.Field(name, child.type, true), this.type.keysSorted);
          return this.numChildren - 1;
        }
        _flushPending(pending) {
          const offsets = this._offsets;
          const setValue = this._setValue;
          pending.forEach((value, index) => {
            if (value === void 0) {
              offsets.set(index, 0);
            } else {
              offsets.set(index, value.size);
              setValue(this, index, value);
            }
          });
        }
      };
      exports.MapBuilder = MapBuilder;
    }
  });

  // node_modules/apache-arrow/builder/struct.js
  var require_struct = __commonJS({
    "node_modules/apache-arrow/builder/struct.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StructBuilder = void 0;
      var schema_1 = require_schema();
      var builder_1 = require_builder();
      var type_1 = require_type();
      var StructBuilder = class extends builder_1.Builder {
        addChild(child, name = `${this.numChildren}`) {
          const childIndex = this.children.push(child);
          this.type = new type_1.Struct([...this.type.children, new schema_1.Field(name, child.type, true)]);
          return childIndex;
        }
      };
      exports.StructBuilder = StructBuilder;
    }
  });

  // node_modules/apache-arrow/builder/union.js
  var require_union = __commonJS({
    "node_modules/apache-arrow/builder/union.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DenseUnionBuilder = exports.SparseUnionBuilder = exports.UnionBuilder = void 0;
      var schema_1 = require_schema();
      var buffer_1 = require_buffer2();
      var builder_1 = require_builder();
      var type_1 = require_type();
      var UnionBuilder = class extends builder_1.Builder {
        constructor(options) {
          super(options);
          this._typeIds = new buffer_1.DataBufferBuilder(new Int8Array(0), 1);
          if (typeof options["valueToChildTypeId"] === "function") {
            this._valueToChildTypeId = options["valueToChildTypeId"];
          }
        }
        get typeIdToChildIndex() {
          return this.type.typeIdToChildIndex;
        }
        append(value, childTypeId) {
          return this.set(this.length, value, childTypeId);
        }
        set(index, value, childTypeId) {
          if (childTypeId === void 0) {
            childTypeId = this._valueToChildTypeId(this, value, index);
          }
          if (this.setValid(index, this.isValid(value))) {
            this.setValue(index, value, childTypeId);
          }
          return this;
        }
        setValue(index, value, childTypeId) {
          this._typeIds.set(index, childTypeId);
          super.setValue(index, value);
        }
        addChild(child, name = `${this.children.length}`) {
          const childTypeId = this.children.push(child);
          const { type: { children, mode, typeIds } } = this;
          const fields = [...children, new schema_1.Field(name, child.type)];
          this.type = new type_1.Union(mode, [...typeIds, childTypeId], fields);
          return childTypeId;
        }
        _valueToChildTypeId(builder, value, offset) {
          throw new Error(`Cannot map UnionBuilder value to child typeId. Pass the \`childTypeId\` as the second argument to unionBuilder.append(), or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`);
        }
      };
      exports.UnionBuilder = UnionBuilder;
      var SparseUnionBuilder = class extends UnionBuilder {
      };
      exports.SparseUnionBuilder = SparseUnionBuilder;
      var DenseUnionBuilder = class extends UnionBuilder {
        constructor(options) {
          super(options);
          this._offsets = new buffer_1.DataBufferBuilder(new Int32Array(0));
        }
        setValue(index, value, childTypeId) {
          const childIndex = this.type.typeIdToChildIndex[childTypeId];
          this._offsets.set(index, this.getChildAt(childIndex).length);
          return super.setValue(index, value, childTypeId);
        }
      };
      exports.DenseUnionBuilder = DenseUnionBuilder;
    }
  });

  // node_modules/apache-arrow/visitor.js
  var require_visitor = __commonJS({
    "node_modules/apache-arrow/visitor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Visitor = void 0;
      var data_1 = require_data();
      var vector_1 = require_vector();
      var enum_1 = require_enum();
      var type_1 = require_type();
      var Visitor = class {
        visitMany(nodes, ...args) {
          return nodes.map((node, i) => this.visit(node, ...args.map((x) => x[i])));
        }
        visit(...args) {
          return this.getVisitFn(args[0], false).apply(this, args);
        }
        getVisitFn(node, throwIfNotFound = true) {
          return getVisitFn(this, node, throwIfNotFound);
        }
        visitNull(_node, ..._args) {
          return null;
        }
        visitBool(_node, ..._args) {
          return null;
        }
        visitInt(_node, ..._args) {
          return null;
        }
        visitFloat(_node, ..._args) {
          return null;
        }
        visitUtf8(_node, ..._args) {
          return null;
        }
        visitBinary(_node, ..._args) {
          return null;
        }
        visitFixedSizeBinary(_node, ..._args) {
          return null;
        }
        visitDate(_node, ..._args) {
          return null;
        }
        visitTimestamp(_node, ..._args) {
          return null;
        }
        visitTime(_node, ..._args) {
          return null;
        }
        visitDecimal(_node, ..._args) {
          return null;
        }
        visitList(_node, ..._args) {
          return null;
        }
        visitStruct(_node, ..._args) {
          return null;
        }
        visitUnion(_node, ..._args) {
          return null;
        }
        visitDictionary(_node, ..._args) {
          return null;
        }
        visitInterval(_node, ..._args) {
          return null;
        }
        visitFixedSizeList(_node, ..._args) {
          return null;
        }
        visitMap(_node, ..._args) {
          return null;
        }
      };
      exports.Visitor = Visitor;
      function getVisitFn(visitor, node, throwIfNotFound = true) {
        let fn = null;
        let dtype = enum_1.Type.NONE;
        if (node instanceof data_1.Data)
          dtype = inferDType(node.type);
        else if (node instanceof vector_1.Vector)
          dtype = inferDType(node.type);
        else if (node instanceof type_1.DataType)
          dtype = inferDType(node);
        else if (typeof (dtype = node) !== "number")
          dtype = enum_1.Type[node];
        switch (dtype) {
          case enum_1.Type.Null:
            fn = visitor.visitNull;
            break;
          case enum_1.Type.Bool:
            fn = visitor.visitBool;
            break;
          case enum_1.Type.Int:
            fn = visitor.visitInt;
            break;
          case enum_1.Type.Int8:
            fn = visitor.visitInt8 || visitor.visitInt;
            break;
          case enum_1.Type.Int16:
            fn = visitor.visitInt16 || visitor.visitInt;
            break;
          case enum_1.Type.Int32:
            fn = visitor.visitInt32 || visitor.visitInt;
            break;
          case enum_1.Type.Int64:
            fn = visitor.visitInt64 || visitor.visitInt;
            break;
          case enum_1.Type.Uint8:
            fn = visitor.visitUint8 || visitor.visitInt;
            break;
          case enum_1.Type.Uint16:
            fn = visitor.visitUint16 || visitor.visitInt;
            break;
          case enum_1.Type.Uint32:
            fn = visitor.visitUint32 || visitor.visitInt;
            break;
          case enum_1.Type.Uint64:
            fn = visitor.visitUint64 || visitor.visitInt;
            break;
          case enum_1.Type.Float:
            fn = visitor.visitFloat;
            break;
          case enum_1.Type.Float16:
            fn = visitor.visitFloat16 || visitor.visitFloat;
            break;
          case enum_1.Type.Float32:
            fn = visitor.visitFloat32 || visitor.visitFloat;
            break;
          case enum_1.Type.Float64:
            fn = visitor.visitFloat64 || visitor.visitFloat;
            break;
          case enum_1.Type.Utf8:
            fn = visitor.visitUtf8;
            break;
          case enum_1.Type.Binary:
            fn = visitor.visitBinary;
            break;
          case enum_1.Type.FixedSizeBinary:
            fn = visitor.visitFixedSizeBinary;
            break;
          case enum_1.Type.Date:
            fn = visitor.visitDate;
            break;
          case enum_1.Type.DateDay:
            fn = visitor.visitDateDay || visitor.visitDate;
            break;
          case enum_1.Type.DateMillisecond:
            fn = visitor.visitDateMillisecond || visitor.visitDate;
            break;
          case enum_1.Type.Timestamp:
            fn = visitor.visitTimestamp;
            break;
          case enum_1.Type.TimestampSecond:
            fn = visitor.visitTimestampSecond || visitor.visitTimestamp;
            break;
          case enum_1.Type.TimestampMillisecond:
            fn = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
            break;
          case enum_1.Type.TimestampMicrosecond:
            fn = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
            break;
          case enum_1.Type.TimestampNanosecond:
            fn = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
            break;
          case enum_1.Type.Time:
            fn = visitor.visitTime;
            break;
          case enum_1.Type.TimeSecond:
            fn = visitor.visitTimeSecond || visitor.visitTime;
            break;
          case enum_1.Type.TimeMillisecond:
            fn = visitor.visitTimeMillisecond || visitor.visitTime;
            break;
          case enum_1.Type.TimeMicrosecond:
            fn = visitor.visitTimeMicrosecond || visitor.visitTime;
            break;
          case enum_1.Type.TimeNanosecond:
            fn = visitor.visitTimeNanosecond || visitor.visitTime;
            break;
          case enum_1.Type.Decimal:
            fn = visitor.visitDecimal;
            break;
          case enum_1.Type.List:
            fn = visitor.visitList;
            break;
          case enum_1.Type.Struct:
            fn = visitor.visitStruct;
            break;
          case enum_1.Type.Union:
            fn = visitor.visitUnion;
            break;
          case enum_1.Type.DenseUnion:
            fn = visitor.visitDenseUnion || visitor.visitUnion;
            break;
          case enum_1.Type.SparseUnion:
            fn = visitor.visitSparseUnion || visitor.visitUnion;
            break;
          case enum_1.Type.Dictionary:
            fn = visitor.visitDictionary;
            break;
          case enum_1.Type.Interval:
            fn = visitor.visitInterval;
            break;
          case enum_1.Type.IntervalDayTime:
            fn = visitor.visitIntervalDayTime || visitor.visitInterval;
            break;
          case enum_1.Type.IntervalYearMonth:
            fn = visitor.visitIntervalYearMonth || visitor.visitInterval;
            break;
          case enum_1.Type.FixedSizeList:
            fn = visitor.visitFixedSizeList;
            break;
          case enum_1.Type.Map:
            fn = visitor.visitMap;
            break;
        }
        if (typeof fn === "function")
          return fn;
        if (!throwIfNotFound)
          return () => null;
        throw new Error(`Unrecognized type '${enum_1.Type[dtype]}'`);
      }
      function inferDType(type) {
        switch (type.typeId) {
          case enum_1.Type.Null:
            return enum_1.Type.Null;
          case enum_1.Type.Int: {
            const { bitWidth, isSigned } = type;
            switch (bitWidth) {
              case 8:
                return isSigned ? enum_1.Type.Int8 : enum_1.Type.Uint8;
              case 16:
                return isSigned ? enum_1.Type.Int16 : enum_1.Type.Uint16;
              case 32:
                return isSigned ? enum_1.Type.Int32 : enum_1.Type.Uint32;
              case 64:
                return isSigned ? enum_1.Type.Int64 : enum_1.Type.Uint64;
            }
            return enum_1.Type.Int;
          }
          case enum_1.Type.Float:
            switch (type.precision) {
              case enum_1.Precision.HALF:
                return enum_1.Type.Float16;
              case enum_1.Precision.SINGLE:
                return enum_1.Type.Float32;
              case enum_1.Precision.DOUBLE:
                return enum_1.Type.Float64;
            }
            return enum_1.Type.Float;
          case enum_1.Type.Binary:
            return enum_1.Type.Binary;
          case enum_1.Type.Utf8:
            return enum_1.Type.Utf8;
          case enum_1.Type.Bool:
            return enum_1.Type.Bool;
          case enum_1.Type.Decimal:
            return enum_1.Type.Decimal;
          case enum_1.Type.Time:
            switch (type.unit) {
              case enum_1.TimeUnit.SECOND:
                return enum_1.Type.TimeSecond;
              case enum_1.TimeUnit.MILLISECOND:
                return enum_1.Type.TimeMillisecond;
              case enum_1.TimeUnit.MICROSECOND:
                return enum_1.Type.TimeMicrosecond;
              case enum_1.TimeUnit.NANOSECOND:
                return enum_1.Type.TimeNanosecond;
            }
            return enum_1.Type.Time;
          case enum_1.Type.Timestamp:
            switch (type.unit) {
              case enum_1.TimeUnit.SECOND:
                return enum_1.Type.TimestampSecond;
              case enum_1.TimeUnit.MILLISECOND:
                return enum_1.Type.TimestampMillisecond;
              case enum_1.TimeUnit.MICROSECOND:
                return enum_1.Type.TimestampMicrosecond;
              case enum_1.TimeUnit.NANOSECOND:
                return enum_1.Type.TimestampNanosecond;
            }
            return enum_1.Type.Timestamp;
          case enum_1.Type.Date:
            switch (type.unit) {
              case enum_1.DateUnit.DAY:
                return enum_1.Type.DateDay;
              case enum_1.DateUnit.MILLISECOND:
                return enum_1.Type.DateMillisecond;
            }
            return enum_1.Type.Date;
          case enum_1.Type.Interval:
            switch (type.unit) {
              case enum_1.IntervalUnit.DAY_TIME:
                return enum_1.Type.IntervalDayTime;
              case enum_1.IntervalUnit.YEAR_MONTH:
                return enum_1.Type.IntervalYearMonth;
            }
            return enum_1.Type.Interval;
          case enum_1.Type.Map:
            return enum_1.Type.Map;
          case enum_1.Type.List:
            return enum_1.Type.List;
          case enum_1.Type.Struct:
            return enum_1.Type.Struct;
          case enum_1.Type.Union:
            switch (type.mode) {
              case enum_1.UnionMode.Dense:
                return enum_1.Type.DenseUnion;
              case enum_1.UnionMode.Sparse:
                return enum_1.Type.SparseUnion;
            }
            return enum_1.Type.Union;
          case enum_1.Type.FixedSizeBinary:
            return enum_1.Type.FixedSizeBinary;
          case enum_1.Type.FixedSizeList:
            return enum_1.Type.FixedSizeList;
          case enum_1.Type.Dictionary:
            return enum_1.Type.Dictionary;
        }
        throw new Error(`Unrecognized type '${enum_1.Type[type.typeId]}'`);
      }
      Visitor.prototype.visitInt8 = null;
      Visitor.prototype.visitInt16 = null;
      Visitor.prototype.visitInt32 = null;
      Visitor.prototype.visitInt64 = null;
      Visitor.prototype.visitUint8 = null;
      Visitor.prototype.visitUint16 = null;
      Visitor.prototype.visitUint32 = null;
      Visitor.prototype.visitUint64 = null;
      Visitor.prototype.visitFloat16 = null;
      Visitor.prototype.visitFloat32 = null;
      Visitor.prototype.visitFloat64 = null;
      Visitor.prototype.visitDateDay = null;
      Visitor.prototype.visitDateMillisecond = null;
      Visitor.prototype.visitTimestampSecond = null;
      Visitor.prototype.visitTimestampMillisecond = null;
      Visitor.prototype.visitTimestampMicrosecond = null;
      Visitor.prototype.visitTimestampNanosecond = null;
      Visitor.prototype.visitTimeSecond = null;
      Visitor.prototype.visitTimeMillisecond = null;
      Visitor.prototype.visitTimeMicrosecond = null;
      Visitor.prototype.visitTimeNanosecond = null;
      Visitor.prototype.visitDenseUnion = null;
      Visitor.prototype.visitSparseUnion = null;
      Visitor.prototype.visitIntervalDayTime = null;
      Visitor.prototype.visitIntervalYearMonth = null;
    }
  });

  // node_modules/apache-arrow/visitor/set.js
  var require_set = __commonJS({
    "node_modules/apache-arrow/visitor/set.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.SetVisitor = void 0;
      var vector_1 = require_vector();
      var visitor_1 = require_visitor();
      var utf8_1 = require_utf8();
      var math_1 = require_math();
      var buffer_1 = require_buffer();
      var enum_1 = require_enum();
      var SetVisitor = class extends visitor_1.Visitor {
      };
      exports.SetVisitor = SetVisitor;
      var setEpochMsToDays = (data, index, epochMs) => {
        data[index] = epochMs / 864e5 | 0;
      };
      var setEpochMsToMillisecondsLong = (data, index, epochMs) => {
        data[index] = epochMs % 4294967296 | 0;
        data[index + 1] = epochMs / 4294967296 | 0;
      };
      var setEpochMsToMicrosecondsLong = (data, index, epochMs) => {
        data[index] = epochMs * 1e3 % 4294967296 | 0;
        data[index + 1] = epochMs * 1e3 / 4294967296 | 0;
      };
      var setEpochMsToNanosecondsLong = (data, index, epochMs) => {
        data[index] = epochMs * 1e6 % 4294967296 | 0;
        data[index + 1] = epochMs * 1e6 / 4294967296 | 0;
      };
      var setVariableWidthBytes = (values, valueOffsets, index, value) => {
        const { [index]: x, [index + 1]: y2 } = valueOffsets;
        if (x != null && y2 != null) {
          values.set(value.subarray(0, y2 - x), x);
        }
      };
      var setBool = ({ offset, values }, index, val) => {
        const idx = offset + index;
        val ? values[idx >> 3] |= 1 << idx % 8 : values[idx >> 3] &= ~(1 << idx % 8);
      };
      var setDateDay = ({ values }, index, value) => {
        setEpochMsToDays(values, index, value.valueOf());
      };
      var setDateMillisecond = ({ values }, index, value) => {
        setEpochMsToMillisecondsLong(values, index * 2, value.valueOf());
      };
      var setNumeric = ({ stride, values }, index, value) => {
        values[stride * index] = value;
      };
      var setFloat16 = ({ stride, values }, index, value) => {
        values[stride * index] = math_1.float64ToUint16(value);
      };
      var setNumericX2 = (vector, index, value) => {
        switch (typeof value) {
          case "bigint":
            vector.values64[index] = value;
            break;
          case "number":
            vector.values[index * vector.stride] = value;
            break;
          default: {
            const val = value;
            const { stride, ArrayType } = vector;
            const long = buffer_1.toArrayBufferView(ArrayType, val);
            vector.values.set(long.subarray(0, stride), stride * index);
          }
        }
      };
      var setFixedSizeBinary = ({ stride, values }, index, value) => {
        values.set(value.subarray(0, stride), stride * index);
      };
      var setBinary = ({ values, valueOffsets }, index, value) => setVariableWidthBytes(values, valueOffsets, index, value);
      var setUtf8 = ({ values, valueOffsets }, index, value) => {
        setVariableWidthBytes(values, valueOffsets, index, utf8_1.encodeUtf8(value));
      };
      var setInt = (vector, index, value) => {
        vector.type.bitWidth < 64 ? setNumeric(vector, index, value) : setNumericX2(vector, index, value);
      };
      var setFloat = (vector, index, value) => {
        vector.type.precision !== enum_1.Precision.HALF ? setNumeric(vector, index, value) : setFloat16(vector, index, value);
      };
      var setDate = (vector, index, value) => {
        vector.type.unit === enum_1.DateUnit.DAY ? setDateDay(vector, index, value) : setDateMillisecond(vector, index, value);
      };
      var setTimestampSecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value / 1e3);
      var setTimestampMillisecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value);
      var setTimestampMicrosecond = ({ values }, index, value) => setEpochMsToMicrosecondsLong(values, index * 2, value);
      var setTimestampNanosecond = ({ values }, index, value) => setEpochMsToNanosecondsLong(values, index * 2, value);
      var setTimestamp = (vector, index, value) => {
        switch (vector.type.unit) {
          case enum_1.TimeUnit.SECOND:
            return setTimestampSecond(vector, index, value);
          case enum_1.TimeUnit.MILLISECOND:
            return setTimestampMillisecond(vector, index, value);
          case enum_1.TimeUnit.MICROSECOND:
            return setTimestampMicrosecond(vector, index, value);
          case enum_1.TimeUnit.NANOSECOND:
            return setTimestampNanosecond(vector, index, value);
        }
      };
      var setTimeSecond = ({ values, stride }, index, value) => {
        values[stride * index] = value;
      };
      var setTimeMillisecond = ({ values, stride }, index, value) => {
        values[stride * index] = value;
      };
      var setTimeMicrosecond = ({ values }, index, value) => {
        values.set(value.subarray(0, 2), 2 * index);
      };
      var setTimeNanosecond = ({ values }, index, value) => {
        values.set(value.subarray(0, 2), 2 * index);
      };
      var setTime = (vector, index, value) => {
        switch (vector.type.unit) {
          case enum_1.TimeUnit.SECOND:
            return setTimeSecond(vector, index, value);
          case enum_1.TimeUnit.MILLISECOND:
            return setTimeMillisecond(vector, index, value);
          case enum_1.TimeUnit.MICROSECOND:
            return setTimeMicrosecond(vector, index, value);
          case enum_1.TimeUnit.NANOSECOND:
            return setTimeNanosecond(vector, index, value);
        }
      };
      var setDecimal = ({ values }, index, value) => {
        values.set(value.subarray(0, 4), 4 * index);
      };
      var setList = (vector, index, value) => {
        const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
        for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
          values.set(itr++, value.get(++idx));
        }
      };
      var setMap = (vector, index, value) => {
        const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
        const entries = value instanceof Map ? [...value] : Object.entries(value);
        for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
          values.set(itr++, entries[++idx]);
        }
      };
      var _setStructArrayValue = (o2, v2) => (c, _, i) => c === null || c === void 0 ? void 0 : c.set(o2, v2[i]);
      var _setStructVectorValue = (o2, v2) => (c, _, i) => c === null || c === void 0 ? void 0 : c.set(o2, v2.get(i));
      var _setStructMapValue = (o2, v2) => (c, f, _) => c === null || c === void 0 ? void 0 : c.set(o2, v2.get(f.name));
      var _setStructObjectValue = (o2, v2) => (c, f, _) => c === null || c === void 0 ? void 0 : c.set(o2, v2[f.name]);
      var setStruct = (vector, index, value) => {
        const setValue = value instanceof Map ? _setStructMapValue(index, value) : value instanceof vector_1.Vector ? _setStructVectorValue(index, value) : Array.isArray(value) ? _setStructArrayValue(index, value) : _setStructObjectValue(index, value);
        vector.type.children.forEach((f, i) => setValue(vector.getChildAt(i), f, i));
      };
      var setUnion = (vector, index, value) => {
        vector.type.mode === enum_1.UnionMode.Dense ? setDenseUnion(vector, index, value) : setSparseUnion(vector, index, value);
      };
      var setDenseUnion = (vector, index, value) => {
        const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
        const child = vector.getChildAt(childIndex);
        child && child.set(vector.valueOffsets[index], value);
      };
      var setSparseUnion = (vector, index, value) => {
        const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
        const child = vector.getChildAt(childIndex);
        child && child.set(index, value);
      };
      var setDictionary = (vector, index, value) => {
        const key = vector.getKey(index);
        if (key !== null) {
          vector.setValue(key, value);
        }
      };
      var setIntervalValue = (vector, index, value) => {
        vector.type.unit === enum_1.IntervalUnit.DAY_TIME ? setIntervalDayTime(vector, index, value) : setIntervalYearMonth(vector, index, value);
      };
      var setIntervalDayTime = ({ values }, index, value) => {
        values.set(value.subarray(0, 2), 2 * index);
      };
      var setIntervalYearMonth = ({ values }, index, value) => {
        values[index] = value[0] * 12 + value[1] % 12;
      };
      var setFixedSizeList = (vector, index, value) => {
        const child = vector.getChildAt(0), { stride } = vector;
        for (let idx = -1, offset = index * stride; ++idx < stride; ) {
          child.set(offset + idx, value.get(idx));
        }
      };
      SetVisitor.prototype.visitBool = setBool;
      SetVisitor.prototype.visitInt = setInt;
      SetVisitor.prototype.visitInt8 = setNumeric;
      SetVisitor.prototype.visitInt16 = setNumeric;
      SetVisitor.prototype.visitInt32 = setNumeric;
      SetVisitor.prototype.visitInt64 = setNumericX2;
      SetVisitor.prototype.visitUint8 = setNumeric;
      SetVisitor.prototype.visitUint16 = setNumeric;
      SetVisitor.prototype.visitUint32 = setNumeric;
      SetVisitor.prototype.visitUint64 = setNumericX2;
      SetVisitor.prototype.visitFloat = setFloat;
      SetVisitor.prototype.visitFloat16 = setFloat16;
      SetVisitor.prototype.visitFloat32 = setNumeric;
      SetVisitor.prototype.visitFloat64 = setNumeric;
      SetVisitor.prototype.visitUtf8 = setUtf8;
      SetVisitor.prototype.visitBinary = setBinary;
      SetVisitor.prototype.visitFixedSizeBinary = setFixedSizeBinary;
      SetVisitor.prototype.visitDate = setDate;
      SetVisitor.prototype.visitDateDay = setDateDay;
      SetVisitor.prototype.visitDateMillisecond = setDateMillisecond;
      SetVisitor.prototype.visitTimestamp = setTimestamp;
      SetVisitor.prototype.visitTimestampSecond = setTimestampSecond;
      SetVisitor.prototype.visitTimestampMillisecond = setTimestampMillisecond;
      SetVisitor.prototype.visitTimestampMicrosecond = setTimestampMicrosecond;
      SetVisitor.prototype.visitTimestampNanosecond = setTimestampNanosecond;
      SetVisitor.prototype.visitTime = setTime;
      SetVisitor.prototype.visitTimeSecond = setTimeSecond;
      SetVisitor.prototype.visitTimeMillisecond = setTimeMillisecond;
      SetVisitor.prototype.visitTimeMicrosecond = setTimeMicrosecond;
      SetVisitor.prototype.visitTimeNanosecond = setTimeNanosecond;
      SetVisitor.prototype.visitDecimal = setDecimal;
      SetVisitor.prototype.visitList = setList;
      SetVisitor.prototype.visitStruct = setStruct;
      SetVisitor.prototype.visitUnion = setUnion;
      SetVisitor.prototype.visitDenseUnion = setDenseUnion;
      SetVisitor.prototype.visitSparseUnion = setSparseUnion;
      SetVisitor.prototype.visitDictionary = setDictionary;
      SetVisitor.prototype.visitInterval = setIntervalValue;
      SetVisitor.prototype.visitIntervalDayTime = setIntervalDayTime;
      SetVisitor.prototype.visitIntervalYearMonth = setIntervalYearMonth;
      SetVisitor.prototype.visitFixedSizeList = setFixedSizeList;
      SetVisitor.prototype.visitMap = setMap;
      exports.instance = new SetVisitor();
    }
  });

  // node_modules/apache-arrow/visitor/builderctor.js
  var require_builderctor = __commonJS({
    "node_modules/apache-arrow/visitor/builderctor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.GetBuilderCtor = void 0;
      var visitor_1 = require_visitor();
      var binary_1 = require_binary();
      var bool_1 = require_bool();
      var date_1 = require_date();
      var decimal_1 = require_decimal();
      var dictionary_1 = require_dictionary();
      var fixedsizebinary_1 = require_fixedsizebinary();
      var fixedsizelist_1 = require_fixedsizelist();
      var float_1 = require_float();
      var interval_1 = require_interval();
      var int_1 = require_int();
      var list_1 = require_list();
      var map_1 = require_map();
      var null_1 = require_null();
      var struct_1 = require_struct();
      var timestamp_1 = require_timestamp();
      var time_1 = require_time();
      var union_1 = require_union();
      var utf8_1 = require_utf82();
      var GetBuilderCtor = class extends visitor_1.Visitor {
        visitNull() {
          return null_1.NullBuilder;
        }
        visitBool() {
          return bool_1.BoolBuilder;
        }
        visitInt() {
          return int_1.IntBuilder;
        }
        visitInt8() {
          return int_1.Int8Builder;
        }
        visitInt16() {
          return int_1.Int16Builder;
        }
        visitInt32() {
          return int_1.Int32Builder;
        }
        visitInt64() {
          return int_1.Int64Builder;
        }
        visitUint8() {
          return int_1.Uint8Builder;
        }
        visitUint16() {
          return int_1.Uint16Builder;
        }
        visitUint32() {
          return int_1.Uint32Builder;
        }
        visitUint64() {
          return int_1.Uint64Builder;
        }
        visitFloat() {
          return float_1.FloatBuilder;
        }
        visitFloat16() {
          return float_1.Float16Builder;
        }
        visitFloat32() {
          return float_1.Float32Builder;
        }
        visitFloat64() {
          return float_1.Float64Builder;
        }
        visitUtf8() {
          return utf8_1.Utf8Builder;
        }
        visitBinary() {
          return binary_1.BinaryBuilder;
        }
        visitFixedSizeBinary() {
          return fixedsizebinary_1.FixedSizeBinaryBuilder;
        }
        visitDate() {
          return date_1.DateBuilder;
        }
        visitDateDay() {
          return date_1.DateDayBuilder;
        }
        visitDateMillisecond() {
          return date_1.DateMillisecondBuilder;
        }
        visitTimestamp() {
          return timestamp_1.TimestampBuilder;
        }
        visitTimestampSecond() {
          return timestamp_1.TimestampSecondBuilder;
        }
        visitTimestampMillisecond() {
          return timestamp_1.TimestampMillisecondBuilder;
        }
        visitTimestampMicrosecond() {
          return timestamp_1.TimestampMicrosecondBuilder;
        }
        visitTimestampNanosecond() {
          return timestamp_1.TimestampNanosecondBuilder;
        }
        visitTime() {
          return time_1.TimeBuilder;
        }
        visitTimeSecond() {
          return time_1.TimeSecondBuilder;
        }
        visitTimeMillisecond() {
          return time_1.TimeMillisecondBuilder;
        }
        visitTimeMicrosecond() {
          return time_1.TimeMicrosecondBuilder;
        }
        visitTimeNanosecond() {
          return time_1.TimeNanosecondBuilder;
        }
        visitDecimal() {
          return decimal_1.DecimalBuilder;
        }
        visitList() {
          return list_1.ListBuilder;
        }
        visitStruct() {
          return struct_1.StructBuilder;
        }
        visitUnion() {
          return union_1.UnionBuilder;
        }
        visitDenseUnion() {
          return union_1.DenseUnionBuilder;
        }
        visitSparseUnion() {
          return union_1.SparseUnionBuilder;
        }
        visitDictionary() {
          return dictionary_1.DictionaryBuilder;
        }
        visitInterval() {
          return interval_1.IntervalBuilder;
        }
        visitIntervalDayTime() {
          return interval_1.IntervalDayTimeBuilder;
        }
        visitIntervalYearMonth() {
          return interval_1.IntervalYearMonthBuilder;
        }
        visitFixedSizeList() {
          return fixedsizelist_1.FixedSizeListBuilder;
        }
        visitMap() {
          return map_1.MapBuilder;
        }
      };
      exports.GetBuilderCtor = GetBuilderCtor;
      exports.instance = new GetBuilderCtor();
    }
  });

  // node_modules/apache-arrow/builder/index.js
  var require_builder2 = __commonJS({
    "node_modules/apache-arrow/builder/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DenseUnionBuilder = exports.SparseUnionBuilder = exports.UnionBuilder = exports.StructBuilder = exports.MapBuilder = exports.FixedSizeListBuilder = exports.ListBuilder = exports.BinaryBuilder = exports.Utf8Builder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = exports.FixedSizeBinaryBuilder = exports.DictionaryBuilder = exports.DecimalBuilder = exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = exports.NullBuilder = exports.BoolBuilder = exports.Builder = void 0;
      var builder_1 = require_builder();
      Object.defineProperty(exports, "Builder", { enumerable: true, get: function() {
        return builder_1.Builder;
      } });
      var bool_1 = require_bool();
      Object.defineProperty(exports, "BoolBuilder", { enumerable: true, get: function() {
        return bool_1.BoolBuilder;
      } });
      var null_1 = require_null();
      Object.defineProperty(exports, "NullBuilder", { enumerable: true, get: function() {
        return null_1.NullBuilder;
      } });
      var date_1 = require_date();
      Object.defineProperty(exports, "DateBuilder", { enumerable: true, get: function() {
        return date_1.DateBuilder;
      } });
      Object.defineProperty(exports, "DateDayBuilder", { enumerable: true, get: function() {
        return date_1.DateDayBuilder;
      } });
      Object.defineProperty(exports, "DateMillisecondBuilder", { enumerable: true, get: function() {
        return date_1.DateMillisecondBuilder;
      } });
      var decimal_1 = require_decimal();
      Object.defineProperty(exports, "DecimalBuilder", { enumerable: true, get: function() {
        return decimal_1.DecimalBuilder;
      } });
      var dictionary_1 = require_dictionary();
      Object.defineProperty(exports, "DictionaryBuilder", { enumerable: true, get: function() {
        return dictionary_1.DictionaryBuilder;
      } });
      var fixedsizebinary_1 = require_fixedsizebinary();
      Object.defineProperty(exports, "FixedSizeBinaryBuilder", { enumerable: true, get: function() {
        return fixedsizebinary_1.FixedSizeBinaryBuilder;
      } });
      var float_1 = require_float();
      Object.defineProperty(exports, "FloatBuilder", { enumerable: true, get: function() {
        return float_1.FloatBuilder;
      } });
      Object.defineProperty(exports, "Float16Builder", { enumerable: true, get: function() {
        return float_1.Float16Builder;
      } });
      Object.defineProperty(exports, "Float32Builder", { enumerable: true, get: function() {
        return float_1.Float32Builder;
      } });
      Object.defineProperty(exports, "Float64Builder", { enumerable: true, get: function() {
        return float_1.Float64Builder;
      } });
      var int_1 = require_int();
      Object.defineProperty(exports, "IntBuilder", { enumerable: true, get: function() {
        return int_1.IntBuilder;
      } });
      Object.defineProperty(exports, "Int8Builder", { enumerable: true, get: function() {
        return int_1.Int8Builder;
      } });
      Object.defineProperty(exports, "Int16Builder", { enumerable: true, get: function() {
        return int_1.Int16Builder;
      } });
      Object.defineProperty(exports, "Int32Builder", { enumerable: true, get: function() {
        return int_1.Int32Builder;
      } });
      Object.defineProperty(exports, "Int64Builder", { enumerable: true, get: function() {
        return int_1.Int64Builder;
      } });
      Object.defineProperty(exports, "Uint8Builder", { enumerable: true, get: function() {
        return int_1.Uint8Builder;
      } });
      Object.defineProperty(exports, "Uint16Builder", { enumerable: true, get: function() {
        return int_1.Uint16Builder;
      } });
      Object.defineProperty(exports, "Uint32Builder", { enumerable: true, get: function() {
        return int_1.Uint32Builder;
      } });
      Object.defineProperty(exports, "Uint64Builder", { enumerable: true, get: function() {
        return int_1.Uint64Builder;
      } });
      var time_1 = require_time();
      Object.defineProperty(exports, "TimeBuilder", { enumerable: true, get: function() {
        return time_1.TimeBuilder;
      } });
      Object.defineProperty(exports, "TimeSecondBuilder", { enumerable: true, get: function() {
        return time_1.TimeSecondBuilder;
      } });
      Object.defineProperty(exports, "TimeMillisecondBuilder", { enumerable: true, get: function() {
        return time_1.TimeMillisecondBuilder;
      } });
      Object.defineProperty(exports, "TimeMicrosecondBuilder", { enumerable: true, get: function() {
        return time_1.TimeMicrosecondBuilder;
      } });
      Object.defineProperty(exports, "TimeNanosecondBuilder", { enumerable: true, get: function() {
        return time_1.TimeNanosecondBuilder;
      } });
      var timestamp_1 = require_timestamp();
      Object.defineProperty(exports, "TimestampBuilder", { enumerable: true, get: function() {
        return timestamp_1.TimestampBuilder;
      } });
      Object.defineProperty(exports, "TimestampSecondBuilder", { enumerable: true, get: function() {
        return timestamp_1.TimestampSecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampMillisecondBuilder", { enumerable: true, get: function() {
        return timestamp_1.TimestampMillisecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampMicrosecondBuilder", { enumerable: true, get: function() {
        return timestamp_1.TimestampMicrosecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampNanosecondBuilder", { enumerable: true, get: function() {
        return timestamp_1.TimestampNanosecondBuilder;
      } });
      var interval_1 = require_interval();
      Object.defineProperty(exports, "IntervalBuilder", { enumerable: true, get: function() {
        return interval_1.IntervalBuilder;
      } });
      Object.defineProperty(exports, "IntervalDayTimeBuilder", { enumerable: true, get: function() {
        return interval_1.IntervalDayTimeBuilder;
      } });
      Object.defineProperty(exports, "IntervalYearMonthBuilder", { enumerable: true, get: function() {
        return interval_1.IntervalYearMonthBuilder;
      } });
      var utf8_1 = require_utf82();
      Object.defineProperty(exports, "Utf8Builder", { enumerable: true, get: function() {
        return utf8_1.Utf8Builder;
      } });
      var binary_1 = require_binary();
      Object.defineProperty(exports, "BinaryBuilder", { enumerable: true, get: function() {
        return binary_1.BinaryBuilder;
      } });
      var list_1 = require_list();
      Object.defineProperty(exports, "ListBuilder", { enumerable: true, get: function() {
        return list_1.ListBuilder;
      } });
      var fixedsizelist_1 = require_fixedsizelist();
      Object.defineProperty(exports, "FixedSizeListBuilder", { enumerable: true, get: function() {
        return fixedsizelist_1.FixedSizeListBuilder;
      } });
      var map_1 = require_map();
      Object.defineProperty(exports, "MapBuilder", { enumerable: true, get: function() {
        return map_1.MapBuilder;
      } });
      var struct_1 = require_struct();
      Object.defineProperty(exports, "StructBuilder", { enumerable: true, get: function() {
        return struct_1.StructBuilder;
      } });
      var union_1 = require_union();
      Object.defineProperty(exports, "UnionBuilder", { enumerable: true, get: function() {
        return union_1.UnionBuilder;
      } });
      Object.defineProperty(exports, "SparseUnionBuilder", { enumerable: true, get: function() {
        return union_1.SparseUnionBuilder;
      } });
      Object.defineProperty(exports, "DenseUnionBuilder", { enumerable: true, get: function() {
        return union_1.DenseUnionBuilder;
      } });
      var enum_1 = require_enum();
      var utf8_2 = require_utf82();
      var builder_2 = require_builder();
      var set_1 = require_set();
      var builderctor_1 = require_builderctor();
      builder_2.Builder.new = newBuilder;
      function newBuilder(options) {
        const type = options.type;
        const builder = new (builderctor_1.instance.getVisitFn(type)())(options);
        if (type.children && type.children.length > 0) {
          const children = options["children"] || [];
          const defaultOptions = { "nullValues": options["nullValues"] };
          const getChildOptions = Array.isArray(children) ? (_, i) => children[i] || defaultOptions : ({ name }) => children[name] || defaultOptions;
          type.children.forEach((field, index) => {
            const { type: type2 } = field;
            const opts = getChildOptions(field, index);
            builder.children.push(newBuilder(Object.assign(Object.assign({}, opts), { type: type2 })));
          });
        }
        return builder;
      }
      Object.keys(enum_1.Type).map((T2) => enum_1.Type[T2]).filter((T2) => typeof T2 === "number" && T2 !== enum_1.Type.NONE).forEach((typeId) => {
        const BuilderCtor = builderctor_1.instance.visit(typeId);
        BuilderCtor.prototype._setValue = set_1.instance.getVisitFn(typeId);
      });
      utf8_2.Utf8Builder.prototype._setValue = set_1.instance.visitBinary;
    }
  });

  // node_modules/apache-arrow/fb/File.js
  var require_File = __commonJS({
    "node_modules/apache-arrow/fb/File.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Block = exports.Footer = void 0;
      var flatbuffers_1 = require_flatbuffers();
      var NS13596923344997147894 = require_Schema();
      var Footer = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        static getRootAsFooter(bb, obj) {
          return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        static getSizePrefixedRootAsFooter(bb, obj) {
          bb.setPosition(bb.position() + flatbuffers_1.flatbuffers.SIZE_PREFIX_LENGTH);
          return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
        }
        version() {
          const offset = this.bb.__offset(this.bb_pos, 4);
          return offset ? this.bb.readInt16(this.bb_pos + offset) : NS13596923344997147894.MetadataVersion.V1;
        }
        schema(obj) {
          const offset = this.bb.__offset(this.bb_pos, 6);
          return offset ? (obj || new NS13596923344997147894.Schema()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
        }
        dictionaries(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? (obj || new Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
        }
        dictionariesLength() {
          const offset = this.bb.__offset(this.bb_pos, 8);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        recordBatches(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? (obj || new Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
        }
        recordBatchesLength() {
          const offset = this.bb.__offset(this.bb_pos, 10);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        customMetadata(index, obj) {
          const offset = this.bb.__offset(this.bb_pos, 12);
          return offset ? (obj || new NS13596923344997147894.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
        }
        customMetadataLength() {
          const offset = this.bb.__offset(this.bb_pos, 12);
          return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
        }
        static startFooter(builder) {
          builder.startObject(5);
        }
        static addVersion(builder, version) {
          builder.addFieldInt16(0, version, NS13596923344997147894.MetadataVersion.V1);
        }
        static addSchema(builder, schemaOffset) {
          builder.addFieldOffset(1, schemaOffset, 0);
        }
        static addDictionaries(builder, dictionariesOffset) {
          builder.addFieldOffset(2, dictionariesOffset, 0);
        }
        static startDictionariesVector(builder, numElems) {
          builder.startVector(24, numElems, 8);
        }
        static addRecordBatches(builder, recordBatchesOffset) {
          builder.addFieldOffset(3, recordBatchesOffset, 0);
        }
        static startRecordBatchesVector(builder, numElems) {
          builder.startVector(24, numElems, 8);
        }
        static addCustomMetadata(builder, customMetadataOffset) {
          builder.addFieldOffset(4, customMetadataOffset, 0);
        }
        static createCustomMetadataVector(builder, data) {
          builder.startVector(4, data.length, 4);
          for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
          }
          return builder.endVector();
        }
        static startCustomMetadataVector(builder, numElems) {
          builder.startVector(4, numElems, 4);
        }
        static endFooter(builder) {
          const offset = builder.endObject();
          return offset;
        }
        static finishFooterBuffer(builder, offset) {
          builder.finish(offset);
        }
        static finishSizePrefixedFooterBuffer(builder, offset) {
          builder.finish(offset, void 0, true);
        }
        static createFooter(builder, version, schemaOffset, dictionariesOffset, recordBatchesOffset, customMetadataOffset) {
          Footer.startFooter(builder);
          Footer.addVersion(builder, version);
          Footer.addSchema(builder, schemaOffset);
          Footer.addDictionaries(builder, dictionariesOffset);
          Footer.addRecordBatches(builder, recordBatchesOffset);
          Footer.addCustomMetadata(builder, customMetadataOffset);
          return Footer.endFooter(builder);
        }
      };
      exports.Footer = Footer;
      var Block = class {
        constructor() {
          this.bb = null;
          this.bb_pos = 0;
        }
        __init(i, bb) {
          this.bb_pos = i;
          this.bb = bb;
          return this;
        }
        offset() {
          return this.bb.readInt64(this.bb_pos);
        }
        metaDataLength() {
          return this.bb.readInt32(this.bb_pos + 8);
        }
        bodyLength() {
          return this.bb.readInt64(this.bb_pos + 16);
        }
        static createBlock(builder, offset, metaDataLength, bodyLength) {
          builder.prep(8, 24);
          builder.writeInt64(bodyLength);
          builder.pad(4);
          builder.writeInt32(metaDataLength);
          builder.writeInt64(offset);
          return builder.offset();
        }
      };
      exports.Block = Block;
    }
  });

  // node_modules/apache-arrow/ipc/metadata/file.js
  var require_file = __commonJS({
    "node_modules/apache-arrow/ipc/metadata/file.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FileBlock = exports.Footer = void 0;
      var File_1 = require_File();
      var flatbuffers_1 = require_flatbuffers();
      var Long = flatbuffers_1.flatbuffers.Long;
      var Builder2 = flatbuffers_1.flatbuffers.Builder;
      var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
      var schema_1 = require_schema();
      var enum_1 = require_enum();
      var buffer_1 = require_buffer();
      var Footer_ = class {
        constructor(schema, version = enum_1.MetadataVersion.V4, recordBatches, dictionaryBatches) {
          this.schema = schema;
          this.version = version;
          recordBatches && (this._recordBatches = recordBatches);
          dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
        }
        static decode(buf) {
          buf = new ByteBuffer(buffer_1.toUint8Array(buf));
          const footer = File_1.Footer.getRootAsFooter(buf);
          const schema = schema_1.Schema.decode(footer.schema());
          return new OffHeapFooter(schema, footer);
        }
        static encode(footer) {
          const b = new Builder2();
          const schemaOffset = schema_1.Schema.encode(b, footer.schema);
          File_1.Footer.startRecordBatchesVector(b, footer.numRecordBatches);
          [...footer.recordBatches()].slice().reverse().forEach((rb) => FileBlock.encode(b, rb));
          const recordBatchesOffset = b.endVector();
          File_1.Footer.startDictionariesVector(b, footer.numDictionaries);
          [...footer.dictionaryBatches()].slice().reverse().forEach((db) => FileBlock.encode(b, db));
          const dictionaryBatchesOffset = b.endVector();
          File_1.Footer.startFooter(b);
          File_1.Footer.addSchema(b, schemaOffset);
          File_1.Footer.addVersion(b, enum_1.MetadataVersion.V4);
          File_1.Footer.addRecordBatches(b, recordBatchesOffset);
          File_1.Footer.addDictionaries(b, dictionaryBatchesOffset);
          File_1.Footer.finishFooterBuffer(b, File_1.Footer.endFooter(b));
          return b.asUint8Array();
        }
        get numRecordBatches() {
          return this._recordBatches.length;
        }
        get numDictionaries() {
          return this._dictionaryBatches.length;
        }
        *recordBatches() {
          for (let block, i = -1, n = this.numRecordBatches; ++i < n; ) {
            if (block = this.getRecordBatch(i)) {
              yield block;
            }
          }
        }
        *dictionaryBatches() {
          for (let block, i = -1, n = this.numDictionaries; ++i < n; ) {
            if (block = this.getDictionaryBatch(i)) {
              yield block;
            }
          }
        }
        getRecordBatch(index) {
          return index >= 0 && index < this.numRecordBatches && this._recordBatches[index] || null;
        }
        getDictionaryBatch(index) {
          return index >= 0 && index < this.numDictionaries && this._dictionaryBatches[index] || null;
        }
      };
      exports.Footer = Footer_;
      var OffHeapFooter = class extends Footer_ {
        constructor(schema, _footer) {
          super(schema, _footer.version());
          this._footer = _footer;
        }
        get numRecordBatches() {
          return this._footer.recordBatchesLength();
        }
        get numDictionaries() {
          return this._footer.dictionariesLength();
        }
        getRecordBatch(index) {
          if (index >= 0 && index < this.numRecordBatches) {
            const fileBlock = this._footer.recordBatches(index);
            if (fileBlock) {
              return FileBlock.decode(fileBlock);
            }
          }
          return null;
        }
        getDictionaryBatch(index) {
          if (index >= 0 && index < this.numDictionaries) {
            const fileBlock = this._footer.dictionaries(index);
            if (fileBlock) {
              return FileBlock.decode(fileBlock);
            }
          }
          return null;
        }
      };
      var FileBlock = class {
        constructor(metaDataLength, bodyLength, offset) {
          this.metaDataLength = metaDataLength;
          this.offset = typeof offset === "number" ? offset : offset.low;
          this.bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
        }
        static decode(block) {
          return new FileBlock(block.metaDataLength(), block.bodyLength(), block.offset());
        }
        static encode(b, fileBlock) {
          const { metaDataLength } = fileBlock;
          const offset = new Long(fileBlock.offset, 0);
          const bodyLength = new Long(fileBlock.bodyLength, 0);
          return File_1.Block.createBlock(b, offset, metaDataLength, bodyLength);
        }
      };
      exports.FileBlock = FileBlock;
    }
  });

  // node_modules/apache-arrow/io/stream.js
  var require_stream = __commonJS({
    "node_modules/apache-arrow/io/stream.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncByteStream = exports.ByteStream = exports.AsyncByteQueue = void 0;
      var tslib_1 = require_tslib();
      var adapters_1 = require_adapters();
      var utf8_1 = require_utf8();
      var interfaces_1 = require_interfaces();
      var buffer_1 = require_buffer();
      var compat_1 = require_compat();
      var AsyncByteQueue = class extends interfaces_1.AsyncQueue {
        write(value) {
          if ((value = buffer_1.toUint8Array(value)).byteLength > 0) {
            return super.write(value);
          }
        }
        toString(sync = false) {
          return sync ? utf8_1.decodeUtf8(this.toUint8Array(true)) : this.toUint8Array(false).then(utf8_1.decodeUtf8);
        }
        toUint8Array(sync = false) {
          return sync ? buffer_1.joinUint8Arrays(this._values)[0] : (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var e_1, _a;
            const buffers = [];
            let byteLength = 0;
            try {
              for (var _b = tslib_1.__asyncValues(this), _c; _c = yield _b.next(), !_c.done; ) {
                const chunk = _c.value;
                buffers.push(chunk);
                byteLength += chunk.byteLength;
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return))
                  yield _a.call(_b);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            return buffer_1.joinUint8Arrays(buffers, byteLength)[0];
          }))();
        }
      };
      exports.AsyncByteQueue = AsyncByteQueue;
      var ByteStream = class {
        constructor(source) {
          if (source) {
            this.source = new ByteStreamSource(adapters_1.default.fromIterable(source));
          }
        }
        [Symbol.iterator]() {
          return this;
        }
        next(value) {
          return this.source.next(value);
        }
        throw(value) {
          return this.source.throw(value);
        }
        return(value) {
          return this.source.return(value);
        }
        peek(size) {
          return this.source.peek(size);
        }
        read(size) {
          return this.source.read(size);
        }
      };
      exports.ByteStream = ByteStream;
      var AsyncByteStream = class {
        constructor(source) {
          if (source instanceof AsyncByteStream) {
            this.source = source.source;
          } else if (source instanceof AsyncByteQueue) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromAsyncIterable(source));
          } else if (compat_1.isReadableNodeStream(source)) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromNodeStream(source));
          } else if (compat_1.isReadableDOMStream(source)) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromDOMStream(source));
          } else if (compat_1.isFetchResponse(source)) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromDOMStream(source.body));
          } else if (compat_1.isIterable(source)) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromIterable(source));
          } else if (compat_1.isPromise(source)) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromAsyncIterable(source));
          } else if (compat_1.isAsyncIterable(source)) {
            this.source = new AsyncByteStreamSource(adapters_1.default.fromAsyncIterable(source));
          }
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        next(value) {
          return this.source.next(value);
        }
        throw(value) {
          return this.source.throw(value);
        }
        return(value) {
          return this.source.return(value);
        }
        get closed() {
          return this.source.closed;
        }
        cancel(reason) {
          return this.source.cancel(reason);
        }
        peek(size) {
          return this.source.peek(size);
        }
        read(size) {
          return this.source.read(size);
        }
      };
      exports.AsyncByteStream = AsyncByteStream;
      var ByteStreamSource = class {
        constructor(source) {
          this.source = source;
        }
        cancel(reason) {
          this.return(reason);
        }
        peek(size) {
          return this.next(size, "peek").value;
        }
        read(size) {
          return this.next(size, "read").value;
        }
        next(size, cmd = "read") {
          return this.source.next({ cmd, size });
        }
        throw(value) {
          return Object.create(this.source.throw && this.source.throw(value) || interfaces_1.ITERATOR_DONE);
        }
        return(value) {
          return Object.create(this.source.return && this.source.return(value) || interfaces_1.ITERATOR_DONE);
        }
      };
      var AsyncByteStreamSource = class {
        constructor(source) {
          this.source = source;
          this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
        }
        cancel(reason) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.return(reason);
          });
        }
        get closed() {
          return this._closedPromise;
        }
        read(size) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.next(size, "read")).value;
          });
        }
        peek(size) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.next(size, "peek")).value;
          });
        }
        next(size, cmd = "read") {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.source.next({ cmd, size });
          });
        }
        throw(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = this.source.throw && (yield this.source.throw(value)) || interfaces_1.ITERATOR_DONE;
            this._closedPromiseResolve && this._closedPromiseResolve();
            this._closedPromiseResolve = void 0;
            return Object.create(result);
          });
        }
        return(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = this.source.return && (yield this.source.return(value)) || interfaces_1.ITERATOR_DONE;
            this._closedPromiseResolve && this._closedPromiseResolve();
            this._closedPromiseResolve = void 0;
            return Object.create(result);
          });
        }
      };
    }
  });

  // node_modules/apache-arrow/io/file.js
  var require_file2 = __commonJS({
    "node_modules/apache-arrow/io/file.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncRandomAccessFile = exports.RandomAccessFile = void 0;
      var tslib_1 = require_tslib();
      var stream_1 = require_stream();
      var buffer_1 = require_buffer();
      var RandomAccessFile = class extends stream_1.ByteStream {
        constructor(buffer, byteLength) {
          super();
          this.position = 0;
          this.buffer = buffer_1.toUint8Array(buffer);
          this.size = typeof byteLength === "undefined" ? this.buffer.byteLength : byteLength;
        }
        readInt32(position) {
          const { buffer, byteOffset } = this.readAt(position, 4);
          return new DataView(buffer, byteOffset).getInt32(0, true);
        }
        seek(position) {
          this.position = Math.min(position, this.size);
          return position < this.size;
        }
        read(nBytes) {
          const { buffer, size, position } = this;
          if (buffer && position < size) {
            if (typeof nBytes !== "number") {
              nBytes = Infinity;
            }
            this.position = Math.min(size, position + Math.min(size - position, nBytes));
            return buffer.subarray(position, this.position);
          }
          return null;
        }
        readAt(position, nBytes) {
          const buf = this.buffer;
          const end = Math.min(this.size, position + nBytes);
          return buf ? buf.subarray(position, end) : new Uint8Array(nBytes);
        }
        close() {
          this.buffer && (this.buffer = null);
        }
        throw(value) {
          this.close();
          return { done: true, value };
        }
        return(value) {
          this.close();
          return { done: true, value };
        }
      };
      exports.RandomAccessFile = RandomAccessFile;
      var AsyncRandomAccessFile = class extends stream_1.AsyncByteStream {
        constructor(file, byteLength) {
          super();
          this.position = 0;
          this._handle = file;
          if (typeof byteLength === "number") {
            this.size = byteLength;
          } else {
            this._pending = (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
              this.size = (yield file.stat()).size;
              delete this._pending;
            }))();
          }
        }
        readInt32(position) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { buffer, byteOffset } = yield this.readAt(position, 4);
            return new DataView(buffer, byteOffset).getInt32(0, true);
          });
        }
        seek(position) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._pending && (yield this._pending);
            this.position = Math.min(position, this.size);
            return position < this.size;
          });
        }
        read(nBytes) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._pending && (yield this._pending);
            const { _handle: file, size, position } = this;
            if (file && position < size) {
              if (typeof nBytes !== "number") {
                nBytes = Infinity;
              }
              let pos = position, offset = 0, bytesRead = 0;
              const end = Math.min(size, pos + Math.min(size - pos, nBytes));
              const buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
              while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) {
                ({ bytesRead } = yield file.read(buffer, offset, buffer.byteLength - offset, pos));
              }
              return buffer;
            }
            return null;
          });
        }
        readAt(position, nBytes) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._pending && (yield this._pending);
            const { _handle: file, size } = this;
            if (file && position + nBytes < size) {
              const end = Math.min(size, position + nBytes);
              const buffer = new Uint8Array(end - position);
              return (yield file.read(buffer, 0, nBytes, position)).buffer;
            }
            return new Uint8Array(nBytes);
          });
        }
        close() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const f = this._handle;
            this._handle = null;
            f && (yield f.close());
          });
        }
        throw(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.close();
            return { done: true, value };
          });
        }
        return(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.close();
            return { done: true, value };
          });
        }
      };
      exports.AsyncRandomAccessFile = AsyncRandomAccessFile;
    }
  });

  // node_modules/apache-arrow/util/int.js
  var require_int2 = __commonJS({
    "node_modules/apache-arrow/util/int.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Int128 = exports.Int64 = exports.Uint64 = exports.BaseInt64 = void 0;
      var carryBit16 = 1 << 16;
      function intAsHex(value) {
        if (value < 0) {
          value = 4294967295 + value + 1;
        }
        return `0x${value.toString(16)}`;
      }
      var kInt32DecimalDigits = 8;
      var kPowersOfTen = [
        1,
        10,
        100,
        1e3,
        1e4,
        1e5,
        1e6,
        1e7,
        1e8
      ];
      var BaseInt64 = class {
        constructor(buffer) {
          this.buffer = buffer;
        }
        high() {
          return this.buffer[1];
        }
        low() {
          return this.buffer[0];
        }
        _times(other) {
          const L = new Uint32Array([
            this.buffer[1] >>> 16,
            this.buffer[1] & 65535,
            this.buffer[0] >>> 16,
            this.buffer[0] & 65535
          ]);
          const R = new Uint32Array([
            other.buffer[1] >>> 16,
            other.buffer[1] & 65535,
            other.buffer[0] >>> 16,
            other.buffer[0] & 65535
          ]);
          let product = L[3] * R[3];
          this.buffer[0] = product & 65535;
          let sum = product >>> 16;
          product = L[2] * R[3];
          sum += product;
          product = L[3] * R[2] >>> 0;
          sum += product;
          this.buffer[0] += sum << 16;
          this.buffer[1] = sum >>> 0 < product ? carryBit16 : 0;
          this.buffer[1] += sum >>> 16;
          this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
          this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16;
          return this;
        }
        _plus(other) {
          const sum = this.buffer[0] + other.buffer[0] >>> 0;
          this.buffer[1] += other.buffer[1];
          if (sum < this.buffer[0] >>> 0) {
            ++this.buffer[1];
          }
          this.buffer[0] = sum;
        }
        lessThan(other) {
          return this.buffer[1] < other.buffer[1] || this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0];
        }
        equals(other) {
          return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
        }
        greaterThan(other) {
          return other.lessThan(this);
        }
        hex() {
          return `${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
        }
      };
      exports.BaseInt64 = BaseInt64;
      var Uint64 = class extends BaseInt64 {
        times(other) {
          this._times(other);
          return this;
        }
        plus(other) {
          this._plus(other);
          return this;
        }
        static from(val, out_buffer = new Uint32Array(2)) {
          return Uint64.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
        }
        static fromNumber(num, out_buffer = new Uint32Array(2)) {
          return Uint64.fromString(num.toString(), out_buffer);
        }
        static fromString(str, out_buffer = new Uint32Array(2)) {
          const length = str.length;
          const out = new Uint64(out_buffer);
          for (let posn = 0; posn < length; ) {
            const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
            const chunk = new Uint64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
            const multiple = new Uint64(new Uint32Array([kPowersOfTen[group], 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
          }
          return out;
        }
        static convertArray(values) {
          const data = new Uint32Array(values.length * 2);
          for (let i = -1, n = values.length; ++i < n; ) {
            Uint64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
          }
          return data;
        }
        static multiply(left, right) {
          const rtrn = new Uint64(new Uint32Array(left.buffer));
          return rtrn.times(right);
        }
        static add(left, right) {
          const rtrn = new Uint64(new Uint32Array(left.buffer));
          return rtrn.plus(right);
        }
      };
      exports.Uint64 = Uint64;
      var Int64 = class extends BaseInt64 {
        negate() {
          this.buffer[0] = ~this.buffer[0] + 1;
          this.buffer[1] = ~this.buffer[1];
          if (this.buffer[0] == 0) {
            ++this.buffer[1];
          }
          return this;
        }
        times(other) {
          this._times(other);
          return this;
        }
        plus(other) {
          this._plus(other);
          return this;
        }
        lessThan(other) {
          const this_high = this.buffer[1] << 0;
          const other_high = other.buffer[1] << 0;
          return this_high < other_high || this_high === other_high && this.buffer[0] < other.buffer[0];
        }
        static from(val, out_buffer = new Uint32Array(2)) {
          return Int64.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
        }
        static fromNumber(num, out_buffer = new Uint32Array(2)) {
          return Int64.fromString(num.toString(), out_buffer);
        }
        static fromString(str, out_buffer = new Uint32Array(2)) {
          const negate = str.startsWith("-");
          const length = str.length;
          const out = new Int64(out_buffer);
          for (let posn = negate ? 1 : 0; posn < length; ) {
            const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
            const chunk = new Int64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
            const multiple = new Int64(new Uint32Array([kPowersOfTen[group], 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
          }
          return negate ? out.negate() : out;
        }
        static convertArray(values) {
          const data = new Uint32Array(values.length * 2);
          for (let i = -1, n = values.length; ++i < n; ) {
            Int64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
          }
          return data;
        }
        static multiply(left, right) {
          const rtrn = new Int64(new Uint32Array(left.buffer));
          return rtrn.times(right);
        }
        static add(left, right) {
          const rtrn = new Int64(new Uint32Array(left.buffer));
          return rtrn.plus(right);
        }
      };
      exports.Int64 = Int64;
      var Int128 = class {
        constructor(buffer) {
          this.buffer = buffer;
        }
        high() {
          return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
        }
        low() {
          return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
        }
        negate() {
          this.buffer[0] = ~this.buffer[0] + 1;
          this.buffer[1] = ~this.buffer[1];
          this.buffer[2] = ~this.buffer[2];
          this.buffer[3] = ~this.buffer[3];
          if (this.buffer[0] == 0) {
            ++this.buffer[1];
          }
          if (this.buffer[1] == 0) {
            ++this.buffer[2];
          }
          if (this.buffer[2] == 0) {
            ++this.buffer[3];
          }
          return this;
        }
        times(other) {
          const L0 = new Uint64(new Uint32Array([this.buffer[3], 0]));
          const L1 = new Uint64(new Uint32Array([this.buffer[2], 0]));
          const L2 = new Uint64(new Uint32Array([this.buffer[1], 0]));
          const L3 = new Uint64(new Uint32Array([this.buffer[0], 0]));
          const R0 = new Uint64(new Uint32Array([other.buffer[3], 0]));
          const R1 = new Uint64(new Uint32Array([other.buffer[2], 0]));
          const R2 = new Uint64(new Uint32Array([other.buffer[1], 0]));
          const R3 = new Uint64(new Uint32Array([other.buffer[0], 0]));
          let product = Uint64.multiply(L3, R3);
          this.buffer[0] = product.low();
          const sum = new Uint64(new Uint32Array([product.high(), 0]));
          product = Uint64.multiply(L2, R3);
          sum.plus(product);
          product = Uint64.multiply(L3, R2);
          sum.plus(product);
          this.buffer[1] = sum.low();
          this.buffer[3] = sum.lessThan(product) ? 1 : 0;
          this.buffer[2] = sum.high();
          const high = new Uint64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
          high.plus(Uint64.multiply(L1, R3)).plus(Uint64.multiply(L2, R2)).plus(Uint64.multiply(L3, R1));
          this.buffer[3] += Uint64.multiply(L0, R3).plus(Uint64.multiply(L1, R2)).plus(Uint64.multiply(L2, R1)).plus(Uint64.multiply(L3, R0)).low();
          return this;
        }
        plus(other) {
          const sums = new Uint32Array(4);
          sums[3] = this.buffer[3] + other.buffer[3] >>> 0;
          sums[2] = this.buffer[2] + other.buffer[2] >>> 0;
          sums[1] = this.buffer[1] + other.buffer[1] >>> 0;
          sums[0] = this.buffer[0] + other.buffer[0] >>> 0;
          if (sums[0] < this.buffer[0] >>> 0) {
            ++sums[1];
          }
          if (sums[1] < this.buffer[1] >>> 0) {
            ++sums[2];
          }
          if (sums[2] < this.buffer[2] >>> 0) {
            ++sums[3];
          }
          this.buffer[3] = sums[3];
          this.buffer[2] = sums[2];
          this.buffer[1] = sums[1];
          this.buffer[0] = sums[0];
          return this;
        }
        hex() {
          return `${intAsHex(this.buffer[3])} ${intAsHex(this.buffer[2])} ${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
        }
        static multiply(left, right) {
          const rtrn = new Int128(new Uint32Array(left.buffer));
          return rtrn.times(right);
        }
        static add(left, right) {
          const rtrn = new Int128(new Uint32Array(left.buffer));
          return rtrn.plus(right);
        }
        static from(val, out_buffer = new Uint32Array(4)) {
          return Int128.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
        }
        static fromNumber(num, out_buffer = new Uint32Array(4)) {
          return Int128.fromString(num.toString(), out_buffer);
        }
        static fromString(str, out_buffer = new Uint32Array(4)) {
          const negate = str.startsWith("-");
          const length = str.length;
          const out = new Int128(out_buffer);
          for (let posn = negate ? 1 : 0; posn < length; ) {
            const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
            const chunk = new Int128(new Uint32Array([parseInt(str.substr(posn, group), 10), 0, 0, 0]));
            const multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
          }
          return negate ? out.negate() : out;
        }
        static convertArray(values) {
          const data = new Uint32Array(values.length * 4);
          for (let i = -1, n = values.length; ++i < n; ) {
            Int128.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 4 * 4 * i, 4));
          }
          return data;
        }
      };
      exports.Int128 = Int128;
    }
  });

  // node_modules/apache-arrow/visitor/vectorloader.js
  var require_vectorloader = __commonJS({
    "node_modules/apache-arrow/visitor/vectorloader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSONVectorLoader = exports.VectorLoader = void 0;
      var data_1 = require_data();
      var schema_1 = require_schema();
      var type_1 = require_type();
      var visitor_1 = require_visitor();
      var bit_1 = require_bit();
      var utf8_1 = require_utf8();
      var int_1 = require_int2();
      var enum_1 = require_enum();
      var buffer_1 = require_buffer();
      var VectorLoader = class extends visitor_1.Visitor {
        constructor(bytes, nodes, buffers, dictionaries) {
          super();
          this.nodesIndex = -1;
          this.buffersIndex = -1;
          this.bytes = bytes;
          this.nodes = nodes;
          this.buffers = buffers;
          this.dictionaries = dictionaries;
        }
        visit(node) {
          return super.visit(node instanceof schema_1.Field ? node.type : node);
        }
        visitNull(type, { length } = this.nextFieldNode()) {
          return data_1.Data.Null(type, 0, length);
        }
        visitBool(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Bool(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitInt(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Int(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitFloat(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Float(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitUtf8(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Utf8(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type));
        }
        visitBinary(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Binary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type));
        }
        visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.FixedSizeBinary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitDate(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Date(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Timestamp(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitTime(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Time(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitDecimal(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Decimal(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitList(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.List(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0]));
        }
        visitStruct(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Struct(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visitMany(type.children));
        }
        visitUnion(type) {
          return type.mode === enum_1.UnionMode.Sparse ? this.visitSparseUnion(type) : this.visitDenseUnion(type);
        }
        visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.readOffsets(type), this.visitMany(type.children));
        }
        visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.visitMany(type.children));
        }
        visitDictionary(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Dictionary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type.indices), this.readDictionary(type));
        }
        visitInterval(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Interval(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
        }
        visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.FixedSizeList(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visit(type.children[0]));
        }
        visitMap(type, { length, nullCount } = this.nextFieldNode()) {
          return data_1.Data.Map(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0]));
        }
        nextFieldNode() {
          return this.nodes[++this.nodesIndex];
        }
        nextBufferRange() {
          return this.buffers[++this.buffersIndex];
        }
        readNullBitmap(type, nullCount, buffer = this.nextBufferRange()) {
          return nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0);
        }
        readOffsets(type, buffer) {
          return this.readData(type, buffer);
        }
        readTypeIds(type, buffer) {
          return this.readData(type, buffer);
        }
        readData(_type, { length, offset } = this.nextBufferRange()) {
          return this.bytes.subarray(offset, offset + length);
        }
        readDictionary(type) {
          return this.dictionaries.get(type.id);
        }
      };
      exports.VectorLoader = VectorLoader;
      var JSONVectorLoader = class extends VectorLoader {
        constructor(sources, nodes, buffers, dictionaries) {
          super(new Uint8Array(0), nodes, buffers, dictionaries);
          this.sources = sources;
        }
        readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
          return nullCount <= 0 ? new Uint8Array(0) : bit_1.packBools(this.sources[offset]);
        }
        readOffsets(_type, { offset } = this.nextBufferRange()) {
          return buffer_1.toArrayBufferView(Uint8Array, buffer_1.toArrayBufferView(Int32Array, this.sources[offset]));
        }
        readTypeIds(type, { offset } = this.nextBufferRange()) {
          return buffer_1.toArrayBufferView(Uint8Array, buffer_1.toArrayBufferView(type.ArrayType, this.sources[offset]));
        }
        readData(type, { offset } = this.nextBufferRange()) {
          const { sources } = this;
          if (type_1.DataType.isTimestamp(type)) {
            return buffer_1.toArrayBufferView(Uint8Array, int_1.Int64.convertArray(sources[offset]));
          } else if ((type_1.DataType.isInt(type) || type_1.DataType.isTime(type)) && type.bitWidth === 64) {
            return buffer_1.toArrayBufferView(Uint8Array, int_1.Int64.convertArray(sources[offset]));
          } else if (type_1.DataType.isDate(type) && type.unit === enum_1.DateUnit.MILLISECOND) {
            return buffer_1.toArrayBufferView(Uint8Array, int_1.Int64.convertArray(sources[offset]));
          } else if (type_1.DataType.isDecimal(type)) {
            return buffer_1.toArrayBufferView(Uint8Array, int_1.Int128.convertArray(sources[offset]));
          } else if (type_1.DataType.isBinary(type) || type_1.DataType.isFixedSizeBinary(type)) {
            return binaryDataFromJSON(sources[offset]);
          } else if (type_1.DataType.isBool(type)) {
            return bit_1.packBools(sources[offset]);
          } else if (type_1.DataType.isUtf8(type)) {
            return utf8_1.encodeUtf8(sources[offset].join(""));
          }
          return buffer_1.toArrayBufferView(Uint8Array, buffer_1.toArrayBufferView(type.ArrayType, sources[offset].map((x) => +x)));
        }
      };
      exports.JSONVectorLoader = JSONVectorLoader;
      function binaryDataFromJSON(values) {
        const joined = values.join("");
        const data = new Uint8Array(joined.length / 2);
        for (let i = 0; i < joined.length; i += 2) {
          data[i >> 1] = parseInt(joined.substr(i, 2), 16);
        }
        return data;
      }
    }
  });

  // node_modules/apache-arrow/vector/row.js
  var require_row = __commonJS({
    "node_modules/apache-arrow/vector/row.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StructRow = exports.MapRow = void 0;
      var pretty_1 = require_pretty();
      var kParent = Symbol.for("parent");
      var kRowIndex = Symbol.for("rowIndex");
      var kKeyToIdx = Symbol.for("keyToIdx");
      var kIdxToVal = Symbol.for("idxToVal");
      var kCustomInspect = Symbol.for("nodejs.util.inspect.custom");
      var Row = class {
        constructor(parent, numKeys) {
          this[kParent] = parent;
          this.size = numKeys;
        }
        entries() {
          return this[Symbol.iterator]();
        }
        has(key) {
          return this.get(key) !== void 0;
        }
        get(key) {
          let val = void 0;
          if (key != null) {
            const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
            let idx = ktoi.get(key);
            if (idx !== void 0) {
              const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
              (val = itov[idx]) !== void 0 || (itov[idx] = val = this.getValue(idx));
            } else if ((idx = this.getIndex(key)) > -1) {
              ktoi.set(key, idx);
              const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
              (val = itov[idx]) !== void 0 || (itov[idx] = val = this.getValue(idx));
            }
          }
          return val;
        }
        set(key, val) {
          if (key != null) {
            const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
            let idx = ktoi.get(key);
            if (idx === void 0) {
              ktoi.set(key, idx = this.getIndex(key));
            }
            if (idx > -1) {
              const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
              itov[idx] = this.setValue(idx, val);
            }
          }
          return this;
        }
        clear() {
          throw new Error(`Clearing ${this[Symbol.toStringTag]} not supported.`);
        }
        delete(_) {
          throw new Error(`Deleting ${this[Symbol.toStringTag]} values not supported.`);
        }
        *[Symbol.iterator]() {
          const ki = this.keys();
          const vi = this.values();
          const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
          const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
          for (let k, v2, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
            k = kr.value;
            v2 = vr.value;
            itov[i] = v2;
            ktoi.has(k) || ktoi.set(k, i);
            yield [k, v2];
          }
        }
        forEach(callbackfn, thisArg) {
          const ki = this.keys();
          const vi = this.values();
          const callback = thisArg === void 0 ? callbackfn : (v2, k, m) => callbackfn.call(thisArg, v2, k, m);
          const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
          const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
          for (let k, v2, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
            k = kr.value;
            v2 = vr.value;
            itov[i] = v2;
            ktoi.has(k) || ktoi.set(k, i);
            callback(v2, k, this);
          }
        }
        toArray() {
          return [...this.values()];
        }
        toJSON() {
          const obj = {};
          this.forEach((val, key) => obj[key] = val);
          return obj;
        }
        inspect() {
          return this.toString();
        }
        [kCustomInspect]() {
          return this.toString();
        }
        toString() {
          const str = [];
          this.forEach((val, key) => {
            key = pretty_1.valueToString(key);
            val = pretty_1.valueToString(val);
            str.push(`${key}: ${val}`);
          });
          return `{ ${str.join(", ")} }`;
        }
      };
      Row[Symbol.toStringTag] = ((proto) => {
        Object.defineProperties(proto, {
          "size": { writable: true, enumerable: false, configurable: false, value: 0 },
          [kParent]: { writable: true, enumerable: false, configurable: false, value: null },
          [kRowIndex]: { writable: true, enumerable: false, configurable: false, value: -1 }
        });
        return proto[Symbol.toStringTag] = "Row";
      })(Row.prototype);
      var MapRow = class extends Row {
        constructor(slice) {
          super(slice, slice.length);
          return createRowProxy(this);
        }
        keys() {
          return this[kParent].getChildAt(0)[Symbol.iterator]();
        }
        values() {
          return this[kParent].getChildAt(1)[Symbol.iterator]();
        }
        getKey(idx) {
          return this[kParent].getChildAt(0).get(idx);
        }
        getIndex(key) {
          return this[kParent].getChildAt(0).indexOf(key);
        }
        getValue(index) {
          return this[kParent].getChildAt(1).get(index);
        }
        setValue(index, value) {
          this[kParent].getChildAt(1).set(index, value);
        }
      };
      exports.MapRow = MapRow;
      var StructRow = class extends Row {
        constructor(parent) {
          super(parent, parent.type.children.length);
          return defineRowProxyProperties(this);
        }
        *keys() {
          for (const field of this[kParent].type.children) {
            yield field.name;
          }
        }
        *values() {
          for (const field of this[kParent].type.children) {
            yield this[field.name];
          }
        }
        getKey(idx) {
          return this[kParent].type.children[idx].name;
        }
        getIndex(key) {
          return this[kParent].type.children.findIndex((f) => f.name === key);
        }
        getValue(index) {
          return this[kParent].getChildAt(index).get(this[kRowIndex]);
        }
        setValue(index, value) {
          return this[kParent].getChildAt(index).set(this[kRowIndex], value);
        }
      };
      exports.StructRow = StructRow;
      Object.setPrototypeOf(Row.prototype, Map.prototype);
      var defineRowProxyProperties = (() => {
        const desc = { enumerable: true, configurable: false, get: null, set: null };
        return (row) => {
          let idx = -1;
          const ktoi = row[kKeyToIdx] || (row[kKeyToIdx] = new Map());
          const getter = (key) => function() {
            return this.get(key);
          };
          const setter = (key) => function(val) {
            return this.set(key, val);
          };
          for (const key of row.keys()) {
            ktoi.set(key, ++idx);
            desc.get = getter(key);
            desc.set = setter(key);
            Object.prototype.hasOwnProperty.call(row, key) || (desc.enumerable = true, Object.defineProperty(row, key, desc));
            Object.prototype.hasOwnProperty.call(row, idx) || (desc.enumerable = false, Object.defineProperty(row, idx, desc));
          }
          desc.get = desc.set = null;
          return row;
        };
      })();
      var createRowProxy = (() => {
        if (typeof Proxy === "undefined") {
          return defineRowProxyProperties;
        }
        const has = Row.prototype.has;
        const get = Row.prototype.get;
        const set = Row.prototype.set;
        const getKey = Row.prototype.getKey;
        const RowProxyHandler = {
          isExtensible() {
            return false;
          },
          deleteProperty() {
            return false;
          },
          preventExtensions() {
            return true;
          },
          ownKeys(row) {
            return [...row.keys()].map((x) => `${x}`);
          },
          has(row, key) {
            switch (key) {
              case "getKey":
              case "getIndex":
              case "getValue":
              case "setValue":
              case "toArray":
              case "toJSON":
              case "inspect":
              case "constructor":
              case "isPrototypeOf":
              case "propertyIsEnumerable":
              case "toString":
              case "toLocaleString":
              case "valueOf":
              case "size":
              case "has":
              case "get":
              case "set":
              case "clear":
              case "delete":
              case "keys":
              case "values":
              case "entries":
              case "forEach":
              case "__proto__":
              case "__defineGetter__":
              case "__defineSetter__":
              case "hasOwnProperty":
              case "__lookupGetter__":
              case "__lookupSetter__":
              case Symbol.iterator:
              case Symbol.toStringTag:
              case kParent:
              case kRowIndex:
              case kIdxToVal:
              case kKeyToIdx:
              case kCustomInspect:
                return true;
            }
            if (typeof key === "number" && !row.has(key)) {
              key = row.getKey(key);
            }
            return row.has(key);
          },
          get(row, key, receiver) {
            switch (key) {
              case "getKey":
              case "getIndex":
              case "getValue":
              case "setValue":
              case "toArray":
              case "toJSON":
              case "inspect":
              case "constructor":
              case "isPrototypeOf":
              case "propertyIsEnumerable":
              case "toString":
              case "toLocaleString":
              case "valueOf":
              case "size":
              case "has":
              case "get":
              case "set":
              case "clear":
              case "delete":
              case "keys":
              case "values":
              case "entries":
              case "forEach":
              case "__proto__":
              case "__defineGetter__":
              case "__defineSetter__":
              case "hasOwnProperty":
              case "__lookupGetter__":
              case "__lookupSetter__":
              case Symbol.iterator:
              case Symbol.toStringTag:
              case kParent:
              case kRowIndex:
              case kIdxToVal:
              case kKeyToIdx:
              case kCustomInspect:
                return Reflect.get(row, key, receiver);
            }
            if (typeof key === "number" && !has.call(receiver, key)) {
              key = getKey.call(receiver, key);
            }
            return get.call(receiver, key);
          },
          set(row, key, val, receiver) {
            switch (key) {
              case kParent:
              case kRowIndex:
              case kIdxToVal:
              case kKeyToIdx:
                return Reflect.set(row, key, val, receiver);
              case "getKey":
              case "getIndex":
              case "getValue":
              case "setValue":
              case "toArray":
              case "toJSON":
              case "inspect":
              case "constructor":
              case "isPrototypeOf":
              case "propertyIsEnumerable":
              case "toString":
              case "toLocaleString":
              case "valueOf":
              case "size":
              case "has":
              case "get":
              case "set":
              case "clear":
              case "delete":
              case "keys":
              case "values":
              case "entries":
              case "forEach":
              case "__proto__":
              case "__defineGetter__":
              case "__defineSetter__":
              case "hasOwnProperty":
              case "__lookupGetter__":
              case "__lookupSetter__":
              case Symbol.iterator:
              case Symbol.toStringTag:
                return false;
            }
            if (typeof key === "number" && !has.call(receiver, key)) {
              key = getKey.call(receiver, key);
            }
            return has.call(receiver, key) ? !!set.call(receiver, key, val) : false;
          }
        };
        return (row) => new Proxy(row, RowProxyHandler);
      })();
    }
  });

  // node_modules/apache-arrow/util/vector.js
  var require_vector2 = __commonJS({
    "node_modules/apache-arrow/util/vector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createElementComparator = exports.clampRange = exports.clampIndex = void 0;
      var vector_1 = require_vector();
      var row_1 = require_row();
      var buffer_1 = require_buffer();
      var compat_1 = require_compat();
      function clampIndex(source, index, then) {
        const length = source.length;
        const adjust = index > -1 ? index : length + index % length;
        return then ? then(source, adjust) : adjust;
      }
      exports.clampIndex = clampIndex;
      var tmp;
      function clampRange(source, begin, end, then) {
        const { length: len = 0 } = source;
        let lhs = typeof begin !== "number" ? 0 : begin;
        let rhs = typeof end !== "number" ? len : end;
        lhs < 0 && (lhs = (lhs % len + len) % len);
        rhs < 0 && (rhs = (rhs % len + len) % len);
        rhs < lhs && (tmp = lhs, lhs = rhs, rhs = tmp);
        rhs > len && (rhs = len);
        return then ? then(source, lhs, rhs) : [lhs, rhs];
      }
      exports.clampRange = clampRange;
      var big0 = compat_1.BigIntAvailable ? compat_1.BigInt(0) : 0;
      var isNaNFast = (value) => value !== value;
      function createElementComparator(search) {
        const typeofSearch = typeof search;
        if (typeofSearch !== "object" || search === null) {
          if (isNaNFast(search)) {
            return isNaNFast;
          }
          return typeofSearch !== "bigint" ? (value) => value === search : (value) => big0 + value === search;
        }
        if (search instanceof Date) {
          const valueOfSearch = search.valueOf();
          return (value) => value instanceof Date ? value.valueOf() === valueOfSearch : false;
        }
        if (ArrayBuffer.isView(search)) {
          return (value) => value ? buffer_1.compareArrayLike(search, value) : false;
        }
        if (search instanceof Map) {
          return creatMapComparator(search);
        }
        if (Array.isArray(search)) {
          return createArrayLikeComparator(search);
        }
        if (search instanceof vector_1.Vector) {
          return createVectorComparator(search);
        }
        return createObjectComparator(search);
      }
      exports.createElementComparator = createElementComparator;
      function createArrayLikeComparator(lhs) {
        const comparators = [];
        for (let i = -1, n = lhs.length; ++i < n; ) {
          comparators[i] = createElementComparator(lhs[i]);
        }
        return createSubElementsComparator(comparators);
      }
      function creatMapComparator(lhs) {
        let i = -1;
        const comparators = [];
        lhs.forEach((v2) => comparators[++i] = createElementComparator(v2));
        return createSubElementsComparator(comparators);
      }
      function createVectorComparator(lhs) {
        const comparators = [];
        for (let i = -1, n = lhs.length; ++i < n; ) {
          comparators[i] = createElementComparator(lhs.get(i));
        }
        return createSubElementsComparator(comparators);
      }
      function createObjectComparator(lhs) {
        const keys = Object.keys(lhs);
        if (keys.length === 0) {
          return () => false;
        }
        const comparators = [];
        for (let i = -1, n = keys.length; ++i < n; ) {
          comparators[i] = createElementComparator(lhs[keys[i]]);
        }
        return createSubElementsComparator(comparators, keys);
      }
      function createSubElementsComparator(comparators, keys) {
        return (rhs) => {
          if (!rhs || typeof rhs !== "object") {
            return false;
          }
          switch (rhs.constructor) {
            case Array:
              return compareArray(comparators, rhs);
            case Map:
            case row_1.MapRow:
            case row_1.StructRow:
              return compareObject(comparators, rhs, rhs.keys());
            case Object:
            case void 0:
              return compareObject(comparators, rhs, keys || Object.keys(rhs));
          }
          return rhs instanceof vector_1.Vector ? compareVector(comparators, rhs) : false;
        };
      }
      function compareArray(comparators, arr) {
        const n = comparators.length;
        if (arr.length !== n) {
          return false;
        }
        for (let i = -1; ++i < n; ) {
          if (!comparators[i](arr[i])) {
            return false;
          }
        }
        return true;
      }
      function compareVector(comparators, vec) {
        const n = comparators.length;
        if (vec.length !== n) {
          return false;
        }
        for (let i = -1; ++i < n; ) {
          if (!comparators[i](vec.get(i))) {
            return false;
          }
        }
        return true;
      }
      function compareObject(comparators, obj, keys) {
        const lKeyItr = keys[Symbol.iterator]();
        const rKeyItr = obj instanceof Map ? obj.keys() : Object.keys(obj)[Symbol.iterator]();
        const rValItr = obj instanceof Map ? obj.values() : Object.values(obj)[Symbol.iterator]();
        let i = 0;
        const n = comparators.length;
        let rVal = rValItr.next();
        let lKey = lKeyItr.next();
        let rKey = rKeyItr.next();
        for (; i < n && !lKey.done && !rKey.done && !rVal.done; ++i, lKey = lKeyItr.next(), rKey = rKeyItr.next(), rVal = rValItr.next()) {
          if (lKey.value !== rKey.value || !comparators[i](rVal.value)) {
            break;
          }
        }
        if (i === n && lKey.done && rKey.done && rVal.done) {
          return true;
        }
        lKeyItr.return && lKeyItr.return();
        rKeyItr.return && rKeyItr.return();
        rValItr.return && rValItr.return();
        return false;
      }
    }
  });

  // node_modules/apache-arrow/util/args.js
  var require_args = __commonJS({
    "node_modules/apache-arrow/util/args.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.selectColumnChildrenArgs = exports.selectVectorChildrenArgs = exports.selectChunkArgs = exports.selectFieldArgs = exports.selectColumnArgs = exports.selectArgs = exports.arrayTypeToDataType = exports.isTypedArray = void 0;
      var data_1 = require_data();
      var schema_1 = require_schema();
      var column_1 = require_column();
      var vector_1 = require_vector();
      var type_1 = require_type();
      var chunked_1 = require_chunked();
      var isArray = Array.isArray;
      function isTypedArray(arr) {
        return ArrayBuffer.isView(arr) && "BYTES_PER_ELEMENT" in arr;
      }
      exports.isTypedArray = isTypedArray;
      function arrayTypeToDataType(ctor) {
        switch (ctor) {
          case Int8Array:
            return type_1.Int8;
          case Int16Array:
            return type_1.Int16;
          case Int32Array:
            return type_1.Int32;
          case BigInt64Array:
            return type_1.Int64;
          case Uint8Array:
            return type_1.Uint8;
          case Uint16Array:
            return type_1.Uint16;
          case Uint32Array:
            return type_1.Uint32;
          case BigUint64Array:
            return type_1.Uint64;
          case Float32Array:
            return type_1.Float32;
          case Float64Array:
            return type_1.Float64;
          default:
            return null;
        }
      }
      exports.arrayTypeToDataType = arrayTypeToDataType;
      function vectorFromTypedArray(array) {
        const ArrowType = arrayTypeToDataType(array.constructor);
        if (!ArrowType) {
          throw new TypeError("Unrecognized Array input");
        }
        const type = new ArrowType();
        const data = data_1.Data.new(type, 0, array.length, 0, [void 0, array]);
        return vector_1.Vector.new(data);
      }
      exports.selectArgs = (Ctor, vals) => _selectArgs(Ctor, vals, [], 0);
      exports.selectColumnArgs = (args) => {
        const [fields, values] = _selectFieldArgs(args, [[], []]);
        return values.map((x, i) => x instanceof column_1.Column ? column_1.Column.new(x.field.clone(fields[i]), x) : x instanceof vector_1.Vector ? column_1.Column.new(fields[i], x) : isTypedArray(x) ? column_1.Column.new(fields[i], vectorFromTypedArray(x)) : column_1.Column.new(fields[i], []));
      };
      exports.selectFieldArgs = (args) => _selectFieldArgs(args, [[], []]);
      exports.selectChunkArgs = (Ctor, vals) => _selectChunkArgs(Ctor, vals, [], 0);
      exports.selectVectorChildrenArgs = (Ctor, vals) => _selectVectorChildrenArgs(Ctor, vals, [], 0);
      exports.selectColumnChildrenArgs = (Ctor, vals) => _selectColumnChildrenArgs(Ctor, vals, [], 0);
      function _selectArgs(Ctor, vals, res, idx) {
        let value, j2 = idx;
        let i = -1;
        const n = vals.length;
        while (++i < n) {
          if (isArray(value = vals[i])) {
            j2 = _selectArgs(Ctor, value, res, j2).length;
          } else if (value instanceof Ctor) {
            res[j2++] = value;
          }
        }
        return res;
      }
      function _selectChunkArgs(Ctor, vals, res, idx) {
        let value, j2 = idx;
        let i = -1;
        const n = vals.length;
        while (++i < n) {
          if (isArray(value = vals[i])) {
            j2 = _selectChunkArgs(Ctor, value, res, j2).length;
          } else if (value instanceof chunked_1.Chunked) {
            j2 = _selectChunkArgs(Ctor, value.chunks, res, j2).length;
          } else if (value instanceof Ctor) {
            res[j2++] = value;
          }
        }
        return res;
      }
      function _selectVectorChildrenArgs(Ctor, vals, res, idx) {
        let value, j2 = idx;
        let i = -1;
        const n = vals.length;
        while (++i < n) {
          if (isArray(value = vals[i])) {
            j2 = _selectVectorChildrenArgs(Ctor, value, res, j2).length;
          } else if (value instanceof Ctor) {
            j2 = _selectArgs(vector_1.Vector, value.schema.fields.map((_, i2) => value.getChildAt(i2)), res, j2).length;
          } else if (value instanceof vector_1.Vector) {
            res[j2++] = value;
          }
        }
        return res;
      }
      function _selectColumnChildrenArgs(Ctor, vals, res, idx) {
        let value, j2 = idx;
        let i = -1;
        const n = vals.length;
        while (++i < n) {
          if (isArray(value = vals[i])) {
            j2 = _selectColumnChildrenArgs(Ctor, value, res, j2).length;
          } else if (value instanceof Ctor) {
            j2 = _selectArgs(column_1.Column, value.schema.fields.map((f, i2) => column_1.Column.new(f, value.getChildAt(i2))), res, j2).length;
          } else if (value instanceof column_1.Column) {
            res[j2++] = value;
          }
        }
        return res;
      }
      var toKeysAndValues = (xs, [k, v2], i) => (xs[0][i] = k, xs[1][i] = v2, xs);
      function _selectFieldArgs(vals, ret) {
        let keys;
        let n;
        switch (n = vals.length) {
          case 0:
            return ret;
          case 1:
            keys = ret[0];
            if (!vals[0]) {
              return ret;
            }
            if (isArray(vals[0])) {
              return _selectFieldArgs(vals[0], ret);
            }
            if (!(vals[0] instanceof data_1.Data || vals[0] instanceof vector_1.Vector || isTypedArray(vals[0]) || vals[0] instanceof type_1.DataType)) {
              [keys, vals] = Object.entries(vals[0]).reduce(toKeysAndValues, ret);
            }
            break;
          default:
            !isArray(keys = vals[n - 1]) ? (vals = isArray(vals[0]) ? vals[0] : vals, keys = []) : vals = isArray(vals[0]) ? vals[0] : vals.slice(0, n - 1);
        }
        let fieldIndex = -1;
        let valueIndex = -1;
        let idx = -1;
        const len = vals.length;
        let field;
        let val;
        const [fields, values] = ret;
        while (++idx < len) {
          val = vals[idx];
          if (val instanceof column_1.Column && (values[++valueIndex] = val)) {
            fields[++fieldIndex] = val.field.clone(keys[idx], val.type, true);
          } else {
            ({ [idx]: field = idx } = keys);
            if (val instanceof type_1.DataType && (values[++valueIndex] = val)) {
              fields[++fieldIndex] = schema_1.Field.new(field, val, true);
            } else if ((val === null || val === void 0 ? void 0 : val.type) && (values[++valueIndex] = val)) {
              val instanceof data_1.Data && (values[valueIndex] = val = vector_1.Vector.new(val));
              fields[++fieldIndex] = schema_1.Field.new(field, val.type, true);
            }
          }
        }
        return ret;
      }
    }
  });

  // node_modules/apache-arrow/vector/chunked.js
  var require_chunked = __commonJS({
    "node_modules/apache-arrow/vector/chunked.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Chunked = void 0;
      var vector_1 = require_vector2();
      var type_1 = require_type();
      var args_1 = require_args();
      var vector_2 = require_vector();
      var ChunkedIterator = class {
        constructor(chunks) {
          this.chunks = chunks;
          this.chunkIndex = 0;
          this.chunkIterator = this.getChunkIterator();
        }
        next() {
          while (this.chunkIndex < this.chunks.length) {
            const next = this.chunkIterator.next();
            if (!next.done) {
              return next;
            }
            if (++this.chunkIndex < this.chunks.length) {
              this.chunkIterator = this.getChunkIterator();
            }
          }
          return { done: true, value: null };
        }
        getChunkIterator() {
          return this.chunks[this.chunkIndex][Symbol.iterator]();
        }
        [Symbol.iterator]() {
          return this;
        }
      };
      var Chunked = class extends vector_2.AbstractVector {
        constructor(type, chunks = [], offsets = calculateOffsets(chunks)) {
          super();
          this._nullCount = -1;
          this._type = type;
          this._chunks = chunks;
          this._chunkOffsets = offsets;
          this._length = offsets[offsets.length - 1];
          this._numChildren = (this._type.children || []).length;
        }
        static flatten(...vectors) {
          return args_1.selectChunkArgs(vector_2.Vector, vectors);
        }
        static concat(...vectors) {
          const chunks = Chunked.flatten(...vectors);
          return new Chunked(chunks[0].type, chunks);
        }
        get type() {
          return this._type;
        }
        get length() {
          return this._length;
        }
        get chunks() {
          return this._chunks;
        }
        get typeId() {
          return this._type.typeId;
        }
        get VectorName() {
          return `Chunked<${this._type}>`;
        }
        get data() {
          return this._chunks[0] ? this._chunks[0].data : null;
        }
        get ArrayType() {
          return this._type.ArrayType;
        }
        get numChildren() {
          return this._numChildren;
        }
        get stride() {
          return this._chunks[0] ? this._chunks[0].stride : 1;
        }
        get byteLength() {
          return this._chunks.reduce((byteLength, chunk) => byteLength + chunk.byteLength, 0);
        }
        get nullCount() {
          let nullCount = this._nullCount;
          if (nullCount < 0) {
            this._nullCount = nullCount = this._chunks.reduce((x, { nullCount: nullCount2 }) => x + nullCount2, 0);
          }
          return nullCount;
        }
        get indices() {
          if (type_1.DataType.isDictionary(this._type)) {
            if (!this._indices) {
              const chunks = this._chunks;
              this._indices = chunks.length === 1 ? chunks[0].indices : Chunked.concat(...chunks.map((x) => x.indices));
            }
            return this._indices;
          }
          return null;
        }
        get dictionary() {
          if (type_1.DataType.isDictionary(this._type)) {
            return this._chunks[this._chunks.length - 1].data.dictionary;
          }
          return null;
        }
        [Symbol.iterator]() {
          return new ChunkedIterator(this._chunks);
        }
        clone(chunks = this._chunks) {
          return new Chunked(this._type, chunks);
        }
        concat(...others) {
          return this.clone(Chunked.flatten(this, ...others));
        }
        slice(begin, end) {
          return vector_1.clampRange(this, begin, end, this._sliceInternal);
        }
        getChildAt(index) {
          if (index < 0 || index >= this._numChildren) {
            return null;
          }
          const columns = this._children || (this._children = []);
          let child, field, chunks;
          if (child = columns[index]) {
            return child;
          }
          if (field = (this._type.children || [])[index]) {
            chunks = this._chunks.map((vector) => vector.getChildAt(index)).filter((vec) => vec != null);
            if (chunks.length > 0) {
              return columns[index] = new Chunked(field.type, chunks);
            }
          }
          return null;
        }
        search(index, then) {
          const idx = index;
          const offsets = this._chunkOffsets;
          let rhs = offsets.length - 1;
          if (idx < 0) {
            return null;
          }
          if (idx >= offsets[rhs]) {
            return null;
          }
          if (rhs <= 1) {
            return then ? then(this, 0, idx) : [0, idx];
          }
          let lhs = 0, pos = 0, mid = 0;
          do {
            if (lhs + 1 === rhs) {
              return then ? then(this, lhs, idx - pos) : [lhs, idx - pos];
            }
            mid = lhs + (rhs - lhs) / 2 | 0;
            idx >= offsets[mid] ? lhs = mid : rhs = mid;
          } while (idx < offsets[rhs] && idx >= (pos = offsets[lhs]));
          return null;
        }
        isValid(index) {
          return !!this.search(index, this.isValidInternal);
        }
        get(index) {
          return this.search(index, this.getInternal);
        }
        set(index, value) {
          this.search(index, ({ chunks }, i, j2) => chunks[i].set(j2, value));
        }
        indexOf(element, offset) {
          if (offset && typeof offset === "number") {
            return this.search(offset, (self2, i, j2) => this.indexOfInternal(self2, i, j2, element));
          }
          return this.indexOfInternal(this, 0, Math.max(0, offset || 0), element);
        }
        toArray() {
          const { chunks } = this;
          const n = chunks.length;
          let ArrayType = this._type.ArrayType;
          if (n <= 0) {
            return new ArrayType(0);
          }
          if (n <= 1) {
            return chunks[0].toArray();
          }
          let len = 0;
          const src = new Array(n);
          for (let i = -1; ++i < n; ) {
            len += (src[i] = chunks[i].toArray()).length;
          }
          if (ArrayType !== src[0].constructor) {
            ArrayType = src[0].constructor;
          }
          const dst = new ArrayType(len);
          const set = ArrayType === Array ? arraySet : typedSet;
          for (let i = -1, idx = 0; ++i < n; ) {
            idx = set(src[i], dst, idx);
          }
          return dst;
        }
        getInternal({ _chunks }, i, j2) {
          return _chunks[i].get(j2);
        }
        isValidInternal({ _chunks }, i, j2) {
          return _chunks[i].isValid(j2);
        }
        indexOfInternal({ _chunks }, chunkIndex, fromIndex, element) {
          let i = chunkIndex - 1;
          const n = _chunks.length;
          let start = fromIndex, offset = 0, found = -1;
          while (++i < n) {
            if (~(found = _chunks[i].indexOf(element, start))) {
              return offset + found;
            }
            start = 0;
            offset += _chunks[i].length;
          }
          return -1;
        }
        _sliceInternal(self2, begin, end) {
          const slices = [];
          const { chunks, _chunkOffsets: chunkOffsets } = self2;
          for (let i = -1, n = chunks.length; ++i < n; ) {
            const chunk = chunks[i];
            const chunkLength = chunk.length;
            const chunkOffset = chunkOffsets[i];
            if (chunkOffset >= end) {
              break;
            }
            if (begin >= chunkOffset + chunkLength) {
              continue;
            }
            if (chunkOffset >= begin && chunkOffset + chunkLength <= end) {
              slices.push(chunk);
              continue;
            }
            const from = Math.max(0, begin - chunkOffset);
            const to = Math.min(end - chunkOffset, chunkLength);
            slices.push(chunk.slice(from, to));
          }
          return self2.clone(slices);
        }
      };
      exports.Chunked = Chunked;
      function calculateOffsets(vectors) {
        const offsets = new Uint32Array((vectors || []).length + 1);
        let offset = offsets[0] = 0;
        const length = offsets.length;
        for (let index = 0; ++index < length; ) {
          offsets[index] = offset += vectors[index - 1].length;
        }
        return offsets;
      }
      var typedSet = (src, dst, offset) => {
        dst.set(src, offset);
        return offset + src.length;
      };
      var arraySet = (src, dst, offset) => {
        let idx = offset;
        for (let i = -1, n = src.length; ++i < n; ) {
          dst[idx++] = src[i];
        }
        return idx;
      };
    }
  });

  // node_modules/apache-arrow/column.js
  var require_column = __commonJS({
    "node_modules/apache-arrow/column.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Column = void 0;
      var schema_1 = require_schema();
      var vector_1 = require_vector();
      var chunked_1 = require_chunked();
      var Column = class extends chunked_1.Chunked {
        constructor(field, vectors = [], offsets) {
          vectors = chunked_1.Chunked.flatten(...vectors);
          super(field.type, vectors, offsets);
          this._field = field;
          if (vectors.length === 1 && !(this instanceof SingleChunkColumn)) {
            return new SingleChunkColumn(field, vectors[0], this._chunkOffsets);
          }
        }
        static new(...args) {
          let [field, data, ...rest] = args;
          if (typeof field !== "string" && !(field instanceof schema_1.Field)) {
            data = field;
            field = "";
          }
          const chunks = chunked_1.Chunked.flatten(Array.isArray(data) ? [...data, ...rest] : data instanceof vector_1.Vector ? [data, ...rest] : [vector_1.Vector.new(data, ...rest)]);
          if (typeof field === "string") {
            const type = chunks[0].data.type;
            field = new schema_1.Field(field, type, true);
          } else if (!field.nullable && chunks.some(({ nullCount }) => nullCount > 0)) {
            field = field.clone({ nullable: true });
          }
          return new Column(field, chunks);
        }
        get field() {
          return this._field;
        }
        get name() {
          return this._field.name;
        }
        get nullable() {
          return this._field.nullable;
        }
        get metadata() {
          return this._field.metadata;
        }
        clone(chunks = this._chunks) {
          return new Column(this._field, chunks);
        }
        getChildAt(index) {
          if (index < 0 || index >= this.numChildren) {
            return null;
          }
          const columns = this._children || (this._children = []);
          let column, field, chunks;
          if (column = columns[index]) {
            return column;
          }
          if (field = (this.type.children || [])[index]) {
            chunks = this._chunks.map((vector) => vector.getChildAt(index)).filter((vec) => vec != null);
            if (chunks.length > 0) {
              return columns[index] = new Column(field, chunks);
            }
          }
          return null;
        }
      };
      exports.Column = Column;
      var SingleChunkColumn = class extends Column {
        constructor(field, vector, offsets) {
          super(field, [vector], offsets);
          this._chunk = vector;
        }
        search(index, then) {
          return then ? then(this, 0, index) : [0, index];
        }
        isValid(index) {
          return this._chunk.isValid(index);
        }
        get(index) {
          return this._chunk.get(index);
        }
        set(index, value) {
          this._chunk.set(index, value);
        }
        indexOf(element, offset) {
          return this._chunk.indexOf(element, offset);
        }
      };
    }
  });

  // node_modules/apache-arrow/visitor/typeassembler.js
  var require_typeassembler = __commonJS({
    "node_modules/apache-arrow/visitor/typeassembler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.TypeAssembler = void 0;
      var flatbuffers_1 = require_flatbuffers();
      var Long = flatbuffers_1.flatbuffers.Long;
      var visitor_1 = require_visitor();
      var Schema_1 = require_Schema();
      var TypeAssembler = class extends visitor_1.Visitor {
        visit(node, builder) {
          return node == null || builder == null ? void 0 : super.visit(node, builder);
        }
        visitNull(_node, b) {
          Schema_1.Null.startNull(b);
          return Schema_1.Null.endNull(b);
        }
        visitInt(node, b) {
          Schema_1.Int.startInt(b);
          Schema_1.Int.addBitWidth(b, node.bitWidth);
          Schema_1.Int.addIsSigned(b, node.isSigned);
          return Schema_1.Int.endInt(b);
        }
        visitFloat(node, b) {
          Schema_1.FloatingPoint.startFloatingPoint(b);
          Schema_1.FloatingPoint.addPrecision(b, node.precision);
          return Schema_1.FloatingPoint.endFloatingPoint(b);
        }
        visitBinary(_node, b) {
          Schema_1.Binary.startBinary(b);
          return Schema_1.Binary.endBinary(b);
        }
        visitBool(_node, b) {
          Schema_1.Bool.startBool(b);
          return Schema_1.Bool.endBool(b);
        }
        visitUtf8(_node, b) {
          Schema_1.Utf8.startUtf8(b);
          return Schema_1.Utf8.endUtf8(b);
        }
        visitDecimal(node, b) {
          Schema_1.Decimal.startDecimal(b);
          Schema_1.Decimal.addScale(b, node.scale);
          Schema_1.Decimal.addPrecision(b, node.precision);
          return Schema_1.Decimal.endDecimal(b);
        }
        visitDate(node, b) {
          Schema_1.Date.startDate(b);
          Schema_1.Date.addUnit(b, node.unit);
          return Schema_1.Date.endDate(b);
        }
        visitTime(node, b) {
          Schema_1.Time.startTime(b);
          Schema_1.Time.addUnit(b, node.unit);
          Schema_1.Time.addBitWidth(b, node.bitWidth);
          return Schema_1.Time.endTime(b);
        }
        visitTimestamp(node, b) {
          const timezone = node.timezone && b.createString(node.timezone) || void 0;
          Schema_1.Timestamp.startTimestamp(b);
          Schema_1.Timestamp.addUnit(b, node.unit);
          if (timezone !== void 0) {
            Schema_1.Timestamp.addTimezone(b, timezone);
          }
          return Schema_1.Timestamp.endTimestamp(b);
        }
        visitInterval(node, b) {
          Schema_1.Interval.startInterval(b);
          Schema_1.Interval.addUnit(b, node.unit);
          return Schema_1.Interval.endInterval(b);
        }
        visitList(_node, b) {
          Schema_1.List.startList(b);
          return Schema_1.List.endList(b);
        }
        visitStruct(_node, b) {
          Schema_1.Struct_.startStruct_(b);
          return Schema_1.Struct_.endStruct_(b);
        }
        visitUnion(node, b) {
          Schema_1.Union.startTypeIdsVector(b, node.typeIds.length);
          const typeIds = Schema_1.Union.createTypeIdsVector(b, node.typeIds);
          Schema_1.Union.startUnion(b);
          Schema_1.Union.addMode(b, node.mode);
          Schema_1.Union.addTypeIds(b, typeIds);
          return Schema_1.Union.endUnion(b);
        }
        visitDictionary(node, b) {
          const indexType = this.visit(node.indices, b);
          Schema_1.DictionaryEncoding.startDictionaryEncoding(b);
          Schema_1.DictionaryEncoding.addId(b, new Long(node.id, 0));
          Schema_1.DictionaryEncoding.addIsOrdered(b, node.isOrdered);
          if (indexType !== void 0) {
            Schema_1.DictionaryEncoding.addIndexType(b, indexType);
          }
          return Schema_1.DictionaryEncoding.endDictionaryEncoding(b);
        }
        visitFixedSizeBinary(node, b) {
          Schema_1.FixedSizeBinary.startFixedSizeBinary(b);
          Schema_1.FixedSizeBinary.addByteWidth(b, node.byteWidth);
          return Schema_1.FixedSizeBinary.endFixedSizeBinary(b);
        }
        visitFixedSizeList(node, b) {
          Schema_1.FixedSizeList.startFixedSizeList(b);
          Schema_1.FixedSizeList.addListSize(b, node.listSize);
          return Schema_1.FixedSizeList.endFixedSizeList(b);
        }
        visitMap(node, b) {
          Schema_1.Map.startMap(b);
          Schema_1.Map.addKeysSorted(b, node.keysSorted);
          return Schema_1.Map.endMap(b);
        }
      };
      exports.TypeAssembler = TypeAssembler;
      exports.instance = new TypeAssembler();
    }
  });

  // node_modules/apache-arrow/ipc/metadata/json.js
  var require_json = __commonJS({
    "node_modules/apache-arrow/ipc/metadata/json.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fieldFromJSON = exports.dictionaryBatchFromJSON = exports.recordBatchFromJSON = exports.schemaFromJSON = void 0;
      var schema_1 = require_schema();
      var type_1 = require_type();
      var message_1 = require_message();
      var enum_1 = require_enum();
      function schemaFromJSON(_schema, dictionaries = new Map()) {
        return new schema_1.Schema(schemaFieldsFromJSON(_schema, dictionaries), customMetadataFromJSON(_schema["customMetadata"]), dictionaries);
      }
      exports.schemaFromJSON = schemaFromJSON;
      function recordBatchFromJSON(b) {
        return new message_1.RecordBatch(b["count"], fieldNodesFromJSON(b["columns"]), buffersFromJSON(b["columns"]));
      }
      exports.recordBatchFromJSON = recordBatchFromJSON;
      function dictionaryBatchFromJSON(b) {
        return new message_1.DictionaryBatch(recordBatchFromJSON(b["data"]), b["id"], b["isDelta"]);
      }
      exports.dictionaryBatchFromJSON = dictionaryBatchFromJSON;
      function schemaFieldsFromJSON(_schema, dictionaries) {
        return (_schema["fields"] || []).filter(Boolean).map((f) => schema_1.Field.fromJSON(f, dictionaries));
      }
      function fieldChildrenFromJSON(_field, dictionaries) {
        return (_field["children"] || []).filter(Boolean).map((f) => schema_1.Field.fromJSON(f, dictionaries));
      }
      function fieldNodesFromJSON(xs) {
        return (xs || []).reduce((fieldNodes, column) => [
          ...fieldNodes,
          new message_1.FieldNode(column["count"], nullCountFromJSON(column["VALIDITY"])),
          ...fieldNodesFromJSON(column["children"])
        ], []);
      }
      function buffersFromJSON(xs, buffers = []) {
        for (let i = -1, n = (xs || []).length; ++i < n; ) {
          const column = xs[i];
          column["VALIDITY"] && buffers.push(new message_1.BufferRegion(buffers.length, column["VALIDITY"].length));
          column["TYPE"] && buffers.push(new message_1.BufferRegion(buffers.length, column["TYPE"].length));
          column["OFFSET"] && buffers.push(new message_1.BufferRegion(buffers.length, column["OFFSET"].length));
          column["DATA"] && buffers.push(new message_1.BufferRegion(buffers.length, column["DATA"].length));
          buffers = buffersFromJSON(column["children"], buffers);
        }
        return buffers;
      }
      function nullCountFromJSON(validity) {
        return (validity || []).reduce((sum, val) => sum + +(val === 0), 0);
      }
      function fieldFromJSON(_field, dictionaries) {
        let id;
        let keys;
        let field;
        let dictMeta;
        let type;
        let dictType;
        if (!dictionaries || !(dictMeta = _field["dictionary"])) {
          type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
          field = new schema_1.Field(_field["name"], type, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
        } else if (!dictionaries.has(id = dictMeta["id"])) {
          keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new type_1.Int32();
          dictionaries.set(id, type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)));
          dictType = new type_1.Dictionary(type, keys, id, dictMeta["isOrdered"]);
          field = new schema_1.Field(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
        } else {
          keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new type_1.Int32();
          dictType = new type_1.Dictionary(dictionaries.get(id), keys, id, dictMeta["isOrdered"]);
          field = new schema_1.Field(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
        }
        return field || null;
      }
      exports.fieldFromJSON = fieldFromJSON;
      function customMetadataFromJSON(_metadata) {
        return new Map(Object.entries(_metadata || {}));
      }
      function indexTypeFromJSON(_type) {
        return new type_1.Int(_type["isSigned"], _type["bitWidth"]);
      }
      function typeFromJSON(f, children) {
        const typeId = f["type"]["name"];
        switch (typeId) {
          case "NONE":
            return new type_1.Null();
          case "null":
            return new type_1.Null();
          case "binary":
            return new type_1.Binary();
          case "utf8":
            return new type_1.Utf8();
          case "bool":
            return new type_1.Bool();
          case "list":
            return new type_1.List((children || [])[0]);
          case "struct":
            return new type_1.Struct(children || []);
          case "struct_":
            return new type_1.Struct(children || []);
        }
        switch (typeId) {
          case "int": {
            const t = f["type"];
            return new type_1.Int(t["isSigned"], t["bitWidth"]);
          }
          case "floatingpoint": {
            const t = f["type"];
            return new type_1.Float(enum_1.Precision[t["precision"]]);
          }
          case "decimal": {
            const t = f["type"];
            return new type_1.Decimal(t["scale"], t["precision"]);
          }
          case "date": {
            const t = f["type"];
            return new type_1.Date_(enum_1.DateUnit[t["unit"]]);
          }
          case "time": {
            const t = f["type"];
            return new type_1.Time(enum_1.TimeUnit[t["unit"]], t["bitWidth"]);
          }
          case "timestamp": {
            const t = f["type"];
            return new type_1.Timestamp(enum_1.TimeUnit[t["unit"]], t["timezone"]);
          }
          case "interval": {
            const t = f["type"];
            return new type_1.Interval(enum_1.IntervalUnit[t["unit"]]);
          }
          case "union": {
            const t = f["type"];
            return new type_1.Union(enum_1.UnionMode[t["mode"]], t["typeIds"] || [], children || []);
          }
          case "fixedsizebinary": {
            const t = f["type"];
            return new type_1.FixedSizeBinary(t["byteWidth"]);
          }
          case "fixedsizelist": {
            const t = f["type"];
            return new type_1.FixedSizeList(t["listSize"], (children || [])[0]);
          }
          case "map": {
            const t = f["type"];
            return new type_1.Map_((children || [])[0], t["keysSorted"]);
          }
        }
        throw new Error(`Unrecognized type: "${typeId}"`);
      }
    }
  });

  // node_modules/apache-arrow/ipc/metadata/message.js
  var require_message = __commonJS({
    "node_modules/apache-arrow/ipc/metadata/message.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FieldNode = exports.BufferRegion = exports.DictionaryBatch = exports.RecordBatch = exports.Message = void 0;
      var flatbuffers_1 = require_flatbuffers();
      var Schema_1 = require_Schema();
      var Message_1 = require_Message();
      var schema_1 = require_schema();
      var buffer_1 = require_buffer();
      var enum_1 = require_enum();
      var typeassembler_1 = require_typeassembler();
      var json_1 = require_json();
      var Long = flatbuffers_1.flatbuffers.Long;
      var Builder2 = flatbuffers_1.flatbuffers.Builder;
      var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
      var type_1 = require_type();
      var Message = class {
        constructor(bodyLength, version, headerType, header) {
          this._version = version;
          this._headerType = headerType;
          this.body = new Uint8Array(0);
          header && (this._createHeader = () => header);
          this._bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
        }
        static fromJSON(msg, headerType) {
          const message = new Message(0, enum_1.MetadataVersion.V4, headerType);
          message._createHeader = messageHeaderFromJSON(msg, headerType);
          return message;
        }
        static decode(buf) {
          buf = new ByteBuffer(buffer_1.toUint8Array(buf));
          const _message = Message_1.Message.getRootAsMessage(buf);
          const bodyLength = _message.bodyLength();
          const version = _message.version();
          const headerType = _message.headerType();
          const message = new Message(bodyLength, version, headerType);
          message._createHeader = decodeMessageHeader(_message, headerType);
          return message;
        }
        static encode(message) {
          const b = new Builder2();
          let headerOffset = -1;
          if (message.isSchema()) {
            headerOffset = schema_1.Schema.encode(b, message.header());
          } else if (message.isRecordBatch()) {
            headerOffset = RecordBatch.encode(b, message.header());
          } else if (message.isDictionaryBatch()) {
            headerOffset = DictionaryBatch.encode(b, message.header());
          }
          Message_1.Message.startMessage(b);
          Message_1.Message.addVersion(b, enum_1.MetadataVersion.V4);
          Message_1.Message.addHeader(b, headerOffset);
          Message_1.Message.addHeaderType(b, message.headerType);
          Message_1.Message.addBodyLength(b, new Long(message.bodyLength, 0));
          Message_1.Message.finishMessageBuffer(b, Message_1.Message.endMessage(b));
          return b.asUint8Array();
        }
        static from(header, bodyLength = 0) {
          if (header instanceof schema_1.Schema) {
            return new Message(0, enum_1.MetadataVersion.V4, enum_1.MessageHeader.Schema, header);
          }
          if (header instanceof RecordBatch) {
            return new Message(bodyLength, enum_1.MetadataVersion.V4, enum_1.MessageHeader.RecordBatch, header);
          }
          if (header instanceof DictionaryBatch) {
            return new Message(bodyLength, enum_1.MetadataVersion.V4, enum_1.MessageHeader.DictionaryBatch, header);
          }
          throw new Error(`Unrecognized Message header: ${header}`);
        }
        get type() {
          return this.headerType;
        }
        get version() {
          return this._version;
        }
        get headerType() {
          return this._headerType;
        }
        get bodyLength() {
          return this._bodyLength;
        }
        header() {
          return this._createHeader();
        }
        isSchema() {
          return this.headerType === enum_1.MessageHeader.Schema;
        }
        isRecordBatch() {
          return this.headerType === enum_1.MessageHeader.RecordBatch;
        }
        isDictionaryBatch() {
          return this.headerType === enum_1.MessageHeader.DictionaryBatch;
        }
      };
      exports.Message = Message;
      var RecordBatch = class {
        constructor(length, nodes, buffers) {
          this._nodes = nodes;
          this._buffers = buffers;
          this._length = typeof length === "number" ? length : length.low;
        }
        get nodes() {
          return this._nodes;
        }
        get length() {
          return this._length;
        }
        get buffers() {
          return this._buffers;
        }
      };
      exports.RecordBatch = RecordBatch;
      var DictionaryBatch = class {
        constructor(data, id, isDelta = false) {
          this._data = data;
          this._isDelta = isDelta;
          this._id = typeof id === "number" ? id : id.low;
        }
        get id() {
          return this._id;
        }
        get data() {
          return this._data;
        }
        get isDelta() {
          return this._isDelta;
        }
        get length() {
          return this.data.length;
        }
        get nodes() {
          return this.data.nodes;
        }
        get buffers() {
          return this.data.buffers;
        }
      };
      exports.DictionaryBatch = DictionaryBatch;
      var BufferRegion = class {
        constructor(offset, length) {
          this.offset = typeof offset === "number" ? offset : offset.low;
          this.length = typeof length === "number" ? length : length.low;
        }
      };
      exports.BufferRegion = BufferRegion;
      var FieldNode = class {
        constructor(length, nullCount) {
          this.length = typeof length === "number" ? length : length.low;
          this.nullCount = typeof nullCount === "number" ? nullCount : nullCount.low;
        }
      };
      exports.FieldNode = FieldNode;
      function messageHeaderFromJSON(message, type) {
        return () => {
          switch (type) {
            case enum_1.MessageHeader.Schema:
              return schema_1.Schema.fromJSON(message);
            case enum_1.MessageHeader.RecordBatch:
              return RecordBatch.fromJSON(message);
            case enum_1.MessageHeader.DictionaryBatch:
              return DictionaryBatch.fromJSON(message);
          }
          throw new Error(`Unrecognized Message type: { name: ${enum_1.MessageHeader[type]}, type: ${type} }`);
        };
      }
      function decodeMessageHeader(message, type) {
        return () => {
          switch (type) {
            case enum_1.MessageHeader.Schema:
              return schema_1.Schema.decode(message.header(new Schema_1.Schema()));
            case enum_1.MessageHeader.RecordBatch:
              return RecordBatch.decode(message.header(new Message_1.RecordBatch()), message.version());
            case enum_1.MessageHeader.DictionaryBatch:
              return DictionaryBatch.decode(message.header(new Message_1.DictionaryBatch()), message.version());
          }
          throw new Error(`Unrecognized Message type: { name: ${enum_1.MessageHeader[type]}, type: ${type} }`);
        };
      }
      schema_1.Field["encode"] = encodeField;
      schema_1.Field["decode"] = decodeField;
      schema_1.Field["fromJSON"] = json_1.fieldFromJSON;
      schema_1.Schema["encode"] = encodeSchema;
      schema_1.Schema["decode"] = decodeSchema;
      schema_1.Schema["fromJSON"] = json_1.schemaFromJSON;
      RecordBatch["encode"] = encodeRecordBatch;
      RecordBatch["decode"] = decodeRecordBatch;
      RecordBatch["fromJSON"] = json_1.recordBatchFromJSON;
      DictionaryBatch["encode"] = encodeDictionaryBatch;
      DictionaryBatch["decode"] = decodeDictionaryBatch;
      DictionaryBatch["fromJSON"] = json_1.dictionaryBatchFromJSON;
      FieldNode["encode"] = encodeFieldNode;
      FieldNode["decode"] = decodeFieldNode;
      BufferRegion["encode"] = encodeBufferRegion;
      BufferRegion["decode"] = decodeBufferRegion;
      function decodeSchema(_schema, dictionaries = new Map()) {
        const fields = decodeSchemaFields(_schema, dictionaries);
        return new schema_1.Schema(fields, decodeCustomMetadata(_schema), dictionaries);
      }
      function decodeRecordBatch(batch, version = enum_1.MetadataVersion.V4) {
        return new RecordBatch(batch.length(), decodeFieldNodes(batch), decodeBuffers(batch, version));
      }
      function decodeDictionaryBatch(batch, version = enum_1.MetadataVersion.V4) {
        return new DictionaryBatch(RecordBatch.decode(batch.data(), version), batch.id(), batch.isDelta());
      }
      function decodeBufferRegion(b) {
        return new BufferRegion(b.offset(), b.length());
      }
      function decodeFieldNode(f) {
        return new FieldNode(f.length(), f.nullCount());
      }
      function decodeFieldNodes(batch) {
        const nodes = [];
        for (let f, i = -1, j2 = -1, n = batch.nodesLength(); ++i < n; ) {
          if (f = batch.nodes(i)) {
            nodes[++j2] = FieldNode.decode(f);
          }
        }
        return nodes;
      }
      function decodeBuffers(batch, version) {
        const bufferRegions = [];
        for (let b, i = -1, j2 = -1, n = batch.buffersLength(); ++i < n; ) {
          if (b = batch.buffers(i)) {
            if (version < enum_1.MetadataVersion.V4) {
              b.bb_pos += 8 * (i + 1);
            }
            bufferRegions[++j2] = BufferRegion.decode(b);
          }
        }
        return bufferRegions;
      }
      function decodeSchemaFields(schema, dictionaries) {
        const fields = [];
        for (let f, i = -1, j2 = -1, n = schema.fieldsLength(); ++i < n; ) {
          if (f = schema.fields(i)) {
            fields[++j2] = schema_1.Field.decode(f, dictionaries);
          }
        }
        return fields;
      }
      function decodeFieldChildren(field, dictionaries) {
        const children = [];
        for (let f, i = -1, j2 = -1, n = field.childrenLength(); ++i < n; ) {
          if (f = field.children(i)) {
            children[++j2] = schema_1.Field.decode(f, dictionaries);
          }
        }
        return children;
      }
      function decodeField(f, dictionaries) {
        let id;
        let field;
        let type;
        let keys;
        let dictType;
        let dictMeta;
        if (!dictionaries || !(dictMeta = f.dictionary())) {
          type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
          field = new schema_1.Field(f.name(), type, f.nullable(), decodeCustomMetadata(f));
        } else if (!dictionaries.has(id = dictMeta.id().low)) {
          keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new type_1.Int32();
          dictionaries.set(id, type = decodeFieldType(f, decodeFieldChildren(f, dictionaries)));
          dictType = new type_1.Dictionary(type, keys, id, dictMeta.isOrdered());
          field = new schema_1.Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
        } else {
          keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new type_1.Int32();
          dictType = new type_1.Dictionary(dictionaries.get(id), keys, id, dictMeta.isOrdered());
          field = new schema_1.Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
        }
        return field || null;
      }
      function decodeCustomMetadata(parent) {
        const data = new Map();
        if (parent) {
          for (let entry, key, i = -1, n = parent.customMetadataLength() | 0; ++i < n; ) {
            if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) {
              data.set(key, entry.value());
            }
          }
        }
        return data;
      }
      function decodeIndexType(_type) {
        return new type_1.Int(_type.isSigned(), _type.bitWidth());
      }
      function decodeFieldType(f, children) {
        const typeId = f.typeType();
        switch (typeId) {
          case Schema_1.Type["NONE"]:
            return new type_1.Null();
          case Schema_1.Type["Null"]:
            return new type_1.Null();
          case Schema_1.Type["Binary"]:
            return new type_1.Binary();
          case Schema_1.Type["Utf8"]:
            return new type_1.Utf8();
          case Schema_1.Type["Bool"]:
            return new type_1.Bool();
          case Schema_1.Type["List"]:
            return new type_1.List((children || [])[0]);
          case Schema_1.Type["Struct_"]:
            return new type_1.Struct(children || []);
        }
        switch (typeId) {
          case Schema_1.Type["Int"]: {
            const t = f.type(new Schema_1.Int());
            return new type_1.Int(t.isSigned(), t.bitWidth());
          }
          case Schema_1.Type["FloatingPoint"]: {
            const t = f.type(new Schema_1.FloatingPoint());
            return new type_1.Float(t.precision());
          }
          case Schema_1.Type["Decimal"]: {
            const t = f.type(new Schema_1.Decimal());
            return new type_1.Decimal(t.scale(), t.precision());
          }
          case Schema_1.Type["Date"]: {
            const t = f.type(new Schema_1.Date());
            return new type_1.Date_(t.unit());
          }
          case Schema_1.Type["Time"]: {
            const t = f.type(new Schema_1.Time());
            return new type_1.Time(t.unit(), t.bitWidth());
          }
          case Schema_1.Type["Timestamp"]: {
            const t = f.type(new Schema_1.Timestamp());
            return new type_1.Timestamp(t.unit(), t.timezone());
          }
          case Schema_1.Type["Interval"]: {
            const t = f.type(new Schema_1.Interval());
            return new type_1.Interval(t.unit());
          }
          case Schema_1.Type["Union"]: {
            const t = f.type(new Schema_1.Union());
            return new type_1.Union(t.mode(), t.typeIdsArray() || [], children || []);
          }
          case Schema_1.Type["FixedSizeBinary"]: {
            const t = f.type(new Schema_1.FixedSizeBinary());
            return new type_1.FixedSizeBinary(t.byteWidth());
          }
          case Schema_1.Type["FixedSizeList"]: {
            const t = f.type(new Schema_1.FixedSizeList());
            return new type_1.FixedSizeList(t.listSize(), (children || [])[0]);
          }
          case Schema_1.Type["Map"]: {
            const t = f.type(new Schema_1.Map());
            return new type_1.Map_((children || [])[0], t.keysSorted());
          }
        }
        throw new Error(`Unrecognized type: "${Schema_1.Type[typeId]}" (${typeId})`);
      }
      function encodeSchema(b, schema) {
        const fieldOffsets = schema.fields.map((f) => schema_1.Field.encode(b, f));
        Schema_1.Schema.startFieldsVector(b, fieldOffsets.length);
        const fieldsVectorOffset = Schema_1.Schema.createFieldsVector(b, fieldOffsets);
        const metadataOffset = !(schema.metadata && schema.metadata.size > 0) ? -1 : Schema_1.Schema.createCustomMetadataVector(b, [...schema.metadata].map(([k, v2]) => {
          const key = b.createString(`${k}`);
          const val = b.createString(`${v2}`);
          Schema_1.KeyValue.startKeyValue(b);
          Schema_1.KeyValue.addKey(b, key);
          Schema_1.KeyValue.addValue(b, val);
          return Schema_1.KeyValue.endKeyValue(b);
        }));
        Schema_1.Schema.startSchema(b);
        Schema_1.Schema.addFields(b, fieldsVectorOffset);
        Schema_1.Schema.addEndianness(b, platformIsLittleEndian ? Schema_1.Endianness.Little : Schema_1.Endianness.Big);
        if (metadataOffset !== -1) {
          Schema_1.Schema.addCustomMetadata(b, metadataOffset);
        }
        return Schema_1.Schema.endSchema(b);
      }
      function encodeField(b, field) {
        let nameOffset = -1;
        let typeOffset = -1;
        let dictionaryOffset = -1;
        const type = field.type;
        let typeId = field.typeId;
        if (!type_1.DataType.isDictionary(type)) {
          typeOffset = typeassembler_1.instance.visit(type, b);
        } else {
          typeId = type.dictionary.typeId;
          dictionaryOffset = typeassembler_1.instance.visit(type, b);
          typeOffset = typeassembler_1.instance.visit(type.dictionary, b);
        }
        const childOffsets = (type.children || []).map((f) => schema_1.Field.encode(b, f));
        const childrenVectorOffset = Schema_1.Field.createChildrenVector(b, childOffsets);
        const metadataOffset = !(field.metadata && field.metadata.size > 0) ? -1 : Schema_1.Field.createCustomMetadataVector(b, [...field.metadata].map(([k, v2]) => {
          const key = b.createString(`${k}`);
          const val = b.createString(`${v2}`);
          Schema_1.KeyValue.startKeyValue(b);
          Schema_1.KeyValue.addKey(b, key);
          Schema_1.KeyValue.addValue(b, val);
          return Schema_1.KeyValue.endKeyValue(b);
        }));
        if (field.name) {
          nameOffset = b.createString(field.name);
        }
        Schema_1.Field.startField(b);
        Schema_1.Field.addType(b, typeOffset);
        Schema_1.Field.addTypeType(b, typeId);
        Schema_1.Field.addChildren(b, childrenVectorOffset);
        Schema_1.Field.addNullable(b, !!field.nullable);
        if (nameOffset !== -1) {
          Schema_1.Field.addName(b, nameOffset);
        }
        if (dictionaryOffset !== -1) {
          Schema_1.Field.addDictionary(b, dictionaryOffset);
        }
        if (metadataOffset !== -1) {
          Schema_1.Field.addCustomMetadata(b, metadataOffset);
        }
        return Schema_1.Field.endField(b);
      }
      function encodeRecordBatch(b, recordBatch) {
        const nodes = recordBatch.nodes || [];
        const buffers = recordBatch.buffers || [];
        Message_1.RecordBatch.startNodesVector(b, nodes.length);
        nodes.slice().reverse().forEach((n) => FieldNode.encode(b, n));
        const nodesVectorOffset = b.endVector();
        Message_1.RecordBatch.startBuffersVector(b, buffers.length);
        buffers.slice().reverse().forEach((b_) => BufferRegion.encode(b, b_));
        const buffersVectorOffset = b.endVector();
        Message_1.RecordBatch.startRecordBatch(b);
        Message_1.RecordBatch.addLength(b, new Long(recordBatch.length, 0));
        Message_1.RecordBatch.addNodes(b, nodesVectorOffset);
        Message_1.RecordBatch.addBuffers(b, buffersVectorOffset);
        return Message_1.RecordBatch.endRecordBatch(b);
      }
      function encodeDictionaryBatch(b, dictionaryBatch) {
        const dataOffset = RecordBatch.encode(b, dictionaryBatch.data);
        Message_1.DictionaryBatch.startDictionaryBatch(b);
        Message_1.DictionaryBatch.addId(b, new Long(dictionaryBatch.id, 0));
        Message_1.DictionaryBatch.addIsDelta(b, dictionaryBatch.isDelta);
        Message_1.DictionaryBatch.addData(b, dataOffset);
        return Message_1.DictionaryBatch.endDictionaryBatch(b);
      }
      function encodeFieldNode(b, node) {
        return Message_1.FieldNode.createFieldNode(b, new Long(node.length, 0), new Long(node.nullCount, 0));
      }
      function encodeBufferRegion(b, node) {
        return Schema_1.Buffer.createBuffer(b, new Long(node.offset, 0), new Long(node.length, 0));
      }
      var platformIsLittleEndian = function() {
        const buffer = new ArrayBuffer(2);
        new DataView(buffer).setInt16(0, 256, true);
        return new Int16Array(buffer)[0] === 256;
      }();
    }
  });

  // node_modules/apache-arrow/ipc/message.js
  var require_message2 = __commonJS({
    "node_modules/apache-arrow/ipc/message.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.magicX2AndPadding = exports.magicAndPadding = exports.magicLength = exports.checkForMagicArrowString = exports.MAGIC = exports.MAGIC_STR = exports.PADDING = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = void 0;
      var tslib_1 = require_tslib();
      var enum_1 = require_enum();
      var flatbuffers_1 = require_flatbuffers();
      var ByteBuffer = flatbuffers_1.flatbuffers.ByteBuffer;
      var message_1 = require_message();
      var compat_1 = require_compat();
      var file_1 = require_file2();
      var buffer_1 = require_buffer();
      var stream_1 = require_stream();
      var interfaces_1 = require_interfaces();
      var invalidMessageType = (type) => `Expected ${enum_1.MessageHeader[type]} Message in stream, but was null or length 0.`;
      var nullMessage = (type) => `Header pointer of flatbuffer-encoded ${enum_1.MessageHeader[type]} Message is null or length 0.`;
      var invalidMessageMetadata = (expected, actual) => `Expected to read ${expected} metadata bytes, but only read ${actual}.`;
      var invalidMessageBodyLength = (expected, actual) => `Expected to read ${expected} bytes for message body, but only read ${actual}.`;
      var MessageReader = class {
        constructor(source) {
          this.source = source instanceof stream_1.ByteStream ? source : new stream_1.ByteStream(source);
        }
        [Symbol.iterator]() {
          return this;
        }
        next() {
          let r;
          if ((r = this.readMetadataLength()).done) {
            return interfaces_1.ITERATOR_DONE;
          }
          if (r.value === -1 && (r = this.readMetadataLength()).done) {
            return interfaces_1.ITERATOR_DONE;
          }
          if ((r = this.readMetadata(r.value)).done) {
            return interfaces_1.ITERATOR_DONE;
          }
          return r;
        }
        throw(value) {
          return this.source.throw(value);
        }
        return(value) {
          return this.source.return(value);
        }
        readMessage(type) {
          let r;
          if ((r = this.next()).done) {
            return null;
          }
          if (type != null && r.value.headerType !== type) {
            throw new Error(invalidMessageType(type));
          }
          return r.value;
        }
        readMessageBody(bodyLength) {
          if (bodyLength <= 0) {
            return new Uint8Array(0);
          }
          const buf = buffer_1.toUint8Array(this.source.read(bodyLength));
          if (buf.byteLength < bodyLength) {
            throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
          }
          return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
        }
        readSchema(throwIfNull = false) {
          const type = enum_1.MessageHeader.Schema;
          const message = this.readMessage(type);
          const schema = message === null || message === void 0 ? void 0 : message.header();
          if (throwIfNull && !schema) {
            throw new Error(nullMessage(type));
          }
          return schema;
        }
        readMetadataLength() {
          const buf = this.source.read(exports.PADDING);
          const bb = buf && new ByteBuffer(buf);
          const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
          return { done: len === 0, value: len };
        }
        readMetadata(metadataLength) {
          const buf = this.source.read(metadataLength);
          if (!buf) {
            return interfaces_1.ITERATOR_DONE;
          }
          if (buf.byteLength < metadataLength) {
            throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
          }
          return { done: false, value: message_1.Message.decode(buf) };
        }
      };
      exports.MessageReader = MessageReader;
      var AsyncMessageReader = class {
        constructor(source, byteLength) {
          this.source = source instanceof stream_1.AsyncByteStream ? source : compat_1.isFileHandle(source) ? new file_1.AsyncRandomAccessFile(source, byteLength) : new stream_1.AsyncByteStream(source);
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        next() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let r;
            if ((r = yield this.readMetadataLength()).done) {
              return interfaces_1.ITERATOR_DONE;
            }
            if (r.value === -1 && (r = yield this.readMetadataLength()).done) {
              return interfaces_1.ITERATOR_DONE;
            }
            if ((r = yield this.readMetadata(r.value)).done) {
              return interfaces_1.ITERATOR_DONE;
            }
            return r;
          });
        }
        throw(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.source.throw(value);
          });
        }
        return(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.source.return(value);
          });
        }
        readMessage(type) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let r;
            if ((r = yield this.next()).done) {
              return null;
            }
            if (type != null && r.value.headerType !== type) {
              throw new Error(invalidMessageType(type));
            }
            return r.value;
          });
        }
        readMessageBody(bodyLength) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (bodyLength <= 0) {
              return new Uint8Array(0);
            }
            const buf = buffer_1.toUint8Array(yield this.source.read(bodyLength));
            if (buf.byteLength < bodyLength) {
              throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
            }
            return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
          });
        }
        readSchema(throwIfNull = false) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const type = enum_1.MessageHeader.Schema;
            const message = yield this.readMessage(type);
            const schema = message === null || message === void 0 ? void 0 : message.header();
            if (throwIfNull && !schema) {
              throw new Error(nullMessage(type));
            }
            return schema;
          });
        }
        readMetadataLength() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const buf = yield this.source.read(exports.PADDING);
            const bb = buf && new ByteBuffer(buf);
            const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
            return { done: len === 0, value: len };
          });
        }
        readMetadata(metadataLength) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const buf = yield this.source.read(metadataLength);
            if (!buf) {
              return interfaces_1.ITERATOR_DONE;
            }
            if (buf.byteLength < metadataLength) {
              throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
            }
            return { done: false, value: message_1.Message.decode(buf) };
          });
        }
      };
      exports.AsyncMessageReader = AsyncMessageReader;
      var JSONMessageReader = class extends MessageReader {
        constructor(source) {
          super(new Uint8Array(0));
          this._schema = false;
          this._body = [];
          this._batchIndex = 0;
          this._dictionaryIndex = 0;
          this._json = source instanceof interfaces_1.ArrowJSON ? source : new interfaces_1.ArrowJSON(source);
        }
        next() {
          const { _json } = this;
          if (!this._schema) {
            this._schema = true;
            const message = message_1.Message.fromJSON(_json.schema, enum_1.MessageHeader.Schema);
            return { done: false, value: message };
          }
          if (this._dictionaryIndex < _json.dictionaries.length) {
            const batch = _json.dictionaries[this._dictionaryIndex++];
            this._body = batch["data"]["columns"];
            const message = message_1.Message.fromJSON(batch, enum_1.MessageHeader.DictionaryBatch);
            return { done: false, value: message };
          }
          if (this._batchIndex < _json.batches.length) {
            const batch = _json.batches[this._batchIndex++];
            this._body = batch["columns"];
            const message = message_1.Message.fromJSON(batch, enum_1.MessageHeader.RecordBatch);
            return { done: false, value: message };
          }
          this._body = [];
          return interfaces_1.ITERATOR_DONE;
        }
        readMessageBody(_bodyLength) {
          return flattenDataSources(this._body);
          function flattenDataSources(xs) {
            return (xs || []).reduce((buffers, column) => [
              ...buffers,
              ...column["VALIDITY"] && [column["VALIDITY"]] || [],
              ...column["TYPE"] && [column["TYPE"]] || [],
              ...column["OFFSET"] && [column["OFFSET"]] || [],
              ...column["DATA"] && [column["DATA"]] || [],
              ...flattenDataSources(column["children"])
            ], []);
          }
        }
        readMessage(type) {
          let r;
          if ((r = this.next()).done) {
            return null;
          }
          if (type != null && r.value.headerType !== type) {
            throw new Error(invalidMessageType(type));
          }
          return r.value;
        }
        readSchema() {
          const type = enum_1.MessageHeader.Schema;
          const message = this.readMessage(type);
          const schema = message === null || message === void 0 ? void 0 : message.header();
          if (!message || !schema) {
            throw new Error(nullMessage(type));
          }
          return schema;
        }
      };
      exports.JSONMessageReader = JSONMessageReader;
      exports.PADDING = 4;
      exports.MAGIC_STR = "ARROW1";
      exports.MAGIC = new Uint8Array(exports.MAGIC_STR.length);
      for (let i = 0; i < exports.MAGIC_STR.length; i += 1 | 0) {
        exports.MAGIC[i] = exports.MAGIC_STR.charCodeAt(i);
      }
      function checkForMagicArrowString(buffer, index = 0) {
        for (let i = -1, n = exports.MAGIC.length; ++i < n; ) {
          if (exports.MAGIC[i] !== buffer[index + i]) {
            return false;
          }
        }
        return true;
      }
      exports.checkForMagicArrowString = checkForMagicArrowString;
      exports.magicLength = exports.MAGIC.length;
      exports.magicAndPadding = exports.magicLength + exports.PADDING;
      exports.magicX2AndPadding = exports.magicLength * 2 + exports.PADDING;
    }
  });

  // node_modules/apache-arrow/visitor/typecomparator.js
  var require_typecomparator = __commonJS({
    "node_modules/apache-arrow/visitor/typecomparator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compareTypes = exports.compareFields = exports.compareSchemas = exports.instance = exports.TypeComparator = void 0;
      var visitor_1 = require_visitor();
      var TypeComparator = class extends visitor_1.Visitor {
        compareSchemas(schema, other) {
          return schema === other || other instanceof schema.constructor && this.compareManyFields(schema.fields, other.fields);
        }
        compareManyFields(fields, others) {
          return fields === others || Array.isArray(fields) && Array.isArray(others) && fields.length === others.length && fields.every((f, i) => this.compareFields(f, others[i]));
        }
        compareFields(field, other) {
          return field === other || other instanceof field.constructor && field.name === other.name && field.nullable === other.nullable && this.visit(field.type, other.type);
        }
      };
      exports.TypeComparator = TypeComparator;
      function compareConstructor(type, other) {
        return other instanceof type.constructor;
      }
      function compareAny(type, other) {
        return type === other || compareConstructor(type, other);
      }
      function compareInt(type, other) {
        return type === other || compareConstructor(type, other) && type.bitWidth === other.bitWidth && type.isSigned === other.isSigned;
      }
      function compareFloat(type, other) {
        return type === other || compareConstructor(type, other) && type.precision === other.precision;
      }
      function compareFixedSizeBinary(type, other) {
        return type === other || compareConstructor(type, other) && type.byteWidth === other.byteWidth;
      }
      function compareDate(type, other) {
        return type === other || compareConstructor(type, other) && type.unit === other.unit;
      }
      function compareTimestamp(type, other) {
        return type === other || compareConstructor(type, other) && type.unit === other.unit && type.timezone === other.timezone;
      }
      function compareTime(type, other) {
        return type === other || compareConstructor(type, other) && type.unit === other.unit && type.bitWidth === other.bitWidth;
      }
      function compareList(type, other) {
        return type === other || compareConstructor(type, other) && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
      }
      function compareStruct(type, other) {
        return type === other || compareConstructor(type, other) && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
      }
      function compareUnion(type, other) {
        return type === other || compareConstructor(type, other) && type.mode === other.mode && type.typeIds.every((x, i) => x === other.typeIds[i]) && exports.instance.compareManyFields(type.children, other.children);
      }
      function compareDictionary(type, other) {
        return type === other || compareConstructor(type, other) && type.id === other.id && type.isOrdered === other.isOrdered && exports.instance.visit(type.indices, other.indices) && exports.instance.visit(type.dictionary, other.dictionary);
      }
      function compareInterval(type, other) {
        return type === other || compareConstructor(type, other) && type.unit === other.unit;
      }
      function compareFixedSizeList(type, other) {
        return type === other || compareConstructor(type, other) && type.listSize === other.listSize && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
      }
      function compareMap(type, other) {
        return type === other || compareConstructor(type, other) && type.keysSorted === other.keysSorted && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
      }
      TypeComparator.prototype.visitNull = compareAny;
      TypeComparator.prototype.visitBool = compareAny;
      TypeComparator.prototype.visitInt = compareInt;
      TypeComparator.prototype.visitInt8 = compareInt;
      TypeComparator.prototype.visitInt16 = compareInt;
      TypeComparator.prototype.visitInt32 = compareInt;
      TypeComparator.prototype.visitInt64 = compareInt;
      TypeComparator.prototype.visitUint8 = compareInt;
      TypeComparator.prototype.visitUint16 = compareInt;
      TypeComparator.prototype.visitUint32 = compareInt;
      TypeComparator.prototype.visitUint64 = compareInt;
      TypeComparator.prototype.visitFloat = compareFloat;
      TypeComparator.prototype.visitFloat16 = compareFloat;
      TypeComparator.prototype.visitFloat32 = compareFloat;
      TypeComparator.prototype.visitFloat64 = compareFloat;
      TypeComparator.prototype.visitUtf8 = compareAny;
      TypeComparator.prototype.visitBinary = compareAny;
      TypeComparator.prototype.visitFixedSizeBinary = compareFixedSizeBinary;
      TypeComparator.prototype.visitDate = compareDate;
      TypeComparator.prototype.visitDateDay = compareDate;
      TypeComparator.prototype.visitDateMillisecond = compareDate;
      TypeComparator.prototype.visitTimestamp = compareTimestamp;
      TypeComparator.prototype.visitTimestampSecond = compareTimestamp;
      TypeComparator.prototype.visitTimestampMillisecond = compareTimestamp;
      TypeComparator.prototype.visitTimestampMicrosecond = compareTimestamp;
      TypeComparator.prototype.visitTimestampNanosecond = compareTimestamp;
      TypeComparator.prototype.visitTime = compareTime;
      TypeComparator.prototype.visitTimeSecond = compareTime;
      TypeComparator.prototype.visitTimeMillisecond = compareTime;
      TypeComparator.prototype.visitTimeMicrosecond = compareTime;
      TypeComparator.prototype.visitTimeNanosecond = compareTime;
      TypeComparator.prototype.visitDecimal = compareAny;
      TypeComparator.prototype.visitList = compareList;
      TypeComparator.prototype.visitStruct = compareStruct;
      TypeComparator.prototype.visitUnion = compareUnion;
      TypeComparator.prototype.visitDenseUnion = compareUnion;
      TypeComparator.prototype.visitSparseUnion = compareUnion;
      TypeComparator.prototype.visitDictionary = compareDictionary;
      TypeComparator.prototype.visitInterval = compareInterval;
      TypeComparator.prototype.visitIntervalDayTime = compareInterval;
      TypeComparator.prototype.visitIntervalYearMonth = compareInterval;
      TypeComparator.prototype.visitFixedSizeList = compareFixedSizeList;
      TypeComparator.prototype.visitMap = compareMap;
      exports.instance = new TypeComparator();
      function compareSchemas(schema, other) {
        return exports.instance.compareSchemas(schema, other);
      }
      exports.compareSchemas = compareSchemas;
      function compareFields(field, other) {
        return exports.instance.compareFields(field, other);
      }
      exports.compareFields = compareFields;
      function compareTypes(type, other) {
        return exports.instance.visit(type, other);
      }
      exports.compareTypes = compareTypes;
    }
  });

  // node_modules/apache-arrow/visitor/vectorassembler.js
  var require_vectorassembler = __commonJS({
    "node_modules/apache-arrow/visitor/vectorassembler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.VectorAssembler = void 0;
      var visitor_1 = require_visitor();
      var enum_1 = require_enum();
      var recordbatch_1 = require_recordbatch2();
      var buffer_1 = require_buffer();
      var bit_1 = require_bit();
      var args_1 = require_args();
      var message_1 = require_message();
      var type_1 = require_type();
      var VectorAssembler = class extends visitor_1.Visitor {
        constructor() {
          super();
          this._byteLength = 0;
          this._nodes = [];
          this._buffers = [];
          this._bufferRegions = [];
        }
        static assemble(...args) {
          const assembler = new VectorAssembler();
          const vectorChildren = args_1.selectVectorChildrenArgs(recordbatch_1.RecordBatch, args);
          const [assembleResult = assembler] = assembler.visitMany(vectorChildren);
          return assembleResult;
        }
        visit(vector) {
          if (!type_1.DataType.isDictionary(vector.type)) {
            const { data, length, nullCount } = vector;
            if (length > 2147483647) {
              throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
            }
            if (!type_1.DataType.isNull(vector.type)) {
              addBuffer.call(this, nullCount <= 0 ? new Uint8Array(0) : bit_1.truncateBitmap(data.offset, length, data.nullBitmap));
            }
            this.nodes.push(new message_1.FieldNode(length, nullCount));
          }
          return super.visit(vector);
        }
        visitNull(_nullV) {
          return this;
        }
        visitDictionary(vector) {
          return this.visit(vector.indices);
        }
        get nodes() {
          return this._nodes;
        }
        get buffers() {
          return this._buffers;
        }
        get byteLength() {
          return this._byteLength;
        }
        get bufferRegions() {
          return this._bufferRegions;
        }
      };
      exports.VectorAssembler = VectorAssembler;
      function addBuffer(values) {
        const byteLength = values.byteLength + 7 & ~7;
        this.buffers.push(values);
        this.bufferRegions.push(new message_1.BufferRegion(this._byteLength, byteLength));
        this._byteLength += byteLength;
        return this;
      }
      function assembleUnion(vector) {
        const { type, length, typeIds, valueOffsets } = vector;
        addBuffer.call(this, typeIds);
        if (type.mode === enum_1.UnionMode.Sparse) {
          return assembleNestedVector.call(this, vector);
        } else if (type.mode === enum_1.UnionMode.Dense) {
          if (vector.offset <= 0) {
            addBuffer.call(this, valueOffsets);
            return assembleNestedVector.call(this, vector);
          } else {
            const maxChildTypeId = typeIds.reduce((x, y2) => Math.max(x, y2), typeIds[0]);
            const childLengths = new Int32Array(maxChildTypeId + 1);
            const childOffsets = new Int32Array(maxChildTypeId + 1).fill(-1);
            const shiftedOffsets = new Int32Array(length);
            const unshiftedOffsets = buffer_1.rebaseValueOffsets(-valueOffsets[0], length, valueOffsets);
            for (let typeId, shift, index = -1; ++index < length; ) {
              if ((shift = childOffsets[typeId = typeIds[index]]) === -1) {
                shift = childOffsets[typeId] = unshiftedOffsets[typeId];
              }
              shiftedOffsets[index] = unshiftedOffsets[index] - shift;
              ++childLengths[typeId];
            }
            addBuffer.call(this, shiftedOffsets);
            for (let child, childIndex = -1, numChildren = type.children.length; ++childIndex < numChildren; ) {
              if (child = vector.getChildAt(childIndex)) {
                const typeId = type.typeIds[childIndex];
                const childLength = Math.min(length, childLengths[typeId]);
                this.visit(child.slice(childOffsets[typeId], childLength));
              }
            }
          }
        }
        return this;
      }
      function assembleBoolVector(vector) {
        let values;
        if (vector.nullCount >= vector.length) {
          return addBuffer.call(this, new Uint8Array(0));
        } else if ((values = vector.values) instanceof Uint8Array) {
          return addBuffer.call(this, bit_1.truncateBitmap(vector.offset, vector.length, values));
        }
        return addBuffer.call(this, bit_1.packBools(vector));
      }
      function assembleFlatVector(vector) {
        return addBuffer.call(this, vector.values.subarray(0, vector.length * vector.stride));
      }
      function assembleFlatListVector(vector) {
        const { length, values, valueOffsets } = vector;
        const firstOffset = valueOffsets[0];
        const lastOffset = valueOffsets[length];
        const byteLength = Math.min(lastOffset - firstOffset, values.byteLength - firstOffset);
        addBuffer.call(this, buffer_1.rebaseValueOffsets(-valueOffsets[0], length, valueOffsets));
        addBuffer.call(this, values.subarray(firstOffset, firstOffset + byteLength));
        return this;
      }
      function assembleListVector(vector) {
        const { length, valueOffsets } = vector;
        if (valueOffsets) {
          addBuffer.call(this, buffer_1.rebaseValueOffsets(valueOffsets[0], length, valueOffsets));
        }
        return this.visit(vector.getChildAt(0));
      }
      function assembleNestedVector(vector) {
        return this.visitMany(vector.type.children.map((_, i) => vector.getChildAt(i)).filter(Boolean))[0];
      }
      VectorAssembler.prototype.visitBool = assembleBoolVector;
      VectorAssembler.prototype.visitInt = assembleFlatVector;
      VectorAssembler.prototype.visitFloat = assembleFlatVector;
      VectorAssembler.prototype.visitUtf8 = assembleFlatListVector;
      VectorAssembler.prototype.visitBinary = assembleFlatListVector;
      VectorAssembler.prototype.visitFixedSizeBinary = assembleFlatVector;
      VectorAssembler.prototype.visitDate = assembleFlatVector;
      VectorAssembler.prototype.visitTimestamp = assembleFlatVector;
      VectorAssembler.prototype.visitTime = assembleFlatVector;
      VectorAssembler.prototype.visitDecimal = assembleFlatVector;
      VectorAssembler.prototype.visitList = assembleListVector;
      VectorAssembler.prototype.visitStruct = assembleNestedVector;
      VectorAssembler.prototype.visitUnion = assembleUnion;
      VectorAssembler.prototype.visitInterval = assembleFlatVector;
      VectorAssembler.prototype.visitFixedSizeList = assembleListVector;
      VectorAssembler.prototype.visitMap = assembleListVector;
    }
  });

  // node_modules/apache-arrow/visitor/jsontypeassembler.js
  var require_jsontypeassembler = __commonJS({
    "node_modules/apache-arrow/visitor/jsontypeassembler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSONTypeAssembler = void 0;
      var visitor_1 = require_visitor();
      var Schema_1 = require_Schema();
      var enum_1 = require_enum();
      var JSONTypeAssembler = class extends visitor_1.Visitor {
        visit(node) {
          return node == null ? void 0 : super.visit(node);
        }
        visitNull({ typeId }) {
          return { "name": Schema_1.Type[typeId].toLowerCase() };
        }
        visitInt({ typeId, bitWidth, isSigned }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "bitWidth": bitWidth, "isSigned": isSigned };
        }
        visitFloat({ typeId, precision }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "precision": enum_1.Precision[precision] };
        }
        visitBinary({ typeId }) {
          return { "name": Schema_1.Type[typeId].toLowerCase() };
        }
        visitBool({ typeId }) {
          return { "name": Schema_1.Type[typeId].toLowerCase() };
        }
        visitUtf8({ typeId }) {
          return { "name": Schema_1.Type[typeId].toLowerCase() };
        }
        visitDecimal({ typeId, scale, precision }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "scale": scale, "precision": precision };
        }
        visitDate({ typeId, unit }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "unit": enum_1.DateUnit[unit] };
        }
        visitTime({ typeId, unit, bitWidth }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "unit": enum_1.TimeUnit[unit], bitWidth };
        }
        visitTimestamp({ typeId, timezone, unit }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "unit": enum_1.TimeUnit[unit], timezone };
        }
        visitInterval({ typeId, unit }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "unit": enum_1.IntervalUnit[unit] };
        }
        visitList({ typeId }) {
          return { "name": Schema_1.Type[typeId].toLowerCase() };
        }
        visitStruct({ typeId }) {
          return { "name": Schema_1.Type[typeId].toLowerCase() };
        }
        visitUnion({ typeId, mode, typeIds }) {
          return {
            "name": Schema_1.Type[typeId].toLowerCase(),
            "mode": enum_1.UnionMode[mode],
            "typeIds": [...typeIds]
          };
        }
        visitDictionary(node) {
          return this.visit(node.dictionary);
        }
        visitFixedSizeBinary({ typeId, byteWidth }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "byteWidth": byteWidth };
        }
        visitFixedSizeList({ typeId, listSize }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "listSize": listSize };
        }
        visitMap({ typeId, keysSorted }) {
          return { "name": Schema_1.Type[typeId].toLowerCase(), "keysSorted": keysSorted };
        }
      };
      exports.JSONTypeAssembler = JSONTypeAssembler;
    }
  });

  // node_modules/apache-arrow/visitor/jsonvectorassembler.js
  var require_jsonvectorassembler = __commonJS({
    "node_modules/apache-arrow/visitor/jsonvectorassembler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JSONVectorAssembler = void 0;
      var bn_1 = require_bn();
      var column_1 = require_column();
      var vector_1 = require_vector();
      var visitor_1 = require_visitor();
      var enum_1 = require_enum();
      var recordbatch_1 = require_recordbatch2();
      var enum_2 = require_enum();
      var bit_1 = require_bit();
      var args_1 = require_args();
      var type_1 = require_type();
      var JSONVectorAssembler = class extends visitor_1.Visitor {
        static assemble(...args) {
          return new JSONVectorAssembler().visitMany(args_1.selectColumnChildrenArgs(recordbatch_1.RecordBatch, args));
        }
        visit(column) {
          const { data, name, length } = column;
          const { offset, nullCount, nullBitmap } = data;
          const type = type_1.DataType.isDictionary(column.type) ? column.type.indices : column.type;
          const buffers = Object.assign([], data.buffers, { [enum_1.BufferType.VALIDITY]: void 0 });
          return Object.assign({ "name": name, "count": length, "VALIDITY": type_1.DataType.isNull(type) ? void 0 : nullCount <= 0 ? Array.from({ length }, () => 1) : [...new bit_1.BitIterator(nullBitmap, offset, length, null, bit_1.getBit)] }, super.visit(vector_1.Vector.new(data.clone(type, offset, length, 0, buffers))));
        }
        visitNull() {
          return {};
        }
        visitBool({ values, offset, length }) {
          return { "DATA": [...new bit_1.BitIterator(values, offset, length, null, bit_1.getBool)] };
        }
        visitInt(vector) {
          return {
            "DATA": vector.type.bitWidth < 64 ? [...vector.values] : [...bigNumsToStrings(vector.values, 2)]
          };
        }
        visitFloat(vector) {
          return { "DATA": [...vector.values] };
        }
        visitUtf8(vector) {
          return { "DATA": [...vector], "OFFSET": [...vector.valueOffsets] };
        }
        visitBinary(vector) {
          return { "DATA": [...binaryToString(vector)], OFFSET: [...vector.valueOffsets] };
        }
        visitFixedSizeBinary(vector) {
          return { "DATA": [...binaryToString(vector)] };
        }
        visitDate(vector) {
          return {
            "DATA": vector.type.unit === enum_2.DateUnit.DAY ? [...vector.values] : [...bigNumsToStrings(vector.values, 2)]
          };
        }
        visitTimestamp(vector) {
          return { "DATA": [...bigNumsToStrings(vector.values, 2)] };
        }
        visitTime(vector) {
          return {
            "DATA": vector.type.unit < enum_2.TimeUnit.MICROSECOND ? [...vector.values] : [...bigNumsToStrings(vector.values, 2)]
          };
        }
        visitDecimal(vector) {
          return { "DATA": [...bigNumsToStrings(vector.values, 4)] };
        }
        visitList(vector) {
          return {
            "OFFSET": [...vector.valueOffsets],
            "children": vector.type.children.map((f, i) => this.visit(new column_1.Column(f, [vector.getChildAt(i)])))
          };
        }
        visitStruct(vector) {
          return {
            "children": vector.type.children.map((f, i) => this.visit(new column_1.Column(f, [vector.getChildAt(i)])))
          };
        }
        visitUnion(vector) {
          return {
            "TYPE": [...vector.typeIds],
            "OFFSET": vector.type.mode === enum_2.UnionMode.Dense ? [...vector.valueOffsets] : void 0,
            "children": vector.type.children.map((f, i) => this.visit(new column_1.Column(f, [vector.getChildAt(i)])))
          };
        }
        visitInterval(vector) {
          return { "DATA": [...vector.values] };
        }
        visitFixedSizeList(vector) {
          return {
            "children": vector.type.children.map((f, i) => this.visit(new column_1.Column(f, [vector.getChildAt(i)])))
          };
        }
        visitMap(vector) {
          return {
            "OFFSET": [...vector.valueOffsets],
            "children": vector.type.children.map((f, i) => this.visit(new column_1.Column(f, [vector.getChildAt(i)])))
          };
        }
      };
      exports.JSONVectorAssembler = JSONVectorAssembler;
      function* binaryToString(vector) {
        for (const octets of vector) {
          yield octets.reduce((str, byte) => {
            return `${str}${("0" + (byte & 255).toString(16)).slice(-2)}`;
          }, "").toUpperCase();
        }
      }
      function* bigNumsToStrings(values, stride) {
        for (let i = -1, n = values.length / stride; ++i < n; ) {
          yield `${bn_1.BN.new(values.subarray((i + 0) * stride, (i + 1) * stride), false)}`;
        }
      }
    }
  });

  // node_modules/apache-arrow/ipc/writer.js
  var require_writer = __commonJS({
    "node_modules/apache-arrow/ipc/writer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RecordBatchJSONWriter = exports.RecordBatchFileWriter = exports.RecordBatchStreamWriter = exports.RecordBatchWriter = void 0;
      var tslib_1 = require_tslib();
      var table_1 = require_table();
      var message_1 = require_message2();
      var column_1 = require_column();
      var type_1 = require_type();
      var schema_1 = require_schema();
      var message_2 = require_message();
      var metadata = require_message();
      var file_1 = require_file();
      var enum_1 = require_enum();
      var typecomparator_1 = require_typecomparator();
      var stream_1 = require_stream();
      var vectorassembler_1 = require_vectorassembler();
      var jsontypeassembler_1 = require_jsontypeassembler();
      var jsonvectorassembler_1 = require_jsonvectorassembler();
      var buffer_1 = require_buffer();
      var recordbatch_1 = require_recordbatch2();
      var interfaces_1 = require_interfaces();
      var compat_1 = require_compat();
      var RecordBatchWriter2 = class extends interfaces_1.ReadableInterop {
        constructor(options) {
          super();
          this._position = 0;
          this._started = false;
          this._sink = new stream_1.AsyncByteQueue();
          this._schema = null;
          this._dictionaryBlocks = [];
          this._recordBatchBlocks = [];
          this._dictionaryDeltaOffsets = new Map();
          compat_1.isObject(options) || (options = { autoDestroy: true, writeLegacyIpcFormat: false });
          this._autoDestroy = typeof options.autoDestroy === "boolean" ? options.autoDestroy : true;
          this._writeLegacyIpcFormat = typeof options.writeLegacyIpcFormat === "boolean" ? options.writeLegacyIpcFormat : false;
        }
        static throughNode(options) {
          throw new Error(`"throughNode" not available in this environment`);
        }
        static throughDOM(writableStrategy, readableStrategy) {
          throw new Error(`"throughDOM" not available in this environment`);
        }
        toString(sync = false) {
          return this._sink.toString(sync);
        }
        toUint8Array(sync = false) {
          return this._sink.toUint8Array(sync);
        }
        writeAll(input) {
          if (compat_1.isPromise(input)) {
            return input.then((x) => this.writeAll(x));
          } else if (compat_1.isAsyncIterable(input)) {
            return writeAllAsync(this, input);
          }
          return writeAll(this, input);
        }
        get closed() {
          return this._sink.closed;
        }
        [Symbol.asyncIterator]() {
          return this._sink[Symbol.asyncIterator]();
        }
        toDOMStream(options) {
          return this._sink.toDOMStream(options);
        }
        toNodeStream(options) {
          return this._sink.toNodeStream(options);
        }
        close() {
          return this.reset()._sink.close();
        }
        abort(reason) {
          return this.reset()._sink.abort(reason);
        }
        finish() {
          this._autoDestroy ? this.close() : this.reset(this._sink, this._schema);
          return this;
        }
        reset(sink = this._sink, schema = null) {
          if (sink === this._sink || sink instanceof stream_1.AsyncByteQueue) {
            this._sink = sink;
          } else {
            this._sink = new stream_1.AsyncByteQueue();
            if (sink && compat_1.isWritableDOMStream(sink)) {
              this.toDOMStream({ type: "bytes" }).pipeTo(sink);
            } else if (sink && compat_1.isWritableNodeStream(sink)) {
              this.toNodeStream({ objectMode: false }).pipe(sink);
            }
          }
          if (this._started && this._schema) {
            this._writeFooter(this._schema);
          }
          this._started = false;
          this._dictionaryBlocks = [];
          this._recordBatchBlocks = [];
          this._dictionaryDeltaOffsets = new Map();
          if (!schema || !typecomparator_1.compareSchemas(schema, this._schema)) {
            if (schema === null) {
              this._position = 0;
              this._schema = null;
            } else {
              this._started = true;
              this._schema = schema;
              this._writeSchema(schema);
            }
          }
          return this;
        }
        write(payload) {
          let schema = null;
          if (!this._sink) {
            throw new Error(`RecordBatchWriter is closed`);
          } else if (payload == null) {
            return this.finish() && void 0;
          } else if (payload instanceof table_1.Table && !(schema = payload.schema)) {
            return this.finish() && void 0;
          } else if (payload instanceof recordbatch_1.RecordBatch && !(schema = payload.schema)) {
            return this.finish() && void 0;
          }
          if (schema && !typecomparator_1.compareSchemas(schema, this._schema)) {
            if (this._started && this._autoDestroy) {
              return this.close();
            }
            this.reset(this._sink, schema);
          }
          if (payload instanceof recordbatch_1.RecordBatch) {
            if (!(payload instanceof recordbatch_1._InternalEmptyPlaceholderRecordBatch)) {
              this._writeRecordBatch(payload);
            }
          } else if (payload instanceof table_1.Table) {
            this.writeAll(payload.chunks);
          } else if (compat_1.isIterable(payload)) {
            this.writeAll(payload);
          }
        }
        _writeMessage(message, alignment = 8) {
          const a = alignment - 1;
          const buffer = message_2.Message.encode(message);
          const flatbufferSize = buffer.byteLength;
          const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
          const alignedSize = flatbufferSize + prefixSize + a & ~a;
          const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
          if (message.headerType === enum_1.MessageHeader.RecordBatch) {
            this._recordBatchBlocks.push(new file_1.FileBlock(alignedSize, message.bodyLength, this._position));
          } else if (message.headerType === enum_1.MessageHeader.DictionaryBatch) {
            this._dictionaryBlocks.push(new file_1.FileBlock(alignedSize, message.bodyLength, this._position));
          }
          if (!this._writeLegacyIpcFormat) {
            this._write(Int32Array.of(-1));
          }
          this._write(Int32Array.of(alignedSize - prefixSize));
          if (flatbufferSize > 0) {
            this._write(buffer);
          }
          return this._writePadding(nPaddingBytes);
        }
        _write(chunk) {
          if (this._started) {
            const buffer = buffer_1.toUint8Array(chunk);
            if (buffer && buffer.byteLength > 0) {
              this._sink.write(buffer);
              this._position += buffer.byteLength;
            }
          }
          return this;
        }
        _writeSchema(schema) {
          return this._writeMessage(message_2.Message.from(schema));
        }
        _writeFooter(schema) {
          return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
        }
        _writeMagic() {
          return this._write(message_1.MAGIC);
        }
        _writePadding(nBytes) {
          return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
        }
        _writeRecordBatch(batch) {
          const { byteLength, nodes, bufferRegions, buffers } = vectorassembler_1.VectorAssembler.assemble(batch);
          const recordBatch = new metadata.RecordBatch(batch.length, nodes, bufferRegions);
          const message = message_2.Message.from(recordBatch, byteLength);
          return this._writeDictionaries(batch)._writeMessage(message)._writeBodyBuffers(buffers);
        }
        _writeDictionaryBatch(dictionary, id, isDelta = false) {
          this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
          const { byteLength, nodes, bufferRegions, buffers } = vectorassembler_1.VectorAssembler.assemble(dictionary);
          const recordBatch = new metadata.RecordBatch(dictionary.length, nodes, bufferRegions);
          const dictionaryBatch = new metadata.DictionaryBatch(recordBatch, id, isDelta);
          const message = message_2.Message.from(dictionaryBatch, byteLength);
          return this._writeMessage(message)._writeBodyBuffers(buffers);
        }
        _writeBodyBuffers(buffers) {
          let buffer;
          let size, padding;
          for (let i = -1, n = buffers.length; ++i < n; ) {
            if ((buffer = buffers[i]) && (size = buffer.byteLength) > 0) {
              this._write(buffer);
              if ((padding = (size + 7 & ~7) - size) > 0) {
                this._writePadding(padding);
              }
            }
          }
          return this;
        }
        _writeDictionaries(batch) {
          for (let [id, dictionary] of batch.dictionaries) {
            let offset = this._dictionaryDeltaOffsets.get(id) || 0;
            if (offset === 0 || (dictionary = dictionary.slice(offset)).length > 0) {
              const chunks = "chunks" in dictionary ? dictionary.chunks : [dictionary];
              for (const chunk of chunks) {
                this._writeDictionaryBatch(chunk, id, offset > 0);
                offset += chunk.length;
              }
            }
          }
          return this;
        }
      };
      exports.RecordBatchWriter = RecordBatchWriter2;
      var RecordBatchStreamWriter = class extends RecordBatchWriter2 {
        static writeAll(input, options) {
          const writer = new RecordBatchStreamWriter(options);
          if (compat_1.isPromise(input)) {
            return input.then((x) => writer.writeAll(x));
          } else if (compat_1.isAsyncIterable(input)) {
            return writeAllAsync(writer, input);
          }
          return writeAll(writer, input);
        }
      };
      exports.RecordBatchStreamWriter = RecordBatchStreamWriter;
      var RecordBatchFileWriter = class extends RecordBatchWriter2 {
        static writeAll(input) {
          const writer = new RecordBatchFileWriter();
          if (compat_1.isPromise(input)) {
            return input.then((x) => writer.writeAll(x));
          } else if (compat_1.isAsyncIterable(input)) {
            return writeAllAsync(writer, input);
          }
          return writeAll(writer, input);
        }
        constructor() {
          super();
          this._autoDestroy = true;
        }
        _writeSchema(schema) {
          return this._writeMagic()._writePadding(2);
        }
        _writeFooter(schema) {
          const buffer = file_1.Footer.encode(new file_1.Footer(schema, enum_1.MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks));
          return super._writeFooter(schema)._write(buffer)._write(Int32Array.of(buffer.byteLength))._writeMagic();
        }
      };
      exports.RecordBatchFileWriter = RecordBatchFileWriter;
      var RecordBatchJSONWriter = class extends RecordBatchWriter2 {
        constructor() {
          super();
          this._autoDestroy = true;
          this._recordBatches = [];
          this._dictionaries = [];
        }
        static writeAll(input) {
          return new RecordBatchJSONWriter().writeAll(input);
        }
        _writeMessage() {
          return this;
        }
        _writeFooter(schema) {
          return this;
        }
        _writeSchema(schema) {
          return this._write(`{
  "schema": ${JSON.stringify({ fields: schema.fields.map(fieldToJSON) }, null, 2)}`);
        }
        _writeDictionaries(batch) {
          if (batch.dictionaries.size > 0) {
            this._dictionaries.push(batch);
          }
          return this;
        }
        _writeDictionaryBatch(dictionary, id, isDelta = false) {
          this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
          this._write(this._dictionaryBlocks.length === 0 ? `    ` : `,
    `);
          this._write(`${dictionaryBatchToJSON(dictionary, id, isDelta)}`);
          this._dictionaryBlocks.push(new file_1.FileBlock(0, 0, 0));
          return this;
        }
        _writeRecordBatch(batch) {
          this._writeDictionaries(batch);
          this._recordBatches.push(batch);
          return this;
        }
        close() {
          if (this._dictionaries.length > 0) {
            this._write(`,
  "dictionaries": [
`);
            for (const batch of this._dictionaries) {
              super._writeDictionaries(batch);
            }
            this._write(`
  ]`);
          }
          if (this._recordBatches.length > 0) {
            for (let i = -1, n = this._recordBatches.length; ++i < n; ) {
              this._write(i === 0 ? `,
  "batches": [
    ` : `,
    `);
              this._write(`${recordBatchToJSON(this._recordBatches[i])}`);
              this._recordBatchBlocks.push(new file_1.FileBlock(0, 0, 0));
            }
            this._write(`
  ]`);
          }
          if (this._schema) {
            this._write(`
}`);
          }
          this._dictionaries = [];
          this._recordBatches = [];
          return super.close();
        }
      };
      exports.RecordBatchJSONWriter = RecordBatchJSONWriter;
      function writeAll(writer, input) {
        let chunks = input;
        if (input instanceof table_1.Table) {
          chunks = input.chunks;
          writer.reset(void 0, input.schema);
        }
        for (const batch of chunks) {
          writer.write(batch);
        }
        return writer.finish();
      }
      function writeAllAsync(writer, batches) {
        var batches_1, batches_1_1;
        var e_1, _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          try {
            for (batches_1 = tslib_1.__asyncValues(batches); batches_1_1 = yield batches_1.next(), !batches_1_1.done; ) {
              const batch = batches_1_1.value;
              writer.write(batch);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (batches_1_1 && !batches_1_1.done && (_a = batches_1.return))
                yield _a.call(batches_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return writer.finish();
        });
      }
      function fieldToJSON({ name, type, nullable }) {
        const assembler = new jsontypeassembler_1.JSONTypeAssembler();
        return {
          "name": name,
          "nullable": nullable,
          "type": assembler.visit(type),
          "children": (type.children || []).map(fieldToJSON),
          "dictionary": !type_1.DataType.isDictionary(type) ? void 0 : {
            "id": type.id,
            "isOrdered": type.isOrdered,
            "indexType": assembler.visit(type.indices)
          }
        };
      }
      function dictionaryBatchToJSON(dictionary, id, isDelta = false) {
        const field = new schema_1.Field(`${id}`, dictionary.type, dictionary.nullCount > 0);
        const columns = jsonvectorassembler_1.JSONVectorAssembler.assemble(new column_1.Column(field, [dictionary]));
        return JSON.stringify({
          "id": id,
          "isDelta": isDelta,
          "data": {
            "count": dictionary.length,
            "columns": columns
          }
        }, null, 2);
      }
      function recordBatchToJSON(records) {
        return JSON.stringify({
          "count": records.length,
          "columns": jsonvectorassembler_1.JSONVectorAssembler.assemble(records)
        }, null, 2);
      }
    }
  });

  // node_modules/apache-arrow/util/recordbatch.js
  var require_recordbatch = __commonJS({
    "node_modules/apache-arrow/util/recordbatch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.distributeVectorsIntoRecordBatches = exports.distributeColumnsIntoRecordBatches = exports.ensureSameLengthData = void 0;
      var data_1 = require_data();
      var schema_1 = require_schema();
      var chunked_1 = require_chunked();
      var recordbatch_1 = require_recordbatch2();
      var noopBuf = new Uint8Array(0);
      var nullBufs = (bitmapLength) => [
        noopBuf,
        noopBuf,
        new Uint8Array(bitmapLength),
        noopBuf
      ];
      function ensureSameLengthData(schema, chunks, batchLength = chunks.reduce((l, c) => Math.max(l, c.length), 0)) {
        let data;
        let field;
        let i = -1;
        const n = chunks.length;
        const fields = [...schema.fields];
        const batchData = [];
        const bitmapLength = (batchLength + 63 & ~63) >> 3;
        while (++i < n) {
          if ((data = chunks[i]) && data.length === batchLength) {
            batchData[i] = data;
          } else {
            (field = fields[i]).nullable || (fields[i] = fields[i].clone({ nullable: true }));
            batchData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength) : data_1.Data.new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
          }
        }
        return [new schema_1.Schema(fields), batchLength, batchData];
      }
      exports.ensureSameLengthData = ensureSameLengthData;
      function distributeColumnsIntoRecordBatches(columns) {
        return distributeVectorsIntoRecordBatches(new schema_1.Schema(columns.map(({ field }) => field)), columns);
      }
      exports.distributeColumnsIntoRecordBatches = distributeColumnsIntoRecordBatches;
      function distributeVectorsIntoRecordBatches(schema, vecs) {
        return uniformlyDistributeChunksAcrossRecordBatches(schema, vecs.map((v2) => v2 instanceof chunked_1.Chunked ? v2.chunks.map((c) => c.data) : [v2.data]));
      }
      exports.distributeVectorsIntoRecordBatches = distributeVectorsIntoRecordBatches;
      function uniformlyDistributeChunksAcrossRecordBatches(schema, columns) {
        const fields = [...schema.fields];
        const batchArgs = [];
        const memo = { numBatches: columns.reduce((n, c) => Math.max(n, c.length), 0) };
        let numBatches = 0, batchLength = 0;
        let i = -1;
        const numColumns = columns.length;
        let child, childData = [];
        while (memo.numBatches-- > 0) {
          for (batchLength = Number.POSITIVE_INFINITY, i = -1; ++i < numColumns; ) {
            childData[i] = child = columns[i].shift();
            batchLength = Math.min(batchLength, child ? child.length : batchLength);
          }
          if (isFinite(batchLength)) {
            childData = distributeChildData(fields, batchLength, childData, columns, memo);
            if (batchLength > 0) {
              batchArgs[numBatches++] = [batchLength, childData.slice()];
            }
          }
        }
        return [
          schema = new schema_1.Schema(fields, schema.metadata),
          batchArgs.map((xs) => new recordbatch_1.RecordBatch(schema, ...xs))
        ];
      }
      function distributeChildData(fields, batchLength, childData, columns, memo) {
        let data;
        let field;
        let length = 0, i = -1;
        const n = columns.length;
        const bitmapLength = (batchLength + 63 & ~63) >> 3;
        while (++i < n) {
          if ((data = childData[i]) && (length = data.length) >= batchLength) {
            if (length === batchLength) {
              childData[i] = data;
            } else {
              childData[i] = data.slice(0, batchLength);
              data = data.slice(batchLength, length - batchLength);
              memo.numBatches = Math.max(memo.numBatches, columns[i].unshift(data));
            }
          } else {
            (field = fields[i]).nullable || (fields[i] = field.clone({ nullable: true }));
            childData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength) : data_1.Data.new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
          }
        }
        return childData;
      }
    }
  });

  // node_modules/apache-arrow/vector/base.js
  var require_base = __commonJS({
    "node_modules/apache-arrow/vector/base.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BaseVector = void 0;
      var enum_1 = require_enum();
      var chunked_1 = require_chunked();
      var vector_1 = require_vector2();
      var vector_2 = require_vector();
      var BaseVector = class extends vector_2.AbstractVector {
        constructor(data, children) {
          super();
          this._children = children;
          this.numChildren = data.childData.length;
          this._bindDataAccessors(this.data = data);
        }
        get type() {
          return this.data.type;
        }
        get typeId() {
          return this.data.typeId;
        }
        get length() {
          return this.data.length;
        }
        get offset() {
          return this.data.offset;
        }
        get stride() {
          return this.data.stride;
        }
        get nullCount() {
          return this.data.nullCount;
        }
        get byteLength() {
          return this.data.byteLength;
        }
        get VectorName() {
          return `${enum_1.Type[this.typeId]}Vector`;
        }
        get ArrayType() {
          return this.type.ArrayType;
        }
        get values() {
          return this.data.values;
        }
        get typeIds() {
          return this.data.typeIds;
        }
        get nullBitmap() {
          return this.data.nullBitmap;
        }
        get valueOffsets() {
          return this.data.valueOffsets;
        }
        get [Symbol.toStringTag]() {
          return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
        }
        clone(data, children = this._children) {
          return vector_2.Vector.new(data, children);
        }
        concat(...others) {
          return chunked_1.Chunked.concat(this, ...others);
        }
        slice(begin, end) {
          return vector_1.clampRange(this, begin, end, this._sliceInternal);
        }
        isValid(index) {
          if (this.nullCount > 0) {
            const idx = this.offset + index;
            const val = this.nullBitmap[idx >> 3];
            const mask = val & 1 << idx % 8;
            return mask !== 0;
          }
          return true;
        }
        getChildAt(index) {
          return index < 0 || index >= this.numChildren ? null : (this._children || (this._children = []))[index] || (this._children[index] = vector_2.Vector.new(this.data.childData[index]));
        }
        toJSON() {
          return [...this];
        }
        _sliceInternal(self2, begin, end) {
          return self2.clone(self2.data.slice(begin, end - begin), null);
        }
        _bindDataAccessors(data) {
        }
      };
      exports.BaseVector = BaseVector;
      BaseVector.prototype[Symbol.isConcatSpreadable] = true;
    }
  });

  // node_modules/apache-arrow/vector/binary.js
  var require_binary2 = __commonJS({
    "node_modules/apache-arrow/vector/binary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BinaryVector = void 0;
      var vector_1 = require_vector();
      var base_1 = require_base();
      var type_1 = require_type();
      var BinaryVector = class extends base_1.BaseVector {
        asUtf8() {
          return vector_1.Vector.new(this.data.clone(new type_1.Utf8()));
        }
      };
      exports.BinaryVector = BinaryVector;
    }
  });

  // node_modules/apache-arrow/vector/bool.js
  var require_bool2 = __commonJS({
    "node_modules/apache-arrow/vector/bool.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BoolVector = void 0;
      var type_1 = require_type();
      var base_1 = require_base();
      var index_1 = require_vector3();
      var BoolVector = class extends base_1.BaseVector {
        static from(input) {
          return index_1.vectorFromValuesWithType(() => new type_1.Bool(), input);
        }
      };
      exports.BoolVector = BoolVector;
    }
  });

  // node_modules/apache-arrow/vector/date.js
  var require_date2 = __commonJS({
    "node_modules/apache-arrow/vector/date.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DateMillisecondVector = exports.DateDayVector = exports.DateVector = void 0;
      var enum_1 = require_enum();
      var base_1 = require_base();
      var index_1 = require_vector3();
      var type_1 = require_type();
      var DateVector = class extends base_1.BaseVector {
        static from(...args) {
          if (args.length === 2) {
            return index_1.vectorFromValuesWithType(() => args[1] === enum_1.DateUnit.DAY ? new type_1.DateDay() : new type_1.DateMillisecond(), args[0]);
          }
          return index_1.vectorFromValuesWithType(() => new type_1.DateMillisecond(), args[0]);
        }
      };
      exports.DateVector = DateVector;
      var DateDayVector = class extends DateVector {
      };
      exports.DateDayVector = DateDayVector;
      var DateMillisecondVector = class extends DateVector {
      };
      exports.DateMillisecondVector = DateMillisecondVector;
    }
  });

  // node_modules/apache-arrow/vector/decimal.js
  var require_decimal2 = __commonJS({
    "node_modules/apache-arrow/vector/decimal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DecimalVector = void 0;
      var base_1 = require_base();
      var DecimalVector = class extends base_1.BaseVector {
      };
      exports.DecimalVector = DecimalVector;
    }
  });

  // node_modules/apache-arrow/vector/dictionary.js
  var require_dictionary2 = __commonJS({
    "node_modules/apache-arrow/vector/dictionary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DictionaryVector = void 0;
      var data_1 = require_data();
      var vector_1 = require_vector();
      var base_1 = require_base();
      var index_1 = require_vector3();
      var type_1 = require_type();
      var DictionaryVector = class extends base_1.BaseVector {
        constructor(data) {
          super(data);
          this.indices = vector_1.Vector.new(data.clone(this.type.indices));
        }
        static from(...args) {
          if (args.length === 3) {
            const [values, indices, keys] = args;
            const type = new type_1.Dictionary(values.type, indices, null, null);
            return vector_1.Vector.new(data_1.Data.Dictionary(type, 0, keys.length, 0, null, keys, values));
          }
          return index_1.vectorFromValuesWithType(() => args[0].type, args[0]);
        }
        get dictionary() {
          return this.data.dictionary;
        }
        reverseLookup(value) {
          return this.dictionary.indexOf(value);
        }
        getKey(idx) {
          return this.indices.get(idx);
        }
        getValue(key) {
          return this.dictionary.get(key);
        }
        setKey(idx, key) {
          return this.indices.set(idx, key);
        }
        setValue(key, value) {
          return this.dictionary.set(key, value);
        }
      };
      exports.DictionaryVector = DictionaryVector;
      DictionaryVector.prototype.indices = null;
    }
  });

  // node_modules/apache-arrow/vector/fixedsizebinary.js
  var require_fixedsizebinary2 = __commonJS({
    "node_modules/apache-arrow/vector/fixedsizebinary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FixedSizeBinaryVector = void 0;
      var base_1 = require_base();
      var FixedSizeBinaryVector = class extends base_1.BaseVector {
      };
      exports.FixedSizeBinaryVector = FixedSizeBinaryVector;
    }
  });

  // node_modules/apache-arrow/vector/fixedsizelist.js
  var require_fixedsizelist2 = __commonJS({
    "node_modules/apache-arrow/vector/fixedsizelist.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FixedSizeListVector = void 0;
      var base_1 = require_base();
      var FixedSizeListVector = class extends base_1.BaseVector {
      };
      exports.FixedSizeListVector = FixedSizeListVector;
    }
  });

  // node_modules/apache-arrow/vector/float.js
  var require_float2 = __commonJS({
    "node_modules/apache-arrow/vector/float.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Float64Vector = exports.Float32Vector = exports.Float16Vector = exports.FloatVector = void 0;
      var data_1 = require_data();
      var vector_1 = require_vector();
      var base_1 = require_base();
      var index_1 = require_vector3();
      var type_1 = require_type();
      var FloatVector = class extends base_1.BaseVector {
        static from(input) {
          let ArrowType = vectorTypeToDataType(this);
          if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
            const InputType = arrayTypeToDataType(input.constructor) || ArrowType;
            if (ArrowType === null) {
              ArrowType = InputType;
            }
            if (ArrowType && ArrowType === InputType) {
              const type = new ArrowType();
              const length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
              if (!convertTo16Bit(ArrowType, input.constructor)) {
                return vector_1.Vector.new(data_1.Data.Float(type, 0, length, 0, null, input));
              }
            }
          }
          if (ArrowType) {
            return index_1.vectorFromValuesWithType(() => new ArrowType(), input);
          }
          if (input instanceof DataView || input instanceof ArrayBuffer) {
            throw new TypeError(`Cannot infer float type from instance of ${input.constructor.name}`);
          }
          throw new TypeError("Unrecognized FloatVector input");
        }
      };
      exports.FloatVector = FloatVector;
      var Float16Vector = class extends FloatVector {
        toFloat32Array() {
          return new Float32Array(this);
        }
        toFloat64Array() {
          return new Float64Array(this);
        }
      };
      exports.Float16Vector = Float16Vector;
      var Float32Vector = class extends FloatVector {
      };
      exports.Float32Vector = Float32Vector;
      var Float64Vector = class extends FloatVector {
      };
      exports.Float64Vector = Float64Vector;
      var convertTo16Bit = (typeCtor, dataCtor) => {
        return typeCtor === type_1.Float16 && dataCtor !== Uint16Array;
      };
      var arrayTypeToDataType = (ctor) => {
        switch (ctor) {
          case Uint16Array:
            return type_1.Float16;
          case Float32Array:
            return type_1.Float32;
          case Float64Array:
            return type_1.Float64;
          default:
            return null;
        }
      };
      var vectorTypeToDataType = (ctor) => {
        switch (ctor) {
          case Float16Vector:
            return type_1.Float16;
          case Float32Vector:
            return type_1.Float32;
          case Float64Vector:
            return type_1.Float64;
          default:
            return null;
        }
      };
    }
  });

  // node_modules/apache-arrow/vector/interval.js
  var require_interval2 = __commonJS({
    "node_modules/apache-arrow/vector/interval.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IntervalYearMonthVector = exports.IntervalDayTimeVector = exports.IntervalVector = void 0;
      var base_1 = require_base();
      var IntervalVector = class extends base_1.BaseVector {
      };
      exports.IntervalVector = IntervalVector;
      var IntervalDayTimeVector = class extends IntervalVector {
      };
      exports.IntervalDayTimeVector = IntervalDayTimeVector;
      var IntervalYearMonthVector = class extends IntervalVector {
      };
      exports.IntervalYearMonthVector = IntervalYearMonthVector;
    }
  });

  // node_modules/apache-arrow/vector/int.js
  var require_int3 = __commonJS({
    "node_modules/apache-arrow/vector/int.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Uint64Vector = exports.Uint32Vector = exports.Uint16Vector = exports.Uint8Vector = exports.Int64Vector = exports.Int32Vector = exports.Int16Vector = exports.Int8Vector = exports.IntVector = void 0;
      var data_1 = require_data();
      var vector_1 = require_vector();
      var base_1 = require_base();
      var index_1 = require_vector3();
      var compat_1 = require_compat();
      var buffer_1 = require_buffer();
      var type_1 = require_type();
      var IntVector = class extends base_1.BaseVector {
        static from(...args) {
          const [input, is64bit = false] = args;
          let ArrowType = vectorTypeToDataType(this, is64bit);
          if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
            const InputType = arrayTypeToDataType(input.constructor, is64bit) || ArrowType;
            if (ArrowType === null) {
              ArrowType = InputType;
            }
            if (ArrowType && ArrowType === InputType) {
              const type = new ArrowType();
              let length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
              if (convert32To64Bit(ArrowType, input.constructor)) {
                length *= 0.5;
              }
              return vector_1.Vector.new(data_1.Data.Int(type, 0, length, 0, null, input));
            }
          }
          if (ArrowType) {
            return index_1.vectorFromValuesWithType(() => new ArrowType(), input);
          }
          if (input instanceof DataView || input instanceof ArrayBuffer) {
            throw new TypeError(`Cannot infer integer type from instance of ${input.constructor.name}`);
          }
          throw new TypeError("Unrecognized IntVector input");
        }
      };
      exports.IntVector = IntVector;
      var Int8Vector = class extends IntVector {
      };
      exports.Int8Vector = Int8Vector;
      var Int16Vector = class extends IntVector {
      };
      exports.Int16Vector = Int16Vector;
      var Int32Vector = class extends IntVector {
      };
      exports.Int32Vector = Int32Vector;
      var Int64Vector = class extends IntVector {
        toBigInt64Array() {
          return buffer_1.toBigInt64Array(this.values);
        }
        get values64() {
          return this._values64 || (this._values64 = this.toBigInt64Array());
        }
      };
      exports.Int64Vector = Int64Vector;
      var Uint8Vector = class extends IntVector {
      };
      exports.Uint8Vector = Uint8Vector;
      var Uint16Vector = class extends IntVector {
      };
      exports.Uint16Vector = Uint16Vector;
      var Uint32Vector = class extends IntVector {
      };
      exports.Uint32Vector = Uint32Vector;
      var Uint64Vector = class extends IntVector {
        toBigUint64Array() {
          return buffer_1.toBigUint64Array(this.values);
        }
        get values64() {
          return this._values64 || (this._values64 = this.toBigUint64Array());
        }
      };
      exports.Uint64Vector = Uint64Vector;
      var convert32To64Bit = (typeCtor, dataCtor) => {
        return (typeCtor === type_1.Int64 || typeCtor === type_1.Uint64) && (dataCtor === Int32Array || dataCtor === Uint32Array);
      };
      var arrayTypeToDataType = (ctor, is64bit) => {
        switch (ctor) {
          case Int8Array:
            return type_1.Int8;
          case Int16Array:
            return type_1.Int16;
          case Int32Array:
            return is64bit ? type_1.Int64 : type_1.Int32;
          case compat_1.BigInt64Array:
            return type_1.Int64;
          case Uint8Array:
            return type_1.Uint8;
          case Uint16Array:
            return type_1.Uint16;
          case Uint32Array:
            return is64bit ? type_1.Uint64 : type_1.Uint32;
          case compat_1.BigUint64Array:
            return type_1.Uint64;
          default:
            return null;
        }
      };
      var vectorTypeToDataType = (ctor, is64bit) => {
        switch (ctor) {
          case Int8Vector:
            return type_1.Int8;
          case Int16Vector:
            return type_1.Int16;
          case Int32Vector:
            return is64bit ? type_1.Int64 : type_1.Int32;
          case Int64Vector:
            return type_1.Int64;
          case Uint8Vector:
            return type_1.Uint8;
          case Uint16Vector:
            return type_1.Uint16;
          case Uint32Vector:
            return is64bit ? type_1.Uint64 : type_1.Uint32;
          case Uint64Vector:
            return type_1.Uint64;
          default:
            return null;
        }
      };
    }
  });

  // node_modules/apache-arrow/vector/list.js
  var require_list2 = __commonJS({
    "node_modules/apache-arrow/vector/list.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ListVector = void 0;
      var base_1 = require_base();
      var ListVector = class extends base_1.BaseVector {
      };
      exports.ListVector = ListVector;
    }
  });

  // node_modules/apache-arrow/vector/map.js
  var require_map2 = __commonJS({
    "node_modules/apache-arrow/vector/map.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MapVector = void 0;
      var row_1 = require_row();
      var vector_1 = require_vector();
      var base_1 = require_base();
      var type_1 = require_type();
      var MapVector = class extends base_1.BaseVector {
        asList() {
          const child = this.type.children[0];
          return vector_1.Vector.new(this.data.clone(new type_1.List(child)));
        }
        bind(index) {
          const child = this.getChildAt(0);
          const { [index]: begin, [index + 1]: end } = this.valueOffsets;
          return new row_1.MapRow(child.slice(begin, end));
        }
      };
      exports.MapVector = MapVector;
    }
  });

  // node_modules/apache-arrow/vector/null.js
  var require_null2 = __commonJS({
    "node_modules/apache-arrow/vector/null.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NullVector = void 0;
      var base_1 = require_base();
      var NullVector = class extends base_1.BaseVector {
      };
      exports.NullVector = NullVector;
    }
  });

  // node_modules/apache-arrow/vector/struct.js
  var require_struct2 = __commonJS({
    "node_modules/apache-arrow/vector/struct.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StructVector = void 0;
      var row_1 = require_row();
      var base_1 = require_base();
      var kRowIndex = Symbol.for("rowIndex");
      var StructVector = class extends base_1.BaseVector {
        bind(index) {
          const proto = this._row || (this._row = new row_1.StructRow(this));
          const bound = Object.create(proto);
          bound[kRowIndex] = index;
          return bound;
        }
      };
      exports.StructVector = StructVector;
    }
  });

  // node_modules/apache-arrow/vector/timestamp.js
  var require_timestamp2 = __commonJS({
    "node_modules/apache-arrow/vector/timestamp.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimestampNanosecondVector = exports.TimestampMicrosecondVector = exports.TimestampMillisecondVector = exports.TimestampSecondVector = exports.TimestampVector = void 0;
      var base_1 = require_base();
      var TimestampVector = class extends base_1.BaseVector {
      };
      exports.TimestampVector = TimestampVector;
      var TimestampSecondVector = class extends TimestampVector {
      };
      exports.TimestampSecondVector = TimestampSecondVector;
      var TimestampMillisecondVector = class extends TimestampVector {
      };
      exports.TimestampMillisecondVector = TimestampMillisecondVector;
      var TimestampMicrosecondVector = class extends TimestampVector {
      };
      exports.TimestampMicrosecondVector = TimestampMicrosecondVector;
      var TimestampNanosecondVector = class extends TimestampVector {
      };
      exports.TimestampNanosecondVector = TimestampNanosecondVector;
    }
  });

  // node_modules/apache-arrow/vector/time.js
  var require_time2 = __commonJS({
    "node_modules/apache-arrow/vector/time.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimeNanosecondVector = exports.TimeMicrosecondVector = exports.TimeMillisecondVector = exports.TimeSecondVector = exports.TimeVector = void 0;
      var base_1 = require_base();
      var TimeVector = class extends base_1.BaseVector {
      };
      exports.TimeVector = TimeVector;
      var TimeSecondVector = class extends TimeVector {
      };
      exports.TimeSecondVector = TimeSecondVector;
      var TimeMillisecondVector = class extends TimeVector {
      };
      exports.TimeMillisecondVector = TimeMillisecondVector;
      var TimeMicrosecondVector = class extends TimeVector {
      };
      exports.TimeMicrosecondVector = TimeMicrosecondVector;
      var TimeNanosecondVector = class extends TimeVector {
      };
      exports.TimeNanosecondVector = TimeNanosecondVector;
    }
  });

  // node_modules/apache-arrow/vector/union.js
  var require_union2 = __commonJS({
    "node_modules/apache-arrow/vector/union.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SparseUnionVector = exports.DenseUnionVector = exports.UnionVector = void 0;
      var base_1 = require_base();
      var UnionVector = class extends base_1.BaseVector {
        get typeIdToChildIndex() {
          return this.data.type.typeIdToChildIndex;
        }
      };
      exports.UnionVector = UnionVector;
      var DenseUnionVector = class extends UnionVector {
        get valueOffsets() {
          return this.data.valueOffsets;
        }
      };
      exports.DenseUnionVector = DenseUnionVector;
      var SparseUnionVector = class extends UnionVector {
      };
      exports.SparseUnionVector = SparseUnionVector;
    }
  });

  // node_modules/apache-arrow/vector/utf8.js
  var require_utf83 = __commonJS({
    "node_modules/apache-arrow/vector/utf8.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Utf8Vector = void 0;
      var vector_1 = require_vector();
      var base_1 = require_base();
      var type_1 = require_type();
      var index_1 = require_vector3();
      var Utf8Vector = class extends base_1.BaseVector {
        static from(input) {
          return index_1.vectorFromValuesWithType(() => new type_1.Utf8(), input);
        }
        asBinary() {
          return vector_1.Vector.new(this.data.clone(new type_1.Binary()));
        }
      };
      exports.Utf8Vector = Utf8Vector;
    }
  });

  // node_modules/apache-arrow/util/fn.js
  var require_fn = __commonJS({
    "node_modules/apache-arrow/util/fn.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.partial2 = exports.partial1 = exports.partial0 = void 0;
      function partial0(visit) {
        return function() {
          return visit(this);
        };
      }
      exports.partial0 = partial0;
      function partial1(visit) {
        return function(a) {
          return visit(this, a);
        };
      }
      exports.partial1 = partial1;
      function partial2(visit) {
        return function(a, b) {
          return visit(this, a, b);
        };
      }
      exports.partial2 = partial2;
    }
  });

  // node_modules/apache-arrow/visitor/get.js
  var require_get = __commonJS({
    "node_modules/apache-arrow/visitor/get.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.GetVisitor = void 0;
      var bn_1 = require_bn();
      var visitor_1 = require_visitor();
      var utf8_1 = require_utf8();
      var math_1 = require_math();
      var enum_1 = require_enum();
      var GetVisitor = class extends visitor_1.Visitor {
      };
      exports.GetVisitor = GetVisitor;
      var epochDaysToMs = (data, index) => 864e5 * data[index];
      var epochMillisecondsLongToMs = (data, index) => 4294967296 * data[index + 1] + (data[index] >>> 0);
      var epochMicrosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e3) + (data[index] >>> 0) / 1e3;
      var epochNanosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e6) + (data[index] >>> 0) / 1e6;
      var epochMillisecondsToDate = (epochMs) => new Date(epochMs);
      var epochDaysToDate = (data, index) => epochMillisecondsToDate(epochDaysToMs(data, index));
      var epochMillisecondsLongToDate = (data, index) => epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
      var getNull = (_vector, _index) => null;
      var getVariableWidthBytes = (values, valueOffsets, index) => {
        const { [index]: x, [index + 1]: y2 } = valueOffsets;
        return x != null && y2 != null ? values.subarray(x, y2) : null;
      };
      var getBool = ({ offset, values }, index) => {
        const idx = offset + index;
        const byte = values[idx >> 3];
        return (byte & 1 << idx % 8) !== 0;
      };
      var getDateDay = ({ values }, index) => epochDaysToDate(values, index);
      var getDateMillisecond = ({ values }, index) => epochMillisecondsLongToDate(values, index * 2);
      var getNumeric = ({ stride, values }, index) => values[stride * index];
      var getFloat16 = ({ stride, values }, index) => math_1.uint16ToFloat64(values[stride * index]);
      var getBigInts = ({ stride, values, type }, index) => bn_1.BN.new(values.subarray(stride * index, stride * (index + 1)), type.isSigned);
      var getFixedSizeBinary = ({ stride, values }, index) => values.subarray(stride * index, stride * (index + 1));
      var getBinary = ({ values, valueOffsets }, index) => getVariableWidthBytes(values, valueOffsets, index);
      var getUtf8 = ({ values, valueOffsets }, index) => {
        const bytes = getVariableWidthBytes(values, valueOffsets, index);
        return bytes !== null ? utf8_1.decodeUtf8(bytes) : null;
      };
      var getInt = (vector, index) => vector.type.bitWidth < 64 ? getNumeric(vector, index) : getBigInts(vector, index);
      var getFloat = (vector, index) => vector.type.precision !== enum_1.Precision.HALF ? getNumeric(vector, index) : getFloat16(vector, index);
      var getDate = (vector, index) => vector.type.unit === enum_1.DateUnit.DAY ? getDateDay(vector, index) : getDateMillisecond(vector, index);
      var getTimestampSecond = ({ values }, index) => 1e3 * epochMillisecondsLongToMs(values, index * 2);
      var getTimestampMillisecond = ({ values }, index) => epochMillisecondsLongToMs(values, index * 2);
      var getTimestampMicrosecond = ({ values }, index) => epochMicrosecondsLongToMs(values, index * 2);
      var getTimestampNanosecond = ({ values }, index) => epochNanosecondsLongToMs(values, index * 2);
      var getTimestamp = (vector, index) => {
        switch (vector.type.unit) {
          case enum_1.TimeUnit.SECOND:
            return getTimestampSecond(vector, index);
          case enum_1.TimeUnit.MILLISECOND:
            return getTimestampMillisecond(vector, index);
          case enum_1.TimeUnit.MICROSECOND:
            return getTimestampMicrosecond(vector, index);
          case enum_1.TimeUnit.NANOSECOND:
            return getTimestampNanosecond(vector, index);
        }
      };
      var getTimeSecond = ({ values, stride }, index) => values[stride * index];
      var getTimeMillisecond = ({ values, stride }, index) => values[stride * index];
      var getTimeMicrosecond = ({ values }, index) => bn_1.BN.signed(values.subarray(2 * index, 2 * (index + 1)));
      var getTimeNanosecond = ({ values }, index) => bn_1.BN.signed(values.subarray(2 * index, 2 * (index + 1)));
      var getTime = (vector, index) => {
        switch (vector.type.unit) {
          case enum_1.TimeUnit.SECOND:
            return getTimeSecond(vector, index);
          case enum_1.TimeUnit.MILLISECOND:
            return getTimeMillisecond(vector, index);
          case enum_1.TimeUnit.MICROSECOND:
            return getTimeMicrosecond(vector, index);
          case enum_1.TimeUnit.NANOSECOND:
            return getTimeNanosecond(vector, index);
        }
      };
      var getDecimal = ({ values }, index) => bn_1.BN.decimal(values.subarray(4 * index, 4 * (index + 1)));
      var getList = (vector, index) => {
        const child = vector.getChildAt(0), { valueOffsets, stride } = vector;
        return child.slice(valueOffsets[index * stride], valueOffsets[index * stride + 1]);
      };
      var getMap = (vector, index) => {
        return vector.bind(index);
      };
      var getStruct = (vector, index) => {
        return vector.bind(index);
      };
      var getUnion = (vector, index) => {
        return vector.type.mode === enum_1.UnionMode.Dense ? getDenseUnion(vector, index) : getSparseUnion(vector, index);
      };
      var getDenseUnion = (vector, index) => {
        const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
        const child = vector.getChildAt(childIndex);
        return child ? child.get(vector.valueOffsets[index]) : null;
      };
      var getSparseUnion = (vector, index) => {
        const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
        const child = vector.getChildAt(childIndex);
        return child ? child.get(index) : null;
      };
      var getDictionary = (vector, index) => {
        return vector.getValue(vector.getKey(index));
      };
      var getInterval = (vector, index) => vector.type.unit === enum_1.IntervalUnit.DAY_TIME ? getIntervalDayTime(vector, index) : getIntervalYearMonth(vector, index);
      var getIntervalDayTime = ({ values }, index) => values.subarray(2 * index, 2 * (index + 1));
      var getIntervalYearMonth = ({ values }, index) => {
        const interval = values[index];
        const int32s = new Int32Array(2);
        int32s[0] = interval / 12 | 0;
        int32s[1] = interval % 12 | 0;
        return int32s;
      };
      var getFixedSizeList = (vector, index) => {
        const child = vector.getChildAt(0), { stride } = vector;
        return child.slice(index * stride, (index + 1) * stride);
      };
      GetVisitor.prototype.visitNull = getNull;
      GetVisitor.prototype.visitBool = getBool;
      GetVisitor.prototype.visitInt = getInt;
      GetVisitor.prototype.visitInt8 = getNumeric;
      GetVisitor.prototype.visitInt16 = getNumeric;
      GetVisitor.prototype.visitInt32 = getNumeric;
      GetVisitor.prototype.visitInt64 = getBigInts;
      GetVisitor.prototype.visitUint8 = getNumeric;
      GetVisitor.prototype.visitUint16 = getNumeric;
      GetVisitor.prototype.visitUint32 = getNumeric;
      GetVisitor.prototype.visitUint64 = getBigInts;
      GetVisitor.prototype.visitFloat = getFloat;
      GetVisitor.prototype.visitFloat16 = getFloat16;
      GetVisitor.prototype.visitFloat32 = getNumeric;
      GetVisitor.prototype.visitFloat64 = getNumeric;
      GetVisitor.prototype.visitUtf8 = getUtf8;
      GetVisitor.prototype.visitBinary = getBinary;
      GetVisitor.prototype.visitFixedSizeBinary = getFixedSizeBinary;
      GetVisitor.prototype.visitDate = getDate;
      GetVisitor.prototype.visitDateDay = getDateDay;
      GetVisitor.prototype.visitDateMillisecond = getDateMillisecond;
      GetVisitor.prototype.visitTimestamp = getTimestamp;
      GetVisitor.prototype.visitTimestampSecond = getTimestampSecond;
      GetVisitor.prototype.visitTimestampMillisecond = getTimestampMillisecond;
      GetVisitor.prototype.visitTimestampMicrosecond = getTimestampMicrosecond;
      GetVisitor.prototype.visitTimestampNanosecond = getTimestampNanosecond;
      GetVisitor.prototype.visitTime = getTime;
      GetVisitor.prototype.visitTimeSecond = getTimeSecond;
      GetVisitor.prototype.visitTimeMillisecond = getTimeMillisecond;
      GetVisitor.prototype.visitTimeMicrosecond = getTimeMicrosecond;
      GetVisitor.prototype.visitTimeNanosecond = getTimeNanosecond;
      GetVisitor.prototype.visitDecimal = getDecimal;
      GetVisitor.prototype.visitList = getList;
      GetVisitor.prototype.visitStruct = getStruct;
      GetVisitor.prototype.visitUnion = getUnion;
      GetVisitor.prototype.visitDenseUnion = getDenseUnion;
      GetVisitor.prototype.visitSparseUnion = getSparseUnion;
      GetVisitor.prototype.visitDictionary = getDictionary;
      GetVisitor.prototype.visitInterval = getInterval;
      GetVisitor.prototype.visitIntervalDayTime = getIntervalDayTime;
      GetVisitor.prototype.visitIntervalYearMonth = getIntervalYearMonth;
      GetVisitor.prototype.visitFixedSizeList = getFixedSizeList;
      GetVisitor.prototype.visitMap = getMap;
      exports.instance = new GetVisitor();
    }
  });

  // node_modules/apache-arrow/visitor/indexof.js
  var require_indexof = __commonJS({
    "node_modules/apache-arrow/visitor/indexof.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.IndexOfVisitor = void 0;
      var visitor_1 = require_visitor();
      var bit_1 = require_bit();
      var vector_1 = require_vector2();
      var IndexOfVisitor = class extends visitor_1.Visitor {
      };
      exports.IndexOfVisitor = IndexOfVisitor;
      function nullIndexOf(vector, searchElement) {
        return searchElement === null && vector.length > 0 ? 0 : -1;
      }
      function indexOfNull(vector, fromIndex) {
        const { nullBitmap } = vector.data;
        if (!nullBitmap || vector.nullCount <= 0) {
          return -1;
        }
        let i = 0;
        for (const isValid of new bit_1.BitIterator(nullBitmap, vector.data.offset + (fromIndex || 0), vector.length, nullBitmap, bit_1.getBool)) {
          if (!isValid) {
            return i;
          }
          ++i;
        }
        return -1;
      }
      function indexOfValue(vector, searchElement, fromIndex) {
        if (searchElement === void 0) {
          return -1;
        }
        if (searchElement === null) {
          return indexOfNull(vector, fromIndex);
        }
        const compare = vector_1.createElementComparator(searchElement);
        for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
          if (compare(vector.get(i))) {
            return i;
          }
        }
        return -1;
      }
      function indexOfUnion(vector, searchElement, fromIndex) {
        const compare = vector_1.createElementComparator(searchElement);
        for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
          if (compare(vector.get(i))) {
            return i;
          }
        }
        return -1;
      }
      IndexOfVisitor.prototype.visitNull = nullIndexOf;
      IndexOfVisitor.prototype.visitBool = indexOfValue;
      IndexOfVisitor.prototype.visitInt = indexOfValue;
      IndexOfVisitor.prototype.visitInt8 = indexOfValue;
      IndexOfVisitor.prototype.visitInt16 = indexOfValue;
      IndexOfVisitor.prototype.visitInt32 = indexOfValue;
      IndexOfVisitor.prototype.visitInt64 = indexOfValue;
      IndexOfVisitor.prototype.visitUint8 = indexOfValue;
      IndexOfVisitor.prototype.visitUint16 = indexOfValue;
      IndexOfVisitor.prototype.visitUint32 = indexOfValue;
      IndexOfVisitor.prototype.visitUint64 = indexOfValue;
      IndexOfVisitor.prototype.visitFloat = indexOfValue;
      IndexOfVisitor.prototype.visitFloat16 = indexOfValue;
      IndexOfVisitor.prototype.visitFloat32 = indexOfValue;
      IndexOfVisitor.prototype.visitFloat64 = indexOfValue;
      IndexOfVisitor.prototype.visitUtf8 = indexOfValue;
      IndexOfVisitor.prototype.visitBinary = indexOfValue;
      IndexOfVisitor.prototype.visitFixedSizeBinary = indexOfValue;
      IndexOfVisitor.prototype.visitDate = indexOfValue;
      IndexOfVisitor.prototype.visitDateDay = indexOfValue;
      IndexOfVisitor.prototype.visitDateMillisecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimestamp = indexOfValue;
      IndexOfVisitor.prototype.visitTimestampSecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimestampMillisecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimestampMicrosecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimestampNanosecond = indexOfValue;
      IndexOfVisitor.prototype.visitTime = indexOfValue;
      IndexOfVisitor.prototype.visitTimeSecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimeMillisecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimeMicrosecond = indexOfValue;
      IndexOfVisitor.prototype.visitTimeNanosecond = indexOfValue;
      IndexOfVisitor.prototype.visitDecimal = indexOfValue;
      IndexOfVisitor.prototype.visitList = indexOfValue;
      IndexOfVisitor.prototype.visitStruct = indexOfValue;
      IndexOfVisitor.prototype.visitUnion = indexOfValue;
      IndexOfVisitor.prototype.visitDenseUnion = indexOfUnion;
      IndexOfVisitor.prototype.visitSparseUnion = indexOfUnion;
      IndexOfVisitor.prototype.visitDictionary = indexOfValue;
      IndexOfVisitor.prototype.visitInterval = indexOfValue;
      IndexOfVisitor.prototype.visitIntervalDayTime = indexOfValue;
      IndexOfVisitor.prototype.visitIntervalYearMonth = indexOfValue;
      IndexOfVisitor.prototype.visitFixedSizeList = indexOfValue;
      IndexOfVisitor.prototype.visitMap = indexOfValue;
      exports.instance = new IndexOfVisitor();
    }
  });

  // node_modules/apache-arrow/visitor/iterator.js
  var require_iterator = __commonJS({
    "node_modules/apache-arrow/visitor/iterator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.IteratorVisitor = void 0;
      var enum_1 = require_enum();
      var visitor_1 = require_visitor();
      var bit_1 = require_bit();
      var get_1 = require_get();
      var IteratorVisitor = class extends visitor_1.Visitor {
      };
      exports.IteratorVisitor = IteratorVisitor;
      function nullableIterator(vector) {
        const getFn = get_1.instance.getVisitFn(vector);
        return new bit_1.BitIterator(vector.data.nullBitmap, vector.data.offset, vector.length, vector, (vec, idx, nullByte, nullBit) => (nullByte & 1 << nullBit) !== 0 ? getFn(vec, idx) : null);
      }
      var VectorIterator = class {
        constructor(vector, getFn) {
          this.vector = vector;
          this.getFn = getFn;
          this.index = 0;
        }
        next() {
          if (this.index < this.vector.length) {
            return {
              value: this.getFn(this.vector, this.index++)
            };
          }
          return { done: true, value: null };
        }
        [Symbol.iterator]() {
          return this;
        }
      };
      function vectorIterator(vector) {
        if (vector.nullCount > 0) {
          return nullableIterator(vector);
        }
        const { type, typeId, length } = vector;
        if (vector.stride === 1 && (typeId === enum_1.Type.Timestamp || typeId === enum_1.Type.Int && type.bitWidth !== 64 || typeId === enum_1.Type.Time && type.bitWidth !== 64 || typeId === enum_1.Type.Float && type.precision > 0)) {
          return vector.data.values.subarray(0, length)[Symbol.iterator]();
        }
        return new VectorIterator(vector, get_1.instance.getVisitFn(vector));
      }
      IteratorVisitor.prototype.visitNull = vectorIterator;
      IteratorVisitor.prototype.visitBool = vectorIterator;
      IteratorVisitor.prototype.visitInt = vectorIterator;
      IteratorVisitor.prototype.visitInt8 = vectorIterator;
      IteratorVisitor.prototype.visitInt16 = vectorIterator;
      IteratorVisitor.prototype.visitInt32 = vectorIterator;
      IteratorVisitor.prototype.visitInt64 = vectorIterator;
      IteratorVisitor.prototype.visitUint8 = vectorIterator;
      IteratorVisitor.prototype.visitUint16 = vectorIterator;
      IteratorVisitor.prototype.visitUint32 = vectorIterator;
      IteratorVisitor.prototype.visitUint64 = vectorIterator;
      IteratorVisitor.prototype.visitFloat = vectorIterator;
      IteratorVisitor.prototype.visitFloat16 = vectorIterator;
      IteratorVisitor.prototype.visitFloat32 = vectorIterator;
      IteratorVisitor.prototype.visitFloat64 = vectorIterator;
      IteratorVisitor.prototype.visitUtf8 = vectorIterator;
      IteratorVisitor.prototype.visitBinary = vectorIterator;
      IteratorVisitor.prototype.visitFixedSizeBinary = vectorIterator;
      IteratorVisitor.prototype.visitDate = vectorIterator;
      IteratorVisitor.prototype.visitDateDay = vectorIterator;
      IteratorVisitor.prototype.visitDateMillisecond = vectorIterator;
      IteratorVisitor.prototype.visitTimestamp = vectorIterator;
      IteratorVisitor.prototype.visitTimestampSecond = vectorIterator;
      IteratorVisitor.prototype.visitTimestampMillisecond = vectorIterator;
      IteratorVisitor.prototype.visitTimestampMicrosecond = vectorIterator;
      IteratorVisitor.prototype.visitTimestampNanosecond = vectorIterator;
      IteratorVisitor.prototype.visitTime = vectorIterator;
      IteratorVisitor.prototype.visitTimeSecond = vectorIterator;
      IteratorVisitor.prototype.visitTimeMillisecond = vectorIterator;
      IteratorVisitor.prototype.visitTimeMicrosecond = vectorIterator;
      IteratorVisitor.prototype.visitTimeNanosecond = vectorIterator;
      IteratorVisitor.prototype.visitDecimal = vectorIterator;
      IteratorVisitor.prototype.visitList = vectorIterator;
      IteratorVisitor.prototype.visitStruct = vectorIterator;
      IteratorVisitor.prototype.visitUnion = vectorIterator;
      IteratorVisitor.prototype.visitDenseUnion = vectorIterator;
      IteratorVisitor.prototype.visitSparseUnion = vectorIterator;
      IteratorVisitor.prototype.visitDictionary = vectorIterator;
      IteratorVisitor.prototype.visitInterval = vectorIterator;
      IteratorVisitor.prototype.visitIntervalDayTime = vectorIterator;
      IteratorVisitor.prototype.visitIntervalYearMonth = vectorIterator;
      IteratorVisitor.prototype.visitFixedSizeList = vectorIterator;
      IteratorVisitor.prototype.visitMap = vectorIterator;
      exports.instance = new IteratorVisitor();
    }
  });

  // node_modules/apache-arrow/visitor/toarray.js
  var require_toarray = __commonJS({
    "node_modules/apache-arrow/visitor/toarray.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.ToArrayVisitor = void 0;
      var enum_1 = require_enum();
      var visitor_1 = require_visitor();
      var iterator_1 = require_iterator();
      var ToArrayVisitor = class extends visitor_1.Visitor {
      };
      exports.ToArrayVisitor = ToArrayVisitor;
      function arrayOfVector(vector) {
        const { type, length, stride } = vector;
        switch (type.typeId) {
          case enum_1.Type.Int:
          case enum_1.Type.Float:
          case enum_1.Type.Decimal:
          case enum_1.Type.Time:
          case enum_1.Type.Timestamp:
            return vector.data.values.subarray(0, length * stride);
        }
        return [...iterator_1.instance.visit(vector)];
      }
      ToArrayVisitor.prototype.visitNull = arrayOfVector;
      ToArrayVisitor.prototype.visitBool = arrayOfVector;
      ToArrayVisitor.prototype.visitInt = arrayOfVector;
      ToArrayVisitor.prototype.visitInt8 = arrayOfVector;
      ToArrayVisitor.prototype.visitInt16 = arrayOfVector;
      ToArrayVisitor.prototype.visitInt32 = arrayOfVector;
      ToArrayVisitor.prototype.visitInt64 = arrayOfVector;
      ToArrayVisitor.prototype.visitUint8 = arrayOfVector;
      ToArrayVisitor.prototype.visitUint16 = arrayOfVector;
      ToArrayVisitor.prototype.visitUint32 = arrayOfVector;
      ToArrayVisitor.prototype.visitUint64 = arrayOfVector;
      ToArrayVisitor.prototype.visitFloat = arrayOfVector;
      ToArrayVisitor.prototype.visitFloat16 = arrayOfVector;
      ToArrayVisitor.prototype.visitFloat32 = arrayOfVector;
      ToArrayVisitor.prototype.visitFloat64 = arrayOfVector;
      ToArrayVisitor.prototype.visitUtf8 = arrayOfVector;
      ToArrayVisitor.prototype.visitBinary = arrayOfVector;
      ToArrayVisitor.prototype.visitFixedSizeBinary = arrayOfVector;
      ToArrayVisitor.prototype.visitDate = arrayOfVector;
      ToArrayVisitor.prototype.visitDateDay = arrayOfVector;
      ToArrayVisitor.prototype.visitDateMillisecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimestamp = arrayOfVector;
      ToArrayVisitor.prototype.visitTimestampSecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimestampMillisecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimestampMicrosecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimestampNanosecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTime = arrayOfVector;
      ToArrayVisitor.prototype.visitTimeSecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimeMillisecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimeMicrosecond = arrayOfVector;
      ToArrayVisitor.prototype.visitTimeNanosecond = arrayOfVector;
      ToArrayVisitor.prototype.visitDecimal = arrayOfVector;
      ToArrayVisitor.prototype.visitList = arrayOfVector;
      ToArrayVisitor.prototype.visitStruct = arrayOfVector;
      ToArrayVisitor.prototype.visitUnion = arrayOfVector;
      ToArrayVisitor.prototype.visitDenseUnion = arrayOfVector;
      ToArrayVisitor.prototype.visitSparseUnion = arrayOfVector;
      ToArrayVisitor.prototype.visitDictionary = arrayOfVector;
      ToArrayVisitor.prototype.visitInterval = arrayOfVector;
      ToArrayVisitor.prototype.visitIntervalDayTime = arrayOfVector;
      ToArrayVisitor.prototype.visitIntervalYearMonth = arrayOfVector;
      ToArrayVisitor.prototype.visitFixedSizeList = arrayOfVector;
      ToArrayVisitor.prototype.visitMap = arrayOfVector;
      exports.instance = new ToArrayVisitor();
    }
  });

  // node_modules/apache-arrow/visitor/bytewidth.js
  var require_bytewidth = __commonJS({
    "node_modules/apache-arrow/visitor/bytewidth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.ByteWidthVisitor = void 0;
      var visitor_1 = require_visitor();
      var enum_1 = require_enum();
      var sum = (x, y2) => x + y2;
      var variableWidthColumnErrorMessage = (type) => `Cannot compute the byte width of variable-width column ${type}`;
      var ByteWidthVisitor = class extends visitor_1.Visitor {
        visitNull(____) {
          return 0;
        }
        visitInt(type) {
          return type.bitWidth / 8;
        }
        visitFloat(type) {
          return type.ArrayType.BYTES_PER_ELEMENT;
        }
        visitBinary(type) {
          throw new Error(variableWidthColumnErrorMessage(type));
        }
        visitUtf8(type) {
          throw new Error(variableWidthColumnErrorMessage(type));
        }
        visitBool(____) {
          return 1 / 8;
        }
        visitDecimal(____) {
          return 16;
        }
        visitDate(type) {
          return (type.unit + 1) * 4;
        }
        visitTime(type) {
          return type.bitWidth / 8;
        }
        visitTimestamp(type) {
          return type.unit === enum_1.TimeUnit.SECOND ? 4 : 8;
        }
        visitInterval(type) {
          return (type.unit + 1) * 4;
        }
        visitList(type) {
          throw new Error(variableWidthColumnErrorMessage(type));
        }
        visitStruct(type) {
          return this.visitFields(type.children).reduce(sum, 0);
        }
        visitUnion(type) {
          return this.visitFields(type.children).reduce(sum, 0);
        }
        visitFixedSizeBinary(type) {
          return type.byteWidth;
        }
        visitFixedSizeList(type) {
          return type.listSize * this.visitFields(type.children).reduce(sum, 0);
        }
        visitMap(type) {
          return this.visitFields(type.children).reduce(sum, 0);
        }
        visitDictionary(type) {
          return this.visit(type.indices);
        }
        visitFields(fields) {
          return (fields || []).map((field) => this.visit(field.type));
        }
        visitSchema(schema) {
          return this.visitFields(schema.fields).reduce(sum, 0);
        }
      };
      exports.ByteWidthVisitor = ByteWidthVisitor;
      exports.instance = new ByteWidthVisitor();
    }
  });

  // node_modules/apache-arrow/visitor/vectorctor.js
  var require_vectorctor = __commonJS({
    "node_modules/apache-arrow/visitor/vectorctor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.instance = exports.GetVectorConstructor = void 0;
      var visitor_1 = require_visitor();
      var binary_1 = require_binary2();
      var bool_1 = require_bool2();
      var date_1 = require_date2();
      var decimal_1 = require_decimal2();
      var dictionary_1 = require_dictionary2();
      var fixedsizebinary_1 = require_fixedsizebinary2();
      var fixedsizelist_1 = require_fixedsizelist2();
      var float_1 = require_float2();
      var interval_1 = require_interval2();
      var int_1 = require_int3();
      var list_1 = require_list2();
      var map_1 = require_map2();
      var null_1 = require_null2();
      var struct_1 = require_struct2();
      var timestamp_1 = require_timestamp2();
      var time_1 = require_time2();
      var union_1 = require_union2();
      var utf8_1 = require_utf83();
      var GetVectorConstructor = class extends visitor_1.Visitor {
        visitNull() {
          return null_1.NullVector;
        }
        visitBool() {
          return bool_1.BoolVector;
        }
        visitInt() {
          return int_1.IntVector;
        }
        visitInt8() {
          return int_1.Int8Vector;
        }
        visitInt16() {
          return int_1.Int16Vector;
        }
        visitInt32() {
          return int_1.Int32Vector;
        }
        visitInt64() {
          return int_1.Int64Vector;
        }
        visitUint8() {
          return int_1.Uint8Vector;
        }
        visitUint16() {
          return int_1.Uint16Vector;
        }
        visitUint32() {
          return int_1.Uint32Vector;
        }
        visitUint64() {
          return int_1.Uint64Vector;
        }
        visitFloat() {
          return float_1.FloatVector;
        }
        visitFloat16() {
          return float_1.Float16Vector;
        }
        visitFloat32() {
          return float_1.Float32Vector;
        }
        visitFloat64() {
          return float_1.Float64Vector;
        }
        visitUtf8() {
          return utf8_1.Utf8Vector;
        }
        visitBinary() {
          return binary_1.BinaryVector;
        }
        visitFixedSizeBinary() {
          return fixedsizebinary_1.FixedSizeBinaryVector;
        }
        visitDate() {
          return date_1.DateVector;
        }
        visitDateDay() {
          return date_1.DateDayVector;
        }
        visitDateMillisecond() {
          return date_1.DateMillisecondVector;
        }
        visitTimestamp() {
          return timestamp_1.TimestampVector;
        }
        visitTimestampSecond() {
          return timestamp_1.TimestampSecondVector;
        }
        visitTimestampMillisecond() {
          return timestamp_1.TimestampMillisecondVector;
        }
        visitTimestampMicrosecond() {
          return timestamp_1.TimestampMicrosecondVector;
        }
        visitTimestampNanosecond() {
          return timestamp_1.TimestampNanosecondVector;
        }
        visitTime() {
          return time_1.TimeVector;
        }
        visitTimeSecond() {
          return time_1.TimeSecondVector;
        }
        visitTimeMillisecond() {
          return time_1.TimeMillisecondVector;
        }
        visitTimeMicrosecond() {
          return time_1.TimeMicrosecondVector;
        }
        visitTimeNanosecond() {
          return time_1.TimeNanosecondVector;
        }
        visitDecimal() {
          return decimal_1.DecimalVector;
        }
        visitList() {
          return list_1.ListVector;
        }
        visitStruct() {
          return struct_1.StructVector;
        }
        visitUnion() {
          return union_1.UnionVector;
        }
        visitDenseUnion() {
          return union_1.DenseUnionVector;
        }
        visitSparseUnion() {
          return union_1.SparseUnionVector;
        }
        visitDictionary() {
          return dictionary_1.DictionaryVector;
        }
        visitInterval() {
          return interval_1.IntervalVector;
        }
        visitIntervalDayTime() {
          return interval_1.IntervalDayTimeVector;
        }
        visitIntervalYearMonth() {
          return interval_1.IntervalYearMonthVector;
        }
        visitFixedSizeList() {
          return fixedsizelist_1.FixedSizeListVector;
        }
        visitMap() {
          return map_1.MapVector;
        }
      };
      exports.GetVectorConstructor = GetVectorConstructor;
      exports.instance = new GetVectorConstructor();
    }
  });

  // node_modules/apache-arrow/vector/index.js
  var require_vector3 = __commonJS({
    "node_modules/apache-arrow/vector/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.vectorFromValuesWithType = exports.StructRow = exports.MapRow = exports.Utf8Vector = exports.SparseUnionVector = exports.DenseUnionVector = exports.UnionVector = exports.TimeNanosecondVector = exports.TimeMicrosecondVector = exports.TimeMillisecondVector = exports.TimeSecondVector = exports.TimeVector = exports.TimestampNanosecondVector = exports.TimestampMicrosecondVector = exports.TimestampMillisecondVector = exports.TimestampSecondVector = exports.TimestampVector = exports.StructVector = exports.NullVector = exports.MapVector = exports.ListVector = exports.Uint64Vector = exports.Uint32Vector = exports.Uint16Vector = exports.Uint8Vector = exports.Int64Vector = exports.Int32Vector = exports.Int16Vector = exports.Int8Vector = exports.IntVector = exports.IntervalYearMonthVector = exports.IntervalDayTimeVector = exports.IntervalVector = exports.Float64Vector = exports.Float32Vector = exports.Float16Vector = exports.FloatVector = exports.FixedSizeListVector = exports.FixedSizeBinaryVector = exports.DictionaryVector = exports.DecimalVector = exports.DateMillisecondVector = exports.DateDayVector = exports.DateVector = exports.Chunked = exports.BoolVector = exports.BinaryVector = exports.BaseVector = exports.Vector = void 0;
      var tslib_1 = require_tslib();
      var vector_1 = require_vector();
      Object.defineProperty(exports, "Vector", { enumerable: true, get: function() {
        return vector_1.Vector;
      } });
      var base_1 = require_base();
      Object.defineProperty(exports, "BaseVector", { enumerable: true, get: function() {
        return base_1.BaseVector;
      } });
      var binary_1 = require_binary2();
      Object.defineProperty(exports, "BinaryVector", { enumerable: true, get: function() {
        return binary_1.BinaryVector;
      } });
      var bool_1 = require_bool2();
      Object.defineProperty(exports, "BoolVector", { enumerable: true, get: function() {
        return bool_1.BoolVector;
      } });
      var chunked_1 = require_chunked();
      Object.defineProperty(exports, "Chunked", { enumerable: true, get: function() {
        return chunked_1.Chunked;
      } });
      var date_1 = require_date2();
      Object.defineProperty(exports, "DateVector", { enumerable: true, get: function() {
        return date_1.DateVector;
      } });
      Object.defineProperty(exports, "DateDayVector", { enumerable: true, get: function() {
        return date_1.DateDayVector;
      } });
      Object.defineProperty(exports, "DateMillisecondVector", { enumerable: true, get: function() {
        return date_1.DateMillisecondVector;
      } });
      var decimal_1 = require_decimal2();
      Object.defineProperty(exports, "DecimalVector", { enumerable: true, get: function() {
        return decimal_1.DecimalVector;
      } });
      var dictionary_1 = require_dictionary2();
      Object.defineProperty(exports, "DictionaryVector", { enumerable: true, get: function() {
        return dictionary_1.DictionaryVector;
      } });
      var fixedsizebinary_1 = require_fixedsizebinary2();
      Object.defineProperty(exports, "FixedSizeBinaryVector", { enumerable: true, get: function() {
        return fixedsizebinary_1.FixedSizeBinaryVector;
      } });
      var fixedsizelist_1 = require_fixedsizelist2();
      Object.defineProperty(exports, "FixedSizeListVector", { enumerable: true, get: function() {
        return fixedsizelist_1.FixedSizeListVector;
      } });
      var float_1 = require_float2();
      Object.defineProperty(exports, "FloatVector", { enumerable: true, get: function() {
        return float_1.FloatVector;
      } });
      Object.defineProperty(exports, "Float16Vector", { enumerable: true, get: function() {
        return float_1.Float16Vector;
      } });
      Object.defineProperty(exports, "Float32Vector", { enumerable: true, get: function() {
        return float_1.Float32Vector;
      } });
      Object.defineProperty(exports, "Float64Vector", { enumerable: true, get: function() {
        return float_1.Float64Vector;
      } });
      var interval_1 = require_interval2();
      Object.defineProperty(exports, "IntervalVector", { enumerable: true, get: function() {
        return interval_1.IntervalVector;
      } });
      Object.defineProperty(exports, "IntervalDayTimeVector", { enumerable: true, get: function() {
        return interval_1.IntervalDayTimeVector;
      } });
      Object.defineProperty(exports, "IntervalYearMonthVector", { enumerable: true, get: function() {
        return interval_1.IntervalYearMonthVector;
      } });
      var int_1 = require_int3();
      Object.defineProperty(exports, "IntVector", { enumerable: true, get: function() {
        return int_1.IntVector;
      } });
      Object.defineProperty(exports, "Int8Vector", { enumerable: true, get: function() {
        return int_1.Int8Vector;
      } });
      Object.defineProperty(exports, "Int16Vector", { enumerable: true, get: function() {
        return int_1.Int16Vector;
      } });
      Object.defineProperty(exports, "Int32Vector", { enumerable: true, get: function() {
        return int_1.Int32Vector;
      } });
      Object.defineProperty(exports, "Int64Vector", { enumerable: true, get: function() {
        return int_1.Int64Vector;
      } });
      Object.defineProperty(exports, "Uint8Vector", { enumerable: true, get: function() {
        return int_1.Uint8Vector;
      } });
      Object.defineProperty(exports, "Uint16Vector", { enumerable: true, get: function() {
        return int_1.Uint16Vector;
      } });
      Object.defineProperty(exports, "Uint32Vector", { enumerable: true, get: function() {
        return int_1.Uint32Vector;
      } });
      Object.defineProperty(exports, "Uint64Vector", { enumerable: true, get: function() {
        return int_1.Uint64Vector;
      } });
      var list_1 = require_list2();
      Object.defineProperty(exports, "ListVector", { enumerable: true, get: function() {
        return list_1.ListVector;
      } });
      var map_1 = require_map2();
      Object.defineProperty(exports, "MapVector", { enumerable: true, get: function() {
        return map_1.MapVector;
      } });
      var null_1 = require_null2();
      Object.defineProperty(exports, "NullVector", { enumerable: true, get: function() {
        return null_1.NullVector;
      } });
      var struct_1 = require_struct2();
      Object.defineProperty(exports, "StructVector", { enumerable: true, get: function() {
        return struct_1.StructVector;
      } });
      var timestamp_1 = require_timestamp2();
      Object.defineProperty(exports, "TimestampVector", { enumerable: true, get: function() {
        return timestamp_1.TimestampVector;
      } });
      Object.defineProperty(exports, "TimestampSecondVector", { enumerable: true, get: function() {
        return timestamp_1.TimestampSecondVector;
      } });
      Object.defineProperty(exports, "TimestampMillisecondVector", { enumerable: true, get: function() {
        return timestamp_1.TimestampMillisecondVector;
      } });
      Object.defineProperty(exports, "TimestampMicrosecondVector", { enumerable: true, get: function() {
        return timestamp_1.TimestampMicrosecondVector;
      } });
      Object.defineProperty(exports, "TimestampNanosecondVector", { enumerable: true, get: function() {
        return timestamp_1.TimestampNanosecondVector;
      } });
      var time_1 = require_time2();
      Object.defineProperty(exports, "TimeVector", { enumerable: true, get: function() {
        return time_1.TimeVector;
      } });
      Object.defineProperty(exports, "TimeSecondVector", { enumerable: true, get: function() {
        return time_1.TimeSecondVector;
      } });
      Object.defineProperty(exports, "TimeMillisecondVector", { enumerable: true, get: function() {
        return time_1.TimeMillisecondVector;
      } });
      Object.defineProperty(exports, "TimeMicrosecondVector", { enumerable: true, get: function() {
        return time_1.TimeMicrosecondVector;
      } });
      Object.defineProperty(exports, "TimeNanosecondVector", { enumerable: true, get: function() {
        return time_1.TimeNanosecondVector;
      } });
      var union_1 = require_union2();
      Object.defineProperty(exports, "UnionVector", { enumerable: true, get: function() {
        return union_1.UnionVector;
      } });
      Object.defineProperty(exports, "DenseUnionVector", { enumerable: true, get: function() {
        return union_1.DenseUnionVector;
      } });
      Object.defineProperty(exports, "SparseUnionVector", { enumerable: true, get: function() {
        return union_1.SparseUnionVector;
      } });
      var utf8_1 = require_utf83();
      Object.defineProperty(exports, "Utf8Vector", { enumerable: true, get: function() {
        return utf8_1.Utf8Vector;
      } });
      var row_1 = require_row();
      Object.defineProperty(exports, "MapRow", { enumerable: true, get: function() {
        return row_1.MapRow;
      } });
      Object.defineProperty(exports, "StructRow", { enumerable: true, get: function() {
        return row_1.StructRow;
      } });
      var fn = require_fn();
      var enum_1 = require_enum();
      var vector_2 = require_vector();
      var chunked_2 = require_chunked();
      var base_2 = require_base();
      var bit_1 = require_bit();
      var compat_1 = require_compat();
      var builder_1 = require_builder();
      var get_1 = require_get();
      var set_1 = require_set();
      var indexof_1 = require_indexof();
      var toarray_1 = require_toarray();
      var iterator_1 = require_iterator();
      var bytewidth_1 = require_bytewidth();
      var vectorctor_1 = require_vectorctor();
      vector_2.Vector.new = newVector;
      vector_2.Vector.from = vectorFrom;
      function newVector(data, ...args) {
        return new (vectorctor_1.instance.getVisitFn(data)())(data, ...args);
      }
      function vectorFromValuesWithType(newDataType, input) {
        if (compat_1.isIterable(input)) {
          return vector_2.Vector.from({ "nullValues": [null, void 0], type: newDataType(), "values": input });
        } else if (compat_1.isAsyncIterable(input)) {
          return vector_2.Vector.from({ "nullValues": [null, void 0], type: newDataType(), "values": input });
        }
        const { "values": values = [], "type": type = newDataType(), "nullValues": nullValues = [null, void 0] } = Object.assign({}, input);
        return compat_1.isIterable(values) ? vector_2.Vector.from(Object.assign(Object.assign({ nullValues }, input), { type })) : vector_2.Vector.from(Object.assign(Object.assign({ nullValues }, input), { type }));
      }
      exports.vectorFromValuesWithType = vectorFromValuesWithType;
      function vectorFrom(input) {
        const _a = Object.assign({ "nullValues": [null, void 0] }, input), { "values": values = [] } = _a, options = tslib_1.__rest(_a, ["values"]);
        if (compat_1.isIterable(values)) {
          const chunks = [...builder_1.Builder.throughIterable(options)(values)];
          return chunks.length === 1 ? chunks[0] : chunked_2.Chunked.concat(chunks);
        }
        return ((chunks) => tslib_1.__awaiter(this, void 0, void 0, function* () {
          var e_1, _b;
          const transform = builder_1.Builder.throughAsyncIterable(options);
          try {
            for (var _c = tslib_1.__asyncValues(transform(values)), _d; _d = yield _c.next(), !_d.done; ) {
              const chunk = _d.value;
              chunks.push(chunk);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return))
                yield _b.call(_c);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          return chunks.length === 1 ? chunks[0] : chunked_2.Chunked.concat(chunks);
        }))([]);
      }
      base_2.BaseVector.prototype.get = function baseVectorGet(index) {
        return get_1.instance.visit(this, index);
      };
      base_2.BaseVector.prototype.set = function baseVectorSet(index, value) {
        return set_1.instance.visit(this, index, value);
      };
      base_2.BaseVector.prototype.indexOf = function baseVectorIndexOf(value, fromIndex) {
        return indexof_1.instance.visit(this, value, fromIndex);
      };
      base_2.BaseVector.prototype.toArray = function baseVectorToArray() {
        return toarray_1.instance.visit(this);
      };
      base_2.BaseVector.prototype.getByteWidth = function baseVectorGetByteWidth() {
        return bytewidth_1.instance.visit(this.type);
      };
      base_2.BaseVector.prototype[Symbol.iterator] = function baseVectorSymbolIterator() {
        return iterator_1.instance.visit(this);
      };
      base_2.BaseVector.prototype._bindDataAccessors = bindBaseVectorDataAccessors;
      Object.keys(enum_1.Type).map((T2) => enum_1.Type[T2]).filter((T2) => typeof T2 === "number").filter((typeId) => typeId !== enum_1.Type.NONE).forEach((typeId) => {
        const VectorCtor = vectorctor_1.instance.visit(typeId);
        VectorCtor.prototype["get"] = fn.partial1(get_1.instance.getVisitFn(typeId));
        VectorCtor.prototype["set"] = fn.partial2(set_1.instance.getVisitFn(typeId));
        VectorCtor.prototype["indexOf"] = fn.partial2(indexof_1.instance.getVisitFn(typeId));
        VectorCtor.prototype["toArray"] = fn.partial0(toarray_1.instance.getVisitFn(typeId));
        VectorCtor.prototype["getByteWidth"] = partialType0(bytewidth_1.instance.getVisitFn(typeId));
        VectorCtor.prototype[Symbol.iterator] = fn.partial0(iterator_1.instance.getVisitFn(typeId));
      });
      function partialType0(visit) {
        return function() {
          return visit(this.type);
        };
      }
      function wrapNullableGet(fn2) {
        return function(i) {
          return this.isValid(i) ? fn2.call(this, i) : null;
        };
      }
      function wrapNullableSet(fn2) {
        return function(i, a) {
          if (bit_1.setBool(this.nullBitmap, this.offset + i, !(a == null))) {
            fn2.call(this, i, a);
          }
        };
      }
      function bindBaseVectorDataAccessors() {
        const nullBitmap = this.nullBitmap;
        if (nullBitmap && nullBitmap.byteLength > 0) {
          this.get = wrapNullableGet(this.get);
          this.set = wrapNullableSet(this.set);
        }
      }
    }
  });

  // node_modules/apache-arrow/table.js
  var require_table = __commonJS({
    "node_modules/apache-arrow/table.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Table = void 0;
      var tslib_1 = require_tslib();
      var column_1 = require_column();
      var reader_1 = require_reader();
      var writer_1 = require_writer();
      var recordbatch_1 = require_recordbatch2();
      var schema_1 = require_schema();
      var type_1 = require_type();
      var args_1 = require_args();
      var compat_1 = require_compat();
      var recordbatch_2 = require_recordbatch();
      var index_1 = require_vector3();
      var Table = class extends index_1.Chunked {
        constructor(...args) {
          var _a;
          let schema = null;
          if (args[0] instanceof schema_1.Schema) {
            schema = args[0];
          }
          const chunks = args[0] instanceof Table ? args[0].chunks : args_1.selectArgs(recordbatch_1.RecordBatch, args);
          if (!schema && !(schema = (_a = chunks[0]) === null || _a === void 0 ? void 0 : _a.schema)) {
            throw new TypeError("Table must be initialized with a Schema or at least one RecordBatch");
          }
          chunks[0] || (chunks[0] = new recordbatch_1._InternalEmptyPlaceholderRecordBatch(schema));
          super(new type_1.Struct(schema.fields), chunks);
          this._schema = schema;
          this._chunks = chunks;
        }
        static empty(schema = new schema_1.Schema([])) {
          return new Table(schema, []);
        }
        static from(input) {
          if (!input) {
            return Table.empty();
          }
          if (typeof input === "object") {
            const table = compat_1.isIterable(input["values"]) ? tableFromIterable(input) : compat_1.isAsyncIterable(input["values"]) ? tableFromAsyncIterable(input) : null;
            if (table !== null) {
              return table;
            }
          }
          let reader = reader_1.RecordBatchReader.from(input);
          if (compat_1.isPromise(reader)) {
            return (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
              return yield Table.from(yield reader);
            }))();
          }
          if (reader.isSync() && (reader = reader.open())) {
            return !reader.schema ? Table.empty() : new Table(reader.schema, [...reader]);
          }
          return ((opening) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var e_1, _a;
            const reader2 = yield opening;
            const schema = reader2.schema;
            const batches = [];
            if (schema) {
              try {
                for (var reader_2 = tslib_1.__asyncValues(reader2), reader_2_1; reader_2_1 = yield reader_2.next(), !reader_2_1.done; ) {
                  const batch = reader_2_1.value;
                  batches.push(batch);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (reader_2_1 && !reader_2_1.done && (_a = reader_2.return))
                    yield _a.call(reader_2);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
              return new Table(schema, batches);
            }
            return Table.empty();
          }))(reader.open());
        }
        static fromAsync(source) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield Table.from(source);
          });
        }
        static fromStruct(vector) {
          return Table.new(vector.data.childData, vector.type.children);
        }
        static new(...cols) {
          return new Table(...recordbatch_2.distributeColumnsIntoRecordBatches(args_1.selectColumnArgs(cols)));
        }
        get schema() {
          return this._schema;
        }
        get length() {
          return this._length;
        }
        get chunks() {
          return this._chunks;
        }
        get numCols() {
          return this._numChildren;
        }
        clone(chunks = this._chunks) {
          return new Table(this._schema, chunks);
        }
        getColumn(name) {
          return this.getColumnAt(this.getColumnIndex(name));
        }
        getColumnAt(index) {
          return this.getChildAt(index);
        }
        getColumnIndex(name) {
          return this._schema.fields.findIndex((f) => f.name === name);
        }
        getChildAt(index) {
          if (index < 0 || index >= this.numChildren) {
            return null;
          }
          let field, child;
          const fields = this._schema.fields;
          const columns = this._children || (this._children = []);
          if (child = columns[index]) {
            return child;
          }
          if (field = fields[index]) {
            const chunks = this._chunks.map((chunk) => chunk.getChildAt(index)).filter((vec) => vec != null);
            if (chunks.length > 0) {
              return columns[index] = new column_1.Column(field, chunks);
            }
          }
          return null;
        }
        serialize(encoding = "binary", stream = true) {
          const Writer = !stream ? writer_1.RecordBatchFileWriter : writer_1.RecordBatchStreamWriter;
          return Writer.writeAll(this).toUint8Array(true);
        }
        count() {
          return this._length;
        }
        select(...columnNames) {
          const nameToIndex = this._schema.fields.reduce((m, f, i) => m.set(f.name, i), new Map());
          return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
        }
        selectAt(...columnIndices) {
          const schema = this._schema.selectAt(...columnIndices);
          return new Table(schema, this._chunks.map(({ length, data: { childData } }) => {
            return new recordbatch_1.RecordBatch(schema, length, columnIndices.map((i) => childData[i]).filter(Boolean));
          }));
        }
        assign(other) {
          const fields = this._schema.fields;
          const [indices, oldToNew] = other.schema.fields.reduce((memo, f2, newIdx) => {
            const [indices2, oldToNew2] = memo;
            const i = fields.findIndex((f) => f.name === f2.name);
            ~i ? oldToNew2[i] = newIdx : indices2.push(newIdx);
            return memo;
          }, [[], []]);
          const schema = this._schema.assign(other.schema);
          const columns = [
            ...fields.map((_f, i, _fs, j2 = oldToNew[i]) => j2 === void 0 ? this.getColumnAt(i) : other.getColumnAt(j2)),
            ...indices.map((i) => other.getColumnAt(i))
          ].filter(Boolean);
          return new Table(...recordbatch_2.distributeVectorsIntoRecordBatches(schema, columns));
        }
      };
      exports.Table = Table;
      function tableFromIterable(input) {
        const { type } = input;
        if (type instanceof type_1.Struct) {
          return Table.fromStruct(index_1.StructVector.from(input));
        }
        return null;
      }
      function tableFromAsyncIterable(input) {
        const { type } = input;
        if (type instanceof type_1.Struct) {
          return index_1.StructVector.from(input).then((vector) => Table.fromStruct(vector));
        }
        return null;
      }
    }
  });

  // node_modules/apache-arrow/recordbatch.js
  var require_recordbatch2 = __commonJS({
    "node_modules/apache-arrow/recordbatch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports._InternalEmptyPlaceholderRecordBatch = exports.RecordBatch = void 0;
      var data_1 = require_data();
      var table_1 = require_table();
      var vector_1 = require_vector();
      var visitor_1 = require_visitor();
      var schema_1 = require_schema();
      var compat_1 = require_compat();
      var chunked_1 = require_chunked();
      var args_1 = require_args();
      var type_1 = require_type();
      var recordbatch_1 = require_recordbatch();
      var index_1 = require_vector3();
      var RecordBatch = class extends index_1.StructVector {
        constructor(...args) {
          let data;
          const schema = args[0];
          let children;
          if (args[1] instanceof data_1.Data) {
            [, data, children] = args;
          } else {
            const fields = schema.fields;
            const [, length, childData] = args;
            data = data_1.Data.Struct(new type_1.Struct(fields), 0, length, 0, null, childData);
          }
          super(data, children);
          this._schema = schema;
        }
        static from(options) {
          if (compat_1.isIterable(options["values"])) {
            return table_1.Table.from(options);
          }
          return table_1.Table.from(options);
        }
        static new(...args) {
          const [fs, xs] = args_1.selectFieldArgs(args);
          const vs = xs.filter((x) => x instanceof vector_1.Vector);
          return new RecordBatch(...recordbatch_1.ensureSameLengthData(new schema_1.Schema(fs), vs.map((x) => x.data)));
        }
        clone(data, children = this._children) {
          return new RecordBatch(this._schema, data, children);
        }
        concat(...others) {
          const schema = this._schema, chunks = chunked_1.Chunked.flatten(this, ...others);
          return new table_1.Table(schema, chunks.map(({ data }) => new RecordBatch(schema, data)));
        }
        get schema() {
          return this._schema;
        }
        get numCols() {
          return this._schema.fields.length;
        }
        get dictionaries() {
          return this._dictionaries || (this._dictionaries = DictionaryCollector.collect(this));
        }
        select(...columnNames) {
          const nameToIndex = this._schema.fields.reduce((m, f, i) => m.set(f.name, i), new Map());
          return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
        }
        selectAt(...columnIndices) {
          const schema = this._schema.selectAt(...columnIndices);
          const childData = columnIndices.map((i) => this.data.childData[i]).filter(Boolean);
          return new RecordBatch(schema, this.length, childData);
        }
      };
      exports.RecordBatch = RecordBatch;
      var _InternalEmptyPlaceholderRecordBatch = class extends RecordBatch {
        constructor(schema) {
          super(schema, 0, schema.fields.map((f) => data_1.Data.new(f.type, 0, 0, 0)));
        }
      };
      exports._InternalEmptyPlaceholderRecordBatch = _InternalEmptyPlaceholderRecordBatch;
      var DictionaryCollector = class extends visitor_1.Visitor {
        constructor() {
          super(...arguments);
          this.dictionaries = new Map();
        }
        static collect(batch) {
          return new DictionaryCollector().visit(batch.data, new type_1.Struct(batch.schema.fields)).dictionaries;
        }
        visit(data, type) {
          if (type_1.DataType.isDictionary(type)) {
            return this.visitDictionary(data, type);
          } else {
            data.childData.forEach((child, i) => this.visit(child, type.children[i].type));
          }
          return this;
        }
        visitDictionary(data, type) {
          const dictionary = data.dictionary;
          if (dictionary && dictionary.length > 0) {
            this.dictionaries.set(type.id, dictionary);
          }
          return this;
        }
      };
    }
  });

  // node_modules/apache-arrow/ipc/reader.js
  var require_reader = __commonJS({
    "node_modules/apache-arrow/ipc/reader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AsyncRecordBatchFileReader = exports.RecordBatchFileReader = exports.AsyncRecordBatchStreamReader = exports.RecordBatchStreamReader = exports.RecordBatchReader = void 0;
      var tslib_1 = require_tslib();
      var vector_1 = require_vector();
      var enum_1 = require_enum();
      var file_1 = require_file();
      var adapters_1 = require_adapters();
      var stream_1 = require_stream();
      var file_2 = require_file2();
      var vectorloader_1 = require_vectorloader();
      var recordbatch_1 = require_recordbatch2();
      var interfaces_1 = require_interfaces();
      var message_1 = require_message2();
      var compat_1 = require_compat();
      var RecordBatchReader2 = class extends interfaces_1.ReadableInterop {
        constructor(impl) {
          super();
          this._impl = impl;
        }
        get closed() {
          return this._impl.closed;
        }
        get schema() {
          return this._impl.schema;
        }
        get autoDestroy() {
          return this._impl.autoDestroy;
        }
        get dictionaries() {
          return this._impl.dictionaries;
        }
        get numDictionaries() {
          return this._impl.numDictionaries;
        }
        get numRecordBatches() {
          return this._impl.numRecordBatches;
        }
        get footer() {
          return this._impl.isFile() ? this._impl.footer : null;
        }
        isSync() {
          return this._impl.isSync();
        }
        isAsync() {
          return this._impl.isAsync();
        }
        isFile() {
          return this._impl.isFile();
        }
        isStream() {
          return this._impl.isStream();
        }
        next() {
          return this._impl.next();
        }
        throw(value) {
          return this._impl.throw(value);
        }
        return(value) {
          return this._impl.return(value);
        }
        cancel() {
          return this._impl.cancel();
        }
        reset(schema) {
          this._impl.reset(schema);
          this._DOMStream = void 0;
          this._nodeStream = void 0;
          return this;
        }
        open(options) {
          const opening = this._impl.open(options);
          return compat_1.isPromise(opening) ? opening.then(() => this) : this;
        }
        readRecordBatch(index) {
          return this._impl.isFile() ? this._impl.readRecordBatch(index) : null;
        }
        [Symbol.iterator]() {
          return this._impl[Symbol.iterator]();
        }
        [Symbol.asyncIterator]() {
          return this._impl[Symbol.asyncIterator]();
        }
        toDOMStream() {
          return adapters_1.default.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
        }
        toNodeStream() {
          return adapters_1.default.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
        }
        static throughNode(options) {
          throw new Error(`"throughNode" not available in this environment`);
        }
        static throughDOM(writableStrategy, readableStrategy) {
          throw new Error(`"throughDOM" not available in this environment`);
        }
        static from(source) {
          if (source instanceof RecordBatchReader2) {
            return source;
          } else if (compat_1.isArrowJSON(source)) {
            return fromArrowJSON(source);
          } else if (compat_1.isFileHandle(source)) {
            return fromFileHandle(source);
          } else if (compat_1.isPromise(source)) {
            return (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
              return yield RecordBatchReader2.from(yield source);
            }))();
          } else if (compat_1.isFetchResponse(source) || compat_1.isReadableDOMStream(source) || compat_1.isReadableNodeStream(source) || compat_1.isAsyncIterable(source)) {
            return fromAsyncByteStream(new stream_1.AsyncByteStream(source));
          }
          return fromByteStream(new stream_1.ByteStream(source));
        }
        static readAll(source) {
          if (source instanceof RecordBatchReader2) {
            return source.isSync() ? readAllSync(source) : readAllAsync(source);
          } else if (compat_1.isArrowJSON(source) || ArrayBuffer.isView(source) || compat_1.isIterable(source) || compat_1.isIteratorResult(source)) {
            return readAllSync(source);
          }
          return readAllAsync(source);
        }
      };
      exports.RecordBatchReader = RecordBatchReader2;
      var RecordBatchStreamReader = class extends RecordBatchReader2 {
        constructor(_impl) {
          super(_impl);
          this._impl = _impl;
        }
        [Symbol.iterator]() {
          return this._impl[Symbol.iterator]();
        }
        [Symbol.asyncIterator]() {
          return tslib_1.__asyncGenerator(this, arguments, function* _a() {
            yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(this[Symbol.iterator]())));
          });
        }
      };
      exports.RecordBatchStreamReader = RecordBatchStreamReader;
      var AsyncRecordBatchStreamReader = class extends RecordBatchReader2 {
        constructor(_impl) {
          super(_impl);
          this._impl = _impl;
        }
        [Symbol.iterator]() {
          throw new Error(`AsyncRecordBatchStreamReader is not Iterable`);
        }
        [Symbol.asyncIterator]() {
          return this._impl[Symbol.asyncIterator]();
        }
      };
      exports.AsyncRecordBatchStreamReader = AsyncRecordBatchStreamReader;
      var RecordBatchFileReader = class extends RecordBatchStreamReader {
        constructor(_impl) {
          super(_impl);
          this._impl = _impl;
        }
      };
      exports.RecordBatchFileReader = RecordBatchFileReader;
      var AsyncRecordBatchFileReader = class extends AsyncRecordBatchStreamReader {
        constructor(_impl) {
          super(_impl);
          this._impl = _impl;
        }
      };
      exports.AsyncRecordBatchFileReader = AsyncRecordBatchFileReader;
      var RecordBatchReaderImpl = class {
        constructor(dictionaries = new Map()) {
          this.closed = false;
          this.autoDestroy = true;
          this._dictionaryIndex = 0;
          this._recordBatchIndex = 0;
          this.dictionaries = dictionaries;
        }
        get numDictionaries() {
          return this._dictionaryIndex;
        }
        get numRecordBatches() {
          return this._recordBatchIndex;
        }
        isSync() {
          return false;
        }
        isAsync() {
          return false;
        }
        isFile() {
          return false;
        }
        isStream() {
          return false;
        }
        reset(schema) {
          this._dictionaryIndex = 0;
          this._recordBatchIndex = 0;
          this.schema = schema;
          this.dictionaries = new Map();
          return this;
        }
        _loadRecordBatch(header, body) {
          return new recordbatch_1.RecordBatch(this.schema, header.length, this._loadVectors(header, body, this.schema.fields));
        }
        _loadDictionaryBatch(header, body) {
          const { id, isDelta, data } = header;
          const { dictionaries, schema } = this;
          const dictionary = dictionaries.get(id);
          if (isDelta || !dictionary) {
            const type = schema.dictionaries.get(id);
            return dictionary && isDelta ? dictionary.concat(vector_1.Vector.new(this._loadVectors(data, body, [type])[0])) : vector_1.Vector.new(this._loadVectors(data, body, [type])[0]);
          }
          return dictionary;
        }
        _loadVectors(header, body, types) {
          return new vectorloader_1.VectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
        }
      };
      var RecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
        constructor(source, dictionaries) {
          super(dictionaries);
          this._reader = !compat_1.isArrowJSON(source) ? new message_1.MessageReader(this._handle = source) : new message_1.JSONMessageReader(this._handle = source);
        }
        isSync() {
          return true;
        }
        isStream() {
          return true;
        }
        [Symbol.iterator]() {
          return this;
        }
        cancel() {
          if (!this.closed && (this.closed = true)) {
            this.reset()._reader.return();
            this._reader = null;
            this.dictionaries = null;
          }
        }
        open(options) {
          if (!this.closed) {
            this.autoDestroy = shouldAutoDestroy(this, options);
            if (!(this.schema || (this.schema = this._reader.readSchema()))) {
              this.cancel();
            }
          }
          return this;
        }
        throw(value) {
          if (!this.closed && this.autoDestroy && (this.closed = true)) {
            return this.reset()._reader.throw(value);
          }
          return interfaces_1.ITERATOR_DONE;
        }
        return(value) {
          if (!this.closed && this.autoDestroy && (this.closed = true)) {
            return this.reset()._reader.return(value);
          }
          return interfaces_1.ITERATOR_DONE;
        }
        next() {
          if (this.closed) {
            return interfaces_1.ITERATOR_DONE;
          }
          let message;
          const { _reader: reader } = this;
          while (message = this._readNextMessageAndValidate()) {
            if (message.isSchema()) {
              this.reset(message.header());
            } else if (message.isRecordBatch()) {
              this._recordBatchIndex++;
              const header = message.header();
              const buffer = reader.readMessageBody(message.bodyLength);
              const recordBatch = this._loadRecordBatch(header, buffer);
              return { done: false, value: recordBatch };
            } else if (message.isDictionaryBatch()) {
              this._dictionaryIndex++;
              const header = message.header();
              const buffer = reader.readMessageBody(message.bodyLength);
              const vector = this._loadDictionaryBatch(header, buffer);
              this.dictionaries.set(header.id, vector);
            }
          }
          if (this.schema && this._recordBatchIndex === 0) {
            this._recordBatchIndex++;
            return { done: false, value: new recordbatch_1._InternalEmptyPlaceholderRecordBatch(this.schema) };
          }
          return this.return();
        }
        _readNextMessageAndValidate(type) {
          return this._reader.readMessage(type);
        }
      };
      var AsyncRecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
        constructor(source, dictionaries) {
          super(dictionaries);
          this._reader = new message_1.AsyncMessageReader(this._handle = source);
        }
        isAsync() {
          return true;
        }
        isStream() {
          return true;
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        cancel() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.closed && (this.closed = true)) {
              yield this.reset()._reader.return();
              this._reader = null;
              this.dictionaries = null;
            }
          });
        }
        open(options) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.closed) {
              this.autoDestroy = shouldAutoDestroy(this, options);
              if (!(this.schema || (this.schema = yield this._reader.readSchema()))) {
                yield this.cancel();
              }
            }
            return this;
          });
        }
        throw(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.closed && this.autoDestroy && (this.closed = true)) {
              return yield this.reset()._reader.throw(value);
            }
            return interfaces_1.ITERATOR_DONE;
          });
        }
        return(value) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.closed && this.autoDestroy && (this.closed = true)) {
              return yield this.reset()._reader.return(value);
            }
            return interfaces_1.ITERATOR_DONE;
          });
        }
        next() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.closed) {
              return interfaces_1.ITERATOR_DONE;
            }
            let message;
            const { _reader: reader } = this;
            while (message = yield this._readNextMessageAndValidate()) {
              if (message.isSchema()) {
                yield this.reset(message.header());
              } else if (message.isRecordBatch()) {
                this._recordBatchIndex++;
                const header = message.header();
                const buffer = yield reader.readMessageBody(message.bodyLength);
                const recordBatch = this._loadRecordBatch(header, buffer);
                return { done: false, value: recordBatch };
              } else if (message.isDictionaryBatch()) {
                this._dictionaryIndex++;
                const header = message.header();
                const buffer = yield reader.readMessageBody(message.bodyLength);
                const vector = this._loadDictionaryBatch(header, buffer);
                this.dictionaries.set(header.id, vector);
              }
            }
            if (this.schema && this._recordBatchIndex === 0) {
              this._recordBatchIndex++;
              return { done: false, value: new recordbatch_1._InternalEmptyPlaceholderRecordBatch(this.schema) };
            }
            return yield this.return();
          });
        }
        _readNextMessageAndValidate(type) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this._reader.readMessage(type);
          });
        }
      };
      var RecordBatchFileReaderImpl = class extends RecordBatchStreamReaderImpl {
        constructor(source, dictionaries) {
          super(source instanceof file_2.RandomAccessFile ? source : new file_2.RandomAccessFile(source), dictionaries);
        }
        get footer() {
          return this._footer;
        }
        get numDictionaries() {
          return this._footer ? this._footer.numDictionaries : 0;
        }
        get numRecordBatches() {
          return this._footer ? this._footer.numRecordBatches : 0;
        }
        isSync() {
          return true;
        }
        isFile() {
          return true;
        }
        open(options) {
          if (!this.closed && !this._footer) {
            this.schema = (this._footer = this._readFooter()).schema;
            for (const block of this._footer.dictionaryBatches()) {
              block && this._readDictionaryBatch(this._dictionaryIndex++);
            }
          }
          return super.open(options);
        }
        readRecordBatch(index) {
          if (this.closed) {
            return null;
          }
          if (!this._footer) {
            this.open();
          }
          const block = this._footer && this._footer.getRecordBatch(index);
          if (block && this._handle.seek(block.offset)) {
            const message = this._reader.readMessage(enum_1.MessageHeader.RecordBatch);
            if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
              const header = message.header();
              const buffer = this._reader.readMessageBody(message.bodyLength);
              const recordBatch = this._loadRecordBatch(header, buffer);
              return recordBatch;
            }
          }
          return null;
        }
        _readDictionaryBatch(index) {
          const block = this._footer && this._footer.getDictionaryBatch(index);
          if (block && this._handle.seek(block.offset)) {
            const message = this._reader.readMessage(enum_1.MessageHeader.DictionaryBatch);
            if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
              const header = message.header();
              const buffer = this._reader.readMessageBody(message.bodyLength);
              const vector = this._loadDictionaryBatch(header, buffer);
              this.dictionaries.set(header.id, vector);
            }
          }
        }
        _readFooter() {
          const { _handle } = this;
          const offset = _handle.size - message_1.magicAndPadding;
          const length = _handle.readInt32(offset);
          const buffer = _handle.readAt(offset - length, length);
          return file_1.Footer.decode(buffer);
        }
        _readNextMessageAndValidate(type) {
          if (!this._footer) {
            this.open();
          }
          if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
            const block = this._footer && this._footer.getRecordBatch(this._recordBatchIndex);
            if (block && this._handle.seek(block.offset)) {
              return this._reader.readMessage(type);
            }
          }
          return null;
        }
      };
      var AsyncRecordBatchFileReaderImpl = class extends AsyncRecordBatchStreamReaderImpl {
        constructor(source, ...rest) {
          const byteLength = typeof rest[0] !== "number" ? rest.shift() : void 0;
          const dictionaries = rest[0] instanceof Map ? rest.shift() : void 0;
          super(source instanceof file_2.AsyncRandomAccessFile ? source : new file_2.AsyncRandomAccessFile(source, byteLength), dictionaries);
        }
        get footer() {
          return this._footer;
        }
        get numDictionaries() {
          return this._footer ? this._footer.numDictionaries : 0;
        }
        get numRecordBatches() {
          return this._footer ? this._footer.numRecordBatches : 0;
        }
        isFile() {
          return true;
        }
        isAsync() {
          return true;
        }
        open(options) {
          const _super = Object.create(null, {
            open: { get: () => super.open }
          });
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.closed && !this._footer) {
              this.schema = (this._footer = yield this._readFooter()).schema;
              for (const block of this._footer.dictionaryBatches()) {
                block && (yield this._readDictionaryBatch(this._dictionaryIndex++));
              }
            }
            return yield _super.open.call(this, options);
          });
        }
        readRecordBatch(index) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.closed) {
              return null;
            }
            if (!this._footer) {
              yield this.open();
            }
            const block = this._footer && this._footer.getRecordBatch(index);
            if (block && (yield this._handle.seek(block.offset))) {
              const message = yield this._reader.readMessage(enum_1.MessageHeader.RecordBatch);
              if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
                const header = message.header();
                const buffer = yield this._reader.readMessageBody(message.bodyLength);
                const recordBatch = this._loadRecordBatch(header, buffer);
                return recordBatch;
              }
            }
            return null;
          });
        }
        _readDictionaryBatch(index) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const block = this._footer && this._footer.getDictionaryBatch(index);
            if (block && (yield this._handle.seek(block.offset))) {
              const message = yield this._reader.readMessage(enum_1.MessageHeader.DictionaryBatch);
              if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
                const header = message.header();
                const buffer = yield this._reader.readMessageBody(message.bodyLength);
                const vector = this._loadDictionaryBatch(header, buffer);
                this.dictionaries.set(header.id, vector);
              }
            }
          });
        }
        _readFooter() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { _handle } = this;
            _handle._pending && (yield _handle._pending);
            const offset = _handle.size - message_1.magicAndPadding;
            const length = yield _handle.readInt32(offset);
            const buffer = yield _handle.readAt(offset - length, length);
            return file_1.Footer.decode(buffer);
          });
        }
        _readNextMessageAndValidate(type) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._footer) {
              yield this.open();
            }
            if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
              const block = this._footer.getRecordBatch(this._recordBatchIndex);
              if (block && (yield this._handle.seek(block.offset))) {
                return yield this._reader.readMessage(type);
              }
            }
            return null;
          });
        }
      };
      var RecordBatchJSONReaderImpl = class extends RecordBatchStreamReaderImpl {
        constructor(source, dictionaries) {
          super(source, dictionaries);
        }
        _loadVectors(header, body, types) {
          return new vectorloader_1.JSONVectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
        }
      };
      function shouldAutoDestroy(self2, options) {
        return options && typeof options["autoDestroy"] === "boolean" ? options["autoDestroy"] : self2["autoDestroy"];
      }
      function* readAllSync(source) {
        const reader = RecordBatchReader2.from(source);
        try {
          if (!reader.open({ autoDestroy: false }).closed) {
            do {
              yield reader;
            } while (!reader.reset().open().closed);
          }
        } finally {
          reader.cancel();
        }
      }
      function readAllAsync(source) {
        return tslib_1.__asyncGenerator(this, arguments, function* readAllAsync_1() {
          const reader = yield tslib_1.__await(RecordBatchReader2.from(source));
          try {
            if (!(yield tslib_1.__await(reader.open({ autoDestroy: false }))).closed) {
              do {
                yield yield tslib_1.__await(reader);
              } while (!(yield tslib_1.__await(reader.reset().open())).closed);
            }
          } finally {
            yield tslib_1.__await(reader.cancel());
          }
        });
      }
      function fromArrowJSON(source) {
        return new RecordBatchStreamReader(new RecordBatchJSONReaderImpl(source));
      }
      function fromByteStream(source) {
        const bytes = source.peek(message_1.magicLength + 7 & ~7);
        return bytes && bytes.byteLength >= 4 ? !message_1.checkForMagicArrowString(bytes) ? new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(source.read())) : new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(function* () {
        }()));
      }
      function fromAsyncByteStream(source) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const bytes = yield source.peek(message_1.magicLength + 7 & ~7);
          return bytes && bytes.byteLength >= 4 ? !message_1.checkForMagicArrowString(bytes) ? new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(yield source.read())) : new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(function() {
            return tslib_1.__asyncGenerator(this, arguments, function* () {
            });
          }()));
        });
      }
      function fromFileHandle(source) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const { size } = yield source.stat();
          const file = new file_2.AsyncRandomAccessFile(source, size);
          if (size >= message_1.magicX2AndPadding) {
            if (message_1.checkForMagicArrowString(yield file.readAt(0, message_1.magicLength + 7 & ~7))) {
              return new AsyncRecordBatchFileReader(new AsyncRecordBatchFileReaderImpl(file));
            }
          }
          return new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(file));
        });
      }
    }
  });

  // node_modules/emitter-component/index.js
  var require_emitter_component = __commonJS({
    "node_modules/emitter-component/index.js"(exports, module) {
      module.exports = Emitter;
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        var self2 = this;
        this._callbacks = this._callbacks || {};
        function on() {
          self2.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (arguments.length == 0) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks[event];
        if (!callbacks)
          return this;
        if (arguments.length == 1) {
          delete this._callbacks[event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1), callbacks = this._callbacks[event];
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }
  });

  // node_modules/stream/index.js
  var require_stream2 = __commonJS({
    "node_modules/stream/index.js"(exports, module) {
      var Emitter = require_emitter_component();
      function Stream() {
        Emitter.call(this);
      }
      Stream.prototype = new Emitter();
      module.exports = Stream;
      Stream.Stream = Stream;
      Stream.prototype.pipe = function(dest, options) {
        var source = this;
        function ondata(chunk) {
          if (dest.writable) {
            if (dest.write(chunk) === false && source.pause) {
              source.pause();
            }
          }
        }
        source.on("data", ondata);
        function ondrain() {
          if (source.readable && source.resume) {
            source.resume();
          }
        }
        dest.on("drain", ondrain);
        if (!dest._isStdio && (!options || options.end !== false)) {
          source.on("end", onend);
          source.on("close", onclose);
        }
        var didOnEnd = false;
        function onend() {
          if (didOnEnd)
            return;
          didOnEnd = true;
          dest.end();
        }
        function onclose() {
          if (didOnEnd)
            return;
          didOnEnd = true;
          if (typeof dest.destroy === "function")
            dest.destroy();
        }
        function onerror(er) {
          cleanup();
          if (!this.hasListeners("error")) {
            throw er;
          }
        }
        source.on("error", onerror);
        dest.on("error", onerror);
        function cleanup() {
          source.off("data", ondata);
          dest.off("drain", ondrain);
          source.off("end", onend);
          source.off("close", onclose);
          source.off("error", onerror);
          dest.off("error", onerror);
          source.off("end", cleanup);
          source.off("close", cleanup);
          dest.off("end", cleanup);
          dest.off("close", cleanup);
        }
        source.on("end", cleanup);
        source.on("close", cleanup);
        dest.on("end", cleanup);
        dest.on("close", cleanup);
        dest.emit("pipe", source);
        return dest;
      };
    }
  });

  // node_modules/apache-arrow/io/node/iterable.js
  var require_iterable = __commonJS({
    "node_modules/apache-arrow/io/node/iterable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toNodeStream = void 0;
      var tslib_1 = require_tslib();
      var stream_1 = require_stream2();
      var compat_1 = require_compat();
      function toNodeStream2(source, options) {
        if (compat_1.isAsyncIterable(source)) {
          return new AsyncIterableReadable(source[Symbol.asyncIterator](), options);
        }
        if (compat_1.isIterable(source)) {
          return new IterableReadable(source[Symbol.iterator](), options);
        }
        throw new Error(`toNodeStream() must be called with an Iterable or AsyncIterable`);
      }
      exports.toNodeStream = toNodeStream2;
      var IterableReadable = class extends stream_1.Readable {
        constructor(it, options) {
          super(options);
          this._iterator = it;
          this._pulling = false;
          this._bytesMode = !options || !options.objectMode;
        }
        _read(size) {
          const it = this._iterator;
          if (it && !this._pulling && (this._pulling = true)) {
            this._pulling = this._pull(size, it);
          }
        }
        _destroy(e, cb) {
          const it = this._iterator;
          let fn;
          it && (fn = e != null && it.throw || it.return);
          fn === null || fn === void 0 ? void 0 : fn.call(it, e);
          cb && cb(null);
        }
        _pull(size, it) {
          const bm = this._bytesMode;
          let r = null;
          while (this.readable && !(r = it.next(bm ? size : null)).done) {
            if (size != null) {
              size -= bm && ArrayBuffer.isView(r.value) ? r.value.byteLength : 1;
            }
            if (!this.push(r.value) || size <= 0) {
              break;
            }
          }
          if (((r === null || r === void 0 ? void 0 : r.done) || !this.readable) && (this.push(null) || true)) {
            it.return && it.return();
          }
          return !this.readable;
        }
      };
      var AsyncIterableReadable = class extends stream_1.Readable {
        constructor(it, options) {
          super(options);
          this._iterator = it;
          this._pulling = false;
          this._bytesMode = !options || !options.objectMode;
        }
        _read(size) {
          const it = this._iterator;
          if (it && !this._pulling && (this._pulling = true)) {
            (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
              return this._pulling = yield this._pull(size, it);
            }))();
          }
        }
        _destroy(e, cb) {
          const it = this._iterator;
          let fn;
          it && (fn = e != null && it.throw || it.return);
          (fn === null || fn === void 0 ? void 0 : fn.call(it, e).then(() => cb && cb(null))) || cb && cb(null);
        }
        _pull(size, it) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const bm = this._bytesMode;
            let r = null;
            while (this.readable && !(r = yield it.next(bm ? size : null)).done) {
              if (size != null) {
                size -= bm && ArrayBuffer.isView(r.value) ? r.value.byteLength : 1;
              }
              if (!this.push(r.value) || size <= 0) {
                break;
              }
            }
            if (((r === null || r === void 0 ? void 0 : r.done) || !this.readable) && (this.push(null) || true)) {
              it.return && it.return();
            }
            return !this.readable;
          });
        }
      };
    }
  });

  // node_modules/apache-arrow/io/node/builder.js
  var require_builder3 = __commonJS({
    "node_modules/apache-arrow/io/node/builder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.builderThroughNodeStream = void 0;
      var stream_1 = require_stream2();
      var index_1 = require_builder2();
      function builderThroughNodeStream2(options) {
        return new BuilderDuplex(index_1.Builder.new(options), options);
      }
      exports.builderThroughNodeStream = builderThroughNodeStream2;
      var BuilderDuplex = class extends stream_1.Duplex {
        constructor(builder, options) {
          const { queueingStrategy = "count", autoDestroy = true } = options;
          const { highWaterMark = queueingStrategy !== "bytes" ? 1e3 : Math.pow(2, 14) } = options;
          super({ autoDestroy, highWaterMark: 1, allowHalfOpen: true, writableObjectMode: true, readableObjectMode: true });
          this._numChunks = 0;
          this._finished = false;
          this._builder = builder;
          this._desiredSize = highWaterMark;
          this._getSize = queueingStrategy !== "bytes" ? builderLength : builderByteLength;
        }
        _read(size) {
          this._maybeFlush(this._builder, this._desiredSize = size);
        }
        _final(cb) {
          this._maybeFlush(this._builder.finish(), this._desiredSize);
          cb && cb();
        }
        _write(value, _, cb) {
          const result = this._maybeFlush(this._builder.append(value), this._desiredSize);
          cb && cb();
          return result;
        }
        _destroy(err, cb) {
          this._builder.clear();
          cb && cb(err);
        }
        _maybeFlush(builder, size) {
          if (this._getSize(builder) >= size) {
            ++this._numChunks && this.push(builder.toVector());
          }
          if (builder.finished) {
            if (builder.length > 0 || this._numChunks === 0) {
              ++this._numChunks && this.push(builder.toVector());
            }
            if (!this._finished && (this._finished = true)) {
              this.push(null);
            }
            return false;
          }
          return this._getSize(builder) < this.writableHighWaterMark;
        }
      };
      var builderLength = (builder) => builder.length;
      var builderByteLength = (builder) => builder.byteLength;
    }
  });

  // node_modules/apache-arrow/io/node/reader.js
  var require_reader2 = __commonJS({
    "node_modules/apache-arrow/io/node/reader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.recordBatchReaderThroughNodeStream = void 0;
      var tslib_1 = require_tslib();
      var stream_1 = require_stream2();
      var stream_2 = require_stream();
      var reader_1 = require_reader();
      function recordBatchReaderThroughNodeStream2(options) {
        return new RecordBatchReaderDuplex(options);
      }
      exports.recordBatchReaderThroughNodeStream = recordBatchReaderThroughNodeStream2;
      var RecordBatchReaderDuplex = class extends stream_1.Duplex {
        constructor(options) {
          super(Object.assign(Object.assign({ allowHalfOpen: false }, options), { readableObjectMode: true, writableObjectMode: false }));
          this._pulling = false;
          this._autoDestroy = true;
          this._reader = null;
          this._pulling = false;
          this._asyncQueue = new stream_2.AsyncByteQueue();
          this._autoDestroy = options && typeof options.autoDestroy === "boolean" ? options.autoDestroy : true;
        }
        _final(cb) {
          const aq = this._asyncQueue;
          aq === null || aq === void 0 ? void 0 : aq.close();
          cb && cb();
        }
        _write(x, _, cb) {
          const aq = this._asyncQueue;
          aq === null || aq === void 0 ? void 0 : aq.write(x);
          cb && cb();
          return true;
        }
        _read(size) {
          const aq = this._asyncQueue;
          if (aq && !this._pulling && (this._pulling = true)) {
            (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
              if (!this._reader) {
                this._reader = yield this._open(aq);
              }
              this._pulling = yield this._pull(size, this._reader);
            }))();
          }
        }
        _destroy(err, cb) {
          const aq = this._asyncQueue;
          if (aq) {
            err ? aq.abort(err) : aq.close();
          }
          cb(this._asyncQueue = this._reader = null);
        }
        _open(source) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield (yield reader_1.RecordBatchReader.from(source)).open({ autoDestroy: this._autoDestroy });
          });
        }
        _pull(size, reader) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let r = null;
            while (this.readable && !(r = yield reader.next()).done) {
              if (!this.push(r.value) || size != null && --size <= 0) {
                break;
              }
            }
            if (!this.readable || (r === null || r === void 0 ? void 0 : r.done) && (reader.autoDestroy || (yield reader.reset().open()).closed)) {
              this.push(null);
              yield reader.cancel();
            }
            return !this.readable;
          });
        }
      };
    }
  });

  // node_modules/apache-arrow/io/node/writer.js
  var require_writer2 = __commonJS({
    "node_modules/apache-arrow/io/node/writer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.recordBatchWriterThroughNodeStream = void 0;
      var tslib_1 = require_tslib();
      var stream_1 = require_stream2();
      var stream_2 = require_stream();
      function recordBatchWriterThroughNodeStream2(options) {
        return new RecordBatchWriterDuplex(new this(options));
      }
      exports.recordBatchWriterThroughNodeStream = recordBatchWriterThroughNodeStream2;
      var RecordBatchWriterDuplex = class extends stream_1.Duplex {
        constructor(writer, options) {
          super(Object.assign(Object.assign({ allowHalfOpen: false }, options), { writableObjectMode: true, readableObjectMode: false }));
          this._pulling = false;
          this._writer = writer;
          this._reader = new stream_2.AsyncByteStream(writer);
        }
        _final(cb) {
          const writer = this._writer;
          writer === null || writer === void 0 ? void 0 : writer.close();
          cb && cb();
        }
        _write(x, _, cb) {
          const writer = this._writer;
          writer === null || writer === void 0 ? void 0 : writer.write(x);
          cb && cb();
          return true;
        }
        _read(size) {
          const it = this._reader;
          if (it && !this._pulling && (this._pulling = true)) {
            (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
              return this._pulling = yield this._pull(size, it);
            }))();
          }
        }
        _destroy(err, cb) {
          const writer = this._writer;
          if (writer) {
            err ? writer.abort(err) : writer.close();
          }
          cb(this._reader = this._writer = null);
        }
        _pull(size, reader) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let r = null;
            while (this.readable && !(r = yield reader.next(size || null)).done) {
              if (size != null && r.value) {
                size -= r.value.byteLength;
              }
              if (!this.push(r.value) || size <= 0) {
                break;
              }
            }
            if ((r === null || r === void 0 ? void 0 : r.done) || !this.readable) {
              this.push(null);
              yield reader.cancel();
            }
            return !this.readable;
          });
        }
      };
    }
  });

  // node_modules/apache-arrow/io/whatwg/iterable.js
  var require_iterable2 = __commonJS({
    "node_modules/apache-arrow/io/whatwg/iterable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toDOMStream = void 0;
      var tslib_1 = require_tslib();
      var buffer_1 = require_buffer();
      var compat_1 = require_compat();
      function toDOMStream(source, options) {
        if (compat_1.isAsyncIterable(source)) {
          return asyncIterableAsReadableDOMStream(source, options);
        }
        if (compat_1.isIterable(source)) {
          return iterableAsReadableDOMStream(source, options);
        }
        throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
      }
      exports.toDOMStream = toDOMStream;
      function iterableAsReadableDOMStream(source, options) {
        let it = null;
        const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
        const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
        return new ReadableStream(Object.assign(Object.assign({}, options), { start(controller) {
          next(controller, it || (it = source[Symbol.iterator]()));
        }, pull(controller) {
          it ? next(controller, it) : controller.close();
        }, cancel() {
          ((it === null || it === void 0 ? void 0 : it.return) && it.return() || true) && (it = null);
        } }), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
        function next(controller, it2) {
          let buf;
          let r = null;
          let size = controller.desiredSize || null;
          while (!(r = it2.next(bm ? size : null)).done) {
            if (ArrayBuffer.isView(r.value) && (buf = buffer_1.toUint8Array(r.value))) {
              size != null && bm && (size = size - buf.byteLength + 1);
              r.value = buf;
            }
            controller.enqueue(r.value);
            if (size != null && --size <= 0) {
              return;
            }
          }
          controller.close();
        }
      }
      function asyncIterableAsReadableDOMStream(source, options) {
        let it = null;
        const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
        const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
        return new ReadableStream(Object.assign(Object.assign({}, options), {
          start(controller) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              yield next(controller, it || (it = source[Symbol.asyncIterator]()));
            });
          },
          pull(controller) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              it ? yield next(controller, it) : controller.close();
            });
          },
          cancel() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              ((it === null || it === void 0 ? void 0 : it.return) && (yield it.return()) || true) && (it = null);
            });
          }
        }), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
        function next(controller, it2) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let buf;
            let r = null;
            let size = controller.desiredSize || null;
            while (!(r = yield it2.next(bm ? size : null)).done) {
              if (ArrayBuffer.isView(r.value) && (buf = buffer_1.toUint8Array(r.value))) {
                size != null && bm && (size = size - buf.byteLength + 1);
                r.value = buf;
              }
              controller.enqueue(r.value);
              if (size != null && --size <= 0) {
                return;
              }
            }
            controller.close();
          });
        }
      }
    }
  });

  // node_modules/apache-arrow/io/whatwg/builder.js
  var require_builder4 = __commonJS({
    "node_modules/apache-arrow/io/whatwg/builder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BuilderTransform = exports.builderThroughDOMStream = void 0;
      var tslib_1 = require_tslib();
      var index_1 = require_builder2();
      function builderThroughDOMStream(options) {
        return new BuilderTransform(options);
      }
      exports.builderThroughDOMStream = builderThroughDOMStream;
      var BuilderTransform = class {
        constructor(options) {
          this._numChunks = 0;
          this._finished = false;
          this._bufferedSize = 0;
          const { ["readableStrategy"]: readableStrategy, ["writableStrategy"]: writableStrategy, ["queueingStrategy"]: queueingStrategy = "count" } = options, builderOptions = tslib_1.__rest(options, ["readableStrategy", "writableStrategy", "queueingStrategy"]);
          this._controller = null;
          this._builder = index_1.Builder.new(builderOptions);
          this._getSize = queueingStrategy !== "bytes" ? chunkLength : chunkByteLength;
          const { ["highWaterMark"]: readableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, readableStrategy);
          const { ["highWaterMark"]: writableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, writableStrategy);
          this["readable"] = new ReadableStream({
            ["cancel"]: () => {
              this._builder.clear();
            },
            ["pull"]: (c) => {
              this._maybeFlush(this._builder, this._controller = c);
            },
            ["start"]: (c) => {
              this._maybeFlush(this._builder, this._controller = c);
            }
          }, {
            "highWaterMark": readableHighWaterMark,
            "size": queueingStrategy !== "bytes" ? chunkLength : chunkByteLength
          });
          this["writable"] = new WritableStream({
            ["abort"]: () => {
              this._builder.clear();
            },
            ["write"]: () => {
              this._maybeFlush(this._builder, this._controller);
            },
            ["close"]: () => {
              this._maybeFlush(this._builder.finish(), this._controller);
            }
          }, {
            "highWaterMark": writableHighWaterMark,
            "size": (value) => this._writeValueAndReturnChunkSize(value)
          });
        }
        _writeValueAndReturnChunkSize(value) {
          const bufferedSize = this._bufferedSize;
          this._bufferedSize = this._getSize(this._builder.append(value));
          return this._bufferedSize - bufferedSize;
        }
        _maybeFlush(builder, controller) {
          if (controller === null) {
            return;
          }
          if (this._bufferedSize >= controller.desiredSize) {
            ++this._numChunks && this._enqueue(controller, builder.toVector());
          }
          if (builder.finished) {
            if (builder.length > 0 || this._numChunks === 0) {
              ++this._numChunks && this._enqueue(controller, builder.toVector());
            }
            if (!this._finished && (this._finished = true)) {
              this._enqueue(controller, null);
            }
          }
        }
        _enqueue(controller, chunk) {
          this._bufferedSize = 0;
          this._controller = null;
          chunk === null ? controller.close() : controller.enqueue(chunk);
        }
      };
      exports.BuilderTransform = BuilderTransform;
      var chunkLength = (chunk) => chunk.length;
      var chunkByteLength = (chunk) => chunk.byteLength;
    }
  });

  // node_modules/apache-arrow/io/whatwg/reader.js
  var require_reader3 = __commonJS({
    "node_modules/apache-arrow/io/whatwg/reader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.recordBatchReaderThroughDOMStream = void 0;
      var tslib_1 = require_tslib();
      var stream_1 = require_stream();
      var reader_1 = require_reader();
      function recordBatchReaderThroughDOMStream(writableStrategy, readableStrategy) {
        const queue = new stream_1.AsyncByteQueue();
        let reader = null;
        const readable = new ReadableStream({
          cancel() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              yield queue.close();
            });
          },
          start(controller) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              yield next(controller, reader || (reader = yield open()));
            });
          },
          pull(controller) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              reader ? yield next(controller, reader) : controller.close();
            });
          }
        });
        return { writable: new WritableStream(queue, Object.assign({ "highWaterMark": Math.pow(2, 14) }, writableStrategy)), readable };
        function open() {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield (yield reader_1.RecordBatchReader.from(queue)).open(readableStrategy);
          });
        }
        function next(controller, reader2) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let size = controller.desiredSize;
            let r = null;
            while (!(r = yield reader2.next()).done) {
              controller.enqueue(r.value);
              if (size != null && --size <= 0) {
                return;
              }
            }
            controller.close();
          });
        }
      }
      exports.recordBatchReaderThroughDOMStream = recordBatchReaderThroughDOMStream;
    }
  });

  // node_modules/apache-arrow/io/whatwg/writer.js
  var require_writer3 = __commonJS({
    "node_modules/apache-arrow/io/whatwg/writer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.recordBatchWriterThroughDOMStream = void 0;
      var tslib_1 = require_tslib();
      var stream_1 = require_stream();
      function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
        const writer = new this(writableStrategy);
        const reader = new stream_1.AsyncByteStream(writer);
        const readable = new ReadableStream({
          type: "bytes",
          cancel() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              yield reader.cancel();
            });
          },
          pull(controller) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              yield next(controller);
            });
          },
          start(controller) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
              yield next(controller);
            });
          }
        }, Object.assign({ "highWaterMark": Math.pow(2, 14) }, readableStrategy));
        return { writable: new WritableStream(writer, writableStrategy), readable };
        function next(controller) {
          return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let buf = null;
            let size = controller.desiredSize;
            while (buf = yield reader.read(size || null)) {
              controller.enqueue(buf);
              if (size != null && (size -= buf.byteLength) <= 0) {
                return;
              }
            }
            controller.close();
          });
        }
      }
      exports.recordBatchWriterThroughDOMStream = recordBatchWriterThroughDOMStream;
    }
  });

  // node_modules/apache-arrow/compute/predicate.js
  var require_predicate = __commonJS({
    "node_modules/apache-arrow/compute/predicate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.custom = exports.or = exports.and = exports.col = exports.lit = exports.CustomPredicate = exports.Not = exports.GTeq = exports.LTeq = exports.Equals = exports.Or = exports.And = exports.CombinationPredicate = exports.ComparisonPredicate = exports.Predicate = exports.Col = exports.Literal = exports.Value = void 0;
      var dictionary_1 = require_dictionary2();
      var Value = class {
        eq(other) {
          if (!(other instanceof Value)) {
            other = new Literal(other);
          }
          return new Equals(this, other);
        }
        le(other) {
          if (!(other instanceof Value)) {
            other = new Literal(other);
          }
          return new LTeq(this, other);
        }
        ge(other) {
          if (!(other instanceof Value)) {
            other = new Literal(other);
          }
          return new GTeq(this, other);
        }
        lt(other) {
          return new Not(this.ge(other));
        }
        gt(other) {
          return new Not(this.le(other));
        }
        ne(other) {
          return new Not(this.eq(other));
        }
      };
      exports.Value = Value;
      var Literal = class extends Value {
        constructor(v2) {
          super();
          this.v = v2;
        }
      };
      exports.Literal = Literal;
      var Col = class extends Value {
        constructor(name) {
          super();
          this.name = name;
        }
        bind(batch) {
          if (!this.colidx) {
            this.colidx = -1;
            const fields = batch.schema.fields;
            for (let idx = -1; ++idx < fields.length; ) {
              if (fields[idx].name === this.name) {
                this.colidx = idx;
                break;
              }
            }
            if (this.colidx < 0) {
              throw new Error(`Failed to bind Col "${this.name}"`);
            }
          }
          const vec = this.vector = batch.getChildAt(this.colidx);
          return (idx) => vec.get(idx);
        }
      };
      exports.Col = Col;
      var Predicate = class {
        and(...expr) {
          return new And(this, ...expr);
        }
        or(...expr) {
          return new Or(this, ...expr);
        }
        not() {
          return new Not(this);
        }
      };
      exports.Predicate = Predicate;
      var ComparisonPredicate = class extends Predicate {
        constructor(left, right) {
          super();
          this.left = left;
          this.right = right;
        }
        bind(batch) {
          if (this.left instanceof Literal) {
            if (this.right instanceof Literal) {
              return this._bindLitLit(batch, this.left, this.right);
            } else {
              return this._bindLitCol(batch, this.left, this.right);
            }
          } else {
            if (this.right instanceof Literal) {
              return this._bindColLit(batch, this.left, this.right);
            } else {
              return this._bindColCol(batch, this.left, this.right);
            }
          }
        }
      };
      exports.ComparisonPredicate = ComparisonPredicate;
      var CombinationPredicate = class extends Predicate {
        constructor(...children) {
          super();
          this.children = children;
        }
      };
      exports.CombinationPredicate = CombinationPredicate;
      CombinationPredicate.prototype.children = Object.freeze([]);
      var And = class extends CombinationPredicate {
        constructor(...children) {
          children = children.reduce((accum, p2) => {
            return accum.concat(p2 instanceof And ? p2.children : p2);
          }, []);
          super(...children);
        }
        bind(batch) {
          const bound = this.children.map((p2) => p2.bind(batch));
          return (idx, batch2) => bound.every((p2) => p2(idx, batch2));
        }
      };
      exports.And = And;
      var Or = class extends CombinationPredicate {
        constructor(...children) {
          children = children.reduce((accum, p2) => {
            return accum.concat(p2 instanceof Or ? p2.children : p2);
          }, []);
          super(...children);
        }
        bind(batch) {
          const bound = this.children.map((p2) => p2.bind(batch));
          return (idx, batch2) => bound.some((p2) => p2(idx, batch2));
        }
      };
      exports.Or = Or;
      var Equals = class extends ComparisonPredicate {
        _bindLitLit(_batch, left, right) {
          const rtrn = left.v == right.v;
          return () => rtrn;
        }
        _bindColCol(batch, left, right) {
          const left_func = left.bind(batch);
          const right_func = right.bind(batch);
          return (idx, batch2) => left_func(idx, batch2) == right_func(idx, batch2);
        }
        _bindColLit(batch, col2, lit2) {
          const col_func = col2.bind(batch);
          if (col2.vector instanceof dictionary_1.DictionaryVector) {
            let key;
            const vector = col2.vector;
            if (vector.dictionary !== this.lastDictionary) {
              key = vector.reverseLookup(lit2.v);
              this.lastDictionary = vector.dictionary;
              this.lastKey = key;
            } else {
              key = this.lastKey;
            }
            if (key === -1) {
              return () => false;
            } else {
              return (idx) => {
                return vector.getKey(idx) === key;
              };
            }
          } else {
            return (idx, cols) => col_func(idx, cols) == lit2.v;
          }
        }
        _bindLitCol(batch, lit2, col2) {
          return this._bindColLit(batch, col2, lit2);
        }
      };
      exports.Equals = Equals;
      var LTeq = class extends ComparisonPredicate {
        _bindLitLit(_batch, left, right) {
          const rtrn = left.v <= right.v;
          return () => rtrn;
        }
        _bindColCol(batch, left, right) {
          const left_func = left.bind(batch);
          const right_func = right.bind(batch);
          return (idx, cols) => left_func(idx, cols) <= right_func(idx, cols);
        }
        _bindColLit(batch, col2, lit2) {
          const col_func = col2.bind(batch);
          return (idx, cols) => col_func(idx, cols) <= lit2.v;
        }
        _bindLitCol(batch, lit2, col2) {
          const col_func = col2.bind(batch);
          return (idx, cols) => lit2.v <= col_func(idx, cols);
        }
      };
      exports.LTeq = LTeq;
      var GTeq = class extends ComparisonPredicate {
        _bindLitLit(_batch, left, right) {
          const rtrn = left.v >= right.v;
          return () => rtrn;
        }
        _bindColCol(batch, left, right) {
          const left_func = left.bind(batch);
          const right_func = right.bind(batch);
          return (idx, cols) => left_func(idx, cols) >= right_func(idx, cols);
        }
        _bindColLit(batch, col2, lit2) {
          const col_func = col2.bind(batch);
          return (idx, cols) => col_func(idx, cols) >= lit2.v;
        }
        _bindLitCol(batch, lit2, col2) {
          const col_func = col2.bind(batch);
          return (idx, cols) => lit2.v >= col_func(idx, cols);
        }
      };
      exports.GTeq = GTeq;
      var Not = class extends Predicate {
        constructor(child) {
          super();
          this.child = child;
        }
        bind(batch) {
          const func = this.child.bind(batch);
          return (idx, batch2) => !func(idx, batch2);
        }
      };
      exports.Not = Not;
      var CustomPredicate = class extends Predicate {
        constructor(next, bind_) {
          super();
          this.next = next;
          this.bind_ = bind_;
        }
        bind(batch) {
          this.bind_(batch);
          return this.next;
        }
      };
      exports.CustomPredicate = CustomPredicate;
      function lit(v2) {
        return new Literal(v2);
      }
      exports.lit = lit;
      function col(n) {
        return new Col(n);
      }
      exports.col = col;
      function and(...p2) {
        return new And(...p2);
      }
      exports.and = and;
      function or(...p2) {
        return new Or(...p2);
      }
      exports.or = or;
      function custom(next, bind) {
        return new CustomPredicate(next, bind);
      }
      exports.custom = custom;
    }
  });

  // node_modules/apache-arrow/compute/dataframe.js
  var require_dataframe = __commonJS({
    "node_modules/apache-arrow/compute/dataframe.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FilteredDataFrame = exports.CountByResult = exports.DataFrame = void 0;
      var table_1 = require_table();
      var int_1 = require_int3();
      var schema_1 = require_schema();
      var predicate_1 = require_predicate();
      var recordbatch_1 = require_recordbatch2();
      var type_1 = require_type();
      var DataFrame = class extends table_1.Table {
        filter(predicate) {
          return new FilteredDataFrame(this.chunks, predicate);
        }
        scan(next, bind) {
          const batches = this.chunks, numBatches = batches.length;
          for (let batchIndex = -1; ++batchIndex < numBatches; ) {
            const batch = batches[batchIndex];
            if (bind) {
              bind(batch);
            }
            for (let index = -1, numRows = batch.length; ++index < numRows; ) {
              next(index, batch);
            }
          }
        }
        scanReverse(next, bind) {
          const batches = this.chunks, numBatches = batches.length;
          for (let batchIndex = numBatches; --batchIndex >= 0; ) {
            const batch = batches[batchIndex];
            if (bind) {
              bind(batch);
            }
            for (let index = batch.length; --index >= 0; ) {
              next(index, batch);
            }
          }
        }
        countBy(name) {
          const batches = this.chunks, numBatches = batches.length;
          const count_by = typeof name === "string" ? new predicate_1.Col(name) : name;
          count_by.bind(batches[numBatches - 1]);
          const vector = count_by.vector;
          if (!type_1.DataType.isDictionary(vector.type)) {
            throw new Error("countBy currently only supports dictionary-encoded columns");
          }
          const countByteLength = Math.ceil(Math.log(vector.length) / Math.log(256));
          const CountsArrayType = countByteLength == 4 ? Uint32Array : countByteLength >= 2 ? Uint16Array : Uint8Array;
          const counts = new CountsArrayType(vector.dictionary.length);
          for (let batchIndex = -1; ++batchIndex < numBatches; ) {
            const batch = batches[batchIndex];
            count_by.bind(batch);
            const keys = count_by.vector.indices;
            for (let index = -1, numRows = batch.length; ++index < numRows; ) {
              const key = keys.get(index);
              if (key !== null) {
                counts[key]++;
              }
            }
          }
          return new CountByResult(vector.dictionary, int_1.IntVector.from(counts));
        }
      };
      exports.DataFrame = DataFrame;
      var CountByResult = class extends table_1.Table {
        constructor(values, counts) {
          const schema = new schema_1.Schema([
            new schema_1.Field("values", values.type),
            new schema_1.Field("counts", counts.type)
          ]);
          super(new recordbatch_1.RecordBatch(schema, counts.length, [values, counts]));
        }
        toJSON() {
          const values = this.getColumnAt(0);
          const counts = this.getColumnAt(1);
          const result = {};
          for (let i = -1; ++i < this.length; ) {
            result[values.get(i)] = counts.get(i);
          }
          return result;
        }
      };
      exports.CountByResult = CountByResult;
      var FilteredBatchIterator = class {
        constructor(batches, predicate) {
          this.batches = batches;
          this.predicate = predicate;
          this.batchIndex = 0;
          this.index = 0;
          this.batch = this.batches[this.batchIndex];
          this.predicateFunc = this.predicate.bind(this.batch);
        }
        next() {
          while (this.batchIndex < this.batches.length) {
            while (this.index < this.batch.length) {
              if (this.predicateFunc(this.index, this.batch)) {
                return {
                  value: this.batch.get(this.index++)
                };
              }
              this.index++;
            }
            if (++this.batchIndex < this.batches.length) {
              this.index = 0;
              this.batch = this.batches[this.batchIndex];
              this.predicateFunc = this.predicate.bind(this.batch);
            }
          }
          return { done: true, value: null };
        }
        [Symbol.iterator]() {
          return this;
        }
      };
      var FilteredDataFrame = class extends DataFrame {
        constructor(batches, predicate) {
          super(batches);
          this._predicate = predicate;
        }
        scan(next, bind) {
          const batches = this._chunks;
          const numBatches = batches.length;
          for (let batchIndex = -1; ++batchIndex < numBatches; ) {
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            let isBound = false;
            for (let index = -1, numRows = batch.length; ++index < numRows; ) {
              if (predicate(index, batch)) {
                if (bind && !isBound) {
                  bind(batch);
                  isBound = true;
                }
                next(index, batch);
              }
            }
          }
        }
        scanReverse(next, bind) {
          const batches = this._chunks;
          const numBatches = batches.length;
          for (let batchIndex = numBatches; --batchIndex >= 0; ) {
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            let isBound = false;
            for (let index = batch.length; --index >= 0; ) {
              if (predicate(index, batch)) {
                if (bind && !isBound) {
                  bind(batch);
                  isBound = true;
                }
                next(index, batch);
              }
            }
          }
        }
        count() {
          let sum = 0;
          const batches = this._chunks;
          const numBatches = batches.length;
          for (let batchIndex = -1; ++batchIndex < numBatches; ) {
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            for (let index = -1, numRows = batch.length; ++index < numRows; ) {
              if (predicate(index, batch)) {
                ++sum;
              }
            }
          }
          return sum;
        }
        [Symbol.iterator]() {
          return new FilteredBatchIterator(this._chunks, this._predicate);
        }
        filter(predicate) {
          return new FilteredDataFrame(this._chunks, this._predicate.and(predicate));
        }
        countBy(name) {
          const batches = this._chunks, numBatches = batches.length;
          const count_by = typeof name === "string" ? new predicate_1.Col(name) : name;
          count_by.bind(batches[numBatches - 1]);
          const vector = count_by.vector;
          if (!type_1.DataType.isDictionary(vector.type)) {
            throw new Error("countBy currently only supports dictionary-encoded columns");
          }
          const countByteLength = Math.ceil(Math.log(vector.length) / Math.log(256));
          const CountsArrayType = countByteLength == 4 ? Uint32Array : countByteLength >= 2 ? Uint16Array : Uint8Array;
          const counts = new CountsArrayType(vector.dictionary.length);
          for (let batchIndex = -1; ++batchIndex < numBatches; ) {
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            count_by.bind(batch);
            const keys = count_by.vector.indices;
            for (let index = -1, numRows = batch.length; ++index < numRows; ) {
              const key = keys.get(index);
              if (key !== null && predicate(index, batch)) {
                counts[key]++;
              }
            }
          }
          return new CountByResult(vector.dictionary, int_1.IntVector.from(counts));
        }
      };
      exports.FilteredDataFrame = FilteredDataFrame;
    }
  });

  // node_modules/apache-arrow/Arrow.js
  var require_Arrow = __commonJS({
    "node_modules/apache-arrow/Arrow.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isTypedArray = exports.util = exports.predicate = exports.CountByResult = exports.FilteredDataFrame = exports.DataFrame = exports.RecordBatch = exports.Message = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = exports.RecordBatchJSONWriter = exports.RecordBatchStreamWriter = exports.RecordBatchFileWriter = exports.RecordBatchWriter = exports.AsyncRecordBatchStreamReader = exports.AsyncRecordBatchFileReader = exports.RecordBatchStreamReader = exports.RecordBatchFileReader = exports.RecordBatchReader = exports.AsyncByteQueue = exports.AsyncByteStream = exports.ByteStream = exports.Utf8Builder = exports.SparseUnionBuilder = exports.DenseUnionBuilder = exports.UnionBuilder = exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = exports.StructBuilder = exports.NullBuilder = exports.MapBuilder = exports.ListBuilder = exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = exports.FixedSizeListBuilder = exports.FixedSizeBinaryBuilder = exports.DictionaryBuilder = exports.DecimalBuilder = exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = exports.BoolBuilder = exports.BinaryBuilder = exports.Builder = exports.Utf8Vector = exports.SparseUnionVector = exports.DenseUnionVector = exports.UnionVector = exports.TimeNanosecondVector = exports.TimeMicrosecondVector = exports.TimeMillisecondVector = exports.TimeSecondVector = exports.TimeVector = exports.TimestampNanosecondVector = exports.TimestampMicrosecondVector = exports.TimestampMillisecondVector = exports.TimestampSecondVector = exports.TimestampVector = exports.StructVector = exports.NullVector = exports.MapVector = exports.ListVector = exports.Uint64Vector = exports.Uint32Vector = exports.Uint16Vector = exports.Uint8Vector = exports.Int64Vector = exports.Int32Vector = exports.Int16Vector = exports.Int8Vector = exports.IntVector = exports.IntervalYearMonthVector = exports.IntervalDayTimeVector = exports.IntervalVector = exports.Float64Vector = exports.Float32Vector = exports.Float16Vector = exports.FloatVector = exports.FixedSizeListVector = exports.FixedSizeBinaryVector = exports.DictionaryVector = exports.DecimalVector = exports.DateMillisecondVector = exports.DateDayVector = exports.DateVector = exports.Chunked = exports.BoolVector = exports.BinaryVector = exports.BaseVector = exports.Vector = exports.Field = exports.Schema = exports.Visitor = exports.Column = exports.Table = exports.Map_ = exports.FixedSizeList = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.Dictionary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.Decimal = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.FixedSizeBinary = exports.Binary = exports.Utf8 = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Bool = exports.Null = exports.DataType = exports.Data = exports.BufferType = exports.Type = exports.MessageHeader = exports.MetadataVersion = exports.IntervalUnit = exports.UnionMode = exports.Precision = exports.TimeUnit = exports.DateUnit = void 0;
      var Schema_1 = require_Schema();
      Object.defineProperty(exports, "DateUnit", { enumerable: true, get: function() {
        return Schema_1.DateUnit;
      } });
      Object.defineProperty(exports, "TimeUnit", { enumerable: true, get: function() {
        return Schema_1.TimeUnit;
      } });
      Object.defineProperty(exports, "Precision", { enumerable: true, get: function() {
        return Schema_1.Precision;
      } });
      Object.defineProperty(exports, "UnionMode", { enumerable: true, get: function() {
        return Schema_1.UnionMode;
      } });
      Object.defineProperty(exports, "IntervalUnit", { enumerable: true, get: function() {
        return Schema_1.IntervalUnit;
      } });
      Object.defineProperty(exports, "MetadataVersion", { enumerable: true, get: function() {
        return Schema_1.MetadataVersion;
      } });
      var Message_1 = require_Message();
      Object.defineProperty(exports, "MessageHeader", { enumerable: true, get: function() {
        return Message_1.MessageHeader;
      } });
      var enum_1 = require_enum();
      Object.defineProperty(exports, "Type", { enumerable: true, get: function() {
        return enum_1.Type;
      } });
      Object.defineProperty(exports, "BufferType", { enumerable: true, get: function() {
        return enum_1.BufferType;
      } });
      var data_1 = require_data();
      Object.defineProperty(exports, "Data", { enumerable: true, get: function() {
        return data_1.Data;
      } });
      var type_1 = require_type();
      Object.defineProperty(exports, "DataType", { enumerable: true, get: function() {
        return type_1.DataType;
      } });
      Object.defineProperty(exports, "Null", { enumerable: true, get: function() {
        return type_1.Null;
      } });
      Object.defineProperty(exports, "Bool", { enumerable: true, get: function() {
        return type_1.Bool;
      } });
      Object.defineProperty(exports, "Int", { enumerable: true, get: function() {
        return type_1.Int;
      } });
      Object.defineProperty(exports, "Int8", { enumerable: true, get: function() {
        return type_1.Int8;
      } });
      Object.defineProperty(exports, "Int16", { enumerable: true, get: function() {
        return type_1.Int16;
      } });
      Object.defineProperty(exports, "Int32", { enumerable: true, get: function() {
        return type_1.Int32;
      } });
      Object.defineProperty(exports, "Int64", { enumerable: true, get: function() {
        return type_1.Int64;
      } });
      Object.defineProperty(exports, "Uint8", { enumerable: true, get: function() {
        return type_1.Uint8;
      } });
      Object.defineProperty(exports, "Uint16", { enumerable: true, get: function() {
        return type_1.Uint16;
      } });
      Object.defineProperty(exports, "Uint32", { enumerable: true, get: function() {
        return type_1.Uint32;
      } });
      Object.defineProperty(exports, "Uint64", { enumerable: true, get: function() {
        return type_1.Uint64;
      } });
      Object.defineProperty(exports, "Float", { enumerable: true, get: function() {
        return type_1.Float;
      } });
      Object.defineProperty(exports, "Float16", { enumerable: true, get: function() {
        return type_1.Float16;
      } });
      Object.defineProperty(exports, "Float32", { enumerable: true, get: function() {
        return type_1.Float32;
      } });
      Object.defineProperty(exports, "Float64", { enumerable: true, get: function() {
        return type_1.Float64;
      } });
      Object.defineProperty(exports, "Utf8", { enumerable: true, get: function() {
        return type_1.Utf8;
      } });
      Object.defineProperty(exports, "Binary", { enumerable: true, get: function() {
        return type_1.Binary;
      } });
      Object.defineProperty(exports, "FixedSizeBinary", { enumerable: true, get: function() {
        return type_1.FixedSizeBinary;
      } });
      Object.defineProperty(exports, "Date_", { enumerable: true, get: function() {
        return type_1.Date_;
      } });
      Object.defineProperty(exports, "DateDay", { enumerable: true, get: function() {
        return type_1.DateDay;
      } });
      Object.defineProperty(exports, "DateMillisecond", { enumerable: true, get: function() {
        return type_1.DateMillisecond;
      } });
      Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function() {
        return type_1.Timestamp;
      } });
      Object.defineProperty(exports, "TimestampSecond", { enumerable: true, get: function() {
        return type_1.TimestampSecond;
      } });
      Object.defineProperty(exports, "TimestampMillisecond", { enumerable: true, get: function() {
        return type_1.TimestampMillisecond;
      } });
      Object.defineProperty(exports, "TimestampMicrosecond", { enumerable: true, get: function() {
        return type_1.TimestampMicrosecond;
      } });
      Object.defineProperty(exports, "TimestampNanosecond", { enumerable: true, get: function() {
        return type_1.TimestampNanosecond;
      } });
      Object.defineProperty(exports, "Time", { enumerable: true, get: function() {
        return type_1.Time;
      } });
      Object.defineProperty(exports, "TimeSecond", { enumerable: true, get: function() {
        return type_1.TimeSecond;
      } });
      Object.defineProperty(exports, "TimeMillisecond", { enumerable: true, get: function() {
        return type_1.TimeMillisecond;
      } });
      Object.defineProperty(exports, "TimeMicrosecond", { enumerable: true, get: function() {
        return type_1.TimeMicrosecond;
      } });
      Object.defineProperty(exports, "TimeNanosecond", { enumerable: true, get: function() {
        return type_1.TimeNanosecond;
      } });
      Object.defineProperty(exports, "Decimal", { enumerable: true, get: function() {
        return type_1.Decimal;
      } });
      Object.defineProperty(exports, "List", { enumerable: true, get: function() {
        return type_1.List;
      } });
      Object.defineProperty(exports, "Struct", { enumerable: true, get: function() {
        return type_1.Struct;
      } });
      Object.defineProperty(exports, "Union", { enumerable: true, get: function() {
        return type_1.Union;
      } });
      Object.defineProperty(exports, "DenseUnion", { enumerable: true, get: function() {
        return type_1.DenseUnion;
      } });
      Object.defineProperty(exports, "SparseUnion", { enumerable: true, get: function() {
        return type_1.SparseUnion;
      } });
      Object.defineProperty(exports, "Dictionary", { enumerable: true, get: function() {
        return type_1.Dictionary;
      } });
      Object.defineProperty(exports, "Interval", { enumerable: true, get: function() {
        return type_1.Interval;
      } });
      Object.defineProperty(exports, "IntervalDayTime", { enumerable: true, get: function() {
        return type_1.IntervalDayTime;
      } });
      Object.defineProperty(exports, "IntervalYearMonth", { enumerable: true, get: function() {
        return type_1.IntervalYearMonth;
      } });
      Object.defineProperty(exports, "FixedSizeList", { enumerable: true, get: function() {
        return type_1.FixedSizeList;
      } });
      Object.defineProperty(exports, "Map_", { enumerable: true, get: function() {
        return type_1.Map_;
      } });
      var table_1 = require_table();
      Object.defineProperty(exports, "Table", { enumerable: true, get: function() {
        return table_1.Table;
      } });
      var column_1 = require_column();
      Object.defineProperty(exports, "Column", { enumerable: true, get: function() {
        return column_1.Column;
      } });
      var visitor_1 = require_visitor();
      Object.defineProperty(exports, "Visitor", { enumerable: true, get: function() {
        return visitor_1.Visitor;
      } });
      var schema_1 = require_schema();
      Object.defineProperty(exports, "Schema", { enumerable: true, get: function() {
        return schema_1.Schema;
      } });
      Object.defineProperty(exports, "Field", { enumerable: true, get: function() {
        return schema_1.Field;
      } });
      var index_1 = require_vector3();
      Object.defineProperty(exports, "Vector", { enumerable: true, get: function() {
        return index_1.Vector;
      } });
      Object.defineProperty(exports, "BaseVector", { enumerable: true, get: function() {
        return index_1.BaseVector;
      } });
      Object.defineProperty(exports, "BinaryVector", { enumerable: true, get: function() {
        return index_1.BinaryVector;
      } });
      Object.defineProperty(exports, "BoolVector", { enumerable: true, get: function() {
        return index_1.BoolVector;
      } });
      Object.defineProperty(exports, "Chunked", { enumerable: true, get: function() {
        return index_1.Chunked;
      } });
      Object.defineProperty(exports, "DateVector", { enumerable: true, get: function() {
        return index_1.DateVector;
      } });
      Object.defineProperty(exports, "DateDayVector", { enumerable: true, get: function() {
        return index_1.DateDayVector;
      } });
      Object.defineProperty(exports, "DateMillisecondVector", { enumerable: true, get: function() {
        return index_1.DateMillisecondVector;
      } });
      Object.defineProperty(exports, "DecimalVector", { enumerable: true, get: function() {
        return index_1.DecimalVector;
      } });
      Object.defineProperty(exports, "DictionaryVector", { enumerable: true, get: function() {
        return index_1.DictionaryVector;
      } });
      Object.defineProperty(exports, "FixedSizeBinaryVector", { enumerable: true, get: function() {
        return index_1.FixedSizeBinaryVector;
      } });
      Object.defineProperty(exports, "FixedSizeListVector", { enumerable: true, get: function() {
        return index_1.FixedSizeListVector;
      } });
      Object.defineProperty(exports, "FloatVector", { enumerable: true, get: function() {
        return index_1.FloatVector;
      } });
      Object.defineProperty(exports, "Float16Vector", { enumerable: true, get: function() {
        return index_1.Float16Vector;
      } });
      Object.defineProperty(exports, "Float32Vector", { enumerable: true, get: function() {
        return index_1.Float32Vector;
      } });
      Object.defineProperty(exports, "Float64Vector", { enumerable: true, get: function() {
        return index_1.Float64Vector;
      } });
      Object.defineProperty(exports, "IntervalVector", { enumerable: true, get: function() {
        return index_1.IntervalVector;
      } });
      Object.defineProperty(exports, "IntervalDayTimeVector", { enumerable: true, get: function() {
        return index_1.IntervalDayTimeVector;
      } });
      Object.defineProperty(exports, "IntervalYearMonthVector", { enumerable: true, get: function() {
        return index_1.IntervalYearMonthVector;
      } });
      Object.defineProperty(exports, "IntVector", { enumerable: true, get: function() {
        return index_1.IntVector;
      } });
      Object.defineProperty(exports, "Int8Vector", { enumerable: true, get: function() {
        return index_1.Int8Vector;
      } });
      Object.defineProperty(exports, "Int16Vector", { enumerable: true, get: function() {
        return index_1.Int16Vector;
      } });
      Object.defineProperty(exports, "Int32Vector", { enumerable: true, get: function() {
        return index_1.Int32Vector;
      } });
      Object.defineProperty(exports, "Int64Vector", { enumerable: true, get: function() {
        return index_1.Int64Vector;
      } });
      Object.defineProperty(exports, "Uint8Vector", { enumerable: true, get: function() {
        return index_1.Uint8Vector;
      } });
      Object.defineProperty(exports, "Uint16Vector", { enumerable: true, get: function() {
        return index_1.Uint16Vector;
      } });
      Object.defineProperty(exports, "Uint32Vector", { enumerable: true, get: function() {
        return index_1.Uint32Vector;
      } });
      Object.defineProperty(exports, "Uint64Vector", { enumerable: true, get: function() {
        return index_1.Uint64Vector;
      } });
      Object.defineProperty(exports, "ListVector", { enumerable: true, get: function() {
        return index_1.ListVector;
      } });
      Object.defineProperty(exports, "MapVector", { enumerable: true, get: function() {
        return index_1.MapVector;
      } });
      Object.defineProperty(exports, "NullVector", { enumerable: true, get: function() {
        return index_1.NullVector;
      } });
      Object.defineProperty(exports, "StructVector", { enumerable: true, get: function() {
        return index_1.StructVector;
      } });
      Object.defineProperty(exports, "TimestampVector", { enumerable: true, get: function() {
        return index_1.TimestampVector;
      } });
      Object.defineProperty(exports, "TimestampSecondVector", { enumerable: true, get: function() {
        return index_1.TimestampSecondVector;
      } });
      Object.defineProperty(exports, "TimestampMillisecondVector", { enumerable: true, get: function() {
        return index_1.TimestampMillisecondVector;
      } });
      Object.defineProperty(exports, "TimestampMicrosecondVector", { enumerable: true, get: function() {
        return index_1.TimestampMicrosecondVector;
      } });
      Object.defineProperty(exports, "TimestampNanosecondVector", { enumerable: true, get: function() {
        return index_1.TimestampNanosecondVector;
      } });
      Object.defineProperty(exports, "TimeVector", { enumerable: true, get: function() {
        return index_1.TimeVector;
      } });
      Object.defineProperty(exports, "TimeSecondVector", { enumerable: true, get: function() {
        return index_1.TimeSecondVector;
      } });
      Object.defineProperty(exports, "TimeMillisecondVector", { enumerable: true, get: function() {
        return index_1.TimeMillisecondVector;
      } });
      Object.defineProperty(exports, "TimeMicrosecondVector", { enumerable: true, get: function() {
        return index_1.TimeMicrosecondVector;
      } });
      Object.defineProperty(exports, "TimeNanosecondVector", { enumerable: true, get: function() {
        return index_1.TimeNanosecondVector;
      } });
      Object.defineProperty(exports, "UnionVector", { enumerable: true, get: function() {
        return index_1.UnionVector;
      } });
      Object.defineProperty(exports, "DenseUnionVector", { enumerable: true, get: function() {
        return index_1.DenseUnionVector;
      } });
      Object.defineProperty(exports, "SparseUnionVector", { enumerable: true, get: function() {
        return index_1.SparseUnionVector;
      } });
      Object.defineProperty(exports, "Utf8Vector", { enumerable: true, get: function() {
        return index_1.Utf8Vector;
      } });
      var index_2 = require_builder2();
      Object.defineProperty(exports, "Builder", { enumerable: true, get: function() {
        return index_2.Builder;
      } });
      Object.defineProperty(exports, "BinaryBuilder", { enumerable: true, get: function() {
        return index_2.BinaryBuilder;
      } });
      Object.defineProperty(exports, "BoolBuilder", { enumerable: true, get: function() {
        return index_2.BoolBuilder;
      } });
      Object.defineProperty(exports, "DateBuilder", { enumerable: true, get: function() {
        return index_2.DateBuilder;
      } });
      Object.defineProperty(exports, "DateDayBuilder", { enumerable: true, get: function() {
        return index_2.DateDayBuilder;
      } });
      Object.defineProperty(exports, "DateMillisecondBuilder", { enumerable: true, get: function() {
        return index_2.DateMillisecondBuilder;
      } });
      Object.defineProperty(exports, "DecimalBuilder", { enumerable: true, get: function() {
        return index_2.DecimalBuilder;
      } });
      Object.defineProperty(exports, "DictionaryBuilder", { enumerable: true, get: function() {
        return index_2.DictionaryBuilder;
      } });
      Object.defineProperty(exports, "FixedSizeBinaryBuilder", { enumerable: true, get: function() {
        return index_2.FixedSizeBinaryBuilder;
      } });
      Object.defineProperty(exports, "FixedSizeListBuilder", { enumerable: true, get: function() {
        return index_2.FixedSizeListBuilder;
      } });
      Object.defineProperty(exports, "FloatBuilder", { enumerable: true, get: function() {
        return index_2.FloatBuilder;
      } });
      Object.defineProperty(exports, "Float16Builder", { enumerable: true, get: function() {
        return index_2.Float16Builder;
      } });
      Object.defineProperty(exports, "Float32Builder", { enumerable: true, get: function() {
        return index_2.Float32Builder;
      } });
      Object.defineProperty(exports, "Float64Builder", { enumerable: true, get: function() {
        return index_2.Float64Builder;
      } });
      Object.defineProperty(exports, "IntervalBuilder", { enumerable: true, get: function() {
        return index_2.IntervalBuilder;
      } });
      Object.defineProperty(exports, "IntervalDayTimeBuilder", { enumerable: true, get: function() {
        return index_2.IntervalDayTimeBuilder;
      } });
      Object.defineProperty(exports, "IntervalYearMonthBuilder", { enumerable: true, get: function() {
        return index_2.IntervalYearMonthBuilder;
      } });
      Object.defineProperty(exports, "IntBuilder", { enumerable: true, get: function() {
        return index_2.IntBuilder;
      } });
      Object.defineProperty(exports, "Int8Builder", { enumerable: true, get: function() {
        return index_2.Int8Builder;
      } });
      Object.defineProperty(exports, "Int16Builder", { enumerable: true, get: function() {
        return index_2.Int16Builder;
      } });
      Object.defineProperty(exports, "Int32Builder", { enumerable: true, get: function() {
        return index_2.Int32Builder;
      } });
      Object.defineProperty(exports, "Int64Builder", { enumerable: true, get: function() {
        return index_2.Int64Builder;
      } });
      Object.defineProperty(exports, "Uint8Builder", { enumerable: true, get: function() {
        return index_2.Uint8Builder;
      } });
      Object.defineProperty(exports, "Uint16Builder", { enumerable: true, get: function() {
        return index_2.Uint16Builder;
      } });
      Object.defineProperty(exports, "Uint32Builder", { enumerable: true, get: function() {
        return index_2.Uint32Builder;
      } });
      Object.defineProperty(exports, "Uint64Builder", { enumerable: true, get: function() {
        return index_2.Uint64Builder;
      } });
      Object.defineProperty(exports, "ListBuilder", { enumerable: true, get: function() {
        return index_2.ListBuilder;
      } });
      Object.defineProperty(exports, "MapBuilder", { enumerable: true, get: function() {
        return index_2.MapBuilder;
      } });
      Object.defineProperty(exports, "NullBuilder", { enumerable: true, get: function() {
        return index_2.NullBuilder;
      } });
      Object.defineProperty(exports, "StructBuilder", { enumerable: true, get: function() {
        return index_2.StructBuilder;
      } });
      Object.defineProperty(exports, "TimestampBuilder", { enumerable: true, get: function() {
        return index_2.TimestampBuilder;
      } });
      Object.defineProperty(exports, "TimestampSecondBuilder", { enumerable: true, get: function() {
        return index_2.TimestampSecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampMillisecondBuilder", { enumerable: true, get: function() {
        return index_2.TimestampMillisecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampMicrosecondBuilder", { enumerable: true, get: function() {
        return index_2.TimestampMicrosecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampNanosecondBuilder", { enumerable: true, get: function() {
        return index_2.TimestampNanosecondBuilder;
      } });
      Object.defineProperty(exports, "TimeBuilder", { enumerable: true, get: function() {
        return index_2.TimeBuilder;
      } });
      Object.defineProperty(exports, "TimeSecondBuilder", { enumerable: true, get: function() {
        return index_2.TimeSecondBuilder;
      } });
      Object.defineProperty(exports, "TimeMillisecondBuilder", { enumerable: true, get: function() {
        return index_2.TimeMillisecondBuilder;
      } });
      Object.defineProperty(exports, "TimeMicrosecondBuilder", { enumerable: true, get: function() {
        return index_2.TimeMicrosecondBuilder;
      } });
      Object.defineProperty(exports, "TimeNanosecondBuilder", { enumerable: true, get: function() {
        return index_2.TimeNanosecondBuilder;
      } });
      Object.defineProperty(exports, "UnionBuilder", { enumerable: true, get: function() {
        return index_2.UnionBuilder;
      } });
      Object.defineProperty(exports, "DenseUnionBuilder", { enumerable: true, get: function() {
        return index_2.DenseUnionBuilder;
      } });
      Object.defineProperty(exports, "SparseUnionBuilder", { enumerable: true, get: function() {
        return index_2.SparseUnionBuilder;
      } });
      Object.defineProperty(exports, "Utf8Builder", { enumerable: true, get: function() {
        return index_2.Utf8Builder;
      } });
      var stream_1 = require_stream();
      Object.defineProperty(exports, "ByteStream", { enumerable: true, get: function() {
        return stream_1.ByteStream;
      } });
      Object.defineProperty(exports, "AsyncByteStream", { enumerable: true, get: function() {
        return stream_1.AsyncByteStream;
      } });
      Object.defineProperty(exports, "AsyncByteQueue", { enumerable: true, get: function() {
        return stream_1.AsyncByteQueue;
      } });
      var reader_1 = require_reader();
      Object.defineProperty(exports, "RecordBatchReader", { enumerable: true, get: function() {
        return reader_1.RecordBatchReader;
      } });
      Object.defineProperty(exports, "RecordBatchFileReader", { enumerable: true, get: function() {
        return reader_1.RecordBatchFileReader;
      } });
      Object.defineProperty(exports, "RecordBatchStreamReader", { enumerable: true, get: function() {
        return reader_1.RecordBatchStreamReader;
      } });
      Object.defineProperty(exports, "AsyncRecordBatchFileReader", { enumerable: true, get: function() {
        return reader_1.AsyncRecordBatchFileReader;
      } });
      Object.defineProperty(exports, "AsyncRecordBatchStreamReader", { enumerable: true, get: function() {
        return reader_1.AsyncRecordBatchStreamReader;
      } });
      var writer_1 = require_writer();
      Object.defineProperty(exports, "RecordBatchWriter", { enumerable: true, get: function() {
        return writer_1.RecordBatchWriter;
      } });
      Object.defineProperty(exports, "RecordBatchFileWriter", { enumerable: true, get: function() {
        return writer_1.RecordBatchFileWriter;
      } });
      Object.defineProperty(exports, "RecordBatchStreamWriter", { enumerable: true, get: function() {
        return writer_1.RecordBatchStreamWriter;
      } });
      Object.defineProperty(exports, "RecordBatchJSONWriter", { enumerable: true, get: function() {
        return writer_1.RecordBatchJSONWriter;
      } });
      var message_1 = require_message2();
      Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
        return message_1.MessageReader;
      } });
      Object.defineProperty(exports, "AsyncMessageReader", { enumerable: true, get: function() {
        return message_1.AsyncMessageReader;
      } });
      Object.defineProperty(exports, "JSONMessageReader", { enumerable: true, get: function() {
        return message_1.JSONMessageReader;
      } });
      var message_2 = require_message();
      Object.defineProperty(exports, "Message", { enumerable: true, get: function() {
        return message_2.Message;
      } });
      var recordbatch_1 = require_recordbatch2();
      Object.defineProperty(exports, "RecordBatch", { enumerable: true, get: function() {
        return recordbatch_1.RecordBatch;
      } });
      var dataframe_1 = require_dataframe();
      Object.defineProperty(exports, "DataFrame", { enumerable: true, get: function() {
        return dataframe_1.DataFrame;
      } });
      Object.defineProperty(exports, "FilteredDataFrame", { enumerable: true, get: function() {
        return dataframe_1.FilteredDataFrame;
      } });
      Object.defineProperty(exports, "CountByResult", { enumerable: true, get: function() {
        return dataframe_1.CountByResult;
      } });
      var util_bn_ = require_bn();
      var util_int_ = require_int2();
      var util_bit_ = require_bit();
      var util_math_ = require_math();
      var util_buffer_ = require_buffer();
      var util_vector_ = require_vector2();
      var predicate = require_predicate();
      exports.predicate = predicate;
      var typecomparator_1 = require_typecomparator();
      exports.util = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, util_bn_), util_int_), util_bit_), util_math_), util_buffer_), util_vector_), {
        compareSchemas: typecomparator_1.compareSchemas,
        compareFields: typecomparator_1.compareFields,
        compareTypes: typecomparator_1.compareTypes
      });
      var args_1 = require_args();
      Object.defineProperty(exports, "isTypedArray", { enumerable: true, get: function() {
        return args_1.isTypedArray;
      } });
    }
  });

  // node_modules/apache-arrow/Arrow.dom.js
  var require_Arrow_dom = __commonJS({
    "node_modules/apache-arrow/Arrow.dom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isTypedArray = exports.Utf8Builder = exports.SparseUnionBuilder = exports.DenseUnionBuilder = exports.UnionBuilder = exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = exports.StructBuilder = exports.NullBuilder = exports.MapBuilder = exports.ListBuilder = exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = exports.FixedSizeListBuilder = exports.FixedSizeBinaryBuilder = exports.DictionaryBuilder = exports.DecimalBuilder = exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = exports.BoolBuilder = exports.BinaryBuilder = exports.Builder = exports.util = exports.predicate = exports.CountByResult = exports.FilteredDataFrame = exports.DataFrame = exports.RecordBatch = exports.Message = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = exports.RecordBatchJSONWriter = exports.RecordBatchStreamWriter = exports.RecordBatchFileWriter = exports.RecordBatchWriter = exports.AsyncRecordBatchStreamReader = exports.AsyncRecordBatchFileReader = exports.RecordBatchStreamReader = exports.RecordBatchFileReader = exports.RecordBatchReader = exports.AsyncByteQueue = exports.AsyncByteStream = exports.ByteStream = exports.Utf8Vector = exports.SparseUnionVector = exports.DenseUnionVector = exports.UnionVector = exports.TimeNanosecondVector = exports.TimeMicrosecondVector = exports.TimeMillisecondVector = exports.TimeSecondVector = exports.TimeVector = exports.TimestampNanosecondVector = exports.TimestampMicrosecondVector = exports.TimestampMillisecondVector = exports.TimestampSecondVector = exports.TimestampVector = exports.StructVector = exports.NullVector = exports.MapVector = exports.ListVector = exports.Uint64Vector = exports.Uint32Vector = exports.Uint16Vector = exports.Uint8Vector = exports.Int64Vector = exports.Int32Vector = exports.Int16Vector = exports.Int8Vector = exports.IntVector = exports.IntervalYearMonthVector = exports.IntervalDayTimeVector = exports.IntervalVector = exports.Float64Vector = exports.Float32Vector = exports.Float16Vector = exports.FloatVector = exports.FixedSizeListVector = exports.FixedSizeBinaryVector = exports.DictionaryVector = exports.DecimalVector = exports.DateMillisecondVector = exports.DateDayVector = exports.DateVector = exports.Chunked = exports.BoolVector = exports.BinaryVector = exports.BaseVector = exports.Vector = exports.Visitor = exports.Field = exports.Schema = exports.Column = exports.Table = exports.Map_ = exports.FixedSizeList = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.Dictionary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.Decimal = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.FixedSizeBinary = exports.Binary = exports.Utf8 = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Bool = exports.Null = exports.DataType = exports.Data = exports.BufferType = exports.UnionMode = exports.Type = exports.TimeUnit = exports.Precision = exports.MetadataVersion = exports.MessageHeader = exports.IntervalUnit = exports.DateUnit = void 0;
      var adapters_1 = require_adapters();
      var index_1 = require_builder2();
      var reader_1 = require_reader();
      var writer_1 = require_writer();
      var iterable_1 = require_iterable2();
      var builder_1 = require_builder4();
      var reader_2 = require_reader3();
      var writer_2 = require_writer3();
      adapters_1.default.toDOMStream = iterable_1.toDOMStream;
      index_1.Builder["throughDOM"] = builder_1.builderThroughDOMStream;
      reader_1.RecordBatchReader["throughDOM"] = reader_2.recordBatchReaderThroughDOMStream;
      reader_1.RecordBatchFileReader["throughDOM"] = reader_2.recordBatchReaderThroughDOMStream;
      reader_1.RecordBatchStreamReader["throughDOM"] = reader_2.recordBatchReaderThroughDOMStream;
      writer_1.RecordBatchWriter["throughDOM"] = writer_2.recordBatchWriterThroughDOMStream;
      writer_1.RecordBatchFileWriter["throughDOM"] = writer_2.recordBatchWriterThroughDOMStream;
      writer_1.RecordBatchStreamWriter["throughDOM"] = writer_2.recordBatchWriterThroughDOMStream;
      var Arrow_1 = require_Arrow();
      Object.defineProperty(exports, "DateUnit", { enumerable: true, get: function() {
        return Arrow_1.DateUnit;
      } });
      Object.defineProperty(exports, "IntervalUnit", { enumerable: true, get: function() {
        return Arrow_1.IntervalUnit;
      } });
      Object.defineProperty(exports, "MessageHeader", { enumerable: true, get: function() {
        return Arrow_1.MessageHeader;
      } });
      Object.defineProperty(exports, "MetadataVersion", { enumerable: true, get: function() {
        return Arrow_1.MetadataVersion;
      } });
      Object.defineProperty(exports, "Precision", { enumerable: true, get: function() {
        return Arrow_1.Precision;
      } });
      Object.defineProperty(exports, "TimeUnit", { enumerable: true, get: function() {
        return Arrow_1.TimeUnit;
      } });
      Object.defineProperty(exports, "Type", { enumerable: true, get: function() {
        return Arrow_1.Type;
      } });
      Object.defineProperty(exports, "UnionMode", { enumerable: true, get: function() {
        return Arrow_1.UnionMode;
      } });
      Object.defineProperty(exports, "BufferType", { enumerable: true, get: function() {
        return Arrow_1.BufferType;
      } });
      Object.defineProperty(exports, "Data", { enumerable: true, get: function() {
        return Arrow_1.Data;
      } });
      Object.defineProperty(exports, "DataType", { enumerable: true, get: function() {
        return Arrow_1.DataType;
      } });
      Object.defineProperty(exports, "Null", { enumerable: true, get: function() {
        return Arrow_1.Null;
      } });
      Object.defineProperty(exports, "Bool", { enumerable: true, get: function() {
        return Arrow_1.Bool;
      } });
      Object.defineProperty(exports, "Int", { enumerable: true, get: function() {
        return Arrow_1.Int;
      } });
      Object.defineProperty(exports, "Int8", { enumerable: true, get: function() {
        return Arrow_1.Int8;
      } });
      Object.defineProperty(exports, "Int16", { enumerable: true, get: function() {
        return Arrow_1.Int16;
      } });
      Object.defineProperty(exports, "Int32", { enumerable: true, get: function() {
        return Arrow_1.Int32;
      } });
      Object.defineProperty(exports, "Int64", { enumerable: true, get: function() {
        return Arrow_1.Int64;
      } });
      Object.defineProperty(exports, "Uint8", { enumerable: true, get: function() {
        return Arrow_1.Uint8;
      } });
      Object.defineProperty(exports, "Uint16", { enumerable: true, get: function() {
        return Arrow_1.Uint16;
      } });
      Object.defineProperty(exports, "Uint32", { enumerable: true, get: function() {
        return Arrow_1.Uint32;
      } });
      Object.defineProperty(exports, "Uint64", { enumerable: true, get: function() {
        return Arrow_1.Uint64;
      } });
      Object.defineProperty(exports, "Float", { enumerable: true, get: function() {
        return Arrow_1.Float;
      } });
      Object.defineProperty(exports, "Float16", { enumerable: true, get: function() {
        return Arrow_1.Float16;
      } });
      Object.defineProperty(exports, "Float32", { enumerable: true, get: function() {
        return Arrow_1.Float32;
      } });
      Object.defineProperty(exports, "Float64", { enumerable: true, get: function() {
        return Arrow_1.Float64;
      } });
      Object.defineProperty(exports, "Utf8", { enumerable: true, get: function() {
        return Arrow_1.Utf8;
      } });
      Object.defineProperty(exports, "Binary", { enumerable: true, get: function() {
        return Arrow_1.Binary;
      } });
      Object.defineProperty(exports, "FixedSizeBinary", { enumerable: true, get: function() {
        return Arrow_1.FixedSizeBinary;
      } });
      Object.defineProperty(exports, "Date_", { enumerable: true, get: function() {
        return Arrow_1.Date_;
      } });
      Object.defineProperty(exports, "DateDay", { enumerable: true, get: function() {
        return Arrow_1.DateDay;
      } });
      Object.defineProperty(exports, "DateMillisecond", { enumerable: true, get: function() {
        return Arrow_1.DateMillisecond;
      } });
      Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function() {
        return Arrow_1.Timestamp;
      } });
      Object.defineProperty(exports, "TimestampSecond", { enumerable: true, get: function() {
        return Arrow_1.TimestampSecond;
      } });
      Object.defineProperty(exports, "TimestampMillisecond", { enumerable: true, get: function() {
        return Arrow_1.TimestampMillisecond;
      } });
      Object.defineProperty(exports, "TimestampMicrosecond", { enumerable: true, get: function() {
        return Arrow_1.TimestampMicrosecond;
      } });
      Object.defineProperty(exports, "TimestampNanosecond", { enumerable: true, get: function() {
        return Arrow_1.TimestampNanosecond;
      } });
      Object.defineProperty(exports, "Time", { enumerable: true, get: function() {
        return Arrow_1.Time;
      } });
      Object.defineProperty(exports, "TimeSecond", { enumerable: true, get: function() {
        return Arrow_1.TimeSecond;
      } });
      Object.defineProperty(exports, "TimeMillisecond", { enumerable: true, get: function() {
        return Arrow_1.TimeMillisecond;
      } });
      Object.defineProperty(exports, "TimeMicrosecond", { enumerable: true, get: function() {
        return Arrow_1.TimeMicrosecond;
      } });
      Object.defineProperty(exports, "TimeNanosecond", { enumerable: true, get: function() {
        return Arrow_1.TimeNanosecond;
      } });
      Object.defineProperty(exports, "Decimal", { enumerable: true, get: function() {
        return Arrow_1.Decimal;
      } });
      Object.defineProperty(exports, "List", { enumerable: true, get: function() {
        return Arrow_1.List;
      } });
      Object.defineProperty(exports, "Struct", { enumerable: true, get: function() {
        return Arrow_1.Struct;
      } });
      Object.defineProperty(exports, "Union", { enumerable: true, get: function() {
        return Arrow_1.Union;
      } });
      Object.defineProperty(exports, "DenseUnion", { enumerable: true, get: function() {
        return Arrow_1.DenseUnion;
      } });
      Object.defineProperty(exports, "SparseUnion", { enumerable: true, get: function() {
        return Arrow_1.SparseUnion;
      } });
      Object.defineProperty(exports, "Dictionary", { enumerable: true, get: function() {
        return Arrow_1.Dictionary;
      } });
      Object.defineProperty(exports, "Interval", { enumerable: true, get: function() {
        return Arrow_1.Interval;
      } });
      Object.defineProperty(exports, "IntervalDayTime", { enumerable: true, get: function() {
        return Arrow_1.IntervalDayTime;
      } });
      Object.defineProperty(exports, "IntervalYearMonth", { enumerable: true, get: function() {
        return Arrow_1.IntervalYearMonth;
      } });
      Object.defineProperty(exports, "FixedSizeList", { enumerable: true, get: function() {
        return Arrow_1.FixedSizeList;
      } });
      Object.defineProperty(exports, "Map_", { enumerable: true, get: function() {
        return Arrow_1.Map_;
      } });
      Object.defineProperty(exports, "Table", { enumerable: true, get: function() {
        return Arrow_1.Table;
      } });
      Object.defineProperty(exports, "Column", { enumerable: true, get: function() {
        return Arrow_1.Column;
      } });
      Object.defineProperty(exports, "Schema", { enumerable: true, get: function() {
        return Arrow_1.Schema;
      } });
      Object.defineProperty(exports, "Field", { enumerable: true, get: function() {
        return Arrow_1.Field;
      } });
      Object.defineProperty(exports, "Visitor", { enumerable: true, get: function() {
        return Arrow_1.Visitor;
      } });
      Object.defineProperty(exports, "Vector", { enumerable: true, get: function() {
        return Arrow_1.Vector;
      } });
      Object.defineProperty(exports, "BaseVector", { enumerable: true, get: function() {
        return Arrow_1.BaseVector;
      } });
      Object.defineProperty(exports, "BinaryVector", { enumerable: true, get: function() {
        return Arrow_1.BinaryVector;
      } });
      Object.defineProperty(exports, "BoolVector", { enumerable: true, get: function() {
        return Arrow_1.BoolVector;
      } });
      Object.defineProperty(exports, "Chunked", { enumerable: true, get: function() {
        return Arrow_1.Chunked;
      } });
      Object.defineProperty(exports, "DateVector", { enumerable: true, get: function() {
        return Arrow_1.DateVector;
      } });
      Object.defineProperty(exports, "DateDayVector", { enumerable: true, get: function() {
        return Arrow_1.DateDayVector;
      } });
      Object.defineProperty(exports, "DateMillisecondVector", { enumerable: true, get: function() {
        return Arrow_1.DateMillisecondVector;
      } });
      Object.defineProperty(exports, "DecimalVector", { enumerable: true, get: function() {
        return Arrow_1.DecimalVector;
      } });
      Object.defineProperty(exports, "DictionaryVector", { enumerable: true, get: function() {
        return Arrow_1.DictionaryVector;
      } });
      Object.defineProperty(exports, "FixedSizeBinaryVector", { enumerable: true, get: function() {
        return Arrow_1.FixedSizeBinaryVector;
      } });
      Object.defineProperty(exports, "FixedSizeListVector", { enumerable: true, get: function() {
        return Arrow_1.FixedSizeListVector;
      } });
      Object.defineProperty(exports, "FloatVector", { enumerable: true, get: function() {
        return Arrow_1.FloatVector;
      } });
      Object.defineProperty(exports, "Float16Vector", { enumerable: true, get: function() {
        return Arrow_1.Float16Vector;
      } });
      Object.defineProperty(exports, "Float32Vector", { enumerable: true, get: function() {
        return Arrow_1.Float32Vector;
      } });
      Object.defineProperty(exports, "Float64Vector", { enumerable: true, get: function() {
        return Arrow_1.Float64Vector;
      } });
      Object.defineProperty(exports, "IntervalVector", { enumerable: true, get: function() {
        return Arrow_1.IntervalVector;
      } });
      Object.defineProperty(exports, "IntervalDayTimeVector", { enumerable: true, get: function() {
        return Arrow_1.IntervalDayTimeVector;
      } });
      Object.defineProperty(exports, "IntervalYearMonthVector", { enumerable: true, get: function() {
        return Arrow_1.IntervalYearMonthVector;
      } });
      Object.defineProperty(exports, "IntVector", { enumerable: true, get: function() {
        return Arrow_1.IntVector;
      } });
      Object.defineProperty(exports, "Int8Vector", { enumerable: true, get: function() {
        return Arrow_1.Int8Vector;
      } });
      Object.defineProperty(exports, "Int16Vector", { enumerable: true, get: function() {
        return Arrow_1.Int16Vector;
      } });
      Object.defineProperty(exports, "Int32Vector", { enumerable: true, get: function() {
        return Arrow_1.Int32Vector;
      } });
      Object.defineProperty(exports, "Int64Vector", { enumerable: true, get: function() {
        return Arrow_1.Int64Vector;
      } });
      Object.defineProperty(exports, "Uint8Vector", { enumerable: true, get: function() {
        return Arrow_1.Uint8Vector;
      } });
      Object.defineProperty(exports, "Uint16Vector", { enumerable: true, get: function() {
        return Arrow_1.Uint16Vector;
      } });
      Object.defineProperty(exports, "Uint32Vector", { enumerable: true, get: function() {
        return Arrow_1.Uint32Vector;
      } });
      Object.defineProperty(exports, "Uint64Vector", { enumerable: true, get: function() {
        return Arrow_1.Uint64Vector;
      } });
      Object.defineProperty(exports, "ListVector", { enumerable: true, get: function() {
        return Arrow_1.ListVector;
      } });
      Object.defineProperty(exports, "MapVector", { enumerable: true, get: function() {
        return Arrow_1.MapVector;
      } });
      Object.defineProperty(exports, "NullVector", { enumerable: true, get: function() {
        return Arrow_1.NullVector;
      } });
      Object.defineProperty(exports, "StructVector", { enumerable: true, get: function() {
        return Arrow_1.StructVector;
      } });
      Object.defineProperty(exports, "TimestampVector", { enumerable: true, get: function() {
        return Arrow_1.TimestampVector;
      } });
      Object.defineProperty(exports, "TimestampSecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimestampSecondVector;
      } });
      Object.defineProperty(exports, "TimestampMillisecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimestampMillisecondVector;
      } });
      Object.defineProperty(exports, "TimestampMicrosecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimestampMicrosecondVector;
      } });
      Object.defineProperty(exports, "TimestampNanosecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimestampNanosecondVector;
      } });
      Object.defineProperty(exports, "TimeVector", { enumerable: true, get: function() {
        return Arrow_1.TimeVector;
      } });
      Object.defineProperty(exports, "TimeSecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimeSecondVector;
      } });
      Object.defineProperty(exports, "TimeMillisecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimeMillisecondVector;
      } });
      Object.defineProperty(exports, "TimeMicrosecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimeMicrosecondVector;
      } });
      Object.defineProperty(exports, "TimeNanosecondVector", { enumerable: true, get: function() {
        return Arrow_1.TimeNanosecondVector;
      } });
      Object.defineProperty(exports, "UnionVector", { enumerable: true, get: function() {
        return Arrow_1.UnionVector;
      } });
      Object.defineProperty(exports, "DenseUnionVector", { enumerable: true, get: function() {
        return Arrow_1.DenseUnionVector;
      } });
      Object.defineProperty(exports, "SparseUnionVector", { enumerable: true, get: function() {
        return Arrow_1.SparseUnionVector;
      } });
      Object.defineProperty(exports, "Utf8Vector", { enumerable: true, get: function() {
        return Arrow_1.Utf8Vector;
      } });
      Object.defineProperty(exports, "ByteStream", { enumerable: true, get: function() {
        return Arrow_1.ByteStream;
      } });
      Object.defineProperty(exports, "AsyncByteStream", { enumerable: true, get: function() {
        return Arrow_1.AsyncByteStream;
      } });
      Object.defineProperty(exports, "AsyncByteQueue", { enumerable: true, get: function() {
        return Arrow_1.AsyncByteQueue;
      } });
      Object.defineProperty(exports, "RecordBatchReader", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchReader;
      } });
      Object.defineProperty(exports, "RecordBatchFileReader", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchFileReader;
      } });
      Object.defineProperty(exports, "RecordBatchStreamReader", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchStreamReader;
      } });
      Object.defineProperty(exports, "AsyncRecordBatchFileReader", { enumerable: true, get: function() {
        return Arrow_1.AsyncRecordBatchFileReader;
      } });
      Object.defineProperty(exports, "AsyncRecordBatchStreamReader", { enumerable: true, get: function() {
        return Arrow_1.AsyncRecordBatchStreamReader;
      } });
      Object.defineProperty(exports, "RecordBatchWriter", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchWriter;
      } });
      Object.defineProperty(exports, "RecordBatchFileWriter", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchFileWriter;
      } });
      Object.defineProperty(exports, "RecordBatchStreamWriter", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchStreamWriter;
      } });
      Object.defineProperty(exports, "RecordBatchJSONWriter", { enumerable: true, get: function() {
        return Arrow_1.RecordBatchJSONWriter;
      } });
      Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
        return Arrow_1.MessageReader;
      } });
      Object.defineProperty(exports, "AsyncMessageReader", { enumerable: true, get: function() {
        return Arrow_1.AsyncMessageReader;
      } });
      Object.defineProperty(exports, "JSONMessageReader", { enumerable: true, get: function() {
        return Arrow_1.JSONMessageReader;
      } });
      Object.defineProperty(exports, "Message", { enumerable: true, get: function() {
        return Arrow_1.Message;
      } });
      Object.defineProperty(exports, "RecordBatch", { enumerable: true, get: function() {
        return Arrow_1.RecordBatch;
      } });
      Object.defineProperty(exports, "DataFrame", { enumerable: true, get: function() {
        return Arrow_1.DataFrame;
      } });
      Object.defineProperty(exports, "FilteredDataFrame", { enumerable: true, get: function() {
        return Arrow_1.FilteredDataFrame;
      } });
      Object.defineProperty(exports, "CountByResult", { enumerable: true, get: function() {
        return Arrow_1.CountByResult;
      } });
      Object.defineProperty(exports, "predicate", { enumerable: true, get: function() {
        return Arrow_1.predicate;
      } });
      Object.defineProperty(exports, "util", { enumerable: true, get: function() {
        return Arrow_1.util;
      } });
      Object.defineProperty(exports, "Builder", { enumerable: true, get: function() {
        return Arrow_1.Builder;
      } });
      Object.defineProperty(exports, "BinaryBuilder", { enumerable: true, get: function() {
        return Arrow_1.BinaryBuilder;
      } });
      Object.defineProperty(exports, "BoolBuilder", { enumerable: true, get: function() {
        return Arrow_1.BoolBuilder;
      } });
      Object.defineProperty(exports, "DateBuilder", { enumerable: true, get: function() {
        return Arrow_1.DateBuilder;
      } });
      Object.defineProperty(exports, "DateDayBuilder", { enumerable: true, get: function() {
        return Arrow_1.DateDayBuilder;
      } });
      Object.defineProperty(exports, "DateMillisecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.DateMillisecondBuilder;
      } });
      Object.defineProperty(exports, "DecimalBuilder", { enumerable: true, get: function() {
        return Arrow_1.DecimalBuilder;
      } });
      Object.defineProperty(exports, "DictionaryBuilder", { enumerable: true, get: function() {
        return Arrow_1.DictionaryBuilder;
      } });
      Object.defineProperty(exports, "FixedSizeBinaryBuilder", { enumerable: true, get: function() {
        return Arrow_1.FixedSizeBinaryBuilder;
      } });
      Object.defineProperty(exports, "FixedSizeListBuilder", { enumerable: true, get: function() {
        return Arrow_1.FixedSizeListBuilder;
      } });
      Object.defineProperty(exports, "FloatBuilder", { enumerable: true, get: function() {
        return Arrow_1.FloatBuilder;
      } });
      Object.defineProperty(exports, "Float16Builder", { enumerable: true, get: function() {
        return Arrow_1.Float16Builder;
      } });
      Object.defineProperty(exports, "Float32Builder", { enumerable: true, get: function() {
        return Arrow_1.Float32Builder;
      } });
      Object.defineProperty(exports, "Float64Builder", { enumerable: true, get: function() {
        return Arrow_1.Float64Builder;
      } });
      Object.defineProperty(exports, "IntervalBuilder", { enumerable: true, get: function() {
        return Arrow_1.IntervalBuilder;
      } });
      Object.defineProperty(exports, "IntervalDayTimeBuilder", { enumerable: true, get: function() {
        return Arrow_1.IntervalDayTimeBuilder;
      } });
      Object.defineProperty(exports, "IntervalYearMonthBuilder", { enumerable: true, get: function() {
        return Arrow_1.IntervalYearMonthBuilder;
      } });
      Object.defineProperty(exports, "IntBuilder", { enumerable: true, get: function() {
        return Arrow_1.IntBuilder;
      } });
      Object.defineProperty(exports, "Int8Builder", { enumerable: true, get: function() {
        return Arrow_1.Int8Builder;
      } });
      Object.defineProperty(exports, "Int16Builder", { enumerable: true, get: function() {
        return Arrow_1.Int16Builder;
      } });
      Object.defineProperty(exports, "Int32Builder", { enumerable: true, get: function() {
        return Arrow_1.Int32Builder;
      } });
      Object.defineProperty(exports, "Int64Builder", { enumerable: true, get: function() {
        return Arrow_1.Int64Builder;
      } });
      Object.defineProperty(exports, "Uint8Builder", { enumerable: true, get: function() {
        return Arrow_1.Uint8Builder;
      } });
      Object.defineProperty(exports, "Uint16Builder", { enumerable: true, get: function() {
        return Arrow_1.Uint16Builder;
      } });
      Object.defineProperty(exports, "Uint32Builder", { enumerable: true, get: function() {
        return Arrow_1.Uint32Builder;
      } });
      Object.defineProperty(exports, "Uint64Builder", { enumerable: true, get: function() {
        return Arrow_1.Uint64Builder;
      } });
      Object.defineProperty(exports, "ListBuilder", { enumerable: true, get: function() {
        return Arrow_1.ListBuilder;
      } });
      Object.defineProperty(exports, "MapBuilder", { enumerable: true, get: function() {
        return Arrow_1.MapBuilder;
      } });
      Object.defineProperty(exports, "NullBuilder", { enumerable: true, get: function() {
        return Arrow_1.NullBuilder;
      } });
      Object.defineProperty(exports, "StructBuilder", { enumerable: true, get: function() {
        return Arrow_1.StructBuilder;
      } });
      Object.defineProperty(exports, "TimestampBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimestampBuilder;
      } });
      Object.defineProperty(exports, "TimestampSecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimestampSecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampMillisecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimestampMillisecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampMicrosecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimestampMicrosecondBuilder;
      } });
      Object.defineProperty(exports, "TimestampNanosecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimestampNanosecondBuilder;
      } });
      Object.defineProperty(exports, "TimeBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimeBuilder;
      } });
      Object.defineProperty(exports, "TimeSecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimeSecondBuilder;
      } });
      Object.defineProperty(exports, "TimeMillisecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimeMillisecondBuilder;
      } });
      Object.defineProperty(exports, "TimeMicrosecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimeMicrosecondBuilder;
      } });
      Object.defineProperty(exports, "TimeNanosecondBuilder", { enumerable: true, get: function() {
        return Arrow_1.TimeNanosecondBuilder;
      } });
      Object.defineProperty(exports, "UnionBuilder", { enumerable: true, get: function() {
        return Arrow_1.UnionBuilder;
      } });
      Object.defineProperty(exports, "DenseUnionBuilder", { enumerable: true, get: function() {
        return Arrow_1.DenseUnionBuilder;
      } });
      Object.defineProperty(exports, "SparseUnionBuilder", { enumerable: true, get: function() {
        return Arrow_1.SparseUnionBuilder;
      } });
      Object.defineProperty(exports, "Utf8Builder", { enumerable: true, get: function() {
        return Arrow_1.Utf8Builder;
      } });
      Object.defineProperty(exports, "isTypedArray", { enumerable: true, get: function() {
        return Arrow_1.isTypedArray;
      } });
    }
  });

  // node_modules/apache-arrow/Arrow.node.mjs
  var Arrow_node_exports = {};
  __markAsModule(Arrow_node_exports);
  var import_adapters = __toModule(require_adapters());
  var import_builder = __toModule(require_builder2());
  var import_reader = __toModule(require_reader());
  var import_writer = __toModule(require_writer());
  var import_iterable = __toModule(require_iterable());
  var import_builder2 = __toModule(require_builder3());
  var import_reader2 = __toModule(require_reader2());
  var import_writer2 = __toModule(require_writer2());
  __reExport(Arrow_node_exports, __toModule(require_Arrow_dom()));
  import_adapters.default.toNodeStream = import_iterable.toNodeStream;
  import_builder.Builder["throughNode"] = import_builder2.builderThroughNodeStream;
  import_reader.RecordBatchReader["throughNode"] = import_reader2.recordBatchReaderThroughNodeStream;
  import_writer.RecordBatchWriter["throughNode"] = import_writer2.recordBatchWriterThroughNodeStream;

  // node_modules/@duckdb/duckdb-wasm/dist/duckdb-esm.js
  var C = class {
    constructor(e, r, t) {
      this.bindings = e;
      this.conn = r;
      this.header = t;
      this._first = true, this._depleted = false;
    }
    next() {
      if (this._first)
        return this._first = false, { done: false, value: this.header };
      if (this._depleted)
        return { done: true, value: null };
      let e = this.bindings.fetchQueryResults(this.conn);
      return this._depleted = e.length == 0, { done: this._depleted, value: e };
    }
    [Symbol.iterator]() {
      return this;
    }
  };
  var p;
  (function(e) {
    e[e.SUCCESS = 0] = "SUCCESS";
  })(p || (p = {}));
  function re() {
    let n = new TextDecoder();
    return (e) => (typeof SharedArrayBuffer != "undefined" && e.buffer instanceof SharedArrayBuffer && (e = new Uint8Array(e)), n.decode(e));
  }
  var te = re();
  var K;
  (function(t) {
    t[t.BUFFER = 0] = "BUFFER", t[t.NATIVE = 1] = "NATIVE", t[t.HTTP = 3] = "HTTP";
  })(K || (K = {}));
  var ne = new TextEncoder();
  var j;
  (function(i) {
    i[i.WASM_EXCEPTIONS = 1] = "WASM_EXCEPTIONS", i[i.WASM_THREADS = 2] = "WASM_THREADS", i[i.WASM_SIMD = 4] = "WASM_SIMD", i[i.WASM_BULK_MEMORY = 8] = "WASM_BULK_MEMORY", i[i.EMIT_BIGINT = 16] = "EMIT_BIGINT";
  })(j || (j = {}));
  var J;
  (function(r) {
    r.ROW_ARRAY = "row-array", r.COLUMN_OBJECT = "column-object";
  })(J || (J = {}));
  var z;
  (function(r) {
    r[r.APPEND = 0] = "APPEND", r[r.IMPORT = 1] = "IMPORT";
  })(z || (z = {}));
  var T;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.DEBUG = 1] = "DEBUG", i[i.INFO = 2] = "INFO", i[i.WARNING = 3] = "WARNING", i[i.ERROR = 4] = "ERROR";
  })(T || (T = {}));
  var S;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.CONNECT = 1] = "CONNECT", i[i.DISCONNECT = 2] = "DISCONNECT", i[i.OPEN = 3] = "OPEN", i[i.QUERY = 4] = "QUERY";
  })(S || (S = {}));
  var g;
  (function(c) {
    c[c.NONE = 0] = "NONE", c[c.OK = 1] = "OK", c[c.ERROR = 2] = "ERROR", c[c.START = 3] = "START", c[c.RUN = 4] = "RUN", c[c.CAPTURE = 5] = "CAPTURE";
  })(g || (g = {}));
  var y;
  (function(i) {
    i[i.NONE = 0] = "NONE", i[i.WEB_WORKER = 1] = "WEB_WORKER", i[i.NODE_WORKER = 2] = "NODE_WORKER", i[i.BINDINGS = 3] = "BINDINGS", i[i.ASYNC_DUCKDB = 4] = "ASYNC_DUCKDB";
  })(y || (y = {}));
  var v = class {
    constructor(e, r, t) {
      this.db = e;
      this.conn = r;
      this.header = t;
      this._first = true, this._depleted = false, this._inFlight = null;
    }
    async next() {
      if (this._first)
        return this._first = false, { done: false, value: this.header };
      if (this._depleted)
        return { done: true, value: null };
      let e;
      return this._inFlight != null ? (e = await this._inFlight, this._inFlight = null) : e = await this.db.fetchQueryResults(this.conn), this._depleted = e.length == 0, this._depleted || (this._inFlight = this.db.fetchQueryResults(this.conn)), { done: this._depleted, value: e };
    }
    [Symbol.asyncIterator]() {
      return this;
    }
  };
  var o;
  (function(a) {
    a.CLOSE_PREPARED = "CLOSE_PREPARED", a.COLLECT_FILE_STATISTICS = "COLLECT_FILE_STATISTICS", a.CONNECT = "CONNECT", a.COPY_FILE_TO_BUFFER = "COPY_FILE_TO_BUFFER", a.COPY_FILE_TO_PATH = "COPY_FILE_TO_PATH", a.CREATE_PREPARED = "CREATE_PREPARED", a.DISCONNECT = "DISCONNECT", a.DROP_FILE = "DROP_FILE", a.DROP_FILES = "DROP_FILES", a.EXPORT_FILE_STATISTICS = "EXPORT_FILE_STATISTICS", a.FETCH_QUERY_RESULTS = "FETCH_QUERY_RESULTS", a.FLUSH_FILES = "FLUSH_FILES", a.GET_FEATURE_FLAGS = "GET_FEATURE_FLAGS", a.GET_VERSION = "GET_VERSION", a.INSERT_ARROW_FROM_IPC_STREAM = "INSERT_ARROW_FROM_IPC_STREAM", a.INSERT_CSV_FROM_PATH = "IMPORT_CSV_FROM_PATH", a.INSERT_JSON_FROM_PATH = "IMPORT_JSON_FROM_PATH", a.INSTANTIATE = "INSTANTIATE", a.OPEN = "OPEN", a.PING = "PING", a.REGISTER_FILE_BUFFER = "REGISTER_FILE_BUFFER", a.REGISTER_FILE_HANDLE = "REGISTER_FILE_HANDLE", a.REGISTER_FILE_URL = "REGISTER_FILE_URL", a.RESET = "RESET", a.RUN_PREPARED = "RUN_PREPARED", a.RUN_QUERY = "RUN_QUERY", a.SEND_PREPARED = "SEND_PREPARED", a.SEND_QUERY = "SEND_QUERY", a.TOKENIZE = "TOKENIZE";
  })(o || (o = {}));
  var u;
  (function(l) {
    l.CONNECTION_INFO = "CONNECTION_INFO", l.ERROR = "ERROR", l.FEATURE_FLAGS = "FEATURE_FLAGS", l.FILE_BUFFER = "FILE_BUFFER", l.FILE_SIZE = "FILE_SIZE", l.FILE_STATISTICS = "FILE_STATISTICS", l.LOG = "LOG", l.OK = "OK", l.PREPARED_STATEMENT_ID = "PREPARED_STATEMENT_ID", l.QUERY_PLAN = "QUERY_PLAN", l.QUERY_RESULT = "QUERY_RESULT", l.QUERY_RESULT_CHUNK = "QUERY_RESULT_CHUNK", l.QUERY_START = "QUERY_START", l.REGISTERED_FILE = "REGISTERED_FILE", l.SCRIPT_TOKENS = "SCRIPT_TOKENS", l.SUCCESS = "SUCCESS", l.VERSION_STRING = "VERSION_STRING";
  })(u || (u = {}));
  var ce = new TextEncoder();
  var ue = "@duckdb/duckdb-wasm";
  var me = "0.1.11";
  var pe = "DuckDB powered by WebAssembly";
  var _e = "MPL-2.0";
  var Ee = { type: "git", url: "https://github.com/duckdb/duckdb-wasm.git" };
  var be = { "@apache-arrow/esnext-esm": "^6.0.0", "wasm-feature-detect": "^1.2.11" };
  var he = { "@types/emscripten": "^1.39.4", "@types/jasmine": "^3.10.1", "@typescript-eslint/eslint-plugin": "^5.2.0", "@typescript-eslint/parser": "^5.2.0", esbuild: "^0.13.10", eslint: "^8.1.0", "eslint-plugin-jasmine": "^4.1.2", "eslint-plugin-react": "^7.26.1", jasmine: "^3.10.0", "jasmine-core": "^3.10.1", "jasmine-spec-reporter": "^7.0.0", karma: "^6.3.6", "karma-chrome-launcher": "^3.1.0", "karma-coverage": "^2.0.3", "karma-firefox-launcher": "^2.1.1", "karma-jasmine": "^4.0.1", "karma-jasmine-html-reporter": "^1.7.0", "karma-sourcemap-loader": "^0.3.8", "karma-spec-reporter": "^0.0.32", "make-dir": "^3.1.0", nyc: "^15.1.0", prettier: "^2.4.1", puppeteer: "^10.4.0", rimraf: "^3.0.2", typedoc: "^0.22.7", typescript: "^4.4.4", "web-worker": "^1.1.0" };
  var Re = { fsevents: "*" };
  var ge = { "build:debug": "node bundle.mjs debug && tsc --emitDeclarationOnly", "build:release": "node bundle.mjs release && tsc --emitDeclarationOnly", docs: "typedoc", report: "node ./coverage.mjs", "test:node": "node --enable-source-maps --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js", "test:node:debug": "node --inspect-brk --enable-source-maps --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js", "test:node:filter": 'node --enable-source-maps --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js --filter="CSV"', "test:node:coverage": "nyc -r json --report-dir ./coverage/node node --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js", "test:firefox": "karma start ./karma/tests-firefox.cjs", "test:chrome": "karma start ./karma/tests-chrome.cjs", "test:chrome:eh": "karma start ./karma/tests-chrome-eh.cjs", "test:chrome:coverage": "karma start ./karma/tests-chrome-coverage.cjs", "test:browsers": "karma start ./karma/tests-all.cjs", "test:debug": "karma start ./karma/tests-debug.cjs", test: "npm run test:chrome && npm run test:node", "test:coverage": "npm run test:chrome:coverage && npm run test:node:coverage && npm run report", lint: "eslint src test" };
  var Te = ["dist", "!dist/types/test"];
  var ye = "./dist/duckdb-node-async.js";
  var Se = "./dist/duckdb-node-async.d.ts";
  var Ie = "./dist/duckdb-esm.js";
  var fe = { "./dist/duckdb-node-async.js": "./dist/duckdb-browser-async.js", "temp-write": false, worker_threads: false, perf_hooks: false, fs: false, os: false, path: false, buffer: false, crypto: false };
  var O = { name: ue, version: me, description: pe, license: _e, repository: Ee, dependencies: be, devDependencies: he, optionalDependencies: Re, scripts: ge, files: Te, main: ye, types: Se, module: Ie, browser: fe };
  var $ = O.name;
  var X = O.version;
  var M = O.version.split(".");
  var Kr = M[0];
  var jr = M[1];
  var Jr = M[2];

  // viewer.js
  var $2 = (s) => document.querySelector(s);
  var settings = {
    padding: { left: 60, top: 60, right: 40, bottom: 40 },
    width: 800,
    height: 800,
    dotRadius: 6,
    maxRadius: 16,
    minRadius: 4,
    duration: 750,
    domainPadding: 0.05
  };
  window.DATA_URL = "https://cdn.billmill.org/nbastats";
  function hover(event, tooltip, stats2, scales, fields, delaunay, cells) {
    const [mx, my] = d3.pointer(event, this);
    const nearest = delaunay.find(mx, my);
    const closestPlayer = cells[nearest][0];
    var rtext = "";
    if (statMeta[fields.r]) {
      rtext = "\n" + statMeta[fields.r].name + ": " + closestPlayer[fields.r];
    }
    tooltip.attr("transform", `translate(${scales.x(closestPlayer[fields.x])},${scales.y(closestPlayer[fields.y])})`).call(callout, `${closestPlayer.name}
${closestPlayer.team}
${statMeta[fields.x].name}: ${closestPlayer[fields.x]}
${statMeta[fields.y].name}: ${closestPlayer[fields.y]}${rtext}`);
  }
  function orient(pos, r) {
    if (pos == "top") {
      return (text) => text.attr("text-anchor", "middle").attr("y", -r);
    } else if (pos == "right") {
      return (text) => text.attr("text-anchor", "start").attr("dy", "0.35em").attr("x", r);
    } else if (pos == "bottom") {
      return (text) => text.attr("text-anchor", "middle").attr("dy", "0.71em").attr("y", r);
    } else if (pos == "left") {
      return (text) => text.attr("text-anchor", "end").attr("dy", "0.35em").attr("x", -r);
    }
  }
  function orientText(scales, fields) {
    return function([player2, cell]) {
      if (!cell) {
        return;
      }
      const [cx, cy] = d3.polygonCentroid(cell);
      const angle = (Math.round(Math.atan2(cy - scales.y(player2[fields.y]), cx - scales.x(player2[fields.x])) / Math.PI * 2) + 4) % 4;
      const r = scales.r(player2[fields.r]) * 1.1;
      d3.select(this).call(angle === 0 ? orient("right", r) : angle === 3 ? orient("top", r) : angle === 1 ? orient("bottom", r) : orient("left", r));
    };
  }
  function calcVoronoi(stats2, scales, fields) {
    const delaunay = d3.Delaunay.from(stats2, (p2) => scales.x(p2[fields.x]), (p2) => scales.y(p2[fields.y]));
    const voronoi = delaunay.voronoi([
      -1,
      -1,
      settings.width + 1,
      settings.height + 1
    ]);
    var cells = stats2.map((d2, i) => [d2, voronoi.cellPolygon(i)]);
    return [delaunay, cells];
  }
  function pointLabels(svg, stats2, scales, fields, cells) {
    var orienter = orientText(scales, fields);
    const container = svg.append("g").attr("class", "labels").style("font", "10px sans-serif");
    container.selectAll("text").data(cells, ([p2, _]) => p2.name + p2.team).join("text").attr("class", "pointLabel").each(orienter).attr("transform", ([p2, _]) => `translate(${scales.x(p2[fields.x])},${scales.y(p2[fields.y])})`).attr("display", ([, cell]) => !cell || -d3.polygonArea(cell) > 3e3 ? null : "none").text(([p2, _]) => p2.name);
    return function(stats3, scales2, fields2, cells2) {
      var orienter2 = orientText(scales2, fields2);
      container.selectAll("text").data(cells2, ([p2, _]) => p2.name + p2.team).join("text").transition().duration(settings.duration).each(orienter2).attr("transform", ([p2, _]) => `translate(${scales2.x(p2[fields2.x])},${scales2.y(p2[fields2.y])})`).attr("display", ([, cell]) => !cell || -d3.polygonArea(cell) > 3e3 ? null : "none").text(([p2, _]) => p2.name);
    };
  }
  function paddedExtent(lst, fn, reversed) {
    var [min, max] = d3.extent(lst, fn);
    if (reversed === void 0 || !reversed) {
      return [
        min * (1 - settings.domainPadding),
        max * (1 + settings.domainPadding)
      ];
    } else {
      return [
        max * (1 + settings.domainPadding),
        min * (1 - settings.domainPadding)
      ];
    }
  }
  function makeScales(stats2, fields) {
    const xAxType = statMeta[fields.x].type;
    const xreversed = statMeta[fields.x].reversed;
    var x;
    if (xAxType == "categorical") {
      const domain = new Set(stats2.map((p2) => p2[fields.x]));
      x = d3.scaleBand(domain, [
        settings.padding.left,
        settings.width - settings.padding.right
      ]);
    } else {
      x = d3.scaleLinear().domain(paddedExtent(stats2, (s) => s[fields.x], xreversed)).range([settings.padding.left, settings.width - settings.padding.right]);
    }
    const yAxType = statMeta[fields.y].type;
    const yreversed = statMeta[fields.y].reversed;
    var y2;
    if (yAxType == "categorical") {
      const domain = new Set(stats2.map((p2) => p2[fields.y]));
      y2 = d3.scaleBand(domain, [
        settings.padding.top,
        settings.height - settings.padding.bottom
      ]);
    } else {
      y2 = d3.scaleLinear().domain(d3.reverse(paddedExtent(stats2, (s) => s[fields.y], yreversed))).range([settings.padding.top, settings.height - settings.padding.bottom]);
    }
    var r;
    if (!isNaN(fields.r)) {
      r = (_) => parseFloat(fields.r);
    } else {
      r = d3.scaleLinear().domain(d3.extent(stats2, (s) => s[fields.r])).range([settings.minRadius, settings.maxRadius]);
    }
    return { x, y: y2, r };
  }
  function axes(svg, stats2, scales) {
    var xaxis = d3.axisTop(scales.x).tickSize(settings.height - settings.padding.top).tickFormat(d3.format(".2r"));
    const xaxisg = svg.append("g").attr("transform", `translate(0, ${settings.height - 20})`).attr("class", "xaxis").call(xaxis).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("y", 0).attr("dx", -15));
    const yaxis = d3.axisRight(scales.y).tickSize(settings.width - settings.padding.right).tickFormat(d3.format(".2r"));
    const yaxisg = svg.append("g").attr("transform", `translate(20, 0)`).attr("class", "yaxis").call(yaxis).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("dy", -4).attr("x", 4));
    return function(stats3, scales2, fields) {
      const xAxType = statMeta[fields.x].type;
      if (xAxType == "categorical") {
        xaxis.scale(scales2.x).tickFormat((p2) => p2);
      } else {
        xaxis.scale(scales2.x).tickFormat(d3.format(".2r"));
      }
      const yAxType = statMeta[fields.y].type;
      if (yAxType == "categorical") {
        yaxis.scale(scales2.y).tickFormat((p2) => p2);
      } else {
        yaxis.scale(scales2.y).tickFormat(d3.format(".2r"));
      }
      xaxisg.transition().duration(settings.duration).call(xaxis).on("start", function() {
        xaxisg.select(".domain").remove();
      }).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("y", 0).attr("dx", -15));
      yaxisg.transition().duration(settings.duration).call(yaxis).on("start", () => yaxisg.select(".domain").remove()).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("x", 4).attr("dy", -4));
    };
  }
  function points(svg, stats2, scales, fields) {
    var useTeamColors = $2("#teamcolors").checked;
    const container = svg.append("g").attr("class", "points");
    const points2 = container.selectAll("g").data(stats2, (d2) => d2.name + d2.team).join("g").attr("data-player-name", (d2) => d2.name).attr("transform", (d2) => `translate(${scales.x(d2[fields.x])},${scales.y(d2[fields.y])})`);
    if (useTeamColors) {
      points2.append("circle").attr("class", "outer").attr("fill", (d2) => teams[d2.team].colors[0]).attr("r", (d2) => scales.r(d2[fields.r]));
      points2.append("circle").attr("class", "inner").attr("fill", (d2) => teams[d2.team].colors[1]).attr("r", (d2) => scales.r(d2[fields.r]) / 2);
    } else {
      points2.append("circle").attr("class", "outer").attr("fill", "#1f77b4").attr("r", (d2) => scales.r(d2[fields.r]));
    }
    return function(stats3, scales2, fields2) {
      useTeamColors = $2("#teamcolors").checked;
      d3.selectAll(".player_label").remove();
      container.selectAll("g").data(stats3, (d2) => d2.name + d2.team).join((enter) => {
        var g2 = enter.append("g");
        if (useTeamColors) {
          g2.append("circle").attr("class", "outer").attr("fill", (d2) => teams[d2.team].colors[0]).attr("r", (d2) => scales2.r(d2[fields2.r]));
          g2.append("circle").attr("class", "inner").attr("fill", (d2) => teams[d2.team].colors[1]).attr("r", (d2) => scales2.r(d2[fields2.r]) / 2);
        } else {
          g2.append("circle").attr("class", "outer").attr("fill", "#1f77b4").attr("r", (d2) => scales2.r(d2[fields2.r]));
        }
        g2.call((enter2) => {
          enter2.transition().duration(settings.duration).attr("transform", (d2) => `translate(${scales2.x(d2[fields2.x])},${scales2.y(d2[fields2.y])})`);
        });
        return g2;
      }, (update) => update.call((update2) => update2.each((p2, i, ns) => {
        d3.select(ns[i]).select("circle.outer").transition().duration(settings.duration).attr("r", (d2) => scales2.r(d2[fields2.r]));
        d3.select(ns[i]).select("circle.inner").transition().duration(settings.duration).attr("r", (d2) => scales2.r(d2[fields2.r]) / 2);
      }).transition().attr("transform", (d2) => `translate(${scales2.x(d2[fields2.x])},${scales2.y(d2[fields2.y])})`).duration(settings.duration)), (exit) => exit.remove());
    };
  }
  function axisLabels(svg, fields) {
    const xlabel = svg.append("text").attr("class", "x label").attr("text-anchor", "end").attr("x", settings.width - 20).attr("y", settings.height - 5).text("\u2192" + statMeta[fields.x].name);
    const ylabel = svg.append("text").attr("class", "y label").attr("text-anchor", "left").attr("x", 15).attr("y", 40).text("\u2191" + statMeta[fields.y].name);
    const rlabel = svg.append("text").attr("class", "r label").attr("text-anchor", "left").attr("x", 10).attr("y", 20).style("display", "none");
    if (isNaN(fields.r)) {
      rlabel.text("\u2B24 " + statMeta[fields.r].name).style("display", void 0);
    } else {
      rlabel.style("display", "none");
    }
    return function(fields2) {
      xlabel.text("\u2192" + statMeta[fields2.x].name);
      ylabel.text("\u2191 " + statMeta[fields2.y].name);
      if (isNaN(fields2.r)) {
        rlabel.text("\u2B24 " + statMeta[fields2.r].name).style("display", void 0);
      } else {
        rlabel.style("display", "none");
      }
    };
  }
  function graph(stats2, fields) {
    const svg = d3.select("#canvas");
    var scales = makeScales(stats2, fields);
    var [delaunay, voronoiCells] = calcVoronoi(stats2, scales, fields);
    const updateAxes2 = axes(svg, stats2, scales);
    const updateAxisLabels = axisLabels(svg, fields);
    const updatePoints = points(svg, stats2, scales, fields);
    const updateLabels = pointLabels(svg, stats2, scales, fields, voronoiCells);
    var tooltip = svg.append("g").attr("class", "tooltip");
    svg.on("touchmove mousemove", (evt) => hover(evt, tooltip, stats2, scales, fields, delaunay, voronoiCells));
    svg.on("touchend mouseleave", () => tooltip.call(callout, null));
    return Object.assign(svg.node(), {
      update(stats3, fields2) {
        scales.y.domain(d3.reverse(paddedExtent(stats3, (s) => s[fields2.y], statMeta[fields2.y].reversed)));
        scales.x.domain(paddedExtent(stats3, (s) => s[fields2.x], statMeta[fields2.x].reversed));
        scales = makeScales(stats3, fields2);
        [delaunay, voronoiCells] = calcVoronoi(stats3, scales, fields2);
        updateAxes2(stats3, scales, fields2);
        updateAxisLabels(fields2);
        updatePoints(stats3, scales, fields2);
        updateLabels(stats3, scales, fields2, voronoiCells);
        svg.on("touchmove mousemove", (evt) => {
          return hover(evt, tooltip, stats3, scales, fields2, delaunay, voronoiCells);
        });
        tooltip.remove();
        tooltip = svg.append("g").attr("class", "tooltip");
      }
    });
  }
  function callout(g2, value) {
    if (!value)
      return g2.style("display", "none");
    g2.style("display", null).style("pointer-events", "none").style("font", "10px sans-serif");
    const path = g2.selectAll("path").data([null]).join("path").attr("fill", "white").attr("stroke", "black");
    const text = g2.selectAll("text").data([null]).join("text").call((text2) => text2.selectAll("tspan").data((value + "").split(/\n/)).join("tspan").attr("x", 0).attr("y", (d2, i) => `${i * 1.1}em`).style("font-weight", (_2, i) => i ? null : "bold").text((d2) => d2));
    const { _, y: y2, width: w, height: h } = text.node().getBBox();
    text.attr("transform", `translate(${-w / 2},${15 - y2})`);
    path.attr("d", `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
  }
  var statMeta = {
    pos: {
      name: "Position",
      type: "categorical"
    },
    age: {
      name: "Age",
      type: "numeric"
    },
    g: {
      name: "Games",
      type: "numeric"
    },
    gs: {
      name: "Games Started",
      type: "numeric"
    },
    mp: {
      name: "Minutes Played",
      type: "numeric"
    },
    fg: {
      name: "Field Goals Made",
      type: "numeric"
    },
    fga: {
      name: "Field Goals Attempted",
      type: "numeric"
    },
    fg_pct: {
      name: "Field Goal %",
      type: "numeric"
    },
    fg3: {
      name: "3pt Field Goals Made",
      type: "numeric"
    },
    fg3a: {
      name: "3pt Field Goals Attempted",
      type: "numeric"
    },
    fg3_pct: {
      name: "3pt Field Goal %",
      type: "numeric"
    },
    fg2: {
      name: "2pt Field Goals Made",
      type: "numeric"
    },
    fg2a: {
      name: "2pt Field Goals Attempted",
      type: "numeric"
    },
    fg2_pct: {
      name: "2pt Field Goal %",
      type: "numeric"
    },
    efg_pct: {
      name: "Effective Field Goal %",
      type: "numeric"
    },
    ft: {
      name: "Free Throws Made",
      type: "numeric"
    },
    fta: {
      name: "Free Throw Attempts",
      type: "numeric"
    },
    ft_pct: {
      name: "Free Throw %",
      type: "numeric"
    },
    orb: {
      name: "Offensive Rebounds",
      type: "numeric"
    },
    drb: {
      name: "Defensive Rebounds",
      type: "numeric"
    },
    trb: {
      name: "Total Rebounds",
      type: "numeric"
    },
    ast: {
      name: "Assists",
      type: "numeric"
    },
    stl: {
      name: "Steals",
      type: "numeric"
    },
    blk: {
      name: "Blocks",
      type: "numeric"
    },
    tov: {
      name: "Turnovers",
      type: "numeric"
    },
    pf: {
      name: "Personal Fouls",
      type: "numeric"
    },
    pts: {
      name: "Points",
      type: "numeric"
    },
    name: {
      name: "name",
      type: "categorical"
    },
    team: {
      name: "Team",
      type: "categorical"
    },
    per: {
      name: "PER",
      type: "numeric"
    },
    ts_pct: {
      name: "True Shooting %",
      type: "numeric"
    },
    fg3a_per_fga_pct: {
      name: "3pt Attempted per Field Goal Attempted",
      type: "numeric"
    },
    fta_per_fga_pct: {
      name: "Free Throw Attempted per Field Goal Attempted",
      type: "numeric"
    },
    orb_pct: {
      name: "Offensive Rebound %",
      type: "numeric"
    },
    drb_pct: {
      name: "Defensive Rebound %",
      type: "numeric"
    },
    trb_pct: {
      name: "Total Rebound %",
      type: "numeric"
    },
    ast_pct: {
      name: "",
      type: "numeric"
    },
    stl_pct: {
      name: "",
      type: "numeric"
    },
    blk_pct: {
      name: "",
      type: "numeric"
    },
    tov_pct: {
      name: "",
      type: "numeric"
    },
    usg_pct: {
      name: "Usage %",
      type: "numeric"
    },
    ows: {
      name: "Offensive Win Shares",
      type: "numeric"
    },
    dws: {
      name: "Defensive Win Shares",
      type: "numeric"
    },
    ws: {
      name: "Win Shares",
      type: "numeric"
    },
    ws_per_48: {
      name: "Win Shares per 48 minutes",
      type: "numeric"
    },
    obpm: {
      name: "Offensive Box Plus-Minus",
      type: "numeric"
    },
    dbpm: {
      name: "Defensive Box Plus-Minus",
      type: "numeric"
    },
    bpm: {
      name: "Box Plus-Minus",
      type: "numeric"
    },
    vorp: {
      name: "VORP",
      type: "numeric"
    },
    fg_per_mp: {
      name: "Field Goals per 36 minutes",
      type: "numeric"
    },
    fga_per_mp: {
      name: "Field Goals Attempted per 36 minutes",
      type: "numeric"
    },
    fg3_per_mp: {
      name: "3pt Field Goals per 36 minutes",
      type: "numeric"
    },
    fg3a_per_mp: {
      name: "3pt Field Goals Attempted per 36 minutes",
      type: "numeric"
    },
    fg2_per_mp: {
      name: "2pt Field Goals per 36 minutes",
      type: "numeric"
    },
    fg2a_per_mp: {
      name: "2pt Field Goals Attempted per 36 minutes",
      type: "numeric"
    },
    ft_per_mp: {
      name: "Free Throws per 36 minutes",
      type: "numeric"
    },
    fta_per_mp: {
      name: "Free Throws Attempted per 36 minutes",
      type: "numeric"
    },
    orb_per_mp: {
      name: "Offensive Rebounds per 36 minutes",
      type: "numeric"
    },
    drb_per_mp: {
      name: "Defensive Rebounds per 36 minutes",
      type: "numeric"
    },
    trb_per_mp: {
      name: "Rebounds per 36 minutes",
      type: "numeric"
    },
    ast_per_mp: {
      name: "Assists per 36 minutes",
      type: "numeric"
    },
    stl_per_mp: {
      name: "Steals per 36 minutes",
      type: "numeric"
    },
    blk_per_mp: {
      name: "Blocks per 36 minutes",
      type: "numeric"
    },
    tov_per_mp: {
      name: "Turnovers per 36 minutes",
      type: "numeric"
    },
    pf_per_mp: {
      name: "Personal Fouls per 36 minutes",
      type: "numeric"
    },
    pts_per_mp: {
      name: "Points per 36 minutes",
      type: "numeric"
    },
    fg_per_poss: {
      name: "Fields Goals per 100 possessions",
      type: "numeric"
    },
    fga_per_poss: {
      name: "Field Goals Attempted per 100 possessions",
      type: "numeric"
    },
    fg3_per_poss: {
      name: "3pt Field Goals per 100 possessions",
      type: "numeric"
    },
    fg3a_per_poss: {
      name: "3pt Field Goal Attempts per 100 possessions",
      type: "numeric"
    },
    fg2_per_poss: {
      name: "2pt Field Goals per 100 possessions",
      type: "numeric"
    },
    fg2a_per_poss: {
      name: "2p Field Goal Attempts per 100 possessions",
      type: "numeric"
    },
    ft_per_poss: {
      name: "Free Throws per 100 possessions",
      type: "numeric"
    },
    fta_per_poss: {
      name: "Free Throws Attempted per 100 possessions",
      type: "numeric"
    },
    orb_per_poss: {
      name: "Offensive Rebounds per 100 possessions",
      type: "numeric"
    },
    drb_per_poss: {
      name: "Defensive Rebounds per 100 possessions",
      type: "numeric"
    },
    trb_per_poss: {
      name: "Rebounds per 100 possessions",
      type: "numeric"
    },
    ast_per_poss: {
      name: "Assists per 100 possessions",
      type: "numeric"
    },
    stl_per_poss: {
      name: "Steals per 100 possessions",
      type: "numeric"
    },
    blk_per_poss: {
      name: "Blocks per 100 possessions",
      type: "numeric"
    },
    tov_per_poss: {
      name: "Turnovers per 100 possessions",
      type: "numeric"
    },
    pf_per_poss: {
      name: "Personal Fouls per 100 possessions",
      type: "numeric"
    },
    pts_per_poss: {
      name: "Points per 100 possessions",
      type: "numeric"
    },
    off_rtg: {
      name: "Offensive Rating",
      type: "numeric"
    },
    def_rtg: {
      name: "Defensive Rating",
      type: "numeric",
      reversed: true
    },
    raptor_defense: {
      name: "Raptor Defensive Rating",
      type: "numeric"
    },
    raptor_offense: {
      name: "Raptor Offensive Rating",
      type: "numeric"
    },
    war_reg_season: {
      name: "538 Wins Above Replacement",
      type: "numeric"
    },
    mp_per_g: {
      name: "Minutes per Game",
      type: "numeric"
    },
    fg_per_g: {
      name: "Field Goals per Game",
      type: "numeric"
    },
    fga_per_g: {
      name: "Field Goal Attempts per Game",
      type: "numeric"
    },
    fg3_per_g: {
      name: "3pt Field Goals per Game",
      type: "numeric"
    },
    fg3a_per_g: {
      name: "3pt Field Goal Attempts per Game",
      type: "numeric"
    },
    fg2_per_g: {
      name: "2pt Field Goals per Game",
      type: "numeric"
    },
    fg2a_per_g: {
      name: "2pt Field Goal Attempts per Game",
      type: "numeric"
    },
    ft_per_g: {
      name: "Free Throws per Game",
      type: "numeric"
    },
    fta_per_g: {
      name: "Free Throws Attempted per Game",
      type: "numeric"
    },
    orb_per_g: {
      name: "Offensive Rebounds per Game",
      type: "numeric"
    },
    drb_per_g: {
      name: "Defensive Rebounds per Game",
      type: "numeric"
    },
    trb_per_g: {
      name: "Total Rebounds per Game",
      type: "numeric"
    },
    ast_per_g: {
      name: "Assists per Game",
      type: "numeric"
    },
    stl_per_g: {
      name: "Steals per Game",
      type: "numeric"
    },
    blk_per_g: {
      name: "Blocks per Game",
      type: "numeric"
    },
    tov_per_g: {
      name: "Turnovers per Game",
      type: "numeric"
    },
    pf_per_g: {
      name: "Personal Fouls per Game",
      type: "numeric"
    },
    pts_per_g: {
      name: "Points per Game",
      type: "numeric"
    }
  };
  var teams = {
    ATL: {
      name: "Atlanta Hawks",
      colors: ["#C8102E", "#FDB927", "#000000", "#9EA2A2"]
    },
    BOS: {
      name: "Boston Celtics",
      colors: ["#008348", "#BB9753", "#000000", "#A73832", "#FFFFFF"]
    },
    BRK: { name: "Brooklyn Nets", colors: ["#000000", "#FFFFFF", "#707271"] },
    CHA: { name: "Charlotte Bobcats", colors: ["#f26532", "#2f598c", "#959da0"] },
    CHI: { name: "Chicago Bulls", colors: ["#CE1141", "#000000"] },
    CHO: {
      name: "Charlotte Hornets",
      colors: ["#00788C", "#1D1160", "#A1A1A4", "#FFFFFF"]
    },
    CLE: {
      name: "Cleveland Cavaliers",
      colors: ["#6F263D", "#FFB81C", "#041E42", "#000000"]
    },
    DAL: {
      name: "Dallas Mavericks",
      colors: ["#0064B1", "#00285E", "#BBC4CA", "#000000"]
    },
    DEN: {
      name: "Denver Nuggets",
      colors: ["#0E2240", "#FEC524", "#8B2131", "#244289"]
    },
    DET: {
      name: "Detroit Pistons",
      colors: ["#1D428A", "#C8102E", "#BEC0C2", "#000000", "#FFFFFF"]
    },
    GSW: { name: "Golden State Warriors", colors: ["#1D428A", "#FDB927"] },
    HOU: {
      name: "Houston Rockets",
      colors: ["#CE1141", "#000000", "#9EA2A2", "#373A36", "#FFFFFF"]
    },
    IND: { name: "Indiana Pacers", colors: ["#002D62", "#FDBB30", "#BEC0C2"] },
    LAC: {
      name: "Los Angeles Clippers",
      colors: ["#C8102E", "#1D428A", "#000000", "#BEC0C2", "#FFFFFF"]
    },
    LAL: {
      name: "Los Angeles Lakers",
      colors: ["#552583", "#FDB927", "#000000"]
    },
    MEM: {
      name: "Memphis Grizzlies",
      colors: ["#5D76A9", "#12173F", "#707271", "#F5B112"]
    },
    MIA: { name: "Miami Heat", colors: ["#000000", "#98002E", "#F9A01B"] },
    MIL: {
      name: "Milwaukee Bucks",
      colors: ["#00471B", "#EEE1C6", "#0077C0", "#000000", "#FFFFFF"]
    },
    MIN: {
      name: "Minnesota Timberwolves",
      colors: ["#0C2340", "#78BE20", "#236192", "#9EA2A2", "#FFFFFF"]
    },
    NJN: { name: "New Jersey Nets", colors: ["#000000", "#FFFFFF", "#707271"] },
    NOH: {
      name: "New Orleans Hornets",
      colors: ["#00788C", "#1D1160", "#A1A1A4", "#FFFFFF"]
    },
    NOP: {
      name: "New Orleans Pelicans",
      colors: ["#0A2240", "#8C734B", "#CE0E2D"]
    },
    NYK: {
      name: "New York Knicks",
      colors: ["#006BB6", "#F58426", "#BEC0C2", "#000000", "#FFFFFF"]
    },
    OKC: {
      name: "Oklahoma City Thunder",
      colors: ["#007AC1", "#EF3B24", "#FDBB30", "#002D62"]
    },
    ORL: { name: "Orlando Magic", colors: ["#0077C0", "#000000", "#C4CED4"] },
    PHI: {
      name: "Philadelphia 76ers",
      colors: ["#006BB6", "#ED174C", "#C4CED4", "#000000", "#002B5C", "#FFFFFF"]
    },
    PHO: {
      name: "Phoenix Suns",
      colors: ["#1D1160", "#E56020", "#000000", "#63727A", "#F9A01B"]
    },
    POR: {
      name: "Portland Trailblazers",
      colors: ["#E03A3E", "#000000", "#FFFFFF"]
    },
    SAC: { name: "Sacramento Kings", colors: ["#5A2B81", "#63727A", "#000000"] },
    SAS: { name: "San Antonio Spurs", colors: ["#000000", "#C4CED4"] },
    TOR: {
      name: "Toronto Raptors",
      colors: ["#CE1141", "#000000", "#393A96", "#B4975A", "#FFFFFF"]
    },
    TOT: {
      name: "Season Total",
      comment: "bbref uses TOT to indicate a player's season total if they were on more than one team",
      colors: ["#888888", "#888888"]
    },
    UTA: { name: "Utah Jazz", colors: ["#002B5C", "#F9A01B", "#00471B"] },
    WAS: {
      name: "Washington Wizards",
      colors: ["#002B5C", "#E31837", "#C4CED4", "#FFFFFF"]
    }
  };
  function prepare() {
    Object.keys(statMeta).sort().forEach((key) => {
      const meta = statMeta[key];
      if (meta.name == "") {
        return;
      }
      d3.select("#statx").append("option").attr("value", key).attr("id", `statx_${key}`).text(meta.name);
      d3.select("#staty").append("option").attr("value", key).attr("id", `staty_${key}`).text(meta.name);
      if (["numeric"].indexOf(meta.type) != -1) {
        d3.select("#radius").append("option").attr("value", key).attr("id", `staty_${key}`).text(meta.name);
      }
    });
    d3.select("#statx_ts_pct").attr("selected", true);
    d3.select("#staty_usg_pct").attr("selected", true);
  }
  async function changeYear(evt) {
    const res = await fetch(`${window.DATA_URL}/${evt.target.value}/stats.json`);
    window.stats = await res.json();
    $2("#updated").innerHTML = "updated " + new Intl.DateTimeFormat([], { dateStyle: "medium", timeStyle: "short" }).format(Date.parse(window.stats.updated));
    const fields = {
      x: $2("#statx").value,
      y: $2("#staty").value,
      r: $2("#radius").value
    };
    d3.selectAll("#canvas").html("");
    graph(applyFilter(window.stats.players), fields);
  }
  function changeUseTeamColors(_) {
    const fields = {
      x: $2("#statx").value,
      y: $2("#staty").value,
      r: $2("#radius").value
    };
    d3.selectAll("#canvas").html("");
    graph(applyFilter(window.stats.players), fields);
  }
  function makeQuantiler(stats2) {
    return function(player2, field, n) {
      return player2[field] > d3.quantile(stats2, n / 100, (p2) => p2[field]);
    };
  }
  function applyFilter(stats) {
    const quantile = makeQuantiler(stats);
    const activeStats = stats.filter((player) => eval($2("#filter").value));
    return activeStats;
  }
  function updateSettings(_evt) {
    settings.width = $2("#settings-width").value;
    settings.height = $2("#settings-height").value;
    settings.minRadius = $2("#settings-min-radius").value;
    settings.maxRadius = $2("#settings-max-radius").value;
    const fields = {
      x: $2("#statx").value,
      y: $2("#staty").value,
      r: $2("#radius").value
    };
    d3.selectAll("#canvas").html("");
    graph(applyFilter(window.stats.players), fields);
  }
  function updateAxes(svg) {
    return (_evt) => {
      svg.update(applyFilter(window.stats.players), {
        x: $2("#statx").value,
        y: $2("#staty").value,
        r: $2("#radius").value
      });
    };
  }
  window.addEventListener("DOMContentLoaded", async (_evt) => {
    const res = await fetch(`${window.DATA_URL}/2022/stats.json`);
    window.stats = await res.json();
    $2("#updated").innerHTML = "updated " + new Intl.DateTimeFormat([], { dateStyle: "medium", timeStyle: "short" }).format(Date.parse(window.stats.updated));
    $2("#settings-width").value = settings.width;
    $2("#settings-height").value = settings.height;
    $2("#settings-min-radius").value = settings.minRadius;
    $2("#settings-max-radius").value = settings.maxRadius;
    prepare();
    const svg = graph(applyFilter(window.stats.players), {
      x: "ts_pct",
      y: "usg_pct",
      r: $2("#radius").value
    });
    $2("#settings-width").addEventListener("change", updateSettings);
    $2("#settings-height").addEventListener("change", updateSettings);
    $2("#settings-min-radius").addEventListener("change", updateSettings);
    $2("#settings-max-radius").addEventListener("change", updateSettings);
    $2("#yearChooser").addEventListener("change", changeYear);
    $2("#teamcolors").addEventListener("change", (evt) => changeUseTeamColors(evt));
    $2("#statx").addEventListener("change", updateAxes(svg));
    $2("#staty").addEventListener("change", updateAxes(svg));
    $2("#radius").addEventListener("change", updateAxes(svg));
    $2("#applyFilter").addEventListener("click", updateAxes(svg));
  });
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
