console.log(process.argv)

function grab(flag){

var index = process.argv.indexOf(flag)
return (index==-1)? null : process.argv[index+1]

}


var test=grab("test5");
console.log(test)
