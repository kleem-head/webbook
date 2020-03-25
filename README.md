# webbook
Пример CRUD для  type-graphql и typeorm 

1. Скачать или клонировать репозиторий, зайти внутрь папки
2. Создать каталог ./dist
2. \# npm install -g typescript
3. $ npm install
4. $ tsc
5. $ node ./dist/index.js
6. Зайти в браузере в песочницу по адресу http://localhost:4000/ 

Тестовые запросы:

query{ Books{
  bookId
  name
  pageCount
  authorId
  author {name}
}}

query{ Authors{
  authorId
  name
}}


mutation {
  updateBook(bookId:1,name:"Руслан и Людмила 2",pageCount:100) {
    bookId 
    name
    pageCount
  }
}

mutation {
  createBook(
    bookId:9,
    name:"Руслан и Людмила 2",
    pageCount:100
  	authorId:1
    author:{
      authorId:1,
      name:"Пушкин"
    }
  )
  {
    bookId 
    name
    pageCount
    authorId
    author {authorId name}
  }
}

mutation {
  createAuthor(authorId:3,name:"Толстой"){
    authorId
    name
}
}
