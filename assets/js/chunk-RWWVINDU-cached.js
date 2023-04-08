import {
  MONTHS_MILLIS,
  addTimeToDate
} from "./chunk-CSVVZG3Y-cached.js";
import {
  L
} from "./chunk-LWWMWDO5-cached.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ANXCCFQT-cached.js";

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer2;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer2.isBuffer(buf))
              buf = Buffer2.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    }
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/base-x/src/index.js"(exports, module) {
    "use strict";
    var _Buffer = require_safe_buffer().Buffer;
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      BASE_MAP.fill(255);
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode(source) {
        if (!_Buffer.isBuffer(source)) {
          throw new TypeError("Expected Buffer");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return _Buffer.alloc(0);
        }
        var psz = 0;
        if (source[psz] === " ") {
          return;
        }
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        if (source[psz] === " ") {
          return;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0, 0, zeroes);
        var j = zeroes;
        while (it4 !== size) {
          vch[j++] = b256[it4++];
        }
        return vch;
      }
      function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode,
        decodeUnsafe,
        decode
      };
    }
    module.exports = base;
  }
});

// node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/bs58/index.js"(exports, module) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module.exports = basex(ALPHABET);
  }
});

// node_modules/multihashes/src/constants.js
var require_constants = __commonJS({
  "node_modules/multihashes/src/constants.js"(exports) {
    "use strict";
    exports.names = Object.freeze({
      "identity": 0,
      "sha1": 17,
      "sha2-256": 18,
      "sha2-512": 19,
      "dbl-sha2-256": 86,
      "sha3-224": 23,
      "sha3-256": 22,
      "sha3-384": 21,
      "sha3-512": 20,
      "shake-128": 24,
      "shake-256": 25,
      "keccak-224": 26,
      "keccak-256": 27,
      "keccak-384": 28,
      "keccak-512": 29,
      "murmur3-128": 34,
      "murmur3-32": 35,
      "blake2b-8": 45569,
      "blake2b-16": 45570,
      "blake2b-24": 45571,
      "blake2b-32": 45572,
      "blake2b-40": 45573,
      "blake2b-48": 45574,
      "blake2b-56": 45575,
      "blake2b-64": 45576,
      "blake2b-72": 45577,
      "blake2b-80": 45578,
      "blake2b-88": 45579,
      "blake2b-96": 45580,
      "blake2b-104": 45581,
      "blake2b-112": 45582,
      "blake2b-120": 45583,
      "blake2b-128": 45584,
      "blake2b-136": 45585,
      "blake2b-144": 45586,
      "blake2b-152": 45587,
      "blake2b-160": 45588,
      "blake2b-168": 45589,
      "blake2b-176": 45590,
      "blake2b-184": 45591,
      "blake2b-192": 45592,
      "blake2b-200": 45593,
      "blake2b-208": 45594,
      "blake2b-216": 45595,
      "blake2b-224": 45596,
      "blake2b-232": 45597,
      "blake2b-240": 45598,
      "blake2b-248": 45599,
      "blake2b-256": 45600,
      "blake2b-264": 45601,
      "blake2b-272": 45602,
      "blake2b-280": 45603,
      "blake2b-288": 45604,
      "blake2b-296": 45605,
      "blake2b-304": 45606,
      "blake2b-312": 45607,
      "blake2b-320": 45608,
      "blake2b-328": 45609,
      "blake2b-336": 45610,
      "blake2b-344": 45611,
      "blake2b-352": 45612,
      "blake2b-360": 45613,
      "blake2b-368": 45614,
      "blake2b-376": 45615,
      "blake2b-384": 45616,
      "blake2b-392": 45617,
      "blake2b-400": 45618,
      "blake2b-408": 45619,
      "blake2b-416": 45620,
      "blake2b-424": 45621,
      "blake2b-432": 45622,
      "blake2b-440": 45623,
      "blake2b-448": 45624,
      "blake2b-456": 45625,
      "blake2b-464": 45626,
      "blake2b-472": 45627,
      "blake2b-480": 45628,
      "blake2b-488": 45629,
      "blake2b-496": 45630,
      "blake2b-504": 45631,
      "blake2b-512": 45632,
      "blake2s-8": 45633,
      "blake2s-16": 45634,
      "blake2s-24": 45635,
      "blake2s-32": 45636,
      "blake2s-40": 45637,
      "blake2s-48": 45638,
      "blake2s-56": 45639,
      "blake2s-64": 45640,
      "blake2s-72": 45641,
      "blake2s-80": 45642,
      "blake2s-88": 45643,
      "blake2s-96": 45644,
      "blake2s-104": 45645,
      "blake2s-112": 45646,
      "blake2s-120": 45647,
      "blake2s-128": 45648,
      "blake2s-136": 45649,
      "blake2s-144": 45650,
      "blake2s-152": 45651,
      "blake2s-160": 45652,
      "blake2s-168": 45653,
      "blake2s-176": 45654,
      "blake2s-184": 45655,
      "blake2s-192": 45656,
      "blake2s-200": 45657,
      "blake2s-208": 45658,
      "blake2s-216": 45659,
      "blake2s-224": 45660,
      "blake2s-232": 45661,
      "blake2s-240": 45662,
      "blake2s-248": 45663,
      "blake2s-256": 45664,
      "Skein256-8": 45825,
      "Skein256-16": 45826,
      "Skein256-24": 45827,
      "Skein256-32": 45828,
      "Skein256-40": 45829,
      "Skein256-48": 45830,
      "Skein256-56": 45831,
      "Skein256-64": 45832,
      "Skein256-72": 45833,
      "Skein256-80": 45834,
      "Skein256-88": 45835,
      "Skein256-96": 45836,
      "Skein256-104": 45837,
      "Skein256-112": 45838,
      "Skein256-120": 45839,
      "Skein256-128": 45840,
      "Skein256-136": 45841,
      "Skein256-144": 45842,
      "Skein256-152": 45843,
      "Skein256-160": 45844,
      "Skein256-168": 45845,
      "Skein256-176": 45846,
      "Skein256-184": 45847,
      "Skein256-192": 45848,
      "Skein256-200": 45849,
      "Skein256-208": 45850,
      "Skein256-216": 45851,
      "Skein256-224": 45852,
      "Skein256-232": 45853,
      "Skein256-240": 45854,
      "Skein256-248": 45855,
      "Skein256-256": 45856,
      "Skein512-8": 45857,
      "Skein512-16": 45858,
      "Skein512-24": 45859,
      "Skein512-32": 45860,
      "Skein512-40": 45861,
      "Skein512-48": 45862,
      "Skein512-56": 45863,
      "Skein512-64": 45864,
      "Skein512-72": 45865,
      "Skein512-80": 45866,
      "Skein512-88": 45867,
      "Skein512-96": 45868,
      "Skein512-104": 45869,
      "Skein512-112": 45870,
      "Skein512-120": 45871,
      "Skein512-128": 45872,
      "Skein512-136": 45873,
      "Skein512-144": 45874,
      "Skein512-152": 45875,
      "Skein512-160": 45876,
      "Skein512-168": 45877,
      "Skein512-176": 45878,
      "Skein512-184": 45879,
      "Skein512-192": 45880,
      "Skein512-200": 45881,
      "Skein512-208": 45882,
      "Skein512-216": 45883,
      "Skein512-224": 45884,
      "Skein512-232": 45885,
      "Skein512-240": 45886,
      "Skein512-248": 45887,
      "Skein512-256": 45888,
      "Skein512-264": 45889,
      "Skein512-272": 45890,
      "Skein512-280": 45891,
      "Skein512-288": 45892,
      "Skein512-296": 45893,
      "Skein512-304": 45894,
      "Skein512-312": 45895,
      "Skein512-320": 45896,
      "Skein512-328": 45897,
      "Skein512-336": 45898,
      "Skein512-344": 45899,
      "Skein512-352": 45900,
      "Skein512-360": 45901,
      "Skein512-368": 45902,
      "Skein512-376": 45903,
      "Skein512-384": 45904,
      "Skein512-392": 45905,
      "Skein512-400": 45906,
      "Skein512-408": 45907,
      "Skein512-416": 45908,
      "Skein512-424": 45909,
      "Skein512-432": 45910,
      "Skein512-440": 45911,
      "Skein512-448": 45912,
      "Skein512-456": 45913,
      "Skein512-464": 45914,
      "Skein512-472": 45915,
      "Skein512-480": 45916,
      "Skein512-488": 45917,
      "Skein512-496": 45918,
      "Skein512-504": 45919,
      "Skein512-512": 45920,
      "Skein1024-8": 45921,
      "Skein1024-16": 45922,
      "Skein1024-24": 45923,
      "Skein1024-32": 45924,
      "Skein1024-40": 45925,
      "Skein1024-48": 45926,
      "Skein1024-56": 45927,
      "Skein1024-64": 45928,
      "Skein1024-72": 45929,
      "Skein1024-80": 45930,
      "Skein1024-88": 45931,
      "Skein1024-96": 45932,
      "Skein1024-104": 45933,
      "Skein1024-112": 45934,
      "Skein1024-120": 45935,
      "Skein1024-128": 45936,
      "Skein1024-136": 45937,
      "Skein1024-144": 45938,
      "Skein1024-152": 45939,
      "Skein1024-160": 45940,
      "Skein1024-168": 45941,
      "Skein1024-176": 45942,
      "Skein1024-184": 45943,
      "Skein1024-192": 45944,
      "Skein1024-200": 45945,
      "Skein1024-208": 45946,
      "Skein1024-216": 45947,
      "Skein1024-224": 45948,
      "Skein1024-232": 45949,
      "Skein1024-240": 45950,
      "Skein1024-248": 45951,
      "Skein1024-256": 45952,
      "Skein1024-264": 45953,
      "Skein1024-272": 45954,
      "Skein1024-280": 45955,
      "Skein1024-288": 45956,
      "Skein1024-296": 45957,
      "Skein1024-304": 45958,
      "Skein1024-312": 45959,
      "Skein1024-320": 45960,
      "Skein1024-328": 45961,
      "Skein1024-336": 45962,
      "Skein1024-344": 45963,
      "Skein1024-352": 45964,
      "Skein1024-360": 45965,
      "Skein1024-368": 45966,
      "Skein1024-376": 45967,
      "Skein1024-384": 45968,
      "Skein1024-392": 45969,
      "Skein1024-400": 45970,
      "Skein1024-408": 45971,
      "Skein1024-416": 45972,
      "Skein1024-424": 45973,
      "Skein1024-432": 45974,
      "Skein1024-440": 45975,
      "Skein1024-448": 45976,
      "Skein1024-456": 45977,
      "Skein1024-464": 45978,
      "Skein1024-472": 45979,
      "Skein1024-480": 45980,
      "Skein1024-488": 45981,
      "Skein1024-496": 45982,
      "Skein1024-504": 45983,
      "Skein1024-512": 45984,
      "Skein1024-520": 45985,
      "Skein1024-528": 45986,
      "Skein1024-536": 45987,
      "Skein1024-544": 45988,
      "Skein1024-552": 45989,
      "Skein1024-560": 45990,
      "Skein1024-568": 45991,
      "Skein1024-576": 45992,
      "Skein1024-584": 45993,
      "Skein1024-592": 45994,
      "Skein1024-600": 45995,
      "Skein1024-608": 45996,
      "Skein1024-616": 45997,
      "Skein1024-624": 45998,
      "Skein1024-632": 45999,
      "Skein1024-640": 46e3,
      "Skein1024-648": 46001,
      "Skein1024-656": 46002,
      "Skein1024-664": 46003,
      "Skein1024-672": 46004,
      "Skein1024-680": 46005,
      "Skein1024-688": 46006,
      "Skein1024-696": 46007,
      "Skein1024-704": 46008,
      "Skein1024-712": 46009,
      "Skein1024-720": 46010,
      "Skein1024-728": 46011,
      "Skein1024-736": 46012,
      "Skein1024-744": 46013,
      "Skein1024-752": 46014,
      "Skein1024-760": 46015,
      "Skein1024-768": 46016,
      "Skein1024-776": 46017,
      "Skein1024-784": 46018,
      "Skein1024-792": 46019,
      "Skein1024-800": 46020,
      "Skein1024-808": 46021,
      "Skein1024-816": 46022,
      "Skein1024-824": 46023,
      "Skein1024-832": 46024,
      "Skein1024-840": 46025,
      "Skein1024-848": 46026,
      "Skein1024-856": 46027,
      "Skein1024-864": 46028,
      "Skein1024-872": 46029,
      "Skein1024-880": 46030,
      "Skein1024-888": 46031,
      "Skein1024-896": 46032,
      "Skein1024-904": 46033,
      "Skein1024-912": 46034,
      "Skein1024-920": 46035,
      "Skein1024-928": 46036,
      "Skein1024-936": 46037,
      "Skein1024-944": 46038,
      "Skein1024-952": 46039,
      "Skein1024-960": 46040,
      "Skein1024-968": 46041,
      "Skein1024-976": 46042,
      "Skein1024-984": 46043,
      "Skein1024-992": 46044,
      "Skein1024-1000": 46045,
      "Skein1024-1008": 46046,
      "Skein1024-1016": 46047,
      "Skein1024-1024": 46048
    });
    exports.codes = Object.freeze({
      0: "identity",
      17: "sha1",
      18: "sha2-256",
      19: "sha2-512",
      86: "dbl-sha2-256",
      23: "sha3-224",
      22: "sha3-256",
      21: "sha3-384",
      20: "sha3-512",
      24: "shake-128",
      25: "shake-256",
      26: "keccak-224",
      27: "keccak-256",
      28: "keccak-384",
      29: "keccak-512",
      34: "murmur3-128",
      35: "murmur3-32",
      45569: "blake2b-8",
      45570: "blake2b-16",
      45571: "blake2b-24",
      45572: "blake2b-32",
      45573: "blake2b-40",
      45574: "blake2b-48",
      45575: "blake2b-56",
      45576: "blake2b-64",
      45577: "blake2b-72",
      45578: "blake2b-80",
      45579: "blake2b-88",
      45580: "blake2b-96",
      45581: "blake2b-104",
      45582: "blake2b-112",
      45583: "blake2b-120",
      45584: "blake2b-128",
      45585: "blake2b-136",
      45586: "blake2b-144",
      45587: "blake2b-152",
      45588: "blake2b-160",
      45589: "blake2b-168",
      45590: "blake2b-176",
      45591: "blake2b-184",
      45592: "blake2b-192",
      45593: "blake2b-200",
      45594: "blake2b-208",
      45595: "blake2b-216",
      45596: "blake2b-224",
      45597: "blake2b-232",
      45598: "blake2b-240",
      45599: "blake2b-248",
      45600: "blake2b-256",
      45601: "blake2b-264",
      45602: "blake2b-272",
      45603: "blake2b-280",
      45604: "blake2b-288",
      45605: "blake2b-296",
      45606: "blake2b-304",
      45607: "blake2b-312",
      45608: "blake2b-320",
      45609: "blake2b-328",
      45610: "blake2b-336",
      45611: "blake2b-344",
      45612: "blake2b-352",
      45613: "blake2b-360",
      45614: "blake2b-368",
      45615: "blake2b-376",
      45616: "blake2b-384",
      45617: "blake2b-392",
      45618: "blake2b-400",
      45619: "blake2b-408",
      45620: "blake2b-416",
      45621: "blake2b-424",
      45622: "blake2b-432",
      45623: "blake2b-440",
      45624: "blake2b-448",
      45625: "blake2b-456",
      45626: "blake2b-464",
      45627: "blake2b-472",
      45628: "blake2b-480",
      45629: "blake2b-488",
      45630: "blake2b-496",
      45631: "blake2b-504",
      45632: "blake2b-512",
      45633: "blake2s-8",
      45634: "blake2s-16",
      45635: "blake2s-24",
      45636: "blake2s-32",
      45637: "blake2s-40",
      45638: "blake2s-48",
      45639: "blake2s-56",
      45640: "blake2s-64",
      45641: "blake2s-72",
      45642: "blake2s-80",
      45643: "blake2s-88",
      45644: "blake2s-96",
      45645: "blake2s-104",
      45646: "blake2s-112",
      45647: "blake2s-120",
      45648: "blake2s-128",
      45649: "blake2s-136",
      45650: "blake2s-144",
      45651: "blake2s-152",
      45652: "blake2s-160",
      45653: "blake2s-168",
      45654: "blake2s-176",
      45655: "blake2s-184",
      45656: "blake2s-192",
      45657: "blake2s-200",
      45658: "blake2s-208",
      45659: "blake2s-216",
      45660: "blake2s-224",
      45661: "blake2s-232",
      45662: "blake2s-240",
      45663: "blake2s-248",
      45664: "blake2s-256",
      45825: "Skein256-8",
      45826: "Skein256-16",
      45827: "Skein256-24",
      45828: "Skein256-32",
      45829: "Skein256-40",
      45830: "Skein256-48",
      45831: "Skein256-56",
      45832: "Skein256-64",
      45833: "Skein256-72",
      45834: "Skein256-80",
      45835: "Skein256-88",
      45836: "Skein256-96",
      45837: "Skein256-104",
      45838: "Skein256-112",
      45839: "Skein256-120",
      45840: "Skein256-128",
      45841: "Skein256-136",
      45842: "Skein256-144",
      45843: "Skein256-152",
      45844: "Skein256-160",
      45845: "Skein256-168",
      45846: "Skein256-176",
      45847: "Skein256-184",
      45848: "Skein256-192",
      45849: "Skein256-200",
      45850: "Skein256-208",
      45851: "Skein256-216",
      45852: "Skein256-224",
      45853: "Skein256-232",
      45854: "Skein256-240",
      45855: "Skein256-248",
      45856: "Skein256-256",
      45857: "Skein512-8",
      45858: "Skein512-16",
      45859: "Skein512-24",
      45860: "Skein512-32",
      45861: "Skein512-40",
      45862: "Skein512-48",
      45863: "Skein512-56",
      45864: "Skein512-64",
      45865: "Skein512-72",
      45866: "Skein512-80",
      45867: "Skein512-88",
      45868: "Skein512-96",
      45869: "Skein512-104",
      45870: "Skein512-112",
      45871: "Skein512-120",
      45872: "Skein512-128",
      45873: "Skein512-136",
      45874: "Skein512-144",
      45875: "Skein512-152",
      45876: "Skein512-160",
      45877: "Skein512-168",
      45878: "Skein512-176",
      45879: "Skein512-184",
      45880: "Skein512-192",
      45881: "Skein512-200",
      45882: "Skein512-208",
      45883: "Skein512-216",
      45884: "Skein512-224",
      45885: "Skein512-232",
      45886: "Skein512-240",
      45887: "Skein512-248",
      45888: "Skein512-256",
      45889: "Skein512-264",
      45890: "Skein512-272",
      45891: "Skein512-280",
      45892: "Skein512-288",
      45893: "Skein512-296",
      45894: "Skein512-304",
      45895: "Skein512-312",
      45896: "Skein512-320",
      45897: "Skein512-328",
      45898: "Skein512-336",
      45899: "Skein512-344",
      45900: "Skein512-352",
      45901: "Skein512-360",
      45902: "Skein512-368",
      45903: "Skein512-376",
      45904: "Skein512-384",
      45905: "Skein512-392",
      45906: "Skein512-400",
      45907: "Skein512-408",
      45908: "Skein512-416",
      45909: "Skein512-424",
      45910: "Skein512-432",
      45911: "Skein512-440",
      45912: "Skein512-448",
      45913: "Skein512-456",
      45914: "Skein512-464",
      45915: "Skein512-472",
      45916: "Skein512-480",
      45917: "Skein512-488",
      45918: "Skein512-496",
      45919: "Skein512-504",
      45920: "Skein512-512",
      45921: "Skein1024-8",
      45922: "Skein1024-16",
      45923: "Skein1024-24",
      45924: "Skein1024-32",
      45925: "Skein1024-40",
      45926: "Skein1024-48",
      45927: "Skein1024-56",
      45928: "Skein1024-64",
      45929: "Skein1024-72",
      45930: "Skein1024-80",
      45931: "Skein1024-88",
      45932: "Skein1024-96",
      45933: "Skein1024-104",
      45934: "Skein1024-112",
      45935: "Skein1024-120",
      45936: "Skein1024-128",
      45937: "Skein1024-136",
      45938: "Skein1024-144",
      45939: "Skein1024-152",
      45940: "Skein1024-160",
      45941: "Skein1024-168",
      45942: "Skein1024-176",
      45943: "Skein1024-184",
      45944: "Skein1024-192",
      45945: "Skein1024-200",
      45946: "Skein1024-208",
      45947: "Skein1024-216",
      45948: "Skein1024-224",
      45949: "Skein1024-232",
      45950: "Skein1024-240",
      45951: "Skein1024-248",
      45952: "Skein1024-256",
      45953: "Skein1024-264",
      45954: "Skein1024-272",
      45955: "Skein1024-280",
      45956: "Skein1024-288",
      45957: "Skein1024-296",
      45958: "Skein1024-304",
      45959: "Skein1024-312",
      45960: "Skein1024-320",
      45961: "Skein1024-328",
      45962: "Skein1024-336",
      45963: "Skein1024-344",
      45964: "Skein1024-352",
      45965: "Skein1024-360",
      45966: "Skein1024-368",
      45967: "Skein1024-376",
      45968: "Skein1024-384",
      45969: "Skein1024-392",
      45970: "Skein1024-400",
      45971: "Skein1024-408",
      45972: "Skein1024-416",
      45973: "Skein1024-424",
      45974: "Skein1024-432",
      45975: "Skein1024-440",
      45976: "Skein1024-448",
      45977: "Skein1024-456",
      45978: "Skein1024-464",
      45979: "Skein1024-472",
      45980: "Skein1024-480",
      45981: "Skein1024-488",
      45982: "Skein1024-496",
      45983: "Skein1024-504",
      45984: "Skein1024-512",
      45985: "Skein1024-520",
      45986: "Skein1024-528",
      45987: "Skein1024-536",
      45988: "Skein1024-544",
      45989: "Skein1024-552",
      45990: "Skein1024-560",
      45991: "Skein1024-568",
      45992: "Skein1024-576",
      45993: "Skein1024-584",
      45994: "Skein1024-592",
      45995: "Skein1024-600",
      45996: "Skein1024-608",
      45997: "Skein1024-616",
      45998: "Skein1024-624",
      45999: "Skein1024-632",
      46e3: "Skein1024-640",
      46001: "Skein1024-648",
      46002: "Skein1024-656",
      46003: "Skein1024-664",
      46004: "Skein1024-672",
      46005: "Skein1024-680",
      46006: "Skein1024-688",
      46007: "Skein1024-696",
      46008: "Skein1024-704",
      46009: "Skein1024-712",
      46010: "Skein1024-720",
      46011: "Skein1024-728",
      46012: "Skein1024-736",
      46013: "Skein1024-744",
      46014: "Skein1024-752",
      46015: "Skein1024-760",
      46016: "Skein1024-768",
      46017: "Skein1024-776",
      46018: "Skein1024-784",
      46019: "Skein1024-792",
      46020: "Skein1024-800",
      46021: "Skein1024-808",
      46022: "Skein1024-816",
      46023: "Skein1024-824",
      46024: "Skein1024-832",
      46025: "Skein1024-840",
      46026: "Skein1024-848",
      46027: "Skein1024-856",
      46028: "Skein1024-864",
      46029: "Skein1024-872",
      46030: "Skein1024-880",
      46031: "Skein1024-888",
      46032: "Skein1024-896",
      46033: "Skein1024-904",
      46034: "Skein1024-912",
      46035: "Skein1024-920",
      46036: "Skein1024-928",
      46037: "Skein1024-936",
      46038: "Skein1024-944",
      46039: "Skein1024-952",
      46040: "Skein1024-960",
      46041: "Skein1024-968",
      46042: "Skein1024-976",
      46043: "Skein1024-984",
      46044: "Skein1024-992",
      46045: "Skein1024-1000",
      46046: "Skein1024-1008",
      46047: "Skein1024-1016",
      46048: "Skein1024-1024"
    });
    exports.defaultLengths = Object.freeze({
      17: 20,
      18: 32,
      19: 64,
      86: 32,
      23: 28,
      22: 32,
      21: 48,
      20: 64,
      24: 32,
      25: 64,
      26: 28,
      27: 32,
      28: 48,
      29: 64,
      34: 32,
      45569: 1,
      45570: 2,
      45571: 3,
      45572: 4,
      45573: 5,
      45574: 6,
      45575: 7,
      45576: 8,
      45577: 9,
      45578: 10,
      45579: 11,
      45580: 12,
      45581: 13,
      45582: 14,
      45583: 15,
      45584: 16,
      45585: 17,
      45586: 18,
      45587: 19,
      45588: 20,
      45589: 21,
      45590: 22,
      45591: 23,
      45592: 24,
      45593: 25,
      45594: 26,
      45595: 27,
      45596: 28,
      45597: 29,
      45598: 30,
      45599: 31,
      45600: 32,
      45601: 33,
      45602: 34,
      45603: 35,
      45604: 36,
      45605: 37,
      45606: 38,
      45607: 39,
      45608: 40,
      45609: 41,
      45610: 42,
      45611: 43,
      45612: 44,
      45613: 45,
      45614: 46,
      45615: 47,
      45616: 48,
      45617: 49,
      45618: 50,
      45619: 51,
      45620: 52,
      45621: 53,
      45622: 54,
      45623: 55,
      45624: 56,
      45625: 57,
      45626: 58,
      45627: 59,
      45628: 60,
      45629: 61,
      45630: 62,
      45631: 63,
      45632: 64,
      45633: 1,
      45634: 2,
      45635: 3,
      45636: 4,
      45637: 5,
      45638: 6,
      45639: 7,
      45640: 8,
      45641: 9,
      45642: 10,
      45643: 11,
      45644: 12,
      45645: 13,
      45646: 14,
      45647: 15,
      45648: 16,
      45649: 17,
      45650: 18,
      45651: 19,
      45652: 20,
      45653: 21,
      45654: 22,
      45655: 23,
      45656: 24,
      45657: 25,
      45658: 26,
      45659: 27,
      45660: 28,
      45661: 29,
      45662: 30,
      45663: 31,
      45664: 32,
      45825: 1,
      45826: 2,
      45827: 3,
      45828: 4,
      45829: 5,
      45830: 6,
      45831: 7,
      45832: 8,
      45833: 9,
      45834: 10,
      45835: 11,
      45836: 12,
      45837: 13,
      45838: 14,
      45839: 15,
      45840: 16,
      45841: 17,
      45842: 18,
      45843: 19,
      45844: 20,
      45845: 21,
      45846: 22,
      45847: 23,
      45848: 24,
      45849: 25,
      45850: 26,
      45851: 27,
      45852: 28,
      45853: 29,
      45854: 30,
      45855: 31,
      45856: 32,
      45857: 1,
      45858: 2,
      45859: 3,
      45860: 4,
      45861: 5,
      45862: 6,
      45863: 7,
      45864: 8,
      45865: 9,
      45866: 10,
      45867: 11,
      45868: 12,
      45869: 13,
      45870: 14,
      45871: 15,
      45872: 16,
      45873: 17,
      45874: 18,
      45875: 19,
      45876: 20,
      45877: 21,
      45878: 22,
      45879: 23,
      45880: 24,
      45881: 25,
      45882: 26,
      45883: 27,
      45884: 28,
      45885: 29,
      45886: 30,
      45887: 31,
      45888: 32,
      45889: 33,
      45890: 34,
      45891: 35,
      45892: 36,
      45893: 37,
      45894: 38,
      45895: 39,
      45896: 40,
      45897: 41,
      45898: 42,
      45899: 43,
      45900: 44,
      45901: 45,
      45902: 46,
      45903: 47,
      45904: 48,
      45905: 49,
      45906: 50,
      45907: 51,
      45908: 52,
      45909: 53,
      45910: 54,
      45911: 55,
      45912: 56,
      45913: 57,
      45914: 58,
      45915: 59,
      45916: 60,
      45917: 61,
      45918: 62,
      45919: 63,
      45920: 64,
      45921: 1,
      45922: 2,
      45923: 3,
      45924: 4,
      45925: 5,
      45926: 6,
      45927: 7,
      45928: 8,
      45929: 9,
      45930: 10,
      45931: 11,
      45932: 12,
      45933: 13,
      45934: 14,
      45935: 15,
      45936: 16,
      45937: 17,
      45938: 18,
      45939: 19,
      45940: 20,
      45941: 21,
      45942: 22,
      45943: 23,
      45944: 24,
      45945: 25,
      45946: 26,
      45947: 27,
      45948: 28,
      45949: 29,
      45950: 30,
      45951: 31,
      45952: 32,
      45953: 33,
      45954: 34,
      45955: 35,
      45956: 36,
      45957: 37,
      45958: 38,
      45959: 39,
      45960: 40,
      45961: 41,
      45962: 42,
      45963: 43,
      45964: 44,
      45965: 45,
      45966: 46,
      45967: 47,
      45968: 48,
      45969: 49,
      45970: 50,
      45971: 51,
      45972: 52,
      45973: 53,
      45974: 54,
      45975: 55,
      45976: 56,
      45977: 57,
      45978: 58,
      45979: 59,
      45980: 60,
      45981: 61,
      45982: 62,
      45983: 63,
      45984: 64,
      45985: 65,
      45986: 66,
      45987: 67,
      45988: 68,
      45989: 69,
      45990: 70,
      45991: 71,
      45992: 72,
      45993: 73,
      45994: 74,
      45995: 75,
      45996: 76,
      45997: 77,
      45998: 78,
      45999: 79,
      46e3: 80,
      46001: 81,
      46002: 82,
      46003: 83,
      46004: 84,
      46005: 85,
      46006: 86,
      46007: 87,
      46008: 88,
      46009: 89,
      46010: 90,
      46011: 91,
      46012: 92,
      46013: 93,
      46014: 94,
      46015: 95,
      46016: 96,
      46017: 97,
      46018: 98,
      46019: 99,
      46020: 100,
      46021: 101,
      46022: 102,
      46023: 103,
      46024: 104,
      46025: 105,
      46026: 106,
      46027: 107,
      46028: 108,
      46029: 109,
      46030: 110,
      46031: 111,
      46032: 112,
      46033: 113,
      46034: 114,
      46035: 115,
      46036: 116,
      46037: 117,
      46038: 118,
      46039: 119,
      46040: 120,
      46041: 121,
      46042: 122,
      46043: 123,
      46044: 124,
      46045: 125,
      46046: 126,
      46047: 127,
      46048: 128
    });
  }
});

