import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAunthicated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAunthicated, newTask);

router.get("/my", isAunthicated, getMyTask);

router
  .route("/:id")
  .put(isAunthicated, updateTask)
  .delete(isAunthicated, deleteTask);

export default router;
