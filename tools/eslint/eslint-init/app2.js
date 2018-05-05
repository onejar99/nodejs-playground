const x = 'dad';

document.write(x);

const obj = {
    name: 'John',
    age: 18
};
console.log(obj);

const work = new Promise((resolve, reject) => {
    resolve('Some Data.....');
});

work.then((data) => {
    console.log(data);
});

