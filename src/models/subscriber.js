import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
  followUpSent: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", subscriberSchema);
