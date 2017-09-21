const path = require('path');

const dirname = __dirname;


console.log(dirname, path.isAbsolute(dirname), path.posix.isAbsolute(dirname));


console.log(dirname, path.join(dirname, '/public/test'), path.posix.join(dirname, '/public/test'));


console.log('---',path.join(__dirname, '../node_modules')); // true
console.log('---',path.posix.join(__dirname, '../node_modules')); // false

console.log(path.sep, path.posix.sep, '..\..\config\manifest.json'.split(path.sep).join(path.posix.sep)); //error


console.log(path.posix.normalize('..\..\config\manifest.json'));
console.log(path.normalize('..\..\config\manifest.json'));