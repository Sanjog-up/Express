const Products = require("../models/product.model"); 

exports.getAll = async (req, res) => {
    try {
    const products = await Products.find({});
    res.status(200).json({
        message: "All products fetched",
        data: products,
})
} catch (error)  {
res.status(500).json({
    message: "something went wrong",
    data: null,
});
};
};

exports.createProduct = async(req, res) => {
    try {
        const product = await Products.create(req.body);
        res.status(201).json({
            message: "Product created",
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            data: null,
        });
    }
}


exports.getProductById = (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    // db query
    //  const user = users.find((user) => user._id.toString() === id.toString());
    const index = products.findIndex(
        (product) => product._id.toString() === id.toString(),
    )
    if (index === -1) {
        return res.status(404).json({
            message: "Product not found",
            data: null,
        });
        return;
    }
    res.status(200).json({
        message: "Product fetched",
        data: products[index],
    });
}

