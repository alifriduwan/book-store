import Repo from './repositories'
import Category from './model/category';
import { useEffect, useState } from 'react'
import Book from './model/Book';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';


function App() {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [bookList, setBookList] = useState<Book[]>([])
  const [filter, setFilter] = useState<string>('')


  const fetchCategoryList = async () => {
    const result = await Repo.categories.getAll()
  }
  const fetchBookList = async () => {
    const result = await Repo.books.getAll({categoryId: filter})
    if(result){
      setBookList(result)
    }
  } 


  useEffect(() => {
    fetchCategoryList()
    fetchBookList()
  
  },[filter])

  return (
    <div>
      <div>
      <select onChange={e => setFilter(e.target.value)}>
          <option value="">All</option>
          {categoryList.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
        </select>
        <hr />
      </div>
      <hr />

          <div>
            {bookList.map(book=>
            <div key={book.id}>
              <BookDetail {...book}/>
              <BookForm book={book} categoryList={categoryList}/>
            <hr />
            </div>)}
          </div>
    </div>
  )
}

export default App;
