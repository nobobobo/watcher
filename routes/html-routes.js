// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

var router = express.Router();
const db = require("../models");
const { sequelize, literal, Op } = require('sequelize');
const moment = require('moment');

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", (req, res) => {
    if (req.query.lat === undefined) {
      res.render("userinput", []);
    } else {
      const userlat = req.query.lat;
      const userlng = req.query.lng;

      db.Post.findAll({
        where: [{
          createdAt: {
            [Op.gt]: moment().subtract(7, 'days').toDate()
          }
        }],
        order: [
          [literal(`POWER((lat-${userlat}),2) + POWER((lng-${userlng}),2) ASC`)],
          ['updatedAt', 'DESC']
        ]
      }
      ).then(function (posts) {
        data = [];
        posts.forEach(element => data.push(element.dataValues));
        data.forEach(feed =>{
            let time = moment(feed.createdAt).calendar(); 
            feed.time = time;
        });
        res.render("userinput", { posts: data });
      });
    }
  });

};
