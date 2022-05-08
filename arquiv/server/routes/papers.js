const router = require('express').Router();
let Papers = require('../models/papers.model');

router.route('/').get((req, res) => {
  Papers.find()
    .then(papers => res.json(papers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const abstract = req.body.abstract;

  const newPaper = new Papers({
    title,
    author,
    abstract,
  });