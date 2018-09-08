var fs=require('fs'); 

if (!fs.exists('newdir')){

fs.mkdir('newdir',(e)=>{

if (e)return e;

fs.writeFile('newdir/h.txt','hello in my new folder',(e)=>{console.log('new dir success')})

});


}