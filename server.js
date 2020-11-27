const { cloudinary } = require("./lib/cloudinary");
const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));

app.post("/api/upload", async (request, response) => {
  try {
    const fileStr = request.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "upload",
    });
    console.log(uploadedResponse);
    response.status(200).send(uploadedResponse);
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

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
