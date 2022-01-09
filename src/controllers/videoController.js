export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  res.send(`<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>See video</h1></body></html>`);
}
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit Video");
}
export const search = (req, res) => res.send("Search Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");