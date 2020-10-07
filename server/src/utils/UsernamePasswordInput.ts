import {
  InputType,
  Field
} from "type-graphql";

//custom define arg type as object

@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
