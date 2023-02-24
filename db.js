const mongoose=require('mongoose')
mongoose.set('strictQuery', true);


mongoose.connect('mongodb://127.0.0.1:27017/STUDENTDB',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}, function (err) {
    if (err) {
        console.log('Mongo Error ' + err);
    } else {
    
        console.log('MongoDB Connection Established');
    }
})

const Product = mongoose.model('Product',{
    name:String,
    description:String,
    mrp:Number,
    discount:Number,
    shippingcharge:Number


})

module.exports={Product}