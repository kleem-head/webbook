import { books, authors, AuthorData, BookData } from "../data";
import Book from "../schemas/Book";
import author from "../schemas/Author";
import { Resolver, Query, Arg, Mutation } from "type-graphql";

@Resolver(of => Book)
export default class {
  @Query(returns => [Book])
  Books(): BookData[] {
    return books;
  }

  @Query(returns => Book, { nullable: true })
  getBook(@Arg("bookId") bookId: number): BookData | undefined {
    return books.find(book => book.bookId === bookId);
  }

  @Mutation(returns => Book)
  updateBook(
    @Arg("bookId") bookId: number,
    @Arg("name") name: string,
    @Arg("pageCount") pageCount: number
    // ,    @Arg("authorId") authorId: number
  ): Book {
    const findedBook = books.find(book => {
      return book.bookId === bookId;
    });
    if (!findedBook) throw new Error(`Книга с ID = ${bookId} отсутствует`);
    findedBook.pageCount = pageCount;
    findedBook.name = name;

    return findedBook;
  }

  @Mutation(returns => Book)
  createBook(
    @Arg("bookId") bookId: number,
    @Arg("name") name: string,
    @Arg("pageCount") pageCount: number,
    @Arg("author") author: author,
    @Arg("authorId") authorId: number
  ): Book {
    const findedBook = books.find(book => {
      return book.bookId === bookId;
    });

    if (findedBook) throw new Error(`Книга с ID = ${bookId} уже существует`);

    const findedAuthor = authors.find(author => {
      return author.authorId === authorId;
    });

    if (!findedAuthor)
      throw new Error(`Автора с ID = ${authorId} не существыет`);
    let newBook = {
      bookId: bookId,
      name: name,
      pageCount: pageCount,
      authorId: authorId,
      author: findedAuthor
    };

    books[books.length] = newBook;

    return books[books.length-1];
  }

  
}
