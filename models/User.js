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
userSchema.statics.hashPwd = function (plainTextPwd) {
  return bcrypt.hash(plainTextPwd, 10)
}

userSchema.methods.comparePassword = function (plainTextPwd) {
  return bcrypt.compare(plainTextPwd, this.password)
}

export const User = model('User', userSchema)
