console.log("Starting note-util.js");

//console.log(module);
module.exports.age = 18;

module.exports.getEmptyNote = function () {
    return "This a an empty note. Please input your note context....";
};

module.exports.addNumbers = (n1, n2) => {
    return n1 + n2;
};
