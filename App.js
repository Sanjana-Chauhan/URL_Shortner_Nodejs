const express=require("express");
const App=express();

const urlRouter=require("./routes/urlRoutes");
App.use(express.json());

const PORT=5000;
App.listen(PORT,()=>{
    console.log("Server started at Port "+ PORT);
})