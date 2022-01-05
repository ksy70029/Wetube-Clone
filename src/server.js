import express from "express";

const PORT = 4000;

// create application 
const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if(url === "/protected"){
    return res.send("<h1>Not Allowed</h1>")
  }
  console.log("Allowed, you may continue.")
  next();
}

const handleHome = (req, res) => {
  return res.send("<h1>I still love you!</h1>");
};

const handleLogin =(req, res) => {
  return res.send({ message: "Login here."});
}

const handleProtected = (req, res) =>{
  return res.send("Welcome to the private lounge");
}

app.use(gossipMiddleware);
app.use(privateMiddleware);
app.get("/", handleHome); 
app.get("/protected", handleProtected); 

app.get("/login", handleLogin); 


// listen to external connection (외부접속)
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
