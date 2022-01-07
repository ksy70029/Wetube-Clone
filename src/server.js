import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

// create application 
const app = express();
const logger = morgan("dev");
app.use(logger);

//create application to start server and to use routers
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// listen to external connection (외부접속)
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
