import { sha1 as nativeSha1 } from './node';
import { describe, expect, it } from 'vitest';

import { sha1 } from './index';
import { sha1 as jsSha1 } from './sha1';

describe('sha1', () => {
  it('should return the expected SHA-1 hash for "password"', () => {
    // Expected SHA-1 for "password" in hex: 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8
    const expected = new Uint8Array([
      0x5b, 0xaa, 0x61, 0xe4, 0xc9, 0xb9, 0x3f, 0x3f, 0x06, 0x82, 0x25, 0x0b, 0x6c, 0xf8, 0x33,
      0x1b, 0x7e, 0xe6, 0x8f, 0xd8,
    ]);
    expect(jsSha1('password')).toEqual(expected);
    expect(nativeSha1('password')).toEqual(expected);
    expect(sha1('password')).toEqual(expected);
  });

  it('should match node:crypto', async () => {
    const crypto = await import('node:crypto');
    const message = 'isomorphic-sha1-test';
    const expected = new Uint8Array(crypto.createHash('sha1').update(message).digest());
    expect(sha1(message)).toEqual(expected);
  });

  it('should support Uint8Array input', () => {
    const message = new TextEncoder().encode('message');
    expect(jsSha1(message)).toEqual(nativeSha1(message));
  });
});
