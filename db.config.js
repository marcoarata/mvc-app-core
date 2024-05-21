import mongoose from 'mongoose'

(async () => {
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL)
        console.log(`mongodb database: ${db.connection.name}`)
    }

    catch(error) {
        console.error(error)
    }
})()