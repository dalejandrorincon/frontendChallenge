import express from "express";
import { getItems } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", getItems);

export default router;