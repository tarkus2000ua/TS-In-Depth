/* eslint-disable no-underscore-dangle */
import {ReferenceItem} from './reference-item';
import {positiveInteger} from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    get copies(): number {
        return this._copies;
    }

    @positiveInteger
    set copies(num: number) {
        this._copies = num;
    }

    constructor(public edition: number, title: string, year: number, id: number) {
        super(title, year, id);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
