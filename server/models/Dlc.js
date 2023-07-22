const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    add: {
        type: Boolean
    }
},{
    timestamps: true
    })

module.exports = model('DLC', schema)
