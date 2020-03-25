import { Field, Int, ObjectType, InputType } from "type-graphql";
import { type } from "os";

@InputType()
@ObjectType('author')
export default class Author {
  @Field(type => Int)
  authorId: number;

  @Field()
  name: string;
}
