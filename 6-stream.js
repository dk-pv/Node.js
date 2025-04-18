






const FS = require('fs')
const readableStream = FS.createReadStream(__dirname + '/fsSample.txt',{encoding : 'utf-8'})
readableStream.on('data' , (chunksData) =>{
    console.log( chunksData)
})




const FS = require('fs')
const writableData = FS.createWriteStream(__dirname + '/write.txt' , {encoding : 'utf-8'})
writableData.write("hy iam danish")
writableData.end()
console.log('data addedd')