const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
   
    record:{
        type:String,
        default:''
    },
    type:{
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
    choice:{
        type:String,
        default:''
    },
    diagram:{
        type:String,
        default:''
    },
    comments:{
        type:String,
        default:''
    }
  
})

const Template = mongoose.model("Template", TemplateSchema);
module.exports = Template;
