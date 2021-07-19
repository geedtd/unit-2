import { mongoose } from "mongoose"

const Schema = mongoose.Schema 

export {
    Recipe  
}

const recipeSchema = new Schema({
    name : {
        type: String,
    },
    imageURL : {
        type: String,
    },
    description: {
        type: String,
    },
    instructions : {
        type: String,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    country: {
        type: String,
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)