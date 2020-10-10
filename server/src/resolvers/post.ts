import { Post } from "../entities/Post";
import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
  FieldResolver,
  Root,
  ObjectType,
} from "type-graphql";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class PostInput {
  @Field()
  title: string;
  @Field()
  text: string;
  @Field()
  public: boolean;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

//CRUD operations
//resolver = implementation of giving users things to call
@Resolver(Post)
export class PostResolver {
  //@query for getting data
  //@mutation for creating, updating, deleting

  //Each query is a function to request data back
  @Query(() => PaginatedPosts) //[] for array of posts
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const qb = getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .orderBy('"createdAt"', "DESC")
      .take(realLimitPlusOne);

    if (cursor) {
      qb.where('"createdAt"<:cursor', { cursor: new Date(parseInt(cursor)) });
    }

    const posts = await qb.getMany();
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimitPlusOne,
    };
  }

  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.slice(0, 300);
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({ ...input, creatorId: req.session.userId }).save();
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("id",()=>Int) id: number,
    @Arg("title") title: string,
    @Arg("text") text: string,
    @Ctx(){req}:MyContext
  ): Promise<Post | null> {

    const post= await getConnection()
    .createQueryBuilder()
    .update(Post)
    .set({title,text})
    .where("id=:id and 'creatorId' = :creatorId",{id,creatorId:req.session.userId})
    .returning("*")
    .execute();

    return post.raw[0];

  }
 
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("id",()=>Int) id: number,
    @Ctx() {req}:MyContext
  ): Promise<boolean> {
    await Post.delete({
      id,
      creatorId:req.session.userId});

    return true;
  }
}
