import { Book } from "./book";

export class Review {
    constructor(
        public id: number,
        public book: Book,
        public text: string
        ) { };
}
