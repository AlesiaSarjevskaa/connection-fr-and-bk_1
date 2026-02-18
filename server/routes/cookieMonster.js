const express = require('express');
const router = express.Router();

const cookieMonstersController = require("../controllers/cookieMonster");

router.get('/', cookieMonstersController.getAllCookieMonsters);

router.get('/:id', cookieMonstersController.getCookieMonsterById);

router.post('/', cookieMonstersController.createCookieMonster);

router.put('/:id', cookieMonstersController.updateCookieMonster);

router.delete('/:id', cookieMonstersController.deleteCookieMonster);

module.exports = router;

