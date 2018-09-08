
var e=require('events');
var em=new e.EventEmitter();

em.on("go",function(){

    console.log("im going1");
    em.emit("bay")
});

em.addListener("go",function(){

    console.log("im going2");
});
em.addListener("bay",function(){

    console.log("bay bay");
});

em.emit("go");