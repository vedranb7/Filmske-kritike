import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  title: String,
  review: String,
  rating: Number,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ReviewInfo = mongoose.model("ReviewInfo", reviewSchema);

export default ReviewInfo;