// node_modules/varint/encode.js
var require_encode = __commonJS({
  "node_modules/varint/encode.js"(exports, module) {
    module.exports = encode;
    var MSB = 128;
    var REST = 127;
    var MSBALL = ~REST;
    var INT = Math.pow(2, 31);
    function encode(num, out, offset) {
      out = out || [];
      offset = offset || 0;
      var oldOffset = offset;
      while (num >= INT) {
        out[offset++] = num & 255 | MSB;
        num /= 128;
      }
      while (num & MSBALL) {
        out[offset++] = num & 255 | MSB;
        num >>>= 7;
      }
      out[offset] = num | 0;
      encode.bytes = offset - oldOffset + 1;
      return out;
    }
  }
});

// node_modules/varint/decode.js
var require_decode = __commonJS({
  "node_modules/varint/decode.js"(exports, module) {
    module.exports = read;
    var MSB = 128;
    var REST = 127;
    function read(buf, offset) {
      var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
      do {
        if (counter >= l) {
          read.bytes = 0;
          throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST) << shift : (b & REST) * Math.pow(2, shift);
        shift += 7;
      } while (b >= MSB);
      read.bytes = counter - offset;
      return res;
    }
  }
});

// node_modules/varint/length.js
var require_length = __commonJS({
  "node_modules/varint/length.js"(exports, module) {
    var N1 = Math.pow(2, 7);
    var N2 = Math.pow(2, 14);
    var N3 = Math.pow(2, 21);
    var N4 = Math.pow(2, 28);
    var N5 = Math.pow(2, 35);
    var N6 = Math.pow(2, 42);
    var N7 = Math.pow(2, 49);
    var N8 = Math.pow(2, 56);
    var N9 = Math.pow(2, 63);
    module.exports = function(value) {
      return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
    };
  }
});

