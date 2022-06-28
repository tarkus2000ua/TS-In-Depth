/* eslint-disable no-redeclare */
import {Book, Callback, TOptions} from './interfaces';
import {BookOrUndefined, BookProperties} from './types';
import {Category} from './enums';
import RefBook from './classes/encyclopedia';

function getAllBooks(): readonly Book[] {
    return <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: 0 },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: 0 },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: 1 },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: 0,
        },
    ];
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const firstAvailable = books.find(item => item.available);
    console.log(`${books.length} books`);
    console.log(firstAvailable);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript) {
    const result: Array<string> = getAllBooks()
        .filter(item => item.category === category)
        .map(item => item.title);
    return result;
}

function logBookTitles(titles: string[]): void {
    console.log(titles);
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books: readonly Book[] = getAllBooks();
    const book: Book = books.find(item => item.id === index);
    const { title, author } = book;
    return [title, author];
}

function calcTotalPages() {
    const libInfo = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        {
            lib: 'libName2',
            books: 5_000_000_000,
            avgPagesPerBook: 300,
        },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return libInfo.reduce((sum, library) => sum + BigInt(library.avgPagesPerBook * library.books), 0n);
}

function createCustomerID(name: string, id: number): string {
    return `Name: ${name}, ID: ${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    let result: string = `Name: ${name}`;
    if (age) {
        result += `, Age: ${age.toString()}`;
    }
    if (city) {
        result += `, City: ${city}`;
    }
    console.log(result);
}

function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const titles: string[] = bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
    console.log(customer);
    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...params: any[]): string[] {
    if (typeof params[0] === 'string' && params.length === 1) {
        const [author] = params;
        return getAllBooks()
            .filter(book => book.author === author)
            .map(book => book.title);
    }

    if (typeof params[0] === 'boolean' && params.length === 1) {
        const [available] = params;
        return getAllBooks()
            .filter(book => book.available === available)
            .map(book => book.title);
    }
    if (typeof params[0] === 'number' && params.length === 2) {
        const [id, available] = params;
        return getAllBooks()
            .filter(book => book.available === available && book.id === id)
            .map(book => book.title);
    }
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

function assertRefBookInstance(condition): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return title.split('').reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title}  by  ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties) {
    if (typeof book[prop] === 'function') {
        return prop;
    } else {
        return book[prop];
    }
}

function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return prop.toString();
    } else {
        return obj[prop];
    }
}

// function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found.');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found.');
            }
        }, 2000);
    });
}

async function logSearchResults(category: Category) {
    const books: Awaited<Promise<string[]>> = await getBooksByCategoryPromise(category);
    console.log(`${books.length} found`);
    return books;
}

export {
    assertStringValue,
    bookTitleTransform,
    getTitles,
    calcTotalPages,
    createCustomer,
    createCustomerID,
    getAllBooks,
    getBookAuthorByIndex,
    getBookByID,
    getBookTitlesByCategory,
    logBookTitles,
    getProperty,
    logFirstAvailable,
    printBook,
    setDefaultConfig,
    getObjectProperty,
    сheckoutBooks,
    printRefBook,
    purge,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
};
