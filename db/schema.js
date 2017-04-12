const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  name:      { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const favoritesSchema = new mongoose.Schema({
  userName: {type: String, required: true},
  userId: {type: String, required: true},
	name: {type: String, required: true},
  labels: {type: mongoose.Schema.Types.Mixed},
  style: {type: mongoose.Schema.Types.Mixed},
  available: {type: mongoose.Schema.Types.Mixed},
  abv: {type: mongoose.Schema.Types.Mixed},
  ibu: {type: mongoose.Schema.Types.Mixed},
  description: {type: mongoose.Schema.Types.Mixed},
  foodPairings: {type: mongoose.Schema.Types.Mixed},
  isOrganic: {type: mongoose.Schema.Types.Mixed},
  createdAt: {type: Date, default: Date.now}, 
})

const recommendationsSchema = new mongoose.Schema({
  recommendingUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  targetUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  beerFave: {type: mongoose.Schema.Types.ObjectId, ref: 'Favorites', required: true},
  createdAt: {type: Date, default: Date.now}
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Favorites: mongoose.model('Favorites', favoritesSchema),
  Recommendations: mongoose.model('Recommendations', recommendationsSchema)
}
