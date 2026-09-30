const mongoose = require("mongoose");

const connectDb = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://jatinpfrontend_db_user:madhav12188@cluster-0.4qzaty4.mongodb.net/",
		);
		console.log("mongoDB is Connected !");
	} catch (error) {
		console.log("errrrrroooooor", error);
	}
};

module.exports = connectDb