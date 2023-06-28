const express= require("express")
const router= express.Router()

router.post("/login", async (req,res,next) =>{

try{

    //TAKE THE USERS EMAIL AND PASSWORD AND ATTEMPT TO AUTHITICATE 
} catch(err){
    next(err)
}



})

router.post("/register", async (req, res, next) =>
{
    try{

        //TAKE USER EMAIL, PASSWORD, AND CREATE A NEW USER IN DATABASE
    }catch(err) {
        next(err)
    }




})





module.exports=router