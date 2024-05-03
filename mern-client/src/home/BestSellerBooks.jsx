import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/all-books").then(res=>res.json()).then(data => setBooks(data.slice(0, 5)));
    })

  return (
    <div>
        <BookCards books={books} headline="Best Seller"/>
    </div>
  )
}

export default BestSellerBooks