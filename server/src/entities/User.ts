import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

//setup columns of SQL table (schema)

//convert to graphql type
@ObjectType()
@Entity()
export class User {
  //@Field: expose column to graphQL so it can query
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;

  @Field()
  @Property({ type: "text", unique: true })
  email!: string;
}
