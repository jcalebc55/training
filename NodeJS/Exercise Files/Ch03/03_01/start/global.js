var sample="This is node js on shell";
console.log("Hello there");
sample=sample.slice(7);

console.log(`sample string is ${sample}`);

console.log(__dirname);
console.log(__filename);

var path= require("path");

console.log(`Path name of only the file is ${path.basename(__filename)}`)
