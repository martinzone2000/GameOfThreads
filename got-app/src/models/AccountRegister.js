export default class AccountRegister {
    constructor() { 
        this.accounts = [];
        this.current = 0;
        this.max = 0;
        this.total = 0;
    }

    add(account) {
        this.accounts.push(account);
        if(account.type != "mortgage") {
            this.max += account.max;
            this.current += account.balance;
        }
        this.total += account.balance;
    }
}