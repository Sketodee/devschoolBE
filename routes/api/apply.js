const express = require('express')
const router = express.Router()
const applicantController = require('../../controllers/applicantController')

router.route('/newapplication')
    .post(applicantController.apply)


module.exports = router