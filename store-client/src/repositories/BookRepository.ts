import Book from "../model/book";
import { IRepository } from "./IRepository";

export class BookRepository implements IRepository<Book> {
    async getAll(): Promise<Book[] | null> {
        return [
            {
                id: 1, title: 'Harry Potter', price:560, stockAmount: 10,
                category: {id : 1,title: 'Fantasy'}
            },
            {
                id: 1, title: 'The withcer I', price:399, stockAmount: 6,
                category: {id: 1,title: 'Fantasy'}
            }
        ]
    }
}
