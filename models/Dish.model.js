const { Schema, model } = require("mongoose")

const dishSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        ingredients: {
            type: [String],
            required: true
        },  
        vegetarian: {
            type: Boolean,
            required: false
        },
        vegan: {
            type: Boolean,
            required: false
        },
        spicyness: {
            type: [String],
            enum: ['Not Spicy', 'Mild', 'Spicy', 'Very Spicy'],
            required: false
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Dish = model('Dish', dishSchema)

module.exports = Dish