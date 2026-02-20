// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer(); 
// counter(); // 1
// // counter(); // 2
// // counter(); // 3



function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100

