export default class BadgeCollection {
    constructor() { 
        this.badgeCollection = [];
    }

    add(badge) {
        this.badgeCollection.push(badge);
        console.log(badge)
    }    
}