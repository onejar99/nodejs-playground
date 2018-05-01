# Testings

* Mocha: Testing Framework
* Expect: Assertion Package

> **Except Version Issue**
> 
> [舊維護者] @1.20.2
> https://github.com/mjackson/expect
> 
> [新維護者] @22.x.x
> https://facebook.github.io/jest/docs/en/expect.html
> 
> package 被捐出去給別人，換了主人，使用新版 package 加舊 code 會有向下相容的問題 (有些函數重新命名，甚至有些取消，必須用其他寫法達到同樣效果)。


<a name="toc"></a>

## TOC
* Notes
    * [Config for package.json](#config-for-package-json)
    * [Notice for testing async with mocha](#testing-async-with-mocha)
* Usage Examples
    * [Unit Test with Mocha and Except](#unit-test-mocha-expect)

## Notes

<a name="config-for-package-json"></a>

### Config for package.json

package.json:

````json
  "scripts": {
    "test": "mocha **/*.test.js",
    "test-watch": "nodemon --exec 'npm test'"
  },
````

#### 1. `npm test`
  * modifying: `"mocha **/*.test.js"`: `**` -> any folder
  * running: `npm test`

#### 2. Self-defined npm command
  * adding: `"test-watch": "...."`
  * running: `npm run test-watch`

#### 3. Cross OS issue
  * for workable both on Windows and Unix-like
  * e.g., `"test-watch": "nodemon --exec 'npm test'"` -> `"nodemon --exec \"npm test\""`

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

<a name="testing-async-with-mocha"></a>

### Notice for testing async with mocha

* The timeout second cannot over 2s, or it will be considered a failed case.


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----

## Usage Examples

<a name="unit-test-mocha-expect"></a>

### Unit Test with Mocha and Except

#### Key Points

1. Define a Test Case

````js
it('Test case description', () => {
  // test code....
});
````

2. Assert by self-programming (throw Error)

````js
it('should add two numbers', () => {
    var rlt = utils.add(11, 22);
    if (rlt !== 33) {
        throw new Error(`Value not correct. Expected 33, but got ${rlt}`);
    }
});
````

3. Assert by **expect** package

````js
it('should square a number', () => {
    var rlt = utils.add(11, 22);
    expect(rlt).toBe(33).toBeA('number');
});
````

4. Test async

> To add a parameter `done` and action `done()` when testing done, or unexpected testing result.

````js
it('test async', (done)=>{
    utils.addAsync(3, 7, (rlt)=>{
        expect(rlt).toBe(10);
        done();
    });
});
````

5. Grouping Test Cases

````js
describe('Group 1', ()=>{
    describe('Group 1-1', ()=>{
        it('Test case 1', () => {
            //....
        });
    });

    it('Test case 2', () => {
        //....
    });
});
````


#### Run

Source: [mocha-n-except](./mocha-n-except)

`$ npm test`  
`$ npm test-watch`

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>

----
