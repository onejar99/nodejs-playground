const expect = require('expect');
const utils = require('./utils');

// Example: assert by self
it('should add two numbers', () => {
    var rlt = utils.add(11, 22);
    if (rlt !== 33) {
        throw new Error(`Value not correct. Expected 33, but got ${rlt}`);
    }
});

// Example: assert by except package
it('should square a number', () => {
    var rlt = utils.square(12);
    expect(rlt).toBe(144).toBeA('number');
    // if (rlt !== 144) {
    //     throw new Error(`Value not correct. Expected 144, but got ${rlt}`);
    // }
});
it('should get an user object with complete name',()=>{
    var john = utils.setUserName({}, 'John Smith');
    expect(john).toInclude({firstName: 'John', lastName: 'Smith'});
});

// Example: except demo
it('Expect Library Demo', ()=>{
    expect(12).toNotBe(11);

    //expect({name: 'John'}).toBe({name: 'John'}); //Failed
    expect({name: 'John'}).toEqual({name: 'John'}); //Passed

    // -- include/exclude
    expect([2,3,4]).toInclude(3);
    expect([2,3,4]).toExclude(5);
    expect({name: 'John', age: 18}).toInclude({age:18});
    expect({name: 'John', age: 18}).toExclude({age:55});
});

// Example: Grouping by describe()
describe('Test Cases for Math', ()=>{
    describe('Add', ()=>{
        it('should add 5 and 10', () => {
            var rlt = utils.add(5, 10);
            expect(rlt).toBe(15).toBeA('number');
        });
        it('should add 1024 and 100', () => {
            var rlt = utils.add(1024, 100);
            expect(rlt).toBe(1124).toBeA('number');
        });
    });

    it('should square 15', () => {
        var rlt = utils.square(15);
        expect(rlt).toBe(225).toBeA('number');
    });
});


// Example: test async with mocha
// Note: If putting this test case behind "test async 1", this case will fail and have no idea why
it('test async 2: work example', (done)=>{
    utils.addAsync(3, 7, (rlt)=>{
        expect(rlt).toBe(10);
        done();
    });
});

it('test async 1: not work example', ()=>{
    utils.addAsync(3, 7, (rlt)=>{
        expect(rlt).toBe(12);
    });
});

// it('test async 2: work example', (done)=>{
//     utils.addAsync(3, 7, (rlt)=>{
//         expect(rlt).toBe(10);
//         done();
//     });
// });
