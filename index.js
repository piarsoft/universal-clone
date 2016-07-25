#! /usr/bin/env node

var copyFile = require('./copy-file');

if(process.argv.length < 4) {
    console.error('Universal Clone need two params.')
    process.exit(1);
}

copyFile(process.argv[2], process.argv[3]);