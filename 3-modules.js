// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data =  require("./6-alternative-flavour");

require("./7-mind-grenade");

console.log("data ",data);
console.log(names);

sayHi(names.pratik);
sayHi(names.pari);
sayHi(names.ram);