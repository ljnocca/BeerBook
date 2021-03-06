let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
var Favorites = require('../db/schema.js').Favorites
var Recommendations = require('../db/schema.js').Recommendations
 
 //----------------------------------- 
 //USERS
 //----------------------------------- 
  apiRouter
    .get('/users', function(req, res){
      User.find(req.query , "-password", function(err, results){
        if(err) return res.json(err) 
        res.json(results)
      })
    })

  apiRouter
    .get('/users/:_id', function(req, res){
      User.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err) 
        res.json(record)
      })
    })
    .put('/users/:_id', function(req, res){

      User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    .delete('/users/:_id', function(req, res){
      User.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })  
    })

 //----------------------------------- 
 //FAVORITES
 //----------------------------------- 
    
    apiRouter
      .get('/favorites', function(request, response){
        console.log(request.query)
        Favorites.find(request.query, function(error, records){
          if (error){
            return response.status(400).json(error)
          }
          response.json(records)
        })
      })

      .post('/favorites', function(request,response){
        var newFavorite = new Favorites(request.body)
        newFavorite.save(function(error,record){
          if (error){
            return response.status(400).json(error)
          }
          response.json(record)
        })
      })

      .delete('/favorites/:favID', function(request,response){
        Favorites.remove({_id: request.params.favID}, function(error){
          if (error){
            return response.status(400).json(error)
          }
          response.json({
            msg: `Favorite with id ${request.params.favID} has been deleted.`,
            id: request.params.favID
          })
        })
      })

      .put('/favorites/:favID', function(request,response){
        Favorites.findByIdAndUpdate(request.params.favID,request.body,{new: true}, function(error, record){
          if (error){
            console.log(response)
            return response.status(400).json(error)
          }
          response.json(record)
        })
      })

 //----------------------------------- 
 //RECOMMENDATIONS
 //----------------------------------- 

    apiRouter
      .get('/recommendations', function(request, response){
        Recommendations.find(request.query).populate('targetUser recommendingUser beerFave').exec(function(error, records){
          if (error){
            return response.status(400).json(error)
          }
          response.json(records)
        }) 
      })

      .post('/recommendations', function(request,response){
        var newRecommendation = new Recommendations(request.body)
        newRecommendation.save(function(error,record){
          if (error){
            return response.status(400).json(error)
          }
          response.json(record)
        })
      })

      .delete('/recommendations/:recID', function(request,response){
        Recommendations.remove({_id: request.params.recID}, function(error){
          if (error){
            return response.status(400).json(error)
          }
          response.json({
            msg: `Recommendation with id ${request.params.recID} has been deleted.`,
            id: request.params.recID
          })
        })
      })

      .put('/recommendations/:recID', function(request,response){
        Recommendations.findByIdAndUpdate(request.params.recID,request.body,{new: true}, function(error, record){
          if (error){
            console.log(response)
            return response.status(400).json(error)
          }
          response.json(record)
        })
      })

module.exports = apiRouter