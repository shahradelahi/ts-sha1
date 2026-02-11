import { utf8ToBytes } from './utils';

/**
 * SHA-1 implementation in pure JavaScript.
 * Adapted from https://github.com/chrisveness/crypto/blob/master/sha1.js
 */
export function sha1(message: string | Uint8Array): Uint8Array {
  const msg = typeof message === 'string' ? utf8ToBytes(message) : message;

  // constants [\u00a75.1]
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

  // initial hash value [\u00a75.3.1]
  let H0 = 0x67452301;
  let H1 = 0xefcdab89;
  let H2 = 0x98badcfe;
  let H3 = 0x10325476;
  let H4 = 0xc3d2e1f0;

  // PRE-PROCESSING [\u00a76.1.1]

  // add trailing '1' bit (+ 0's padding) to length in bits as a 64-bit big-endian value
  const len = msg.length;
  const wordCount = ((len + 8) >> 6) + 1;
  const words = new Uint32Array(wordCount * 16);

  for (let i = 0; i < len; i++) {
    const idx = i >> 2;
    words[idx] = (words[idx] || 0) | (msg[i]! << (24 - (i % 4) * 8));
  }
  const lastIdx = len >> 2;
  words[lastIdx] = (words[lastIdx] || 0) | (0x80 << (24 - (len % 4) * 8));
  words[words.length - 1] = len * 8;

  // HASH COMPUTATION [\u00a76.1.2]

  for (let i = 0; i < words.length; i += 16) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; t++) W[t] = words[i + t] || 0;
    for (let t = 16; t < 80; t++) {
      const n = (W[t - 3] || 0) ^ (W[t - 8] || 0) ^ (W[t - 14] || 0) ^ (W[t - 16] || 0);
      W[t] = (n << 1) | (n >>> 31);
    }

    let a = H0;
    let b = H1;
    let c = H2;
    let d = H3;
    let e = H4;

    for (let t = 0; t < 80; t++) {
      const s = Math.floor(t / 20);
      let f = 0;
      if (s === 0) f = (b & c) | (~b & d);
      else if (s === 1) f = b ^ c ^ d;
      else if (s === 2) f = (b & c) | (b & d) | (c & d);
      else if (s === 3) f = b ^ c ^ d;

      const T = (((a << 5) | (a >>> 27)) + f + e + (K[s] || 0) + (W[t] || 0)) | 0;
      e = d;
      d = c;
      c = (b << 30) | (b >>> 2);
      b = a;
      a = T;
    }

    H0 = (H0 + a) | 0;
    H1 = (H1 + b) | 0;
    H2 = (H2 + c) | 0;
    H3 = (H3 + d) | 0;
    H4 = (H4 + e) | 0;
  }

  const res = new Uint8Array(20);
  for (let i = 0; i < 4; i++) {
    res[i] = (H0 >>> (24 - i * 8)) & 0xff;
    res[i + 4] = (H1 >>> (24 - i * 8)) & 0xff;
    res[i + 8] = (H2 >>> (24 - i * 8)) & 0xff;
    res[i + 12] = (H3 >>> (24 - i * 8)) & 0xff;
    res[i + 16] = (H4 >>> (24 - i * 8)) & 0xff;
  }

  return res;
}
