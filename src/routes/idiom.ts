import {Router} from "express";
import IdiomController from "../controllers/IdiomController";

const router = Router();

// Get all
router.get("/", [], IdiomController.getAll);

// Get by id
router.get(
  "/:id([0-9]+)",
  [],
  IdiomController.getOneById
);

// Random a idiom
router.get(
  "/any",
  [],
  IdiomController.getOneRandom
);

// Create new user
router.post("/", [], IdiomController.createIdiom);

export default router;