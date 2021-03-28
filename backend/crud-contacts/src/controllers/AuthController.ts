/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../database/connection";

export default class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = await req.body;
    const user = await db("users").where("email", "=", email).select("*");

    if (user.length === 0) {
      return res.status(401);
    }

    const pass = await bcrypt.compare(password, user[0].password);

    if (!pass) {
      return res.status(401);
    }

    const token = jwt.sign({ id: user[0].id }, "secret", { expiresIn: "1d" });

    return res.json({
      id: user[0].id,
      email: user[0].email,
      password: user[0].password,
      token,
    });
  }
}
