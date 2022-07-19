export class Experience {
    constructor(title,descriptionMD, language, typeMD, date_work, company,duration, imgPath) {
        this.title = title;
        this.descriptionMD = descriptionMD;
        this.typeMD = typeMD;
        this.date_work = date_work;
        this.company = company;
        this.duration = duration;
        this.imgPath = imgPath;
    }
}