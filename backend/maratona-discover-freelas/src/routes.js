const express = require("express");
const routes = express.Router();

const views = __dirname + "/views";

const Job = {
  data: [
    {
      id: 1,
      name: "Freela 1",
      "daily-hours": 2,
      "total-hours": 1,
      created_at: Date.now(),
    },
    {
      id: 2,
      name: "Freela 3",
      "daily-hours": 2,
      "total-hours": 30,
      created_at: Date.now(),
    },
  ],
  controllers: {
    index(req, res) {
      const updatedJobs = Job.data.map((job) => {
        const remainingDays = (
          job["total-hours"] / job["daily-hours"]
        ).toFixed();
        const createdDate = new Date(job.created_at);
        const dueDay = createdDate.getDate() + Number(remainingDays);
        const dueDate = createdDate.setDate(dueDay);
        const timeDiffInMs = dueDate - Date.now();
        const dayInMs = 1000 * 60 * 60 * 24;
        const dayDiff = Math.floor(timeDiffInMs / dayInMs);
        const status = dayDiff <= 0 ? "done" : "progress";
        return {
          ...job,
          remaining: dayDiff,
          status,
          budget: Job.services.calculateBudget(job, Profile.data["value-hour"]),
        };
      });
      return res.render(views + "/index", { jobs: updatedJobs });
    },
    create(req, res) {
      return res.render(views + "/job");
    },
    save(req, res) {
      const job = req.body;
      job.created_at = Date.now();
      const lastId = Job.data[Job.data.length - 1]?.id || 0;
      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now(),
      });
      return res.redirect("/");
    },
    show(req, res) {
      const jobId = req.params.id;
      const job = Job.data.find((job) => Number(job.id) === Number(jobId));
      if (!job) return res.send("Job not found");
      job.budget = Job.services.calculateBudget(
        job,
        Profile.data["value-hour"]
      );
      return res.render(views + "/job-edit", { job });
    },
    update(req, res) {
      const jobId = req.params.id;
      const job = Job.data.find((job) => Number(job.id) === Number(jobId));
      if (!job) return res.send("Job not found");
      const updatedJob = {
        ...job,
        name: req.body.name,
        "total-hours": req.body["total-hours"],
        "daily-hours": req.body["daily-hours"],
      };
      Job.data = Job.data.map((job) => {
        if (Number(job.id) === Number(jobId)) {
          job = updatedJob;
        }
        return job;
      });
      res.redirect("/job-edit/" + jobId);
    },
    delete(req, res) {
      const jobId = req.params.id;
      Job.data = Job.data.filter((job) => Number(job.id) !== Number(jobId));
      return res.redirect("/");
    },
  },
  services: {
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
  },
};

const Profile = {
  data: {
    name: "Pedro",
    avatar: "https://avatars.githubusercontent.com/u/54474627?s=60&v=4",
    "monthly-budget": 10000,
    "days-per-week": 2,
    "hours-per-day": 2,
    "vacation-per-year": 2,
    "value-hour": 75,
  },
  controllers: {
    index(req, res) {
      return res.render(views + "/profile", { profile: Profile.data });
    },
    update(req, res) {
      const data = req.body;
      const weeksPerYear = 52;
      const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 125;
      const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;
      data["value-hour"] = data["monthly-budget"] / monthlyTotalHours;
      Profile.data = data;
      return res.redirect("/profile");
    },
  },
};

routes.get("/", Job.controllers.index);
routes.get("/job-edit/:id", Job.controllers.show);
routes.post("/job-edit/:id", Job.controllers.update);
routes.post("/job-edit/delete/:id", Job.controllers.delete);
routes.post("/job/delete/:id", Job.controllers.delete);
routes.get("/job", Job.controllers.create);
routes.post("/job", Job.controllers.save);
routes.get("/profile", Profile.controllers.index);
routes.post("/profile", Profile.controllers.update);

module.exports = routes;
