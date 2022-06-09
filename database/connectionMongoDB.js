import mongoose from 'mongoose'

// Manejo de errores de la conexión inicial.
try {
  await mongoose.connect(process.env.MONGO_URI)
  console.log(`MongoDB conectado. \nBD: ${mongoose.connection.name}`)
} catch (error) {
  console.log(`Error de conexión inicial: ${error}`)
}

// Manejo de posibles errores después de la conexión inicial
mongoose.connection.on('error', (error) => {
  console.log(`Error de conexión con la BD: ${error}`)
  process.exit(1)
})
