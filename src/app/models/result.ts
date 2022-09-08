import { Book } from './book';

export class Result {
    constructor(
        public count: number,
        public next: string | null,
        public previous: string | null,
        public results: Book[]
    ) { };
}
