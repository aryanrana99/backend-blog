const mongoose  = require("mongoose");

const postScheme = new mongoose.SchemaType(
    {
        title : {
            required : true,
            type : String
        },
        author : {
            required : true,
            type : String
        },
        content : {
            required : true,
            type : String
        }
        
    }
)

module.exports = mongoose.model('Post',postSchema)