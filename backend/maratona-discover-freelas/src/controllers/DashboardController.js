const Job = require("../model/Job");
const JobUtils = require("../utils/jobUtils");
const Profile = require("../model/Profile");

module.exports = {
  async index(req, res) {
    const profile = await Profile.get();
    const jobs = await Job.get();
    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };
    let jobTotalHours = 0;
    const updatedJobs = jobs.map((job) => {
      const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
      const createdDate = new Date(job.created_at);
      const dueDay = createdDate.getDate() + Number(remainingDays);
      const dueDate = createdDate.setDate(dueDay);
      const timeDiffInMs = dueDate - Date.now();
      const dayInMs = 1000 * 60 * 60 * 24;
      const dayDiff = Math.ceil(timeDiffInMs / dayInMs);
      const status = dayDiff <= 0 ? "done" : "progress";
      statusCount[status] += 1;
      if (status === "progress") jobTotalHours += Number(job["daily-hours"]);
      return {
        ...job,
        remaining: dayDiff,
        status,
        budget: JobUtils.calculateBudget(job, profile["value-hour"]),
      };
    });
    const freeHours = profile["hours-per-day"] - jobTotalHours;

    return res.render("index", {
      jobs: updatedJobs,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours,
    });
  },
};
