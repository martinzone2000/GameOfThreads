export default class Badge {
    constructor(name, description, imageUrl, count) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.count = count;
    }

    addTrophy() {
        return new Badge("Trophy", "Earned every month your credit score range is good or better.", "/images/badges/trophy.png", 0);
    }

    addGoingUp() {
        return new Badge("Going Up", "Earned every time a score rises.", "/images/badges/thumbsup.png", 0);
    }

    addSuperStar() {
        return new Badge("Super Star", "Earned every time credit utilization drops by 5%.", "/images/badges/star.png", 0);
    }

    addBlastOff() {
        return new Badge("Blast Off", "Earned every time an account is reduced by 10%.", "/images/badges/rocket.png", 0); 
    }

    addLoyalty() {
        return new Badge("Loyalty", "Earned every month you are enrolled.", "/images/badges/medal.png", 0);
    }

    addQuizMaster() {
        return new Badge("Quiz Master", "Earned every month you answer all questions correctly.", "/images/badges/lightbulb.png", 0);
    }

    addRecruiter() {
        return new Badge("Recruiter", "Earned every time you refer someone to application.", "/images/badges/leaf.png", 0);
    }

    addTechnoMaster() {
        return new Badge("Techno Master", "Earned every month as long as you have refreshed your scores.", "/images/badges/computer.png", 0);
    }
}