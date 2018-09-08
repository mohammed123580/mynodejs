var fs =require('fs');

var me={name:"mohammed",age:"25"};


fs.writeFile('data.txt',me,'UTF-8',(e)=>{


    if (e) return e;
    console.log('the file has been saved');
    
    

});