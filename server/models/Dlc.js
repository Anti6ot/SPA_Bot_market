const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    add: {
        type: Boolean
    },
    pageId: { type: Schema.Types.ObjectId, ref: 'User', required: true}
},{
    timestamps: true
    })

module.exports = model('DLC', schema)

