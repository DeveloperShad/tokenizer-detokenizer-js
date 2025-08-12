# tokenizer-detokenizer-js

A lightweight, object-oriented **tokenizer and detokenizer** library for JavaScript and TypeScript.  
Works in **Node.js**, modern browsers, and via `<script>` tags.  

---

## ✨ Features

- **Tokenize** strings into words, characters, or custom patterns.
- **Detokenize** token arrays back into strings.
- Object-Oriented API for easy extension.
- Works in:
  - **Node.js** (CommonJS or ESM)
  - **Browsers** via `<script>` tag
  - **TypeScript** projects
- Zero dependencies (except build/runtime helpers).

---

## 📦 Installation

### 1. Using NPM

```bash
npm install tokenizer-detokenizer-js

import { TokenizerDetokenizer } from "tokenizer-detokenizer-js";
                            OR
const { TokenizerDetokenizer } = require("tokenizer-detokenizer-js");

const tokenizer = new Tokenizer();
const tokens = tokenizer.encode("Hello world!");
console.log(tokens); // Example: "72,101,108,108,111,32,119,111,114,108,100,33"

const text = tokenizer.decode(tokens);
console.log(text); // "Hello world!"
                            OR
<script src="https://unpkg.com/tokenizer-detokenizer-js/dist/index.umd.js"></script>
<script>
  const tokenizer = new TokenizerDetokenizerJs.TokenizerDetokenizerJs();
  const tokens = tokenizer.encode("Hello World!");
  console.log(tokens);

  const text = tokenizer.decode(tokens);
  console.log(text);
</script>

