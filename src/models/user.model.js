import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({}, { timestamps: true });

export const Users = mongoose.model("User", userSchema);
