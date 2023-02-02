class ContentList{
    private item: Content[] ;
    constructor(item: Content){
        this.item = [];
        this.item[1] = item;
        this.increaseCount();
    }
    get items(): Content[]{
        return this.item;
        }
    
        increaseCount(){
            return this.item;
        }
}