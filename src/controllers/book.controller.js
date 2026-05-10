import { db } from "../db/index.js";
import { books } from "../db/schema.js";

/**
 * @route /api/v1/books
 * @desc GET ALL THE BOOKS FROM THE DATABASE
 * @access Public
 */
export const getAllBooks = async function (req, res) {
  try {
    const allBooks = await db.select().from(books);

    res.status(200).json({
      success: true,
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @route /api/v1/books
 * @desc POST ADD NEW BOOK TO THE DATABASE
 * @access Public
 */
export const createBook = async function (req, res) {
  try {
    const { title, author, price, stock } = req.body;

    const newBook = await db
      .insert(books)
      .values({ title, author, price, stock })
      .returning();

    res.status(201).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
