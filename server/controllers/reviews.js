import ReviewInfo from "../models/reviewInfo.js";

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

  const newReview = new ReviewInfo(review);
  try {
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
