const express = require('express');
const usersRoute = express.Router();
const User = require('./user')

usersRoute.get('/', async(req, res)=>{
        try{
            const users = await User.find({})
            if(users.length === 0 ){
                res.status(200).json({message: "user section is Empty!"})
            }else{
                res.status(200).json(users)
            }
            
        }catch(error){
            res.json(error)
        }
    })

    usersRoute.post('/', async(req, res)=>{
        const user = await User.findOne({email:req.body.email})
        if(user){
            res.status(409).json({message: "Given Email already exist!"})
        }else{
    
            try{
                const user = new User({
                    name: req.body.name,
                    email:req.body.email,
                })
                const createUser =  await user.save()
                res.status(201).json({
                    id: createUser._id,
                    name:createUser.name,
                    email:createUser.email,
                
                })
            }catch(error){
                res.status(400).json(error)
            }
        }
    
       
        
    })
    module.exports = usersRoute;