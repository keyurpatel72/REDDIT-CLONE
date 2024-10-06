const mongoose = require('mongoose');

const SubredditSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },
    description: { type: String, required: true },
    createdBy : {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Subreddi',SubredditSchema);