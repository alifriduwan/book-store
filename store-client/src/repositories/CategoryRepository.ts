import Category from "../model/category";
import { IRepository } from "./IRepository";

export class CategoryRepository implements IRepository<Category> {
    async getAll(): Promise<Category[] | null> {
        return [
            {id : 1,title : 'Fantasy'},
            {id : 2,title : 'Biography'}
        ]
    }
} 
