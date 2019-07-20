// Express
var express = require("express");
// Set Handlebars.
var exphbs = require("express-handlebars");

var database = require("./models");

// var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
database.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
