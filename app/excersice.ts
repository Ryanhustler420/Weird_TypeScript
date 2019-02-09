type _Account = { money: number, deposit: (value: number) => void };

let bankAccount: _Account = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};

type User = { name: string, bankAccount: _Account, hobbies: string[] };

let mySelf: User = {
    name: "Gaurav",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

mySelf.bankAccount.deposit(3000);
console.log(mySelf);