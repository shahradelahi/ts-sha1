/**
 * Determines if the current environment is Node.js.
 * @returns {boolean} True if in Node.js, false otherwise.
 */
export function isNode(): boolean {
  return typeof process !== 'undefined' && process.versions?.node !== undefined;
}

/**
 * Convert a UTF-8 string to a byte array.
 * @param str The string to convert.
 * @returns {Uint8Array} The byte array.
 */
export function utf8ToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}
