const mongoose = require('mongoose');


const apiSchema = new mongoose.Schema({
    apiName:{type:String, required: true},
    apiDescription:{type:String,required:true},
    apiImageUrl:{type:String,required:true},
    apiLink:{type:String,required:true},

},
{
    timestamps:true
});



const apiList = new mongoose.model("apiList",apiSchema);

module.exports = apiList;  