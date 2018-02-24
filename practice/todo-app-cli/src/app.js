console.log('Starting app.js');

const yargs = require('yargs');
const todoUtil = require('./todo-util.js');
const cmdOpt = require('./cmd-opt-def.js');

var argv = yargs
    .command('list', 'List all todo items')
    .command('add', 'Add a new todo',{
        title: cmdOpt.titleOption,
        content: cmdOpt.contentOption,
        author: cmdOpt.authorOption
    })
    .command('read', 'Get an existing todo',{
        seq: cmdOpt.seqOption
    })
    .command('remove', 'Remove an existing todo',{
        seq: cmdOpt.seqOption
    })
    
    .help().argv;

var command = argv._[0];
console.log('[INF] Command=', command);

switch (command) {
    case 'add':
        todoUtil.addTodo(argv.title, argv.content, argv.author);
        break;
    case 'remove':
        todoUtil.removeTodo(argv.seq);
        break;
    case 'list':
        todoUtil.listTodo();
        break;
    case 'read':
        todoUtil.readTodo(argv.seq);
        break;
    default:
        console.log('Command not recognized');
        break;
}
