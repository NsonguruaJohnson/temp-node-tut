// CommonJs, every file is a module (By default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi  = require('./5-utils');
const data = require('./6-alternative-method');
require('./7-mind-grenade');

// console.log(data);
// console.log(names);

sayHi('Jack');
sayHi(names.Peter);
sayHi(names.John); 