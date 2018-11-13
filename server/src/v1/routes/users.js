// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json({
//     status: 'success',
//     message: '🔥',
//   });
// });

// module.exports = router;

var User = require('../controllers/user');

// module.exports = api => {
//   api.route('/users').get(User.list);
// };

module.exports = function(api) {
  api.route('/users').get(User.list);
};
