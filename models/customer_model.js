import mongoose from 'mongoose'

// Mongoose Schema

const customer_schema = new mongoose.Schema({
    name: String,
    rut: String,
    email: String,
    whatsapp: String
}, { versionKey: false })

// Create Interfase Model

const Customer = mongoose.model('Customer', customer_schema)

export default Customer