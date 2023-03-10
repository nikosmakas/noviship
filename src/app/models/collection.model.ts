export class collections {
    //id:number | undefined; //collections.id == collections.length
    id!:number;
    title!: string;
    description!: string;
    movies: movies[] = [];

}

export class movies{
    id!:number;
    title!:string;
}