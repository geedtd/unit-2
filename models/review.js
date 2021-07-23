import mongoose from 'mongoose'

export {
    Review
}

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    review: {
        type: Array,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId, 'ref' : 'Profile'
    }
})

const Review = mongoose.model('Review', reviewSchema)