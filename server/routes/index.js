const express = require('express')
const router = express.Router({mergeParams: true})

router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))
router.use('/dlc', require('./dlc.routes'))
router.use('/quality', require('./quality.routes'))


module.exports = router
