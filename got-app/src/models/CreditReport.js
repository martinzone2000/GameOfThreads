export default class CreditReport {
    constructor(_refer, _quiz) {
        this.bureaus = [];
        this.referrals = _refer;
        this.refreshCount = 0;
        this.quiz = _quiz;
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
        current.refreshCount=lastReport.refreshCount+1
    }

}