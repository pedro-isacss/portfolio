import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface Token {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ status: "No user auth" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, "secret");
    const { id } = data as Token;
    req.userID = id;
    return next();
  } catch {
    return res.status(401);
  }
}
