//find() is one of the higher order function in javascript
//It will return the first element that satisfies the condition

let transaction = [100, 200, 3000, 4000, -898, 568, -345];

//Now in the above array, we need to find out the first withdrawl, so it can be done
//by the find() mwthod

const firstWithdrawl = transaction.find(function(n){
    return n < 0;
});

console.log(firstWithdrawl);