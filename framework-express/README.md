# Express

<a name="toc"></a>

## TOC
* Notes
    * [Requiring Syntax](#requiring-syntax)
* Usage Examples
    * [Static Pages](#express-static-pages)
    * [Dynamic Pages](#express-dynamic-pages)
    * [Handlebars(hbs) Basic](#express-hbs-basic)
    * [Handlebars(hbs) Helper](#express-hbs-helper)
    * [Handlebars(hbs) Partials](#express-hbs-partials)
    * [Middleware](#express-middleware)

## Notes

<a name="requiring-syntax"></a>

### Requiring Syntax

1. Requring:
````js
const express = require('express');
var app = express();
````

2. Start server:
````js
// deploy on port (process.env.PORT for platform. e.g., Heroku)
const port = process.env.PORT || 3000; 
// app.listen(3000);
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>


## Usage Examples

<a name="express-static-pages"></a>

### Express - Static Pages

#### Key Points

1. Coding static pages: `public/help.html`

2. Config path for static page folder (via middleware):
````js
app.use(express.static(`${__dirname}/public`));
````

#### Run

Source: [express-static-page](./express-static-page)

`$ node src/server.js`

Visit: http://localhost:3000/help.html

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="express-dynamic-pages"></a>

### Express - Dynamic Pages

#### Key Points

1. API route
````js
var app = express();
app.get('/', (req, rsp)=>{
    rsp.send('Hello Express');
});
````

2. `rsp.send()`
````js
// 1. plain text
rsp.send('Hello Express');
// 2. json
rsp.send({
    name: 'John',
    age: 18
});
````

#### Run

Source: [express-dynamic-page](./express-dynamic-page)

`$ node src/server.js`

Visit:
* http://localhost:3000/
* http://localhost:3000/info
* http://localhost:3000/blog

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="express-hbs-basic"></a>

### Express - Handlebars(hbs) Basic

View Rendering package.

#### Key Points

1. "views" is the default folder name of .hbs files (**based on executing path**)
e.g., `$ node src/server.js` -> try to find `...../express-hbs-basic/views"`
e.g., `$ node server.js` -> try to find `...../express-hbs-basic/src/views"`

2. 渲染基本語法：
In .js: `rsp.render(hbsFileName[, renderData])`
````js
app.get('/welcome', (req, rsp) => {
    rsp.render('welcome.hbs', {
        pageTitle: 'Welcome',
        copyrightYear: new Date().getFullYear()
    });
});
````
In .hbs:
````html
<p>Copyright {{copyrightYear}}</p>
````

3. 如果沒用到 hbs 去做 helper 之類的設定 可以不需要 require hbs，但 hbs module 仍必須要裝，`rsp.render()` 會自己根據副檔名去找對應的 module
`const hbs = require('hbs');`

#### To Be Clarified

* `app.set('view engine', 'hbs');`: comment out seems to be fine

#### Run

Source: [express-hbs-basic](./express-hbs-basic)

````
$ cd src
$ node server.js
````

Visit: 
* http://localhost:3000/welcome: 基本渲染範例
* http://localhost:3000/hello: view有設定渲染欄位，但沒有給予實際資料，不會出錯
* http://localhost:3000/welcome2: (failed case with *.txt view file) Error: Cannot find module 'txt'
* http://localhost:3000/welcome3: (failed case with *.html view file) Error: Cannot find module 'html'

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="express-hbs-helper"></a>

### Express - Handlebars(hbs) Helper

#### Key Points

1. 可設定 Global 性的共用變數
````js
hbs.registerHelper('copyrightName', ()=>{
    return "OneJar";
});
````

2. 如果 response 自己有回傳，同時 helper 也有設，**hbs helper comes first**
e.g. `copyrightYear`

3. 可以當類似函數的用法使用
````js
hbs.registerHelper('keypoint', (text) =>{
    return text.toUpperCase();
});
````
````html
<h1>{{keypoint bodyTitle}}</h1>
````


#### Run

Source: [express-hbs-helper](./express-hbs-helper)

````
$ cd src
$ node server.js
````

Visit: http://localhost:3000/about


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="express-hbs-partials"></a>

### Express - Handlebars(hbs) Partials

模組化重複的版面元件

#### Key Points

1. 定義放置 partials 的資料夾
````js
hbs.registerPartials(`${__dirname}/views/partials`);
````

2. Create footer.hbs, header.hbs in /views/partials

3. Use partials in other .hbs files. e.g., `about.hbs`
````html
<html>
    {{> header}}
    <body>
        <h1>{{bodyTitle}}</h1>
        <p>{{bodyText}}</p>

        {{> footer}}
    </body>
</html>
````

#### Run

Source: [express-hbs-partials](./express-hbs-partials)

````
$ cd src
$ node server.js
````

Visit: http://localhost:3000/about


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="express-middleware"></a>

### Express - Middleware

* middleware: similar to Interceptors in Java
* 可以用 middleware 做到前面維修頁面的攔截效果；也可以做到最後找不到資源的客製處理

#### Key Points

1. 基本語法：`app.use()`
可以在 `app.use()` 裡直接回傳 response (using `rsp.send()`, `rsp.render()`)
````js
app.use((req, rsp, next)=>{
    if(maintaining){
        rsp.render('maintenance.hbs');
        return;
    }
    next();
});
````

2. 呼叫 `next()` 前往下一關; 如果沒有 `next()` 又沒有 response 的回傳，就會一直卡在同一關沒有回應

3. `next()` 後面的程式碼還是會執行，所以如果有回傳，一般要 `return` 來中斷 chain

4. `next()` 之後如果沒有 `return`，後面的程式碼還是會執行，但會等到整個 chain 結束後才執行，而且似乎是有順序的倒回執行
````
OneJar@onejar99-MBP:~/....../express-middleware/src$ node server.js
Server is up on port 3000
MIDDLE 01 [Thu Mar 22 2018 01:26:03 GMT+0800 (CST)] GET /hello
MIDDLE 02 starting
MIDDLE 03 starting
[API] /hello
MIDDLE 03 after next
MIDDLE 02 after next
MIDDLE 01 after next
````

#### Run

Source: [express-middleware](./express-middleware)

````
$ cd src
$ node server.js
````

Visit: http://localhost:3000/hello


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----



