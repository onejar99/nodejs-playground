const titleOption = {
    describe: 'Title of todo item',
    alias: ['t', 'ti'],
    demand: true
};

const contentOption = {
    describe: 'Content of todo item',
    default: 'Go to ...',
    alias: 'c',
    demand: true
};

const authorOption = {
    describe: 'Author of todo item',
    default: 'Me',
    alias: 'a',
    demand: false
};

const seqOption = {
    describe: 'Sequence of todo item',
    demand: true
};

module.exports = {
    titleOption,
    contentOption,
    authorOption,
    seqOption
};