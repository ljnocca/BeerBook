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
	beerName: {type: String, required: true},
  beerLabel: {type: String, required: true},
  beerStyle: {type: String, required: false},
  beerABV: {type: String, required: false},
  beerIBU: {type: String, required: false},
  beerDescription: {type: String, required: false},
  beerFoodPairing: {type: String, required: false},
  beerOrganic: {type: String, required: false}
})

// const recommendationsSchema = new mongoose.Schema({
// 	beerName: { type: mongoose.Schema.types.objectId, 
//               ref: 'Favorites',
//               required: true
//             }
// })

module.exports = {
  User: mongoose.model('User', usersSchema),
  Favorites: mongoose.model('Favorites', favoritesSchema),
}

//require or optional
//only recommmend from your favorites
