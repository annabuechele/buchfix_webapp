import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "./Donation.scss";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { betterRequests } from "../../helpers/buchfixRequest";
import { MenuItem } from "@material-ui/core";
import * as base from "base-64";

function Donation() {
  const [bookname, setBookname] = useState<string>("");
  const [genre, setGenre] = useState<any>(null);
  const [listGenre, setListGenre] = useState<Array<any>>([]);
  const [listFormat, setListFormat] = useState<Array<any>>([]);
  const [ISBN, setISBN] = useState<string>("");
  const [pagenumber, setPagenumber] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const [image, setImage] = useState<any>(null);

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      if (fileReader !== null) {
        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      }
    });
  };

  const handleDonation = async () => {
    if (!bookname || !genre || !ISBN || !pagenumber || !format)
      return setError(true);

    console.log(convertBase64(image));
    const donateRes: any = await betterRequests.post(
      process.env.REACT_APP_API_URL + "/book/new",
      {
        book: {
          isbn: ISBN,
          format: format,
          genre: genre,
          sites: pagenumber,
          title: bookname,
        },
        base64: await convertBase64(image),
      }
    );
  };

  const getGenres = async () => {
    betterRequests
      .get(process.env.REACT_APP_API_URL + "/book/genres")
      .then((data) => {
        setListGenre(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFormats = async () => {
    betterRequests
      .get(process.env.REACT_APP_API_URL + "/book/formats")
      .then((data) => {
        setListFormat(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //ausgeführt nach dem Rendern --> useEffect
  useEffect(() => {
    if (!genre || !format) {
      getGenres();
      getFormats();
    }
  }, []);
  return (
    <div className="donation-wrapper">
      <div className="card-wrapper">
        <h2 id="donatebooks">Bücher spenden</h2>

        <TextField
          style={{ width: "20%" }}
          className="textfield-donation"
          label="Buchname"
          required={true}
          error={error}
          onChange={(e) => {
            setError(false);
            // Daten in State speichern
            setBookname(e.target.value);
          }}
        ></TextField>

        <TextField
          style={{ width: "20%" }}
          id="´select-genre-id"
          select
          label="Genre auswählen"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          {listGenre.map((item) => (
            <MenuItem key={item.genre_name} value={item.genre_name}>
              {item.genre_name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          style={{ width: "20%" }}
          id="select-format-id"
          select
          label="Format auswählren"
          value={format}
          onChange={(e) => {
            setFormat(e.target.value);
          }}
        >
          {listFormat.map((item) => (
            <MenuItem key={item.format_name} value={item.format_name}>
              {item.format_name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ width: "20%" }}
          className="textfield-donation"
          label="ISBN"
          required={true}
          error={error}
          onChange={(e) => {
            setError(false);
            // DAten in State speichern
            setISBN(e.target.value);
          }}
        ></TextField>

        <TextField
          style={{ width: "20%" }}
          className="textfield-donation"
          label="Seitenanzahl"
          required={true}
          error={error}
          onChange={(e) => {
            setError(false);
            // DAten in State speichern
            setPagenumber(e.target.value);
          }}
        ></TextField>

        <input
          type="file"
          name=""
          id=""
          accept="png"
          onChange={(e: any) => {
            setImage(e.target.files[0]);
          }}
        />
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
