import { books, authors, AuthorData, BookData } from "../data";
import Book from "../schemas/Book";
import author from "../schemas/Author";
import { Resolver, Query, Mutation, Arg } from "type-graphql";


@Resolver(of => author)
export default class {
  @Query(returns => [author])
  Authors(): AuthorData[] {
    return authors;
  }

  @Mutation(returns => author)
  createAuthor(
    @Arg("authorId") authorId: number,
    @Arg("name") name: string
  ): author {
    const findedAuthor = authors.find(author => {
        return author.authorId === authorId;
      });

    if (findedAuthor) throw new Error(`Автор с ID = ${authorId} уже существует`);
   
    let newAuthor = {
      authorId: authorId,
      name: name      
    };

    authors[authors.length] = newAuthor;

    return authors[authors.length-1];
  }

}