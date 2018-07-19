export default class CreditReport {
    constructor() {
        this.bureaus = [];
    }

    addBureau(bureau) {
        this.bureaus.push(bureau);
    }

    compare(lastReport) {
        //Update the bureaus
        var current = this;
        for(var i = 0 ; i < current.bureaus.length ; i++) {
            var last = lastReport.bureaus.find(function(b) {
                return b.name===current.bureaus[i].name
            })
            if(last) {
                current.bureaus[i].change=this.bureaus[i].score-last.score
            }
        }
    }

}