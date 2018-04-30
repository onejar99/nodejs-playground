# Todo App (CLI)

A Todo App with Command Line Interface.

## Key Points

1. Supporting list/read/add/remove actions.
1. Using module `yargs` to parse command arguments.
1. Using a file with JSON format to persist data.

## Run
````console
$ cd src

$ node app.js add --title 'Go to the movies' --content='See the movie "Train To Busan" with friends.' --author=OneJar99
$ node app.js add -t 'Study Node.js' -c='Study node.js and practice' -a=OneJar99
$ node app.js add --ti 'Have a dinner' -c='Sushi or Pizza'
$ node app.js add --ti 'Buy something'

$ node app.js list
$ node app.js read --seq=3
$ node app.js remove --seq=3
````

## Other Reference
NA
