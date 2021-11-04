var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@apache-arrow/esnext-esm/util/buffer.js
var buffer_exports = {};
__export(buffer_exports, {
  compareArrayLike: () => compareArrayLike,
  joinUint8Arrays: () => joinUint8Arrays,
  memcpy: () => memcpy,
  rebaseValueOffsets: () => rebaseValueOffsets,
  toArrayBufferView: () => toArrayBufferView,
  toArrayBufferViewAsyncIterator: () => toArrayBufferViewAsyncIterator,
  toArrayBufferViewIterator: () => toArrayBufferViewIterator,
  toBigInt64Array: () => toBigInt64Array,
  toBigUint64Array: () => toBigUint64Array,
  toFloat32Array: () => toFloat32Array,
  toFloat32ArrayAsyncIterator: () => toFloat32ArrayAsyncIterator,
  toFloat32ArrayIterator: () => toFloat32ArrayIterator,
  toFloat64Array: () => toFloat64Array,
  toFloat64ArrayAsyncIterator: () => toFloat64ArrayAsyncIterator,
  toFloat64ArrayIterator: () => toFloat64ArrayIterator,
  toInt16Array: () => toInt16Array,
  toInt16ArrayAsyncIterator: () => toInt16ArrayAsyncIterator,
  toInt16ArrayIterator: () => toInt16ArrayIterator,
  toInt32Array: () => toInt32Array,
  toInt32ArrayAsyncIterator: () => toInt32ArrayAsyncIterator,
  toInt32ArrayIterator: () => toInt32ArrayIterator,
  toInt8Array: () => toInt8Array,
  toInt8ArrayAsyncIterator: () => toInt8ArrayAsyncIterator,
  toInt8ArrayIterator: () => toInt8ArrayIterator,
  toUint16Array: () => toUint16Array,
  toUint16ArrayAsyncIterator: () => toUint16ArrayAsyncIterator,
  toUint16ArrayIterator: () => toUint16ArrayIterator,
  toUint32Array: () => toUint32Array,
  toUint32ArrayAsyncIterator: () => toUint32ArrayAsyncIterator,
  toUint32ArrayIterator: () => toUint32ArrayIterator,
  toUint8Array: () => toUint8Array,
  toUint8ArrayAsyncIterator: () => toUint8ArrayAsyncIterator,
  toUint8ArrayIterator: () => toUint8ArrayIterator,
  toUint8ClampedArray: () => toUint8ClampedArray,
  toUint8ClampedArrayAsyncIterator: () => toUint8ClampedArrayAsyncIterator,
  toUint8ClampedArrayIterator: () => toUint8ClampedArrayIterator
});

