const express = require("express");
const app = express();
const {
  getAllMemes,
  postMemeToCollection,
  updateMemeTitle
} = require("./controller/memeController");
app.use(express.json());

app.get("/api/dem_memes", getAllMemes);
app.post("/api/dem_memes", postMemeToCollection);
app.put("/api/dem_memes/:id", updateMemeTitle);

const port = 9001;
app.listen(port, () => console.log(`server listening on port ${port}`));
