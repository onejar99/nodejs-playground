# Promises

<a name="toc"></a>

## TOC
* Notes
    * [Promise Advantages](#promise-advantages)
    * [Promise Object](#promise-objects)
    * [Promise Status Types](#promise-objects)
* Run
    * [Example 1: Basic](#run-ex1)
    * [Example 2: Asynchronous](#run-ex2)
    * [Example 3: Encapsulating Promise & Passing Parameters](#run-ex3)
    * [Example 4: then() Trigger](#run-ex4)
    * [Example 5: Callback vs. Promise](#run-ex5)
    * [Example 6: Chaining Promises](#run-ex6)
    * [Example 7: catch()](#run-ex7)
* [Other References](#other-references)

---

## Notes

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="promise-advantages"></a>

### Promise Advantages
1. 利用鏈式呼叫的寫法，簡化層層 callback 的寫法，避免巢狀 *Callback Hell*
2. `成功callback` 和 `失敗callback` 可以被分別定義，增加維護性
3. 利用維護狀態的方式，控制 callback 的呼叫，只會執行一次 `resolve` 或 `reject` callback，降低因撰寫失誤而重複呼叫 callback 的機率


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="promise-objects"></a>

### Promise Objects
````
Promise {<pending>}
    - __proto__: Promise
    - [[PromiseStatus]]: "pending"
    - [[PromiseValue]]: undefined
````
````
Promise {<resolved>: "Hey, it worked!"}
    - __proto__:Promise
    - [[PromiseStatus]]:"resolved"
    - [[PromiseValue]]:"Hey, it worked!"
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="promise-status-types"></a>

### Promise Status Types

狀態是 Promise 的精髓

| Status    | 轉變時機        | 說明 |
|-----------|----------------|-----|
| pending   | new Promise()  | the promise hasn't fulfilled or reject yet |
| fulfilled | call resolve() | the action relating to the promise succeeded |
| rejected  | call reject()  | the action relating to the promise failed |

> `fulfilled` 和 `rejected` 又稱 `settled` 類型的狀態
> (the promise has been fulfilled or reject)


## Run

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex1"></a>

### Example 1: Basic

純 Promise 基本規則範例，未使用 async, 傳遞參數等情境。

1. Promise Executor 會立刻執行
    * 所以用 Promise 時通常會包在一個函數中，需要時才呼叫此封裝函數 (參考 [Example 3](#run-ex3))
2. Promise 的狀態一旦變成 settled 類型（`fulfilled` 或 `rejected`)，就不能再變動
    * 因此只有第一個 `resolve()` or `reject()` 有效
    * 不能 switch a rejected promise to a fulfilled one
3. `resolve()` or `reject()` only accept zero or one argument (but accept object)
    * 只有一個 `PromiseValue`
    * 多塞兩個以上的參數不會拋錯，但沒作用

`$ node src/ex1-promise-basic.js`


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex2"></a>

### Example 2: Asynchronous

asynchronous 情境簡易用法，無參數傳遞。

`$ node src/ex2-promise-async.js`


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex3"></a>

### Example 3: Encapsulating Promise & Passing Parameters

1. 傳遞參數情境的用法
2. 封裝 Promise 的寫法，避免立即觸動 Promise Executor，等呼叫時才會正式觸動

`$ node src/ex3-promise-encap-n-param.js`


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex4"></a>

### Example 4: then() Trigger

1. 無論是 `resolved` 或 `rejectd`，同一個 Promise 再呼叫一次 `then()` 也會再次觸發對應的 callback function
2. `then()` 會回傳一個 Promise 物件
    * 可以由 `resolve` 或 `reject` callback function 回傳指定的 Promise
    * 如果沒有自訂回傳，就會回傳一個狀態等於 pending 的 Promise

`$ node src/ex4-promise-then.js`
````
Error 1: Arguments must be numbers.
Error 2: Arguments must be numbers.
Ans 3: undefined
Error 4: Arguments must be numbers.
````


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex5"></a>

### Example 5: Callback vs. Promise

同一個 asynchronous 範例的 callback 版和 Promise 版寫法比較
(極簡範例，只有一層 asynchronous，Promise 優勢不明顯)

`$ node src/ex5-ver-callback.js`
`$ node src/ex5-ver-promise.js`


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex6"></a>

### Example 6: Chaining Promises

鏈式呼叫的寫法

`$ node src/ex6-promise-chaining.js`


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex7"></a>

### Example 7: catch()

* 鏈式操作 + `catch()` 的寫法
* `catch()`有兩個作用：
    1. 作為統一的 `reject` callback (Case 1)
    2. 充當 try/catch 功能 (Case 3)
* 補充：
    1. 如果同時有自定義的 reject callback 和 catch callback，會以自定義 reject callback 為準 (Case 2)
    2. 在 resolve 或 reject callback 內出現錯誤，其實會被包裝成一個 rejected promise 拋出來，被下一層的 reject callback 處理 (Case 4)， 或 catch 處理(Case 5)，但不會被同一層的 reject callback 處理(Case 5)
    3. 如果都沒有人處理 rejected Promise，會拋錯 `UnhandledPromiseRejectionWarning` (Case 6)
    
`$ node src/ex7-promise-catch.js`
````
[Case 1] Ans 1: 11
[Case 2] Ans 1: 11
[Case 3] Ans 1: 11
[Case 4] Ans 1: 11
[Case 5] Ans 1: 11
[Case 6] Ans 1: 11
[Case 4] Error 2: ReferenceError: NotDefinedVar is not defined
[Case 5] Ans 2: 20
[Case 3] Caught! ReferenceError: NotDefinedVar is not defined
[Case 5] Caught! ReferenceError: NotDefinedVar is not defined
[Case 2] Error 2: Arguments must be numbers.
[Case 1] Caught! Arguments must be numbers.
(node:28285) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): ReferenceError: NotDefinedVar is not defined
(node:28285) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="other-references"></a>

## Other References
* [大白话讲解Promise（一） - 吕大豹- 博客园](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)
