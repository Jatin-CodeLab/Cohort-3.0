import mongoose from "mongoose";

const userschema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 15,
	},
	email: {
		type: String,
		required: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
});

const userModel = mongoose.model("user", userschema)

export default userModel