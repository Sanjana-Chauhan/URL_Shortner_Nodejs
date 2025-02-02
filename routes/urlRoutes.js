const express=require("express");
const router=express.Router();
//require nanoid or shortid
//require url schema
router.post("/",(req,res,next)=>{ //handleGenerateShortURL
    const body=req.body;
    const URL=body.RedirectURL;

    if(!URL){
        //send res saying bad request
    }
    else{
        // generate short id using shortid() module
        //generate entry using url schema and store in the database

        //response in json with short id generated for the url.
    }       
});

//get/:shortid  -> HandleRedirectUrl -> using the shortid in the parameter get the original url and redirect to it .

//get Logs-> Generate a json response containing the log of visited log.

module.exports=router;