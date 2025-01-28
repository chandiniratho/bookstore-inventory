import React from "react";

interface FiltersProps {
  books: { id: string; title: string; author: string; genre: string; price: number }[];
  setFilteredBooks: React.Dispatch<React.SetStateAction<{ id: string; title: string; author: string; genre: string; price: number }[]>>;
}

const Filters: React.FC<FiltersProps> = ({ books, setFilteredBooks }) => {
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;

    if (filterValue === 'All') {
      setFilteredBooks(books); // Show all books
    } else {
      setFilteredBooks(books.filter((book) => book.genre === filterValue || book.author === filterValue));
    }
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter" className="filter-label">Filter by Genre or Author:</label>
      <select id="filter" onChange={handleFilter} className="filter-select">
        <option value="All">All</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Author 1">Author 1</option>
        <option value="Author 2">Author 2</option>
      </select>
    </div>
  );
};

export default Filters;
