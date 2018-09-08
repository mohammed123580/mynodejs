var rl=require('readline');
var r=rl.createInterface(process.stdin,process.stdout);

r.question('hi',function(name){

r.setPrompt('h o r u');
r.prompt();
r.on('line',(age)=>{


console.log(`hello ${name} your ${age}`);
r.close();
})
});
