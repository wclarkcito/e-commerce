const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag,
      }]
    }).then((tagInfo) => {
      res.status(200).json(tagInfo);
    });
    // res.status(200).json(tagInfo);
  } catch (err) {
    res.status(500).json(err)
  }

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          through: ProductTag,
        }
      ]



    }).then((tagInfo) => {
      res.status(200).json(tagInfo);
    });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      res.status(200).json(newTag);

    })
    .catch(err => {
      res.status(400).json(err)
    });

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  Tag.update({
    tag_name: req.body.tag_name
  },
    {
      where: {
        id: req.params.id
      }
    }).then(newTag => {
      res.status(200).json(newTag)

    })
    .catch(err => {
      res.status(400).json(err)
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    }
  })
    .then(newDelete => {
      res.status(200).json(newDelete)

    })
    .catch(err => {
      res.status(400).json(err)
    });
});

module.exports = router;
