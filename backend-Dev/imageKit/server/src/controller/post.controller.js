import postModel from "../module/post.module.js";
import sendFile from "../services/storage.services.js";

export const createPost = async (req, res) => {
try {
const { caption } = req.body;
const file = req.file;


    console.log("Caption:", caption);
    console.log("File:", file);

    const uploadImg = await sendFile(
        file.buffer,
        file.originalname
    );

    const post = await postModel.create({
        caption,
        image: uploadImg.url
    });

    return res.status(201).json({
        message: "Post created successfully",
        post
    });

} catch (error) {
    console.error(error);

    return res.status(500).json({
        message: "Something went wrong"
    });
}


};


export const getAllPost = async (req, res) => {
	try {
		const post = await postModel.find();

		return res.status(200).json({
			success: true,
			message: "Posts fetched successfully",
			post,
		});
	} catch (error) {
		console.error(error);

		return res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
};