// node_modules/varint/index.js
var require_varint = __commonJS({
  "node_modules/varint/index.js"(exports, module) {
    module.exports = {
      encode: require_encode(),
      decode: require_decode(),
      encodingLength: require_length()
    };
  }
});

// node_modules/multihashes/src/index.js
var require_src2 = __commonJS({
  "node_modules/multihashes/src/index.js"(exports) {
    "use strict";
    var bs58 = require_bs58();
    var cs = require_constants();
    exports.names = cs.names;
    exports.codes = cs.codes;
    exports.defaultLengths = cs.defaultLengths;
    var varint = require_varint();
    exports.toHexString = function toHexString(hash) {
      if (!Buffer.isBuffer(hash)) {
        throw new Error("must be passed a buffer");
      }
      return hash.toString("hex");
    };
    exports.fromHexString = function fromHexString(hash) {
      return Buffer.from(hash, "hex");
    };
    exports.toB58String = function toB58String(hash) {
      if (!Buffer.isBuffer(hash)) {
        throw new Error("must be passed a buffer");
      }
      return bs58.encode(hash);
    };
    exports.fromB58String = function fromB58String(hash) {
      let encoded = hash;
      if (Buffer.isBuffer(hash)) {
        encoded = hash.toString();
      }
      return Buffer.from(bs58.decode(encoded));
    };
    exports.decode = function decode(buf) {
      if (!Buffer.isBuffer(buf)) {
        throw new Error("multihash must be a Buffer");
      }
      if (buf.length < 3) {
        throw new Error("multihash too short. must be > 3 bytes.");
      }
      const code = varint.decode(buf);
      if (!exports.isValidCode(code)) {
        throw new Error(`multihash unknown function code: 0x${code.toString(16)}`);
      }
      buf = buf.slice(varint.decode.bytes);
      const len = varint.decode(buf);
      if (len < 1) {
        throw new Error(`multihash invalid length: 0x${len.toString(16)}`);
      }
      buf = buf.slice(varint.decode.bytes);
      if (buf.length !== len) {
        throw new Error(`multihash length inconsistent: 0x${buf.toString("hex")}`);
      }
      return {
        code,
        name: cs.codes[code],
        length: len,
        digest: buf
      };
    };
    exports.encode = function encode(digest, code, length) {
      if (!digest || code === void 0) {
        throw new Error("multihash encode requires at least two args: digest, code");
      }
      const hashfn = exports.coerceCode(code);
      if (!Buffer.isBuffer(digest)) {
        throw new Error("digest should be a Buffer");
      }
      if (length == null) {
        length = digest.length;
      }
      if (length && digest.length !== length) {
        throw new Error("digest length should be equal to specified length.");
      }
      return Buffer.concat([
        Buffer.from(varint.encode(hashfn)),
        Buffer.from(varint.encode(length)),
        digest
      ]);
    };
    exports.coerceCode = function coerceCode(name) {
      let code = name;
      if (typeof name === "string") {
        if (cs.names[name] === void 0) {
          throw new Error(`Unrecognized hash function named: ${name}`);
        }
        code = cs.names[name];
      }
      if (typeof code !== "number") {
        throw new Error(`Hash function code should be a number. Got: ${code}`);
      }
      if (cs.codes[code] === void 0 && !exports.isAppCode(code)) {
        throw new Error(`Unrecognized function code: ${code}`);
      }
      return code;
    };
    exports.isAppCode = function appCode(code) {
      return code > 0 && code < 16;
    };
    exports.isValidCode = function validCode(code) {
      if (exports.isAppCode(code)) {
        return true;
      }
      if (cs.codes[code]) {
        return true;
      }
      return false;
    };
    function validate(multihash2) {
      exports.decode(multihash2);
    }
    exports.validate = validate;
    exports.prefix = function prefix(multihash2) {
      validate(multihash2);
      return multihash2.slice(0, 2);
    };
  }
});

