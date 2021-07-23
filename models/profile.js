import mongoose from 'mongoose'

export {
  Profile
}

const detailSchema = new mongoose.Schema({
  location: String,
  likes: String,
  dislikes: String,
  allergies: String,
  favoriteCuisine: String,
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  details: [detailSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)