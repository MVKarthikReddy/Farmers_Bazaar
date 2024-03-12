const mangoose = require('mongoose')

const connectDb = async () => {
    try {
        // console.log(process.env.MONGO_URL)
        const connect = await mangoose.connect(process.env.MONGO_URL)
        console.log("connected to Mongo DB Atlas : ",connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb