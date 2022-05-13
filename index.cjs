// require classes
const { color, gray, white, red, green, yellow, reset } = require('./resources/colors.cjs');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');

// variables
const file = moment().format('YYYY-MM-DD');
const time = moment().format('HH:mm:ss');
let dir = path.join(__dirname, '../../logs');

let fileExt = '.log';

// functions
function log(msg, o = { cwd: '', ext: ''}) {
    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.log(`${white}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [LOG] ${msg}`);
}

function info(msg, o = { cwd: '', ext: ''}) {
    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.info(`${white}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [INFO] ${msg}`);
}

function debug(msg, o = { cwd: '', ext: ''}) {
    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.debug(`${white}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [DEBUG] ${msg}`);
}

function success(msg, o = { cwd: '', ext: ''}) {
    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.log(`${green}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [SUCCESS] ${msg}`);
}

function warn(msg, o = { cwd: '', ext: ''}) {
    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.warn(`${yellow}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [WARN] ${msg}`);
}

function error(msg, o = { cwd: '', ext: ''}) {
    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.error(`${red}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [ERR] ${msg}`);
}

function custom(msg, o = { cwd: '', ext: '', prefix: '', color: '' }) {
    // variables
    let customPrefix = 'CUSTOM';
    let customColor = gray;

    // check if values need to be replaced
    if(o.cwd) dir = o.cwd;
    if(o.ext) fileExt = o.ext;
    if(o.prefix) customPrefix = o.prefix;
    if(o.color === 'gray') customColor = color.gray;
    if(o.color === 'red') customColor = color.red;
    if(o.color === 'green') customColor = color.green;
    if(o.color === 'yellow') customColor = color.yellow;
    if(o.color === 'blue') customColor = color.blue;
    if(o.color === 'pink') customColor = color.pink;
    if(o.color === 'cyan') customColor = color.cyan;
    if(o.color === 'white') customColor = color.white;

    // create directory if not exists
    fs.existsSync(dir) || fs.mkdirSync(dir);

    console.log(`${customColor}${msg}${reset}`);

    // log to file
    fs.appendFileSync(`${dir}/${file}${fileExt}`, `\n[${time}] [${customPrefix}] ${msg}`);
}

module.exports = {
    log,
    info,
    debug,
    success,
    warn,
    error,
    custom
}
