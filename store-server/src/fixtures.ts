import db from './db';

async function loadFixtures(clearData = false) {
  if(clearData){
      console.warn('clearing data')
      await db('category').del()
      await db('book').del()
  }
  
  await db.batchInsert('category',[
      {id: 1,title : 'Fantasy'},
      {id: 2,title : 'Biography'}
  ])
  await db.batchInsert('book', [
    { id: 1, title: 'Harry Potter', price: 560, stockAmount: 10, categoryId: 1 },
    { id: 2, title: 'ALEX FERGUSON', price: 520, stockAmount: 6, categoryId: 2 },
    { id: 3, title: 'Steve Jobs by Walter', price: 300, stockAmount: 4, categoryId: 2 },
  ])
}

export default loadFixtures