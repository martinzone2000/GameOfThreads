export default class Bureau {
    constructor(name, score) {
        this.name = name;
        this.score=score;
        this.high=800;
        this.low=400;
        this.change=0;
    }

    clone(){
        return new Bureau(this.name, this.score, this.high, this.low)
    };

    random() {
        var change = Math.random()*20;
        change = change * ((Math.random() *10 -3) >0 ? 1 : -1 )
        this.score += Math.floor(change);
        return this
    }

    refresh() {
        var ns = this.clone().random();
        ns.change=ns.score-this.score;
        return ns;
    }

}