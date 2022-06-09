import mongoose from 'mongoose'
// import bcrypt from 'bcryptjs/dist/bcrypt'

const { Schema, model } = mongoose
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    password: { type: String, required: true },
  },
  {
    collection: 'Users',
  }
)

export const User = model('User', userSchema)
