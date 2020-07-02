// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
      hbsObject = {
        username:"test",
        bodyText:"EMERGENCY!!!!",
        time: "2020-07-01 20:00",
        location: "Seattle"
      };
    res.render("userinput", hbsObject);
  });

};
