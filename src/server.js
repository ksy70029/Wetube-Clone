import express from "express";
import morgan from "morgan";

const PORT = 4000;

// create application 
const app = express();
const logger = morgan("dev");

const Home = (req, res) => {
  return res.send("<h1>I still love you!</h1>");
};

app.use(logger);
app.get("/", Home); 

// listen to external connection (외부접속)
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
