# Module: FS (File System)

> * Intro: 檔案 IO、目錄相關函數
> * Type: Built-in
> * Document: [Node.js API Doc - File System](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html)
> * Requiring syntax: `const fs = require("fs");`

## Key Points
1. 所有 methods 都有 asynchronous 和 synchronous 的形式

<a name="toc"></a>

## TOC
* [Note: asynchronous form vs. synchronous form](#async-vs-sync-form)
* [fs.stat()](#stat): 取得檔案資訊，如檔案大小、建立時間
* [fs.appendFile()](#appendfile): 寫入檔案，以 append 方式

---

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="async-vs-sync-form"></a>

## Note: asynchronous form vs. synchronous form

使用 asynchronous form 要注意執行順序 e.g. 處理到尚未產生的檔案而拋錯

### Example 1: asynchronous

> 1. 異步執行，進入 callback stack，main stack 會先執行完才輪到 callback
> 1. 無回傳值，執行結果放在 callback function 的參數
> 1. 函數的最後一個參數放 callback function
> 1. callback function 的第一個參數保留給 exception，如果成功執行，則該參數為 `null` or `undefined`.

````js
var x = fs.stat('/tmp/test.txt', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});
console.log('x=', x);
console.log('app.js end');
````
````
x= undefined
app.js end
stats: {"dev":16777220,"mode":33188,"nlink":1,"uid":501,"gid":20,"rdev":0,"blksize":4194304,"ino":8591296534,"size":3,"blocks":8,"atimeMs":1519394999255.87,"mtimeMs":1519394997946.1836,"ctimeMs":1519394997946.1836,"birthtimeMs":1519394995728.3745,"atime":"2018-02-23T14:09:59.256Z","mtime":"2018-02-23T14:09:57.946Z","ctime":"2018-02-23T14:09:57.946Z","birthtime":"2018-02-23T14:09:55.728Z"}
````

### Example 2: synchronous

> 1. 同步執行，照順序，無 callback
> 1. 有回傳值

````js
var x = fs.statSync('/tmp/test.txt');
console.log('x=', x);
console.log('app.js end');
````
````
x= Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4194304,
  ino: 8591296534,
  size: 3,
  blocks: 8,
  atimeMs: 1519394999255.87,
  mtimeMs: 1519394997946.1836,
  ctimeMs: 1519394997946.1836,
  birthtimeMs: 1519394995728.3745,
  atime: 2018-02-23T14:09:59.256Z,
  mtime: 2018-02-23T14:09:57.946Z,
  ctime: 2018-02-23T14:09:57.946Z,
  birthtime: 2018-02-23T14:09:55.728Z }
app.js end
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="stat"></a>

## fs.stat(path, callback), fs.statSync(path)]

取得檔案資訊，如檔案大小、建立時間

> Return: fs.Stats object

Example:
````js
var x = fs.statSync('/tmp/test.txt');
console.log('x=', x);
````

Result:
````
x= Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4194304,
  ino: 8591296534,
  size: 3,
  blocks: 8,
  atimeMs: 1519394999255.87,
  mtimeMs: 1519394997946.1836,
  ctimeMs: 1519394997946.1836,
  birthtimeMs: 1519394995728.3745,
  atime: 2018-02-23T14:09:59.256Z,
  mtime: 2018-02-23T14:09:57.946Z,
  ctime: 2018-02-23T14:09:57.946Z,
  birthtime: 2018-02-23T14:09:55.728Z }
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="appendfile"></a>

## fs.appendFile(file, data[, options], callback), fs.appendFileSync(file, data[, options])

寫入檔案，以 append 方式

Example:
````js
fs.appendFileSync('test.txt', `Hello World`);
````
