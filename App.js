const express=require("express");
const App=express();
const connectdb=require("./connect");
const urlRouter=require("./routes/urlRoutes");

App.use(express.json());
App.use(express.urlencoded({extended:true}));


App.set("view engine","ejs");
App.set("views","./views");

App.use("/",urlRouter);

connectdb("mongodb+srv://Sanjana:sanjana@cluster0.bd5mh.mongodb.net/urls").then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})

const PORT=5000;
App.listen(PORT,()=>{
    console.log("Server started at Port "+ PORT);
})