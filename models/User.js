import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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

// Métodos genéricos para el modelo de usuario
userSchema.statics.hashPwd = function (plainPwd) {
  return bcrypt.hash(plainPwd, 10)
}

export const User = model('User', userSchema)