// node_modules/blakejs/util.js
var require_util = __commonJS({
  "node_modules/blakejs/util.js"(exports, module) {
    var ERROR_MSG_INPUT = "Input must be an string, Buffer or Uint8Array";
    function normalizeInput(input) {
      var ret;
      if (input instanceof Uint8Array) {
        ret = input;
      } else if (input instanceof Buffer) {
        ret = new Uint8Array(input);
      } else if (typeof input === "string") {
        ret = new Uint8Array(Buffer.from(input, "utf8"));
      } else {
        throw new Error(ERROR_MSG_INPUT);
      }
      return ret;
    }
    function toHex(bytes) {
      return Array.prototype.map.call(bytes, function(n) {
        return (n < 16 ? "0" : "") + n.toString(16);
      }).join("");
    }
    function uint32ToHex(val) {
      return (4294967296 + val).toString(16).substring(1);
    }
    function debugPrint(label, arr, size) {
      var msg = "\n" + label + " = ";
      for (var i = 0; i < arr.length; i += 2) {
        if (size === 32) {
          msg += uint32ToHex(arr[i]).toUpperCase();
          msg += " ";
          msg += uint32ToHex(arr[i + 1]).toUpperCase();
        } else if (size === 64) {
          msg += uint32ToHex(arr[i + 1]).toUpperCase();
          msg += uint32ToHex(arr[i]).toUpperCase();
        } else
          throw new Error("Invalid size " + size);
        if (i % 6 === 4) {
          msg += "\n" + new Array(label.length + 4).join(" ");
        } else if (i < arr.length - 2) {
          msg += " ";
        }
      }
      console.log(msg);
    }
    function testSpeed(hashFn, N, M) {
      var startMs = new Date().getTime();
      var input = new Uint8Array(N);
      for (var i = 0; i < N; i++) {
        input[i] = i % 256;
      }
      var genMs = new Date().getTime();
      console.log("Generated random input in " + (genMs - startMs) + "ms");
      startMs = genMs;
      for (i = 0; i < M; i++) {
        var hashHex = hashFn(input);
        var hashMs = new Date().getTime();
        var ms = hashMs - startMs;
        startMs = hashMs;
        console.log("Hashed in " + ms + "ms: " + hashHex.substring(0, 20) + "...");
        console.log(Math.round(N / (1 << 20) / (ms / 1e3) * 100) / 100 + " MB PER SECOND");
      }
    }
    module.exports = {
      normalizeInput,
      toHex,
      debugPrint,
      testSpeed
    };
  }
});