// node_modules/flatbuffers/js/flatbuffers.mjs
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
flatbuffers.Builder.prototype.writeInt8 = function(value2) {
  this.bb.writeInt8(this.space -= 1, value2);
};
flatbuffers.Builder.prototype.writeInt16 = function(value2) {
  this.bb.writeInt16(this.space -= 2, value2);
};
flatbuffers.Builder.prototype.writeInt32 = function(value2) {
  this.bb.writeInt32(this.space -= 4, value2);
};
flatbuffers.Builder.prototype.writeInt64 = function(value2) {
  this.bb.writeInt64(this.space -= 8, value2);
};
flatbuffers.Builder.prototype.writeFloat32 = function(value2) {
  this.bb.writeFloat32(this.space -= 4, value2);
};
flatbuffers.Builder.prototype.writeFloat64 = function(value2) {
  this.bb.writeFloat64(this.space -= 8, value2);
};
flatbuffers.Builder.prototype.addInt8 = function(value2) {
  this.prep(1, 0);
  this.writeInt8(value2);
};
flatbuffers.Builder.prototype.addInt16 = function(value2) {
  this.prep(2, 0);
  this.writeInt16(value2);
};
flatbuffers.Builder.prototype.addInt32 = function(value2) {
  this.prep(4, 0);
  this.writeInt32(value2);
};
flatbuffers.Builder.prototype.addInt64 = function(value2) {
  this.prep(8, 0);
  this.writeInt64(value2);
};
flatbuffers.Builder.prototype.addFloat32 = function(value2) {
  this.prep(4, 0);
  this.writeFloat32(value2);
};
flatbuffers.Builder.prototype.addFloat64 = function(value2) {
  this.prep(8, 0);
  this.writeFloat64(value2);
};
flatbuffers.Builder.prototype.addFieldInt8 = function(voffset, value2, defaultValue) {
  if (this.force_defaults || value2 != defaultValue) {
    this.addInt8(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldInt16 = function(voffset, value2, defaultValue) {
  if (this.force_defaults || value2 != defaultValue) {
    this.addInt16(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldInt32 = function(voffset, value2, defaultValue) {
  if (this.force_defaults || value2 != defaultValue) {
    this.addInt32(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldInt64 = function(voffset, value2, defaultValue) {
  if (this.force_defaults || !value2.equals(defaultValue)) {
    this.addInt64(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldFloat32 = function(voffset, value2, defaultValue) {
  if (this.force_defaults || value2 != defaultValue) {
    this.addFloat32(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldFloat64 = function(voffset, value2, defaultValue) {
  if (this.force_defaults || value2 != defaultValue) {
    this.addFloat64(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldOffset = function(voffset, value2, defaultValue) {
  if (this.force_defaults || value2 != defaultValue) {
    this.addOffset(value2);
    this.slot(voffset);
  }
};
flatbuffers.Builder.prototype.addFieldStruct = function(voffset, value2, defaultValue) {
  if (value2 != defaultValue) {
    this.nested(value2);
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
flatbuffers.Builder.prototype.requiredField = function(table, field2) {
  var table_start = this.bb.capacity() - table;
  var vtable_start = table_start - this.bb.readInt32(table_start);
  var ok = this.bb.readInt16(vtable_start + field2) != 0;
  if (!ok) {
    throw new Error("FlatBuffers: field " + field2 + " must be set");
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
flatbuffers.ByteBuffer.prototype.writeInt8 = function(offset, value2) {
  this.bytes_[offset] = value2;
};
flatbuffers.ByteBuffer.prototype.writeUint8 = function(offset, value2) {
  this.bytes_[offset] = value2;
};
flatbuffers.ByteBuffer.prototype.writeInt16 = function(offset, value2) {
  this.bytes_[offset] = value2;
  this.bytes_[offset + 1] = value2 >> 8;
};
flatbuffers.ByteBuffer.prototype.writeUint16 = function(offset, value2) {
  this.bytes_[offset] = value2;
  this.bytes_[offset + 1] = value2 >> 8;
};
flatbuffers.ByteBuffer.prototype.writeInt32 = function(offset, value2) {
  this.bytes_[offset] = value2;
  this.bytes_[offset + 1] = value2 >> 8;
  this.bytes_[offset + 2] = value2 >> 16;
  this.bytes_[offset + 3] = value2 >> 24;
};
flatbuffers.ByteBuffer.prototype.writeUint32 = function(offset, value2) {
  this.bytes_[offset] = value2;
  this.bytes_[offset + 1] = value2 >> 8;
  this.bytes_[offset + 2] = value2 >> 16;
  this.bytes_[offset + 3] = value2 >> 24;
};
flatbuffers.ByteBuffer.prototype.writeInt64 = function(offset, value2) {
  this.writeInt32(offset, value2.low);
  this.writeInt32(offset + 4, value2.high);
};
flatbuffers.ByteBuffer.prototype.writeUint64 = function(offset, value2) {
  this.writeUint32(offset, value2.low);
  this.writeUint32(offset + 4, value2.high);
};
flatbuffers.ByteBuffer.prototype.writeFloat32 = function(offset, value2) {
  flatbuffers.float32[0] = value2;
  this.writeInt32(offset, flatbuffers.int32[0]);
};
flatbuffers.ByteBuffer.prototype.writeFloat64 = function(offset, value2) {
  flatbuffers.float64[0] = value2;
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
          var d = this.readUint8(offset + i++);
          codePoint = (a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63;
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

// node_modules/@apache-arrow/esnext-esm/util/utf8.js
var decoder = new TextDecoder("utf-8");
var decodeUtf8 = (buffer) => decoder.decode(buffer);
var encoder = new TextEncoder();
var encodeUtf8 = (value2) => encoder.encode(value2);

// node_modules/@apache-arrow/esnext-esm/io/interfaces.js
var ITERATOR_DONE = Object.freeze({ done: true, value: void 0 });
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
  async cancel(reason) {
    await this.return(reason);
  }
  write(value2) {
    if (this._ensureOpen()) {
      this.resolvers.length <= 0 ? this._values.push(value2) : this.resolvers.shift().resolve({ done: false, value: value2 });
    }
  }
  abort(value2) {
    if (this._closedPromiseResolve) {
      this.resolvers.length <= 0 ? this._error = { error: value2 } : this.resolvers.shift().reject({ done: true, value: value2 });
    }
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers } = this;
      while (resolvers.length > 0) {
        resolvers.shift().resolve(ITERATOR_DONE);
      }
      this._closedPromiseResolve();
      this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(options) {
    return adapters_default.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, options);
  }
  toNodeStream(options) {
    return adapters_default.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, options);
  }
  async throw(_) {
    await this.abort(_);
    return ITERATOR_DONE;
  }
  async return(_) {
    await this.close();
    return ITERATOR_DONE;
  }
  async read(size) {
    return (await this.next(size, "read")).value;
  }
  async peek(size) {
    return (await this.next(size, "peek")).value;
  }
  next(..._args) {
    if (this._values.length > 0) {
      return Promise.resolve({ done: false, value: this._values.shift() });
    } else if (this._error) {
      return Promise.reject({ done: true, value: this._error.error });
    } else if (!this._closedPromiseResolve) {
      return Promise.resolve(ITERATOR_DONE);
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

// node_modules/@apache-arrow/esnext-esm/util/compat.js
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
var isNumber = (x2) => typeof x2 === "number";
var isBoolean = (x2) => typeof x2 === "boolean";
var isFunction = (x2) => typeof x2 === "function";
var isObject = (x2) => x2 != null && Object(x2) === x2;
var isPromise = (x2) => {
  return isObject(x2) && isFunction(x2.then);
};
var isIterable = (x2) => {
  return isObject(x2) && isFunction(x2[Symbol.iterator]);
};
var isAsyncIterable = (x2) => {
  return isObject(x2) && isFunction(x2[Symbol.asyncIterator]);
};
var isArrowJSON = (x2) => {
  return isObject(x2) && isObject(x2["schema"]);
};
var isIteratorResult = (x2) => {
  return isObject(x2) && "done" in x2 && "value" in x2;
};
var isFileHandle = (x2) => {
  return isObject(x2) && isFunction(x2["stat"]) && isNumber(x2["fd"]);
};
var isFetchResponse = (x2) => {
  return isObject(x2) && isReadableDOMStream(x2["body"]);
};
var isWritableDOMStream = (x2) => {
  return isObject(x2) && isFunction(x2["abort"]) && isFunction(x2["getWriter"]) && !(x2 instanceof ReadableInterop);
};
var isReadableDOMStream = (x2) => {
  return isObject(x2) && isFunction(x2["cancel"]) && isFunction(x2["getReader"]) && !(x2 instanceof ReadableInterop);
};
var isWritableNodeStream = (x2) => {
  return isObject(x2) && isFunction(x2["end"]) && isFunction(x2["write"]) && isBoolean(x2["writable"]) && !(x2 instanceof ReadableInterop);
};
var isReadableNodeStream = (x2) => {
  return isObject(x2) && isFunction(x2["read"]) && isFunction(x2["pipe"]) && isBoolean(x2["readable"]) && !(x2 instanceof ReadableInterop);
};

// node_modules/@apache-arrow/esnext-esm/util/buffer.js
var ByteBuffer = flatbuffers.ByteBuffer;
var SharedArrayBuf = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;
function collapseContiguousByteRanges(chunks) {
  const result = chunks[0] ? [chunks[0]] : [];
  let xOffset, yOffset, xLen, yLen;
  for (let x2, y2, i = 0, j2 = 0, n = chunks.length; ++i < n; ) {
    x2 = result[j2];
    y2 = chunks[i];
    if (!x2 || !y2 || x2.buffer !== y2.buffer || y2.byteOffset < x2.byteOffset) {
      y2 && (result[++j2] = y2);
      continue;
    }
    ({ byteOffset: xOffset, byteLength: xLen } = x2);
    ({ byteOffset: yOffset, byteLength: yLen } = y2);
    if (xOffset + xLen < yOffset || yOffset + yLen < xOffset) {
      y2 && (result[++j2] = y2);
      continue;
    }
    result[j2] = new Uint8Array(x2.buffer, xOffset, yOffset - xOffset + yLen);
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
function joinUint8Arrays(chunks, size) {
  const result = collapseContiguousByteRanges(chunks);
  const byteLength = result.reduce((x2, b) => x2 + b.byteLength, 0);
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
function toArrayBufferView(ArrayBufferViewCtor, input) {
  let value2 = isIteratorResult(input) ? input.value : input;
  if (value2 instanceof ArrayBufferViewCtor) {
    if (ArrayBufferViewCtor === Uint8Array) {
      return new ArrayBufferViewCtor(value2.buffer, value2.byteOffset, value2.byteLength);
    }
    return value2;
  }
  if (!value2) {
    return new ArrayBufferViewCtor(0);
  }
  if (typeof value2 === "string") {
    value2 = encodeUtf8(value2);
  }
  if (value2 instanceof ArrayBuffer) {
    return new ArrayBufferViewCtor(value2);
  }
  if (value2 instanceof SharedArrayBuf) {
    return new ArrayBufferViewCtor(value2);
  }
  if (value2 instanceof ByteBuffer) {
    return toArrayBufferView(ArrayBufferViewCtor, value2.bytes());
  }
  return !ArrayBuffer.isView(value2) ? ArrayBufferViewCtor.from(value2) : value2.byteLength <= 0 ? new ArrayBufferViewCtor(0) : new ArrayBufferViewCtor(value2.buffer, value2.byteOffset, value2.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT);
}
var toInt8Array = (input) => toArrayBufferView(Int8Array, input);
var toInt16Array = (input) => toArrayBufferView(Int16Array, input);
var toInt32Array = (input) => toArrayBufferView(Int32Array, input);
var toBigInt64Array = (input) => toArrayBufferView(BigInt64ArrayCtor, input);
var toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
var toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
var toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
var toBigUint64Array = (input) => toArrayBufferView(BigUint64ArrayCtor, input);
var toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
var toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
var toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
var pump = (iterator) => {
  iterator.next();
  return iterator;
};
function* toArrayBufferViewIterator(ArrayCtor, source) {
  const wrap = function* (x2) {
    yield x2;
  };
  const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : !isIterable(source) ? wrap(source) : source;
  yield* pump(function* (it) {
    let r = null;
    do {
      r = it.next(yield toArrayBufferView(ArrayCtor, r));
    } while (!r.done);
  }(buffers[Symbol.iterator]()));
  return new ArrayCtor();
}
var toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
var toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
var toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
var toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
var toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
var toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
var toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
var toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
var toUint8ClampedArrayIterator = (input) => toArrayBufferViewIterator(Uint8ClampedArray, input);
async function* toArrayBufferViewAsyncIterator(ArrayCtor, source) {
  if (isPromise(source)) {
    return yield* toArrayBufferViewAsyncIterator(ArrayCtor, await source);
  }
  const wrap = async function* (x2) {
    yield await x2;
  };
  const emit = async function* (source2) {
    yield* pump(function* (it) {
      let r = null;
      do {
        r = it.next(yield r?.value);
      } while (!r.done);
    }(source2[Symbol.iterator]()));
  };
  const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : isIterable(source) ? emit(source) : !isAsyncIterable(source) ? wrap(source) : source;
  yield* pump(async function* (it) {
    let r = null;
    do {
      r = await it.next(yield toArrayBufferView(ArrayCtor, r));
    } while (!r.done);
  }(buffers[Symbol.asyncIterator]()));
  return new ArrayCtor();
}
var toInt8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int8Array, input);
var toInt16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int16Array, input);
var toInt32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int32Array, input);
var toUint8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8Array, input);
var toUint16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint16Array, input);
var toUint32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint32Array, input);
var toFloat32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float32Array, input);
var toFloat64ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float64Array, input);
var toUint8ClampedArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
function rebaseValueOffsets(offset, length, valueOffsets) {
  if (offset !== 0) {
    valueOffsets = valueOffsets.slice(0, length + 1);
    for (let i = -1; ++i <= length; ) {
      valueOffsets[i] += offset;
    }
  }
  return valueOffsets;
}
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

// node_modules/@apache-arrow/esnext-esm/io/adapters.js
var adapters_default = {
  fromIterable(source) {
    return pump2(fromIterable(source));
  },
  fromAsyncIterable(source) {
    return pump2(fromAsyncIterable(source));
  },
  fromDOMStream(source) {
    return pump2(fromDOMStream(source));
  },
  fromNodeStream(stream) {
    return pump2(fromNodeStream(stream));
  },
  toDOMStream(source, options) {
    throw new Error(`"toDOMStream" not available in this environment`);
  },
  toNodeStream(source, options) {
    throw new Error(`"toNodeStream" not available in this environment`);
  }
};
var pump2 = (iterator) => {
  iterator.next();
  return iterator;
};
function* fromIterable(source) {
  let done, threw = false;
  let buffers = [], buffer;
  let cmd, size, bufferLength = 0;
  function byteRange() {
    if (cmd === "peek") {
      return joinUint8Arrays(buffers, size)[0];
    }
    [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
    return buffer;
  }
  ({ cmd, size } = yield null);
  const it = toUint8ArrayIterator(source)[Symbol.iterator]();
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
async function* fromAsyncIterable(source) {
  let done, threw = false;
  let buffers = [], buffer;
  let cmd, size, bufferLength = 0;
  function byteRange() {
    if (cmd === "peek") {
      return joinUint8Arrays(buffers, size)[0];
    }
    [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
    return buffer;
  }
  ({ cmd, size } = yield null);
  const it = toUint8ArrayAsyncIterator(source)[Symbol.asyncIterator]();
  try {
    do {
      ({ done, value: buffer } = isNaN(size - bufferLength) ? await it.next(void 0) : await it.next(size - bufferLength));
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
    (threw = true) && typeof it.throw === "function" && await it.throw(e);
  } finally {
    threw === false && typeof it.return === "function" && await it.return(new Uint8Array(0));
  }
  return null;
}
async function* fromDOMStream(source) {
  let done = false, threw = false;
  let buffers = [], buffer;
  let cmd, size, bufferLength = 0;
  function byteRange() {
    if (cmd === "peek") {
      return joinUint8Arrays(buffers, size)[0];
    }
    [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
    return buffer;
  }
  ({ cmd, size } = yield null);
  const it = new AdaptiveByteReader(source);
  try {
    do {
      ({ done, value: buffer } = isNaN(size - bufferLength) ? await it["read"](void 0) : await it["read"](size - bufferLength));
      if (!done && buffer.byteLength > 0) {
        buffers.push(toUint8Array(buffer));
        bufferLength += buffer.byteLength;
      }
      if (done || size <= bufferLength) {
        do {
          ({ cmd, size } = yield byteRange());
        } while (size < bufferLength);
      }
    } while (!done);
  } catch (e) {
    (threw = true) && await it["cancel"](e);
  } finally {
    threw === false ? await it["cancel"]() : source["locked"] && it.releaseLock();
  }
  return null;
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
  async cancel(reason) {
    const { reader, source } = this;
    reader && await reader["cancel"](reason).catch(() => {
    });
    source && (source["locked"] && this.releaseLock());
  }
  async read(size) {
    if (size === 0) {
      return { done: this.reader == null, value: new Uint8Array(0) };
    }
    const result = !this.supportsBYOB || typeof size !== "number" ? await this.getDefaultReader().read() : await this.readFromBYOBReader(size);
    !result.done && (result.value = toUint8Array(result));
    return result;
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
  async readFromBYOBReader(size) {
    return await readInto(this.getBYOBReader(), new ArrayBuffer(size), 0, size);
  }
};
async function readInto(reader, buffer, offset, size) {
  if (offset >= size) {
    return { done: false, value: new Uint8Array(buffer, 0, size) };
  }
  const { done, value: value2 } = await reader.read(new Uint8Array(buffer, offset, size - offset));
  if ((offset += value2.byteLength) < size && !done) {
    return await readInto(reader, value2.buffer, offset, size);
  }
  return { done, value: new Uint8Array(value2.buffer, 0, offset) };
}
var onEvent = (stream, event) => {
  const handler = (_) => resolve([event, _]);
  let resolve;
  return [event, handler, new Promise((r) => (resolve = r) && stream["once"](event, handler))];
};
async function* fromNodeStream(stream) {
  const events = [];
  let event = "error";
  let done = false, err = null;
  let cmd, size, bufferLength = 0;
  let buffers = [], buffer;
  function byteRange() {
    if (cmd === "peek") {
      return joinUint8Arrays(buffers, size)[0];
    }
    [buffer, buffers, bufferLength] = joinUint8Arrays(buffers, size);
    return buffer;
  }
  ({ cmd, size } = yield null);
  if (stream["isTTY"]) {
    yield new Uint8Array(0);
    return null;
  }
  try {
    events[0] = onEvent(stream, "end");
    events[1] = onEvent(stream, "error");
    do {
      events[2] = onEvent(stream, "readable");
      [event, err] = await Promise.race(events.map((x2) => x2[2]));
      if (event === "error") {
        break;
      }
      if (!(done = event === "end")) {
        if (!isFinite(size - bufferLength)) {
          buffer = toUint8Array(stream["read"](void 0));
        } else {
          buffer = toUint8Array(stream["read"](size - bufferLength));
          if (buffer.byteLength < size - bufferLength) {
            buffer = toUint8Array(stream["read"](void 0));
          }
        }
        if (buffer.byteLength > 0) {
          buffers.push(buffer);
          bufferLength += buffer.byteLength;
        }
      }
      if (done || size <= bufferLength) {
        do {
          ({ cmd, size } = yield byteRange());
        } while (size < bufferLength);
      }
    } while (!done);
  } finally {
    await cleanup(events, event === "error" ? err : null);
  }
  return null;
  function cleanup(events2, err2) {
    buffer = buffers = null;
    return new Promise((resolve, reject) => {
      for (const [evt, fn2] of events2) {
        stream["off"](evt, fn2);
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
}

// node_modules/@apache-arrow/esnext-esm/vector.js
var AbstractVector = class {
};
AbstractVector.prototype.data = null;

// node_modules/@apache-arrow/esnext-esm/fb/Schema.js
var MetadataVersion;
(function(MetadataVersion2) {
  MetadataVersion2[MetadataVersion2["V1"] = 0] = "V1";
  MetadataVersion2[MetadataVersion2["V2"] = 1] = "V2";
  MetadataVersion2[MetadataVersion2["V3"] = 2] = "V3";
  MetadataVersion2[MetadataVersion2["V4"] = 3] = "V4";
  MetadataVersion2[MetadataVersion2["V5"] = 4] = "V5";
})(MetadataVersion || (MetadataVersion = {}));
var Feature;
(function(Feature2) {
  Feature2[Feature2["UNUSED"] = 0] = "UNUSED";
  Feature2[Feature2["DICTIONARY_REPLACEMENT"] = 1] = "DICTIONARY_REPLACEMENT";
  Feature2[Feature2["COMPRESSED_BODY"] = 2] = "COMPRESSED_BODY";
})(Feature || (Feature = {}));
var UnionMode;
(function(UnionMode2) {
  UnionMode2[UnionMode2["Sparse"] = 0] = "Sparse";
  UnionMode2[UnionMode2["Dense"] = 1] = "Dense";
})(UnionMode || (UnionMode = {}));
var Precision;
(function(Precision2) {
  Precision2[Precision2["HALF"] = 0] = "HALF";
  Precision2[Precision2["SINGLE"] = 1] = "SINGLE";
  Precision2[Precision2["DOUBLE"] = 2] = "DOUBLE";
})(Precision || (Precision = {}));
var DateUnit;
(function(DateUnit2) {
  DateUnit2[DateUnit2["DAY"] = 0] = "DAY";
  DateUnit2[DateUnit2["MILLISECOND"] = 1] = "MILLISECOND";
})(DateUnit || (DateUnit = {}));
var TimeUnit;
(function(TimeUnit2) {
  TimeUnit2[TimeUnit2["SECOND"] = 0] = "SECOND";
  TimeUnit2[TimeUnit2["MILLISECOND"] = 1] = "MILLISECOND";
  TimeUnit2[TimeUnit2["MICROSECOND"] = 2] = "MICROSECOND";
  TimeUnit2[TimeUnit2["NANOSECOND"] = 3] = "NANOSECOND";
})(TimeUnit || (TimeUnit = {}));
var IntervalUnit;
(function(IntervalUnit2) {
  IntervalUnit2[IntervalUnit2["YEAR_MONTH"] = 0] = "YEAR_MONTH";
  IntervalUnit2[IntervalUnit2["DAY_TIME"] = 1] = "DAY_TIME";
})(IntervalUnit || (IntervalUnit = {}));
var Type;
(function(Type3) {
  Type3[Type3["NONE"] = 0] = "NONE";
  Type3[Type3["Null"] = 1] = "Null";
  Type3[Type3["Int"] = 2] = "Int";
  Type3[Type3["FloatingPoint"] = 3] = "FloatingPoint";
  Type3[Type3["Binary"] = 4] = "Binary";
  Type3[Type3["Utf8"] = 5] = "Utf8";
  Type3[Type3["Bool"] = 6] = "Bool";
  Type3[Type3["Decimal"] = 7] = "Decimal";
  Type3[Type3["Date"] = 8] = "Date";
  Type3[Type3["Time"] = 9] = "Time";
  Type3[Type3["Timestamp"] = 10] = "Timestamp";
  Type3[Type3["Interval"] = 11] = "Interval";
  Type3[Type3["List"] = 12] = "List";
  Type3[Type3["Struct_"] = 13] = "Struct_";
  Type3[Type3["Union"] = 14] = "Union";
  Type3[Type3["FixedSizeBinary"] = 15] = "FixedSizeBinary";
  Type3[Type3["FixedSizeList"] = 16] = "FixedSizeList";
  Type3[Type3["Map"] = 17] = "Map";
  Type3[Type3["Duration"] = 18] = "Duration";
  Type3[Type3["LargeBinary"] = 19] = "LargeBinary";
  Type3[Type3["LargeUtf8"] = 20] = "LargeUtf8";
  Type3[Type3["LargeList"] = 21] = "LargeList";
})(Type || (Type = {}));
var DictionaryKind;
(function(DictionaryKind2) {
  DictionaryKind2[DictionaryKind2["DenseArray"] = 0] = "DenseArray";
})(DictionaryKind || (DictionaryKind = {}));
var Endianness;
(function(Endianness2) {
  Endianness2[Endianness2["Little"] = 0] = "Little";
  Endianness2[Endianness2["Big"] = 1] = "Big";
})(Endianness || (Endianness = {}));
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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

// node_modules/@apache-arrow/esnext-esm/fb/Message.js
var CompressionType;
(function(CompressionType2) {
  CompressionType2[CompressionType2["LZ4_FRAME"] = 0] = "LZ4_FRAME";
  CompressionType2[CompressionType2["ZSTD"] = 1] = "ZSTD";
})(CompressionType || (CompressionType = {}));
var BodyCompressionMethod;
(function(BodyCompressionMethod2) {
  BodyCompressionMethod2[BodyCompressionMethod2["BUFFER"] = 0] = "BUFFER";
})(BodyCompressionMethod || (BodyCompressionMethod = {}));
var MessageHeader;
(function(MessageHeader2) {
  MessageHeader2[MessageHeader2["NONE"] = 0] = "NONE";
  MessageHeader2[MessageHeader2["Schema"] = 1] = "Schema";
  MessageHeader2[MessageHeader2["DictionaryBatch"] = 2] = "DictionaryBatch";
  MessageHeader2[MessageHeader2["RecordBatch"] = 3] = "RecordBatch";
  MessageHeader2[MessageHeader2["Tensor"] = 4] = "Tensor";
  MessageHeader2[MessageHeader2["SparseTensor"] = 5] = "SparseTensor";
})(MessageHeader || (MessageHeader = {}));
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    return offset ? (obj || new Buffer2()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  version() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : MetadataVersion.V1;
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
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startMessage(builder) {
    builder.startObject(5);
  }
  static addVersion(builder, version) {
    builder.addFieldInt16(0, version, MetadataVersion.V1);
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

// node_modules/@apache-arrow/esnext-esm/enum.js
var Type2;
(function(Type3) {
  Type3[Type3["NONE"] = 0] = "NONE";
  Type3[Type3["Null"] = 1] = "Null";
  Type3[Type3["Int"] = 2] = "Int";
  Type3[Type3["Float"] = 3] = "Float";
  Type3[Type3["Binary"] = 4] = "Binary";
  Type3[Type3["Utf8"] = 5] = "Utf8";
  Type3[Type3["Bool"] = 6] = "Bool";
  Type3[Type3["Decimal"] = 7] = "Decimal";
  Type3[Type3["Date"] = 8] = "Date";
  Type3[Type3["Time"] = 9] = "Time";
  Type3[Type3["Timestamp"] = 10] = "Timestamp";
  Type3[Type3["Interval"] = 11] = "Interval";
  Type3[Type3["List"] = 12] = "List";
  Type3[Type3["Struct"] = 13] = "Struct";
  Type3[Type3["Union"] = 14] = "Union";
  Type3[Type3["FixedSizeBinary"] = 15] = "FixedSizeBinary";
  Type3[Type3["FixedSizeList"] = 16] = "FixedSizeList";
  Type3[Type3["Map"] = 17] = "Map";
  Type3[Type3["Dictionary"] = -1] = "Dictionary";
  Type3[Type3["Int8"] = -2] = "Int8";
  Type3[Type3["Int16"] = -3] = "Int16";
  Type3[Type3["Int32"] = -4] = "Int32";
  Type3[Type3["Int64"] = -5] = "Int64";
  Type3[Type3["Uint8"] = -6] = "Uint8";
  Type3[Type3["Uint16"] = -7] = "Uint16";
  Type3[Type3["Uint32"] = -8] = "Uint32";
  Type3[Type3["Uint64"] = -9] = "Uint64";
  Type3[Type3["Float16"] = -10] = "Float16";
  Type3[Type3["Float32"] = -11] = "Float32";
  Type3[Type3["Float64"] = -12] = "Float64";
  Type3[Type3["DateDay"] = -13] = "DateDay";
  Type3[Type3["DateMillisecond"] = -14] = "DateMillisecond";
  Type3[Type3["TimestampSecond"] = -15] = "TimestampSecond";
  Type3[Type3["TimestampMillisecond"] = -16] = "TimestampMillisecond";
  Type3[Type3["TimestampMicrosecond"] = -17] = "TimestampMicrosecond";
  Type3[Type3["TimestampNanosecond"] = -18] = "TimestampNanosecond";
  Type3[Type3["TimeSecond"] = -19] = "TimeSecond";
  Type3[Type3["TimeMillisecond"] = -20] = "TimeMillisecond";
  Type3[Type3["TimeMicrosecond"] = -21] = "TimeMicrosecond";
  Type3[Type3["TimeNanosecond"] = -22] = "TimeNanosecond";
  Type3[Type3["DenseUnion"] = -23] = "DenseUnion";
  Type3[Type3["SparseUnion"] = -24] = "SparseUnion";
  Type3[Type3["IntervalDayTime"] = -25] = "IntervalDayTime";
  Type3[Type3["IntervalYearMonth"] = -26] = "IntervalYearMonth";
})(Type2 || (Type2 = {}));
var BufferType;
(function(BufferType2) {
  BufferType2[BufferType2["OFFSET"] = 0] = "OFFSET";
  BufferType2[BufferType2["DATA"] = 1] = "DATA";
  BufferType2[BufferType2["VALIDITY"] = 2] = "VALIDITY";
  BufferType2[BufferType2["TYPE"] = 3] = "TYPE";
})(BufferType || (BufferType = {}));

// node_modules/@apache-arrow/esnext-esm/util/bit.js
var bit_exports = {};
__export(bit_exports, {
  BitIterator: () => BitIterator,
  getBit: () => getBit,
  getBool: () => getBool,
  packBools: () => packBools,
  popcnt_array: () => popcnt_array,
  popcnt_bit_range: () => popcnt_bit_range,
  popcnt_uint32: () => popcnt_uint32,
  setBool: () => setBool,
  truncateBitmap: () => truncateBitmap
});
function getBool(_data, _index, byte, bit) {
  return (byte & 1 << bit) !== 0;
}
function getBit(_data, _index, byte, bit) {
  return (byte & 1 << bit) >> bit;
}
function setBool(bytes, index, value2) {
  return value2 ? !!(bytes[index >> 3] |= 1 << index % 8) || true : !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
}
function truncateBitmap(offset, length, bitmap) {
  const alignedSize = bitmap.byteLength + 7 & ~7;
  if (offset > 0 || bitmap.byteLength < alignedSize) {
    const bytes = new Uint8Array(alignedSize);
    bytes.set(offset % 8 === 0 ? bitmap.subarray(offset >> 3) : packBools(new BitIterator(bitmap, offset, length, null, getBool)).subarray(0, alignedSize));
    return bytes;
  }
  return bitmap;
}
function packBools(values) {
  const xs = [];
  let i = 0, bit = 0, byte = 0;
  for (const value2 of values) {
    value2 && (byte |= 1 << bit);
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
function popcnt_bit_range(data, lhs, rhs) {
  if (rhs - lhs <= 0) {
    return 0;
  }
  if (rhs - lhs < 8) {
    let sum2 = 0;
    for (const bit of new BitIterator(data, lhs, rhs - lhs, data, getBit)) {
      sum2 += bit;
    }
    return sum2;
  }
  const rhsInside = rhs >> 3 << 3;
  const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
  return popcnt_bit_range(data, lhs, lhsInside) + popcnt_bit_range(data, rhsInside, rhs) + popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3);
}
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
function popcnt_uint32(uint32) {
  let i = uint32 | 0;
  i = i - (i >>> 1 & 1431655765);
  i = (i & 858993459) + (i >>> 2 & 858993459);
  return (i + (i >>> 4) & 252645135) * 16843009 >>> 24;
}

// node_modules/@apache-arrow/esnext-esm/type.js
var DataType = class {
  static isNull(x2) {
    return x2?.typeId === Type2.Null;
  }
  static isInt(x2) {
    return x2?.typeId === Type2.Int;
  }
  static isFloat(x2) {
    return x2?.typeId === Type2.Float;
  }
  static isBinary(x2) {
    return x2?.typeId === Type2.Binary;
  }
  static isUtf8(x2) {
    return x2?.typeId === Type2.Utf8;
  }
  static isBool(x2) {
    return x2?.typeId === Type2.Bool;
  }
  static isDecimal(x2) {
    return x2?.typeId === Type2.Decimal;
  }
  static isDate(x2) {
    return x2?.typeId === Type2.Date;
  }
  static isTime(x2) {
    return x2?.typeId === Type2.Time;
  }
  static isTimestamp(x2) {
    return x2?.typeId === Type2.Timestamp;
  }
  static isInterval(x2) {
    return x2?.typeId === Type2.Interval;
  }
  static isList(x2) {
    return x2?.typeId === Type2.List;
  }
  static isStruct(x2) {
    return x2?.typeId === Type2.Struct;
  }
  static isUnion(x2) {
    return x2?.typeId === Type2.Union;
  }
  static isFixedSizeBinary(x2) {
    return x2?.typeId === Type2.FixedSizeBinary;
  }
  static isFixedSizeList(x2) {
    return x2?.typeId === Type2.FixedSizeList;
  }
  static isMap(x2) {
    return x2?.typeId === Type2.Map;
  }
  static isDictionary(x2) {
    return x2?.typeId === Type2.Dictionary;
  }
  get typeId() {
    return Type2.NONE;
  }
};
DataType[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  proto.ArrayType = Array;
  return proto[Symbol.toStringTag] = "DataType";
})(DataType.prototype);
var Null2 = class extends DataType {
  toString() {
    return `Null`;
  }
  get typeId() {
    return Type2.Null;
  }
};
Null2[Symbol.toStringTag] = ((proto) => {
  return proto[Symbol.toStringTag] = "Null";
})(Null2.prototype);
var Int_ = class extends DataType {
  constructor(isSigned, bitWidth) {
    super();
    this.isSigned = isSigned;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type2.Int;
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
var Int16 = class extends Int_ {
  constructor() {
    super(true, 16);
  }
};
var Int32 = class extends Int_ {
  constructor() {
    super(true, 32);
  }
};
var Int64 = class extends Int_ {
  constructor() {
    super(true, 64);
  }
};
var Uint8 = class extends Int_ {
  constructor() {
    super(false, 8);
  }
};
var Uint16 = class extends Int_ {
  constructor() {
    super(false, 16);
  }
};
var Uint32 = class extends Int_ {
  constructor() {
    super(false, 32);
  }
};
var Uint64 = class extends Int_ {
  constructor() {
    super(false, 64);
  }
};
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
    return Type2.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Precision.HALF:
        return Uint16Array;
      case Precision.SINGLE:
        return Float32Array;
      case Precision.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
};
Float[Symbol.toStringTag] = ((proto) => {
  proto.precision = null;
  return proto[Symbol.toStringTag] = "Float";
})(Float.prototype);
var Float16 = class extends Float {
  constructor() {
    super(Precision.HALF);
  }
};
var Float32 = class extends Float {
  constructor() {
    super(Precision.SINGLE);
  }
};
var Float64 = class extends Float {
  constructor() {
    super(Precision.DOUBLE);
  }
};
Object.defineProperty(Float16.prototype, "ArrayType", { value: Uint16Array });
Object.defineProperty(Float32.prototype, "ArrayType", { value: Float32Array });
Object.defineProperty(Float64.prototype, "ArrayType", { value: Float64Array });
var Binary2 = class extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type2.Binary;
  }
  toString() {
    return `Binary`;
  }
};
Binary2[Symbol.toStringTag] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Binary";
})(Binary2.prototype);
var Utf82 = class extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type2.Utf8;
  }
  toString() {
    return `Utf8`;
  }
};
Utf82[Symbol.toStringTag] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Utf8";
})(Utf82.prototype);
var Bool2 = class extends DataType {
  constructor() {
    super();
  }
  get typeId() {
    return Type2.Bool;
  }
  toString() {
    return `Bool`;
  }
};
Bool2[Symbol.toStringTag] = ((proto) => {
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "Bool";
})(Bool2.prototype);
var Decimal2 = class extends DataType {
  constructor(scale, precision) {
    super();
    this.scale = scale;
    this.precision = precision;
  }
  get typeId() {
    return Type2.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`;
  }
};
Decimal2[Symbol.toStringTag] = ((proto) => {
  proto.scale = null;
  proto.precision = null;
  proto.ArrayType = Uint32Array;
  return proto[Symbol.toStringTag] = "Decimal";
})(Decimal2.prototype);
var Date_ = class extends DataType {
  constructor(unit) {
    super();
    this.unit = unit;
  }
  get typeId() {
    return Type2.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${DateUnit[this.unit]}>`;
  }
};
Date_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Date";
})(Date_.prototype);
var DateDay = class extends Date_ {
  constructor() {
    super(DateUnit.DAY);
  }
};
var DateMillisecond = class extends Date_ {
  constructor() {
    super(DateUnit.MILLISECOND);
  }
};
var Time_ = class extends DataType {
  constructor(unit, bitWidth) {
    super();
    this.unit = unit;
    this.bitWidth = bitWidth;
  }
  get typeId() {
    return Type2.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${TimeUnit[this.unit]}>`;
  }
};
Time_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.bitWidth = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Time";
})(Time_.prototype);
var Timestamp_ = class extends DataType {
  constructor(unit, timezone) {
    super();
    this.unit = unit;
    this.timezone = timezone;
  }
  get typeId() {
    return Type2.Timestamp;
  }
  toString() {
    return `Timestamp<${TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`;
  }
};
Timestamp_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.timezone = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Timestamp";
})(Timestamp_.prototype);
var Interval_ = class extends DataType {
  constructor(unit) {
    super();
    this.unit = unit;
  }
  get typeId() {
    return Type2.Interval;
  }
  toString() {
    return `Interval<${IntervalUnit[this.unit]}>`;
  }
};
Interval_[Symbol.toStringTag] = ((proto) => {
  proto.unit = null;
  proto.ArrayType = Int32Array;
  return proto[Symbol.toStringTag] = "Interval";
})(Interval_.prototype);
var List2 = class extends DataType {
  constructor(child) {
    super();
    this.children = [child];
  }
  get typeId() {
    return Type2.List;
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
List2[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  return proto[Symbol.toStringTag] = "List";
})(List2.prototype);
var Struct = class extends DataType {
  constructor(children) {
    super();
    this.children = children;
  }
  get typeId() {
    return Type2.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
  }
};
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
    return Type2.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((x2) => `${x2.type}`).join(` | `)}>`;
  }
};
Union_[Symbol.toStringTag] = ((proto) => {
  proto.mode = null;
  proto.typeIds = null;
  proto.children = null;
  proto.typeIdToChildIndex = null;
  proto.ArrayType = Int8Array;
  return proto[Symbol.toStringTag] = "Union";
})(Union_.prototype);
var FixedSizeBinary2 = class extends DataType {
  constructor(byteWidth) {
    super();
    this.byteWidth = byteWidth;
  }
  get typeId() {
    return Type2.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
};
FixedSizeBinary2[Symbol.toStringTag] = ((proto) => {
  proto.byteWidth = null;
  proto.ArrayType = Uint8Array;
  return proto[Symbol.toStringTag] = "FixedSizeBinary";
})(FixedSizeBinary2.prototype);
var FixedSizeList2 = class extends DataType {
  constructor(listSize, child) {
    super();
    this.listSize = listSize;
    this.children = [child];
  }
  get typeId() {
    return Type2.FixedSizeList;
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
FixedSizeList2[Symbol.toStringTag] = ((proto) => {
  proto.children = null;
  proto.listSize = null;
  return proto[Symbol.toStringTag] = "FixedSizeList";
})(FixedSizeList2.prototype);
var Map_ = class extends DataType {
  constructor(child, keysSorted = false) {
    super();
    this.children = [child];
    this.keysSorted = keysSorted;
  }
  get typeId() {
    return Type2.Map;
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
    return Type2.Dictionary;
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
    case Type2.Decimal:
      return 4;
    case Type2.Timestamp:
      return 2;
    case Type2.Date:
      return 1 + t.unit;
    case Type2.Interval:
      return 1 + t.unit;
    case Type2.Int:
      return 1 + +(t.bitWidth > 32);
    case Type2.Time:
      return 1 + +(t.bitWidth > 32);
    case Type2.FixedSizeList:
      return t.listSize;
    case Type2.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}

// node_modules/@apache-arrow/esnext-esm/data.js
var kUnknownNullCount = -1;
var Data = class {
  constructor(type, offset, length, nullCount, buffers, childData, dictionary) {
    this.type = type;
    this.dictionary = dictionary;
    this.offset = Math.floor(Math.max(offset || 0, 0));
    this.length = Math.floor(Math.max(length || 0, 0));
    this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
    this.childData = (childData || []).map((x2) => x2 instanceof Data ? x2 : x2.data);
    let buffer;
    if (buffers instanceof Data) {
      this.stride = buffers.stride;
      this.values = buffers.values;
      this.typeIds = buffers.typeIds;
      this.nullBitmap = buffers.nullBitmap;
      this.valueOffsets = buffers.valueOffsets;
    } else {
      this.stride = strideForType(type);
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
    if (nullCount <= kUnknownNullCount && (nullBitmap = this.nullBitmap)) {
      this._nullCount = nullCount = this.length - popcnt_bit_range(nullBitmap, this.offset, this.offset + this.length);
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
    if (this.typeId === Type2.Null) {
      return this.clone(this.type, 0, newLength, 0);
    }
    const { length, nullCount } = this;
    const bitmap = new Uint8Array((newLength + 63 & ~63) >> 3).fill(255, 0, length >> 3);
    bitmap[length >> 3] = (1 << length - (length & ~7)) - 1;
    if (nullCount > 0) {
      bitmap.set(truncateBitmap(this.offset, length, this.nullBitmap), 0);
    }
    const buffers = this.buffers;
    buffers[BufferType.VALIDITY] = bitmap;
    return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
  }
  _sliceBuffers(offset, length, stride, typeId) {
    let arr;
    const { buffers } = this;
    (arr = buffers[BufferType.TYPE]) && (buffers[BufferType.TYPE] = arr.subarray(offset, offset + length));
    (arr = buffers[BufferType.OFFSET]) && (buffers[BufferType.OFFSET] = arr.subarray(offset, offset + length + 1)) || (arr = buffers[BufferType.DATA]) && (buffers[BufferType.DATA] = typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length)));
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
      case Type2.Null:
        return Data.Null(type, offset, length);
      case Type2.Int:
        return Data.Int(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Dictionary:
        return Data.Dictionary(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || [], dictionary);
      case Type2.Float:
        return Data.Float(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Bool:
        return Data.Bool(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Decimal:
        return Data.Decimal(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Date:
        return Data.Date(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Time:
        return Data.Time(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Timestamp:
        return Data.Timestamp(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Interval:
        return Data.Interval(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.FixedSizeBinary:
        return Data.FixedSizeBinary(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.DATA] || []);
      case Type2.Binary:
        return Data.Binary(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], buffers[BufferType.DATA] || []);
      case Type2.Utf8:
        return Data.Utf8(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], buffers[BufferType.DATA] || []);
      case Type2.List:
        return Data.List(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], (childData || [])[0]);
      case Type2.FixedSizeList:
        return Data.FixedSizeList(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], (childData || [])[0]);
      case Type2.Struct:
        return Data.Struct(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], childData || []);
      case Type2.Map:
        return Data.Map(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.OFFSET] || [], (childData || [])[0]);
      case Type2.Union:
        return Data.Union(type, offset, length, nullCount || 0, buffers[BufferType.VALIDITY], buffers[BufferType.TYPE] || [], buffers[BufferType.OFFSET] || childData, childData);
    }
    throw new Error(`Unrecognized typeId ${type.typeId}`);
  }
  static Null(type, offset, length) {
    return new Data(type, offset, length, 0);
  }
  static Int(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Dictionary(type, offset, length, nullCount, nullBitmap, data, dictionary) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.indices.ArrayType, data), toUint8Array(nullBitmap)], [], dictionary);
  }
  static Float(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Bool(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Decimal(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Date(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Time(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Timestamp(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Interval(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static FixedSizeBinary(type, offset, length, nullCount, nullBitmap, data) {
    return new Data(type, offset, length, nullCount, [void 0, toArrayBufferView(type.ArrayType, data), toUint8Array(nullBitmap)]);
  }
  static Binary(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), toUint8Array(data), toUint8Array(nullBitmap)]);
  }
  static Utf8(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), toUint8Array(data), toUint8Array(nullBitmap)]);
  }
  static List(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), void 0, toUint8Array(nullBitmap)], child ? [child] : []);
  }
  static FixedSizeList(type, offset, length, nullCount, nullBitmap, child) {
    return new Data(type, offset, length, nullCount, [void 0, void 0, toUint8Array(nullBitmap)], child ? [child] : []);
  }
  static Struct(type, offset, length, nullCount, nullBitmap, children) {
    return new Data(type, offset, length, nullCount, [void 0, void 0, toUint8Array(nullBitmap)], children);
  }
  static Map(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
    return new Data(type, offset, length, nullCount, [toInt32Array(valueOffsets), void 0, toUint8Array(nullBitmap)], child ? [child] : []);
  }
  static Union(type, offset, length, nullCount, nullBitmap, typeIds, valueOffsetsOrChildren, children) {
    const buffers = [
      void 0,
      void 0,
      toUint8Array(nullBitmap),
      toArrayBufferView(type.ArrayType, typeIds)
    ];
    if (type.mode === UnionMode.Sparse) {
      return new Data(type, offset, length, nullCount, buffers, valueOffsetsOrChildren);
    }
    buffers[BufferType.OFFSET] = toInt32Array(valueOffsetsOrChildren);
    return new Data(type, offset, length, nullCount, buffers, children);
  }
};
Data.prototype.childData = Object.freeze([]);

// node_modules/@apache-arrow/esnext-esm/util/pretty.js
var undf = void 0;
function valueToString(x2) {
  if (x2 === null) {
    return "null";
  }
  if (x2 === undf) {
    return "undefined";
  }
  switch (typeof x2) {
    case "number":
      return `${x2}`;
    case "bigint":
      return `${x2}`;
    case "string":
      return `"${x2}"`;
  }
  if (typeof x2[Symbol.toPrimitive] === "function") {
    return x2[Symbol.toPrimitive]("string");
  }
  return ArrayBuffer.isView(x2) ? `[${x2}]` : JSON.stringify(x2);
}

// node_modules/@apache-arrow/esnext-esm/builder/valid.js
function createIsValidFunction(nullValues) {
  if (!nullValues || nullValues.length <= 0) {
    return function isValid(value2) {
      return true;
    };
  }
  let fnBody = "";
  const noNaNs = nullValues.filter((x2) => x2 === x2);
  if (noNaNs.length > 0) {
    fnBody = `
    switch (x) {${noNaNs.map((x2) => `
        case ${valueToCase(x2)}:`).join("")}
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
function valueToCase(x2) {
  if (typeof x2 !== "bigint") {
    return valueToString(x2);
  } else if (BigIntAvailable) {
    return `${valueToString(x2)}n`;
  }
  return `"${valueToString(x2)}"`;
}

// node_modules/@apache-arrow/esnext-esm/builder/buffer.js
var roundLengthUpToNearest64Bytes = (len, BPE) => (len * BPE + 63 & ~63 || 64) / BPE;
var sliceOrExtendArray = (arr, len = 0) => arr.length >= len ? arr.subarray(0, len) : memcpy(new arr.constructor(len), arr, 0);
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
  set(index, value2) {
    return this;
  }
  append(value2) {
    return this.set(this.length, value2);
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
    return this.buffer = memcpy(new this.ArrayType(newLength), this.buffer);
  }
};
BufferBuilder.prototype.offset = 0;
var DataBufferBuilder = class extends BufferBuilder {
  last() {
    return this.get(this.length - 1);
  }
  get(index) {
    return this.buffer[index];
  }
  set(index, value2) {
    this.reserve(index - this.length + 1);
    this.buffer[index * this.stride] = value2;
    return this;
  }
};
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
var OffsetsBufferBuilder = class extends DataBufferBuilder {
  constructor(data = new Int32Array(1)) {
    super(data, 1);
  }
  append(value2) {
    return this.set(this.length - 1, value2);
  }
  set(index, value2) {
    const offset = this.length - 1;
    const buffer = this.reserve(index - offset + 1).buffer;
    if (offset < index++) {
      buffer.fill(buffer[offset], offset, index);
    }
    buffer[index] = buffer[index - 1] + value2;
    return this;
  }
  flush(length = this.length - 1) {
    if (length > this.length) {
      this.set(length - 1, 0);
    }
    return super.flush(length + 1);
  }
};
var WideBufferBuilder = class extends BufferBuilder {
  get ArrayType64() {
    return this._ArrayType64 || (this._ArrayType64 = this.buffer instanceof Int32Array ? BigInt64ArrayCtor : BigUint64ArrayCtor);
  }
  set(index, value2) {
    this.reserve(index - this.length + 1);
    switch (typeof value2) {
      case "bigint":
        this.buffer64[index] = value2;
        break;
      case "number":
        this.buffer[index * this.stride] = value2;
        break;
      default:
        this.buffer.set(value2, index * this.stride);
    }
    return this;
  }
  _resize(newLength) {
    const data = super._resize(newLength);
    const length = data.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
    if (BigIntAvailable) {
      this.buffer64 = new this.ArrayType64(data.buffer, data.byteOffset, length);
    }
    return data;
  }
};

// node_modules/@apache-arrow/esnext-esm/builder.js
var Builder = class {
  constructor({ "type": type, "nullValues": nulls }) {
    this.length = 0;
    this.finished = false;
    this.type = type;
    this.children = [];
    this.nullValues = nulls;
    this.stride = strideForType(type);
    this._nulls = new BitmapBufferBuilder();
    if (nulls && nulls.length > 0) {
      this._isValid = createIsValidFunction(nulls);
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
    return AbstractVector.new(this.flush());
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
  append(value2) {
    return this.set(this.length, value2);
  }
  isValid(value2) {
    return this._isValid(value2);
  }
  set(index, value2) {
    if (this.setValid(index, this.isValid(value2))) {
      this.setValue(index, value2);
    }
    return this;
  }
  setValue(index, value2) {
    this._setValue(this, index, value2);
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
      buffers[BufferType.TYPE] = typeIds.flush(length);
      offsets && (buffers[BufferType.OFFSET] = offsets.flush(length));
    } else if (offsets) {
      values && (buffers[BufferType.DATA] = values.flush(offsets.last()));
      buffers[BufferType.OFFSET] = offsets.flush(length);
    } else if (values) {
      buffers[BufferType.DATA] = values.flush(length);
    }
    nullCount > 0 && (buffers[BufferType.VALIDITY] = this._nulls.flush(length));
    const data = Data.new(this.type, 0, length, nullCount, buffers, this.children.map((child) => child.flush()));
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
Builder.prototype.length = 1;
Builder.prototype.stride = 1;
Builder.prototype.children = null;
Builder.prototype.finished = false;
Builder.prototype.nullValues = null;
Builder.prototype._isValid = () => true;
var FixedWidthBuilder = class extends Builder {
  constructor(opts) {
    super(opts);
    this._values = new DataBufferBuilder(new this.ArrayType(0), this.stride);
  }
  setValue(index, value2) {
    const values = this._values;
    values.reserve(index - values.length + 1);
    return super.setValue(index, value2);
  }
};
var VariableWidthBuilder = class extends Builder {
  constructor(opts) {
    super(opts);
    this._pendingLength = 0;
    this._offsets = new OffsetsBufferBuilder();
  }
  setValue(index, value2) {
    const pending = this._pending || (this._pending = new Map());
    const current = pending.get(index);
    current && (this._pendingLength -= current.length);
    this._pendingLength += value2.length;
    pending.set(index, value2);
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
function throughIterable(options) {
  const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
  const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? 1e3 : 2 ** 14 } = options;
  const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
  return function* (source) {
    let numChunks = 0;
    const builder = Builder.new(options);
    for (const value2 of source) {
      if (builder.append(value2)[sizeProperty] >= highWaterMark) {
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
  const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? 1e3 : 2 ** 14 } = options;
  const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
  return async function* (source) {
    let numChunks = 0;
    const builder = Builder.new(options);
    for await (const value2 of source) {
      if (builder.append(value2)[sizeProperty] >= highWaterMark) {
        ++numChunks && (yield builder.toVector());
      }
    }
    if (builder.finish().length > 0 || numChunks === 0) {
      yield builder.toVector();
    }
  };
}

// node_modules/@apache-arrow/esnext-esm/builder/bool.js
var BoolBuilder = class extends Builder {
  constructor(options) {
    super(options);
    this._values = new BitmapBufferBuilder();
  }
  setValue(index, value2) {
    this._values.set(index, +value2);
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/null.js
var NullBuilder = class extends Builder {
  setValue(index, value2) {
  }
  setValid(index, valid) {
    this.length = Math.max(index + 1, this.length);
    return valid;
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/date.js
var DateBuilder = class extends FixedWidthBuilder {
};
var DateDayBuilder = class extends DateBuilder {
};
var DateMillisecondBuilder = class extends DateBuilder {
};

// node_modules/@apache-arrow/esnext-esm/builder/decimal.js
var DecimalBuilder = class extends FixedWidthBuilder {
};

// node_modules/@apache-arrow/esnext-esm/builder/dictionary.js
var DictionaryBuilder = class extends Builder {
  constructor({ "type": type, "nullValues": nulls, "dictionaryHashFunction": hashFn }) {
    super({ type: new Dictionary(type.dictionary, type.indices, type.id, type.isOrdered) });
    this._nulls = null;
    this._dictionaryOffset = 0;
    this._keysToIndices = Object.create(null);
    this.indices = Builder.new({ "type": this.type.indices, "nullValues": nulls });
    this.dictionary = Builder.new({ "type": this.type.dictionary, "nullValues": null });
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
  isValid(value2) {
    return this.indices.isValid(value2);
  }
  setValid(index, valid) {
    const indices = this.indices;
    valid = indices.setValid(index, valid);
    this.length = indices.length;
    return valid;
  }
  setValue(index, value2) {
    const keysToIndices = this._keysToIndices;
    const key = this.valueToKey(value2);
    let idx = keysToIndices[key];
    if (idx === void 0) {
      keysToIndices[key] = idx = this._dictionaryOffset + this.dictionary.append(value2).length - 1;
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

// node_modules/@apache-arrow/esnext-esm/builder/fixedsizebinary.js
var FixedSizeBinaryBuilder = class extends FixedWidthBuilder {
};

// node_modules/@apache-arrow/esnext-esm/util/math.js
var math_exports = {};
__export(math_exports, {
  float64ToUint16: () => float64ToUint16,
  uint16ToFloat64: () => uint16ToFloat64
});
var f64 = new Float64Array(1);
var u32 = new Uint32Array(f64.buffer);
function uint16ToFloat64(h) {
  const expo = (h & 31744) >> 10;
  const sigf = (h & 1023) / 1024;
  const sign = (-1) ** ((h & 32768) >> 15);
  switch (expo) {
    case 31:
      return sign * (sigf ? NaN : 1 / 0);
    case 0:
      return sign * (sigf ? 6103515625e-14 * sigf : 0);
  }
  return sign * 2 ** (expo - 15) * (1 + sigf);
}
function float64ToUint16(d) {
  if (d !== d) {
    return 32256;
  }
  f64[0] = d;
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

// node_modules/@apache-arrow/esnext-esm/builder/float.js
var FloatBuilder = class extends FixedWidthBuilder {
};
var Float16Builder = class extends FloatBuilder {
  setValue(index, value2) {
    this._values.set(index, float64ToUint16(value2));
  }
};
var Float32Builder = class extends FloatBuilder {
  setValue(index, value2) {
    this._values.set(index, value2);
  }
};
var Float64Builder = class extends FloatBuilder {
  setValue(index, value2) {
    this._values.set(index, value2);
  }
};

// node_modules/@apache-arrow/esnext-esm/util/bn.js
var bn_exports = {};
__export(bn_exports, {
  BN: () => BN,
  bignumToBigInt: () => bignumToBigInt,
  bignumToString: () => bignumToString,
  isArrowBigNumSymbol: () => isArrowBigNumSymbol
});
var isArrowBigNumSymbol = Symbol.for("isArrowBigNum");
function BigNum(x2, ...xs) {
  if (xs.length === 0) {
    return Object.setPrototypeOf(toArrayBufferView(this["TypedArray"], x2), this.constructor.prototype);
  }
  return Object.setPrototypeOf(new this["TypedArray"](x2, ...xs), this.constructor.prototype);
}
BigNum.prototype[isArrowBigNumSymbol] = true;
BigNum.prototype.toJSON = function() {
  return `"${bignumToString(this)}"`;
};
BigNum.prototype.valueOf = function() {
  return bignumToNumber(this);
};
BigNum.prototype.toString = function() {
  return bignumToString(this);
};
BigNum.prototype[Symbol.toPrimitive] = function(hint = "default") {
  switch (hint) {
    case "number":
      return bignumToNumber(this);
    case "string":
      return bignumToString(this);
    case "default":
      return bignumToBigInt(this);
  }
  return bignumToString(this);
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
Object.assign(SignedBigNum.prototype, BigNum.prototype, { "constructor": SignedBigNum, "signed": true, "TypedArray": Int32Array, "BigIntArray": BigInt64ArrayCtor });
Object.assign(UnsignedBigNum.prototype, BigNum.prototype, { "constructor": UnsignedBigNum, "signed": false, "TypedArray": Uint32Array, "BigIntArray": BigUint64ArrayCtor });
Object.assign(DecimalBigNum.prototype, BigNum.prototype, { "constructor": DecimalBigNum, "signed": true, "TypedArray": Uint32Array, "BigIntArray": BigUint64ArrayCtor });
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
    number += (lo >>> 0) + hi * i ** 32;
  }
  return number;
}
var bignumToString;
var bignumToBigInt;
if (!BigIntAvailable) {
  bignumToString = decimalToString;
  bignumToBigInt = bignumToString;
} else {
  bignumToBigInt = (a) => a.byteLength === 8 ? new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0] : decimalToString(a);
  bignumToString = (a) => a.byteLength === 8 ? `${new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0]}` : decimalToString(a);
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
      case BigInt64ArrayCtor:
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

// node_modules/@apache-arrow/esnext-esm/builder/int.js
var IntBuilder = class extends FixedWidthBuilder {
  setValue(index, value2) {
    this._values.set(index, value2);
  }
};
var Int8Builder = class extends IntBuilder {
};
var Int16Builder = class extends IntBuilder {
};
var Int32Builder = class extends IntBuilder {
};
var Int64Builder = class extends IntBuilder {
  constructor(options) {
    if (options["nullValues"]) {
      options["nullValues"] = options["nullValues"].map(toBigInt);
    }
    super(options);
    this._values = new WideBufferBuilder(new Int32Array(0), 2);
  }
  get values64() {
    return this._values.buffer64;
  }
  isValid(value2) {
    return super.isValid(toBigInt(value2));
  }
};
var Uint8Builder = class extends IntBuilder {
};
var Uint16Builder = class extends IntBuilder {
};
var Uint32Builder = class extends IntBuilder {
};
var Uint64Builder = class extends IntBuilder {
  constructor(options) {
    if (options["nullValues"]) {
      options["nullValues"] = options["nullValues"].map(toBigInt);
    }
    super(options);
    this._values = new WideBufferBuilder(new Uint32Array(0), 2);
  }
  get values64() {
    return this._values.buffer64;
  }
  isValid(value2) {
    return super.isValid(toBigInt(value2));
  }
};
var toBigInt = ((memo) => (value2) => {
  if (ArrayBuffer.isView(value2)) {
    memo.buffer = value2.buffer;
    memo.byteOffset = value2.byteOffset;
    memo.byteLength = value2.byteLength;
    value2 = bignumToBigInt(memo);
    memo.buffer = null;
  }
  return value2;
})({ "BigIntArray": BigInt64ArrayCtor });

// node_modules/@apache-arrow/esnext-esm/builder/time.js
var TimeBuilder = class extends FixedWidthBuilder {
};
var TimeSecondBuilder = class extends TimeBuilder {
};
var TimeMillisecondBuilder = class extends TimeBuilder {
};
var TimeMicrosecondBuilder = class extends TimeBuilder {
};
var TimeNanosecondBuilder = class extends TimeBuilder {
};

// node_modules/@apache-arrow/esnext-esm/builder/timestamp.js
var TimestampBuilder = class extends FixedWidthBuilder {
};
var TimestampSecondBuilder = class extends TimestampBuilder {
};
var TimestampMillisecondBuilder = class extends TimestampBuilder {
};
var TimestampMicrosecondBuilder = class extends TimestampBuilder {
};
var TimestampNanosecondBuilder = class extends TimestampBuilder {
};

// node_modules/@apache-arrow/esnext-esm/builder/interval.js
var IntervalBuilder = class extends FixedWidthBuilder {
};
var IntervalDayTimeBuilder = class extends IntervalBuilder {
};
var IntervalYearMonthBuilder = class extends IntervalBuilder {
};

// node_modules/@apache-arrow/esnext-esm/builder/binary.js
var BinaryBuilder = class extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._values = new BufferBuilder(new Uint8Array(0));
  }
  get byteLength() {
    let size = this._pendingLength + this.length * 4;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    return size;
  }
  setValue(index, value2) {
    return super.setValue(index, toUint8Array(value2));
  }
  _flushPending(pending, pendingLength) {
    const offsets = this._offsets;
    const data = this._values.reserve(pendingLength).buffer;
    let index = 0, length = 0, offset = 0, value2;
    for ([index, value2] of pending) {
      if (value2 === void 0) {
        offsets.set(index, 0);
      } else {
        length = value2.length;
        data.set(value2, offset);
        offsets.set(index, length);
        offset += length;
      }
    }
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/utf8.js
var Utf8Builder = class extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._values = new BufferBuilder(new Uint8Array(0));
  }
  get byteLength() {
    let size = this._pendingLength + this.length * 4;
    this._offsets && (size += this._offsets.byteLength);
    this._values && (size += this._values.byteLength);
    this._nulls && (size += this._nulls.byteLength);
    return size;
  }
  setValue(index, value2) {
    return super.setValue(index, encodeUtf8(value2));
  }
  _flushPending(pending, pendingLength) {
  }
};
Utf8Builder.prototype._flushPending = BinaryBuilder.prototype._flushPending;

// node_modules/@apache-arrow/esnext-esm/builder/run.js
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
    if (values instanceof AbstractVector) {
      return values;
    }
    this._values = values;
    return this;
  }
};

// node_modules/@apache-arrow/esnext-esm/schema.js
var Schema2 = class {
  constructor(fields = [], metadata2, dictionaries) {
    this.fields = fields || [];
    this.metadata = metadata2 || new Map();
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
    const names = columnNames.reduce((xs, x2) => (xs[x2] = true) && xs, Object.create(null));
    return new Schema2(this.fields.filter((f) => names[f.name]), this.metadata);
  }
  selectAt(...columnIndices) {
    return new Schema2(columnIndices.map((i) => this.fields[i]).filter(Boolean), this.metadata);
  }
  assign(...args) {
    const other = args[0] instanceof Schema2 ? args[0] : Array.isArray(args[0]) ? new Schema2(args[0]) : new Schema2(args);
    const curFields = [...this.fields];
    const metadata2 = mergeMaps(mergeMaps(new Map(), this.metadata), other.metadata);
    const newFields = other.fields.filter((f2) => {
      const i = curFields.findIndex((f) => f.name === f2.name);
      return ~i ? (curFields[i] = f2.clone({
        metadata: mergeMaps(mergeMaps(new Map(), curFields[i].metadata), f2.metadata)
      })) && false : true;
    });
    const newDictionaries = generateDictionaryMap(newFields, new Map());
    return new Schema2([...curFields, ...newFields], metadata2, new Map([...this.dictionaries, ...newDictionaries]));
  }
};
var Field2 = class {
  constructor(name, type, nullable = false, metadata2) {
    this.name = name;
    this.type = type;
    this.nullable = nullable;
    this.metadata = metadata2 || new Map();
  }
  static new(...args) {
    let [name, type, nullable, metadata2] = args;
    if (args[0] && typeof args[0] === "object") {
      ({ name } = args[0]);
      type === void 0 && (type = args[0].type);
      nullable === void 0 && (nullable = args[0].nullable);
      metadata2 === void 0 && (metadata2 = args[0].metadata);
    }
    return new Field2(`${name}`, type, nullable, metadata2);
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
    let [name, type, nullable, metadata2] = args;
    !args[0] || typeof args[0] !== "object" ? [name = this.name, type = this.type, nullable = this.nullable, metadata2 = this.metadata] = args : { name = this.name, type = this.type, nullable = this.nullable, metadata: metadata2 = this.metadata } = args[0];
    return Field2.new(name, type, nullable, metadata2);
  }
};
function mergeMaps(m1, m2) {
  return new Map([...m1 || new Map(), ...m2 || new Map()]);
}
function generateDictionaryMap(fields, dictionaries = new Map()) {
  for (let i = -1, n = fields.length; ++i < n; ) {
    const field2 = fields[i];
    const type = field2.type;
    if (DataType.isDictionary(type)) {
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
Schema2.prototype.fields = null;
Schema2.prototype.metadata = null;
Schema2.prototype.dictionaries = null;
Field2.prototype.type = null;
Field2.prototype.name = null;
Field2.prototype.nullable = null;
Field2.prototype.metadata = null;

// node_modules/@apache-arrow/esnext-esm/builder/list.js
var ListBuilder = class extends VariableWidthBuilder {
  constructor(opts) {
    super(opts);
    this._run = new Run();
    this._offsets = new OffsetsBufferBuilder();
  }
  addChild(child, name = "0") {
    if (this.numChildren > 0) {
      throw new Error("ListBuilder can only have one child.");
    }
    this.children[this.numChildren] = child;
    this.type = new List2(new Field2(name, child.type, true));
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
    let index = 0, value2;
    for ([index, value2] of pending) {
      if (value2 === void 0) {
        offsets.set(index, 0);
      } else {
        offsets.set(index, value2.length);
        setValue(this, index, run.bind(value2));
      }
    }
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/fixedsizelist.js
var FixedSizeListBuilder = class extends Builder {
  constructor() {
    super(...arguments);
    this._run = new Run();
  }
  setValue(index, value2) {
    super.setValue(index, this._run.bind(value2));
  }
  addChild(child, name = "0") {
    if (this.numChildren > 0) {
      throw new Error("FixedSizeListBuilder can only have one child.");
    }
    const childIndex = this.children.push(child);
    this.type = new FixedSizeList2(this.type.listSize, new Field2(name, child.type, true));
    return childIndex;
  }
  clear() {
    this._run.clear();
    return super.clear();
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/map.js
var MapBuilder = class extends VariableWidthBuilder {
  set(index, value2) {
    return super.set(index, value2);
  }
  setValue(index, value2) {
    value2 = value2 instanceof Map ? value2 : new Map(Object.entries(value2));
    const pending = this._pending || (this._pending = new Map());
    const current = pending.get(index);
    current && (this._pendingLength -= current.size);
    this._pendingLength += value2.size;
    pending.set(index, value2);
  }
  addChild(child, name = `${this.numChildren}`) {
    if (this.numChildren > 0) {
      throw new Error("ListBuilder can only have one child.");
    }
    this.children[this.numChildren] = child;
    this.type = new Map_(new Field2(name, child.type, true), this.type.keysSorted);
    return this.numChildren - 1;
  }
  _flushPending(pending) {
    const offsets = this._offsets;
    const setValue = this._setValue;
    pending.forEach((value2, index) => {
      if (value2 === void 0) {
        offsets.set(index, 0);
      } else {
        offsets.set(index, value2.size);
        setValue(this, index, value2);
      }
    });
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/struct.js
var StructBuilder = class extends Builder {
  addChild(child, name = `${this.numChildren}`) {
    const childIndex = this.children.push(child);
    this.type = new Struct([...this.type.children, new Field2(name, child.type, true)]);
    return childIndex;
  }
};

// node_modules/@apache-arrow/esnext-esm/builder/union.js
var UnionBuilder = class extends Builder {
  constructor(options) {
    super(options);
    this._typeIds = new DataBufferBuilder(new Int8Array(0), 1);
    if (typeof options["valueToChildTypeId"] === "function") {
      this._valueToChildTypeId = options["valueToChildTypeId"];
    }
  }
  get typeIdToChildIndex() {
    return this.type.typeIdToChildIndex;
  }
  append(value2, childTypeId) {
    return this.set(this.length, value2, childTypeId);
  }
  set(index, value2, childTypeId) {
    if (childTypeId === void 0) {
      childTypeId = this._valueToChildTypeId(this, value2, index);
    }
    if (this.setValid(index, this.isValid(value2))) {
      this.setValue(index, value2, childTypeId);
    }
    return this;
  }
  setValue(index, value2, childTypeId) {
    this._typeIds.set(index, childTypeId);
    super.setValue(index, value2);
  }
  addChild(child, name = `${this.children.length}`) {
    const childTypeId = this.children.push(child);
    const { type: { children, mode, typeIds } } = this;
    const fields = [...children, new Field2(name, child.type)];
    this.type = new Union_(mode, [...typeIds, childTypeId], fields);
    return childTypeId;
  }
  _valueToChildTypeId(builder, value2, offset) {
    throw new Error(`Cannot map UnionBuilder value to child typeId. Pass the \`childTypeId\` as the second argument to unionBuilder.append(), or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`);
  }
};
var SparseUnionBuilder = class extends UnionBuilder {
};
var DenseUnionBuilder = class extends UnionBuilder {
  constructor(options) {
    super(options);
    this._offsets = new DataBufferBuilder(new Int32Array(0));
  }
  setValue(index, value2, childTypeId) {
    const childIndex = this.type.typeIdToChildIndex[childTypeId];
    this._offsets.set(index, this.getChildAt(childIndex).length);
    return super.setValue(index, value2, childTypeId);
  }
};

// node_modules/@apache-arrow/esnext-esm/visitor.js
var Visitor = class {
  visitMany(nodes, ...args) {
    return nodes.map((node, i) => this.visit(node, ...args.map((x2) => x2[i])));
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
function getVisitFn(visitor, node, throwIfNotFound = true) {
  let fn2 = null;
  let dtype = Type2.NONE;
  if (node instanceof Data)
    dtype = inferDType(node.type);
  else if (node instanceof AbstractVector)
    dtype = inferDType(node.type);
  else if (node instanceof DataType)
    dtype = inferDType(node);
  else if (typeof (dtype = node) !== "number")
    dtype = Type2[node];
  switch (dtype) {
    case Type2.Null:
      fn2 = visitor.visitNull;
      break;
    case Type2.Bool:
      fn2 = visitor.visitBool;
      break;
    case Type2.Int:
      fn2 = visitor.visitInt;
      break;
    case Type2.Int8:
      fn2 = visitor.visitInt8 || visitor.visitInt;
      break;
    case Type2.Int16:
      fn2 = visitor.visitInt16 || visitor.visitInt;
      break;
    case Type2.Int32:
      fn2 = visitor.visitInt32 || visitor.visitInt;
      break;
    case Type2.Int64:
      fn2 = visitor.visitInt64 || visitor.visitInt;
      break;
    case Type2.Uint8:
      fn2 = visitor.visitUint8 || visitor.visitInt;
      break;
    case Type2.Uint16:
      fn2 = visitor.visitUint16 || visitor.visitInt;
      break;
    case Type2.Uint32:
      fn2 = visitor.visitUint32 || visitor.visitInt;
      break;
    case Type2.Uint64:
      fn2 = visitor.visitUint64 || visitor.visitInt;
      break;
    case Type2.Float:
      fn2 = visitor.visitFloat;
      break;
    case Type2.Float16:
      fn2 = visitor.visitFloat16 || visitor.visitFloat;
      break;
    case Type2.Float32:
      fn2 = visitor.visitFloat32 || visitor.visitFloat;
      break;
    case Type2.Float64:
      fn2 = visitor.visitFloat64 || visitor.visitFloat;
      break;
    case Type2.Utf8:
      fn2 = visitor.visitUtf8;
      break;
    case Type2.Binary:
      fn2 = visitor.visitBinary;
      break;
    case Type2.FixedSizeBinary:
      fn2 = visitor.visitFixedSizeBinary;
      break;
    case Type2.Date:
      fn2 = visitor.visitDate;
      break;
    case Type2.DateDay:
      fn2 = visitor.visitDateDay || visitor.visitDate;
      break;
    case Type2.DateMillisecond:
      fn2 = visitor.visitDateMillisecond || visitor.visitDate;
      break;
    case Type2.Timestamp:
      fn2 = visitor.visitTimestamp;
      break;
    case Type2.TimestampSecond:
      fn2 = visitor.visitTimestampSecond || visitor.visitTimestamp;
      break;
    case Type2.TimestampMillisecond:
      fn2 = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
      break;
    case Type2.TimestampMicrosecond:
      fn2 = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
      break;
    case Type2.TimestampNanosecond:
      fn2 = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
      break;
    case Type2.Time:
      fn2 = visitor.visitTime;
      break;
    case Type2.TimeSecond:
      fn2 = visitor.visitTimeSecond || visitor.visitTime;
      break;
    case Type2.TimeMillisecond:
      fn2 = visitor.visitTimeMillisecond || visitor.visitTime;
      break;
    case Type2.TimeMicrosecond:
      fn2 = visitor.visitTimeMicrosecond || visitor.visitTime;
      break;
    case Type2.TimeNanosecond:
      fn2 = visitor.visitTimeNanosecond || visitor.visitTime;
      break;
    case Type2.Decimal:
      fn2 = visitor.visitDecimal;
      break;
    case Type2.List:
      fn2 = visitor.visitList;
      break;
    case Type2.Struct:
      fn2 = visitor.visitStruct;
      break;
    case Type2.Union:
      fn2 = visitor.visitUnion;
      break;
    case Type2.DenseUnion:
      fn2 = visitor.visitDenseUnion || visitor.visitUnion;
      break;
    case Type2.SparseUnion:
      fn2 = visitor.visitSparseUnion || visitor.visitUnion;
      break;
    case Type2.Dictionary:
      fn2 = visitor.visitDictionary;
      break;
    case Type2.Interval:
      fn2 = visitor.visitInterval;
      break;
    case Type2.IntervalDayTime:
      fn2 = visitor.visitIntervalDayTime || visitor.visitInterval;
      break;
    case Type2.IntervalYearMonth:
      fn2 = visitor.visitIntervalYearMonth || visitor.visitInterval;
      break;
    case Type2.FixedSizeList:
      fn2 = visitor.visitFixedSizeList;
      break;
    case Type2.Map:
      fn2 = visitor.visitMap;
      break;
  }
  if (typeof fn2 === "function")
    return fn2;
  if (!throwIfNotFound)
    return () => null;
  throw new Error(`Unrecognized type '${Type2[dtype]}'`);
}
function inferDType(type) {
  switch (type.typeId) {
    case Type2.Null:
      return Type2.Null;
    case Type2.Int: {
      const { bitWidth, isSigned } = type;
      switch (bitWidth) {
        case 8:
          return isSigned ? Type2.Int8 : Type2.Uint8;
        case 16:
          return isSigned ? Type2.Int16 : Type2.Uint16;
        case 32:
          return isSigned ? Type2.Int32 : Type2.Uint32;
        case 64:
          return isSigned ? Type2.Int64 : Type2.Uint64;
      }
      return Type2.Int;
    }
    case Type2.Float:
      switch (type.precision) {
        case Precision.HALF:
          return Type2.Float16;
        case Precision.SINGLE:
          return Type2.Float32;
        case Precision.DOUBLE:
          return Type2.Float64;
      }
      return Type2.Float;
    case Type2.Binary:
      return Type2.Binary;
    case Type2.Utf8:
      return Type2.Utf8;
    case Type2.Bool:
      return Type2.Bool;
    case Type2.Decimal:
      return Type2.Decimal;
    case Type2.Time:
      switch (type.unit) {
        case TimeUnit.SECOND:
          return Type2.TimeSecond;
        case TimeUnit.MILLISECOND:
          return Type2.TimeMillisecond;
        case TimeUnit.MICROSECOND:
          return Type2.TimeMicrosecond;
        case TimeUnit.NANOSECOND:
          return Type2.TimeNanosecond;
      }
      return Type2.Time;
    case Type2.Timestamp:
      switch (type.unit) {
        case TimeUnit.SECOND:
          return Type2.TimestampSecond;
        case TimeUnit.MILLISECOND:
          return Type2.TimestampMillisecond;
        case TimeUnit.MICROSECOND:
          return Type2.TimestampMicrosecond;
        case TimeUnit.NANOSECOND:
          return Type2.TimestampNanosecond;
      }
      return Type2.Timestamp;
    case Type2.Date:
      switch (type.unit) {
        case DateUnit.DAY:
          return Type2.DateDay;
        case DateUnit.MILLISECOND:
          return Type2.DateMillisecond;
      }
      return Type2.Date;
    case Type2.Interval:
      switch (type.unit) {
        case IntervalUnit.DAY_TIME:
          return Type2.IntervalDayTime;
        case IntervalUnit.YEAR_MONTH:
          return Type2.IntervalYearMonth;
      }
      return Type2.Interval;
    case Type2.Map:
      return Type2.Map;
    case Type2.List:
      return Type2.List;
    case Type2.Struct:
      return Type2.Struct;
    case Type2.Union:
      switch (type.mode) {
        case UnionMode.Dense:
          return Type2.DenseUnion;
        case UnionMode.Sparse:
          return Type2.SparseUnion;
      }
      return Type2.Union;
    case Type2.FixedSizeBinary:
      return Type2.FixedSizeBinary;
    case Type2.FixedSizeList:
      return Type2.FixedSizeList;
    case Type2.Dictionary:
      return Type2.Dictionary;
  }
  throw new Error(`Unrecognized type '${Type2[type.typeId]}'`);
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

// node_modules/@apache-arrow/esnext-esm/visitor/set.js
var SetVisitor = class extends Visitor {
};
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
var setVariableWidthBytes = (values, valueOffsets, index, value2) => {
  const { [index]: x2, [index + 1]: y2 } = valueOffsets;
  if (x2 != null && y2 != null) {
    values.set(value2.subarray(0, y2 - x2), x2);
  }
};
var setBool2 = ({ offset, values }, index, val) => {
  const idx = offset + index;
  val ? values[idx >> 3] |= 1 << idx % 8 : values[idx >> 3] &= ~(1 << idx % 8);
};
var setDateDay = ({ values }, index, value2) => {
  setEpochMsToDays(values, index, value2.valueOf());
};
var setDateMillisecond = ({ values }, index, value2) => {
  setEpochMsToMillisecondsLong(values, index * 2, value2.valueOf());
};
var setNumeric = ({ stride, values }, index, value2) => {
  values[stride * index] = value2;
};
var setFloat16 = ({ stride, values }, index, value2) => {
  values[stride * index] = float64ToUint16(value2);
};
var setNumericX2 = (vector, index, value2) => {
  switch (typeof value2) {
    case "bigint":
      vector.values64[index] = value2;
      break;
    case "number":
      vector.values[index * vector.stride] = value2;
      break;
    default: {
      const val = value2;
      const { stride, ArrayType } = vector;
      const long = toArrayBufferView(ArrayType, val);
      vector.values.set(long.subarray(0, stride), stride * index);
    }
  }
};
var setFixedSizeBinary = ({ stride, values }, index, value2) => {
  values.set(value2.subarray(0, stride), stride * index);
};
var setBinary = ({ values, valueOffsets }, index, value2) => setVariableWidthBytes(values, valueOffsets, index, value2);
var setUtf8 = ({ values, valueOffsets }, index, value2) => {
  setVariableWidthBytes(values, valueOffsets, index, encodeUtf8(value2));
};
var setInt = (vector, index, value2) => {
  vector.type.bitWidth < 64 ? setNumeric(vector, index, value2) : setNumericX2(vector, index, value2);
};
var setFloat = (vector, index, value2) => {
  vector.type.precision !== Precision.HALF ? setNumeric(vector, index, value2) : setFloat16(vector, index, value2);
};
var setDate = (vector, index, value2) => {
  vector.type.unit === DateUnit.DAY ? setDateDay(vector, index, value2) : setDateMillisecond(vector, index, value2);
};
var setTimestampSecond = ({ values }, index, value2) => setEpochMsToMillisecondsLong(values, index * 2, value2 / 1e3);
var setTimestampMillisecond = ({ values }, index, value2) => setEpochMsToMillisecondsLong(values, index * 2, value2);
var setTimestampMicrosecond = ({ values }, index, value2) => setEpochMsToMicrosecondsLong(values, index * 2, value2);
var setTimestampNanosecond = ({ values }, index, value2) => setEpochMsToNanosecondsLong(values, index * 2, value2);
var setTimestamp = (vector, index, value2) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return setTimestampSecond(vector, index, value2);
    case TimeUnit.MILLISECOND:
      return setTimestampMillisecond(vector, index, value2);
    case TimeUnit.MICROSECOND:
      return setTimestampMicrosecond(vector, index, value2);
    case TimeUnit.NANOSECOND:
      return setTimestampNanosecond(vector, index, value2);
  }
};
var setTimeSecond = ({ values, stride }, index, value2) => {
  values[stride * index] = value2;
};
var setTimeMillisecond = ({ values, stride }, index, value2) => {
  values[stride * index] = value2;
};
var setTimeMicrosecond = ({ values }, index, value2) => {
  values.set(value2.subarray(0, 2), 2 * index);
};
var setTimeNanosecond = ({ values }, index, value2) => {
  values.set(value2.subarray(0, 2), 2 * index);
};
var setTime = (vector, index, value2) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return setTimeSecond(vector, index, value2);
    case TimeUnit.MILLISECOND:
      return setTimeMillisecond(vector, index, value2);
    case TimeUnit.MICROSECOND:
      return setTimeMicrosecond(vector, index, value2);
    case TimeUnit.NANOSECOND:
      return setTimeNanosecond(vector, index, value2);
  }
};
var setDecimal = ({ values }, index, value2) => {
  values.set(value2.subarray(0, 4), 4 * index);
};
var setList = (vector, index, value2) => {
  const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
  for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
    values.set(itr++, value2.get(++idx));
  }
};
var setMap = (vector, index, value2) => {
  const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
  const entries = value2 instanceof Map ? [...value2] : Object.entries(value2);
  for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end; ) {
    values.set(itr++, entries[++idx]);
  }
};
var _setStructArrayValue = (o2, v2) => (c, _, i) => c?.set(o2, v2[i]);
var _setStructVectorValue = (o2, v2) => (c, _, i) => c?.set(o2, v2.get(i));
var _setStructMapValue = (o2, v2) => (c, f, _) => c?.set(o2, v2.get(f.name));
var _setStructObjectValue = (o2, v2) => (c, f, _) => c?.set(o2, v2[f.name]);
var setStruct = (vector, index, value2) => {
  const setValue = value2 instanceof Map ? _setStructMapValue(index, value2) : value2 instanceof AbstractVector ? _setStructVectorValue(index, value2) : Array.isArray(value2) ? _setStructArrayValue(index, value2) : _setStructObjectValue(index, value2);
  vector.type.children.forEach((f, i) => setValue(vector.getChildAt(i), f, i));
};
var setUnion = (vector, index, value2) => {
  vector.type.mode === UnionMode.Dense ? setDenseUnion(vector, index, value2) : setSparseUnion(vector, index, value2);
};
var setDenseUnion = (vector, index, value2) => {
  const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
  const child = vector.getChildAt(childIndex);
  child && child.set(vector.valueOffsets[index], value2);
};
var setSparseUnion = (vector, index, value2) => {
  const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
  const child = vector.getChildAt(childIndex);
  child && child.set(index, value2);
};
var setDictionary = (vector, index, value2) => {
  const key = vector.getKey(index);
  if (key !== null) {
    vector.setValue(key, value2);
  }
};
var setIntervalValue = (vector, index, value2) => {
  vector.type.unit === IntervalUnit.DAY_TIME ? setIntervalDayTime(vector, index, value2) : setIntervalYearMonth(vector, index, value2);
};
var setIntervalDayTime = ({ values }, index, value2) => {
  values.set(value2.subarray(0, 2), 2 * index);
};
var setIntervalYearMonth = ({ values }, index, value2) => {
  values[index] = value2[0] * 12 + value2[1] % 12;
};
var setFixedSizeList = (vector, index, value2) => {
  const child = vector.getChildAt(0), { stride } = vector;
  for (let idx = -1, offset = index * stride; ++idx < stride; ) {
    child.set(offset + idx, value2.get(idx));
  }
};
SetVisitor.prototype.visitBool = setBool2;
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
var instance = new SetVisitor();

// node_modules/@apache-arrow/esnext-esm/visitor/builderctor.js
var GetBuilderCtor = class extends Visitor {
  visitNull() {
    return NullBuilder;
  }
  visitBool() {
    return BoolBuilder;
  }
  visitInt() {
    return IntBuilder;
  }
  visitInt8() {
    return Int8Builder;
  }
  visitInt16() {
    return Int16Builder;
  }
  visitInt32() {
    return Int32Builder;
  }
  visitInt64() {
    return Int64Builder;
  }
  visitUint8() {
    return Uint8Builder;
  }
  visitUint16() {
    return Uint16Builder;
  }
  visitUint32() {
    return Uint32Builder;
  }
  visitUint64() {
    return Uint64Builder;
  }
  visitFloat() {
    return FloatBuilder;
  }
  visitFloat16() {
    return Float16Builder;
  }
  visitFloat32() {
    return Float32Builder;
  }
  visitFloat64() {
    return Float64Builder;
  }
  visitUtf8() {
    return Utf8Builder;
  }
  visitBinary() {
    return BinaryBuilder;
  }
  visitFixedSizeBinary() {
    return FixedSizeBinaryBuilder;
  }
  visitDate() {
    return DateBuilder;
  }
  visitDateDay() {
    return DateDayBuilder;
  }
  visitDateMillisecond() {
    return DateMillisecondBuilder;
  }
  visitTimestamp() {
    return TimestampBuilder;
  }
  visitTimestampSecond() {
    return TimestampSecondBuilder;
  }
  visitTimestampMillisecond() {
    return TimestampMillisecondBuilder;
  }
  visitTimestampMicrosecond() {
    return TimestampMicrosecondBuilder;
  }
  visitTimestampNanosecond() {
    return TimestampNanosecondBuilder;
  }
  visitTime() {
    return TimeBuilder;
  }
  visitTimeSecond() {
    return TimeSecondBuilder;
  }
  visitTimeMillisecond() {
    return TimeMillisecondBuilder;
  }
  visitTimeMicrosecond() {
    return TimeMicrosecondBuilder;
  }
  visitTimeNanosecond() {
    return TimeNanosecondBuilder;
  }
  visitDecimal() {
    return DecimalBuilder;
  }
  visitList() {
    return ListBuilder;
  }
  visitStruct() {
    return StructBuilder;
  }
  visitUnion() {
    return UnionBuilder;
  }
  visitDenseUnion() {
    return DenseUnionBuilder;
  }
  visitSparseUnion() {
    return SparseUnionBuilder;
  }
  visitDictionary() {
    return DictionaryBuilder;
  }
  visitInterval() {
    return IntervalBuilder;
  }
  visitIntervalDayTime() {
    return IntervalDayTimeBuilder;
  }
  visitIntervalYearMonth() {
    return IntervalYearMonthBuilder;
  }
  visitFixedSizeList() {
    return FixedSizeListBuilder;
  }
  visitMap() {
    return MapBuilder;
  }
};
var instance2 = new GetBuilderCtor();

// node_modules/@apache-arrow/esnext-esm/builder/index.js
Builder.new = newBuilder;
function newBuilder(options) {
  const type = options.type;
  const builder = new (instance2.getVisitFn(type)())(options);
  if (type.children && type.children.length > 0) {
    const children = options["children"] || [];
    const defaultOptions = { "nullValues": options["nullValues"] };
    const getChildOptions = Array.isArray(children) ? (_, i) => children[i] || defaultOptions : ({ name }) => children[name] || defaultOptions;
    type.children.forEach((field2, index) => {
      const { type: type2 } = field2;
      const opts = getChildOptions(field2, index);
      builder.children.push(newBuilder({ ...opts, type: type2 }));
    });
  }
  return builder;
}
Object.keys(Type2).map((T2) => Type2[T2]).filter((T2) => typeof T2 === "number" && T2 !== Type2.NONE).forEach((typeId) => {
  const BuilderCtor = instance2.visit(typeId);
  BuilderCtor.prototype._setValue = instance.getVisitFn(typeId);
});
Utf8Builder.prototype._setValue = instance.visitBinary;

// node_modules/@apache-arrow/esnext-esm/fb/File.js
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
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }
  version() {
    const offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readInt16(this.bb_pos + offset) : MetadataVersion.V1;
  }
  schema(obj) {
    const offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? (obj || new Schema()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
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
    return offset ? (obj || new KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
  }
  customMetadataLength() {
    const offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
  }
  static startFooter(builder) {
    builder.startObject(5);
  }
  static addVersion(builder, version) {
    builder.addFieldInt16(0, version, MetadataVersion.V1);
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

// node_modules/@apache-arrow/esnext-esm/ipc/metadata/file.js
var Long = flatbuffers.Long;
var Builder2 = flatbuffers.Builder;
var ByteBuffer2 = flatbuffers.ByteBuffer;
var Footer_ = class {
  constructor(schema, version = MetadataVersion.V4, recordBatches, dictionaryBatches) {
    this.schema = schema;
    this.version = version;
    recordBatches && (this._recordBatches = recordBatches);
    dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
  }
  static decode(buf) {
    buf = new ByteBuffer2(toUint8Array(buf));
    const footer = Footer.getRootAsFooter(buf);
    const schema = Schema2.decode(footer.schema());
    return new OffHeapFooter(schema, footer);
  }
  static encode(footer) {
    const b = new Builder2();
    const schemaOffset = Schema2.encode(b, footer.schema);
    Footer.startRecordBatchesVector(b, footer.numRecordBatches);
    [...footer.recordBatches()].slice().reverse().forEach((rb) => FileBlock.encode(b, rb));
    const recordBatchesOffset = b.endVector();
    Footer.startDictionariesVector(b, footer.numDictionaries);
    [...footer.dictionaryBatches()].slice().reverse().forEach((db) => FileBlock.encode(b, db));
    const dictionaryBatchesOffset = b.endVector();
    Footer.startFooter(b);
    Footer.addSchema(b, schemaOffset);
    Footer.addVersion(b, MetadataVersion.V4);
    Footer.addRecordBatches(b, recordBatchesOffset);
    Footer.addDictionaries(b, dictionaryBatchesOffset);
    Footer.finishFooterBuffer(b, Footer.endFooter(b));
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
    return Block.createBlock(b, offset, metaDataLength, bodyLength);
  }
};

// node_modules/@apache-arrow/esnext-esm/io/stream.js
var AsyncByteQueue = class extends AsyncQueue {
  write(value2) {
    if ((value2 = toUint8Array(value2)).byteLength > 0) {
      return super.write(value2);
    }
  }
  toString(sync = false) {
    return sync ? decodeUtf8(this.toUint8Array(true)) : this.toUint8Array(false).then(decodeUtf8);
  }
  toUint8Array(sync = false) {
    return sync ? joinUint8Arrays(this._values)[0] : (async () => {
      const buffers = [];
      let byteLength = 0;
      for await (const chunk of this) {
        buffers.push(chunk);
        byteLength += chunk.byteLength;
      }
      return joinUint8Arrays(buffers, byteLength)[0];
    })();
  }
};
var ByteStream = class {
  constructor(source) {
    if (source) {
      this.source = new ByteStreamSource(adapters_default.fromIterable(source));
    }
  }
  [Symbol.iterator]() {
    return this;
  }
  next(value2) {
    return this.source.next(value2);
  }
  throw(value2) {
    return this.source.throw(value2);
  }
  return(value2) {
    return this.source.return(value2);
  }
  peek(size) {
    return this.source.peek(size);
  }
  read(size) {
    return this.source.read(size);
  }
};
var AsyncByteStream = class {
  constructor(source) {
    if (source instanceof AsyncByteStream) {
      this.source = source.source;
    } else if (source instanceof AsyncByteQueue) {
      this.source = new AsyncByteStreamSource(adapters_default.fromAsyncIterable(source));
    } else if (isReadableNodeStream(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromNodeStream(source));
    } else if (isReadableDOMStream(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromDOMStream(source));
    } else if (isFetchResponse(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromDOMStream(source.body));
    } else if (isIterable(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromIterable(source));
    } else if (isPromise(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromAsyncIterable(source));
    } else if (isAsyncIterable(source)) {
      this.source = new AsyncByteStreamSource(adapters_default.fromAsyncIterable(source));
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(value2) {
    return this.source.next(value2);
  }
  throw(value2) {
    return this.source.throw(value2);
  }
  return(value2) {
    return this.source.return(value2);
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
  throw(value2) {
    return Object.create(this.source.throw && this.source.throw(value2) || ITERATOR_DONE);
  }
  return(value2) {
    return Object.create(this.source.return && this.source.return(value2) || ITERATOR_DONE);
  }
};
var AsyncByteStreamSource = class {
  constructor(source) {
    this.source = source;
    this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
  }
  async cancel(reason) {
    await this.return(reason);
  }
  get closed() {
    return this._closedPromise;
  }
  async read(size) {
    return (await this.next(size, "read")).value;
  }
  async peek(size) {
    return (await this.next(size, "peek")).value;
  }
  async next(size, cmd = "read") {
    return await this.source.next({ cmd, size });
  }
  async throw(value2) {
    const result = this.source.throw && await this.source.throw(value2) || ITERATOR_DONE;
    this._closedPromiseResolve && this._closedPromiseResolve();
    this._closedPromiseResolve = void 0;
    return Object.create(result);
  }
  async return(value2) {
    const result = this.source.return && await this.source.return(value2) || ITERATOR_DONE;
    this._closedPromiseResolve && this._closedPromiseResolve();
    this._closedPromiseResolve = void 0;
    return Object.create(result);
  }
};

// node_modules/@apache-arrow/esnext-esm/io/file.js
var RandomAccessFile = class extends ByteStream {
  constructor(buffer, byteLength) {
    super();
    this.position = 0;
    this.buffer = toUint8Array(buffer);
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
  throw(value2) {
    this.close();
    return { done: true, value: value2 };
  }
  return(value2) {
    this.close();
    return { done: true, value: value2 };
  }
};
var AsyncRandomAccessFile = class extends AsyncByteStream {
  constructor(file, byteLength) {
    super();
    this.position = 0;
    this._handle = file;
    if (typeof byteLength === "number") {
      this.size = byteLength;
    } else {
      this._pending = (async () => {
        this.size = (await file.stat()).size;
        delete this._pending;
      })();
    }
  }
  async readInt32(position) {
    const { buffer, byteOffset } = await this.readAt(position, 4);
    return new DataView(buffer, byteOffset).getInt32(0, true);
  }
  async seek(position) {
    this._pending && await this._pending;
    this.position = Math.min(position, this.size);
    return position < this.size;
  }
  async read(nBytes) {
    this._pending && await this._pending;
    const { _handle: file, size, position } = this;
    if (file && position < size) {
      if (typeof nBytes !== "number") {
        nBytes = Infinity;
      }
      let pos = position, offset = 0, bytesRead = 0;
      const end = Math.min(size, pos + Math.min(size - pos, nBytes));
      const buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
      while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) {
        ({ bytesRead } = await file.read(buffer, offset, buffer.byteLength - offset, pos));
      }
      return buffer;
    }
    return null;
  }
  async readAt(position, nBytes) {
    this._pending && await this._pending;
    const { _handle: file, size } = this;
    if (file && position + nBytes < size) {
      const end = Math.min(size, position + nBytes);
      const buffer = new Uint8Array(end - position);
      return (await file.read(buffer, 0, nBytes, position)).buffer;
    }
    return new Uint8Array(nBytes);
  }
  async close() {
    const f = this._handle;
    this._handle = null;
    f && await f.close();
  }
  async throw(value2) {
    await this.close();
    return { done: true, value: value2 };
  }
  async return(value2) {
    await this.close();
    return { done: true, value: value2 };
  }
};

// node_modules/@apache-arrow/esnext-esm/util/int.js
var int_exports = {};
__export(int_exports, {
  BaseInt64: () => BaseInt64,
  Int128: () => Int128,
  Int64: () => Int642,
  Uint64: () => Uint642
});
var carryBit16 = 1 << 16;
function intAsHex(value2) {
  if (value2 < 0) {
    value2 = 4294967295 + value2 + 1;
  }
  return `0x${value2.toString(16)}`;
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
    let sum2 = product >>> 16;
    product = L[2] * R[3];
    sum2 += product;
    product = L[3] * R[2] >>> 0;
    sum2 += product;
    this.buffer[0] += sum2 << 16;
    this.buffer[1] = sum2 >>> 0 < product ? carryBit16 : 0;
    this.buffer[1] += sum2 >>> 16;
    this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
    this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16;
    return this;
  }
  _plus(other) {
    const sum2 = this.buffer[0] + other.buffer[0] >>> 0;
    this.buffer[1] += other.buffer[1];
    if (sum2 < this.buffer[0] >>> 0) {
      ++this.buffer[1];
    }
    this.buffer[0] = sum2;
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
var Uint642 = class extends BaseInt64 {
  times(other) {
    this._times(other);
    return this;
  }
  plus(other) {
    this._plus(other);
    return this;
  }
  static from(val, out_buffer = new Uint32Array(2)) {
    return Uint642.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(2)) {
    return Uint642.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(2)) {
    const length = str.length;
    const out = new Uint642(out_buffer);
    for (let posn = 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Uint642(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
      const multiple = new Uint642(new Uint32Array([kPowersOfTen[group], 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 2);
    for (let i = -1, n = values.length; ++i < n; ) {
      Uint642.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data;
  }
  static multiply(left, right) {
    const rtrn = new Uint642(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Uint642(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
};
var Int642 = class extends BaseInt64 {
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
    return Int642.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
  }
  static fromNumber(num, out_buffer = new Uint32Array(2)) {
    return Int642.fromString(num.toString(), out_buffer);
  }
  static fromString(str, out_buffer = new Uint32Array(2)) {
    const negate = str.startsWith("-");
    const length = str.length;
    const out = new Int642(out_buffer);
    for (let posn = negate ? 1 : 0; posn < length; ) {
      const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
      const chunk = new Int642(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
      const multiple = new Int642(new Uint32Array([kPowersOfTen[group], 0]));
      out.times(multiple);
      out.plus(chunk);
      posn += group;
    }
    return negate ? out.negate() : out;
  }
  static convertArray(values) {
    const data = new Uint32Array(values.length * 2);
    for (let i = -1, n = values.length; ++i < n; ) {
      Int642.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
    }
    return data;
  }
  static multiply(left, right) {
    const rtrn = new Int642(new Uint32Array(left.buffer));
    return rtrn.times(right);
  }
  static add(left, right) {
    const rtrn = new Int642(new Uint32Array(left.buffer));
    return rtrn.plus(right);
  }
};
var Int128 = class {
  constructor(buffer) {
    this.buffer = buffer;
  }
  high() {
    return new Int642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new Int642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
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
    const L0 = new Uint642(new Uint32Array([this.buffer[3], 0]));
    const L1 = new Uint642(new Uint32Array([this.buffer[2], 0]));
    const L2 = new Uint642(new Uint32Array([this.buffer[1], 0]));
    const L3 = new Uint642(new Uint32Array([this.buffer[0], 0]));
    const R0 = new Uint642(new Uint32Array([other.buffer[3], 0]));
    const R1 = new Uint642(new Uint32Array([other.buffer[2], 0]));
    const R2 = new Uint642(new Uint32Array([other.buffer[1], 0]));
    const R3 = new Uint642(new Uint32Array([other.buffer[0], 0]));
    let product = Uint642.multiply(L3, R3);
    this.buffer[0] = product.low();
    const sum2 = new Uint642(new Uint32Array([product.high(), 0]));
    product = Uint642.multiply(L2, R3);
    sum2.plus(product);
    product = Uint642.multiply(L3, R2);
    sum2.plus(product);
    this.buffer[1] = sum2.low();
    this.buffer[3] = sum2.lessThan(product) ? 1 : 0;
    this.buffer[2] = sum2.high();
    const high = new Uint642(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
    high.plus(Uint642.multiply(L1, R3)).plus(Uint642.multiply(L2, R2)).plus(Uint642.multiply(L3, R1));
    this.buffer[3] += Uint642.multiply(L0, R3).plus(Uint642.multiply(L1, R2)).plus(Uint642.multiply(L2, R1)).plus(Uint642.multiply(L3, R0)).low();
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

// node_modules/@apache-arrow/esnext-esm/visitor/vectorloader.js
var VectorLoader = class extends Visitor {
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
    return super.visit(node instanceof Field2 ? node.type : node);
  }
  visitNull(type, { length } = this.nextFieldNode()) {
    return Data.Null(type, 0, length);
  }
  visitBool(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Bool(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitInt(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Int(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitFloat(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Float(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitUtf8(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Utf8(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type));
  }
  visitBinary(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Binary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type));
  }
  visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.FixedSizeBinary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitDate(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Date(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Timestamp(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitTime(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Time(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitDecimal(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Decimal(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitList(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.List(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0]));
  }
  visitStruct(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Struct(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visitMany(type.children));
  }
  visitUnion(type) {
    return type.mode === UnionMode.Sparse ? this.visitSparseUnion(type) : this.visitDenseUnion(type);
  }
  visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.readOffsets(type), this.visitMany(type.children));
  }
  visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.visitMany(type.children));
  }
  visitDictionary(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Dictionary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type.indices), this.readDictionary(type));
  }
  visitInterval(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Interval(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type));
  }
  visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.FixedSizeList(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visit(type.children[0]));
  }
  visitMap(type, { length, nullCount } = this.nextFieldNode()) {
    return Data.Map(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0]));
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
var JSONVectorLoader = class extends VectorLoader {
  constructor(sources, nodes, buffers, dictionaries) {
    super(new Uint8Array(0), nodes, buffers, dictionaries);
    this.sources = sources;
  }
  readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
    return nullCount <= 0 ? new Uint8Array(0) : packBools(this.sources[offset]);
  }
  readOffsets(_type, { offset } = this.nextBufferRange()) {
    return toArrayBufferView(Uint8Array, toArrayBufferView(Int32Array, this.sources[offset]));
  }
  readTypeIds(type, { offset } = this.nextBufferRange()) {
    return toArrayBufferView(Uint8Array, toArrayBufferView(type.ArrayType, this.sources[offset]));
  }
  readData(type, { offset } = this.nextBufferRange()) {
    const { sources } = this;
    if (DataType.isTimestamp(type)) {
      return toArrayBufferView(Uint8Array, Int642.convertArray(sources[offset]));
    } else if ((DataType.isInt(type) || DataType.isTime(type)) && type.bitWidth === 64) {
      return toArrayBufferView(Uint8Array, Int642.convertArray(sources[offset]));
    } else if (DataType.isDate(type) && type.unit === DateUnit.MILLISECOND) {
      return toArrayBufferView(Uint8Array, Int642.convertArray(sources[offset]));
    } else if (DataType.isDecimal(type)) {
      return toArrayBufferView(Uint8Array, Int128.convertArray(sources[offset]));
    } else if (DataType.isBinary(type) || DataType.isFixedSizeBinary(type)) {
      return binaryDataFromJSON(sources[offset]);
    } else if (DataType.isBool(type)) {
      return packBools(sources[offset]);
    } else if (DataType.isUtf8(type)) {
      return encodeUtf8(sources[offset].join(""));
    }
    return toArrayBufferView(Uint8Array, toArrayBufferView(type.ArrayType, sources[offset].map((x2) => +x2)));
  }
};
function binaryDataFromJSON(values) {
  const joined = values.join("");
  const data = new Uint8Array(joined.length / 2);
  for (let i = 0; i < joined.length; i += 2) {
    data[i >> 1] = parseInt(joined.substr(i, 2), 16);
  }
  return data;
}

// node_modules/@apache-arrow/esnext-esm/util/vector.js
var vector_exports = {};
__export(vector_exports, {
  clampIndex: () => clampIndex,
  clampRange: () => clampRange,
  createElementComparator: () => createElementComparator
});

// node_modules/@apache-arrow/esnext-esm/vector/row.js
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
    const callback = thisArg === void 0 ? callbackfn : (v2, k, m2) => callbackfn.call(thisArg, v2, k, m2);
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
      key = valueToString(key);
      val = valueToString(val);
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
  setValue(index, value2) {
    this[kParent].getChildAt(1).set(index, value2);
  }
};
var StructRow = class extends Row {
  constructor(parent) {
    super(parent, parent.type.children.length);
    return defineRowProxyProperties(this);
  }
  *keys() {
    for (const field2 of this[kParent].type.children) {
      yield field2.name;
    }
  }
  *values() {
    for (const field2 of this[kParent].type.children) {
      yield this[field2.name];
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
  setValue(index, value2) {
    return this[kParent].getChildAt(index).set(this[kRowIndex], value2);
  }
};
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
      return [...row.keys()].map((x2) => `${x2}`);
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

// node_modules/@apache-arrow/esnext-esm/util/vector.js
function clampIndex(source, index, then) {
  const length = source.length;
  const adjust = index > -1 ? index : length + index % length;
  return then ? then(source, adjust) : adjust;
}
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
var big0 = BigIntAvailable ? BigIntCtor(0) : 0;
var isNaNFast = (value2) => value2 !== value2;
function createElementComparator(search) {
  const typeofSearch = typeof search;
  if (typeofSearch !== "object" || search === null) {
    if (isNaNFast(search)) {
      return isNaNFast;
    }
    return typeofSearch !== "bigint" ? (value2) => value2 === search : (value2) => big0 + value2 === search;
  }
  if (search instanceof Date) {
    const valueOfSearch = search.valueOf();
    return (value2) => value2 instanceof Date ? value2.valueOf() === valueOfSearch : false;
  }
  if (ArrayBuffer.isView(search)) {
    return (value2) => value2 ? compareArrayLike(search, value2) : false;
  }
  if (search instanceof Map) {
    return creatMapComparator(search);
  }
  if (Array.isArray(search)) {
    return createArrayLikeComparator(search);
  }
  if (search instanceof AbstractVector) {
    return createVectorComparator(search);
  }
  return createObjectComparator(search);
}
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
      case MapRow:
      case StructRow:
        return compareObject(comparators, rhs, rhs.keys());
      case Object:
      case void 0:
        return compareObject(comparators, rhs, keys || Object.keys(rhs));
    }
    return rhs instanceof AbstractVector ? compareVector(comparators, rhs) : false;
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

// node_modules/@apache-arrow/esnext-esm/util/args.js
var isArray = Array.isArray;
function isTypedArray(arr) {
  return ArrayBuffer.isView(arr) && "BYTES_PER_ELEMENT" in arr;
}
function arrayTypeToDataType(ctor) {
  switch (ctor) {
    case Int8Array:
      return Int8;
    case Int16Array:
      return Int16;
    case Int32Array:
      return Int32;
    case BigInt64Array:
      return Int64;
    case Uint8Array:
      return Uint8;
    case Uint16Array:
      return Uint16;
    case Uint32Array:
      return Uint32;
    case BigUint64Array:
      return Uint64;
    case Float32Array:
      return Float32;
    case Float64Array:
      return Float64;
    default:
      return null;
  }
}
function vectorFromTypedArray(array) {
  const ArrowType = arrayTypeToDataType(array.constructor);
  if (!ArrowType) {
    throw new TypeError("Unrecognized Array input");
  }
  const type = new ArrowType();
  const data = Data.new(type, 0, array.length, 0, [void 0, array]);
  return AbstractVector.new(data);
}
var selectArgs = (Ctor, vals) => _selectArgs(Ctor, vals, [], 0);
var selectColumnArgs = (args) => {
  const [fields, values] = _selectFieldArgs(args, [[], []]);
  return values.map((x2, i) => x2 instanceof Column ? Column.new(x2.field.clone(fields[i]), x2) : x2 instanceof AbstractVector ? Column.new(fields[i], x2) : isTypedArray(x2) ? Column.new(fields[i], vectorFromTypedArray(x2)) : Column.new(fields[i], []));
};
var selectFieldArgs = (args) => _selectFieldArgs(args, [[], []]);
var selectChunkArgs = (Ctor, vals) => _selectChunkArgs(Ctor, vals, [], 0);
var selectVectorChildrenArgs = (Ctor, vals) => _selectVectorChildrenArgs(Ctor, vals, [], 0);
function _selectArgs(Ctor, vals, res2, idx) {
  let value2, j2 = idx;
  let i = -1;
  const n = vals.length;
  while (++i < n) {
    if (isArray(value2 = vals[i])) {
      j2 = _selectArgs(Ctor, value2, res2, j2).length;
    } else if (value2 instanceof Ctor) {
      res2[j2++] = value2;
    }
  }
  return res2;
}
function _selectChunkArgs(Ctor, vals, res2, idx) {
  let value2, j2 = idx;
  let i = -1;
  const n = vals.length;
  while (++i < n) {
    if (isArray(value2 = vals[i])) {
      j2 = _selectChunkArgs(Ctor, value2, res2, j2).length;
    } else if (value2 instanceof Chunked) {
      j2 = _selectChunkArgs(Ctor, value2.chunks, res2, j2).length;
    } else if (value2 instanceof Ctor) {
      res2[j2++] = value2;
    }
  }
  return res2;
}
function _selectVectorChildrenArgs(Ctor, vals, res2, idx) {
  let value2, j2 = idx;
  let i = -1;
  const n = vals.length;
  while (++i < n) {
    if (isArray(value2 = vals[i])) {
      j2 = _selectVectorChildrenArgs(Ctor, value2, res2, j2).length;
    } else if (value2 instanceof Ctor) {
      j2 = _selectArgs(AbstractVector, value2.schema.fields.map((_, i2) => value2.getChildAt(i2)), res2, j2).length;
    } else if (value2 instanceof AbstractVector) {
      res2[j2++] = value2;
    }
  }
  return res2;
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
      if (!(vals[0] instanceof Data || vals[0] instanceof AbstractVector || isTypedArray(vals[0]) || vals[0] instanceof DataType)) {
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
  let field2;
  let val;
  const [fields, values] = ret;
  while (++idx < len) {
    val = vals[idx];
    if (val instanceof Column && (values[++valueIndex] = val)) {
      fields[++fieldIndex] = val.field.clone(keys[idx], val.type, true);
    } else {
      ({ [idx]: field2 = idx } = keys);
      if (val instanceof DataType && (values[++valueIndex] = val)) {
        fields[++fieldIndex] = Field2.new(field2, val, true);
      } else if (val?.type && (values[++valueIndex] = val)) {
        val instanceof Data && (values[valueIndex] = val = AbstractVector.new(val));
        fields[++fieldIndex] = Field2.new(field2, val.type, true);
      }
    }
  }
  return ret;
}

// node_modules/@apache-arrow/esnext-esm/vector/chunked.js
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
var Chunked = class extends AbstractVector {
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
    return selectChunkArgs(AbstractVector, vectors);
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
      this._nullCount = nullCount = this._chunks.reduce((x2, { nullCount: nullCount2 }) => x2 + nullCount2, 0);
    }
    return nullCount;
  }
  get indices() {
    if (DataType.isDictionary(this._type)) {
      if (!this._indices) {
        const chunks = this._chunks;
        this._indices = chunks.length === 1 ? chunks[0].indices : Chunked.concat(...chunks.map((x2) => x2.indices));
      }
      return this._indices;
    }
    return null;
  }
  get dictionary() {
    if (DataType.isDictionary(this._type)) {
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
    return clampRange(this, begin, end, this._sliceInternal);
  }
  getChildAt(index) {
    if (index < 0 || index >= this._numChildren) {
      return null;
    }
    const columns = this._children || (this._children = []);
    let child, field2, chunks;
    if (child = columns[index]) {
      return child;
    }
    if (field2 = (this._type.children || [])[index]) {
      chunks = this._chunks.map((vector) => vector.getChildAt(index)).filter((vec) => vec != null);
      if (chunks.length > 0) {
        return columns[index] = new Chunked(field2.type, chunks);
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
  set(index, value2) {
    this.search(index, ({ chunks }, i, j2) => chunks[i].set(j2, value2));
  }
  indexOf(element, offset) {
    if (offset && typeof offset === "number") {
      return this.search(offset, (self, i, j2) => this.indexOfInternal(self, i, j2, element));
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
  _sliceInternal(self, begin, end) {
    const slices = [];
    const { chunks, _chunkOffsets: chunkOffsets } = self;
    for (let i = -1, n = chunks.length; ++i < n; ) {
      const chunk = chunks[i];
      const chunkLength2 = chunk.length;
      const chunkOffset = chunkOffsets[i];
      if (chunkOffset >= end) {
        break;
      }
      if (begin >= chunkOffset + chunkLength2) {
        continue;
      }
      if (chunkOffset >= begin && chunkOffset + chunkLength2 <= end) {
        slices.push(chunk);
        continue;
      }
      const from = Math.max(0, begin - chunkOffset);
      const to = Math.min(end - chunkOffset, chunkLength2);
      slices.push(chunk.slice(from, to));
    }
    return self.clone(slices);
  }
};
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

// node_modules/@apache-arrow/esnext-esm/column.js
var Column = class extends Chunked {
  constructor(field2, vectors = [], offsets) {
    vectors = Chunked.flatten(...vectors);
    super(field2.type, vectors, offsets);
    this._field = field2;
    if (vectors.length === 1 && !(this instanceof SingleChunkColumn)) {
      return new SingleChunkColumn(field2, vectors[0], this._chunkOffsets);
    }
  }
  static new(...args) {
    let [field2, data, ...rest] = args;
    if (typeof field2 !== "string" && !(field2 instanceof Field2)) {
      data = field2;
      field2 = "";
    }
    const chunks = Chunked.flatten(Array.isArray(data) ? [...data, ...rest] : data instanceof AbstractVector ? [data, ...rest] : [AbstractVector.new(data, ...rest)]);
    if (typeof field2 === "string") {
      const type = chunks[0].data.type;
      field2 = new Field2(field2, type, true);
    } else if (!field2.nullable && chunks.some(({ nullCount }) => nullCount > 0)) {
      field2 = field2.clone({ nullable: true });
    }
    return new Column(field2, chunks);
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
    let column, field2, chunks;
    if (column = columns[index]) {
      return column;
    }
    if (field2 = (this.type.children || [])[index]) {
      chunks = this._chunks.map((vector) => vector.getChildAt(index)).filter((vec) => vec != null);
      if (chunks.length > 0) {
        return columns[index] = new Column(field2, chunks);
      }
    }
    return null;
  }
};
var SingleChunkColumn = class extends Column {
  constructor(field2, vector, offsets) {
    super(field2, [vector], offsets);
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
  set(index, value2) {
    this._chunk.set(index, value2);
  }
  indexOf(element, offset) {
    return this._chunk.indexOf(element, offset);
  }
};

// node_modules/@apache-arrow/esnext-esm/visitor/typeassembler.js
var Long2 = flatbuffers.Long;
var TypeAssembler = class extends Visitor {
  visit(node, builder) {
    return node == null || builder == null ? void 0 : super.visit(node, builder);
  }
  visitNull(_node, b) {
    Null.startNull(b);
    return Null.endNull(b);
  }
  visitInt(node, b) {
    Int.startInt(b);
    Int.addBitWidth(b, node.bitWidth);
    Int.addIsSigned(b, node.isSigned);
    return Int.endInt(b);
  }
  visitFloat(node, b) {
    FloatingPoint.startFloatingPoint(b);
    FloatingPoint.addPrecision(b, node.precision);
    return FloatingPoint.endFloatingPoint(b);
  }
  visitBinary(_node, b) {
    Binary.startBinary(b);
    return Binary.endBinary(b);
  }
  visitBool(_node, b) {
    Bool.startBool(b);
    return Bool.endBool(b);
  }
  visitUtf8(_node, b) {
    Utf8.startUtf8(b);
    return Utf8.endUtf8(b);
  }
  visitDecimal(node, b) {
    Decimal.startDecimal(b);
    Decimal.addScale(b, node.scale);
    Decimal.addPrecision(b, node.precision);
    return Decimal.endDecimal(b);
  }
  visitDate(node, b) {
    Date2.startDate(b);
    Date2.addUnit(b, node.unit);
    return Date2.endDate(b);
  }
  visitTime(node, b) {
    Time.startTime(b);
    Time.addUnit(b, node.unit);
    Time.addBitWidth(b, node.bitWidth);
    return Time.endTime(b);
  }
  visitTimestamp(node, b) {
    const timezone = node.timezone && b.createString(node.timezone) || void 0;
    Timestamp.startTimestamp(b);
    Timestamp.addUnit(b, node.unit);
    if (timezone !== void 0) {
      Timestamp.addTimezone(b, timezone);
    }
    return Timestamp.endTimestamp(b);
  }
  visitInterval(node, b) {
    Interval.startInterval(b);
    Interval.addUnit(b, node.unit);
    return Interval.endInterval(b);
  }
  visitList(_node, b) {
    List.startList(b);
    return List.endList(b);
  }
  visitStruct(_node, b) {
    Struct_.startStruct_(b);
    return Struct_.endStruct_(b);
  }
  visitUnion(node, b) {
    Union.startTypeIdsVector(b, node.typeIds.length);
    const typeIds = Union.createTypeIdsVector(b, node.typeIds);
    Union.startUnion(b);
    Union.addMode(b, node.mode);
    Union.addTypeIds(b, typeIds);
    return Union.endUnion(b);
  }
  visitDictionary(node, b) {
    const indexType = this.visit(node.indices, b);
    DictionaryEncoding.startDictionaryEncoding(b);
    DictionaryEncoding.addId(b, new Long2(node.id, 0));
    DictionaryEncoding.addIsOrdered(b, node.isOrdered);
    if (indexType !== void 0) {
      DictionaryEncoding.addIndexType(b, indexType);
    }
    return DictionaryEncoding.endDictionaryEncoding(b);
  }
  visitFixedSizeBinary(node, b) {
    FixedSizeBinary.startFixedSizeBinary(b);
    FixedSizeBinary.addByteWidth(b, node.byteWidth);
    return FixedSizeBinary.endFixedSizeBinary(b);
  }
  visitFixedSizeList(node, b) {
    FixedSizeList.startFixedSizeList(b);
    FixedSizeList.addListSize(b, node.listSize);
    return FixedSizeList.endFixedSizeList(b);
  }
  visitMap(node, b) {
    Map2.startMap(b);
    Map2.addKeysSorted(b, node.keysSorted);
    return Map2.endMap(b);
  }
};
var instance3 = new TypeAssembler();

// node_modules/@apache-arrow/esnext-esm/ipc/metadata/json.js
function schemaFromJSON(_schema, dictionaries = new Map()) {
  return new Schema2(schemaFieldsFromJSON(_schema, dictionaries), customMetadataFromJSON(_schema["customMetadata"]), dictionaries);
}
function recordBatchFromJSON(b) {
  return new RecordBatch2(b["count"], fieldNodesFromJSON(b["columns"]), buffersFromJSON(b["columns"]));
}
function dictionaryBatchFromJSON(b) {
  return new DictionaryBatch2(recordBatchFromJSON(b["data"]), b["id"], b["isDelta"]);
}
function schemaFieldsFromJSON(_schema, dictionaries) {
  return (_schema["fields"] || []).filter(Boolean).map((f) => Field2.fromJSON(f, dictionaries));
}
function fieldChildrenFromJSON(_field, dictionaries) {
  return (_field["children"] || []).filter(Boolean).map((f) => Field2.fromJSON(f, dictionaries));
}
function fieldNodesFromJSON(xs) {
  return (xs || []).reduce((fieldNodes, column) => [
    ...fieldNodes,
    new FieldNode2(column["count"], nullCountFromJSON(column["VALIDITY"])),
    ...fieldNodesFromJSON(column["children"])
  ], []);
}
function buffersFromJSON(xs, buffers = []) {
  for (let i = -1, n = (xs || []).length; ++i < n; ) {
    const column = xs[i];
    column["VALIDITY"] && buffers.push(new BufferRegion(buffers.length, column["VALIDITY"].length));
    column["TYPE"] && buffers.push(new BufferRegion(buffers.length, column["TYPE"].length));
    column["OFFSET"] && buffers.push(new BufferRegion(buffers.length, column["OFFSET"].length));
    column["DATA"] && buffers.push(new BufferRegion(buffers.length, column["DATA"].length));
    buffers = buffersFromJSON(column["children"], buffers);
  }
  return buffers;
}
function nullCountFromJSON(validity) {
  return (validity || []).reduce((sum2, val) => sum2 + +(val === 0), 0);
}
function fieldFromJSON(_field, dictionaries) {
  let id;
  let keys;
  let field2;
  let dictMeta;
  let type;
  let dictType;
  if (!dictionaries || !(dictMeta = _field["dictionary"])) {
    type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
    field2 = new Field2(_field["name"], type, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  } else if (!dictionaries.has(id = dictMeta["id"])) {
    keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new Int32();
    dictionaries.set(id, type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)));
    dictType = new Dictionary(type, keys, id, dictMeta["isOrdered"]);
    field2 = new Field2(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  } else {
    keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new Int32();
    dictType = new Dictionary(dictionaries.get(id), keys, id, dictMeta["isOrdered"]);
    field2 = new Field2(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["customMetadata"]));
  }
  return field2 || null;
}
function customMetadataFromJSON(_metadata) {
  return new Map(Object.entries(_metadata || {}));
}
function indexTypeFromJSON(_type) {
  return new Int_(_type["isSigned"], _type["bitWidth"]);
}
function typeFromJSON(f, children) {
  const typeId = f["type"]["name"];
  switch (typeId) {
    case "NONE":
      return new Null2();
    case "null":
      return new Null2();
    case "binary":
      return new Binary2();
    case "utf8":
      return new Utf82();
    case "bool":
      return new Bool2();
    case "list":
      return new List2((children || [])[0]);
    case "struct":
      return new Struct(children || []);
    case "struct_":
      return new Struct(children || []);
  }
  switch (typeId) {
    case "int": {
      const t = f["type"];
      return new Int_(t["isSigned"], t["bitWidth"]);
    }
    case "floatingpoint": {
      const t = f["type"];
      return new Float(Precision[t["precision"]]);
    }
    case "decimal": {
      const t = f["type"];
      return new Decimal2(t["scale"], t["precision"]);
    }
    case "date": {
      const t = f["type"];
      return new Date_(DateUnit[t["unit"]]);
    }
    case "time": {
      const t = f["type"];
      return new Time_(TimeUnit[t["unit"]], t["bitWidth"]);
    }
    case "timestamp": {
      const t = f["type"];
      return new Timestamp_(TimeUnit[t["unit"]], t["timezone"]);
    }
    case "interval": {
      const t = f["type"];
      return new Interval_(IntervalUnit[t["unit"]]);
    }
    case "union": {
      const t = f["type"];
      return new Union_(UnionMode[t["mode"]], t["typeIds"] || [], children || []);
    }
    case "fixedsizebinary": {
      const t = f["type"];
      return new FixedSizeBinary2(t["byteWidth"]);
    }
    case "fixedsizelist": {
      const t = f["type"];
      return new FixedSizeList2(t["listSize"], (children || [])[0]);
    }
    case "map": {
      const t = f["type"];
      return new Map_((children || [])[0], t["keysSorted"]);
    }
  }
  throw new Error(`Unrecognized type: "${typeId}"`);
}

// node_modules/@apache-arrow/esnext-esm/ipc/metadata/message.js
var Long3 = flatbuffers.Long;
var Builder3 = flatbuffers.Builder;
var ByteBuffer3 = flatbuffers.ByteBuffer;
var Message2 = class {
  constructor(bodyLength, version, headerType, header) {
    this._version = version;
    this._headerType = headerType;
    this.body = new Uint8Array(0);
    header && (this._createHeader = () => header);
    this._bodyLength = typeof bodyLength === "number" ? bodyLength : bodyLength.low;
  }
  static fromJSON(msg, headerType) {
    const message = new Message2(0, MetadataVersion.V4, headerType);
    message._createHeader = messageHeaderFromJSON(msg, headerType);
    return message;
  }
  static decode(buf) {
    buf = new ByteBuffer3(toUint8Array(buf));
    const _message = Message.getRootAsMessage(buf);
    const bodyLength = _message.bodyLength();
    const version = _message.version();
    const headerType = _message.headerType();
    const message = new Message2(bodyLength, version, headerType);
    message._createHeader = decodeMessageHeader(_message, headerType);
    return message;
  }
  static encode(message) {
    const b = new Builder3();
    let headerOffset = -1;
    if (message.isSchema()) {
      headerOffset = Schema2.encode(b, message.header());
    } else if (message.isRecordBatch()) {
      headerOffset = RecordBatch2.encode(b, message.header());
    } else if (message.isDictionaryBatch()) {
      headerOffset = DictionaryBatch2.encode(b, message.header());
    }
    Message.startMessage(b);
    Message.addVersion(b, MetadataVersion.V4);
    Message.addHeader(b, headerOffset);
    Message.addHeaderType(b, message.headerType);
    Message.addBodyLength(b, new Long3(message.bodyLength, 0));
    Message.finishMessageBuffer(b, Message.endMessage(b));
    return b.asUint8Array();
  }
  static from(header, bodyLength = 0) {
    if (header instanceof Schema2) {
      return new Message2(0, MetadataVersion.V4, MessageHeader.Schema, header);
    }
    if (header instanceof RecordBatch2) {
      return new Message2(bodyLength, MetadataVersion.V4, MessageHeader.RecordBatch, header);
    }
    if (header instanceof DictionaryBatch2) {
      return new Message2(bodyLength, MetadataVersion.V4, MessageHeader.DictionaryBatch, header);
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
    return this.headerType === MessageHeader.Schema;
  }
  isRecordBatch() {
    return this.headerType === MessageHeader.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === MessageHeader.DictionaryBatch;
  }
};
var RecordBatch2 = class {
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
var DictionaryBatch2 = class {
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
var BufferRegion = class {
  constructor(offset, length) {
    this.offset = typeof offset === "number" ? offset : offset.low;
    this.length = typeof length === "number" ? length : length.low;
  }
};
var FieldNode2 = class {
  constructor(length, nullCount) {
    this.length = typeof length === "number" ? length : length.low;
    this.nullCount = typeof nullCount === "number" ? nullCount : nullCount.low;
  }
};
function messageHeaderFromJSON(message, type) {
  return () => {
    switch (type) {
      case MessageHeader.Schema:
        return Schema2.fromJSON(message);
      case MessageHeader.RecordBatch:
        return RecordBatch2.fromJSON(message);
      case MessageHeader.DictionaryBatch:
        return DictionaryBatch2.fromJSON(message);
    }
    throw new Error(`Unrecognized Message type: { name: ${MessageHeader[type]}, type: ${type} }`);
  };
}
function decodeMessageHeader(message, type) {
  return () => {
    switch (type) {
      case MessageHeader.Schema:
        return Schema2.decode(message.header(new Schema()));
      case MessageHeader.RecordBatch:
        return RecordBatch2.decode(message.header(new RecordBatch()), message.version());
      case MessageHeader.DictionaryBatch:
        return DictionaryBatch2.decode(message.header(new DictionaryBatch()), message.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${MessageHeader[type]}, type: ${type} }`);
  };
}
Field2["encode"] = encodeField;
Field2["decode"] = decodeField;
Field2["fromJSON"] = fieldFromJSON;
Schema2["encode"] = encodeSchema;
Schema2["decode"] = decodeSchema;
Schema2["fromJSON"] = schemaFromJSON;
RecordBatch2["encode"] = encodeRecordBatch;
RecordBatch2["decode"] = decodeRecordBatch;
RecordBatch2["fromJSON"] = recordBatchFromJSON;
DictionaryBatch2["encode"] = encodeDictionaryBatch;
DictionaryBatch2["decode"] = decodeDictionaryBatch;
DictionaryBatch2["fromJSON"] = dictionaryBatchFromJSON;
FieldNode2["encode"] = encodeFieldNode;
FieldNode2["decode"] = decodeFieldNode;
BufferRegion["encode"] = encodeBufferRegion;
BufferRegion["decode"] = decodeBufferRegion;
function decodeSchema(_schema, dictionaries = new Map()) {
  const fields = decodeSchemaFields(_schema, dictionaries);
  return new Schema2(fields, decodeCustomMetadata(_schema), dictionaries);
}
function decodeRecordBatch(batch, version = MetadataVersion.V4) {
  return new RecordBatch2(batch.length(), decodeFieldNodes(batch), decodeBuffers(batch, version));
}
function decodeDictionaryBatch(batch, version = MetadataVersion.V4) {
  return new DictionaryBatch2(RecordBatch2.decode(batch.data(), version), batch.id(), batch.isDelta());
}
function decodeBufferRegion(b) {
  return new BufferRegion(b.offset(), b.length());
}
function decodeFieldNode(f) {
  return new FieldNode2(f.length(), f.nullCount());
}
function decodeFieldNodes(batch) {
  const nodes = [];
  for (let f, i = -1, j2 = -1, n = batch.nodesLength(); ++i < n; ) {
    if (f = batch.nodes(i)) {
      nodes[++j2] = FieldNode2.decode(f);
    }
  }
  return nodes;
}
function decodeBuffers(batch, version) {
  const bufferRegions = [];
  for (let b, i = -1, j2 = -1, n = batch.buffersLength(); ++i < n; ) {
    if (b = batch.buffers(i)) {
      if (version < MetadataVersion.V4) {
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
      fields[++j2] = Field2.decode(f, dictionaries);
    }
  }
  return fields;
}
function decodeFieldChildren(field2, dictionaries) {
  const children = [];
  for (let f, i = -1, j2 = -1, n = field2.childrenLength(); ++i < n; ) {
    if (f = field2.children(i)) {
      children[++j2] = Field2.decode(f, dictionaries);
    }
  }
  return children;
}
function decodeField(f, dictionaries) {
  let id;
  let field2;
  let type;
  let keys;
  let dictType;
  let dictMeta;
  if (!dictionaries || !(dictMeta = f.dictionary())) {
    type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
    field2 = new Field2(f.name(), type, f.nullable(), decodeCustomMetadata(f));
  } else if (!dictionaries.has(id = dictMeta.id().low)) {
    keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new Int32();
    dictionaries.set(id, type = decodeFieldType(f, decodeFieldChildren(f, dictionaries)));
    dictType = new Dictionary(type, keys, id, dictMeta.isOrdered());
    field2 = new Field2(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
  } else {
    keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new Int32();
    dictType = new Dictionary(dictionaries.get(id), keys, id, dictMeta.isOrdered());
    field2 = new Field2(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
  }
  return field2 || null;
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
  return new Int_(_type.isSigned(), _type.bitWidth());
}
function decodeFieldType(f, children) {
  const typeId = f.typeType();
  switch (typeId) {
    case Type["NONE"]:
      return new Null2();
    case Type["Null"]:
      return new Null2();
    case Type["Binary"]:
      return new Binary2();
    case Type["Utf8"]:
      return new Utf82();
    case Type["Bool"]:
      return new Bool2();
    case Type["List"]:
      return new List2((children || [])[0]);
    case Type["Struct_"]:
      return new Struct(children || []);
  }
  switch (typeId) {
    case Type["Int"]: {
      const t = f.type(new Int());
      return new Int_(t.isSigned(), t.bitWidth());
    }
    case Type["FloatingPoint"]: {
      const t = f.type(new FloatingPoint());
      return new Float(t.precision());
    }
    case Type["Decimal"]: {
      const t = f.type(new Decimal());
      return new Decimal2(t.scale(), t.precision());
    }
    case Type["Date"]: {
      const t = f.type(new Date2());
      return new Date_(t.unit());
    }
    case Type["Time"]: {
      const t = f.type(new Time());
      return new Time_(t.unit(), t.bitWidth());
    }
    case Type["Timestamp"]: {
      const t = f.type(new Timestamp());
      return new Timestamp_(t.unit(), t.timezone());
    }
    case Type["Interval"]: {
      const t = f.type(new Interval());
      return new Interval_(t.unit());
    }
    case Type["Union"]: {
      const t = f.type(new Union());
      return new Union_(t.mode(), t.typeIdsArray() || [], children || []);
    }
    case Type["FixedSizeBinary"]: {
      const t = f.type(new FixedSizeBinary());
      return new FixedSizeBinary2(t.byteWidth());
    }
    case Type["FixedSizeList"]: {
      const t = f.type(new FixedSizeList());
      return new FixedSizeList2(t.listSize(), (children || [])[0]);
    }
    case Type["Map"]: {
      const t = f.type(new Map2());
      return new Map_((children || [])[0], t.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${Type[typeId]}" (${typeId})`);
}
function encodeSchema(b, schema) {
  const fieldOffsets = schema.fields.map((f) => Field2.encode(b, f));
  Schema.startFieldsVector(b, fieldOffsets.length);
  const fieldsVectorOffset = Schema.createFieldsVector(b, fieldOffsets);
  const metadataOffset = !(schema.metadata && schema.metadata.size > 0) ? -1 : Schema.createCustomMetadataVector(b, [...schema.metadata].map(([k, v2]) => {
    const key = b.createString(`${k}`);
    const val = b.createString(`${v2}`);
    KeyValue.startKeyValue(b);
    KeyValue.addKey(b, key);
    KeyValue.addValue(b, val);
    return KeyValue.endKeyValue(b);
  }));
  Schema.startSchema(b);
  Schema.addFields(b, fieldsVectorOffset);
  Schema.addEndianness(b, platformIsLittleEndian ? Endianness.Little : Endianness.Big);
  if (metadataOffset !== -1) {
    Schema.addCustomMetadata(b, metadataOffset);
  }
  return Schema.endSchema(b);
}
function encodeField(b, field2) {
  let nameOffset = -1;
  let typeOffset = -1;
  let dictionaryOffset = -1;
  const type = field2.type;
  let typeId = field2.typeId;
  if (!DataType.isDictionary(type)) {
    typeOffset = instance3.visit(type, b);
  } else {
    typeId = type.dictionary.typeId;
    dictionaryOffset = instance3.visit(type, b);
    typeOffset = instance3.visit(type.dictionary, b);
  }
  const childOffsets = (type.children || []).map((f) => Field2.encode(b, f));
  const childrenVectorOffset = Field.createChildrenVector(b, childOffsets);
  const metadataOffset = !(field2.metadata && field2.metadata.size > 0) ? -1 : Field.createCustomMetadataVector(b, [...field2.metadata].map(([k, v2]) => {
    const key = b.createString(`${k}`);
    const val = b.createString(`${v2}`);
    KeyValue.startKeyValue(b);
    KeyValue.addKey(b, key);
    KeyValue.addValue(b, val);
    return KeyValue.endKeyValue(b);
  }));
  if (field2.name) {
    nameOffset = b.createString(field2.name);
  }
  Field.startField(b);
  Field.addType(b, typeOffset);
  Field.addTypeType(b, typeId);
  Field.addChildren(b, childrenVectorOffset);
  Field.addNullable(b, !!field2.nullable);
  if (nameOffset !== -1) {
    Field.addName(b, nameOffset);
  }
  if (dictionaryOffset !== -1) {
    Field.addDictionary(b, dictionaryOffset);
  }
  if (metadataOffset !== -1) {
    Field.addCustomMetadata(b, metadataOffset);
  }
  return Field.endField(b);
}
function encodeRecordBatch(b, recordBatch) {
  const nodes = recordBatch.nodes || [];
  const buffers = recordBatch.buffers || [];
  RecordBatch.startNodesVector(b, nodes.length);
  nodes.slice().reverse().forEach((n) => FieldNode2.encode(b, n));
  const nodesVectorOffset = b.endVector();
  RecordBatch.startBuffersVector(b, buffers.length);
  buffers.slice().reverse().forEach((b_) => BufferRegion.encode(b, b_));
  const buffersVectorOffset = b.endVector();
  RecordBatch.startRecordBatch(b);
  RecordBatch.addLength(b, new Long3(recordBatch.length, 0));
  RecordBatch.addNodes(b, nodesVectorOffset);
  RecordBatch.addBuffers(b, buffersVectorOffset);
  return RecordBatch.endRecordBatch(b);
}
function encodeDictionaryBatch(b, dictionaryBatch) {
  const dataOffset = RecordBatch2.encode(b, dictionaryBatch.data);
  DictionaryBatch.startDictionaryBatch(b);
  DictionaryBatch.addId(b, new Long3(dictionaryBatch.id, 0));
  DictionaryBatch.addIsDelta(b, dictionaryBatch.isDelta);
  DictionaryBatch.addData(b, dataOffset);
  return DictionaryBatch.endDictionaryBatch(b);
}
function encodeFieldNode(b, node) {
  return FieldNode.createFieldNode(b, new Long3(node.length, 0), new Long3(node.nullCount, 0));
}
function encodeBufferRegion(b, node) {
  return Buffer2.createBuffer(b, new Long3(node.offset, 0), new Long3(node.length, 0));
}
var platformIsLittleEndian = function() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
}();

// node_modules/@apache-arrow/esnext-esm/ipc/message.js
var ByteBuffer4 = flatbuffers.ByteBuffer;
var invalidMessageType = (type) => `Expected ${MessageHeader[type]} Message in stream, but was null or length 0.`;
var nullMessage = (type) => `Header pointer of flatbuffer-encoded ${MessageHeader[type]} Message is null or length 0.`;
var invalidMessageMetadata = (expected, actual) => `Expected to read ${expected} metadata bytes, but only read ${actual}.`;
var invalidMessageBodyLength = (expected, actual) => `Expected to read ${expected} bytes for message body, but only read ${actual}.`;
var MessageReader = class {
  constructor(source) {
    this.source = source instanceof ByteStream ? source : new ByteStream(source);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let r;
    if ((r = this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if (r.value === -1 && (r = this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if ((r = this.readMetadata(r.value)).done) {
      return ITERATOR_DONE;
    }
    return r;
  }
  throw(value2) {
    return this.source.throw(value2);
  }
  return(value2) {
    return this.source.return(value2);
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
    const buf = toUint8Array(this.source.read(bodyLength));
    if (buf.byteLength < bodyLength) {
      throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
    }
    return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
  }
  readSchema(throwIfNull = false) {
    const type = MessageHeader.Schema;
    const message = this.readMessage(type);
    const schema = message?.header();
    if (throwIfNull && !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
  readMetadataLength() {
    const buf = this.source.read(PADDING);
    const bb = buf && new ByteBuffer4(buf);
    const len = bb?.readInt32(0) || 0;
    return { done: len === 0, value: len };
  }
  readMetadata(metadataLength) {
    const buf = this.source.read(metadataLength);
    if (!buf) {
      return ITERATOR_DONE;
    }
    if (buf.byteLength < metadataLength) {
      throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
    }
    return { done: false, value: Message2.decode(buf) };
  }
};
var AsyncMessageReader = class {
  constructor(source, byteLength) {
    this.source = source instanceof AsyncByteStream ? source : isFileHandle(source) ? new AsyncRandomAccessFile(source, byteLength) : new AsyncByteStream(source);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  async next() {
    let r;
    if ((r = await this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if (r.value === -1 && (r = await this.readMetadataLength()).done) {
      return ITERATOR_DONE;
    }
    if ((r = await this.readMetadata(r.value)).done) {
      return ITERATOR_DONE;
    }
    return r;
  }
  async throw(value2) {
    return await this.source.throw(value2);
  }
  async return(value2) {
    return await this.source.return(value2);
  }
  async readMessage(type) {
    let r;
    if ((r = await this.next()).done) {
      return null;
    }
    if (type != null && r.value.headerType !== type) {
      throw new Error(invalidMessageType(type));
    }
    return r.value;
  }
  async readMessageBody(bodyLength) {
    if (bodyLength <= 0) {
      return new Uint8Array(0);
    }
    const buf = toUint8Array(await this.source.read(bodyLength));
    if (buf.byteLength < bodyLength) {
      throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
    }
    return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
  }
  async readSchema(throwIfNull = false) {
    const type = MessageHeader.Schema;
    const message = await this.readMessage(type);
    const schema = message?.header();
    if (throwIfNull && !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
  async readMetadataLength() {
    const buf = await this.source.read(PADDING);
    const bb = buf && new ByteBuffer4(buf);
    const len = bb?.readInt32(0) || 0;
    return { done: len === 0, value: len };
  }
  async readMetadata(metadataLength) {
    const buf = await this.source.read(metadataLength);
    if (!buf) {
      return ITERATOR_DONE;
    }
    if (buf.byteLength < metadataLength) {
      throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
    }
    return { done: false, value: Message2.decode(buf) };
  }
};
var JSONMessageReader = class extends MessageReader {
  constructor(source) {
    super(new Uint8Array(0));
    this._schema = false;
    this._body = [];
    this._batchIndex = 0;
    this._dictionaryIndex = 0;
    this._json = source instanceof ArrowJSON ? source : new ArrowJSON(source);
  }
  next() {
    const { _json } = this;
    if (!this._schema) {
      this._schema = true;
      const message = Message2.fromJSON(_json.schema, MessageHeader.Schema);
      return { done: false, value: message };
    }
    if (this._dictionaryIndex < _json.dictionaries.length) {
      const batch = _json.dictionaries[this._dictionaryIndex++];
      this._body = batch["data"]["columns"];
      const message = Message2.fromJSON(batch, MessageHeader.DictionaryBatch);
      return { done: false, value: message };
    }
    if (this._batchIndex < _json.batches.length) {
      const batch = _json.batches[this._batchIndex++];
      this._body = batch["columns"];
      const message = Message2.fromJSON(batch, MessageHeader.RecordBatch);
      return { done: false, value: message };
    }
    this._body = [];
    return ITERATOR_DONE;
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
    const type = MessageHeader.Schema;
    const message = this.readMessage(type);
    const schema = message?.header();
    if (!message || !schema) {
      throw new Error(nullMessage(type));
    }
    return schema;
  }
};
var PADDING = 4;
var MAGIC_STR = "ARROW1";
var MAGIC = new Uint8Array(MAGIC_STR.length);
for (let i = 0; i < MAGIC_STR.length; i += 1 | 0) {
  MAGIC[i] = MAGIC_STR.charCodeAt(i);
}
function checkForMagicArrowString(buffer, index = 0) {
  for (let i = -1, n = MAGIC.length; ++i < n; ) {
    if (MAGIC[i] !== buffer[index + i]) {
      return false;
    }
  }
  return true;
}
var magicLength = MAGIC.length;
var magicAndPadding = magicLength + PADDING;
var magicX2AndPadding = magicLength * 2 + PADDING;

// node_modules/@apache-arrow/esnext-esm/visitor/typecomparator.js
var TypeComparator = class extends Visitor {
  compareSchemas(schema, other) {
    return schema === other || other instanceof schema.constructor && this.compareManyFields(schema.fields, other.fields);
  }
  compareManyFields(fields, others) {
    return fields === others || Array.isArray(fields) && Array.isArray(others) && fields.length === others.length && fields.every((f, i) => this.compareFields(f, others[i]));
  }
  compareFields(field2, other) {
    return field2 === other || other instanceof field2.constructor && field2.name === other.name && field2.nullable === other.nullable && this.visit(field2.type, other.type);
  }
};
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
  return type === other || compareConstructor(type, other) && type.children.length === other.children.length && instance4.compareManyFields(type.children, other.children);
}
function compareStruct(type, other) {
  return type === other || compareConstructor(type, other) && type.children.length === other.children.length && instance4.compareManyFields(type.children, other.children);
}
function compareUnion(type, other) {
  return type === other || compareConstructor(type, other) && type.mode === other.mode && type.typeIds.every((x2, i) => x2 === other.typeIds[i]) && instance4.compareManyFields(type.children, other.children);
}
function compareDictionary(type, other) {
  return type === other || compareConstructor(type, other) && type.id === other.id && type.isOrdered === other.isOrdered && instance4.visit(type.indices, other.indices) && instance4.visit(type.dictionary, other.dictionary);
}
function compareInterval(type, other) {
  return type === other || compareConstructor(type, other) && type.unit === other.unit;
}
function compareFixedSizeList(type, other) {
  return type === other || compareConstructor(type, other) && type.listSize === other.listSize && type.children.length === other.children.length && instance4.compareManyFields(type.children, other.children);
}
function compareMap(type, other) {
  return type === other || compareConstructor(type, other) && type.keysSorted === other.keysSorted && type.children.length === other.children.length && instance4.compareManyFields(type.children, other.children);
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
var instance4 = new TypeComparator();
function compareSchemas(schema, other) {
  return instance4.compareSchemas(schema, other);
}
function compareFields(field2, other) {
  return instance4.compareFields(field2, other);
}
function compareTypes(type, other) {
  return instance4.visit(type, other);
}

// node_modules/@apache-arrow/esnext-esm/visitor/vectorassembler.js
var VectorAssembler = class extends Visitor {
  constructor() {
    super();
    this._byteLength = 0;
    this._nodes = [];
    this._buffers = [];
    this._bufferRegions = [];
  }
  static assemble(...args) {
    const assembler = new VectorAssembler();
    const vectorChildren = selectVectorChildrenArgs(RecordBatch3, args);
    const [assembleResult = assembler] = assembler.visitMany(vectorChildren);
    return assembleResult;
  }
  visit(vector) {
    if (!DataType.isDictionary(vector.type)) {
      const { data, length, nullCount } = vector;
      if (length > 2147483647) {
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      }
      if (!DataType.isNull(vector.type)) {
        addBuffer.call(this, nullCount <= 0 ? new Uint8Array(0) : truncateBitmap(data.offset, length, data.nullBitmap));
      }
      this.nodes.push(new FieldNode2(length, nullCount));
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
function addBuffer(values) {
  const byteLength = values.byteLength + 7 & ~7;
  this.buffers.push(values);
  this.bufferRegions.push(new BufferRegion(this._byteLength, byteLength));
  this._byteLength += byteLength;
  return this;
}
function assembleUnion(vector) {
  const { type, length, typeIds, valueOffsets } = vector;
  addBuffer.call(this, typeIds);
  if (type.mode === UnionMode.Sparse) {
    return assembleNestedVector.call(this, vector);
  } else if (type.mode === UnionMode.Dense) {
    if (vector.offset <= 0) {
      addBuffer.call(this, valueOffsets);
      return assembleNestedVector.call(this, vector);
    } else {
      const maxChildTypeId = typeIds.reduce((x2, y2) => Math.max(x2, y2), typeIds[0]);
      const childLengths = new Int32Array(maxChildTypeId + 1);
      const childOffsets = new Int32Array(maxChildTypeId + 1).fill(-1);
      const shiftedOffsets = new Int32Array(length);
      const unshiftedOffsets = rebaseValueOffsets(-valueOffsets[0], length, valueOffsets);
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
    return addBuffer.call(this, truncateBitmap(vector.offset, vector.length, values));
  }
  return addBuffer.call(this, packBools(vector));
}
function assembleFlatVector(vector) {
  return addBuffer.call(this, vector.values.subarray(0, vector.length * vector.stride));
}
function assembleFlatListVector(vector) {
  const { length, values, valueOffsets } = vector;
  const firstOffset = valueOffsets[0];
  const lastOffset = valueOffsets[length];
  const byteLength = Math.min(lastOffset - firstOffset, values.byteLength - firstOffset);
  addBuffer.call(this, rebaseValueOffsets(-valueOffsets[0], length, valueOffsets));
  addBuffer.call(this, values.subarray(firstOffset, firstOffset + byteLength));
  return this;
}
function assembleListVector(vector) {
  const { length, valueOffsets } = vector;
  if (valueOffsets) {
    addBuffer.call(this, rebaseValueOffsets(valueOffsets[0], length, valueOffsets));
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

// node_modules/@apache-arrow/esnext-esm/ipc/writer.js
var RecordBatchWriter = class extends ReadableInterop {
  constructor(options) {
    super();
    this._position = 0;
    this._started = false;
    this._sink = new AsyncByteQueue();
    this._schema = null;
    this._dictionaryBlocks = [];
    this._recordBatchBlocks = [];
    this._dictionaryDeltaOffsets = new Map();
    isObject(options) || (options = { autoDestroy: true, writeLegacyIpcFormat: false });
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
    if (isPromise(input)) {
      return input.then((x2) => this.writeAll(x2));
    } else if (isAsyncIterable(input)) {
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
    if (sink === this._sink || sink instanceof AsyncByteQueue) {
      this._sink = sink;
    } else {
      this._sink = new AsyncByteQueue();
      if (sink && isWritableDOMStream(sink)) {
        this.toDOMStream({ type: "bytes" }).pipeTo(sink);
      } else if (sink && isWritableNodeStream(sink)) {
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
    if (!schema || !compareSchemas(schema, this._schema)) {
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
    } else if (payload instanceof Table && !(schema = payload.schema)) {
      return this.finish() && void 0;
    } else if (payload instanceof RecordBatch3 && !(schema = payload.schema)) {
      return this.finish() && void 0;
    }
    if (schema && !compareSchemas(schema, this._schema)) {
      if (this._started && this._autoDestroy) {
        return this.close();
      }
      this.reset(this._sink, schema);
    }
    if (payload instanceof RecordBatch3) {
      if (!(payload instanceof _InternalEmptyPlaceholderRecordBatch)) {
        this._writeRecordBatch(payload);
      }
    } else if (payload instanceof Table) {
      this.writeAll(payload.chunks);
    } else if (isIterable(payload)) {
      this.writeAll(payload);
    }
  }
  _writeMessage(message, alignment = 8) {
    const a = alignment - 1;
    const buffer = Message2.encode(message);
    const flatbufferSize = buffer.byteLength;
    const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
    const alignedSize = flatbufferSize + prefixSize + a & ~a;
    const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
    if (message.headerType === MessageHeader.RecordBatch) {
      this._recordBatchBlocks.push(new FileBlock(alignedSize, message.bodyLength, this._position));
    } else if (message.headerType === MessageHeader.DictionaryBatch) {
      this._dictionaryBlocks.push(new FileBlock(alignedSize, message.bodyLength, this._position));
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
      const buffer = toUint8Array(chunk);
      if (buffer && buffer.byteLength > 0) {
        this._sink.write(buffer);
        this._position += buffer.byteLength;
      }
    }
    return this;
  }
  _writeSchema(schema) {
    return this._writeMessage(Message2.from(schema));
  }
  _writeFooter(schema) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(MAGIC);
  }
  _writePadding(nBytes) {
    return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
  }
  _writeRecordBatch(batch) {
    const { byteLength, nodes, bufferRegions, buffers } = VectorAssembler.assemble(batch);
    const recordBatch = new RecordBatch2(batch.length, nodes, bufferRegions);
    const message = Message2.from(recordBatch, byteLength);
    return this._writeDictionaries(batch)._writeMessage(message)._writeBodyBuffers(buffers);
  }
  _writeDictionaryBatch(dictionary, id, isDelta = false) {
    this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
    const { byteLength, nodes, bufferRegions, buffers } = VectorAssembler.assemble(dictionary);
    const recordBatch = new RecordBatch2(dictionary.length, nodes, bufferRegions);
    const dictionaryBatch = new DictionaryBatch2(recordBatch, id, isDelta);
    const message = Message2.from(dictionaryBatch, byteLength);
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
var RecordBatchStreamWriter = class extends RecordBatchWriter {
  static writeAll(input, options) {
    const writer = new RecordBatchStreamWriter(options);
    if (isPromise(input)) {
      return input.then((x2) => writer.writeAll(x2));
    } else if (isAsyncIterable(input)) {
      return writeAllAsync(writer, input);
    }
    return writeAll(writer, input);
  }
};
var RecordBatchFileWriter = class extends RecordBatchWriter {
  static writeAll(input) {
    const writer = new RecordBatchFileWriter();
    if (isPromise(input)) {
      return input.then((x2) => writer.writeAll(x2));
    } else if (isAsyncIterable(input)) {
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
    const buffer = Footer_.encode(new Footer_(schema, MetadataVersion.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(schema)._write(buffer)._write(Int32Array.of(buffer.byteLength))._writeMagic();
  }
};
function writeAll(writer, input) {
  let chunks = input;
  if (input instanceof Table) {
    chunks = input.chunks;
    writer.reset(void 0, input.schema);
  }
  for (const batch of chunks) {
    writer.write(batch);
  }
  return writer.finish();
}
async function writeAllAsync(writer, batches) {
  for await (const batch of batches) {
    writer.write(batch);
  }
  return writer.finish();
}

// node_modules/@apache-arrow/esnext-esm/util/recordbatch.js
var noopBuf = new Uint8Array(0);
var nullBufs = (bitmapLength) => [
  noopBuf,
  noopBuf,
  new Uint8Array(bitmapLength),
  noopBuf
];
function ensureSameLengthData(schema, chunks, batchLength = chunks.reduce((l, c) => Math.max(l, c.length), 0)) {
  let data;
  let field2;
  let i = -1;
  const n = chunks.length;
  const fields = [...schema.fields];
  const batchData = [];
  const bitmapLength = (batchLength + 63 & ~63) >> 3;
  while (++i < n) {
    if ((data = chunks[i]) && data.length === batchLength) {
      batchData[i] = data;
    } else {
      (field2 = fields[i]).nullable || (fields[i] = fields[i].clone({ nullable: true }));
      batchData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength) : Data.new(field2.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
    }
  }
  return [new Schema2(fields), batchLength, batchData];
}
function distributeColumnsIntoRecordBatches(columns) {
  return distributeVectorsIntoRecordBatches(new Schema2(columns.map(({ field: field2 }) => field2)), columns);
}
function distributeVectorsIntoRecordBatches(schema, vecs) {
  return uniformlyDistributeChunksAcrossRecordBatches(schema, vecs.map((v2) => v2 instanceof Chunked ? v2.chunks.map((c) => c.data) : [v2.data]));
}
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
    schema = new Schema2(fields, schema.metadata),
    batchArgs.map((xs) => new RecordBatch3(schema, ...xs))
  ];
}
function distributeChildData(fields, batchLength, childData, columns, memo) {
  let data;
  let field2;
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
      (field2 = fields[i]).nullable || (fields[i] = field2.clone({ nullable: true }));
      childData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength) : Data.new(field2.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
    }
  }
  return childData;
}

// node_modules/@apache-arrow/esnext-esm/vector/base.js
var BaseVector = class extends AbstractVector {
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
    return `${Type2[this.typeId]}Vector`;
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
    return AbstractVector.new(data, children);
  }
  concat(...others) {
    return Chunked.concat(this, ...others);
  }
  slice(begin, end) {
    return clampRange(this, begin, end, this._sliceInternal);
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
    return index < 0 || index >= this.numChildren ? null : (this._children || (this._children = []))[index] || (this._children[index] = AbstractVector.new(this.data.childData[index]));
  }
  toJSON() {
    return [...this];
  }
  _sliceInternal(self, begin, end) {
    return self.clone(self.data.slice(begin, end - begin), null);
  }
  _bindDataAccessors(data) {
  }
};
BaseVector.prototype[Symbol.isConcatSpreadable] = true;

// node_modules/@apache-arrow/esnext-esm/vector/binary.js
var BinaryVector = class extends BaseVector {
  asUtf8() {
    return AbstractVector.new(this.data.clone(new Utf82()));
  }
};

// node_modules/@apache-arrow/esnext-esm/vector/bool.js
var BoolVector = class extends BaseVector {
  static from(input) {
    return vectorFromValuesWithType(() => new Bool2(), input);
  }
};

// node_modules/@apache-arrow/esnext-esm/vector/date.js
var DateVector = class extends BaseVector {
  static from(...args) {
    if (args.length === 2) {
      return vectorFromValuesWithType(() => args[1] === DateUnit.DAY ? new DateDay() : new DateMillisecond(), args[0]);
    }
    return vectorFromValuesWithType(() => new DateMillisecond(), args[0]);
  }
};
var DateDayVector = class extends DateVector {
};
var DateMillisecondVector = class extends DateVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/decimal.js
var DecimalVector = class extends BaseVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/dictionary.js
var DictionaryVector = class extends BaseVector {
  constructor(data) {
    super(data);
    this.indices = AbstractVector.new(data.clone(this.type.indices));
  }
  static from(...args) {
    if (args.length === 3) {
      const [values, indices, keys] = args;
      const type = new Dictionary(values.type, indices, null, null);
      return AbstractVector.new(Data.Dictionary(type, 0, keys.length, 0, null, keys, values));
    }
    return vectorFromValuesWithType(() => args[0].type, args[0]);
  }
  get dictionary() {
    return this.data.dictionary;
  }
  reverseLookup(value2) {
    return this.dictionary.indexOf(value2);
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
  setValue(key, value2) {
    return this.dictionary.set(key, value2);
  }
};
DictionaryVector.prototype.indices = null;

// node_modules/@apache-arrow/esnext-esm/vector/fixedsizebinary.js
var FixedSizeBinaryVector = class extends BaseVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/fixedsizelist.js
var FixedSizeListVector = class extends BaseVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/float.js
var FloatVector = class extends BaseVector {
  static from(input) {
    let ArrowType = vectorTypeToDataType(this);
    if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
      const InputType = arrayTypeToDataType2(input.constructor) || ArrowType;
      if (ArrowType === null) {
        ArrowType = InputType;
      }
      if (ArrowType && ArrowType === InputType) {
        const type = new ArrowType();
        const length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
        if (!convertTo16Bit(ArrowType, input.constructor)) {
          return AbstractVector.new(Data.Float(type, 0, length, 0, null, input));
        }
      }
    }
    if (ArrowType) {
      return vectorFromValuesWithType(() => new ArrowType(), input);
    }
    if (input instanceof DataView || input instanceof ArrayBuffer) {
      throw new TypeError(`Cannot infer float type from instance of ${input.constructor.name}`);
    }
    throw new TypeError("Unrecognized FloatVector input");
  }
};
var Float16Vector = class extends FloatVector {
  toFloat32Array() {
    return new Float32Array(this);
  }
  toFloat64Array() {
    return new Float64Array(this);
  }
};
var Float32Vector = class extends FloatVector {
};
var Float64Vector = class extends FloatVector {
};
var convertTo16Bit = (typeCtor, dataCtor) => {
  return typeCtor === Float16 && dataCtor !== Uint16Array;
};
var arrayTypeToDataType2 = (ctor) => {
  switch (ctor) {
    case Uint16Array:
      return Float16;
    case Float32Array:
      return Float32;
    case Float64Array:
      return Float64;
    default:
      return null;
  }
};
var vectorTypeToDataType = (ctor) => {
  switch (ctor) {
    case Float16Vector:
      return Float16;
    case Float32Vector:
      return Float32;
    case Float64Vector:
      return Float64;
    default:
      return null;
  }
};

// node_modules/@apache-arrow/esnext-esm/vector/interval.js
var IntervalVector = class extends BaseVector {
};
var IntervalDayTimeVector = class extends IntervalVector {
};
var IntervalYearMonthVector = class extends IntervalVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/int.js
var IntVector = class extends BaseVector {
  static from(...args) {
    const [input, is64bit = false] = args;
    let ArrowType = vectorTypeToDataType2(this, is64bit);
    if (input instanceof ArrayBuffer || ArrayBuffer.isView(input)) {
      const InputType = arrayTypeToDataType3(input.constructor, is64bit) || ArrowType;
      if (ArrowType === null) {
        ArrowType = InputType;
      }
      if (ArrowType && ArrowType === InputType) {
        const type = new ArrowType();
        let length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
        if (convert32To64Bit(ArrowType, input.constructor)) {
          length *= 0.5;
        }
        return AbstractVector.new(Data.Int(type, 0, length, 0, null, input));
      }
    }
    if (ArrowType) {
      return vectorFromValuesWithType(() => new ArrowType(), input);
    }
    if (input instanceof DataView || input instanceof ArrayBuffer) {
      throw new TypeError(`Cannot infer integer type from instance of ${input.constructor.name}`);
    }
    throw new TypeError("Unrecognized IntVector input");
  }
};
var Int8Vector = class extends IntVector {
};
var Int16Vector = class extends IntVector {
};
var Int32Vector = class extends IntVector {
};
var Int64Vector = class extends IntVector {
  toBigInt64Array() {
    return toBigInt64Array(this.values);
  }
  get values64() {
    return this._values64 || (this._values64 = this.toBigInt64Array());
  }
};
var Uint8Vector = class extends IntVector {
};
var Uint16Vector = class extends IntVector {
};
var Uint32Vector = class extends IntVector {
};
var Uint64Vector = class extends IntVector {
  toBigUint64Array() {
    return toBigUint64Array(this.values);
  }
  get values64() {
    return this._values64 || (this._values64 = this.toBigUint64Array());
  }
};
var convert32To64Bit = (typeCtor, dataCtor) => {
  return (typeCtor === Int64 || typeCtor === Uint64) && (dataCtor === Int32Array || dataCtor === Uint32Array);
};
var arrayTypeToDataType3 = (ctor, is64bit) => {
  switch (ctor) {
    case Int8Array:
      return Int8;
    case Int16Array:
      return Int16;
    case Int32Array:
      return is64bit ? Int64 : Int32;
    case BigInt64ArrayCtor:
      return Int64;
    case Uint8Array:
      return Uint8;
    case Uint16Array:
      return Uint16;
    case Uint32Array:
      return is64bit ? Uint64 : Uint32;
    case BigUint64ArrayCtor:
      return Uint64;
    default:
      return null;
  }
};
var vectorTypeToDataType2 = (ctor, is64bit) => {
  switch (ctor) {
    case Int8Vector:
      return Int8;
    case Int16Vector:
      return Int16;
    case Int32Vector:
      return is64bit ? Int64 : Int32;
    case Int64Vector:
      return Int64;
    case Uint8Vector:
      return Uint8;
    case Uint16Vector:
      return Uint16;
    case Uint32Vector:
      return is64bit ? Uint64 : Uint32;
    case Uint64Vector:
      return Uint64;
    default:
      return null;
  }
};

// node_modules/@apache-arrow/esnext-esm/vector/list.js
var ListVector = class extends BaseVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/map.js
var MapVector = class extends BaseVector {
  asList() {
    const child = this.type.children[0];
    return AbstractVector.new(this.data.clone(new List2(child)));
  }
  bind(index) {
    const child = this.getChildAt(0);
    const { [index]: begin, [index + 1]: end } = this.valueOffsets;
    return new MapRow(child.slice(begin, end));
  }
};

// node_modules/@apache-arrow/esnext-esm/vector/null.js
var NullVector = class extends BaseVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/struct.js
var kRowIndex2 = Symbol.for("rowIndex");
var StructVector = class extends BaseVector {
  bind(index) {
    const proto = this._row || (this._row = new StructRow(this));
    const bound = Object.create(proto);
    bound[kRowIndex2] = index;
    return bound;
  }
};

// node_modules/@apache-arrow/esnext-esm/vector/timestamp.js
var TimestampVector = class extends BaseVector {
};
var TimestampSecondVector = class extends TimestampVector {
};
var TimestampMillisecondVector = class extends TimestampVector {
};
var TimestampMicrosecondVector = class extends TimestampVector {
};
var TimestampNanosecondVector = class extends TimestampVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/time.js
var TimeVector = class extends BaseVector {
};
var TimeSecondVector = class extends TimeVector {
};
var TimeMillisecondVector = class extends TimeVector {
};
var TimeMicrosecondVector = class extends TimeVector {
};
var TimeNanosecondVector = class extends TimeVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/union.js
var UnionVector = class extends BaseVector {
  get typeIdToChildIndex() {
    return this.data.type.typeIdToChildIndex;
  }
};
var DenseUnionVector = class extends UnionVector {
  get valueOffsets() {
    return this.data.valueOffsets;
  }
};
var SparseUnionVector = class extends UnionVector {
};

// node_modules/@apache-arrow/esnext-esm/vector/utf8.js
var Utf8Vector = class extends BaseVector {
  static from(input) {
    return vectorFromValuesWithType(() => new Utf82(), input);
  }
  asBinary() {
    return AbstractVector.new(this.data.clone(new Binary2()));
  }
};

// node_modules/@apache-arrow/esnext-esm/util/fn.js
function partial0(visit) {
  return function() {
    return visit(this);
  };
}
function partial1(visit) {
  return function(a) {
    return visit(this, a);
  };
}
function partial2(visit) {
  return function(a, b) {
    return visit(this, a, b);
  };
}

// node_modules/@apache-arrow/esnext-esm/visitor/get.js
var GetVisitor = class extends Visitor {
};
var epochDaysToMs = (data, index) => 864e5 * data[index];
var epochMillisecondsLongToMs = (data, index) => 4294967296 * data[index + 1] + (data[index] >>> 0);
var epochMicrosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e3) + (data[index] >>> 0) / 1e3;
var epochNanosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1e6) + (data[index] >>> 0) / 1e6;
var epochMillisecondsToDate = (epochMs) => new Date(epochMs);
var epochDaysToDate = (data, index) => epochMillisecondsToDate(epochDaysToMs(data, index));
var epochMillisecondsLongToDate = (data, index) => epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
var getNull = (_vector, _index) => null;
var getVariableWidthBytes = (values, valueOffsets, index) => {
  const { [index]: x2, [index + 1]: y2 } = valueOffsets;
  return x2 != null && y2 != null ? values.subarray(x2, y2) : null;
};
var getBool2 = ({ offset, values }, index) => {
  const idx = offset + index;
  const byte = values[idx >> 3];
  return (byte & 1 << idx % 8) !== 0;
};
var getDateDay = ({ values }, index) => epochDaysToDate(values, index);
var getDateMillisecond = ({ values }, index) => epochMillisecondsLongToDate(values, index * 2);
var getNumeric = ({ stride, values }, index) => values[stride * index];
var getFloat16 = ({ stride, values }, index) => uint16ToFloat64(values[stride * index]);
var getBigInts = ({ stride, values, type }, index) => BN.new(values.subarray(stride * index, stride * (index + 1)), type.isSigned);
var getFixedSizeBinary = ({ stride, values }, index) => values.subarray(stride * index, stride * (index + 1));
var getBinary = ({ values, valueOffsets }, index) => getVariableWidthBytes(values, valueOffsets, index);
var getUtf8 = ({ values, valueOffsets }, index) => {
  const bytes = getVariableWidthBytes(values, valueOffsets, index);
  return bytes !== null ? decodeUtf8(bytes) : null;
};
var getInt = (vector, index) => vector.type.bitWidth < 64 ? getNumeric(vector, index) : getBigInts(vector, index);
var getFloat = (vector, index) => vector.type.precision !== Precision.HALF ? getNumeric(vector, index) : getFloat16(vector, index);
var getDate = (vector, index) => vector.type.unit === DateUnit.DAY ? getDateDay(vector, index) : getDateMillisecond(vector, index);
var getTimestampSecond = ({ values }, index) => 1e3 * epochMillisecondsLongToMs(values, index * 2);
var getTimestampMillisecond = ({ values }, index) => epochMillisecondsLongToMs(values, index * 2);
var getTimestampMicrosecond = ({ values }, index) => epochMicrosecondsLongToMs(values, index * 2);
var getTimestampNanosecond = ({ values }, index) => epochNanosecondsLongToMs(values, index * 2);
var getTimestamp = (vector, index) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return getTimestampSecond(vector, index);
    case TimeUnit.MILLISECOND:
      return getTimestampMillisecond(vector, index);
    case TimeUnit.MICROSECOND:
      return getTimestampMicrosecond(vector, index);
    case TimeUnit.NANOSECOND:
      return getTimestampNanosecond(vector, index);
  }
};
var getTimeSecond = ({ values, stride }, index) => values[stride * index];
var getTimeMillisecond = ({ values, stride }, index) => values[stride * index];
var getTimeMicrosecond = ({ values }, index) => BN.signed(values.subarray(2 * index, 2 * (index + 1)));
var getTimeNanosecond = ({ values }, index) => BN.signed(values.subarray(2 * index, 2 * (index + 1)));
var getTime = (vector, index) => {
  switch (vector.type.unit) {
    case TimeUnit.SECOND:
      return getTimeSecond(vector, index);
    case TimeUnit.MILLISECOND:
      return getTimeMillisecond(vector, index);
    case TimeUnit.MICROSECOND:
      return getTimeMicrosecond(vector, index);
    case TimeUnit.NANOSECOND:
      return getTimeNanosecond(vector, index);
  }
};
var getDecimal = ({ values }, index) => BN.decimal(values.subarray(4 * index, 4 * (index + 1)));
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
  return vector.type.mode === UnionMode.Dense ? getDenseUnion(vector, index) : getSparseUnion(vector, index);
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
var getInterval = (vector, index) => vector.type.unit === IntervalUnit.DAY_TIME ? getIntervalDayTime(vector, index) : getIntervalYearMonth(vector, index);
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
GetVisitor.prototype.visitBool = getBool2;
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
var instance5 = new GetVisitor();

// node_modules/@apache-arrow/esnext-esm/visitor/indexof.js
var IndexOfVisitor = class extends Visitor {
};
function nullIndexOf(vector, searchElement) {
  return searchElement === null && vector.length > 0 ? 0 : -1;
}
function indexOfNull(vector, fromIndex) {
  const { nullBitmap } = vector.data;
  if (!nullBitmap || vector.nullCount <= 0) {
    return -1;
  }
  let i = 0;
  for (const isValid of new BitIterator(nullBitmap, vector.data.offset + (fromIndex || 0), vector.length, nullBitmap, getBool)) {
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
  const compare = createElementComparator(searchElement);
  for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n; ) {
    if (compare(vector.get(i))) {
      return i;
    }
  }
  return -1;
}
function indexOfUnion(vector, searchElement, fromIndex) {
  const compare = createElementComparator(searchElement);
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
var instance6 = new IndexOfVisitor();

// node_modules/@apache-arrow/esnext-esm/visitor/iterator.js
var IteratorVisitor = class extends Visitor {
};
function nullableIterator(vector) {
  const getFn = instance5.getVisitFn(vector);
  return new BitIterator(vector.data.nullBitmap, vector.data.offset, vector.length, vector, (vec, idx, nullByte, nullBit) => (nullByte & 1 << nullBit) !== 0 ? getFn(vec, idx) : null);
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
  if (vector.stride === 1 && (typeId === Type2.Timestamp || typeId === Type2.Int && type.bitWidth !== 64 || typeId === Type2.Time && type.bitWidth !== 64 || typeId === Type2.Float && type.precision > 0)) {
    return vector.data.values.subarray(0, length)[Symbol.iterator]();
  }
  return new VectorIterator(vector, instance5.getVisitFn(vector));
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
var instance7 = new IteratorVisitor();

// node_modules/@apache-arrow/esnext-esm/visitor/toarray.js
var ToArrayVisitor = class extends Visitor {
};
function arrayOfVector(vector) {
  const { type, length, stride } = vector;
  switch (type.typeId) {
    case Type2.Int:
    case Type2.Float:
    case Type2.Decimal:
    case Type2.Time:
    case Type2.Timestamp:
      return vector.data.values.subarray(0, length * stride);
  }
  return [...instance7.visit(vector)];
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
var instance8 = new ToArrayVisitor();

// node_modules/@apache-arrow/esnext-esm/visitor/bytewidth.js
var sum = (x2, y2) => x2 + y2;
var variableWidthColumnErrorMessage = (type) => `Cannot compute the byte width of variable-width column ${type}`;
var ByteWidthVisitor = class extends Visitor {
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
    return type.unit === TimeUnit.SECOND ? 4 : 8;
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
    return (fields || []).map((field2) => this.visit(field2.type));
  }
  visitSchema(schema) {
    return this.visitFields(schema.fields).reduce(sum, 0);
  }
};
var instance9 = new ByteWidthVisitor();

// node_modules/@apache-arrow/esnext-esm/visitor/vectorctor.js
var GetVectorConstructor = class extends Visitor {
  visitNull() {
    return NullVector;
  }
  visitBool() {
    return BoolVector;
  }
  visitInt() {
    return IntVector;
  }
  visitInt8() {
    return Int8Vector;
  }
  visitInt16() {
    return Int16Vector;
  }
  visitInt32() {
    return Int32Vector;
  }
  visitInt64() {
    return Int64Vector;
  }
  visitUint8() {
    return Uint8Vector;
  }
  visitUint16() {
    return Uint16Vector;
  }
  visitUint32() {
    return Uint32Vector;
  }
  visitUint64() {
    return Uint64Vector;
  }
  visitFloat() {
    return FloatVector;
  }
  visitFloat16() {
    return Float16Vector;
  }
  visitFloat32() {
    return Float32Vector;
  }
  visitFloat64() {
    return Float64Vector;
  }
  visitUtf8() {
    return Utf8Vector;
  }
  visitBinary() {
    return BinaryVector;
  }
  visitFixedSizeBinary() {
    return FixedSizeBinaryVector;
  }
  visitDate() {
    return DateVector;
  }
  visitDateDay() {
    return DateDayVector;
  }
  visitDateMillisecond() {
    return DateMillisecondVector;
  }
  visitTimestamp() {
    return TimestampVector;
  }
  visitTimestampSecond() {
    return TimestampSecondVector;
  }
  visitTimestampMillisecond() {
    return TimestampMillisecondVector;
  }
  visitTimestampMicrosecond() {
    return TimestampMicrosecondVector;
  }
  visitTimestampNanosecond() {
    return TimestampNanosecondVector;
  }
  visitTime() {
    return TimeVector;
  }
  visitTimeSecond() {
    return TimeSecondVector;
  }
  visitTimeMillisecond() {
    return TimeMillisecondVector;
  }
  visitTimeMicrosecond() {
    return TimeMicrosecondVector;
  }
  visitTimeNanosecond() {
    return TimeNanosecondVector;
  }
  visitDecimal() {
    return DecimalVector;
  }
  visitList() {
    return ListVector;
  }
  visitStruct() {
    return StructVector;
  }
  visitUnion() {
    return UnionVector;
  }
  visitDenseUnion() {
    return DenseUnionVector;
  }
  visitSparseUnion() {
    return SparseUnionVector;
  }
  visitDictionary() {
    return DictionaryVector;
  }
  visitInterval() {
    return IntervalVector;
  }
  visitIntervalDayTime() {
    return IntervalDayTimeVector;
  }
  visitIntervalYearMonth() {
    return IntervalYearMonthVector;
  }
  visitFixedSizeList() {
    return FixedSizeListVector;
  }
  visitMap() {
    return MapVector;
  }
};
var instance10 = new GetVectorConstructor();

// node_modules/@apache-arrow/esnext-esm/vector/index.js
AbstractVector.new = newVector;
AbstractVector.from = vectorFrom;
function newVector(data, ...args) {
  return new (instance10.getVisitFn(data)())(data, ...args);
}
function vectorFromValuesWithType(newDataType, input) {
  if (isIterable(input)) {
    return AbstractVector.from({ "nullValues": [null, void 0], type: newDataType(), "values": input });
  } else if (isAsyncIterable(input)) {
    return AbstractVector.from({ "nullValues": [null, void 0], type: newDataType(), "values": input });
  }
  const { "values": values = [], "type": type = newDataType(), "nullValues": nullValues = [null, void 0] } = { ...input };
  return isIterable(values) ? AbstractVector.from({ nullValues, ...input, type }) : AbstractVector.from({ nullValues, ...input, type });
}
function vectorFrom(input) {
  const { "values": values = [], ...options } = { "nullValues": [null, void 0], ...input };
  if (isIterable(values)) {
    const chunks = [...Builder.throughIterable(options)(values)];
    return chunks.length === 1 ? chunks[0] : Chunked.concat(chunks);
  }
  return (async (chunks) => {
    const transform = Builder.throughAsyncIterable(options);
    for await (const chunk of transform(values)) {
      chunks.push(chunk);
    }
    return chunks.length === 1 ? chunks[0] : Chunked.concat(chunks);
  })([]);
}
BaseVector.prototype.get = function baseVectorGet(index) {
  return instance5.visit(this, index);
};
BaseVector.prototype.set = function baseVectorSet(index, value2) {
  return instance.visit(this, index, value2);
};
BaseVector.prototype.indexOf = function baseVectorIndexOf(value2, fromIndex) {
  return instance6.visit(this, value2, fromIndex);
};
BaseVector.prototype.toArray = function baseVectorToArray() {
  return instance8.visit(this);
};
BaseVector.prototype.getByteWidth = function baseVectorGetByteWidth() {
  return instance9.visit(this.type);
};
BaseVector.prototype[Symbol.iterator] = function baseVectorSymbolIterator() {
  return instance7.visit(this);
};
BaseVector.prototype._bindDataAccessors = bindBaseVectorDataAccessors;
Object.keys(Type2).map((T2) => Type2[T2]).filter((T2) => typeof T2 === "number").filter((typeId) => typeId !== Type2.NONE).forEach((typeId) => {
  const VectorCtor = instance10.visit(typeId);
  VectorCtor.prototype["get"] = partial1(instance5.getVisitFn(typeId));
  VectorCtor.prototype["set"] = partial2(instance.getVisitFn(typeId));
  VectorCtor.prototype["indexOf"] = partial2(instance6.getVisitFn(typeId));
  VectorCtor.prototype["toArray"] = partial0(instance8.getVisitFn(typeId));
  VectorCtor.prototype["getByteWidth"] = partialType0(instance9.getVisitFn(typeId));
  VectorCtor.prototype[Symbol.iterator] = partial0(instance7.getVisitFn(typeId));
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
    if (setBool(this.nullBitmap, this.offset + i, !(a == null))) {
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

// node_modules/@apache-arrow/esnext-esm/table.js
var Table = class extends Chunked {
  constructor(...args) {
    let schema = null;
    if (args[0] instanceof Schema2) {
      schema = args[0];
    }
    const chunks = args[0] instanceof Table ? args[0].chunks : selectArgs(RecordBatch3, args);
    if (!schema && !(schema = chunks[0]?.schema)) {
      throw new TypeError("Table must be initialized with a Schema or at least one RecordBatch");
    }
    chunks[0] || (chunks[0] = new _InternalEmptyPlaceholderRecordBatch(schema));
    super(new Struct(schema.fields), chunks);
    this._schema = schema;
    this._chunks = chunks;
  }
  static empty(schema = new Schema2([])) {
    return new Table(schema, []);
  }
  static from(input) {
    if (!input) {
      return Table.empty();
    }
    if (typeof input === "object") {
      const table = isIterable(input["values"]) ? tableFromIterable(input) : isAsyncIterable(input["values"]) ? tableFromAsyncIterable(input) : null;
      if (table !== null) {
        return table;
      }
    }
    let reader = RecordBatchReader.from(input);
    if (isPromise(reader)) {
      return (async () => await Table.from(await reader))();
    }
    if (reader.isSync() && (reader = reader.open())) {
      return !reader.schema ? Table.empty() : new Table(reader.schema, [...reader]);
    }
    return (async (opening) => {
      const reader2 = await opening;
      const schema = reader2.schema;
      const batches = [];
      if (schema) {
        for await (const batch of reader2) {
          batches.push(batch);
        }
        return new Table(schema, batches);
      }
      return Table.empty();
    })(reader.open());
  }
  static async fromAsync(source) {
    return await Table.from(source);
  }
  static fromStruct(vector) {
    return Table.new(vector.data.childData, vector.type.children);
  }
  static new(...cols) {
    return new Table(...distributeColumnsIntoRecordBatches(selectColumnArgs(cols)));
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
    let field2, child;
    const fields = this._schema.fields;
    const columns = this._children || (this._children = []);
    if (child = columns[index]) {
      return child;
    }
    if (field2 = fields[index]) {
      const chunks = this._chunks.map((chunk) => chunk.getChildAt(index)).filter((vec) => vec != null);
      if (chunks.length > 0) {
        return columns[index] = new Column(field2, chunks);
      }
    }
    return null;
  }
  serialize(encoding = "binary", stream = true) {
    const Writer = !stream ? RecordBatchFileWriter : RecordBatchStreamWriter;
    return Writer.writeAll(this).toUint8Array(true);
  }
  count() {
    return this._length;
  }
  select(...columnNames) {
    const nameToIndex = this._schema.fields.reduce((m2, f, i) => m2.set(f.name, i), new Map());
    return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x2) => x2 > -1));
  }
  selectAt(...columnIndices) {
    const schema = this._schema.selectAt(...columnIndices);
    return new Table(schema, this._chunks.map(({ length, data: { childData } }) => {
      return new RecordBatch3(schema, length, columnIndices.map((i) => childData[i]).filter(Boolean));
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
    return new Table(...distributeVectorsIntoRecordBatches(schema, columns));
  }
};
function tableFromIterable(input) {
  const { type } = input;
  if (type instanceof Struct) {
    return Table.fromStruct(StructVector.from(input));
  }
  return null;
}
function tableFromAsyncIterable(input) {
  const { type } = input;
  if (type instanceof Struct) {
    return StructVector.from(input).then((vector) => Table.fromStruct(vector));
  }
  return null;
}

// node_modules/@apache-arrow/esnext-esm/recordbatch.js
var RecordBatch3 = class extends StructVector {
  constructor(...args) {
    let data;
    const schema = args[0];
    let children;
    if (args[1] instanceof Data) {
      [, data, children] = args;
    } else {
      const fields = schema.fields;
      const [, length, childData] = args;
      data = Data.Struct(new Struct(fields), 0, length, 0, null, childData);
    }
    super(data, children);
    this._schema = schema;
  }
  static from(options) {
    if (isIterable(options["values"])) {
      return Table.from(options);
    }
    return Table.from(options);
  }
  static new(...args) {
    const [fs, xs] = selectFieldArgs(args);
    const vs = xs.filter((x2) => x2 instanceof AbstractVector);
    return new RecordBatch3(...ensureSameLengthData(new Schema2(fs), vs.map((x2) => x2.data)));
  }
  clone(data, children = this._children) {
    return new RecordBatch3(this._schema, data, children);
  }
  concat(...others) {
    const schema = this._schema, chunks = Chunked.flatten(this, ...others);
    return new Table(schema, chunks.map(({ data }) => new RecordBatch3(schema, data)));
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
    const nameToIndex = this._schema.fields.reduce((m2, f, i) => m2.set(f.name, i), new Map());
    return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x2) => x2 > -1));
  }
  selectAt(...columnIndices) {
    const schema = this._schema.selectAt(...columnIndices);
    const childData = columnIndices.map((i) => this.data.childData[i]).filter(Boolean);
    return new RecordBatch3(schema, this.length, childData);
  }
};
var _InternalEmptyPlaceholderRecordBatch = class extends RecordBatch3 {
  constructor(schema) {
    super(schema, 0, schema.fields.map((f) => Data.new(f.type, 0, 0, 0)));
  }
};
var DictionaryCollector = class extends Visitor {
  constructor() {
    super(...arguments);
    this.dictionaries = new Map();
  }
  static collect(batch) {
    return new DictionaryCollector().visit(batch.data, new Struct(batch.schema.fields)).dictionaries;
  }
  visit(data, type) {
    if (DataType.isDictionary(type)) {
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

// node_modules/@apache-arrow/esnext-esm/ipc/reader.js
var RecordBatchReader = class extends ReadableInterop {
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
  throw(value2) {
    return this._impl.throw(value2);
  }
  return(value2) {
    return this._impl.return(value2);
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
    return isPromise(opening) ? opening.then(() => this) : this;
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
    return adapters_default.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return adapters_default.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
  }
  static throughNode(options) {
    throw new Error(`"throughNode" not available in this environment`);
  }
  static throughDOM(writableStrategy, readableStrategy) {
    throw new Error(`"throughDOM" not available in this environment`);
  }
  static from(source) {
    if (source instanceof RecordBatchReader) {
      return source;
    } else if (isArrowJSON(source)) {
      return fromArrowJSON(source);
    } else if (isFileHandle(source)) {
      return fromFileHandle(source);
    } else if (isPromise(source)) {
      return (async () => await RecordBatchReader.from(await source))();
    } else if (isFetchResponse(source) || isReadableDOMStream(source) || isReadableNodeStream(source) || isAsyncIterable(source)) {
      return fromAsyncByteStream(new AsyncByteStream(source));
    }
    return fromByteStream(new ByteStream(source));
  }
  static readAll(source) {
    if (source instanceof RecordBatchReader) {
      return source.isSync() ? readAllSync(source) : readAllAsync(source);
    } else if (isArrowJSON(source) || ArrayBuffer.isView(source) || isIterable(source) || isIteratorResult(source)) {
      return readAllSync(source);
    }
    return readAllAsync(source);
  }
};
var RecordBatchStreamReader = class extends RecordBatchReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  async *[Symbol.asyncIterator]() {
    yield* this[Symbol.iterator]();
  }
};
var AsyncRecordBatchStreamReader = class extends RecordBatchReader {
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
var RecordBatchFileReader = class extends RecordBatchStreamReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
};
var AsyncRecordBatchFileReader = class extends AsyncRecordBatchStreamReader {
  constructor(_impl) {
    super(_impl);
    this._impl = _impl;
  }
};
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
    return new RecordBatch3(this.schema, header.length, this._loadVectors(header, body, this.schema.fields));
  }
  _loadDictionaryBatch(header, body) {
    const { id, isDelta, data } = header;
    const { dictionaries, schema } = this;
    const dictionary = dictionaries.get(id);
    if (isDelta || !dictionary) {
      const type = schema.dictionaries.get(id);
      return dictionary && isDelta ? dictionary.concat(AbstractVector.new(this._loadVectors(data, body, [type])[0])) : AbstractVector.new(this._loadVectors(data, body, [type])[0]);
    }
    return dictionary;
  }
  _loadVectors(header, body, types) {
    return new VectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
  }
};
var RecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
  constructor(source, dictionaries) {
    super(dictionaries);
    this._reader = !isArrowJSON(source) ? new MessageReader(this._handle = source) : new JSONMessageReader(this._handle = source);
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
  throw(value2) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return this.reset()._reader.throw(value2);
    }
    return ITERATOR_DONE;
  }
  return(value2) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return this.reset()._reader.return(value2);
    }
    return ITERATOR_DONE;
  }
  next() {
    if (this.closed) {
      return ITERATOR_DONE;
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
      return { done: false, value: new _InternalEmptyPlaceholderRecordBatch(this.schema) };
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
    this._reader = new AsyncMessageReader(this._handle = source);
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
  async cancel() {
    if (!this.closed && (this.closed = true)) {
      await this.reset()._reader.return();
      this._reader = null;
      this.dictionaries = null;
    }
  }
  async open(options) {
    if (!this.closed) {
      this.autoDestroy = shouldAutoDestroy(this, options);
      if (!(this.schema || (this.schema = await this._reader.readSchema()))) {
        await this.cancel();
      }
    }
    return this;
  }
  async throw(value2) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return await this.reset()._reader.throw(value2);
    }
    return ITERATOR_DONE;
  }
  async return(value2) {
    if (!this.closed && this.autoDestroy && (this.closed = true)) {
      return await this.reset()._reader.return(value2);
    }
    return ITERATOR_DONE;
  }
  async next() {
    if (this.closed) {
      return ITERATOR_DONE;
    }
    let message;
    const { _reader: reader } = this;
    while (message = await this._readNextMessageAndValidate()) {
      if (message.isSchema()) {
        await this.reset(message.header());
      } else if (message.isRecordBatch()) {
        this._recordBatchIndex++;
        const header = message.header();
        const buffer = await reader.readMessageBody(message.bodyLength);
        const recordBatch = this._loadRecordBatch(header, buffer);
        return { done: false, value: recordBatch };
      } else if (message.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const header = message.header();
        const buffer = await reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
    if (this.schema && this._recordBatchIndex === 0) {
      this._recordBatchIndex++;
      return { done: false, value: new _InternalEmptyPlaceholderRecordBatch(this.schema) };
    }
    return await this.return();
  }
  async _readNextMessageAndValidate(type) {
    return await this._reader.readMessage(type);
  }
};
var RecordBatchFileReaderImpl = class extends RecordBatchStreamReaderImpl {
  constructor(source, dictionaries) {
    super(source instanceof RandomAccessFile ? source : new RandomAccessFile(source), dictionaries);
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
      const message = this._reader.readMessage(MessageHeader.RecordBatch);
      if (message?.isRecordBatch()) {
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
      const message = this._reader.readMessage(MessageHeader.DictionaryBatch);
      if (message?.isDictionaryBatch()) {
        const header = message.header();
        const buffer = this._reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
  }
  _readFooter() {
    const { _handle } = this;
    const offset = _handle.size - magicAndPadding;
    const length = _handle.readInt32(offset);
    const buffer = _handle.readAt(offset - length, length);
    return Footer_.decode(buffer);
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
    super(source instanceof AsyncRandomAccessFile ? source : new AsyncRandomAccessFile(source, byteLength), dictionaries);
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
  async open(options) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = await this._readFooter()).schema;
      for (const block of this._footer.dictionaryBatches()) {
        block && await this._readDictionaryBatch(this._dictionaryIndex++);
      }
    }
    return await super.open(options);
  }
  async readRecordBatch(index) {
    if (this.closed) {
      return null;
    }
    if (!this._footer) {
      await this.open();
    }
    const block = this._footer && this._footer.getRecordBatch(index);
    if (block && await this._handle.seek(block.offset)) {
      const message = await this._reader.readMessage(MessageHeader.RecordBatch);
      if (message?.isRecordBatch()) {
        const header = message.header();
        const buffer = await this._reader.readMessageBody(message.bodyLength);
        const recordBatch = this._loadRecordBatch(header, buffer);
        return recordBatch;
      }
    }
    return null;
  }
  async _readDictionaryBatch(index) {
    const block = this._footer && this._footer.getDictionaryBatch(index);
    if (block && await this._handle.seek(block.offset)) {
      const message = await this._reader.readMessage(MessageHeader.DictionaryBatch);
      if (message?.isDictionaryBatch()) {
        const header = message.header();
        const buffer = await this._reader.readMessageBody(message.bodyLength);
        const vector = this._loadDictionaryBatch(header, buffer);
        this.dictionaries.set(header.id, vector);
      }
    }
  }
  async _readFooter() {
    const { _handle } = this;
    _handle._pending && await _handle._pending;
    const offset = _handle.size - magicAndPadding;
    const length = await _handle.readInt32(offset);
    const buffer = await _handle.readAt(offset - length, length);
    return Footer_.decode(buffer);
  }
  async _readNextMessageAndValidate(type) {
    if (!this._footer) {
      await this.open();
    }
    if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const block = this._footer.getRecordBatch(this._recordBatchIndex);
      if (block && await this._handle.seek(block.offset)) {
        return await this._reader.readMessage(type);
      }
    }
    return null;
  }
};
var RecordBatchJSONReaderImpl = class extends RecordBatchStreamReaderImpl {
  constructor(source, dictionaries) {
    super(source, dictionaries);
  }
  _loadVectors(header, body, types) {
    return new JSONVectorLoader(body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
  }
};
function shouldAutoDestroy(self, options) {
  return options && typeof options["autoDestroy"] === "boolean" ? options["autoDestroy"] : self["autoDestroy"];
}
function* readAllSync(source) {
  const reader = RecordBatchReader.from(source);
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
async function* readAllAsync(source) {
  const reader = await RecordBatchReader.from(source);
  try {
    if (!(await reader.open({ autoDestroy: false })).closed) {
      do {
        yield reader;
      } while (!(await reader.reset().open()).closed);
    }
  } finally {
    await reader.cancel();
  }
}
function fromArrowJSON(source) {
  return new RecordBatchStreamReader(new RecordBatchJSONReaderImpl(source));
}
function fromByteStream(source) {
  const bytes = source.peek(magicLength + 7 & ~7);
  return bytes && bytes.byteLength >= 4 ? !checkForMagicArrowString(bytes) ? new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(source.read())) : new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(function* () {
  }()));
}
async function fromAsyncByteStream(source) {
  const bytes = await source.peek(magicLength + 7 & ~7);
  return bytes && bytes.byteLength >= 4 ? !checkForMagicArrowString(bytes) ? new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(await source.read())) : new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(async function* () {
  }()));
}
async function fromFileHandle(source) {
  const { size } = await source.stat();
  const file = new AsyncRandomAccessFile(source, size);
  if (size >= magicX2AndPadding) {
    if (checkForMagicArrowString(await file.readAt(0, magicLength + 7 & ~7))) {
      return new AsyncRecordBatchFileReader(new AsyncRecordBatchFileReaderImpl(file));
    }
  }
  return new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(file));
}

// node_modules/@apache-arrow/esnext-esm/io/whatwg/iterable.js
function toDOMStream(source, options) {
  if (isAsyncIterable(source)) {
    return asyncIterableAsReadableDOMStream(source, options);
  }
  if (isIterable(source)) {
    return iterableAsReadableDOMStream(source, options);
  }
  throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
}
function iterableAsReadableDOMStream(source, options) {
  let it = null;
  const bm = options?.type === "bytes" || false;
  const hwm = options?.highWaterMark || 2 ** 24;
  return new ReadableStream({
    ...options,
    start(controller) {
      next(controller, it || (it = source[Symbol.iterator]()));
    },
    pull(controller) {
      it ? next(controller, it) : controller.close();
    },
    cancel() {
      (it?.return && it.return() || true) && (it = null);
    }
  }, { highWaterMark: bm ? hwm : void 0, ...options });
  function next(controller, it2) {
    let buf;
    let r = null;
    let size = controller.desiredSize || null;
    while (!(r = it2.next(bm ? size : null)).done) {
      if (ArrayBuffer.isView(r.value) && (buf = toUint8Array(r.value))) {
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
  const bm = options?.type === "bytes" || false;
  const hwm = options?.highWaterMark || 2 ** 24;
  return new ReadableStream({
    ...options,
    async start(controller) {
      await next(controller, it || (it = source[Symbol.asyncIterator]()));
    },
    async pull(controller) {
      it ? await next(controller, it) : controller.close();
    },
    async cancel() {
      (it?.return && await it.return() || true) && (it = null);
    }
  }, { highWaterMark: bm ? hwm : void 0, ...options });
  async function next(controller, it2) {
    let buf;
    let r = null;
    let size = controller.desiredSize || null;
    while (!(r = await it2.next(bm ? size : null)).done) {
      if (ArrayBuffer.isView(r.value) && (buf = toUint8Array(r.value))) {
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

// node_modules/@apache-arrow/esnext-esm/io/whatwg/builder.js
function builderThroughDOMStream(options) {
  return new BuilderTransform(options);
}
var BuilderTransform = class {
  constructor(options) {
    this._numChunks = 0;
    this._finished = false;
    this._bufferedSize = 0;
    const { ["readableStrategy"]: readableStrategy, ["writableStrategy"]: writableStrategy, ["queueingStrategy"]: queueingStrategy = "count", ...builderOptions } = options;
    this._controller = null;
    this._builder = Builder.new(builderOptions);
    this._getSize = queueingStrategy !== "bytes" ? chunkLength : chunkByteLength;
    const { ["highWaterMark"]: readableHighWaterMark = queueingStrategy === "bytes" ? 2 ** 14 : 1e3 } = { ...readableStrategy };
    const { ["highWaterMark"]: writableHighWaterMark = queueingStrategy === "bytes" ? 2 ** 14 : 1e3 } = { ...writableStrategy };
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
      "size": (value2) => this._writeValueAndReturnChunkSize(value2)
    });
  }
  _writeValueAndReturnChunkSize(value2) {
    const bufferedSize = this._bufferedSize;
    this._bufferedSize = this._getSize(this._builder.append(value2));
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
var chunkLength = (chunk) => chunk.length;
var chunkByteLength = (chunk) => chunk.byteLength;

// node_modules/@apache-arrow/esnext-esm/io/whatwg/reader.js
function recordBatchReaderThroughDOMStream(writableStrategy, readableStrategy) {
  const queue = new AsyncByteQueue();
  let reader = null;
  const readable = new ReadableStream({
    async cancel() {
      await queue.close();
    },
    async start(controller) {
      await next(controller, reader || (reader = await open()));
    },
    async pull(controller) {
      reader ? await next(controller, reader) : controller.close();
    }
  });
  return { writable: new WritableStream(queue, { "highWaterMark": 2 ** 14, ...writableStrategy }), readable };
  async function open() {
    return await (await RecordBatchReader.from(queue)).open(readableStrategy);
  }
  async function next(controller, reader2) {
    let size = controller.desiredSize;
    let r = null;
    while (!(r = await reader2.next()).done) {
      controller.enqueue(r.value);
      if (size != null && --size <= 0) {
        return;
      }
    }
    controller.close();
  }
}

// node_modules/@apache-arrow/esnext-esm/io/whatwg/writer.js
function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
  const writer = new this(writableStrategy);
  const reader = new AsyncByteStream(writer);
  const readable = new ReadableStream({
    type: "bytes",
    async cancel() {
      await reader.cancel();
    },
    async pull(controller) {
      await next(controller);
    },
    async start(controller) {
      await next(controller);
    }
  }, { "highWaterMark": 2 ** 14, ...readableStrategy });
  return { writable: new WritableStream(writer, writableStrategy), readable };
  async function next(controller) {
    let buf = null;
    let size = controller.desiredSize;
    while (buf = await reader.read(size || null)) {
      controller.enqueue(buf);
      if (size != null && (size -= buf.byteLength) <= 0) {
        return;
      }
    }
    controller.close();
  }
}

// node_modules/@apache-arrow/esnext-esm/compute/predicate.js
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
var Literal = class extends Value {
  constructor(v2) {
    super();
    this.v = v2;
  }
};
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
var CombinationPredicate = class extends Predicate {
  constructor(...children) {
    super();
    this.children = children;
  }
};
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
  _bindColLit(batch, col, lit) {
    const col_func = col.bind(batch);
    if (col.vector instanceof DictionaryVector) {
      let key;
      const vector = col.vector;
      if (vector.dictionary !== this.lastDictionary) {
        key = vector.reverseLookup(lit.v);
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
      return (idx, cols) => col_func(idx, cols) == lit.v;
    }
  }
  _bindLitCol(batch, lit, col) {
    return this._bindColLit(batch, col, lit);
  }
};
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
  _bindColLit(batch, col, lit) {
    const col_func = col.bind(batch);
    return (idx, cols) => col_func(idx, cols) <= lit.v;
  }
  _bindLitCol(batch, lit, col) {
    const col_func = col.bind(batch);
    return (idx, cols) => lit.v <= col_func(idx, cols);
  }
};
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
  _bindColLit(batch, col, lit) {
    const col_func = col.bind(batch);
    return (idx, cols) => col_func(idx, cols) >= lit.v;
  }
  _bindLitCol(batch, lit, col) {
    const col_func = col.bind(batch);
    return (idx, cols) => lit.v >= col_func(idx, cols);
  }
};
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

// node_modules/@apache-arrow/esnext-esm/compute/dataframe.js
var DataFrame = class extends Table {
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
    const count_by = typeof name === "string" ? new Col(name) : name;
    count_by.bind(batches[numBatches - 1]);
    const vector = count_by.vector;
    if (!DataType.isDictionary(vector.type)) {
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
    return new CountByResult(vector.dictionary, IntVector.from(counts));
  }
};
var CountByResult = class extends Table {
  constructor(values, counts) {
    const schema = new Schema2([
      new Field2("values", values.type),
      new Field2("counts", counts.type)
    ]);
    super(new RecordBatch3(schema, counts.length, [values, counts]));
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
    let sum2 = 0;
    const batches = this._chunks;
    const numBatches = batches.length;
    for (let batchIndex = -1; ++batchIndex < numBatches; ) {
      const batch = batches[batchIndex];
      const predicate = this._predicate.bind(batch);
      for (let index = -1, numRows = batch.length; ++index < numRows; ) {
        if (predicate(index, batch)) {
          ++sum2;
        }
      }
    }
    return sum2;
  }
  [Symbol.iterator]() {
    return new FilteredBatchIterator(this._chunks, this._predicate);
  }
  filter(predicate) {
    return new FilteredDataFrame(this._chunks, this._predicate.and(predicate));
  }
  countBy(name) {
    const batches = this._chunks, numBatches = batches.length;
    const count_by = typeof name === "string" ? new Col(name) : name;
    count_by.bind(batches[numBatches - 1]);
    const vector = count_by.vector;
    if (!DataType.isDictionary(vector.type)) {
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
    return new CountByResult(vector.dictionary, IntVector.from(counts));
  }
};

// node_modules/@apache-arrow/esnext-esm/Arrow.js
var util = {
  ...bn_exports,
  ...int_exports,
  ...bit_exports,
  ...math_exports,
  ...buffer_exports,
  ...vector_exports,
  compareSchemas,
  compareFields,
  compareTypes
};

// node_modules/@apache-arrow/esnext-esm/Arrow.dom.js
adapters_default.toDOMStream = toDOMStream;
Builder["throughDOM"] = builderThroughDOMStream;
RecordBatchReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchFileReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchStreamReader["throughDOM"] = recordBatchReaderThroughDOMStream;
RecordBatchWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
RecordBatchFileWriter["throughDOM"] = recordBatchWriterThroughDOMStream;
RecordBatchStreamWriter["throughDOM"] = recordBatchWriterThroughDOMStream;

// node_modules/wasm-feature-detect/dist/esm/index.js
var bulkMemory = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11]));
var exceptions = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 6, 64, 25, 11, 11]));
var simd = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));
var threads = () => (async (e) => {
  try {
    return typeof MessageChannel != "undefined" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
  } catch (e2) {
    return false;
  }
})(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]));

// node_modules/@duckdb/duckdb-wasm/dist/duckdb-esm.js
var P = class extends AsyncByteQueue {
  flush() {
    let e = super.toUint8Array(true);
    return this._values.length = 0, e;
  }
};
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
function I(n, e) {
  switch (e.typeId) {
    case Type2.Binary:
      return { name: n, type: "binary" };
    case Type2.Bool:
      return { name: n, type: "bool" };
    case Type2.Date:
      return { name: n, type: "date" };
    case Type2.DateDay:
      return { name: n, type: "date32[d]" };
    case Type2.DateMillisecond:
      return { name: n, type: "date64[ms]" };
    case Type2.Decimal: {
      let r = e;
      return { name: n, type: "decimal", precision: r.precision, scale: r.scale };
    }
    case Type2.Float:
      return { name: n, type: "float" };
    case Type2.Float16:
      return { name: n, type: "float16" };
    case Type2.Float32:
      return { name: n, type: "float32" };
    case Type2.Float64:
      return { name: n, type: "float64" };
    case Type2.Int:
      return { name: n, type: "int32" };
    case Type2.Int16:
      return { name: n, type: "int16" };
    case Type2.Int32:
      return { name: n, type: "int32" };
    case Type2.Int64:
      return { name: n, type: "int64" };
    case Type2.Uint16:
      return { name: n, type: "uint16" };
    case Type2.Uint32:
      return { name: n, type: "uint32" };
    case Type2.Uint64:
      return { name: n, type: "uint64" };
    case Type2.Uint8:
      return { name: n, type: "uint8" };
    case Type2.IntervalDayTime:
      return { name: n, type: "interval[dt]" };
    case Type2.IntervalYearMonth:
      return { name: n, type: "interval[m]" };
    case Type2.List: {
      let r = e;
      return { name: n, type: "list", children: [I(r.valueField.name, r.valueField.type)] };
    }
    case Type2.FixedSizeBinary:
      return { name: n, type: "fixedsizebinary", byteWidth: e.byteWidth };
    case Type2.Null:
      return { name: n, type: "null" };
    case Type2.Utf8:
      return { name: n, type: "utf8" };
    case Type2.Struct:
      return { name: n, type: "struct", children: e.children.map((t) => I(t.name, t.type)) };
    case Type2.Time:
      return { name: n, type: "time[s]" };
    case Type2.TimeMicrosecond:
      return { name: n, type: "time[us]" };
    case Type2.TimeMillisecond:
      return { name: n, type: "time[ms]" };
    case Type2.TimeNanosecond:
      return { name: n, type: "time[ns]" };
    case Type2.TimeSecond:
      return { name: n, type: "time[s]" };
    case Type2.Timestamp:
      return { name: n, type: "timestamp", timezone: e.timezone || void 0 };
    case Type2.TimestampSecond:
      return { name: n, type: "timestamp[s]", timezone: e.timezone || void 0 };
    case Type2.TimestampMicrosecond:
      return { name: n, type: "timestamp[us]", timezone: e.timezone || void 0 };
    case Type2.TimestampNanosecond:
      return { name: n, type: "timestamp[ns]", timezone: e.timezone || void 0 };
    case Type2.TimestampMillisecond:
      return { name: n, type: "timestamp[ms]", timezone: e.timezone || void 0 };
  }
  throw new Error(`unsupported arrow type: ${e.toString()}`);
}
var ne = new TextEncoder();
var j;
(function(i) {
  i[i.WASM_EXCEPTIONS = 1] = "WASM_EXCEPTIONS", i[i.WASM_THREADS = 2] = "WASM_THREADS", i[i.WASM_SIMD = 4] = "WASM_SIMD", i[i.WASM_BULK_MEMORY = 8] = "WASM_BULK_MEMORY", i[i.EMIT_BIGINT = 16] = "EMIT_BIGINT";
})(j || (j = {}));
var J;
(function(r) {
  r.ROW_ARRAY = "row-array", r.COLUMN_OBJECT = "column-object";
})(J || (J = {}));
var q;
(function(r) {
  r[r.APPEND = 0] = "APPEND", r[r.IMPORT = 1] = "IMPORT";
})(q || (q = {}));
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
var oe = class {
  log(e) {
    console.log(e);
  }
};
var B = class {
  constructor(e, r) {
    this._bindings = e, this._conn = r;
  }
  get bindings() {
    return this._bindings;
  }
  async close() {
    return this._bindings.disconnect(this._conn);
  }
  useUnsafe(e) {
    return e(this._bindings, this._conn);
  }
  async query(e) {
    this._bindings.logger.log({ timestamp: new Date(), level: T.INFO, origin: y.ASYNC_DUCKDB, topic: S.QUERY, event: g.RUN, value: e });
    let r = await this._bindings.runQuery(this._conn, e), t = RecordBatchReader.from(r);
    return console.assert(t.isSync()), console.assert(t.isFile()), Table.from(t);
  }
  async send(e) {
    this._bindings.logger.log({ timestamp: new Date(), level: T.INFO, origin: y.ASYNC_DUCKDB, topic: S.QUERY, event: g.RUN, value: e });
    let r = await this._bindings.sendQuery(this._conn, e), t = new v(this._bindings, this._conn, r), s = await RecordBatchReader.from(t);
    return console.assert(s.isAsync()), console.assert(s.isStream()), s;
  }
  async prepare(e) {
    let r = await this._bindings.createPrepared(this._conn, e);
    return new z(this._bindings, this._conn, r);
  }
  async insertArrowVectors(e, r) {
    await this.insertArrowTable(Table.new(e), r);
  }
  async insertArrowTable(e, r) {
    e.schema.fields.length == 0 && console.warn("The schema is empty! If you used arrow.Table.from, consider constructing schema and batches manually"), await this.insertArrowBatches(e.schema, e.chunks, r);
  }
  async insertArrowBatches(e, r, t) {
    let s = new P(), i = new RecordBatchStreamWriter().reset(s, e), c = true;
    for (let b of r)
      c || await this._bindings.insertArrowFromIPCStream(this._conn, s.flush(), t), c = false, i.write(b);
    i.finish(), await this._bindings.insertArrowFromIPCStream(this._conn, s.flush(), t);
  }
  async insertArrowFromIPCStream(e, r) {
    await this._bindings.insertArrowFromIPCStream(this._conn, e, r);
  }
  async insertCSVFromPath(e, r) {
    await this._bindings.insertCSVFromPath(this._conn, e, r);
  }
  async insertJSONFromPath(e, r) {
    await this._bindings.insertJSONFromPath(this._conn, e, r);
  }
};
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
var z = class {
  constructor(e, r, t) {
    this.bindings = e, this.connectionId = r, this.statementId = t;
  }
  async close() {
    await this.bindings.closePrepared(this.connectionId, this.statementId);
  }
  async query(...e) {
    let r = await this.bindings.runPrepared(this.connectionId, this.statementId, e), t = RecordBatchReader.from(r);
    return console.assert(t.isSync()), console.assert(t.isFile()), Table.from(t);
  }
  async send(...e) {
    let r = await this.bindings.sendPrepared(this.connectionId, this.statementId, e), t = new v(this.bindings, this.connectionId, r), s = await RecordBatchReader.from(t);
    return console.assert(s.isAsync()), console.assert(s.isStream()), s;
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
var m = class {
  constructor(e, r) {
    this.promiseResolver = () => {
    };
    this.promiseRejecter = () => {
    };
    this.type = e, this.data = r, this.promise = new Promise((t, s) => {
      this.promiseResolver = t, this.promiseRejecter = s;
    });
  }
};
var ce = new TextEncoder();
var de = class {
  constructor(e, r = null) {
    this._worker = null;
    this._workerShutdownPromise = null;
    this._workerShutdownResolver = () => {
    };
    this._nextMessageId = 0;
    this._pendingRequests = new Map();
    this._logger = e, this._onMessageHandler = this.onMessage.bind(this), this._onErrorHandler = this.onError.bind(this), this._onCloseHandler = this.onClose.bind(this), r != null && this.attach(r);
  }
  get logger() {
    return this._logger;
  }
  attach(e) {
    this._worker = e, this._worker.addEventListener("message", this._onMessageHandler), this._worker.addEventListener("error", this._onErrorHandler), this._worker.addEventListener("close", this._onCloseHandler), this._workerShutdownPromise = new Promise((r, t) => {
      this._workerShutdownResolver = r;
    });
  }
  detach() {
    !this._worker || (this._worker.removeEventListener("message", this._onMessageHandler), this._worker.removeEventListener("error", this._onErrorHandler), this._worker.removeEventListener("close", this._onCloseHandler), this._worker = null, this._workerShutdownResolver(null), this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    });
  }
  async terminate() {
    !this._worker || (this._worker.terminate(), this._worker = null, this._workerShutdownPromise = null, this._workerShutdownResolver = () => {
    });
  }
  async postTask(e, r = []) {
    if (!this._worker) {
      console.error("cannot send a message since the worker is not set!");
      return;
    }
    let t = this._nextMessageId++;
    return this._pendingRequests.set(t, e), this._worker.postMessage({ messageId: t, type: e.type, data: e.data }), await e.promise;
  }
  onMessage(e) {
    let r = e.data;
    r.type == u.LOG && this._logger.log(r.data);
    let t = this._pendingRequests.get(r.requestId);
    if (!t) {
      console.warn(`unassociated response: [${r.requestId}, ${r.type.toString()}]`);
      return;
    }
    if (this._pendingRequests.delete(r.requestId), r.type == u.ERROR) {
      let s = new Error(r.data.message);
      s.name = r.data.name, s.stack = r.data.stack, t.promiseRejecter(s);
      return;
    }
    switch (t.type) {
      case o.CLOSE_PREPARED:
      case o.COLLECT_FILE_STATISTICS:
      case o.COPY_FILE_TO_PATH:
      case o.DISCONNECT:
      case o.DROP_FILES:
      case o.FLUSH_FILES:
      case o.INSERT_ARROW_FROM_IPC_STREAM:
      case o.INSERT_CSV_FROM_PATH:
      case o.INSERT_JSON_FROM_PATH:
      case o.INSTANTIATE:
      case o.OPEN:
      case o.PING:
      case o.REGISTER_FILE_BUFFER:
      case o.REGISTER_FILE_HANDLE:
      case o.REGISTER_FILE_URL:
      case o.RESET:
        if (r.type == u.OK) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.GET_VERSION:
        if (r.type == u.VERSION_STRING) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.GET_FEATURE_FLAGS:
        if (r.type == u.FEATURE_FLAGS) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.TOKENIZE:
        if (r.type == u.SCRIPT_TOKENS) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.DROP_FILE:
        if (r.type == u.SUCCESS) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.COPY_FILE_TO_BUFFER:
        if (r.type == u.FILE_BUFFER) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.EXPORT_FILE_STATISTICS:
        if (r.type == u.FILE_STATISTICS) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.CONNECT:
        if (r.type == u.CONNECTION_INFO) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.RUN_PREPARED:
      case o.RUN_QUERY:
        if (r.type == u.QUERY_RESULT) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.SEND_PREPARED:
      case o.SEND_QUERY:
        if (r.type == u.QUERY_START) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.FETCH_QUERY_RESULTS:
        if (r.type == u.QUERY_RESULT_CHUNK) {
          t.promiseResolver(r.data);
          return;
        }
        break;
      case o.CREATE_PREPARED:
        if (r.type == u.PREPARED_STATEMENT_ID) {
          t.promiseResolver(r.data);
          return;
        }
        break;
    }
    t.promiseRejecter(new Error(`unexpected response type: ${r.type.toString()}`));
  }
  onError(e) {
    console.error(e), console.error(`error in duckdb worker: ${e.message}`), this._pendingRequests.clear();
  }
  onClose() {
    if (this._workerShutdownResolver(null), this._pendingRequests.size != 0) {
      console.warn(`worker terminated with ${this._pendingRequests.size} pending requests`);
      return;
    }
    this._pendingRequests.clear();
  }
  async reset() {
    let e = new m(o.RESET, null);
    return await this.postTask(e);
  }
  async ping() {
    let e = new m(o.PING, null);
    await this.postTask(e);
  }
  async dropFile(e) {
    let r = new m(o.DROP_FILE, e);
    return await this.postTask(r);
  }
  async dropFiles() {
    let e = new m(o.DROP_FILES, null);
    return await this.postTask(e);
  }
  async flushFiles() {
    let e = new m(o.FLUSH_FILES, null);
    return await this.postTask(e);
  }
  async instantiate(e, r = null) {
    let t = new m(o.INSTANTIATE, [e, r]);
    return await this.postTask(t);
  }
  async getVersion() {
    let e = new m(o.GET_VERSION, null);
    return await this.postTask(e);
  }
  async getFeatureFlags() {
    let e = new m(o.GET_FEATURE_FLAGS, null);
    return await this.postTask(e);
  }
  async open(e) {
    let r = new m(o.OPEN, e);
    await this.postTask(r);
  }
  async tokenize(e) {
    let r = new m(o.TOKENIZE, e);
    return await this.postTask(r);
  }
  async connectInternal() {
    let e = new m(o.CONNECT, null);
    return await this.postTask(e);
  }
  async connect() {
    let e = await this.connectInternal();
    return new B(this, e);
  }
  async disconnect(e) {
    let r = new m(o.DISCONNECT, e);
    await this.postTask(r);
  }
  async runQuery(e, r) {
    let t = new m(o.RUN_QUERY, [e, r]);
    return await this.postTask(t);
  }
  async sendQuery(e, r) {
    let t = new m(o.SEND_QUERY, [e, r]);
    return await this.postTask(t);
  }
  async fetchQueryResults(e) {
    let r = new m(o.FETCH_QUERY_RESULTS, e);
    return await this.postTask(r);
  }
  async createPrepared(e, r) {
    let t = new m(o.CREATE_PREPARED, [e, r]);
    return await this.postTask(t);
  }
  async closePrepared(e, r) {
    let t = new m(o.CLOSE_PREPARED, [e, r]);
    await this.postTask(t);
  }
  async runPrepared(e, r, t) {
    let s = new m(o.RUN_PREPARED, [e, r, t]);
    return await this.postTask(s);
  }
  async sendPrepared(e, r, t) {
    let s = new m(o.SEND_PREPARED, [e, r, t]);
    return await this.postTask(s);
  }
  async registerFileText(e, r) {
    let t = ce.encode(r);
    await this.registerFileBuffer(e, t);
  }
  async registerFileURL(e, r) {
    r === void 0 && (r = e);
    let t = new m(o.REGISTER_FILE_URL, [e, r]);
    await this.postTask(t);
  }
  async registerEmptyFileBuffer(e) {
    let r = new m(o.REGISTER_FILE_BUFFER, [e, new Uint8Array()]);
    await this.postTask(r);
  }
  async registerFileBuffer(e, r) {
    let t = new m(o.REGISTER_FILE_BUFFER, [e, r]);
    await this.postTask(t, [r.buffer]);
  }
  async registerFileHandle(e, r) {
    let t = new m(o.REGISTER_FILE_HANDLE, [e, r]);
    await this.postTask(t, []);
  }
  async collectFileStatistics(e, r) {
    let t = new m(o.COLLECT_FILE_STATISTICS, [e, r]);
    await this.postTask(t, []);
  }
  async exportFileStatistics(e) {
    let r = new m(o.EXPORT_FILE_STATISTICS, e);
    return await this.postTask(r, []);
  }
  async copyFileToBuffer(e) {
    let r = new m(o.COPY_FILE_TO_BUFFER, e);
    return await this.postTask(r);
  }
  async copyFileToPath(e, r) {
    let t = new m(o.COPY_FILE_TO_PATH, [e, r]);
    await this.postTask(t);
  }
  async insertArrowFromIPCStream(e, r, t) {
    let s = new m(o.INSERT_ARROW_FROM_IPC_STREAM, [e, r, t]);
    await this.postTask(s, [r.buffer]);
  }
  async insertCSVFromPath(e, r, t) {
    if (t.columns !== void 0) {
      let i = [];
      for (let c in t.columns) {
        let b = t.columns[c];
        i.push(I(c, b));
      }
      t.columnsFlat = i, delete t.columns;
    }
    let s = new m(o.INSERT_CSV_FROM_PATH, [e, r, t]);
    await this.postTask(s);
  }
  async insertJSONFromPath(e, r, t) {
    if (t.columns !== void 0) {
      let i = [];
      for (let c in t.columns) {
        let b = t.columns[c];
        i.push(I(c, b));
      }
      t.columnsFlat = i, delete t.columns;
    }
    let s = new m(o.INSERT_JSON_FROM_PATH, [e, r, t]);
    await this.postTask(s);
  }
};
var ue = "@duckdb/duckdb-wasm";
var me = "0.1.12-dev26.0";
var pe = "DuckDB powered by WebAssembly";
var _e = "MPL-2.0";
var Ee = { type: "git", url: "https://github.com/duckdb/duckdb-wasm.git" };
var be = { "@apache-arrow/esnext-esm": "^6.0.0", "wasm-feature-detect": "^1.2.11" };
var he = { "@types/emscripten": "^1.39.4", "@types/jasmine": "^3.10.2", "@typescript-eslint/eslint-plugin": "^5.3.0", "@typescript-eslint/parser": "^5.3.0", esbuild: "^0.13.12", eslint: "^8.1.0", "eslint-plugin-jasmine": "^4.1.2", "eslint-plugin-react": "^7.26.1", jasmine: "^3.10.0", "jasmine-core": "^3.10.1", "jasmine-spec-reporter": "^7.0.0", karma: "^6.3.7", "karma-chrome-launcher": "^3.1.0", "karma-coverage": "^2.0.3", "karma-firefox-launcher": "^2.1.2", "karma-jasmine": "^4.0.1", "karma-jasmine-html-reporter": "^1.7.0", "karma-sourcemap-loader": "^0.3.8", "karma-spec-reporter": "^0.0.32", "make-dir": "^3.1.0", nyc: "^15.1.0", prettier: "^2.4.1", puppeteer: "^10.4.0", rimraf: "^3.0.2", typedoc: "^0.22.7", typescript: "^4.4.4", "web-worker": "^1.1.0" };
var Re = { fsevents: "*" };
var ge = { "build:debug": "node bundle.mjs debug && tsc --emitDeclarationOnly", "build:release": "node bundle.mjs release && tsc --emitDeclarationOnly", docs: "typedoc", report: "node ./coverage.mjs", "test:node": "node --enable-source-maps --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js", "test:node:debug": "node --inspect-brk --enable-source-maps --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js", "test:node:coverage": "nyc -r json --report-dir ./coverage/node node --experimental-wasm-eh ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.js", "test:firefox": "karma start ./karma/tests-firefox.cjs", "test:chrome": "karma start ./karma/tests-chrome.cjs", "test:chrome:eh": "karma start ./karma/tests-chrome-eh.cjs", "test:chrome:coverage": "karma start ./karma/tests-chrome-coverage.cjs", "test:browser": "karma start ./karma/tests-all.cjs", "test:browser:debug": "karma start ./karma/tests-debug.cjs", test: "npm run test:chrome && npm run test:node", "test:coverage": "npm run test:chrome:coverage && npm run test:node:coverage && npm run report", lint: "eslint src test" };
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
function D(n) {
  let e = `importScripts("${n}");`;
  return URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
}
function Xr() {
  let n = `https://cdn.jsdelivr.net/npm/${$}@${X}/dist/`;
  return { asyncDefault: { mainModule: `${n}duckdb.wasm`, mainWorker: D(`${n}duckdb-browser-async.worker.js`) }, asyncNext: { mainModule: `${n}duckdb-next.wasm`, mainWorker: D(`${n}duckdb-browser-async-next.worker.js`) }, asyncNextCOI: { mainModule: `${n}duckdb-next-coi.wasm`, mainWorker: D(`${n}duckdb-browser-async-next-coi.worker.js`), pthreadWorker: D(`${n}duckdb-browser-async-next-coi.pthread.worker.js`) } };
}
var x = null;
var G = null;
var H = null;
var V = null;
var Y = null;
function ke() {
  return typeof process != "undefined" && process.release.name === "node";
}
async function we() {
  return x == null && (x = typeof BigInt64Array != "undefined"), G == null && (G = await exceptions()), H == null && (H = await threads()), V == null && (V = await simd()), Y == null && (Y = await bulkMemory()), { bigInt64Array: x, crossOriginIsolated: ke() || globalThis.crossOriginIsolated || false, wasmExceptions: G, wasmSIMD: V, wasmThreads: H, wasmBulkMemory: Y };
}
async function Zr(n) {
  let e = await we();
  if (e.wasmExceptions && e.wasmSIMD) {
    if (e.wasmThreads && e.crossOriginIsolated && n.asyncNextCOI)
      return { mainModule: n.asyncNextCOI.mainModule, mainWorker: n.asyncNextCOI.mainWorker, pthreadWorker: n.asyncNextCOI.pthreadWorker };
    if (n.asyncNext)
      return { mainModule: n.asyncNext.mainModule, mainWorker: n.asyncNext.mainWorker, pthreadWorker: null };
  }
  return { mainModule: n.asyncDefault.mainModule, mainWorker: n.asyncDefault.mainWorker, pthreadWorker: null };
}

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
window.DATA_URL = "http://devd.io:8000/data";
async function query(conn, query2) {
  const table = await conn.query(query2);
  return table.toArray().map((x2) => x2.toJSON());
}
function hover(event, tooltip, stats, scales, fields, delaunay, cells) {
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
  return function([player, cell]) {
    if (!cell) {
      return;
    }
    const [cx, cy] = d3.polygonCentroid(cell);
    const angle = (Math.round(Math.atan2(cy - scales.y(player[fields.y]), cx - scales.x(player[fields.x])) / Math.PI * 2) + 4) % 4;
    const r = scales.r(player[fields.r]) * 1.1;
    d3.select(this).call(angle === 0 ? orient("right", r) : angle === 3 ? orient("top", r) : angle === 1 ? orient("bottom", r) : orient("left", r));
  };
}
function calcVoronoi(stats, scales, fields) {
  const delaunay = d3.Delaunay.from(stats, (p2) => scales.x(p2[fields.x]), (p2) => scales.y(p2[fields.y]));
  const voronoi = delaunay.voronoi([
    -1,
    -1,
    settings.width + 1,
    settings.height + 1
  ]);
  var cells = stats.map((d, i) => [d, voronoi.cellPolygon(i)]);
  return [delaunay, cells];
}
function pointLabels(svg, stats, scales, fields, cells) {
  var orienter = orientText(scales, fields);
  const container = svg.append("g").attr("class", "labels").style("font", "10px sans-serif");
  container.selectAll("text").data(cells, ([p2, _]) => p2.name + p2.team).join("text").attr("class", "pointLabel").each(orienter).attr("transform", ([p2, _]) => `translate(${scales.x(p2[fields.x])},${scales.y(p2[fields.y])})`).attr("display", ([, cell]) => !cell || -d3.polygonArea(cell) > 3e3 ? null : "none").text(([p2, _]) => p2.name);
  return function(stats2, scales2, fields2, cells2) {
    var orienter2 = orientText(scales2, fields2);
    container.selectAll("text").data(cells2, ([p2, _]) => p2.name + p2.team).join("text").transition().duration(settings.duration).each(orienter2).attr("transform", ([p2, _]) => `translate(${scales2.x(p2[fields2.x])},${scales2.y(p2[fields2.y])})`).attr("display", ([, cell]) => !cell || -d3.polygonArea(cell) > 3e3 ? null : "none").text(([p2, _]) => p2.name);
  };
}
function paddedExtent(lst, fn2, reversed) {
  var [min, max] = d3.extent(lst, fn2);
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
function makeScales(stats, fields) {
  const xAxType = statMeta[fields.x].type;
  const xreversed = statMeta[fields.x].reversed;
  var x2;
  if (xAxType == "categorical") {
    const domain = new Set(stats.map((p2) => p2[fields.x]));
    x2 = d3.scaleBand(domain, [
      settings.padding.left,
      settings.width - settings.padding.right
    ]);
  } else {
    x2 = d3.scaleLinear().domain(paddedExtent(stats, (s) => s[fields.x], xreversed)).range([settings.padding.left, settings.width - settings.padding.right]);
  }
  const yAxType = statMeta[fields.y].type;
  const yreversed = statMeta[fields.y].reversed;
  var y2;
  if (yAxType == "categorical") {
    const domain = new Set(stats.map((p2) => p2[fields.y]));
    y2 = d3.scaleBand(domain, [
      settings.padding.top,
      settings.height - settings.padding.bottom
    ]);
  } else {
    y2 = d3.scaleLinear().domain(d3.reverse(paddedExtent(stats, (s) => s[fields.y], yreversed))).range([settings.padding.top, settings.height - settings.padding.bottom]);
  }
  var r;
  if (!isNaN(fields.r)) {
    r = (_) => parseFloat(fields.r);
  } else {
    r = d3.scaleLinear().domain(d3.extent(stats, (s) => s[fields.r])).range([settings.minRadius, settings.maxRadius]);
  }
  return { x: x2, y: y2, r };
}
function axes(svg, stats, scales) {
  var xaxis = d3.axisTop(scales.x).tickSize(settings.height - settings.padding.top).tickFormat(d3.format(".2r"));
  const xaxisg = svg.append("g").attr("transform", `translate(0, ${settings.height - 20})`).attr("class", "xaxis").call(xaxis).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("y", 0).attr("dx", -15));
  const yaxis = d3.axisRight(scales.y).tickSize(settings.width - settings.padding.right).tickFormat(d3.format(".2r"));
  const yaxisg = svg.append("g").attr("transform", `translate(20, 0)`).attr("class", "yaxis").call(yaxis).call((g2) => g2.select(".domain").remove()).call((g2) => g2.selectAll(".tick line").attr("stroke-opacity", 0.1)).call((g2) => g2.selectAll(".tick text").attr("dy", -4).attr("x", 4));
  return function(stats2, scales2, fields) {
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
function points(svg, stats, scales, fields) {
  var useTeamColors = $2("#teamcolors").checked;
  const container = svg.append("g").attr("class", "points");
  const points2 = container.selectAll("g").data(stats, (d) => d.name + d.team).join("g").attr("data-player-name", (d) => d.name).attr("transform", (d) => `translate(${scales.x(d[fields.x])},${scales.y(d[fields.y])})`);
  if (useTeamColors) {
    points2.append("circle").attr("class", "outer").attr("fill", (d) => teams[d.team].colors[0]).attr("r", (d) => scales.r(d[fields.r]));
    points2.append("circle").attr("class", "inner").attr("fill", (d) => teams[d.team].colors[1]).attr("r", (d) => scales.r(d[fields.r]) / 2);
  } else {
    points2.append("circle").attr("class", "outer").attr("fill", "#1f77b4").attr("r", (d) => scales.r(d[fields.r]));
  }
  return function(stats2, scales2, fields2) {
    useTeamColors = $2("#teamcolors").checked;
    d3.selectAll(".player_label").remove();
    container.selectAll("g").data(stats2, (d) => d.name + d.team).join((enter) => {
      var g2 = enter.append("g");
      if (useTeamColors) {
        g2.append("circle").attr("class", "outer").attr("fill", (d) => teams[d.team].colors[0]).attr("r", (d) => scales2.r(d[fields2.r]));
        g2.append("circle").attr("class", "inner").attr("fill", (d) => teams[d.team].colors[1]).attr("r", (d) => scales2.r(d[fields2.r]) / 2);
      } else {
        g2.append("circle").attr("class", "outer").attr("fill", "#1f77b4").attr("r", (d) => scales2.r(d[fields2.r]));
      }
      g2.call((enter2) => {
        enter2.transition().duration(settings.duration).attr("transform", (d) => `translate(${scales2.x(d[fields2.x])},${scales2.y(d[fields2.y])})`);
      });
      return g2;
    }, (update) => update.call((update2) => update2.each((p2, i, ns) => {
      d3.select(ns[i]).select("circle.outer").transition().duration(settings.duration).attr("r", (d) => scales2.r(d[fields2.r]));
      d3.select(ns[i]).select("circle.inner").transition().duration(settings.duration).attr("r", (d) => scales2.r(d[fields2.r]) / 2);
    }).transition().attr("transform", (d) => `translate(${scales2.x(d[fields2.x])},${scales2.y(d[fields2.y])})`).duration(settings.duration)), (exit) => exit.remove());
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
function graph(stats, fields) {
  console.log(stats);
  const svg = d3.select("#canvas");
  var scales = makeScales(stats, fields);
  var [delaunay, voronoiCells] = calcVoronoi(stats, scales, fields);
  const updateAxes2 = axes(svg, stats, scales);
  const updateAxisLabels = axisLabels(svg, fields);
  const updatePoints = points(svg, stats, scales, fields);
  const updateLabels = pointLabels(svg, stats, scales, fields, voronoiCells);
  var tooltip = svg.append("g").attr("class", "tooltip");
  svg.on("touchmove mousemove", (evt) => hover(evt, tooltip, stats, scales, fields, delaunay, voronoiCells));
  svg.on("touchend mouseleave", () => tooltip.call(callout, null));
  return Object.assign(svg.node(), {
    update(stats2, fields2) {
      scales.y.domain(d3.reverse(paddedExtent(stats2, (s) => s[fields2.y], statMeta[fields2.y].reversed)));
      scales.x.domain(paddedExtent(stats2, (s) => s[fields2.x], statMeta[fields2.x].reversed));
      scales = makeScales(stats2, fields2);
      [delaunay, voronoiCells] = calcVoronoi(stats2, scales, fields2);
      updateAxes2(stats2, scales, fields2);
      updateAxisLabels(fields2);
      updatePoints(stats2, scales, fields2);
      updateLabels(stats2, scales, fields2, voronoiCells);
      svg.on("touchmove mousemove", (evt) => {
        return hover(evt, tooltip, stats2, scales, fields2, delaunay, voronoiCells);
      });
      tooltip.remove();
      tooltip = svg.append("g").attr("class", "tooltip");
    }
  });
}
function callout(g2, value2) {
  if (!value2)
    return g2.style("display", "none");
  g2.style("display", null).style("pointer-events", "none").style("font", "10px sans-serif");
  const path = g2.selectAll("path").data([null]).join("path").attr("fill", "white").attr("stroke", "black");
  const text = g2.selectAll("text").data([null]).join("text").call((text2) => text2.selectAll("tspan").data((value2 + "").split(/\n/)).join("tspan").attr("x", 0).attr("y", (d, i) => `${i * 1.1}em`).style("font-weight", (_2, i) => i ? null : "bold").text((d) => d));
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
    name: "Assist %",
    type: "numeric"
  },
  stl_pct: {
    name: "Steal %",
    type: "numeric"
  },
  blk_pct: {
    name: "Block %",
    type: "numeric"
  },
  tov_pct: {
    name: "Turnover %",
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
function changeUseTeamColors(_) {
  const fields = {
    x: $2("#statx").value,
    y: $2("#staty").value,
    r: $2("#radius").value
  };
  d3.selectAll("#canvas").html("");
  graph(applyFilter(window.stats.players), fields);
}
var QUANTILE_RE = /quantile\((\w+), (\d+)\)/;
function parseQuantiles(filter) {
  const quantiles = [];
  let nullfilter = `${filter}`;
  while ((res = QUANTILE_RE.exec(filter)) !== null) {
    [call, field, value] = res;
    filter = filter.replace(call, `_${field}_ntile > ${value}`);
    nullfilter = nullfilter.replace(call, "true");
    quantiles.push(field);
  }
  console.log(filter, nullfilter);
  return [filter, nullfilter, quantiles];
}
async function applyFilter(conn) {
  const queryCondition = $2("#filter").value;
  [cond, nullcond, medians] = parseQuantiles(queryCondition);
  let stats = {};
  if (medians.length > 0) {
    median_stmts = medians.map((x2) => `ntile(100) OVER (ORDER BY ${x2}) AS _${x2}_ntile`).join(", ");
    stats = await query(conn, `
      WITH mstats AS (
        SELECT *, ${median_stmts}
        FROM stats
        WHERE ${nullcond}
      )
      SELECT *
      FROM mstats
      WHERE ${cond}`);
  } else {
    stats = await query(conn, `
      SELECT *
      FROM stats
      WHERE ${queryCondition}`);
  }
  window.stats = stats;
  return stats;
}
async function updateSettings(_evt) {
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
  graph(await applyFilter(window.conn), fields);
}
function updateAxes(svg) {
  return async (_evt) => {
    svg.update(await applyFilter(window.conn), {
      x: $2("#statx").value,
      y: $2("#staty").value,
      r: $2("#radius").value
    });
  };
}
window.addEventListener("DOMContentLoaded", async (_evt) => {
  const JSDELIVR_BUNDLES = Xr();
  const bundle = await Zr(JSDELIVR_BUNDLES);
  const worker = new Worker(bundle.mainWorker);
  const logger = new oe();
  const db = new de(logger, worker);
  await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
  window.db = db;
  const conn = await db.connect();
  window.conn = conn;
  console.log("creating stats table");
  await conn.query(`
      CREATE TABLE stats AS
          SELECT * FROM "${window.DATA_URL}/stats.parquet"
  `);
  $2("#settings-width").value = settings.width;
  $2("#settings-height").value = settings.height;
  $2("#settings-min-radius").value = settings.minRadius;
  $2("#settings-max-radius").value = settings.maxRadius;
  prepare();
  const svg = graph(await applyFilter(conn), {
    x: "ts_pct",
    y: "usg_pct",
    r: $2("#radius").value
  });
  $2("#settings-width").addEventListener("change", updateSettings);
  $2("#settings-height").addEventListener("change", updateSettings);
  $2("#settings-min-radius").addEventListener("change", updateSettings);
  $2("#settings-max-radius").addEventListener("change", updateSettings);
  $2("#teamcolors").addEventListener("change", (evt) => changeUseTeamColors(evt));
  $2("#statx").addEventListener("change", updateAxes(svg));
  $2("#staty").addEventListener("change", updateAxes(svg));
  $2("#radius").addEventListener("change", updateAxes(svg));
  $2("#applyFilter").addEventListener("click", updateAxes(svg));
});
//# sourceMappingURL=viewer_duckdb.js.map
