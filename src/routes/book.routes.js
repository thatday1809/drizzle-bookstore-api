import express from "express";
const router = express.Router();

import { getAllBooks, createBook } from "../controllers/book.controller.js";

router.get("/books", getAllBooks).post("/books", createBook);

export default router;
