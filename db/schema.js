const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  name:      { type: String, required: true },
  homeTown: { type: String},
  createdAt: { type: Date, default: Date.now }
})

const favoritesSchema = new mongoose.Schema({
	beerName: {type: String, required: true}
})

const recommendationsSchema = new mongoose.Schema({
	beerName: { type: String, required: true}
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Favorites: mongoose.model('Favorites', favoritesSchema),
  Recommendations: mongoose.model('Recommendations', recommendationsSchema)
}
