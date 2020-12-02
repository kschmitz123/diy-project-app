require("dotenv").config();
const { cloudinary } = require("./lib/cloudinary");
const express = require("express");
const app = express();
const path = require("path");
const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const { connect } = require("./lib/database");

const port = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

app.post("/api/upload", async (request, response) => {
  try {
    const fileStr = request.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "upload",
      width: 2000,
      height: 1800,
      crop: "limit",
    });
    console.log(uploadedResponse.secure_url);
    response.status(200).send(uploadedResponse.secure_url);
  } catch (error) {
    console.error(error);
    response.status(500).send("An error occured");
  }
});

app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.use("/api", router);
app.use(middlewares);

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
