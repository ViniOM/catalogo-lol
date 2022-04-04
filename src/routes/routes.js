const routes = require('express').Router();
const leagueController = require('../controllers/leagueController');

routes.get("/", leagueController.getAll);
routes.get("/signup", leagueController.signup);
routes.post("/create", leagueController.create);
module.exports = routes;