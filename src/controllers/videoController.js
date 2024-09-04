let videos = [
	{
		title: "First Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 0,
	},
	{
		title: "Video 2",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 1,
	},
	{
		title: "Video 3",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 2,
	},
];

export const trending = (req, res) => {
	return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
	const { id } = req.params;
	const video = videos[id];
	return res.render("watch", { pageTitle: `Watch Video ${video.title}`, video });
};
export const getEdit = (req, res) => {
	const { id } = req.params;
	const video = videos[id];
	return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
	console.log(req.params);
	res.send("Delete Video");
};
