import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

//setup columns of SQL table (schema)

//convert to graphql type
@ObjectType()
@Entity()
export class Post extends BaseEntity {
  //@Field: expose column to graphQL so it can query
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt = Date();

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt = Date();

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  creatorId: number;

  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @Field()
  @Column()
  text!: string;

  @Field()
  @Column()
  public!: Boolean;
}
