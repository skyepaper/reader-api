const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
   
    id:{
        type:String,
        default:''
    },
    type:{
        type:String,
        default:''
    },
    sub_type:{
        type:String,
        default:''
    },
    segment:{
        type:String,
        default:''
    },
    fragment:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    code:{
        type:String,
        default:''
    },
  
})

const Record = mongoose.model("Record", RecordSchema);
module.exports = Record;
