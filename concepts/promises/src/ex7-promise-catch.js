var addPromise = (n1, n2) => {
    return new Promise((resolve, reject)=>{
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            resolve(n1 + n2);
        }else{
            reject('Arguments must be numbers.', 'Error');
        }
    });
};

// Test Case 1
addPromise(3, 8).then(
    (rlt) => {
        console.log(`[Case 1] Ans 1: ${rlt}`);
        return addPromise(rlt, 'a');
    }
).then(
    (rlt) => {
        console.log(`[Case 1] Ans 2: ${rlt}`);
    }
).catch((errMsg) => {
    console.log(`[Case 1] Caught! ${errMsg} `);
});

// Test Case 2
addPromise(3, 8).then(
    (rlt) => {
        console.log(`[Case 2] Ans 1: ${rlt}`);
        return addPromise(rlt, 'a');
    }
).then(
    (rlt) => {
        console.log(`[Case 2] Ans 2: ${rlt}`);
    },
    (rlt) => {
        console.log(`[Case 2] Error 2: ${rlt}`);
    }
).catch((errMsg) => {
    console.log(`[Case 2] Caught! ${errMsg} `);
});

// Test Case 3
addPromise(3, 8).then(
    (rlt) => {
        console.log(`[Case 3] Ans 1: ${rlt}`);
        console.log(NotDefinedVar);
        return addPromise(rlt, 'a');
    }
).then(
    (rlt) => {
        console.log(`[Case 3] Ans 2: ${rlt}`);
    }
).catch((errMsg) => {
    console.log(`[Case 3] Caught! ${errMsg} `);
});

// Test Case 4
addPromise(3, 8).then(
    (rlt) => {
        console.log(`[Case 4] Ans 1: ${rlt}`);
        console.log(NotDefinedVar);
        return addPromise(rlt, 'a');
    }
).then(
    (rlt) => {
        console.log(`[Case 4] Ans 2: ${rlt}`);
    },
    (rlt) => {
        console.log(`[Case 4] Error 2: ${rlt}`);
    }
).catch((errMsg) => {
    console.log(`[Case 4] Caught! ${errMsg} `);
});

// Test Case 5
addPromise(3, 8).then(
    (rlt) => {
        console.log(`[Case 5] Ans 1: ${rlt}`);
        return addPromise(rlt, 9);
    }
).then(
    (rlt) => {
        console.log(`[Case 5] Ans 2: ${rlt}`);
        console.log(NotDefinedVar);
    },
    (rlt) => {
        console.log(`[Case 5] Error 2: ${rlt}`);
    }
).catch((errMsg) => {
    console.log(`[Case 5] Caught! ${errMsg} `);
});

// Test Case 6
addPromise(3, 8).then(
    (rlt) => {
        console.log(`[Case 6] Ans 1: ${rlt}`);
        console.log(NotDefinedVar);
    },
    (rlt) => {
        console.log(`[Case 6] Error 1: ${rlt}`);
    }
);