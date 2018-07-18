import Badge from "./Badge";

export default class CustomerBadges {
    constructor() { 
        this.customerBadgeCollection = [];
        this.badge = new Badge();
    }

    add(badge) {
        this.customerBadgeCollection.push(badge);
        console.log(badge)
    }

    updateBadgeCollection(bureauData) {
        if(bureauData[0].change > 5 || bureauData[1].change > 5 || bureauData[2].change > 5) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addGoingUp())) {
                this.changeBadgeObjectCount("GoingUp");
            } else {
                this.customerBadgeCollection.push(this.badge.addGoingUp());
            }
        }

        if(bureauData[0].score > 700 || bureauData[1].score > 700 || bureauData[2].score > 700) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addTrophy())) {
                this.changeBadgeObjectCount("Trophy");
            } else {
                this.customerBadgeCollection.push(this.badge.addTrophy());
            }
        }

        if(this.containsBadge(this.customerBadgeCollection, this.badge.addLoyalty())) {
            this.changeBadgeObjectCount("Loyalty");
        } else {
            this.customerBadgeCollection.push(this.badge.addLoyalty());
        }
    }

    containsBadge(array, badge) {
        for(var i=0; i < array.length; i++) {
            if(array[i].name === badge.name) {
                return true;
            }
        }
        return false;
    }

    changeBadgeObjectCount(name) {
        for (var i in this.customerBadgeCollection) {
            if (this.customerBadgeCollection[i].name == name) {
                this.customerBadgeCollection[i].count++;
                break;
            }
        }
    }
    
}