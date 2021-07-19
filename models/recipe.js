import { Mongoose } from "mongoose"

const Schema = mongoose.Schema 

export {
    Recipe  
}

const recipeSchema = {
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
    rev
}