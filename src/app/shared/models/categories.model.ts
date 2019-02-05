export class Categories {
    name: string;
    id: number;
    sublevels: CategoriesSub[];

    constructor(
        name: string,
        id: number,
        sublevels: CategoriesSub[]
    ){
        this.name = name;
        this.id = id;
        this.sublevels = sublevels;
    }
}

export class CategoriesSub {
    name: string;
    id: number;
    sublevels: Object[];

    constructor(
        name: string,
        id: number,
        sublevels: Object[]
    ){
        this.name = name;
        this.id = id;
        this.sublevels = sublevels;
    }
}
