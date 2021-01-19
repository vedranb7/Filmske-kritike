import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  title: String,
  review: String,
  rating: Number,
  tags: [String],
  poster: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ReviewInfo = mongoose.model("ReviewInfo", reviewSchema);

export default ReviewInfo;
