import { Router } from "express";
import itemsRouter from "./items.js";
import itemDetailRouter from "./itemDetail.js";

const router = Router();

router.use("/items", itemsRouter);
router.use("/items", itemDetailRouter);

export default router;
