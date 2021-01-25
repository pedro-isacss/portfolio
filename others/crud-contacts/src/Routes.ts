import { Router } from "express";
import UsersController from "./controllers/UsersController";
import ContactsController from "./controllers/ContactsController";
import AuthController from "./controllers/AuthController";
import authMiddleware from "./middlewares/authMiddleware";

const routes = Router();
const usersController = new UsersController();
const contactsController = new ContactsController();
const authController = new AuthController();

routes.post("/newuser", usersController.postUser);
routes.post("/authenticate", authController.authenticate);

routes.get("/getcontacts", authMiddleware, contactsController.getContacts);
routes.post("/newcontact", authMiddleware, contactsController.postContact);
routes.delete(
  "/deletecontact",
  authMiddleware,
  contactsController.deleteContact,
);
routes.put("/updatecontact", authMiddleware, contactsController.updateContact);
routes.delete("/deleteall", authMiddleware, contactsController.deleteAll);

export default routes;
