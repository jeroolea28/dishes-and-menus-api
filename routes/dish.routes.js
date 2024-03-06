const express = require("express")
const router = express.Router()
const Dish = require('./../models/Dish.model')
const {isAuthenticated} = require('./../middleware/jwt.middleware')

router.post('/create', isAuthenticated, (req, res, next) => {

    const {name, description, ingredients, image, vegetarian, vegan, spicyness, price} = req.body

    Dish
        .create({name, description, ingredients, image, vegetarian, vegan, spicyness, price})
        .then(createdDish => res.status(201).json({ createdDish }))
        .catch(err => next(err))
})

router.put('/:id/edit', (req, res, next) => {

    const { id: dishId } = req.params

    const {name, description, ingredients, image, vegetarian, vegan, spicyness, price} = req.body

    Dish
        .findByIdAndUpdate(
            dishId, 
            {name, description, ingredients, image, vegetarian, vegan, spicyness, price}, 
            { new: true, runValidators: true })
        .then(updatedDish => res.json(updatedDish))
        .catch(err => next(err))
})

router.get('/allDishes', (req, res, next) => {

    Dish
        .find()
        .then(allDishes => { res.json(allDishes)})
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {

    const { id: dishId } = req.params

    Dish
        .findById(dishId)
        .then(dishInfo => res.json(dishInfo))
        .catch(err => next(err))

})

router.delete('/:id', (req, res, next) => {

    const { id: dishId } = req.params

    Dish
        .findByIdAndDelete(dishId)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
})

module.exports = router
