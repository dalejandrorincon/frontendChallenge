import express from "express";
import { getItemDetail } from "../controllers/itemDetailController.js";

const router = express.Router();

router.get("/:id", getItemDetail);

export default router;