// node_modules/blakejs/blake2b.js
var require_blake2b = __commonJS({
  "node_modules/blakejs/blake2b.js"(exports, module) {
    var util = require_util();
    function ADD64AA(v2, a, b) {
      var o0 = v2[a] + v2[b];
      var o1 = v2[a + 1] + v2[b + 1];
      if (o0 >= 4294967296) {
        o1++;
      }
      v2[a] = o0;
      v2[a + 1] = o1;
    }
    function ADD64AC(v2, a, b0, b1) {
      var o0 = v2[a] + b0;
      if (b0 < 0) {
        o0 += 4294967296;
      }
      var o1 = v2[a + 1] + b1;
      if (o0 >= 4294967296) {
        o1++;
      }
      v2[a] = o0;
      v2[a + 1] = o1;
    }
    function B2B_GET32(arr, i) {
      return arr[i] ^ arr[i + 1] << 8 ^ arr[i + 2] << 16 ^ arr[i + 3] << 24;
    }
    function B2B_G(a, b, c, d, ix, iy) {
      var x0 = m[ix];
      var x1 = m[ix + 1];
      var y0 = m[iy];
      var y1 = m[iy + 1];
      ADD64AA(v, a, b);
      ADD64AC(v, a, x0, x1);
      var xor0 = v[d] ^ v[a];
      var xor1 = v[d + 1] ^ v[a + 1];
      v[d] = xor1;
      v[d + 1] = xor0;
      ADD64AA(v, c, d);
      xor0 = v[b] ^ v[c];
      xor1 = v[b + 1] ^ v[c + 1];
      v[b] = xor0 >>> 24 ^ xor1 << 8;
      v[b + 1] = xor1 >>> 24 ^ xor0 << 8;
      ADD64AA(v, a, b);
      ADD64AC(v, a, y0, y1);
      xor0 = v[d] ^ v[a];
      xor1 = v[d + 1] ^ v[a + 1];
      v[d] = xor0 >>> 16 ^ xor1 << 16;
      v[d + 1] = xor1 >>> 16 ^ xor0 << 16;
      ADD64AA(v, c, d);
      xor0 = v[b] ^ v[c];
      xor1 = v[b + 1] ^ v[c + 1];
      v[b] = xor1 >>> 31 ^ xor0 << 1;
      v[b + 1] = xor0 >>> 31 ^ xor1 << 1;
    }
    var BLAKE2B_IV32 = new Uint32Array([
      4089235720,
      1779033703,
      2227873595,
      3144134277,
      4271175723,
      1013904242,
      1595750129,
      2773480762,
      2917565137,
      1359893119,
      725511199,
      2600822924,
      4215389547,
      528734635,
      327033209,
      1541459225
    ]);
    var SIGMA8 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3
    ];
    var SIGMA82 = new Uint8Array(SIGMA8.map(function(x) {
      return x * 2;
    }));
    var v = new Uint32Array(32);
    var m = new Uint32Array(32);
    function blake2bCompress(ctx, last) {
      var i = 0;
      for (i = 0; i < 16; i++) {
        v[i] = ctx.h[i];
        v[i + 16] = BLAKE2B_IV32[i];
      }
      v[24] = v[24] ^ ctx.t;
      v[25] = v[25] ^ ctx.t / 4294967296;
      if (last) {
        v[28] = ~v[28];
        v[29] = ~v[29];
      }
      for (i = 0; i < 32; i++) {
        m[i] = B2B_GET32(ctx.b, 4 * i);
      }
      for (i = 0; i < 12; i++) {
        B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
      }
      for (i = 0; i < 16; i++) {
        ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
      }
    }
    function blake2bInit(outlen, key) {
      if (outlen === 0 || outlen > 64) {
        throw new Error("Illegal output length, expected 0 < length <= 64");
      }
      if (key && key.length > 64) {
        throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
      }
      var ctx = {
        b: new Uint8Array(128),
        h: new Uint32Array(16),
        t: 0,
        c: 0,
        outlen
      };
      for (var i = 0; i < 16; i++) {
        ctx.h[i] = BLAKE2B_IV32[i];
      }
      var keylen = key ? key.length : 0;
      ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
      if (key) {
        blake2bUpdate(ctx, key);
        ctx.c = 128;
      }
      return ctx;
    }
    function blake2bUpdate(ctx, input) {
      for (var i = 0; i < input.length; i++) {
        if (ctx.c === 128) {
          ctx.t += ctx.c;
          blake2bCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i];
      }
    }
    function blake2bFinal(ctx) {
      ctx.t += ctx.c;
      while (ctx.c < 128) {
        ctx.b[ctx.c++] = 0;
      }
      blake2bCompress(ctx, true);
      var out = new Uint8Array(ctx.outlen);
      for (var i = 0; i < ctx.outlen; i++) {
        out[i] = ctx.h[i >> 2] >> 8 * (i & 3);
      }
      return out;
    }
    function blake2b(input, key, outlen) {
      outlen = outlen || 64;
      input = util.normalizeInput(input);
      var ctx = blake2bInit(outlen, key);
      blake2bUpdate(ctx, input);
      return blake2bFinal(ctx);
    }
    function blake2bHex(input, key, outlen) {
      var output = blake2b(input, key, outlen);
      return util.toHex(output);
    }
    module.exports = {
      blake2b,
      blake2bHex,
      blake2bInit,
      blake2bUpdate,
      blake2bFinal
    };
  }
});

