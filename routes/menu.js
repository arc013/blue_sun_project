var menus = require('../menu.json');

exports.view = function(req, res) {
  res.render('menu', menus);
}
