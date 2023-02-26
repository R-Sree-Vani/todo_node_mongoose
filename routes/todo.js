const { model } = require("mongoose")

const router = require("express").Router()

const Todo = require("../models/Todo")


router.post("/add/todo",(req,res)=>{
    
    const { todo } = req.body;
    const newTodo = new Todo({todo})


    newTodo.save()
    .then(()=>{
        console.log("Added it")
        res.redirect("/")
    })
    .catch((err) => console.log(err));
});


router.get("/delete/todo/:_id",(req,res)=>{
    const {_id} = req.params;


    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Deleted!")
        res.redirect("/");
    })
    .catch((err)=>console.log(err));
})

router.post("/edit/todo/:_id",(req,res)=>{
    const {_id} = req.params;
    Todo.findById({_id})
    .then((result)=>{
        console.log(result.todo)
        res.render("update",data=result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post("/update/todo/:_id",(req,res)=>{
    const {_id} = req.params;

    const {todo}=req.body;
    
    Todo.findOneAndUpdate({_id},{todo:req.body.todo})
    .then(()=>{
        console.log("Updated!")
        res.redirect("/");
    })
    .catch((err)=>console.log(err));


})

module.exports = router;