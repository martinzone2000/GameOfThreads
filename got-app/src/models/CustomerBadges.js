import Badge from "./Badge";

export default class CustomerBadges {
    constructor() { 
        this.customerBadgeCollection = [];
        this.badge = new Badge();
    }

    add(badge) {
        this.customerBadgeCollection.push(badge);
    }

    updateBadgeCollection(CreditReport) {
        console.log(CreditReport);
        var bureauData = CreditReport.bureaus;

        //checks if any score has gone up by 5
        if(bureauData[0].change > 5 || bureauData[1].change > 5 || bureauData[2].change > 5) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addGoingUp())) {
                this.changeBadgeObjectCount("GoingUp");
            } else {
                this.customerBadgeCollection.push(this.badge.addGoingUp());
            }
        }

        //checks if any score is greater than 700 "Good"
        if(bureauData[0].score > 700 || bureauData[1].score > 700 || bureauData[2].score > 700) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addTrophy())) {
                this.changeBadgeObjectCount("Trophy");
            } else {
                this.customerBadgeCollection.push(this.badge.addTrophy());
            }
        }
        
        //evertime method runs we add loyalty or increment the count
        if(this.containsBadge(this.customerBadgeCollection, this.badge.addLoyalty())) {
            this.changeBadgeObjectCount("Loyalty");
        } else {
            this.customerBadgeCollection.push(this.badge.addLoyalty());
        }

        //add quiz badge if quiz is true
        if(CreditReport.quiz) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addQuizMaster())) {
                this.changeBadgeObjectCount("QuizMaster");
            } else {
                this.customerBadgeCollection.push(this.badge.addQuizMaster());
            }
        }
        
        //add referral badge if a referral was made
        if(CreditReport.referrals) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addRecruiter())) {
                this.changeBadgeObjectCount("Recruiter");
            } else {
                this.customerBadgeCollection.push(this.badge.addRecruiter());
            }
        }

        //if you have updated your scores
        if(CreditReport.hasRefreshed) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addTechnoMaster())) {
                this.changeBadgeObjectCount("TechnoMaster");
            } else {
                this.customerBadgeCollection.push(this.badge.addTechnoMaster());
            }
        }

        
        var accounts = CreditReport.accountRegister.accounts;
        console.log(accounts);
        var totalChange = 0;
        for(var i=0; i < accounts.length; i++) {
            totalChange += accounts[i].change;
            //if any account is reduced by 10%
            if(Math.abs(accounts[i].change) / accounts[i].max > 0.10 ) {
                if(this.containsBadge(this.customerBadgeCollection, this.badge.addBlastOff())) {
                    this.changeBadgeObjectCount("BlastOff");
                } else {
                    this.customerBadgeCollection.push(this.badge.addBlastOff());
                }
            }
        }
        console.log(Math.abs(totalChange) / CreditReport.accountRegister.max);
        //if overall credit utilization decreases by 5%
        if((Math.abs(totalChange) / CreditReport.accountRegister.max) > 0.05) {
            if(this.containsBadge(this.customerBadgeCollection, this.badge.addSuperStar())) {
                this.changeBadgeObjectCount("SuperStar");
            } else {
                this.customerBadgeCollection.push(this.badge.addSuperStar());
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