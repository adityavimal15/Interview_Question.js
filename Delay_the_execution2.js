function delay(ms){
    return new Promise(resolve =>
        setTimeout(resolve,ms)
    );
}

async function executeWithdelay(){
    console.log("Execution starts...");
    await delay(2000);
    console.log("This message is displayed after 2 seconds");
}

console.log("Execution continue...");

executeWithdelay();