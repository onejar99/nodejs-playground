const fs = require('fs');

const DB_FILE_NAME = "todo-db.json";

var fetchDB = () => {
    try{
        var jsonStr = fs.readFileSync(DB_FILE_NAME);
        return JSON.parse(jsonStr);
    } catch(err){
        return [];
    }
}

var saveDB = (todoAry) => {
    var jsonStr = JSON.stringify(todoAry);
    fs.writeFileSync(DB_FILE_NAME, jsonStr);
}

var printTodoList = (todoAry) => {
    var text = '';
    var cnt = 1;
    todoAry.forEach((rec)=>{
        text += `#${cnt++} \tTitle: ${rec.title} \t(Author:${rec.author})\n`;
    });
    console.log('--------------------------------------');
    console.log(text);
    console.log(`Total: ${todoAry.length} todo items`);
    console.log('--------------------------------------');
}

var printSingleTodo = (todoObj) => {
    console.log('--------------------------------------');
    console.log(`[Title] \t ${todoObj.title}`);
    console.log(`[Author]\t ${todoObj.author}`);
    console.log(`[Content]\t ${todoObj.content}`);
    console.log('--------------------------------------');
}

var isDuplicated = (todoAry, title) => {
    var duplicatedAry = todoAry.filter((rec) => rec.title === title);
    return duplicatedAry.length > 0;
}

function validateSeq(seq, todoAry) {
    if (isNaN(seq) || seq < 1 || seq > todoAry.length) {
        console.log(`Failed!! The seq(${seq}) is invalid!`);
        return false;
    }
    return true;
}

var listTodo = () => {
    var todoAry = fetchDB();
    printTodoList(todoAry);
};

var addTodo = (title, content, author) => {
    var todoAry = fetchDB();
    if(isDuplicated(todoAry, title)) {
        console.log(`Failed!! The title is duplicated! (${title}) `);
        return;
    }

    todoAry.push({title, content, author});
    saveDB(todoAry);
    console.log(`Adding OK => Title=[${title}] Author=[${author}] Content=[${content}]`);
};

var readTodo = (seq) => {
    var todoAry = fetchDB();
    if(!validateSeq(seq, todoAry)) return;

    var todoObj = todoAry[seq - 1];
    printSingleTodo(todoObj);
};

var removeTodo = (seq) => {
    var todoAry = fetchDB();
    if(!validateSeq(seq, todoAry)) return;

    var deletedObj = todoAry.splice(seq - 1, 1)[0];
    saveDB(todoAry);
    console.log(`Deleting OK => Title=[${deletedObj.title}] Author=[${deletedObj.author}] Content=[${deletedObj.content}]`);
};

module.exports = {
    listTodo, readTodo, addTodo, removeTodo
};
