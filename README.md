# drivet.js
Using [Drivet's](https://drivet.xyz) API made easy 
[![Package Version](https://badgen.net/npm/v/drivet.js)](https://npmjs.com/package/drivet.js) [![TypeScript](https://badgen.net/npm/types/drivet.js)](https://npmjs.com/package/drivet.js)


## Install

### NPM
```
npm install drivet.js
```

### [Yarn](https://npmjs.com/package/yarn)
```
yarn add drivet.js
```

## All Endpoints

### Fun
| Function | Description | Params | Type |
| -------- | ----------- | ------ | ---- |
| `eightball()` | Sends a random 8ball response | none | JSON |
| `fml()` | Sends a random fuck-my-life qoute | none | JSON |
| `reverse()` | Reverse a text | text | JSON |
| `vaporwave()` | Vaporwave a text | text | JSON |

### Facts
| Function | Description | Params | Type |
| -------- | ----------- | ------ | ---- |
| `catFact()` | Sends a random cat fact | none | JSON |
| `dogFact()` | Sends a random dog fact | none | JSON |

### Images
| Function | Description | Params | Type |
| -------- | ----------- | ------ | ---- |
| `cat()` | Sends a random cat picture | none | JSON |
| `dog()` | Sends a random dog picture | none | JSON |

### Miscellaneous
| Function | Description | Params | Type |
| -------- | ----------- | ------ | ---- |
| `chat()` | Chat with an AI | message, uid | JSON |
| `isitup()` | Checks if an website is up | url | JSON |

## Example
Using Drivet's API is pretty easy.
Once installed, you may use it like this:
```js
const { DrivetClient } = require('drivet.js')
// or
import { DrivetClient } from 'drivet.js';
const drivet = new DrivetClient();

let dogFact = await drivet.facts.dogFact();
let reverse = await drivet.facts.reverse({ text: 'Funny Text' });

console.log(dogFact)
// Returns { "fact": "More than one in three U.S. families owns a dog." }
console.log(reverse)
// Returns { "text": "txeT ynnuF" } 
```

## Support
Join our [Discord Server](https://discord.drivet.xyz) to get support with this package.