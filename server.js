const express=require('express')
const cors = require('cors')
const ds= require('./dataservice')


const app=express()
app.use(express.json())


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin:'http://localhost:4200'
}))

app.post('/addproduct',(req,res)=>{
    return ds.addproduct(req.body.name,req.body.description,req.body.mrp,req.body.discount,req.body.shippingcharge)
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })   
})

app.get('/productdetails',(req,res)=>{
    return ds.productdetails()
    .then(user=>{
        if(user){
            res.status(user.statuscode).json(user)
        }
    })
})

app.delete('/deleteproduct/:_id',(req,res)=>{
    return ds.deleteproduct(req.params._id)
    .then(result=>{
        if(result){
            res.status(result.statuscode).json(result)
        }
    })
})

app.put("/updateproduct",(req,res)=>{
    return ds.updateproduct(req.body.name,req.body.price,req.body.mrp,req.body.discount,req.body.shippingcharge)
    .then(result=>{
        if(result){
            res.status(result.statuscode).json(result)
        }
    })
})





app.listen(3000,()=>{
    console.log("Server listening to port number 3000")
})