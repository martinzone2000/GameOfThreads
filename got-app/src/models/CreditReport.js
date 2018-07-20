import AccountRegister from "./AccountRegister";

export default class CreditReport {
    constructor(_refer, _quiz, _refreshed) {
        this.bureaus = [];
        this.accountRegister = new AccountRegister();
        this.referrals = _refer;
        this.refreshCount = 0;
        this.quiz = _quiz;
        this.hasRefreshed = _refreshed
    }

    addBureau(bureau) {
        this.bureaus.push(bureau);
    }

    compare(lastReport) {
        //Update the bureaus
        var current = this;
        var last;
        for(var i = 0 ; i < current.bureaus.length ; i++) {
            last = lastReport.bureaus.find(function(b) {
                return b.name===current.bureaus[i].name
            })
            if(last) {
                current.bureaus[i].change=this.bureaus[i].score-last.score
            }
        }

        //Update the accounts
        var current = this;
        var last;
        var max=0;
        var ussage=0;
        var total = 0;
        for(var i = 0 ; i < current.accountRegister.accounts.length ; i++) {
            last = lastReport.accountRegister.accounts.find(function(b) {
                return b.name===current.accountRegister.accounts[i].name
            })
            if(last) {
                var ca = current.accountRegister.accounts[i];
                ca.change=ca.balance-last.balance
            }
        }
        current.refreshCount=lastReport.refreshCount+1


    }

}