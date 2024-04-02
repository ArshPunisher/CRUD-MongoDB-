const {Schema, model} = require('mongoose')

const customerSchema = new Schema({
  firstname:{
    type: String,
  },
  lastname:{
    type: String,
  },
  email:{
    type: String,
    unique: true,
    required: true,
  },
  textarea:{
    type: String,
  },
  gender:{
    type: String,
  }
},{timestamps:true})

module.exports = model('customer', customerSchema);