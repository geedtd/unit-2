import mongoose from 'mongoose'

export {
    Review
}

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId, 'ref' : 'Profile'
    }
})

const Review = mongoose.model('Review', reviewSchema)