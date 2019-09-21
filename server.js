var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile("./public/index.html")
})
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});