const path = require("path");
const hbs = require("hbs")
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/*", (req, res) => {
  res.render("404page", {
    errorMsg : "Ooops! Page not found"
  });
});

app.listen(port, () => {
  console.log(`LISTENING ON THE PORT ${port}`);
});
