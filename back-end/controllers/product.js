const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },
    getOne: (req,res,next) => {
        const productId = req.params.productId;
        models.Product.findById(productId).then((products)=> res.send(products)).catch(next);
    },
    post: {

        createProduct: (req, res, next) => {
        const { productName } = req.body;
        const { price } = req.body;
        const { description } = req.body;
        const { vendor } = req.body;
        const { collections } = req.body;
        const { imageURL } = req.body;
        const { _id } = req.user;

        models.Product.create({ productName, price, description, vendor, collections , imageURL })
            .then((createdProduct) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdProduct } }),
                    models.Product.findOne({ _id: createdProduct._id })
                ]);
            })
            .then(([modifiedObj, productObj]) => {
                res.send(productObj);
            })
            .catch(next);
        },



    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Product.updateOne({ _id: id }, { description })
            .then((createdProduct) => res.send(createdProduct))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Product.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }
};