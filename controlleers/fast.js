let fast  = require("../fast")
const {v4:uuidv4} = require("uuid")

const getFast=(req,res)=>{
    res.send(fast)
}

const getId=(req,res)=>{
        const fasts = fast.find((fast) => fast.id == req.params.id);
        res.send(fasts);
}

const getPost=(req,res)=>{
    const {name,study,age,height}=req.body
    const fasts = {
        id:uuidv4(),
        name:name,
        study:study,
        age:age,
        height:height
    }
    fast= [...fast,fasts] 
//    const fast = fasts.save()
//    if(err) throw err
   res.status(200).send(fasts)
}

const getUp=(req,res)=>{
    // const name=fast.find({name:req.body.name})
    fast=fast.map((fasts)=>(fasts.id!==req.params.id)?(fasts.id,fasts.name):fast)
    fast= fast.find((fasts)=>(fasts.id===req.params.id))
    res.send(fast)
}

const Delete=(req,res)=>{
        fast=fast.filter((fasts)=>fasts.id!==req.params.id)
        res.send({msg:"has remove"})
}


module.exports={
    getFast,
    getId,
    getPost,
    getUp,
    Delete,
}