import express from "express";
import routes from "./Routes";

const app = express();

app.use(express.json());
app.use("/", express.static("public"));
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
