import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

//Routing
app.use("/api", indexRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando el puerto ${port}`);
});
