# log2dir

This NPM Package allows you to have colored console output and log everything to a file

## Installation

Install log2dir via npm

```bash
  npm i log2dir
```

## How to use log2dir

• CommonJS
```js
  const { log, info, debug, success, warn, error, custom } = require('log2dir');
  const path = require('path');
```


• ES6 Module
```js
  import { log, info, debug, success, warn, error, custom } from 'log2dir';
  import { fileURLToPath } from 'url';
  import path from 'path';

  // this is optional
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
```

• General Usage
```js
  // this is optional
  const dir = path.join(__dirname, './logHere');

  log('Only message');  // -> [12:00:00] [LOG] Only message (@ ./logs/2022-05-13.log)
  log('cwd & ext', { cwd: dir, ext: '.txt' }); // -> [12:00:00] [LOG] cwd & ext (@ ./logHere/2022-05-13.txt)

  log('log'); // white console output || [LOG]
  info('info'); // white console output || [INFO]
  debug('debug'); // white console output || [DEBUG]
  success('success'); // green console output || [SUCCESS]
  warn('warn'); // yellow console output || [WARN]
  error('error'); // red console output || [ERR]
  
  custom('custom' { prefix: 'TEST', color: 'green' }); // green console output || [TEST]
```

## Parameters
```bash
  log(msg, { options });
```
  msg -> string,

  options:
    cwd -> string,
    ext -> string,
    prefix -> string,
    color -> string

info: "cwd" & "ext" work for every function while "prefix" & "color" only work for the "custom" function