import ReviewInfo from "../models/reviewInfo.js";
import mongoose from "mongoose";

export const getReviews = async (req, res) => {
  try {
    const reviewInfos = await ReviewInfo.find();

    res.status(200).json(reviewInfos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReview = async (req, res) => {
  const review = req.body;

  const newReview = new ReviewInfo({
    ...review,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  const { id: _id } = req.params;
  const review = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Nema kritike s tim ID-em");

  const updatedReview = await ReviewInfo.findByIdAndUpdate(
    _id,
    { ...review, _id },
    {
      new: true,
    }
  );

  res.json(updatedReview);
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Nema kritike s tim ID-em");

  await ReviewInfo.findByIdAndRemove(id);

  res.json({ message: "Kritika uspješno obrisana." });
};
