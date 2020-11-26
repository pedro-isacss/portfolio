import { Request, Response } from "express";
import { v4 } from "uuid";
import bcrypt from "bcryptjs";
import db from "../database/connection";

export default class UsersController {
  async postUser(req: Request, res: Response) {
    const { email, password } = await req.body;
    try {
      const dataUser = {
        id: v4(),
        email,
        password: bcrypt.hashSync(password, 8),
      };
      await db("users").insert(dataUser);
      return res.json(dataUser);
    } catch (error) {
      return res.json({
        error,
      });
    }
  }
}
