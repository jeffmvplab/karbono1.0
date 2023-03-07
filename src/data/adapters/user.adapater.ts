import { IUser } from "@/domain/models";

export const userAdapter = (user: any): IUser => ({
  id:user.id,
  email:user.email,
  fullName:user.name,
  medicalRecord:user.medicalRecord,
  healthEntity:user.healthEntity
});