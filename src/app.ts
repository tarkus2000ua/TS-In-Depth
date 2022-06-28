// Task 02.01

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(0));
// console.log(getBookAuthorByIndex(3));
// console.log(calcTotalPages());

// Task 03.01

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => {
//     return `Name: ${name}, ID: ${id}`;
// };
//
// idGenerator = createCustomerID;

// console.log(idGenerator('John', 20));

// Task 03.02

// createCustomer('Ann');
// createCustomer('Ann', 30);
// createCustomer('Ann', 30, 'Kyiv');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(2));

// console.log(сheckoutBooks('Ann', 1, 2, 4));

// Task 03.03

// console.log(getTitles('Liang Yuxian Eugene'));
// console.log(getTitles(true));
// console.log(getTitles(1, true));

// Task 03.04

// console.log(bookTitleTransform('qwerty'));
// console.log(bookTitleTransform(123456));

// Task 04.01

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02

// let logDamage: Logger;
// logDamage = (text: string) => console.log('damage: ' + text);
// logDamage('missing page #25');

// Task 04.03

// const favoriteAuthor: Author = {
//     name: 'John Smith',
//     email: 'john.smith@gmail.com',
//     numBooksPublished: 5,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Ann Johnson',
//     email: 'ann.johnson@gmail.com',
//     department: 'fiction',
//     assistCustomer: (custName: string, bookTitle: string) => console.log(`Hi ${custName}, here's your ${bookTitle}`),
// };

// favoriteLibrarian.assistCustomer('Andrew', 'Moby Dick');

// Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05

// console.log(getProperty(myBook, "markDamaged"));

// Task 05.01

// const ref = new ReferenceItem('Javascript in Depth', 2022, 12345);
// ref.printItem();
// ref.publisher = 'John Adams';
// console.log(ref.publisher);
// console.log(ref);
// console.log(ref.getID());
// console.log(ReferenceItem.department);

// Task 05.02

// const refBook = new RefBook(10, 'Britannica', 1960, 12);
// refBook.printItem();

// Task 05.03

// refBook.printCitation();

// Task 05.04

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Ann';
// favoriteLibrarian.assistCustomer('John', 'Moby Dick');

// Task 5.05

// const myPersonBook: PersonBook = {
//     author: 'Stephen Simpson',
//     available: false,
//     category: Category.Angular,
//     id: 0,
//     title: 'Angular 14',
//     name: 'John',
//     email: 'john@gmail.com',
// };

// console.log(myPersonBook);

// const o: TOptions = { duration: 0 };
// console.log(setDefaultConfig(o));

// Task 06.03

// const refBook = new RefBook(10, 'Britannica', 1960, 12);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05

// const flag = true;

// if (flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     console.log(reader);
// }

// if (flag) {
//     import('./classes').then(obj => {
//         const reader = new obj.Reader();
//         reader.name = 'Anna';
//         console.log(reader);
//     });
// }

// Task 06.06

// const library: Library = new Library();

// const library: Library = {
//     id: 10,
//     name: 'Home Library',
//     address: 'Home',
// };
//
// console.log(library);

// Task 07.01

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// const purgedBooks = purge<Book>(inventory);
// console.log(purgedBooks);
//
// const purgedNumbers = purge<number>([1, 2, 3, 4, 5]);
// console.log(purgedNumbers);

// Task 07.02

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst());

// Task 07.03

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));

// Task 07.04

// const bookRequiredFields: BookRequiredFields = {
//     author: 'John Smith',
//     available: false,
//     category: Category.Angular,
//     id: 0,
//     markDamaged: () => {},
//     pages: 500,
//     title: 'Angular 14',
// };
//
// const updatedBook: UpdatedBook = {
//     title: 'React Native',
// };
//
// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01

// const u = new UniversityLibrarian();
// UniversityLibrarian['prop'] = '123';
// const proto = Object.getPrototypeOf(u);
// console.log(proto);
// proto['m'] = function () {};

// Task 08.02

// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('John', 'Modern Javascript');
// fLibrarian['printLibrarian']();

// Task 08.03

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04

// const e = new Encyclopedia(1, 'Britannica', 1880, 10);
// e.printItem();

// Task 08.05

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('John', 'Angular 14');
// console.log(fLibrarian);

// Task 08.06

// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('John', 'Angular 14');

// Task 08.07

// const e = new Encyclopedia(1, 'Britannica', 1880, 10);
// e.copies = -10;
// e.copies = 0;
// e.copies = 4.5;
// e.copies = 10;

// Task 09.01

import {logSearchResults} from './functions';
import {Category} from './enums';

// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02

// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(num => console.log(`${num} books found`))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(num => console.log(`${num} books found`))
//     .catch(err => console.log(err));
// console.log('End');

// Task 09.03

console.log('Start');
logSearchResults(Category.JavaScript).then(r => {});
logSearchResults(Category.Software).catch(err => err.log);
console.log('End');
