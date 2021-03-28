import { Request, Response } from "express";
import { v4 } from "uuid";
import db from "../database/connection";

export default class ContactsController {
  async getContacts(req: Request, res: Response) {
    const contacts = await db("contacts");
    return res.json(contacts);
  }

  async postContact(req: Request, res: Response) {
    const { firstName, lastName, email, phone, birthday } = req.body;
    try {
      const dataContact = {
        id: v4(),
        firstName,
        lastName,
        email,
        phone,
        birthday,
      };
      await db("contacts").insert(dataContact);
      return res.json(dataContact);
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async updateContact(req: Request, res: Response) {
    const { id, firstName, lastName, email, phone, birthday } = req.body;

    try {
      const dataContact = {
        id,
        firstName,
        lastName,
        email,
        phone,
        birthday,
      };
      await db("contacts").where("id", id).update(dataContact);
      return res.json(dataContact);
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async deleteContact(req: Request, res: Response) {
    const { id } = req.body;
    try {
      await db("contacts").where("id", id).del();
      return res.json({
        status: "Contact deleted",
        contactId: id,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      await db("contacts").where("id", "<>", "").del();
      return res.json({
        status: "All deleted",
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }
}
