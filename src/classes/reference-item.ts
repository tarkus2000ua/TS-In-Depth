/* eslint-disable */
import {timeout} from '../decorators';

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log('Creating a new ReferenceItem...');
    // }

    static department = 'Tech books';

    private _publisher: string;

    #id: number;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getID() {
        return this.#id;
    }

    abstract printCitation(): void;

    constructor(public title: string, protected year: number, id: number) {
        this.#id = id;
    }

    @timeout(3000)
    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}

export { ReferenceItem };
