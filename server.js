const fastify = require("fastify")({logger:true})
const PORT=3003
// const fasts= require("./fast")

fastify.register(require('fastify-swagger',{
    exposeRoute:true,
    routePrefix:"./docs",
    swagger:{
        info:{title:"fastify-api"}
    },
}))
fastify.register(require("./routes/fast"))

// fastify.get("/fast/:id",(req,res)=>{
//     const fast = fasts.find((fast)=>fast.id==req.params.id)
//     res.send(fast)
// })

// const fast = require("./fast")
// fastify.register("/",fast)

const server = async()=>{
    try {
        await fastify.listen(PORT)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
server()