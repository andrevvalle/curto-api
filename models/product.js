var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var product = new Schema({
        id: {type: Number, required: true},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number}
    },
    {
        versionKey: false
    });

module.exports = mongoose.model('Product', product);
