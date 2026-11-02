let pin = 1234;
let balance = 10000;

if (pin == 1234){
    console.log("Corect PIN")
    if(balance > 0){
        console.log("Eligible to Withdraw")
    }
    else{
        console.log("NOT Eligible to Withdraw")
    }
}
else{
    console.log("Incorrect PIN")
}