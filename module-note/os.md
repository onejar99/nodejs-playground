# Module: OS

> * Intro: Operating system-related utility methods.
> * Type: Built-in
> * Document: [Node.js API Doc - OS](https://nodejs.org/dist/latest-v8.x/docs/api/os.html)
> * Requiring syntax: `const os = require("os");`

## TOC
* [os.userInfo()](#userinfo): 取得使用者名稱與 Home 路徑等資訊

---

<a name="userinfo"></a>
## os.userInfo([options])

取得**使用者名稱**與 **Home 路徑**等資訊。

Example:
````js
var userinfo = os.userInfo();
console.log("userinfo=", userinfo);
````

Result:
````
userinfo= { uid: 501,
  gid: 20,
  username: 'onejar99',
  homedir: '/Users/onejar99',
  shell: '/bin/bash' }
````
