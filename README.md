<h1 align="center">
  <sup>@se-oss/sha1</sup>
  <br>
  <a href="https://github.com/shahradelahi/ts-sha1/actions/workflows/ci.yml"><img src="https://github.com/shahradelahi/ts-sha1/actions/workflows/ci.yml/badge.svg?branch=main&event=push" alt="CI"></a>
  <a href="https://www.npmjs.com/package/@se-oss/sha1"><img src="https://img.shields.io/npm/v/@se-oss/sha1.svg" alt="NPM Version"></a>
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="MIT License"></a>
  <a href="https://bundlephobia.com/package/@se-oss/sha1"><img src="https://img.shields.io/bundlephobia/minzip/@se-oss/sha1" alt="npm bundle size"></a>
  <a href="https://packagephobia.com/result?p=@se-oss/sha1"><img src="https://packagephobia.com/badge?p=@se-oss/sha1" alt="Install Size"></a>
</h1>

_@se-oss/sha1_ is an isomorphic SHA-1 hashing library that automatically leverages native performance in Node.js while providing a robust pure-JS fallback for browsers.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
npm install @se-oss/sha1
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install @se-oss/sha1
```

**yarn**

```bash
yarn add @se-oss/sha1
```

</details>

## 📖 Usage

### Basic Usage

Calculate the SHA-1 hash of a string. Returns a `Uint8Array`.

```ts
import { sha1 } from '@se-oss/sha1';

const hash = sha1('password');
// Uint8Array(20) [ 91, 170, 97, 228, ... ]
```

### Buffer Input

Support for `Uint8Array` or `Buffer` as input.

```ts
import { sha1 } from '@se-oss/sha1';

const data = new TextEncoder().encode('hello world');
const hash = sha1(data);
```

### Isomorphic Behavior

The library detects the environment and switches implementations automatically:

- **Node.js**: Uses `node:crypto` for hardware-accelerated performance.
- **Browsers/Edge**: Uses a pure JavaScript implementation.

## 📚 Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@se-oss/sha1).

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/ts-sha1).

Thanks again for your support, it is much appreciated! 🙏

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/ts-sha1/graphs/contributors).
