const router = require('express').Router();
//import api routes
const apiRoutes = require('./api');
//direct to routes in api folder
router.use('/api', apiRoutes);
// otherwise alert of wrong route
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;