const express = require('express');
const router = express.Router();

const authMiddleware = require("../middlewares/auth")
const dragonsController = require("../controllers/dragons");

/**
 * Endpoint - Get all dragons
 * Method: GET
 * URL: http://localhost:3000/dragons/
 */
router.get('/', authMiddleware.auth, authMiddleware.verifyOwnership, dragonsController.getAllDragons);

/**
 * Endpoint - Get dragon by ID
 * Method: GET
 * URL: http://localhost:3000/dragons/:id
 */
router.get('/:id',authMiddleware.checkRoles(["Owner", "Admin"]), dragonsController.getDragonById);

/**
 * Endpoint - Create dragon
 * Method: POST
 * URL: http://localhost:3000/dragons/
 */
router.post('/', dragonsController.createDragon);

/**
 * Endpoint - Update dragon
 * Method: PUT
 * URL: http://localhost:3000/dragons/:id
 */
router.put('/:id', dragonsController.updateDragon);

/**
 * Endpoint - Delete dragon
 * Method: DELETE
 * URL: http://localhost:3000/dragons/:id
 */
router.delete('/:id', dragonsController.deleteDragon);

module.exports = router;
