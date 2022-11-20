const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getDate(){
    const date = new Date();
    return (`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
  }

const PostSchema = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true,},
        author: {type: Schema.Types.ObjectId, ref: 'User'},
        dateCreated: {type: Date, default: getDate()},
        dateCompleted: {type: Date, default: ''},
        completed: {type: Boolean, default: false}
    }
);

//Export model
module.exports = mongoose.model('Post', PostSchema);
