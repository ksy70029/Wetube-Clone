import express from "express";
import morgan from "morgan";

const PORT = 4000;

// create application 
const app = express();
const logger = morgan("dev");
app.use(logger);

//create global router
const globalRouter = express.Router();
  //create controller
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

//create users router
const userRouter = express.Router();
  //create controller
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

//create videos router
const videoRouter = express.Router();
  //create controller
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

//create application to start server and to use routers
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// listen to external connection (외부접속)
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
