const db = require('./db')

const addproduct = (name,description,mrp,discount,shippingcharge)=>{
    return db.Product.findOne({name,description})
    .then(result=>{
        if(result){
            return{
                statuscode:400,
                status:false,
                message:"this product already exists"
            }
        }
        else{
            const newproduct = new db.Product({
                "name":name,
                "description":description,
                "mrp":mrp,
                "discount":discount,
                "shippingcharge":shippingcharge
            })
            newproduct.save()
            return{
                statuscode:200,
                status:true,
                message:"new product added succesfully"
            }
        }
    })
}

const productdetails  = ()=>{
    return db.Product.find()
    .then(result=>{
        if(result){
            return{
                statuscode:200,
                status:true,
                result:result
            }
        }
    })
}

const deleteproduct = (_id)=>{
    return db.Product.deleteOne({_id})
    .then(user=>{
        if(!user){
            return{
              statuscode:400,
              status:false,
              message:"operation failed"
            }
          }
          else{
            return{
              statuscode:200,
              status:true,
              message:`Product  is successfully deleted`
            }
          }
    })
}

const updateproduct=(name,description,mrp,discount,)=>{
    return db.Student.findOne({name})
    .then(result=>{
        if(result){
            result.description=newdescription
            result.name=newname
            result.mrp=newmrp
            result.shippingcharge=newshippingcharge
            result.save()
            return{
                statuscode:200,
                status:true,
                result,
                message:"updated successfully",

            } 
        }
        else{
            return{
                statuscode:400,
                status:false,
                message:"cannot update"
            }
        }
    })



}

module.exports={addproduct, productdetails,deleteproduct,updateproduct}