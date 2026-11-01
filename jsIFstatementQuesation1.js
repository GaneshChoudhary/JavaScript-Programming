let balance = 50000
let withdraw = 10000

if(balance > 10000){
    console.log("Customer is Eligible to Withdraw ( Sufficient Minimum Balance )")
    console.log("Amount withdrawn:" + withdraw)
    rem_balance = balance - withdraw
    console.log("Remaining Balance: " + rem_balance)
}
else{
    console.log("Customer is NOT Eligible to Withdraw ( Insufficient Minimum Balance )")
}