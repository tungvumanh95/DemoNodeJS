function showRunning(){  
    function exceptionHandler(err){  
        console.log('Caught exception: ' + err);  
        process.removeListener('uncaughtException', exceptionHandler);  
    }  
    setTimeout(showRunning, 1000);  

    process.on('uncaughtException', exceptionHandler);  

    console.log("Still Running");  
    throw new Error("Yikes");
    console.log("Afrer Running");  

    process.removeListener('uncaughtException', exceptionHandler);  
}  

showRunning();