export class Cour {
    "id" :number
    "title": String
    "desc":String
    "prix" :String
    "url" :String


    constructor(id, title,desc, prix, url){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.prix = prix;
        this.url = url;
    }

}