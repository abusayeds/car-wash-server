/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TuserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export interface TUser {
    _id?: string
  name: TuserName;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
}

export interface IUserModel extends Model<TUser> {
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashPassword: string
  ): Promise<boolean>;
}
export type TuserRole = keyof typeof USER_ROLE
