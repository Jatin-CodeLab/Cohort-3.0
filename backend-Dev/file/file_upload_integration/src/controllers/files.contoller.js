const create = (req, res) => {
	console.log("REQUEST AAYI");
	console.log(req.body);
	console.log(req.files);

	res.status(200).send("data mil gaya");
};

module.exports = create;
