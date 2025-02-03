const express=require("express");
const router=express.Router();
const {handleGenerateShortUrl ,handleRedirectUrl,handleAnalytics}=require("../controllers/urlControllers")


router.get("/urls",(req,res)=>{
    res.render("Home");
})
router.post("/urls", handleGenerateShortUrl);

//get/:shortid  -> HandleRedirectUrl -> using the shortid in the parameter get the original url and redirect to it .
router.get("/:shortUrl",handleRedirectUrl);

//get Logs-> Generate a json response containing the log of visited log.
router.get("/logs/:shortUrl", handleAnalytics);  


module.exports=router;