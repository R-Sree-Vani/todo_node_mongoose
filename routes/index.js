const router = require("express").Router()
const Todo = require("../models/Todo")


//routes 



router.get("/",async(req,res)=>{
    const allTodo = await Todo.find().sort({createdAt:-1})

    //rendering ejs file
    res.render("index",{todo:allTodo})
})



module.exports = router;