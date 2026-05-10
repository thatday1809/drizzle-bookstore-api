import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),

  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),

  price: integer("price").notNull(),
  stock: integer("stock").notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});
