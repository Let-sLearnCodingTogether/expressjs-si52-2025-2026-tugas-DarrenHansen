import mongoose from "mongoose";

const BelajarSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  learningDate: {
    type: Date,
    required: true,
  },
});

const BelajarModel = mongoose.model("Belajar", BelajarSchema);

export default BelajarModel;