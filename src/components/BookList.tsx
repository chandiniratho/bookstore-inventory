import React from "react";
import { Book } from "../types/book";

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <p>{book.price}</p>
          <button onClick={() => onEdit(book.id)} className="edit-btn">Edit</button>
          <button onClick={() => onDelete(book.id)} className="delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
