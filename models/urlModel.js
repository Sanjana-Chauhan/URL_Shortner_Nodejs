const mongoose=require("mongoose");

const urlSchema= new mongoose.Schema({
    ShortUrl:{
        type : String,
        required:true,
        unique:true
    },
    RedirectUrl: {
        type: String,
        required:true
    },
    VisitedHistory:[{type:Date,
        Visits: Number
    }]
})

const model=mongoose.model("Urls",urlSchema);

module.exports=model;