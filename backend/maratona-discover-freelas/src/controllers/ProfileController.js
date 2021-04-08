const Profile = require("../model/Profile");

module.exports = {
  index(req, res) {
    return res.render("profile", { profile: Profile.get() });
  },
  update(req, res) {
    const data = req.body;
    const weeksPerYear = 52;
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 125;
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
    const monthlyTotalHours = weekTotalHours * weeksPerMonth;
    data["value-hour"] = data["monthly-budget"] / monthlyTotalHours;
    Profile.update({ ...data });
    return res.redirect("/profile");
  },
};
