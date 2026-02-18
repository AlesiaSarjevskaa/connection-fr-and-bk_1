const express = require('express');
const router = express.Router();

const cartRacersController = require("../controllers/cartRacer");

router.get('/', cartRacersController.getAllCartRacers);

router.get('/:id', cartRacersController.getCartRacerById);

router.post('/', cartRacersController.createCartRacer);

router.put('/:id', cartRacersController.updateCartRacer);

router.delete('/:id', cartRacersController.deleteCartRacer);

module.exports = router;

