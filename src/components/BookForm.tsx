import React, { useState, useEffect } from "react";
import { Book } from "../types/book";

interface BookFormProps {
  onAdd: (book: Book) => void;
  editBookId: string | null;
  setEditBookId: React.Dispatch<React.SetStateAction<string | null>>;
  books: Book[];
}

const BookForm: React.FC<BookFormProps> = ({
  onAdd,
  editBookId,
  setEditBookId,
  books,
}) => {
  const [book, setBook] = useState<Book>({
    id: "",
    title: "",
    author: "",
    genre: "",
    price: 0,
  });

  useEffect(() => {
    if (editBookId) {
      const editingBook = books.find((b) => b.id === editBookId);
      if (editingBook) {
        setBook(editingBook);
      }
    }
  }, [editBookId, books]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(book);
    setBook({
      id: "",
      title: "",
      author: "",
      genre: "",
      price: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="text"
        name="genre"
        value={book.genre}
        onChange={handleChange}
        placeholder="Genre"
        required
      />
      <input
        type="number"
        name="price"
        value={book.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <button type="submit" className="submit-btn">{editBookId ? "Update" : "Add"} Book</button>
    </form>
  );
};

export default BookForm;
