const express = require('express');
const path = require('path');

const app = express();



app.use(express.static(path.join(__dirname, './client/build')));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server is up and running on port 3000.");
});