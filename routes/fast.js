const fasts = require("../fast");
const {getFast,getId,getPost,getUp,Delete}=require("../controlleers/fast")

const fast = {
  type: "object",
  properties: {
    // id:{ type: "string" }, 
    name: { type: "string" },
  },
};

const getFastOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        fast: fast,
      },
    },
  },
  handler:getFast,
};

const getIdOpt = {
  schema: {
    response: {
      200: fast,
    },
  },
  handler:getId,
};

const getPostOpt = {
    schema: {
      response: {
        200: fast,
      },
    },
    handler:getPost,
  };

const delOpt={
    schema:{
        response:{
            200:{
                type:"object",
                properties:{
                    message:{type:"string"},
                },
            },
        },
    },
    handler:Delete,
}

const getPutOpt={
    schema: {
        response: {
          200: {
            type: "array",
            fast: fast,
          },
        },
      },
    handler:getUp,
}

function fastRoute(fastify, op, next) {
  fastify.get("/fast", getFastOpt);
    // const fasts =  new Promise(resolve => setTimeout(resolve, 100));
    
  fastify.get("/fasts/:id", getIdOpt);
   // const fasts =  new Promise(resolve => setTimeout(resolve, 100));
  
   fastify.post("/fast",getPostOpt)

   fastify.put("/fast/:id",getPutOpt)

   fastify.delete("/fast/:id",delOpt)
  next();
}
module.exports = fastRoute;
