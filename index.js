import array_cancel from "./cancel";
import array_read from "./read";

export default function array(array) {
  return new ArraySource(array instanceof ArrayBuffer ? new Uint8Array(array) : array);
}

function ArraySource(array) {
  this._array = array;
}

ArraySource.prototype.read = array_read;
ArraySource.prototype.cancel = array_cancel;
