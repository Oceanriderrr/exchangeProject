const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const productSchema = new mongoose.Schema({
    productName:{type: String, },
    imageURL : {type: String,validate: validImage},
    shortDescription:{type: String,},
    description:{type: String, },
    specs:{type: String,},
    price:{type: Number, },
    vendor:{type: String, },


});

module.exports = new Model('Product', productSchema);