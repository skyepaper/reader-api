const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
   
    number:{
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
    }
  
})

const Record = mongoose.model("Record", RecordSchema);
module.exports = Record;
