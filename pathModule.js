const PATH =  require('path')
const fileName  = 'fsSample.txt'


//fullPath
console.log("full path : ", PATH.join(__dirname , fileName))

// directory  path
console.log("only directry path : ", PATH.dirname('HOME / folder/sample.js'))

// only  extention(.js , .css , .html .....)
console.log("only extension : " , PATH.extname('home/folder/sample.js'))
console.log("only extension : " , PATH.extname('home/folder/sample.jsx'))
console.log("only extension : " , PATH.extname('home/folder/sample.html'))