export class Cour {
    "id" :number
    "title": String
    "desc":String
    "prix" :String
    "url" :String
    "detail": String


    constructor(id, title,desc, prix, url, detail){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.prix = prix;
        this.url = url;
        this.detail = detail;
    }



    public getDetail() :String {
        return this.detail;
    }

}