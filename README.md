# Obfuscate

This package provides obfuscation.

## Usage

```
npm i obfuscate-365
```

## Functions

---

### obfuscateJSON

e.g.

```js
import { obfuscateJSON } from "obfuscate";

console.log(obfuscateJSON('{title: "test", description: "test"}'));
```

Should return

```json
{
  "obfuscatedJSON": "{title: \"\\u0074\\u0065\\u0073\\u0074\", description: \"\\u0074\\u0065\\u0073\\u0074\"}",
  "mapping": [{ "test": "\\u0074\\u0065\\u0073\\u0074" }]
}
```

---
