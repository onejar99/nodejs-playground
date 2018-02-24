# Module: string-format

> * Intro: 字串格式化 utility methods
> * Type: 3rd-party
> * Document: [npm - string-format](https://www.npmjs.com/package/string-format)
> * Requiring syntax: `const format = require('string-format');`

## Note

ES6支援**模板字串 (Template literals or Template strings)** 功能，在字串串連(concatenation)的場合，string-format 需求程度降低很多

Reference：[Template literals - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


## TOC
* [format()](#format): 格式化字串

---

<a name="format"></a>

## format(template, $0, $1, …, $N)

Example:
````js
const format = require('string-format');
console.log( format('name=[{0}] location=[{1}]', 'OneJar', 'Taiwan') );
````

Result:
````
name=[OneJar] location=[Taiwan]
````
