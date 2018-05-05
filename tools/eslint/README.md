# ESLint

<a name="toc"></a>

## TOC
* Notes
    * [Intro.](#intro)
    * [Quick Start](#quick-start)
        * Installation
        * Executing
        * Appendix: VS Code Extension: ESLint Plugin
    * [ESLint Config File](eslint-config)
    * [ESLint Config File - Generating By ESlint init](#eslint-config-int)
    * [Configuring ESLint Notes](#eslint-config-note)
* Trouble Shooting Exp.
    * [Issue: Cannot find module 'eslint-config-google' when eslint app.js](#issue-not-found-style)
* [Reference](#reference)
    

----

## Notes

<a name="intro"></a>

### Intro.

* linter(Code Quality Tool)
    * 變數：unused, un-defined
    * 字串使用單引號或雙引號
    * 縮排、多餘空行、運算子前後空格
* 可客製化 Rules
    * e.g. 設定環境是 browser 或 Nodejs，會影響檢查，例如判斷 document 是不是已宣告的變數
* 類似功用的還有JSLint、JSHint，但 ESLint 對 ES6,ES7 的整合似乎較好
* 官網有 online demo 試玩: https://eslint.org/demo/

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="quick-start"></a>

### Quick Start

#### Installation

1. `# npm install -g eslint`
    * (可以對各個專案安裝各自的 ESlint 版本)
    * `# npm install --save-dev eslint@4.9.0`
2. `# eslint --version`


#### Executing

1. Add a file named `.eslintrc`(**ESLint config file**) in the project

Basic Example:
````json
{
    "extends": "eslint:recommended"
}
````

2. Programming
````js
var foo = bar;
````

3. `# eslint app.js`
````
OneJar@onejar99-MBP:~/nodejs-playground/tools/eslint/eslint-manual$ eslint app.js

...../nodejsBox/nodejs-playground/tools/eslint/eslint-manual/app.js
  1:5   error  'foo' is assigned a value but never used  no-unused-vars
  1:11  error  'bar' is not defined                      no-undef

✖ 2 problems (2 errors, 0 warnings)
````


#### Appendix: VS Code Extension: ESLint Plugin

安裝 VS Code 的 ESLint Plugin，可直接在編輯視窗即時看到提示，不用執行 `eslint app.js` 指令


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="eslint-config"></a>

### ESLint Config File

* File naming: `.eslintrc`,  `.eslintrc.*`
* 可用 JSON, YAML 等不同格式儲存
* 可以手動新增，也可以用 `eslint --init` 輔助

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="eslint-config-int"></a>

### ESLint Config File - Generating By ESlint init

1. `# npm init`
2. `# eslint --init`
    * 沿用前人的 Coding Style，如 Google, Airbnb, Standard
    * 用問答方式，產生適合自己的 Style Config
    * 沿用前人的 Coding Style，但客製化細項 (例如 Airbnb 規則偏於嚴格，採強制 error 限制)

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="eslint-config-note"></a>

### Configuring ESLint Notes

* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)
* Default: ES5

> For ES6 syntax, use { "parserOptions": { "ecmaVersion": 6 } }; for new ES6 global variables, use { "env": { "es6": true } } (this setting enables ES6 syntax automatically). 

#### Example:
````json
    "rules": {
        "comma-dangle": "warn", 
        "indent": ["warn", 4],
        "no-unused-vars":[
            "error",
            {
                "vars": "local",
                "args": "none"
            }
        ]
    }
````

#### indent
> 縮排空格數
````json
"indent": ["warn", 4],
````

#### comma-dangle
> JS obejct 裡最後一項要求加comma，方便改動順序

可改成 "error", "warn", "off"：
````json
"comma-dangle": "warn", 
````

也可以反過來要求不准加：
````json
"comma-dangle": ["error", "never"]
````

#### no-unused-vars
> 沒用到的變數不必要

* 例外情境：Promise的 resolve 和 reject 只會有一方用到
保留對一般 unused 變數的警告，但排除以上情境：
````json
"no-unused-vars":[
    "error",
    {
        "vars": "local",
        "args": "none"
    }
]
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

## Trouble Shooting Exp.

<a name="issue-not-found-style"></a>

### Issue: Cannot find module 'eslint-config-google' when eslint app.js

[Situation]  
When executing `eslint app.js`, get the error `Cannot find module 'eslint-config-google'`

````
OneJar@onejar99-MBP:~/nodejs-playground/tools/eslint/eslint-init$ eslint app.js
Cannot find module 'eslint-config-google'
Referenced from: /...../nodejsBox/nodejs-playground/tools/eslint/eslint-init/.eslintrc.json
Error: Cannot find module 'eslint-config-google'
Referenced from: /....../nodejsBox/nodejs-playground/tools/eslint/eslint-init/.eslintrc.json
    at ModuleResolver.resolve 
........
````

[Root Cause]  
ESlint 裝在 Global，但 style rule module 裝在 local porject 裡，因此找不到

[Solution]  
在 local project 安裝 eslint，並執行 local 的 eslint
`# npm install --save-dev eslint`  
`# ./node_modules/eslint/bin/eslint.js app.js`

[Reference]
* https://github.com/Microsoft/vscode-eslint/issues/48


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="reference"></a>

## Reference
* [Python coding style 1: 基本概念 & linter](https://ianliniblog.wordpress.com/2017/05/03/python-coding-style-1-基本概念-linter/)
* [javascript检验工具的比较](http://zhenhua-lee.github.io/tools/linter.html)
* [Day 03: ESLint - Lint工具的後起之秀](https://ithelp.ithome.com.tw/articles/10184924)
* [JSLint,JSHint,ESLint对比和Vim配置](http://moelove.info/2015/11/28/JSLint-JSHint-ESLint%E5%AF%B9%E6%AF%94%E5%92%8CVim%E9%85%8D%E7%BD%AE/)
* [eslint 和 jslint: 检查的太严格了,没太大意义.]( http://siwei.me/blog/posts/eslint-jslint)
