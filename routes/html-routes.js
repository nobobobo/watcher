// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var router = express.Router();
const db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) => {
    db.Post.findAll({}).then(feed => {
      res.render("userinput", feed);// need to figure out how to do order by 
    });
  });

};
