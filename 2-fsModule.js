// import fs Module
const { error } = require('console')
const FS = require('fs')


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