type Format = {
    [key: string]: string;
}

type Person = {
    birth_year: number,
    death_year: number,
    name: string
}

export class Book {
    constructor(
        public id: number,
        public title: string,
        public authors: Person[],
        public translators: Person[],
        public subjects: string[],
        public bookshelves: string[],
        public languages: string[],
        public copyright: boolean | null,
        public media_type: string,
        public formats: Format,
        public download_count: number
    ) { };
}
