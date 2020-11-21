import { Router } from "express";
import ContactsController from "./controllers/ContactsController";

const routes = Router();
const contactsController = new ContactsController();

routes.get("/getcontacts", contactsController.getContacts);
routes.post("/newcontact", contactsController.postContact);
routes.delete("/deletecontact", contactsController.deleteContact);
routes.put("/updatecontact", contactsController.updateContact);
routes.delete("/deleteall", contactsController.deleteAll);

export default routes;
