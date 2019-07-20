var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.BurgerTable.findAll({}).then(function (result) {
            res.json(result);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.BurgerTable.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (newBurger) {
            res.json(newBurger);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.BurgerTable.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id
            }
            }).then(function (devouredBurger) {
                res.json(devouredBurger);
            });    
    });
};
