const Joi = require('joi')

const validateApplicant = (applicant) => {
    const orderDtoSchema = Joi.object({
        surname: Joi.string().required().messages({
            'any.required': 'Surname date is required',
            'string.empty': 'Surname date cannot be empty'
        }),
        firstName: Joi.string().required().messages({
            'any.required': 'First Name is required',
            'string.empty': 'First Name cannot be empty'
        }),
        course: Joi.string().required().messages({
            'any.required': 'Course is required',
            'string.empty': 'Course cannot be empty'
        }),
        email: Joi.string().email().required().messages({
            'any.required': 'Email is required',
            'string.empty': 'Email cannot be empty',
            'string.email': 'Invalid email format'
        }), 
        phone: Joi.string().pattern(/^[0-9]+$/).required().messages({
            'any.required': 'Phone number is required',
            'string.empty': 'Phone number cannot be empty',
            'string.pattern.base': 'Phone number must contain only digits'
        })
    })

    return orderDtoSchema.validate(applicant, {abortEarly: false})
}

module.exports = {
    validateApplicant
}