import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Donation.scss";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

function Donation() {
  const [bookname, setBookname] = useState<string>("");
  const [genre, setGenre] = useState<any>(null);
  const [ISBN, setISBN] = useState<string>("");
  const [pagenumber, setPagenumber] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const handleDonation = async () => {
    if (!bookname && !genre && !ISBN && !pagenumber && !quality)
      return setError(true);

    const donateRes: any = await axios.post(
      process.env.REACT_APP_API_URL + "authenticate/donation",
      {
        bookname: bookname,
        genre: genre,
        ISBN: ISBN,
        pagenumber: pagenumber,
        quality: quality,
      }
    );
  };
  return (
    <div className="donation-wrapper">
      <div className="card-wrapper">
        <h2 id="donatebooks">Bücher spenden</h2>

        <TextField
          className="textfield-donation"
          label="Buchname"
          required={true}
          onChange={(e) => {
            setError(false);
            // Daten in State speichern
            setBookname(e.target.value);
          }}
        ></TextField>
        <TextField
          className="textfield-donation"
          label="Genre"
          required={true}
          onChange={(e) => {
            setError(false);
            // DAten in State speichern
            setGenre(e.target.value);
          }}
        ></TextField>
        <TextField
          className="textfield-donation"
          label="ISBN"
          required={true}
          onChange={(e) => {
            setError(false);
            // DAten in State speichern
            setISBN(e.target.value);
          }}
        ></TextField>
        <TextField
          className="textfield-donation"
          label="Seitenanzahl"
          required={true}
          onChange={(e) => {
            setError(false);
            // DAten in State speichern
            setPagenumber(e.target.value);
          }}
        ></TextField>
        <TextField
          className="textfield-donation"
          label="Zustand"
          required={true}
          onChange={(e) => {
            setError(false);
            // DAten in State speichern
            setQuality(e.target.value);
          }}
        ></TextField>
        <Button
          variant="contained"
          id="btn-donatebook"
          onClick={handleDonation}
        >
          Buch spenden
        </Button>
      </div>
    </div>
  );
}

export default Donation;
