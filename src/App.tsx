import React, { useState } from "react";
import { Book } from "./types/book";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Filters from "./components/Filters";
import './styling.css'; // Include the styling

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [editBookId, setEditBookId] = useState<string | null>(null);

  const addBook = (newBook: Book) => {
    if (editBookId) {
      setBooks(books.map((book) => (book.id === editBookId ? { ...book, ...newBook } : book)));
      setFilteredBooks(books.map((book) => (book.id === editBookId ? { ...book, ...newBook } : book)));
      setEditBookId(null);
    } else {
      const newBookWithId = { ...newBook, id: new Date().toString() };
      setBooks([...books, newBookWithId]);
      setFilteredBooks([...filteredBooks, newBookWithId]);
    }
  };

  const deleteBook = (id: string) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  const editBook = (id: string) => {
    setEditBookId(id);
  };

  return (
    <div className="app-container">
      <BookForm
        onAdd={addBook}
        editBookId={editBookId}
        setEditBookId={setEditBookId}
        books={books}
      />
      <Filters books={books} setFilteredBooks={setFilteredBooks} />
      <BookList
        books={filteredBooks.length ? filteredBooks : books}
        onDelete={deleteBook}
        onEdit={editBook}
      />
    </div>
  );
};

export default App;
