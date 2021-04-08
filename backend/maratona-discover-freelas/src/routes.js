const express = require("express");
const routes = express.Router();
const ProfileController = require("./controllers/ProfileController");
const JobController = require("./controllers/JobController");
const DashboarController = require("./controllers/DashboardController");

routes.get("/", DashboarController.index);
routes.get("/job-edit/:id", JobController.show);
routes.post("/job-edit/:id", JobController.update);
routes.post("/job-edit/delete/:id", JobController.delete);
routes.post("/job/delete/:id", JobController.delete);
routes.get("/job", JobController.create);
routes.post("/job", JobController.save);
routes.get("/profile", ProfileController.index);
routes.post("/profile", ProfileController.update);

module.exports = routes;
