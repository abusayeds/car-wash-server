/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUserModel, TUser, TuserName, UserModel } from "./user-interface";
import config from "../../app/config";
const userNameSchema = new Schema<TuserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const userSchema = new Schema<TUser, IUserModel>(
  {
    name: userNameSchema,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});
userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});
userSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
  return await this.findOne({ email }).select('+password');
};
userSchema.statics.isPasswordMatched = async function name(
  plainTextPassword: string,
  hashPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};

export const userModel = model<TUser, IUserModel>("User", userSchema);
