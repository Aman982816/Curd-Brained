const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        res.json("server is working please use correct route")
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message })
    }

})




module.exports = router