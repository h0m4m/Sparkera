import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
        /^(?=.{6,30}$)(?!\.)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*$/,
        "Username invalid, it should be 6-30 characters long, contain alphanumeric characters and periods, but cannot start or end with a period, and cannot have consecutive periods.",
      ]
  },
  image: {
    type: String,

  }
});

const User = models.User || model("User", UserSchema);

export default User;