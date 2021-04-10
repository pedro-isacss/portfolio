const Profile = require("../model/Profile");

module.exports = {
  async index(req, res) {
    const profile = await Profile.get();
    return res.render("profile", { profile: profile });
  },
  async update(req, res) {
    const data = req.body;
    const weeksPerYear = 52;
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 125;
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;
    data["value-hour"] = data["monthly-budget"] / monthlyTotalHours;
    await Profile.update({ ...data });
    return res.redirect("/profile");
  },
};
