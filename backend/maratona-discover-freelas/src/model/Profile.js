let data = {
  name: "Pedro",
  avatar: "https://avatars.githubusercontent.com/u/54474627?s=60&v=4",
  "monthly-budget": 10000,
  "days-per-week": 2,
  "hours-per-day": 10,
  "vacation-per-year": 2,
  "value-hour": 75,
};

module.exports = {
  get() {
    return data;
  },
  update(newData) {
    data = newData;
  },
};
