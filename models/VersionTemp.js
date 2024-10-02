const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VersionTempSchema = new Schema({
   
    record:{
        type:String,
        default:''
    },
    temp:{
        type:String,
        default:''
    },
    filled:{
        type:String,
        default:''
    },
    correct:{
        type:String,
        default:''
    }
})

const VersionTemp = mongoose.model("VersionTemp", VersionTempSchema);
module.exports = VersionTemp;
