// import fs Module
// const { error } = require('console')
// const FS = require('fs')

// read file and access

// FS.readFile('./fsSample.txt', 'utf8' , (errorData , fileContent) =>{
//     if (errorData){
//         console.log(errorData , "the file is empty")
//     }else{
//         console.log(fileContent)
//     }
// })

// write file

// FS.writeFile('./fsSample2.txt' , 'profession : sofware developer', (errorData) =>{
//     if (errorData){
//         console.log( errorData,'could not access')
//     }else{
//         console.log('new content addedd')
//     }
// })

// FS.writeFile('./FSsample3','number : 856156984' ,(errorData) =>{
//     if (errorData) {
//         console.log("error")
//     }else{
//         console.log('add');
//     }
// })

// delete file

// FS.unlink('./FSsample3' , (errorData) =>{
//     if(errorData){
//         console.log(errorData , "ERROR")
//     }else{
//         console.log('deleted the file');
//     }
// })

//crete a folder

// FS.mkdir('./newFOLDER', (errorDatar) =>{
//     if(errorDatar){
//         console.log(errorDatar , "error");
//     }else{
//         console.log('folder creted');

//     }
// })

// const fs = require('fs')
// const fileContent =  fs.readFileSync('./write.txt' , "utf-8")
// console.log(fileContent)

// const buf = Buffer.from('hy iam danish fr0o0m manjeri');
// console.log(buf);

// const BufferOfString =  Buffer.from("hy mister dsjon")
// console.log(BufferOfString)

// this is 2 way of reading a file
// 1 - readFile() (asychronous non-blocking)
// 2 - readFileSync() (sychrous blockig)
// 3 - createReadStream()  (very large file ashychrious and non-blocking)

// 1 - readFile()

// const fs = require('fs')
// try {
//     const data = fs.readFileSync('./fsSample.txt' , 'utf-8' )
//     console.log( 'reading data \n',data)
// } catch (error) {
//     console.log('error reading file' , error)
// }

//2 - readFileSync()

// const fs = require('fs')
// fs.readFile('./write.txt' , 'utf-8' , (err , data) =>{
//     if(err){
//         console.log(err)
//         return
//     }else{
//         console.log(data)
//     }
// })

// 3 - createReadStream()

// const fs = require('fs')
// const stream =  fs.createReadStream('./write.txt' , 'utf-8')
// console.log("first")
// stream.on('data' , chunk =>{
//     console.log(chunk)
// })
// console.log("seconnd");

/////////////////////////////////////////////////////////////////////////////////

// write file

// write a file  synchrnous version

// const fs = require('fs')
// fs.writeFileSync('./writeFile.txt' , "hello world")

// write a file  asynchrnous version
// const fs = require('fs')
// fs.writeFile("./write2" , "danish"  , (error) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log("file written")
//     }
// })

////////////////////////////////////////////////////////////////////////////////////////

// append data (adding data in a file)

// append the data asychronous  = appenFile()
// const fs = require('fs')
// fs.appendFile("./write3" , "Danish" ,  {flag : 0},() =>{

// })

// fs.appendFileSync('./write3 ' , "i'm drom manjeri")

///////////////////////////////////////////////////////////////////////////////

// unlink or delete a file

// const fs = require("fs");
// fs.unlink("./write3", () => {});

// try {
//   fs.unlinkSync("./write.txt");
//   console.log("file deleted");
// } catch (errorData) {
//   console.log("error", error);
// }



// const FS = require('fs')
// const readData = FS.createReadStream(__dirname + '/large.txt',{encoding : 'utf-8'})
// const writeData = FS.createWriteStream(__dirname + '/dataBig2.txt' , {encoding : 'utf-8'})

// readData.on('data' , (chunks) =>{
//   // console.log("this is the data --------------------------\n" , chunks)
//   writeData.write(chunks, (err) =>{
//     if(err){
//       console.log("errooooor" , err)
//     }
//     console.log('data write successfully')
//   })
// })

// readData.pipe(writeData)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                           // create a file 


const fs = require('fs')
fs.writeFileSync('hello.txt' , "hello Danish");