// node_modules/blakejs/blake2s.js
var require_blake2s = __commonJS({
  "node_modules/blakejs/blake2s.js"(exports, module) {
    var util = require_util();
    function B2S_GET32(v2, i) {
      return v2[i] ^ v2[i + 1] << 8 ^ v2[i + 2] << 16 ^ v2[i + 3] << 24;
    }
    function B2S_G(a, b, c, d, x, y) {
      v[a] = v[a] + v[b] + x;
      v[d] = ROTR32(v[d] ^ v[a], 16);
      v[c] = v[c] + v[d];
      v[b] = ROTR32(v[b] ^ v[c], 12);
      v[a] = v[a] + v[b] + y;
      v[d] = ROTR32(v[d] ^ v[a], 8);
      v[c] = v[c] + v[d];
      v[b] = ROTR32(v[b] ^ v[c], 7);
    }
    function ROTR32(x, y) {
      return x >>> y ^ x << 32 - y;
    }
    var BLAKE2S_IV = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SIGMA = new Uint8Array([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0
    ]);
    var v = new Uint32Array(16);
    var m = new Uint32Array(16);
    function blake2sCompress(ctx, last) {
      var i = 0;
      for (i = 0; i < 8; i++) {
        v[i] = ctx.h[i];
        v[i + 8] = BLAKE2S_IV[i];
      }
      v[12] ^= ctx.t;
      v[13] ^= ctx.t / 4294967296;
      if (last) {
        v[14] = ~v[14];
      }
      for (i = 0; i < 16; i++) {
        m[i] = B2S_GET32(ctx.b, 4 * i);
      }
      for (i = 0; i < 10; i++) {
        B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]]);
        B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]]);
        B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]]);
        B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]]);
        B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]]);
        B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]]);
        B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]]);
        B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]]);
      }
      for (i = 0; i < 8; i++) {
        ctx.h[i] ^= v[i] ^ v[i + 8];
      }
    }
    function blake2sInit(outlen, key) {
      if (!(outlen > 0 && outlen <= 32)) {
        throw new Error("Incorrect output length, should be in [1, 32]");
      }
      var keylen = key ? key.length : 0;
      if (key && !(keylen > 0 && keylen <= 32)) {
        throw new Error("Incorrect key length, should be in [1, 32]");
      }
      var ctx = {
        h: new Uint32Array(BLAKE2S_IV),
        b: new Uint32Array(64),
        c: 0,
        t: 0,
        outlen
      };
      ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
      if (keylen > 0) {
        blake2sUpdate(ctx, key);
        ctx.c = 64;
      }
      return ctx;
    }
    function blake2sUpdate(ctx, input) {
      for (var i = 0; i < input.length; i++) {
        if (ctx.c === 64) {
          ctx.t += ctx.c;
          blake2sCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i];
      }
    }
    function blake2sFinal(ctx) {
      ctx.t += ctx.c;
      while (ctx.c < 64) {
        ctx.b[ctx.c++] = 0;
      }
      blake2sCompress(ctx, true);
      var out = new Uint8Array(ctx.outlen);
      for (var i = 0; i < ctx.outlen; i++) {
        out[i] = ctx.h[i >> 2] >> 8 * (i & 3) & 255;
      }
      return out;
    }
    function blake2s(input, key, outlen) {
      outlen = outlen || 32;
      input = util.normalizeInput(input);
      var ctx = blake2sInit(outlen, key);
      blake2sUpdate(ctx, input);
      return blake2sFinal(ctx);
    }
    function blake2sHex(input, key, outlen) {
      var output = blake2s(input, key, outlen);
      return util.toHex(output);
    }
    module.exports = {
      blake2s,
      blake2sHex,
      blake2sInit,
      blake2sUpdate,
      blake2sFinal
    };
  }
});

