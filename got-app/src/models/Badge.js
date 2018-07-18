export default class Badge {
    constructor(name, displayName, description, tips, imageUrl, count) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.tips = tips;
        this.imageUrl = imageUrl;
        this.count = count;
    }

    addTrophy() {
        return new Badge("Trophy", "Trophy", "Earned every month your credit score range is good or better.",'', "/images/badges/trophy.png", 0);
    }

    addGoingUp() {
        return new Badge("GoingUp","Going Up", "Earned every time a score rises.", '', "/images/badges/thumbsup.png", 0);
    }

    addSuperStar() {
        return new Badge("SuperStar","Super Star", "Earned every time credit utilization drops by 5%.", '', "/images/badges/star.png", 0);
    }

    addBlastOff() {
        return new Badge("BlastOff","Blast Off", "Earned every time an account is reduced by 10%.", '', "/images/badges/rocket.png", 0); 
    }

    addLoyalty() {
        return new Badge("Loyalty","Loyalty", "Earned every month you are enrolled.", '', "/images/badges/medal.png", 0);
    }

    addQuizMaster() {
        return new Badge("QuizMaster","Quiz Master", "Earned every month you answer all questions correctly.", '', "/images/badges/lightbulb.png", 0);
    }

    addRecruiter() {
        return new Badge("Recruiter","Recruiter", "Earned every time you refer someone to application.", '', "/images/badges/leaf.png", 0);
    }

    addTechnoMaster() {
        return new Badge("TechnoMaster","Techno Master", "Earned every month as long as you have refreshed your scores.", '', "/images/badges/computer.png", 0);
    }
}