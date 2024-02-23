import express from "express";
import Fighter from "../models/Fighter";

const router = express.Router();

router.get("/data", async (req, res) => {
  try {
    const data = await Fighter.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;