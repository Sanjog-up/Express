const products = [
     {
      _id: 1, 
      name: "Ipad",
      model: "ipad 3",
    },
    {
      _id: 2,
      name: "pant",
      size: "30",
    },
]



exports.getAll = (req, res) => {
    res.status(200).json({
        message: "All products fetched",
        data: products,
})
};

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

