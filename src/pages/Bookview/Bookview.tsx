import React, { useEffect, useState } from "react";
import "./Bookview.scss";
import Bookcard from "../../components/Bookcard/Bookcard";
import ProductImageHarryPotter4 from "../../images/HarryPotter4.jpg";
import ProductImageHarryPotter1 from "../../images/HarryPotterundderSteinderWeisen.jpeg";
import axios from "axios";
import { betterRequests } from "../../helpers/buchfixRequest";

function Bookview() {
  const [books, setBooks] = useState<Array<any>>([]);
  const getBooks = async () => {
    const books = await betterRequests
      .get(process.env.REACT_APP_API_URL + "/book/all")
      .catch((err) => {
        console.log(err);
      });
    if (books) setBooks(books.data);
    console.log(books);
  };

  useEffect(() => {
    getBooks();
    return () => {};
  }, []);
  return (
    <div className="bookview-wrapper">
      {books.map((book) => (
        <Bookcard
          image={process.env.REACT_APP_IMAGE_HOST + book.file_name}
          title={book.title}
          pages={book.pages}
        />
      ))}
    </div>
  );
}

export default Bookview;
