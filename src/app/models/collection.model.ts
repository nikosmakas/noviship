export class collections {

    title!: string;
    description!: string;
    movies: movies[] = [];

}

export class movies{
    id!:number;
    title!:string;
}