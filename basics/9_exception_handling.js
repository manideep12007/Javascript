// exceptions - 
// things will cause to stop execution in runtime

try{
    let result = 12/0;
    console.log(result);
}catch(err){
    console.error(err.message);
}

try{
    console.log('Trying...');
    throw new Error("Oops!");
} catch (error) {
    console.error("Caught:",error.message);
} finally {
    console.log("This always runs");
}

try{
    let num; // suppose user enter nothing
    if ((!num) || (num<=0)){
        throw new Error('Enter valid number above postive number');
    }
    console.log(num);
} catch (error){
    console.log(`Error: ${error.message}`);
}