// node_modules/blakejs/index.js
var require_blakejs = __commonJS({
  "node_modules/blakejs/index.js"(exports, module) {
    var b2b = require_blake2b();
    var b2s = require_blake2s();
    module.exports = {
      blake2b: b2b.blake2b,
      blake2bHex: b2b.blake2bHex,
      blake2bInit: b2b.blake2bInit,
      blake2bUpdate: b2b.blake2bUpdate,
      blake2bFinal: b2b.blake2bFinal,
      blake2s: b2s.blake2s,
      blake2sHex: b2s.blake2sHex,
      blake2sInit: b2s.blake2sInit,
      blake2sUpdate: b2s.blake2sUpdate,
      blake2sFinal: b2s.blake2sFinal
    };
  }
});

// backend/dashboard/common/functions.js
var import_multihashes = __toESM(require_src2());
var import_blakejs = __toESM(require_blakejs());
if (typeof window === "object" && typeof Buffer === "undefined") {
  const { Buffer: Buffer2 } = require_buffer();
  window.Buffer = Buffer2;
}
function blake32Hash(data) {
  const unit8array = import_blakejs.default.blake2b(data, null, 32);
  const buf = Buffer.from(unit8array.buffer);
  return import_multihashes.default.toB58String(import_multihashes.default.encode(buf, "blake2b-32", 32));
}

