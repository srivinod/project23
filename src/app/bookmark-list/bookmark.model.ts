export class Bookmark {
    public id : number;
    public title : string;
    public link : string;
    public description : string;
    
    constructor(bmkId : number,bmkTitle : string, bmkLink : string, bmkDesc : string){
        this.id = bmkId;
        this.title = bmkTitle;
        this.link = bmkLink;
        this.description = bmkDesc;
    }
}