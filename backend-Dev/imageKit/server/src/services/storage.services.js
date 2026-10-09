import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const storageInstance = new ImageKit({
	urlEndpoint: process.env.IK_URI,
	publicKey: process.env.IK_PUBLIC_KEY,
	privateKey: process.env.IK_PRIVATE_KEY,
});

const sendFile = async (file, fileName) => {
	return await storageInstance.upload({
		file,
		fileName,
		folder: "cohort-3",
	});
};

export default sendFile;