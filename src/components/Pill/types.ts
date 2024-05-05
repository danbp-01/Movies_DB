export interface IPill {
   genre:string;
   colorPill: string;
};

export class Pill implements IPill {
    genre: string;
    colorPill: string = "red";
    constructor(genre: string, colorPill: string) {
        this.genre = genre;
        this.colorPill = colorPill;
    }
}