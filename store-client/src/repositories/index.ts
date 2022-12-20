import { CategoryRepository } from "./CategoryRepository";
import { BookRepository } from "./BookRepository";

const repositories = {
    books:new BookRepository(),
    categories: new CategoryRepository()
}

export default repositories
