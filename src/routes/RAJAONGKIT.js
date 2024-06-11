// router.js
const express = require("express");
const router = express.Router();
const request = require("request");
require("dotenv").config();

router.get("/province", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.rajaongkir.com/starter/province",

    headers: { key: process.env.RAJAONGKIR_API_KEY },
  };

  request(options, function (error, response, body) {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(body);
    }
  });
});

router.get("/city", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.rajaongkir.com/starter/city",

    headers: { key: process.env.RAJAONGKIR_API_KEY },
  };

  request(options, function (error, response, body) {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(body);
    }
  });
});

router.post("/cost", (req, res) => {
  const { origin, destination, weight, courier } = req.body;

  const options = {
    method: "POST",
    url: "https://api.rajaongkir.com/starter/cost",
    headers: {
      key: process.env.RAJAONGKIR_API_KEY,
      "content-type": "application/x-www-form-urlencoded",
    },
    form: {
      origin: origin,
      destination: destination,
      weight: weight,
      courier: courier,
    },
  };

  request(options, function (error, response, body) {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(body);
    }
  });
});

module.exports = router;
