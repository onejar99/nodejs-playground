var addPromise = (n1, n2) => {
    return new Promise((resolve, reject)=>{
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            resolve(n1 + n2);
        }else{
            reject('Arguments must be numbers.');
        }
    });
};

var pms1 = addPromise(3, 'a'); // status = pending

pms1.then(
    (rlt) => {
        console.log(`Ans 1: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error 1: ${errMsg}`);
    }
);

var pms2 = pms1.then(
    (rlt) => {
        console.log(`Ans 1-II: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error 1-II: ${errMsg}`);
    }
);

var pms3 = pms2.then(
    (rlt) => {
        console.log(`Ans 2: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error 2: ${errMsg}`);
    }
);

var pms4 = pms3.then(
    (rlt) => {
        console.log(`Ans 3: ${rlt}`);
        throw 'Oh no~';
    },
    (errMsg) => {
        console.log(`Error 3: ${errMsg}`);
    }
);

var pms5 = pms4.then(
    (rlt) => {
        console.log(`Ans 4: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error 4: ${errMsg}`);
        return 'Yes!';
    }
);

var pms6 = pms5.then(
    (rlt) => {
        console.log(`Ans 5: ${rlt}`);
        return addPromise(3, 'a');
    },
    (errMsg) => {
        console.log(`Error 5: ${errMsg}`);
    }
);

pms6.then(
    (rlt) => {
        console.log(`Ans 6: ${rlt}`);
    },
    (errMsg) => {
        console.log(`Error 6: ${errMsg}`);
    }
);