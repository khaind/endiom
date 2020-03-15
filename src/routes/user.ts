import {Router} from "express";
import UserController from "../controllers/UserController";

const router = Router();

// Get all
router.get("/", [], UserController.getAll);

// Get by id
router.get(
  "/:id([0-9]+)",
  [],
  UserController.getOneById
);

// Create new user
router.post("/", [], UserController.createUser);

export default router;