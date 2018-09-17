
// code module dont require ./ in require
var osModule = require('os');
var cpus = osModule.cpus();
console.log(`Total ${cpus.length} found`);
console.log(cpus[0]);

var path = require('path');
var fname = path.join(__dirname, '..', '..', 'a', 'b', 'e.txt');
console.log('filename: ', fname);
console.log('End');