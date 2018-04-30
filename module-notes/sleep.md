# Module: sleep

> * Intro: sleep utility methods (for debugging)
> * Type: 3rd-party
> * Document: [Node.js API Docs - sleep](https://www.npmjs.com/package/sleep)
> * Requiring syntax: `const sleep = require('sleep');`

## Notes

blocking 式的 sleep，和 `setTimeout()` 的 callback 式不同，主要用於 debugging

> *Abstract from docs:*
> * Add `sleep()`, `msleep()` and `usleep()` to Node.js, via a C++ binding.
> * **This is mainly useful for debugging.**
> * These calls will **block execution of all JavaScript** by halting Node.js' event loop!

<a name="toc"></a>

## TOC
* [sleep.sleep(n)](#sleep-msleep-usleep): sleep for n seconds
* [sleep.msleep(n)](#sleep-msleep-usleep): sleep for n miliseconds
* [sleep.usleep(n)](#sleep-msleep-usleep): sleep for n microseconds (1 second is 1000000 microseconds)
* [sleep.sleep() vs. setTimeout()](#sleep-vs-settimeout)

---

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="sleep-msleep-usleep"></a>

## sleep.sleep(n), sleep.msleep(n), sleep.usleep(n)

Example:
````js
console.log('app start');

const sleep = require('sleep');
sleep.sleep(5);

console.log('app end');
````

Result:
````
app start
(pause 5 secs here)
app end
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="sleep-vs-settimeout"></a>

## sleep.sleep() vs. setTimeout()

由於 `setTimeout()` 是 callback queue，會等到 main call stack 結束才執行。

Example:
````js
console.log('app start');

setTimeout( () => {
    console.log('Inside of callback 1');
}, 2000); //milliseconds

setTimeout( () => {
    console.log('Inside of callback 2');
}, 0);

console.log('break point 1');

const sleep = require('sleep');
sleep.sleep(5);

console.log('app end');
````

Result:
````
app start
break point 1
(pause 5 secs here)
app end
Inside of callback 2
Inside of callback 1
````
