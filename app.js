import express from "express";
import "dotenv/config";
const PORT = process.env.PORT;
const BASE_URL = "/api/v1/";
import bookRoutes from "./src/routes/book.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1", bookRoutes);

app.listen(PORT, function () {
  console.log(`Http server is up and runing on PORT: ${PORT}`);
});
