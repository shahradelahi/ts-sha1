import { sha1 as nativeSha1 } from './node';

import { sha1 as jsSha1 } from './sha1';
import { isNode } from './utils';

/**
 * Calculates the SHA-1 hash of a message.
 * Automatically uses native crypto in Node.js for performance.
 *
 * @param message The message to hash.
 * @returns The SHA-1 hash as a Uint8Array.
 */
export function sha1(message: string | Uint8Array): Uint8Array {
  if (isNode()) {
    return nativeSha1(message);
  }
  return jsSha1(message);
}

export default sha1;
