const Card = require("./models/Card");

module.exports = {
  newCard: function(req, res) {
    let tempCard = {
      question: req.body.question,
      answer: req.body.answer
    };
    Card.create(tempCard)
      .then(card => res.json(card))
      .catch(err => res.status(422).json(err));
  },
  getAll: function(req, res) {
    Card.find()
      .then(card => {
        res.json(card);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
