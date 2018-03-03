# Async/Await

<a name="toc"></a>

## TOC
* Notes
    * [Intro](#intro)
    * [Async Function](#async-function)
    * [Await](#await)
* Run
    * [Example 1: Async Function vs Promise](#run-ex1)
    * [Example 2: Await](#run-ex2)
    * [Example 3: Practice for Getting Hero Score (Promise vs. async/await)](#run-ex3)

## Notes

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="intro"></a>

### Intro

1. async/await 和 Callback、Promise 不是互斥的 solution，而是 Promise 的增強
2. `async` 和 `await` 分別是兩個關鍵字
    * `async` 可以單獨使用
    * `await` 一定要配合 `aysnc`

> * ES7 feature
> * require: Node.js 7.6 or newer

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="async-function"></a>

### Async Function

1. 重點：簡化 Promise 封裝函數
1. function 以 `async` 關鍵字修飾
2. Async function 總是回傳一個 `Promise` 物件
    * 如果沒有 `throw`，就相當於 `resolve()`
    * 如果有 `return`，就相當於 `resolve(PromiseValue)`
    * 只要有 `throw` 就代表 `reject()`，不管是不是 throw Error 物件
    * 如果 throw Error 物件，要注意 PromiseValue 會多出 Error 字眼 (參考 [Example1](#run-ex1))

Syntax Example:

以下兩個語法效果相等：

````js
const getName = ()=>{
    return new Promise((resolve, reject)=>{
       resolve('Mike'); 
    });
};
````
````js
const getName = async ()=>{
    return 'Mike';
};
````


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="await"></a>

### Await

1. 重點：簡化 `then()` 的語法
    * 利用 `await` 可以直接取得 `PromiseValue`，不用寫繁瑣的 resolve/reject callback
2. 額外解決議題：簡化鏈式 Promise 繁複的變數暫存
    * 多個 `then()` 串連呼叫時，無法直接存取上一層 then() 的 callback 的 PromiseValue
    * 必須先宣告一個超越 callback function scope 的變數暫存
    * `awiat` 可以解除這種困境
    * (參考 [Example3](#run-ex3))
3. 有用到 `await` 的函數一定要是 `async` function
    * 否則會報語法錯誤(SyntaxError: Unexpected identifier)
    * 因為和 `async function` 一起用，所以雖然是直接 return 某值，但還是會被 `async` 包裝成 promise

Syntax Example:

以下兩個語法效果相等：

````js
const getIntro = ()=>{
    return getName().then((name)=>{
        return name;
    });
};
````
````js
const getIntro = async ()=>{
    return await getName();
};
````


## Run

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex1"></a>

### Example 1: Async Function vs Promise

resolve/reject 的 **Promise 封裝函數寫法**與 **async functions 寫法** 比較

`$ node src/ex1-async-function.js`



<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex2"></a>

### Example 2: Await

Await 搭配 Promise 封裝函數或 async function 的寫法

`$ node src/ex2-async-await.js`


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="run-ex3"></a>

### Example 3: Practice for Getting Hero Score (Promise vs. async/await)

* 多層 Promise 串連的應用情境範例: 取得測驗平均成績
* 比較原生 Promise 寫法和 async/await 簡化後的寫法

`$ node src/ex3-practice-promise.js`

`$ node src/ex3-practice-async-await.js`



## Other Reference
NA
