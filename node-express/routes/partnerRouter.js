const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partner");
  })
  .delete((req, res) => {
    res.end("Deleting all partner");
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send you: ${req.params.partnerId} partner`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /partners/:partnerId");
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners/:partnerId");
  })
  .delete((req, res) => {
    res.end(`Deleting: ${req.params.partnerId}`);
  });

module.exports = partnersRouter;
