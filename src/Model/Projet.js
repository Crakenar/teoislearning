export class Projet {

    constructor(id, name, descrptionFR, descriptionEN, imgUrl, githubUrl, technos, date, ongoing) {
        this.id = id;
        this.name = name;
        this.descriptionFR = descrptionFR;
        this.descriptionEN = descriptionEN;
        this.imgUrl = imgUrl;
        this.githubUrl = githubUrl;
        this.technos = technos;
        this.date = date;
        this.ongoing = ongoing;
    }

}