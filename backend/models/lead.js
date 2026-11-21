
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
    required: true,
    enum: ["Website", "Instagram", "LinkedIn", "Referral", "Other"]
  },
  status: {
    type: String,
    enum: ["New", "Contacted", "Qualified", "Lost"],
    default: "New"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
}, { timestamps: true });

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
