const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ViewPDFSchema = new Schema({
   
    number:{
        type:String,
        default:''
    },
    url:{
        type:String,
        default:''
    }
  
})

const ViewPDF = mongoose.model("ViewPDF", ViewPDFSchema);
module.exports = ViewPDF;
