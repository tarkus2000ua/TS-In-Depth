import { Author, Book, Person } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';

type PersonBook = Person & Book;
type BookProperties = keyof Book;
type BookOrUndefined = Book | undefined;

type BookRequiredFields = Required<Book>;
type UpdatedBook = Partial<Book>;
type AuthorWoEmail = Omit<Author, 'email'>;

type CreateCustomerFunctionType = typeof createCustomer;

type fn = (p1: number, p2: string, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: string, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: number, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: number, p2: string, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type RequiredProps<T extends object> = { [prop in keyof T]: {} extends Pick<T, prop> ? never : prop }[keyof T];
type RequiredFields = RequiredProps<Book>;

type OptionalProps<T extends object> = { [prop in keyof T]: {} extends Pick<T, prop> ? prop : never }[keyof T];
type OptionalFields = OptionalProps<Book>;
// type OptionalFields = OptionalProps<number>;

type RemoveProps<T extends object, TProps extends keyof T> = { [prop in keyof T as Exclude<prop, TProps>]: T[prop] };
type BookRequiredPropsType = RemoveProps<Book, OptionalFields>;
type BookOptionalPropsType = RemoveProps<Book, RequiredFields>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;
type FN = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export {
    PersonBook,
    BookOrUndefined,
    BookProperties,
    BookRequiredFields,
    UpdatedBook,
    AuthorWoEmail,
    CreateCustomerFunctionType,
    Unpromisify,
};
