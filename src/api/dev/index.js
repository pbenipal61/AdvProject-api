const express = require("express");
const { StationService } = require("../../services");
const router = new express.Router();

router.post("/addStations", async (req, res, next) => {
  const data = await StationService.addBatch(req.body);
  res.status(200).json(data);
});
router.post("/addStation", StationService.add);

module.exports = router;
