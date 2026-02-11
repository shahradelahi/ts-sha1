import { createHash } from 'node:crypto';

/**
 * Calculates the SHA-1 hash using Node.js's native `crypto` module.
 *
 * @param message The message to hash.
 * @returns The SHA-1 hash as a Uint8Array.
 */
export function sha1(message: string | Uint8Array): Uint8Array {
  const hash = createHash('sha1');
  hash.update(message);
  return new Uint8Array(hash.digest());
}
