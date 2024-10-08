/* eslint-disable consistent-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("war");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    if (search === "") return;

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Entrez le titre d'un film "
            id="search-input"
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top
          </div>

          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average; // Tri du meilleur au pire
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average; // Tri du pire au meilleur
            }
            return 0;
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default Form;
