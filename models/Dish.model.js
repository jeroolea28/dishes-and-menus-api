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
        imageData:{
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
        spiciness: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: false
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Dish = model('Dish', dishSchema)

module.exports = Dish