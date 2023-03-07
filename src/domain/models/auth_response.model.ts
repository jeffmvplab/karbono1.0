import { IUser } from "./user.model";

export interface IAuthResponse {
    jwt: string,
    user: IUser,
  }