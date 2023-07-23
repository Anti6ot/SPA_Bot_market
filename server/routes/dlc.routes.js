const express = require("express");
const router = express.Router({ mergeParams: true });
const Dlc = require("../models/Dlc");

router.get("/", async (req, res) => {
  try {
    const list = await Dlc.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message: `На сервере произошла ошибка. Попробуйте позже`,
    });
  }
});

module.exports = router;
