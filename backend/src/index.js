import express from "express";
import cors from "cors";
import morgan from "morgan";
import movieRouter from "./routes/movieRouter.js";

const PORT = process.env.PORT || 4040;
const app = express();

app.use(cors());
app.use(morgan("dev"));

// Test-Get - works!
app.get("/", (req, res) => res.send("GET works!"));

app.use("/api/movielist", movieRouter);

app.listen(PORT, () => console.log("Server ready at port: ", PORT));
