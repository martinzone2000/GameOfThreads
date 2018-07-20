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

    updateBadgeCollection(CreditRepot) {
        console.log(CreditRepot);
        var bureauData = CreditRepot.bureaus;
        console.log(CreditRepot);
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

        if(CreditRepot.quiz) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addQuizMaster())) {
                this.changeBadgeObjectCount("QuizMaster");
            } else {
                this.customerBadgeCollection.push(this.badge.addQuizMaster());
            }
        }

        if(CreditRepot.referrals) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addRecruiter())) {
                this.changeBadgeObjectCount("Recruiter");
            } else {
                this.customerBadgeCollection.push(this.badge.addRecruiter());
            }
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
                this.customerBadgeCollection[i].isNew = true;
                break;
            }
        }
    }
    
}