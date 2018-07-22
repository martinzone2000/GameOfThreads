export default class Badge {
    constructor(name, displayName, description, tips, imageUrl, count, isNew, point) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.tips = tips;
        this.imageUrl = imageUrl;
        this.count = count;
        this.isNew = isNew;
        this.point = point;

    }

    addTrophy() {
        return new Badge("Trophy", "Trophy", "Earned every month your credit score range is good or better.",'', "/images/badges/trophy.png", 1, true, 5);
    }

    addGoingUp() {
        return new Badge("GoingUp","Going Up", "Earned every time a score rises.", '', "/images/badges/thumbsup.png", 1, true, 10);
    }

    addSuperStar() {
        return new Badge("SuperStar","Super Star", "Earned every time credit utilization drops by 5%.", '', "/images/badges/star.png", 1, true, 15);
    }

    addBlastOff() {
        return new Badge("BlastOff","Blast Off", "Earned every time an account is reduced by 10%.", '', "/images/badges/rocket.png", 1, true, 20); 
    }

    addLoyalty() {
        return new Badge("Loyalty","Loyalty", "Earned every month you are enrolled.", '', "/images/badges/medal.png", 1, true, 1);
    }

    addQuizMaster() {
        return new Badge("QuizMaster","Quiz Master", "Earned every month you answer all questions correctly.", '', "/images/badges/lightbulb.png", 1, true, 5);
    }

    addRecruiter() {
        return new Badge("Recruiter","Recruiter", "Earned every time you refer someone to application.", '', "/images/badges/leaf.png", 1, true, 5);
    }

    addTechnoMaster() {
        return new Badge("TechnoMaster","Techno Master", "Earned every month as long as you have refreshed your scores.", '', "/images/badges/computer.png", 1, true, 10);
    }
}