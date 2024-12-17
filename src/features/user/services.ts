import bcrypt from "bcrypt";

import prisma from "@/client/prisma";

import { RegisterSchema } from "./type";

class UserService {
  async createUser(payload: RegisterSchema) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    return await prisma.user.create({
      data: { ...payload, password: hashedPassword },
      select: { username: true, id: true },
    });
  }

  async findUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  }

  async findUserByEmailOrId(identifier: string) {}

  async updateUser(userId: string, payload: unknown) {}

  async deleteUser(userId: string) {}
}

export default UserService;
