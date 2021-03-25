const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [ProductTag]
  }).then((product) => {
    res.json(product);
  });

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne((req.body.id), {
    include: [ProductTag]
  }).then((product) => {
    res.json(product);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req, body)
    .then((newTag) => {
      res.json(newTag);
    })


});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Tag.update({
    id: req.body.id,
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })

});

module.exports = router;
