import express from "express";
import cors from "cors";
import router from "./ROUTES/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router); // ✅ All product routes prefixed with /product

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
