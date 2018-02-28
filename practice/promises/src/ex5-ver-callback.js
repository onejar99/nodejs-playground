function add(n1, n2, cbk){
    setTimeout(()=>{
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            cbk(false, n1 + n2);
        }else{
            cbk(true, 'Arguments must be numbers.');
        }
    }, 1000);
};

add(5, 7, (err, msg)=>{
    if(err) console.log(`Error: ${msg}`);
    else console.log(`Ans: ${msg}`);
});

console.log('app end');