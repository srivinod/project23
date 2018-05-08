export class Bookmark {
    public title : string;
    public link : string;
    public description : string;
    
    constructor(bmkTitle : string, bmkLink : string, bmkDesc : string){
        this.title = bmkTitle;
        this.link = bmkLink;
        this.description = bmkDesc;
    }
}