
import Bureau from './models/Bureau.js';
import AccountRegister from "./models/AccountRegister";
import Account from "./models/Account";
import Badge from "./models/Badge";
import BadgeCollection from './models/BadgeCollection';
import CustomerBadges from './models/CustomerBadges';
import CreditReport from './models/CreditReport'

export default class GlobalState {
    constructor(){
        this.currentReport = 0,
        this.creditReports = [],
        this.badge = new Badge(),
        this.badgeCompendium = new BadgeCollection(),
        this.customerBadges = new CustomerBadges(),
        this.newCount = 0
      }

      initGlobatState() {
        var reports = [];

        //month 1
        var cr = new CreditReport(false, false)
        cr.addBureau(new Bureau("Trans Union", 502))
        cr.addBureau(new Bureau("Equifax", 520))
        cr.addBureau(new Bureau("Experian", 512))
        cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 255000, [], 255000))
        cr.accountRegister.add(new Account("Toyota Finance", "auto", 12500, [], 12500))
        cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 2500, [], 10000))
        cr.accountRegister.add(new Account("American Express", "creditcard", 1450, [], 15000))
        this.creditReports.push(cr)
    
        //month 2
        cr = new CreditReport(true, false)
        cr.addBureau(new Bureau("Trans Union", 522))
        cr.addBureau(new Bureau("Equifax", 530))
        cr.addBureau(new Bureau("Experian", 505))
        cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 252500, [], 252500))
        cr.accountRegister.add(new Account("Toyota Finance", "auto", 12000, [], 12500))
        cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 5000, [], 10000))
        cr.accountRegister.add(new Account("American Express", "creditcard", 2200, [], 15000))
        this.creditReports.push(cr)
    
        //month 3
        cr = new CreditReport(false, true)
        cr.addBureau(new Bureau("Trans Union", 622))
        cr.addBureau(new Bureau("Equifax", 635))
        cr.addBureau(new Bureau("Experian", 640))
        cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 250000, [], 250000))
        cr.accountRegister.add(new Account("Toyota Finance", "auto", 11500, [], 12500))
        cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 3000, [], 10000))
        cr.accountRegister.add(new Account("American Express", "creditcard", 1000, [], 15000))
        cr.accountRegister.add(new Account("Discover", "creditcard", 1000, [], 7000))
        this.creditReports.push(cr)
    
        //month 4
        cr = new CreditReport(true, true)
        cr.addBureau(new Bureau("Trans Union", 600))
        cr.addBureau(new Bureau("Equifax", 630))
        cr.addBureau(new Bureau("Experian", 650))
        cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 247500, [], 247500))
        cr.accountRegister.add(new Account("Toyota Finance", "auto", 11100, [], 12500))
        cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 2000, [], 10000))
        cr.accountRegister.add(new Account("American Express", "creditcard", 0, [], 15000))
        cr.accountRegister.add(new Account("Discover", "creditcard", 2500, [], 7000))
        this.creditReports.push(cr)

        this.badgeCompendium.badgeCollection.push(this.badge.addSuperStar());
        this.badgeCompendium.badgeCollection.push(this.badge.addBlastOff());
        this.badgeCompendium.badgeCollection.push(this.badge.addGoingUp());
        this.badgeCompendium.badgeCollection.push(this.badge.addTrophy());
        this.badgeCompendium.badgeCollection.push(this.badge.addLoyalty());
        this.badgeCompendium.badgeCollection.push(this.badge.addQuizMaster());
        this.badgeCompendium.badgeCollection.push(this.badge.addRecruiter());
        this.badgeCompendium.badgeCollection.push(this.badge.addTechnoMaster());  
      }

}
