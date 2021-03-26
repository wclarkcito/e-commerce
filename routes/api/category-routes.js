const router = require('express').Router();
const { Category, Product, ProductTag, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  //be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((product) => {
    res.json(product);
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
      // Category, {
      //   model: Product,
      //   // through: Product,
      // }
    ]

  }).then((product) => {
    res.status(200).json(product);

  }).catch(err => {
    res.status(400).json(err)
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)

    .then((newCategory) => {
      res.status(200).json(newCategory);

    }).catch(err => {
      res.status(400).json(err)
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then((category) => {
      res.status(200).json(category);

    }).catch(err => {
      res.status(400).json(err)
    });

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    }
  })

    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);

    }).catch(err => {
      res.status(400).json(err)
    });
});

module.exports = router;
