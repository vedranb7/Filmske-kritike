import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  title: String,
  info: String,
  creator: String,
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
