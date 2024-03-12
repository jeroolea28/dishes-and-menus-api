const express = require("express")
const router = express.Router()
const Dish = require('./../models/Dish.model')
const Menu = require('./../models/Menu.model')

router.post('/create', (req, res, next) => {

    const { name, appetizers, mainDishes, desserts, drinks } = req.body

    Menu
        .create({name, appetizers, mainDishes, desserts, drinks })
        .then(createdMenu => res.status(201).json(createdMenu))
        .catch(err => next(err))
})

router.put('/:id/edit', (req, res, next) => {

    const { id: menuId } = req.params
    const { appetizers, mainDishes, desserts, drinks, owner } = req.body

    Menu
        .findByIdAndUpdate(
            menuId,
            { appetizers, mainDishes, desserts, drinks, owner },
            { new: true, runValidators: true }
        )
        .then(updatedMenu => res.json(updatedMenu))
        .catch(err => next(err))
})

router.get('/', (req, res, next) => {

    Menu
        .find()
        .populate('appetizers mainDishes desserts drinks owner')
        .then(allMenus => res.json(allMenus))
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    const { id: menuId } = req.params

    Menu
        .findById(menuId)
        .populate('appetizers mainDishes desserts drinks owner')
        .then(menu => res.json(menu))
        .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
    const { id: menuId } = req.params

    Menu
        .findByIdAndDelete(menuId)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
})

module.exports = router
