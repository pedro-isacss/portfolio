let data = [
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
];

module.exports = {
  get() {
    return data;
  },
  update(newData) {
    data = newData;
  },
  delete(id) {
    data = data.filter((job) => Number(id) !== Number(job.id));
  },
};
