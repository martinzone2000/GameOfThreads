export default class Account {
    constructor(name, type, balance, negatives, max) {
        this.name = name;
        this.type=type;
        this.balance=balance;
        this.negatives=negatives;
        this.max = max;
        this.change=0;
    }

    clone(){
        return new Account(this.name, this.type, this.balance, this.negatives)
    };

    random() {
        var change = Math.random()*20;
        change = change * ((Math.random() *10 -8) >0 ? 1 : -1 )
        this.balance += Math.floor(change);
        return this
    }

    refresh() {
        var ns = this.clone().random();
        ns.change=ns.balance-this.balance;
        return ns;
    }

}