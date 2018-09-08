var ax = require('axios');
ax.get('https://api.github.com/users/edwin').then((res)=>{
    
console.log(res.data.followers);


}).catch((e)=>{console.log(e);});