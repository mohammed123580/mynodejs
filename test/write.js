var fs =require('fs');

var me={name:"mohammed",age:"25"};


// fs.writeFile('data.txt',me.name,'UTF-8',(e)=>{


//     if (e) return e;
//     console.log('the file has been saved');
    
    

// });
fs.appendFile('data.txt',me.age,'UTF-8',(e)=>{


    if (e) return e;
    console.log('the file has been changed');
    
    

});
