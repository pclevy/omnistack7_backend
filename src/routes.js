const express = require("express");

const routes = new express.Router();

routes.get("/", (req, res) => {
  return res.send(`Alô, Paulo C. ${req.query.name}`);
});

module.exports = routes;
