const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title : String , 
    description : String ,
    price : Number , 
    author : String , 
    image : String
});
var Book = mongoose.model('book' , bookSchema) , url="mongodb://localhost:27017/library";



exports.homeThreeBooks = (req,res,next)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
            return Book.find({}).limit(3)
        }).then(books=>{
            mongoose.disconnect();
            resolve(books);
        }).catch(err=>reject(err))
    })

}




// exports.getOneBookdetails = ()=>{
//      return new Promise((resolve, reject) => {
//        mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
//             return Book.find({})
//         }).then(books=>{
//             mongoose.disconnect();
//             resolve(books);
//         }).catch(err=>reject(err))
//     })

// }

exports.getAllBooks = (req,res,next)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true,}).then(()=>{
            return Book.find({})
        }).then(books=>{
            mongoose.disconnect();
            resolve(books);
        }).catch(err=>reject(err))
    })

}

exports.getabout = (req,res)=>{
    return new Promise((resolve, reject) => {
        mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true,}).then(()=>{
            return Book.find({})
        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))
    })
}
