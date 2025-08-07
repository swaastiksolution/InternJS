import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    /* in documentations its written as 
        username: String,
        email: String,
        pasword: String
    */

    // this is better approach - we define the field and its related properties like Datatype, constraints, etc
    username: {
        type: String,
        required: true,
        unique: true,
        //lowercase: true  there multiple such properties refer documentation for them, we will cover the most commonly used ones
    },
    email: {
        type: String,
        required: [true, "email is a required field"], // using this approach we can also give custom messages incase of validation errors
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        // custom validators you can even create your own custom logic
        min: [6, "passwords should have minimum of 6 characters"],
        max: [14, "passwords must not exceed 14 charcters"]
    }
}, { timestamps: true });

// when its collection is made in database its will be renamed to "users"
export const User = mongoose.model("User", userSchema);