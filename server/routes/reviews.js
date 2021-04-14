import express from "express";
import auth from "../middleware/auth.js";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviews.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", auth, createReview);
router.patch("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);

export default router;
