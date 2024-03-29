const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Define a unique compound index on userId and productId
bagSchema.index({ userId: 1, productId: 1 }, { unique: true });


module.exports = mongoose.model('bags',bagSchema);