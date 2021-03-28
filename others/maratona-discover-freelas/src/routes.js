const express = require("express");
const routes = express.Router();

const views = __dirname + "/views";

const profile = {
  name: "Pedro",
  avatar: "https://avatars.githubusercontent.com/u/54474627?s=60&v=4",
  "monthly-budget": 10000,
  "days-per-week": 7,
  "hours-per-day": 8,
  "vacations-per-year": 2,
};

routes.get("/", (req, res) => {
  return res.render(views + "/index");
});
routes.get("/job-edit", (req, res) => {
  return res.render(views + "/job-edit");
});
routes.get("/job", (req, res) => {
  return res.render(views + "/job");
});
routes.get("/profile", (req, res) => {
  return res.render(views + "/profile", { profile });
});

module.exports = routes;
