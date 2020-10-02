import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from "path";


//setup config of PostgreSQL database
export default {
    migrations:{
        path: path.join(__dirname,"./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities:[Post],
    dbName: "anonymous-diary",
    type: "postgresql",
    user:"postgres",
    password:"postgres",
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];