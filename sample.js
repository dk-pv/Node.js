const FS = require('fs')
FS.unlink('./fsSample.txt' , 'utf-8' , (errorData , flContent) =>{
    if(errorData){
        console.log(errorData , "it is a error")
    }else{
        console.log('file deletes')
    }
})

FS.writeFile('./sample.txt' , 'hy this i write a file')
