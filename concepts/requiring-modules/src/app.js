console.log("Starting app.js");

// way1: requiring built-in modules
const fs = require("fs");
const os = require("os");
// way2: requiring self-defined modules
const noteUtil = require("./note-util.js");
// way3: requiring 3rd party modules
const _ = require("lodash"); // search built-in modules first, then search depended modules


console.log('[EX1] Examples for OS module: getting user info');
var userinfo = os.userInfo();
console.log("userinfo=", userinfo);

console.log('[EX2] Examples for FS(File System) module: appending text to file');
// way 1
fs.appendFile('greeting.txt', `Hello ${userinfo.username}! You are ${noteUtil.age} years old.\n`, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
// way 2
//fs.appendFileSync('greeting.txt', `Hello ${userinfo.username}`);

console.log('[EX3] Examples for noteUtil module');
console.log(noteUtil.getEmptyNote());
console.log("Result of 5 + 6: " + noteUtil.addNumbers(5, 6));

console.log('[EX4] Examples for lodash module');
var myAry = ["Apple", 1, 3, 5, "Apple", "Banana", 3, "Cake", 3];
console.log("Before filtering: ", myAry);
console.log("After filtering: ", _.uniq(myAry));
