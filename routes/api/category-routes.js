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
      Category, {
        model: Tag,
        through: Product,
      }
    ]

  }).then((product) => {
    res.json(product);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req, body)
    .then((newCategory) => {
      res.json(newCategory);
    })

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    id: req.body.id,
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
});

module.exports = router;
