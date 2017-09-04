/**
 * Created by prguleri on 9/3/2017.
 */

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    text:{type:String,
    requires:true}
})

mongoose.model("todoList",todoSchema);