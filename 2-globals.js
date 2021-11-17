// GLOBALS - NO WINDOw!!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program being executed

console.log(__dirname);
console.log(__filename);

//run every sec
setInterval(()=>{
     console.log('Hello World!!!!');
},1000)