
function loadscript(src){
    return new Promise((resolve ,reject)=>{
        let script = document.createElement("script");
        script.src=src;
        document.head.append(script);

        script.onload=resolve;
        script.onerror=reject;
        
    })
}

loadscript('T:/Web-Development/Code-with-harry/JavaScript/83 Pracise set/one.js').then(()=>{
    alert("script is loaded ");
    

}).catch(()=>{
    alert("Script not loaded ");
});

  