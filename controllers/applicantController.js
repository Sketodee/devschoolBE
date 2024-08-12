const  Applicant = require('../model/Applicant')
const validator = require('../config/validator')
const response = require('../config/response')
const helper = require('../config/helpers')

const apply = async (req, res) => {
    const {error, value} = validator.validateApplicant(req.body)

    if(error) {
        const validationErrors = error.details.map((err) => err.message)
        return res.status(400).json({'Validation Errors': validationErrors})
    }

    try {
        //add items 
        const result = await Applicant.create({...value})
        //send email 
        const emailResult = await helper.sendEmail(value.email)
        return res.status(201).json(response(true, "Application Successful", null, null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(response(false, "Error creating application", null, null))
    }
}

const getAllApplicants = async (req, res) => {
    const applicants = await Applicant.find();
    if(!applicants) return res.sendStatus(204)
      res.json(response(true, "Applicants fetched", null, applicants))
  }




module.exports= {
    apply, 
    getAllApplicants
}