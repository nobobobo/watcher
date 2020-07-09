const db = require("../models");
const { sequelize, literal, Op } = require('sequelize');
const moment = require('moment');

module.exports = function (app) {
    app.get("/api/feeds", (req, res) => {
        const userlat = req.body.lat;
        const userlng = req.body.lng;

        // SELECT * FROM Posts WHERE DATEDIFF(CURDATE, createdAt) <= 7 ORDER BY POWER((lat-userLat),2) + POWER((lng-userlng),2) ASC;
        db.Post.findAll({
            where: [{
                createdAt: {
                    [Op.gt]: moment().subtract(7, 'days').toDate()
                }
            }],
            order: [
                [literal(`POWER((lat-${userlat}),2) + POWER((lng-${userlng}),2) ASC`)]
            ]
        }
        ).then(feeds => res.json(feeds));
    });

    app.post("/api/feeds", (req, res) => {

        // req.body format: 
        // {
        //     userName: "Nobo",
        //     body: "HELP!",
        //     lat: 39.807222,
        //     lng: -76.984722
        // }

        db.Post.create(req.body

        ).then(feed => res.json(feed));
    })

}