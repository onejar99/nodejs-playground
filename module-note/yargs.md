# Module: yargs

> * Intro: 支援 command line 解析的工具函數，適合用於撰寫 CLI Apps
> * Type: 3rd-party
> * Document: [npm - yargs](https://www.npmjs.com/package/yargs)
> * Requiring syntax: `const yargs = require('yargs');`


<a name="toc"></a>

## TOC
* [Note: yargs.argv vs. process.argv](#yargs-vs-process-argv)
* [Example: Basic usage with command() & help()](#basic-usage-command-help)
* [Example: Basic usage with options() & alias()](#basic-usage-options-alias)
* [Note: Locale of Help](#locale-of-help)

---

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="yargs-vs-process-argv"></a>

## Note: yargs.argv vs. process.argv

* 內建 process.argv 只是單純用空格做切割
* yargs.argv 會依據 command line 慣例輸入格式自動做解析，區隔出：
    * commands (`yargs.argv._[n]`)
    * arguments (`yargs.argv.xxx`)


Example:

`$ node app.js add --title 'Good Day!' encode --body='Today is big day. Good Luck.' --author=John sendMail`
````js
console.log('process.argv=', process.argv);
console.log('yargs.argv=', yargs.argv);
````
Result:
````
process.argv= [ '/usr/local/opt/nvm/versions/node/v8.2.1/bin/node',
  '/Users/onejar99/Documents/test-node-js/app.js',
  'add',
  '--title',
  'Good Day!',
  'encode',
  '--body=Today is big day. Good Luck.',
  '--author=John',
  'sendMail' ]

yargs.argv= { _: [ 'add', 'encode', 'sendMail' ],
  title: 'Good Day!',
  body: 'Today is big day. Good Luck.',
  author: 'John',
  '$0': 'app.js' }
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="basic-usage-command-help"></a>

## Example: Basic usage with command() & help()

用 `command()` & `help()` 建立基本的 Command 檢核和 Help 支援

> 1. 注意！如果輸入的 command 不在 `command()` 的範圍，仍會過關
> 2. 如果輸入的 command 在 `command()` 的範圍內，才會有進一步檢核參數的效果
> 3. `help()` 非必要，若有加則會支援 `--help`

### Example: 
`game-duel.js`
````js
const yargs = require('yargs');
var argv = yargs
    .command('attack', 'Attack enemies',{
        method: {
            describe: 'Attack method',
            alias: ['m', 'way'],
            default: 'sword',
            demand: true,
        },
        target: {
            describe: 'Attack target',
            alias: 't',
            demand: true,
        },
    })
    .command('item', 'Use items',{
        name: {
            describe: 'Item name',
            default: 'herb',
            demand: false
        }
    })
    .command('run', 'Run away from the duel')
    .help().argv;

console.log('[INF] Command=', argv._[0]);
````

> **設定解說：**
> * `describe`:  help 裡的參數描述
> * `alias`: 參數別名，可指定**單一字串**或**內含多個字串的陣列**
> * `default`: 若使用者沒輸入該參數時，該參數的預設值(PS:當`default`有設定時，而`demand`設`true`時，即使使用者沒有輸入該參數也會通過，因為已有預設值)
> * `demand`: 是否為必要參數 (boolean) (PS: `demand`和`demandOption`是不同的設定)

### Result:

#### 不在 command() 範圍內的仍會過關

`$ node game-duel.js`
````
[INF] Command= undefined
yargs.argv= { _: [], version: false, help: false, '$0': 'game-duel.js' }
````
`$ node game-duel.js abc`
````
[INF] Command= abc
````

#### 自動支援 `--help` 和 `--version`

`$ node game-duel.js --help`
````
game-duel.js [command]

Commands:
  game-duel.js attack  Attack enemies
  game-duel.js item    Use items
  game-duel.js run     Run away from the duel

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
````
`$ node game-duel.js --version`
````
1.0.0
````

#### 參數自動檢核

`$ node game-duel.js attack`
````
game-duel.js attack

Attack enemies

Options:
  --version            Show version number                             [boolean]
  --help               Show help                                       [boolean]
  --method, -m, --way  Attack method               [required] [default: "sword"]
  --target, -t         Attack target                                  [required]

Missing required argument: target
````
`$ node game-duel.js attack -m aaa -t enemy1`
````
[INF] Command= attack
````

<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="basic-usage-options-alias"></a>

## Example: Basic usage with options() & alias()

### Example: 
`test-yargs.js`:
````js
const yargs = require('yargs');

const argv = yargs
    .options({
        address: {
            describe: 'Address',
            alias: ['a', 'addr'],
            demand: true,
            string: true,
        }
    })
    .help()
    .alias('help', ['h', 's', 'sos'])
    .alias('address', 'ad')
    .argv;

console.log('argv=', argv);
````

### Result:

`$ node test-yargs.js`
````
Options:
  --version                    Show version number                     [boolean]
  --address, -a, --addr, --ad  Address                       [string] [required]
  --help, -h, -s, --sos        Show help                               [boolean]

Missing required argument: address
````

`$ node test-yargs.js -a=taiwan`
````
argv= { _: [],
  version: false,
  help: false,
  h: false,
  s: false,
  sos: false,
  a: 'taiwan',
  address: 'taiwan',
  addr: 'taiwan',
  ad: 'taiwan',
  '$0': 'test-yargs.js' }
````


<div style="text-align:right; font-size: smaller;"><a href="#toc">Back to TOC</a></div>
<a name="locale-of-help"></a> 

## Note: Locale of Help

Help 會自動根據環境參數顯示對應的語系(但似乎不支援繁中)

修改語系：

`$ printenv LANG`

zh_TW.UTF-8

`$ export LANG="en_US.UTF-8"`
