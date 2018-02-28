function addVerPromise(n1, n2){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof n1 === 'number' && typeof n2 === 'number'){
                resolve(n1 + n2);
            }else{
                reject('Arguments must be numbers.');
            }
        }, 1000);
    });
};

addVerPromise(5, 7).then(
    (msg) => {
        console.log(`Ans: ${msg}`);
    },
    (msg) => {
        console.log(`Error: ${msg}`);
    }
);

console.log('app end');