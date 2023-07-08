const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {generateUserData} = require("../utils/helpers")
const tokenService = require('../services/token.service')
const {check, validationResult} = require("express-validator");



router.post('/signUp', [

    check('email', 'Некорректная почта').isEmail(),
    check('password', 'Минимальная длина пароля 8 символов').isLength({min:8}),


    async (req, res)=>{

    try{

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                error: {
                    message: 'INVALID_DATA',
                    code: 400,
                    errors: errors
                }
            })
        }

        const {email, password} = req.body
        const exitingUser = await User.findOne({email})
        if(exitingUser){
            return res.status(400).json({
                error: {
                    message: 'EMAIL_EXISTS',
                    code: 400
                }
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            ...generateUserData(),
            ...req.body,
            password: hashedPassword,
        })
        const tokens = tokenService.generate({ _id: newUser._id})
        await tokenService.save(newUser._id, tokens.refreshToken)

        res.status(201).send({...tokens, userId: newUser._id})



    }catch (e) {
        res.status(500).json({
            message: `На сервере произошла ошибка. Попробуйте позже`
        })
    }
    
}])
router.post('/signInWithPassword', async (req, res)=>{

})
router.post('/token', async (req, res)=>{

})

module.exports = router
