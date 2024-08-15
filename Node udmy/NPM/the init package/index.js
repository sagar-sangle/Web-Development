  const fig = require('figlet')

  fig("Hello Swagger",function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log("Spring BOOT");
    
  })
