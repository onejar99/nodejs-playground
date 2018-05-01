module.exports.add = (n1, n2) => n1 + n2;

module.exports.addAsync = (n1, n2, cbk) =>{
    setTimeout(()=>{
        cbk(n1 + n2);
    }, 1000);
};

module.exports.square = (n) => n * n;

module.exports.setUserName = (userObj, fullName) => {
    var names = fullName.split(' ');
    userObj.firstName = names[0];
    userObj.lastName = names[1];
    return userObj;
};