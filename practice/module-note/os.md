# Module: OS

> * Type: Built-in
> * Document: [Node.js API Doc - OS](https://nodejs.org/dist/latest-v8.x/docs/api/os.html)
> * requiring syntax: `const _ = require("lodash");`

## TOC
* [os.userInfo([options])](#userinfo)


<a name="userinfo"></a>
## os.userInfo([options])

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
