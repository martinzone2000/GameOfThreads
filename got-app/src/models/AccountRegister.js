export default class AccountRegister {
    constructor() { 
        this.accounts = [];
    }

    add(account) {
        this.accounts.push(account);
        console.log(account)
    }
}