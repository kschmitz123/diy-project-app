require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { connect } = require("./lib/database");
const projects = require("./lib/routes/projects");
const browse = require("./lib/routes/browse");
const categories = require("./lib/routes/categories");
const users = require("./lib/routes/users");

const port = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

app.use("/api/projects", projects);
app.use("/api/browse", browse);
app.use("/api/categories", categories);
app.use("/api/users", users);

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  try {
    await connect(process.env.MONGODB_URL, process.env.MONGODB);
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}
run();
