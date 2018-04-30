# Module: lodash

> * Intro: 各種泛用的工具函數，如型態判斷、過濾陣列重複元素
> * Type: 3rd-party
> * Document: [npm - lodash](https://www.npmjs.com/package/lodash)
> * Requiring syntax: `const _ = require("lodash");`

<a name="toc"></a>

## TOC
* [_.uniq()](#uniq): 過濾陣列裡的重複元素

---

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="uniq"></a>

## _.uniq(arrayObj)

過濾陣列裡的重複元素

Example:
````js
var myAry = ["Apple", 1, 3, 5, "Apple", "Banana", 3, "Cake", 3];
console.log("Before: ", myAry);
console.log("After : ", _.uniq(myAry));
````

Result:
````
Before:  [ 'Apple', 1, 3, 5, 'Apple', 'Banana', 3, 'Cake', 3 ]
After :  [ 'Apple', 1, 3, 5, 'Banana', 'Cake' ]
````