// backend/dashboard/views/utils/dummy-data.js
var fakeUsers = ["Flex Kubin", "Attila Hun", "Childish Gambino", "Ken M", "Margarida", "Rosalia", "Leihla P", "Andrea"];
var PAST_THREE_MONTHS = -3 * MONTHS_MILLIS;
var randomPastDate = () => addTimeToDate(new Date(), Math.floor(Math.random() * PAST_THREE_MONTHS));
var randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
var randomHash = () => blake32Hash(Math.random().toString(16).slice(2));
var contractDummyData = [];
var manifestDummy = {
  "gi.contracts/identity": { "head": { "manifestVersion": "1.0.0" }, "body": '{"version":"0.0.1","contract":{"hash":"21XWnNVpDxBCmdcQvko21FoGWpTXhNydrWfsCxB1VdfWg2wtxA","file":"identity.js"},"authors":[{"cipher":"algo","key":"<pubkey from deploy-key.json>"},{"cipher":"algo","key":"<pubkey from alex.json>"}],"contractSlim":{"file":"identity-slim.js","hash":"21XWnNSeKaQFg61hqcw9FvNV3TPZpqdBnNYQSVz3tKPVWygToL"}}', "signature": { "key": "<which of the 'authors' keys was used to sign 'body'>", "signature": "<signature>" } },
  "gi.contracts/mailbox": { "head": { "manifestVersion": "1.0.0" }, "body": '{"version":"0.0.1","contract":{"hash":"21XWnNQjQwf4fPBBqBJtPee3SMVbHrQSju4tu6SRjHNPfDBo8Q","file":"mailbox.js"},"authors":[{"cipher":"algo","key":"<pubkey from deploy-key.json>"},{"cipher":"algo","key":"<pubkey from alex.json>"}],"contractSlim":{"file":"mailbox-slim.js","hash":"21XWnNXUFWQDPrqeADPHPyYueAtVRoAdmwsMT9XBCWfPtP8DLb"}}', "signature": { "key": "<which of the 'authors' keys was used to sign 'body'>", "signature": "<signature>" } },
  "gi.contracts/chatroom": { "head": { "manifestVersion": "1.0.0" }, "body": '{"version":"0.0.1","contract":{"hash":"21XWnNPTjY6GrUyqb7GzsLstF5JZhs9b5jADnSVufZipPvtQeA","file":"chatroom.js"},"authors":[{"cipher":"algo","key":"<pubkey from deploy-key.json>"},{"cipher":"algo","key":"<pubkey from alex.json>"}],"contractSlim":{"file":"chatroom-slim.js","hash":"21XWnNRT58PL4Hj1BUv2SaJYZHVFkFAF8bS2FTwQy7XvuXB1QE"}}', "signature": { "key": "<which of the 'authors' keys was used to sign 'body'>", "signature": "<signature>" } },
  "gi.contracts/group": { "head": { "manifestVersion": "1.0.0" }, "body": '{"version":"0.0.1","contract":{"hash":"21XWnNXo4eU77dCQuWkPZtNTXST4hxd1DGnGMiBsaBB6vkdTZk","file":"group.js"},"authors":[{"cipher":"algo","key":"<pubkey from deploy-key.json>"},{"cipher":"algo","key":"<pubkey from alex.json>"}],"contractSlim":{"file":"group-slim.js","hash":"21XWnNSmnNSZZ6oZfsRmss2KKCSQS5QqVh62Ub7iojRAYwcxRr"}}', "signature": { "key": "<which of the 'authors' keys was used to sign 'body'>", "signature": "<signature>" } }
};
for (let i = 0; i < 20; i++) {
  const item = {
    contractId: randomHash(),
    type: randomFromArray(["gi.contracts/identity", "gi.contracts/mailbox", "gi.contracts/chatroom", "gi.contracts/group"]),
    size: 3 + 10 * Math.random(),
    spaceUsed: 10 + 20 * Math.random(),
    createdDate: randomPastDate()
  };
  item.manifestJSON = manifestDummy[item.type];
  contractDummyData.push(item);
}
var fakeUserStats = [
  { id: "total-users", name: L("Total users"), value: 152, icon: "users" },
  { id: "active-users", name: L("Active users"), value: 70, icon: "chart-up" },
  { id: "inactive-users", name: L("Inactive users"), value: 152, icon: "trend-down" }
];
var fakeUserTableData = fakeUsers.map((name) => ({
  name,
  id: randomHash(),
  groupCount: 1 + Math.floor(Math.random() * 5),
  ownedContractsCount: 50 + Math.floor(Math.random() * 200),
  contractSize: 0.2 + 5 * Math.random(),
  spaceUsed: 5 + 10 * Math.random(),
  credits: { used: 1 + Math.floor(Math.random() * 25), limit: 20 }
}));
var fakeApplicationOptions = [
  { id: "groupincome", name: L("Group income") },
  { id: "app-2", name: L("Application 2") },
  { id: "app-3", name: L("Application 3") }
];

export {
  contractDummyData,
  fakeUserStats,
  fakeUserTableData,
  fakeApplicationOptions
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=chunk-RWWVINDU-cached.js.map
