import Video from "../models/Video";

// 남겨둔 callback
// Video.find({}, (error, videos) => {});

export const home = async(req, res) => {
  const videos = await Video.find({});
  return res.render("home", {pageTitle:"Home", videos });
};
export const see = async (req, res) => {
  const {id} = req.params;
  const video = await Video.findById(id);
  if (video === null){
    return res.render("404", {pageTitle:"Video not found"});
  }
  return res.render("watch", {pageTitle:video.title , video});
};
export const getEdit = async (req, res) => { 
  const {id} = req.params;
  const video = await Video.findById(id);
  if (!video){
    return res.render("404", {pageTitle:"Video not found"});
  }
  return res.render("edit", {pageTitle:`Editing ${video.title}`, video});
};
export const postEdit = async (req, res) => {
  const {id} = req.params;
  const {title, description, hashtags} = req.body;
  const video = await Video.exists({_id:id});
  if(!video){
    return res.render("404", {pageTitle:"Video not found."});
  }
  await Video.findByIdAndUpdate(id, {
    title, 
    description, 
    hashtags:hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`)),
  })
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", {pageTitle:"Upload Video"} );
}
export const postUpload = async (req, res) => {
  const {title, description, hashtags} = req.body;
  try{
    await Video.create ({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => (word.startWith("#") ? word :`#${word}`)),
    });
    return res.redirect("/");
  } catch(error) {
    console.log(error);
    return res.render("upload", {
      pageTitle:"Upload Video", 
      errorMessage: error._message,
    } );
  }
};
