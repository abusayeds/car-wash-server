import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  node_env :process.env.NODE_ENV,
  bcrypt_salt_rounds :process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secert : process.env.JWT_ACCESS_SECRET
};
