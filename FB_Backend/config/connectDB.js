const mangoose = require('mongoose')

const connectDB = async () => {
    try {
        // console.log("hello")
        const connect = await mangoose.connect(process.env.MONGO_URL)
        console.log("Database connected : ",connect.connection.host,connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB