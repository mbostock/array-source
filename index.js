import ArraySource from "./array/index";

export default function array(array) {
  return new ArraySource(array instanceof ArrayBuffer ? new Uint8Array(array) : array);
}
