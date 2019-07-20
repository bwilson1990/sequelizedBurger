module.exports = function (sequelize, DataTypes) {
  var BurgerTable = sequelize.define("burgers_table", {
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return BurgerTable;
}

// var orm = require("../config/orm.js");

// var burger = {
//     all: function(cb) {
//       orm.all(function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(vals) {
//       orm.create(vals, function(res) {
//       });
//     },
//     update: function(vals) {
//       orm.update(vals, function(res) {
//       });
//     }

// };
  
