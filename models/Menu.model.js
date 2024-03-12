const { Schema, model } = require("mongoose")

const menuSchema = new Schema(
    {
        appetizers: [{
            type: Schema.Types.ObjectId,
            ref: 'Dish'
        }],
        mainDishes:[{
            type: Schema.Types.ObjectId,
            ref: 'Dish'
        }],
        desserts: [{
            type: Schema.Types.ObjectId,
            ref: 'Dish'
        }],
        drinks:  [{
            type: Schema.Types.ObjectId,
            ref: 'Dish'
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

const Menu = model("Menu", menuSchema);

module.exports = Menu