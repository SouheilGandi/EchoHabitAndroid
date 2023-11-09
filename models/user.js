
import mongoose from "mongoose";
const {Schema,model} = mongoose ;

const UserSchema = new Schema(
{
    email : {
        type :String,
        required : true
    },
    name : {
        type :String,
        required : true
    },
    password : {
        type :String,
        required : true
    },
    last_name : {
        type :String,
        required : true
    },
    phone : {
        type :Number,
        required : true
    },
    dateOfBirth : {
        type :Date,
        required : true
    },
},
{
    timestamps:true //Ajout auto createdAT and updatedAt
}
);

export default model("User",UserSchema);