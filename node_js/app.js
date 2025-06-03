import express from "express";
import cors from "cors";
import router from "./ROUTES/routes.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router); // ✅ All product routes prefixed with /product
app.get("/",(req,res)=>{
  res.send("welcome")
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
