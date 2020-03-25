import Author from "./Author";
import { Field, ObjectType, Int, InputType } from "type-graphql";

@InputType()
@ObjectType('BookInput')
export default class Book {
  @Field(type => Int)
  bookId: number;

  @Field()
  name: string;

  @Field(type => Int)
  pageCount: number;

  @Field(type => Int)
  authorId: number;

  @Field(type => Author)
  author: Author;
}
